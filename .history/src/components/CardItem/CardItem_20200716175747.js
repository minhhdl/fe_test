import React from 'react';
import style from './CardItem.module.scss';

const Carditem = ({ title, sets, setsDetail }) => (
  <div className={style.root}>
    <div className={style.cardHeader}>
      <span className={style.title}>{title}</span>
    </div>
    <div className={style.cardBody}>
      <span className={style.sets}>{sets}</span>
      <span className={style.setsDetail}>{setsDetail}</span>
    </div>
  </div>
);

export default Carditem;
