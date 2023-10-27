import { Link } from 'react-router-dom';
import { Panel } from '../../components/Panel/Panel';
import { ROUTES } from '../../constants/constants';
import { useEffect, useRef } from 'react';

import './style.css';

export const PromoPage = () => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const keyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                linkRef.current?.focus();
            }
            if (e.key === 'ArrowLeft') {
                buttonRef.current?.focus();
            }
        }

        window.addEventListener('keydown', keyPress);

        return () => window.removeEventListener('keydown', keyPress);
    }, [])

    return (
        <section className="promo-page">
            <Panel refEnter={buttonRef} />
            <Link ref={linkRef} className='promo-page__close' to={ROUTES.HOMEPAGE}>&#10006;</Link>
        </section>
    )
}
