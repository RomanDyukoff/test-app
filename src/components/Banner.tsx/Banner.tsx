import qr from '../../assets/qr-code.png'

import './style.css';

export const Banner = () => {
  return (
    <div className='banner'>
      <h3 className='banner__title'>
        исполните мечту вашего малыша! <br /> подарите ему собаку!
      </h3>
      <img src={qr} alt='QR' />
      <span className='banner__label'>
        Сканируйте QR-код <br />
        или нажмите ОК
      </span>
      <button className='banner__button'>
        <span>ok</span>
      </button>
    </div>
  )
}
