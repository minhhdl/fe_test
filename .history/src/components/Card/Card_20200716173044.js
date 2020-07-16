import React from 'react';
import cn from 'classnames';
import style from './Card.module.scss';

const Card = ({ title, children }) => (
  <div className={style.root}>
    <div className={style.cardHeader}>
      <span className={style.title}>{title}</span>
    </div>
    <div className={style.cardBody}>{children}</div>
  </div>
);

export default Card;
