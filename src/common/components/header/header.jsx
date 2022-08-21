import style from './header.module.scss'
import Logo from "../../../assets/image/Logo.png"
import burger from "../../../assets/icon/burger.svg"
import {useEffect, useState} from "react";
import {Switcher} from "../switcher/switcher";

export const Header = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div className={style.header}>
            <img src={Logo} alt="Logo"/>
            <div className={style.logo}></div>
            <div className={style.links_block}>
                <a className={style.link}>О компании</a>
                <a className={style.link}>Услуги</a>
                <a className={style.link}>Вакансии</a>
                <a className={style.link}>Новости</a>
                <a className={style.link}>Школа</a>
                <a className={style.link}>Контакты</a>
            </div>
            <div className={style.button_block}>
                <div className={style.switchers_block}>
                    <div className={style.hide_button}>
                        <Switcher name={['RU', 'EN']}/>
                    </div>

                    <Switcher name={['L', 'N']}/>
                </div>
                <button className={style.menu_button}><img src={burger} alt="Кнопка"/></button>
            </div>
        </div>

    )
}