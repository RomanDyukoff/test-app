import { useEffect } from 'react';
import { KEYBOARD_NUM } from '../../constants/constants';
import { KeyButton } from '../KeyButton/KeyButton';
import { KeypadProps } from './Keypad.type';

import './style.css';

export const Keypad = ({ className, handleButtonClick }: KeypadProps) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key >= '0' && e.key <= '9') {
                handleButtonClick(e.key);
            } else if (e.key === 'Backspace') {
                handleButtonClick('Стереть');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleButtonClick]);

    return (

        <div className={`keypad ${className}`}>
            {KEYBOARD_NUM.map((value) => (
                <KeyButton key={value} className='keypad__button' value={value} onClick={() => handleButtonClick(value)} />
            ))}
        </div>
    );
};


