import style from './header.module.scss'
import logo from "../../../assets/image/logo.svg"
import burger from "../../../assets/icon/burger.svg"
import {useEffect, useState} from "react";
import {Switcher} from "../switcher/switcher";


const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export const Header = () => {
    const [theme, setTheme] = useState(LIGHT_THEME);
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
    }
    const arrLinks = [
        {name: 'О компании'},
        {name: 'Услуги'},
        {name: 'Вакансии'},
        {name: 'Новости'},
        {name: 'Школа'},
        {name: 'Контакты'}
    ]

    return (
        <div className={style.header}>
           <img src={logo} alt="Logo"/>
            <div className={style.links_block}>
                {arrLinks.map(el=> <a className={style.link}>{el.name}</a>)}
            </div>
            <div className={style.button_block}>
                <div className={style.switchers_block}>
                    <Switcher className={style.header_switcher} name={['RU', 'EN']} toggleTheme={()=>{}}/>
                    <Switcher name={['L', 'N']} toggleTheme={toggleTheme}/>
                </div>
                <button className={style.menu_button}><img src={burger} alt="Кнопка"/></button>
            </div>
        </div>

    )
}