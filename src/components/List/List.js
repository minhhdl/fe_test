import React from 'react';
import cn from 'classnames';
import { Droppable } from 'react-beautiful-dnd';
import style from './List.module.scss';

const List = ({
  weekDayTitle,
  monthDayTitle,
  isCurrentDay,
  droppableId,
  children,
}) => (
  <div className={style.root}>
    <span className={style.weekDay}>{weekDayTitle}</span>
    <div className={style.container}>
      <span className={cn(style.monthDay, isCurrentDay && style.current)}>
        {monthDayTitle}
      </span>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className={cn(
              style.contentContainer,
              snapshot.isDraggingOver && style.dragging,
            )}
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

export default List;
