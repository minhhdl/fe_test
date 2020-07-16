import React from 'react';
import moment from 'moment';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';
import style from './App.module.scss';

const data = {
  '2020-07-14': {
    
  }
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
