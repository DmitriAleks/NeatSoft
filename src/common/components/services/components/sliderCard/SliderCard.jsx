import { useContext, useEffect, useState } from 'react';
import style from './SliderCard.module.scss';
import logo from '../../../../../assets/icon/miniLogo.svg';
import { ReactComponent as LittleArrow } from '../../../../../assets/icon/littleArrow.svg';
import darkLogo from '../../../../../assets/icon/miniDarkLogo.svg';
import { ThemeContext } from '../../../../../App';
import {
    LIGHT_THEME,
    STEP_BACK,
    STEP_NEXT,
} from '../../../../constants/constants';

export const SliderCard = ({ arrCard }) => {
    const [selected, setSelected] = useState(0);
    const [currentService, setCurrentService] = useState(arrCard[0]);
    const themeControl = useContext(ThemeContext);
    useEffect(() => {
        setCurrentService(arrCard[selected]);
    }, [selected]);
    const changeSelected = (where) => {
        if (where === STEP_BACK) {
            if (selected === 0) {
                setSelected(5);
                return;
            }
            setSelected(selected - 1);
        }
        if (where === STEP_NEXT) {
            if (selected === 5) {
                setSelected(0);
                return;
            }
            setSelected(selected + 1);
        }
    };
    return (
        <div className={style.content}>
            <div className={style.header}>
                <img
                    src={
                        themeControl.themeName === LIGHT_THEME ? logo : darkLogo
                    }
                    alt="NeatSoft logo"
                />
                <span className={style.title}> {currentService.title}</span>
            </div>
            <p className={style.description}>{currentService.description}</p>
            <div className={style.switcher}>
                <button
                    type="button"
                    className={style.button}
                    onClick={() => {
                        changeSelected(STEP_BACK);
                    }}
                >
                   <LittleArrow fill={ themeControl.themeName === LIGHT_THEME ? '#4C5EFE' : '#68f7c3'}/>
                </button>
                {arrCard.map((el, index) => (
                    <div
                        className={`${style.circle} ${
                            selected === index ? style.selected : ''
                        }`}
                        onClick={() => {
                            setSelected(index);
                        }}
                    ></div>
                ))}
                <button
                    type="button"
                    className={`${style.button} ${style.button_reverse}`}
                    onClick={() => {
                        changeSelected(STEP_NEXT);
                    }}
                >
                    <LittleArrow fill={ themeControl.themeName === LIGHT_THEME ? '#4C5EFE' : '#68f7c3'} />
                </button>
            </div>
        </div>
    );
};
