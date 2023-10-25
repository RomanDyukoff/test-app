import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';
import { BannerPropType, TextsType } from './Banner.type';
import qr from '../../assets/qr-code.png'

import './style.css';

const TEXTS: TextsType = {
  title: 'исполните мечту вашего малыша! подарите ему собаку!',
  label: 'Сканируйте QR-код или нажмите ОК',
  button: 'ok'
};

export const Banner: React.FC<BannerPropType> = React.memo(({ position, top, right, bottom, left }) => {
  return (
    <article className='banner' style={
      {
        position: position || "static",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        transform: position ? "translate(0px, -50%)" : ""
      }}>
      <h3 className='banner__title'>
        {TEXTS.title}
      </h3>
      <img src={qr} alt='QR' />
      <span className='banner__label'>
        {TEXTS.label}
      </span>
      <Link className='banner__button' to={ROUTES.PROMOPAGE}>
        <span>{TEXTS.button}</span>
      </Link>
    </article>
  )
})
