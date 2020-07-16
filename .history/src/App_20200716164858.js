import React from 'react';
import moment from 'moment';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';
import initData from './utils/initData';
import style from './App.module.scss';

// fake data generator
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

function App() {
  const weekDays = getWeekDays();
  const initialData = initData(weekDays);
  const [data] = React.useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);
    // dropped outside the list
    // if (!destination) {
    //   return;
    // }
    // const sInd = +source.droppableId;
    // const dInd = +destination.droppableId;

    // if (sInd === dInd) {
    //   const items = reorder(state[sInd], source.index, destination.index);
    //   const newState = [...state];
    //   newState[sInd] = items;
    //   setState(newState);
    // } else {
    //   const result = move(state[sInd], state[dInd], source, destination);
    //   const newState = [...state];
    //   newState[sInd] = result[sInd];
    //   newState[dInd] = result[dInd];

    //   setState(newState.filter(group => group.length));
    // }
  };

  return (
    <div className={style.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        {weekDays.map((day, index) => (
          <Droppable key={`list-${index}`} droppableId={`${index}`}>
            {(provided, snapshot) => (
              <div
                className={style.listItem}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <List
                  weekDayTitle={day.format('ddd')}
                  monthDayTitle={day.date()}
                  isCurrentDay={moment()
                    .hour(0)
                    .minute(0)
                    .second(0)
                    .millisecond(0)
                    .isSame(day)}
                  isDragging={snapshot.isDraggingOver}
                >
                  {data[day.format('YYYY-MM-DD')].map((item, itemIndex) => (
                    <Draggable
                      key={item.id}
                      draggableId={`${itemIndex}`}
                      index={`${itemIndex}`}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
