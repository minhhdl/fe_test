import React from 'react';
import cn from 'classnames';
import { Droppable } from 'react-beautiful-dnd';
import style from './Card.module.scss';

const Card = ({ title, children }) => (
  <div className={style.root}>
    <span className={style.title}>{title}</span>
    <div className={style.container}>{children}</div>
  </div>
);

export default Card;
