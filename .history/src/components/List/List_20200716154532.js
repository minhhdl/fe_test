import React from 'react';
import style from './List.module.scss';

const List = ({ date }) => (
  <div className={style.root}>
    <span className={style.weekDay}>{date.format('ddd')}</span>
    <div>
      <span className={style.monthDay}>{date.format('ddd')}</span>
    </div>
  </div>
);

export default List;
