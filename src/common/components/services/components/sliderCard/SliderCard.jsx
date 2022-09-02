import { useEffect, useState } from 'react';
import style from './SliderCard.module.scss';
import logo from '../../../../../assets/icon/miniLogo.svg';
import arrow from '../../../../../assets/icon/littleArrow.svg';

const STEP_NEXT = 'next'
const STEP_BACK = 'back'

export const SliderCard = ({ arrCard }) => {
    const [selected, setSelected] = useState(0);
    const [currentService, setCurrentService] = useState(arrCard[0]);
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
                <img src={logo} alt="NeatSoft logo" />
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
                    <img src={arrow} alt="arrow-left" />
                </button>
                {arrCard.map((el, index) => (
                    <div
                        className={`${style.circle} ${
                            selected === index ? style.selected : ''
                        }`}
                        onClick={()=>{
                            setSelected(index)
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
                    <img src={arrow} alt="arrow-right" />
                </button>
            </div>
        </div>
    );
};
