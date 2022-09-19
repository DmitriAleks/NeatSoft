import { useContext } from 'react';
import style from './Offer.module.scss';
import { ThemeContext } from '../../../../App';
import { LIGHT_THEME } from '../../../constants/constants';
import { ReactComponent as Arrow } from '../../../../assets/icon/arrow.svg';


export const Offer = ({
                          descriptionPathOne,
                          descriptionPathTwo,
                          descriptionPathThree,
                      }) => {
    const themeControl = useContext(ThemeContext);
    return (
        <div
            className={` ${style.card_block} ${
                themeControl.themeName === LIGHT_THEME ? '' : style.dark_theme
            }`}
        >
            <span>{descriptionPathOne}</span>
            <span className={style.text}>{descriptionPathTwo}</span>
            <span>{descriptionPathThree}</span>
            <div className={style.footer_card}>
                <span className={style.hide_text}>Поброднее</span>
                <Arrow
                    fill={
                        themeControl.themeName === LIGHT_THEME
                            ? '#4C5EFE'
                            : '#ececec'
                    }
                />
            </div>
        </div>
    );
};
