import React from 'react';
import cn from 'classnames';
import { Droppable } from 'react-beautiful-dnd';
import style from './CardItem.module.scss';

const Card = ({ title, droppableId, children }) => (
  <div className={style.root}>
    <span className={style.weekDay}>{title}</span>
    <div className={style.container}>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className={style.contentContainer}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  </div>
);

export default Card;
