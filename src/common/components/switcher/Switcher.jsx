import { useEffect, useState } from 'react';
import style from './Switcher.module.scss';

export const Switcher = ({ name, toggleTheme, className }) => {
    const LEFT_PART_BUTTON = 'left';
    const RIGHT_PART_BUTTON = 'right';
    const [selected, setSelected] = useState('left');
    useEffect(() => {
        document.body.setAttribute('data-theme', selected);
    }, [selected]);

    return (
        <div className={`${style.block} ${className}`}>
            <div
                className={`${style.side} ${
                    LEFT_PART_BUTTON === selected ? style.active : ''
                }`}
                onClick={() => {
                    setSelected(LEFT_PART_BUTTON);
                    if (selected !== LEFT_PART_BUTTON) {
                        toggleTheme();
                    }
                }}
            >
                {name[0]}
            </div>
            <div
                className={`${style.side} ${
                    RIGHT_PART_BUTTON === selected ? style.active : ''
                }`}
                onClick={() => {
                    setSelected(RIGHT_PART_BUTTON);
                    if (selected !== RIGHT_PART_BUTTON) {
                        toggleTheme();
                    }
                }}
            >
                {name[1]}
            </div>
        </div>
    );
};
