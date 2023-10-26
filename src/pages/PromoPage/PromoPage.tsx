import { Link } from 'react-router-dom';
import { Panel } from '../../components/Panel/Panel';
import { ROUTES } from '../../constants/constants';

import './style.css';

export const PromoPage = () => {
    return (
        <section className="promo-page">
            <Panel />
            <Link className='promo-page__close' to={ROUTES.HOMEPAGE}>&#10006;</Link>
        </section>
    )
}
