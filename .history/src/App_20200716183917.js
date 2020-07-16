import React from 'react';
import moment from 'moment';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import List from './components/List';
import Card from './components/Card';
import CardItem from './components/CardItem';
import getWeekDays from './utils/getWeekDays';
import getRandomChar from './utils/getRandomChar';
import generateSafeId from './utils/generateSafeId';
import initData from './utils/initData';
import style from './App.module.scss';

/**
 * Rearrange workout cards in a day
 */
const rearrange = (data, index, startIndex, endIndex) => {
  const date = Object.keys(data)[index];
  const result = Array.from(data[date]);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return { ...data, [date]: [...result] };
};

/**
 * Move workout cards between different days
 */
const move = (
  data,
  source,
  destination,
  droppableSource,
  droppableDestination,
) => {
  const sourceDate = Object.keys(data)[source];
  const destinationDate = Object.keys(data)[destination];
  const sourceClone = Array.from(data[sourceDate]);
  const destClone = Array.from(data[destinationDate]);

  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[sourceDate] = sourceClone;
  result[destinationDate] = destClone;

  return { ...data, ...result };
};

function App() {
  const weekDays = getWeekDays();
  const initialData = initData(weekDays);
  const [data, setData] = React.useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);

    if (!destination) {
      return;
    }

    const sourceIndex = +source.droppableId;
    const destinationIndex = +destination.droppableId;

    if (sourceIndex === destinationIndex) {
      const newData = rearrange(
        data,
        sourceIndex,
        source.index,
        destination.index,
      );
      setData(newData);
    } else {
      const newData = move(
        data,
        sourceIndex,
        destinationIndex,
        source,
        destination,
      );
      setData(newData);
    }
  };

  const handleAddExercise = (date, workoutId) => {
    const char = getRandomChar();
    const newExercise = {
      id: generateSafeId(),
      title: `Exercise ${char}`,
      sets: 1,
      setsDetail: '50 lb x 5',
    };
    const workouts = Array.from(data[date]);
    const workout = workouts.find((item) => item.id === workoutId);
    console.log(workout);
    workout.excercises.push(newExercise);
    setData({ ...data, [date]: workouts });
  };

  return (
    <div className={style.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        {weekDays.map((day, index) => {
          const date = day.format('YYYY-MM-DD');
          return (
            <div key={`list-${index}`} className={style.listItem}>
              <List
                weekDayTitle={day.format('ddd')}
                monthDayTitle={day.date()}
                isCurrentDay={moment()
                  .hour(0)
                  .minute(0)
                  .second(0)
                  .millisecond(0)
                  .isSame(day)}
                droppableId={`${index}`}
              >
                {data[date].map((item, itemIndex) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={itemIndex}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          title={item.title}
                          onAddClick={() => handleAddExercise(date, item.id)}
                        >
                          {item.exercises.map((exercise) => (
                            <CardItem
                              key={exercise.id}
                              title={exercise.title}
                              sets={exercise.sets}
                              setsDetail={exercise.setsDetail}
                            />
                          ))}
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
              </List>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
