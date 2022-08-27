import style from './welcome.module.scss'
import technologyStack from "../../../assets/image/technologiStack.png"
import jsIcon from '../../../assets/icon/js.svg'
import angularIcon from '../../../assets/icon/angular.svg'
import yii2Icon from '../../../assets/icon/yll2.svg'
import linuxIcon from '../../../assets/icon/linux.svg'
import nestJSIcon from '../../../assets/icon/nestJS.svg'
import dockerIcon from '../../../assets/icon/docer.svg'

export const Welcome = () => {
    const arrIcons = [
        {name: jsIcon},
        {name: dockerIcon},
        {name: nestJSIcon},
        {name: linuxIcon},
        {name: angularIcon},
        {name: yii2Icon},

    ]

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
                <img src={technologyStack} alt=""/>
            </div>
        <div className={style.carousel_wrapper}>
            {arrIcons.map(el=>  <img className={style.icon} src={el.name} alt="JS"/>)}
        </div>
        </div>)
}