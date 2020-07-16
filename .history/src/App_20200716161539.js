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
      {weekDays.map((day) => (
        <div className={style.listItem}>
          <List
            weekDayTitle={day.format('ddd')}
            monthDayTitle={day.date()}
            isCurrentDay={moment().isSame(day, 'year month day')}
          ></List>
        </div>
      ))}
    </div>
  );
}

export default App;
