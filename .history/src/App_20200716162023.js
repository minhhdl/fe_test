import React from 'react';
import moment from 'moment';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';
import style from './App.module.scss';

function App() {
  const weekDays = getWeekDays();
  return (
    <div className={style.root}>
      <DragDropContext>
        {weekDays.map((day) => (
          <div className={style.listItem}>
            <List
              weekDayTitle={day.format('ddd')}
              monthDayTitle={day.date()}
              isCurrentDay={moment()
                .hour(0)
                .minute(0)
                .second(0)
                .millisecond(0)
                .isSame(day)}
            ></List>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
