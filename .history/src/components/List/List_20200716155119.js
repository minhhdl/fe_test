import React from 'react';
import style from './List.module.scss';

const List = ({ weekDayTitle, monthDayTitle }) => (
  <div className={style.root}>
    <span className={style.weekDay}>{weekDayTitle}</span>
    <div className={style.listContainer}>
      <span className={style.monthDay}>{monthDayTitle}</span>
    </div>
  </div>
);

export default List;
