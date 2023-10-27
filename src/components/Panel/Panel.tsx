import { useCallback, useEffect, useState } from 'react';
import { Keypad } from '../Keypad/Keypad';
import { Checkbox } from '../Checkbox/Checkbox';
import { TEXTS_PANEL } from '../../constants/constants';

import './style.css';
import { DisableType, PanelPropType } from './Panel.type';

export const Panel = ({ refEnter }: PanelPropType) => {
    const [state, setState] = useState<string[]>([]);
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [isDisable, setIsDisable] = useState<DisableType>({ checkBox: false, num: false });
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    useEffect(() => {
        setIsDisable({ checkBox: isCheck, num: (state.length === 10) });
    }, [isCheck, state]);

    const formatNumber = (numbers: string[]) => {
        return numbers.reduce(
            (format, number) => format.replace('_', number),
            '+7(___)___-__-__');
    };

    const handleButtonClick = useCallback((value: string) => {
        if (value === 'Стереть') {
            setState(prevInput => prevInput.slice(0, -1));
        }
        else {
            if (state.length <= 9) {
                setState(prevInput => [...prevInput, value]);
            }
        }
    }, [state.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheck(e.target.checked);
    };

    return (
        <aside className={`panel ${isSubmit && 'panel-end'}`}>
            {
                isSubmit ?
                    (
                        <>
                            <h2 className='panel__title'>Заявка принята</h2>
                            <p className='panel__text'>Держите телефон под рукой. <br />Скоро с Вами свяжется наш менеджер. </p>
                        </>
                    ) :
                    (<div className="panel__content">
                        <h2 className='panel__title'>{TEXTS_PANEL.title}</h2>
                        <div className='panel__number'>{formatNumber(state)}</div>
                        <p className='panel__text'>{TEXTS_PANEL.text}</p>
                        <Keypad className='panel__keypad' handleButtonClick={handleButtonClick} />
                        <Checkbox handleChange={handleInputChange} isCheck={isCheck} text={TEXTS_PANEL.label} />
                        <button
                            ref={refEnter}
                            className='panel__button'
                            disabled={!(isDisable.checkBox && isDisable.num)}
                            onClick={() => setIsSubmit(true)}
                        >
                            <span>{TEXTS_PANEL.button}</span>
                        </button>
                    </div>)
            }
        </aside>
    )
}
