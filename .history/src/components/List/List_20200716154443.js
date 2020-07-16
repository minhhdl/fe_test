import React from 'react';
import style from './List.module.scss';

const List = ({ date }) => (
  <div className={style.root}>
    <span>{date.format('ddd')}</span>
  </div>
);

export default List;
