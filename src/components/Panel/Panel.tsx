import { useState } from 'react';
import { Keypad } from '../Keypad/Keypad';
import './style.css';

const textContent = {
    title: 'Введите ваш номер мобильного телефона',
    text: 'и с Вами свяжется наш менеждер для дальнейшей консультации',
}

export const Panel = () => {
    const [state, setState] = useState('');

    const handleButtonClick = (value: string) => {
        if (value === 'Стереть') {
            setState(prevInput => prevInput.slice(0, -1));
        } else if (value !== 'Стереть') {
            setState(prevInput => prevInput + value);
        }
    };


    console.log(state);


    return (
        <aside className='panel'>
            <h2 className='panel__title'>{textContent.title}</h2>
            <div className='panel__number'>+7(_ _ _)_ _ _ - _ _ - _ _</div>
            <p className='panel__text'>{textContent.text}</p>
            <Keypad handleButtonClick={handleButtonClick} />
        </aside>
    )
}
