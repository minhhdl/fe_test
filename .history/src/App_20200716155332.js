import React from 'react';
import moment from 'moment';
import List from './components/List';
import getWeekDays from './utils/getWeekDays';
import style from './App.module.scss';

function App() {
  const weekDays = getWeekDays();
  return (
    <div className={style.root}>
      {weekDays.map((day) => (
        <List
          weekDayTitle={day.format('ddd')}
          monthDayTitle={day.date()}
        ></List>
      ))}
    </div>
  );
}

export default App;
