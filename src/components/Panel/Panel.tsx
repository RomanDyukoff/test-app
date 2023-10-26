import { useEffect, useState } from 'react';
import { Keypad } from '../Keypad/Keypad';
import { Checkbox } from '../Checkbox/Checkbox';

import './style.css';

const textContent = {
    title: 'Введите ваш номер мобильного телефона',
    text: 'и с Вами свяжется наш менеждер для дальнейшей консультации',
    label: 'Согласие на обработку персональных данных',
    button: 'Подтвердить номер',
}

interface DisableType {
    checkBox: boolean;
    num: boolean;
}

export const Panel = () => {
    const [state, setState] = useState<string[]>([]);
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [isDisable, setIsDisable] = useState<DisableType>({ checkBox: isCheck, num: (state.length === 9) });

    useEffect(() => {
        setIsDisable({ checkBox: isCheck, num: (state.length === 10) });
    }, [isCheck, state]);

    const formatNumber = (numbers: string[]) => {
        let format = '+7(___)___-__-__';
        for (let i = 0; i < numbers.length; i++) {
            format = format.replace('_', numbers[i]);
        }
        return format;
    };

    const handleButtonClick = (value: string) => {
        if (value === 'Стереть') {
            setState(prevInput => prevInput.slice(0, -1));
        }
        else {
            if (state.length <= 9) {
                setState(prevInput => [...prevInput, value]);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCheck(e.target.checked);
    };

    const checkBothTrue = (obj: DisableType) => {
        return obj.checkBox && obj.num;
    }

    return (
        <aside className='panel'>
            <div className="panel__content">
                <h2 className='panel__title'>{textContent.title}</h2>
                <div className='panel__number'>{formatNumber(state)}</div>
                <p className='panel__text'>{textContent.text}</p>
                <Keypad className='panel__keypad' handleButtonClick={handleButtonClick} />
                <Checkbox handleChange={handleInputChange} isCheck={isCheck} text={textContent.label} />
                <button className='panel__button' disabled={!checkBothTrue(isDisable)}>
                    <span>{textContent.button}</span>
                </button>
            </div>
        </aside>
    )
}
