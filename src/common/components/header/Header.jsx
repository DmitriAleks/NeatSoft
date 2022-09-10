import { useEffect, useState } from 'react';
import style from './Header.module.scss';
import logo from '../../../assets/image/logo.svg';
import burger from '../../../assets/icon/burger.svg';
import { Switcher } from '../switcher/Switcher';
import { arrHeaderLinks } from './headerData';

const LIGHT_THEME = 'L';
const NIGHT_THEME = 'N';

const ENGLISH_LANGUAGE = 'EN'
const RUSSIAN_LANGUAGE = 'RU'

export const Header = () => {
    const [theme, setTheme] = useState(LIGHT_THEME);
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === LIGHT_THEME ? NIGHT_THEME : LIGHT_THEME);
    };

    return (
        <header className={style.header}>
            <img src={logo} alt="NeatSoft logo" />
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
                        name={[RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE]}
                        toggleTheme={() => {}}
                    />
                    <Switcher name={[LIGHT_THEME, NIGHT_THEME]} toggleTheme={toggleTheme} />
                </div>
                <button type="button" className={style.menu_button}>
                    <img src={burger} alt="Кнопка меню" />
                </button>
            </div>
        </header>
    );
};
