import { KeyButtonType } from './KeyButton.type';
import './style.css';

export const KeyButton = ({ className, value, onClick }: KeyButtonType) => {
    return (
        <button
            className={`key-button ${className}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

