import { KeyButton } from '../KeyButton/KeyButton';
import { KeypadProps } from './Keypad.type';

import './style.css';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Стереть', '0']

export const Keypad = ({ handleButtonClick }: KeypadProps) => {
    return (

        <div className="keypad">
            {keys.map((value) => (
                <KeyButton key={value} value={value} onClick={() => handleButtonClick(value)} />
            ))}
        </div>
    );
};


