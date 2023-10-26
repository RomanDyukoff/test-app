import { KEYBOARD_NUM } from '../../constants/constants';
import { KeyButton } from '../KeyButton/KeyButton';
import { KeypadProps } from './Keypad.type';

import './style.css';

export const Keypad = ({ className, handleButtonClick }: KeypadProps) => {
    return (

        <div className={`keypad ${className}`}>
            {KEYBOARD_NUM.map((value) => (
                <KeyButton key={value} className='keypad__button' value={value} onClick={() => handleButtonClick(value)} />
            ))}
        </div>
    );
};


