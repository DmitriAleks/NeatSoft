import style from './header.module.scss'
import Logo from "../../../assets/image/Logo.png"
import burger from "../../../assets/icon/burger.svg"

export const Header = () => {
    return(
        <div className={style.header}>
            <img src={Logo} alt="Logo"/>
            <div className={style.logo}></div>
                <div className={style.links_block}>
                    <a className={style.link}>О компании</a>
                    <a className={style.link}>Услуги</a>
                    <a className={style.link}>Вакансии</a>
                    <a className={style.link}>Новости</a>
                    <a className={style.link} >Школа</a>
                    <a className={style.link}>Контакты</a>
                </div>
                <div className={style.switchers_block}></div>
                <button className={style.menu_button}><img src={burger} alt="Кнопка"/> </button>
        </div>
    )
}