import { useState } from 'react';
import style from './Switcher.module.scss';
import {
    LEFT_PART_SWITCHER_BUTTON,
    RIGHT_PART_SWITCHER_BUTTON,
} from '../../constants/constants';

export const Switcher = ({ buttonName, toggleAction, className, startPosition }) => {
    const [selected, setSelected] = useState(
        startPosition ? LEFT_PART_SWITCHER_BUTTON : RIGHT_PART_SWITCHER_BUTTON
    );

    return (
        <div className={`${style.block} ${className}`}>
            <div
                className={`${style.side} ${
                    LEFT_PART_SWITCHER_BUTTON === selected ? style.active : ''
                }`}
                onClick={() => {
                    setSelected(LEFT_PART_SWITCHER_BUTTON);
                    if (selected !== LEFT_PART_SWITCHER_BUTTON) {
                        toggleAction();
                    }
                }}
            >
                {buttonName[0]}
            </div>
            <div
                className={`${style.side} ${
                    RIGHT_PART_SWITCHER_BUTTON === selected ? style.active : ''
                }`}
                onClick={() => {
                    setSelected(RIGHT_PART_SWITCHER_BUTTON);
                    if (selected !== RIGHT_PART_SWITCHER_BUTTON) {
                        toggleAction();
                    }
                }}
            >
                {buttonName[1]}
            </div>
        </div>
    );
};
