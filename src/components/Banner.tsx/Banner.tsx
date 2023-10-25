import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, TEXTS_BANNER } from '../../constants/constants';
import { BannerPropType } from './Banner.type';
import qr from '../../assets/qr-code.png'

import './style.css';

export const Banner: React.FC<BannerPropType> = React.memo(({ position, top, right, bottom, left }) => {
  return (
    <article className='banner' style={
      {
        position: position || 'static',
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        transform: position ? 'translate(0px, -50%)' : '',
      }}>
      <h3 className='banner__title'>
        {TEXTS_BANNER.title}
      </h3>
      <img src={qr} alt='QR' />
      <span className='banner__label'>
        {TEXTS_BANNER.label}
      </span>
      <Link className='banner__button' to={ROUTES.PROMOPAGE}>
        <span>{TEXTS_BANNER.button}</span>
      </Link>
    </article>
  )
})
