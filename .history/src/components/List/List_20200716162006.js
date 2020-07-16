import React from 'react';
import cn from 'classnames';
import style from './List.module.scss';

const List = ({ weekDayTitle, monthDayTitle, isCurrentDay, children }) => (
  <div className={style.root}>
    <span className={style.weekDay}>{weekDayTitle}</span>
    <div className={style.container}>
      <span className={cn(style.monthDay, isCurrentDay && style.current)}>
        {monthDayTitle}
      </span>
      {children}
    </div>
  </div>
);

export default List;
