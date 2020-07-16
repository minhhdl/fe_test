import React from 'react';
import style from './CardItem.module.scss';

const Carditem = ({ title, children }) => (
  <div className={style.root}>
    <div className={style.cardHeader}>
      <span className={style.title}>{title}</span>
    </div>
    <div className={style.cardBody}>{children}</div>
  </div>
);

export default Carditem;
