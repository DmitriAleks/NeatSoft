import style from './welcome.module.scss'
import technologiStack from "../../../assets/image/technologiStack.png"
import jsIcon from '../../../assets/icon/JS.svg'
import angularIcon from '../../../assets/icon/Angular.svg'
import yii2Icon from '../../../assets/icon/Yll2.svg'
import linuxIcon from '../../../assets/icon/Linux.svg'
import nestJSIcon from '../../../assets/icon/NestJS.svg'
import docerIcon from '../../../assets/icon/Docer.svg'

export const Welcome = () => {
    return (
        <div className={style.content}>
            <div className={style.greetings}>
                <h1 className={style.title}>Ваш IT-отдел
                    <p className={style.blue_title}>
                        на аутсорсе.
                    </p>
                </h1>
                <span className={style.description}>
                    NeatSoft — команда опытных разработчиков
и менеджеров, готовых создать идеальное программное решение для вашего проекта.
                </span>
            </div>
            <div className={style.tecnologi_stack}>
                <img src={technologiStack} alt=""/>
            </div>
        <div className={style.carousel_wrapper}>
            <img className={style.icon} src={jsIcon} alt="JS"/>
            <img className={style.icon} src={docerIcon} alt="Docer"/>
            <img className={style.icon} src={nestJSIcon} alt="nestJS"/>
            <img className={style.icon} src={linuxIcon} alt="Linux"/>
            <img className={style.icon} src={angularIcon} alt="Angular"/>
            <img className={style.icon} src={yii2Icon} alt="YII2"/>
            <img className={style.icon} src={jsIcon} alt="JS"/>
            <img className={style.icon} src={docerIcon} alt="Docer"/>
            <img className={style.icon} src={angularIcon} alt="Angular"/>
            <img className={style.icon} src={yii2Icon} alt="YII2"/>
            <img className={style.icon} src={jsIcon} alt="JS"/>
            <img className={style.icon} src={docerIcon} alt="Docer"/>
        </div>
        </div>)
}