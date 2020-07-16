import React from 'react';
import style from './CardItem.module.scss';

const Carditem = ({ title, sets, setsDetail }) => (
  <div className={style.root}>
    <span className={style.sets}>{`${sets}x`}</span>
    <div className={style.info}>
      <span className={style.title}>{title}</span>
      <span className={style.setsDetail}>{setsDetail}</span>
    </div>
  </div>
);

export default Carditem;
