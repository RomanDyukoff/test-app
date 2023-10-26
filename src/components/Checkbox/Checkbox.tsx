import { CheckboxPropType } from './Checkbox.type';

import './style.css';

export const Checkbox = ({ handleChange, isCheck, text }: CheckboxPropType): JSX.Element => {
    return (
        <label className='checkbox__label'>
            <input
                className='checkbox__checkbox'
                type="checkbox"
                checked={isCheck}
                onChange={(e) => handleChange(e)}
            />
            <span>{text}</span>
        </label>
    )
}
