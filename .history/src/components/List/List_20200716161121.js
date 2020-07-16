import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import style from './List.module.scss';

const List = ({ weekDayTitle, monthDayTitle }) => (
  <div className={style.root}>
    <span className={style.weekDay}>{weekDayTitle}</span>
    <div className={style.container}>
      <span className={style.monthDay}>{monthDayTitle}</span>
    </div>
  </div>
);

export default List;
