import { React, useContext, useEffect, useState } from 'react';
import style from './Header.module.scss';
import logo from '../../../assets/image/logo.svg';
import darkLogo from '../../../assets/image/darkLogo.svg';
import { Switcher } from '../switcher/Switcher';
import { arrHeaderLinks } from './headerData';
import { ThemeContext } from '../../../App';
import { ReactComponent as Burger } from '../../../assets/icon/burger.svg';
import {
    DATA_THEME,
    ENGLISH_LANGUAGE,
    LIGHT_THEME,
    NIGHT_THEME,
    RUSSIAN_LANGUAGE,
    STORAGE_THEME_KEY,
} from '../../constants/constants';

export const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_THEME_KEY, LIGHT_THEME) || LIGHT_THEME
    );
    const themeControl = useContext(ThemeContext);
    useEffect(() => {
        document.body.setAttribute(DATA_THEME, theme);
    }, [theme]);
    const toggleTheme = () => {
        const selectedTheme = theme === LIGHT_THEME ? NIGHT_THEME : LIGHT_THEME;
        localStorage.setItem(STORAGE_THEME_KEY, selectedTheme);
        setTheme(selectedTheme);
        themeControl.changeTheme(selectedTheme);
    };

    return (
        <header className={style.header}>
            <img
                src={themeControl.themeName === LIGHT_THEME ? logo : darkLogo}
                alt="NeatSoft logo"
            />
            <div className={style.links_block}>
                {arrHeaderLinks.map((el) => (
                    <a key={el.id} className={style.link} href={el.link}>
                        {el.name}
                    </a>
                ))}
            </div>
            <div className={style.button_block}>
                <div className={style.switchers_block}>
                    <Switcher
                        className={style.header_switcher}
                        buttonName={[RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE]}
                        toggleAction={() => {}}
                    />
                    <Switcher
                        buttonName={[LIGHT_THEME, NIGHT_THEME]}
                        toggleAction={toggleTheme}
                        startPosition={theme === LIGHT_THEME}
                    />
                </div>
                <button type="button" className={style.menu_button}>
                  <Burger fill={ themeControl.themeName === LIGHT_THEME ? '#0F1333' : '#999999'}/>
                </button>
            </div>
        </header>
    );
};
