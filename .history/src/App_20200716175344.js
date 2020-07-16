import React from 'react';
import moment from 'moment';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './components/List';
import Card from './components/Card';
import getWeekDays from './utils/getWeekDays';
import initData from './utils/initData';
import style from './App.module.scss';

/**
 * Rearrange workout card in a day
 */
const reorder = (data, index, startIndex, endIndex) => {
  const date = Object.keys(data)[index];
  const result = Array.from(data[date]);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return { ...data, [date]: [...result] };
};

/**
 * Rearrange workout card between different days
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
      const newData = reorder(
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

  return (
    <div className={style.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        {weekDays.map((day, index) => (
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
              {data[day.format('YYYY-MM-DD')].map((item, itemIndex) => (
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
                      <Card title={item.title}></Card>
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
