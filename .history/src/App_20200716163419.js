import React from 'react';
import moment from 'moment';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';
import generateSafeId from './utils/generateSafeId';
import style from './App.module.scss';

const data = {
  '2020-07-14': [
    {
      id: generateSafeId(),
      title: 'Chest Day - with Arm exercises',
      exercises: [
        {
          id: generateSafeId(),
          title: 'Bench Press Medium Grip',
          sets: '50 lb x 5, 60 lb x 5, 70 lb x 5',
        },
      ],
    },
  ],
};

function App() {
  const weekDays = getWeekDays();
  return (
    <div className={style.root}>
      <DragDropContext>
        {weekDays.map((day, index) => (
          <Droppable key={`list-${index}`} droppableId={index}>
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
                ></List>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
