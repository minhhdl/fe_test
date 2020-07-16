import React from 'react';
import cn from 'classnames';
import style from './Card.module.scss';

const Card = ({ title, children }) => (
  <div className={style.root}>
    <div className={style.cardHeader}>
      <span className={style.title}>{title}</span>
      <i className="fa fa-ellipsis-h" />
    </div>
    <div className={style.cardBody}>{children}</div>
    <div className={style.cardFooter}>
      <i className="fa fa-plus-circle" />
    </div>
  </div>
);

export default Card;
