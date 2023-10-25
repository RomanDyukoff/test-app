import { KeyButtonType } from './KeyButton.type';
import './style.css';

export const KeyButton = ({ value, onClick }: KeyButtonType) => {
    return (
        <button
            className='key-button'
            onClick={onClick}
        >
            {value}
        </button>
    )
}

