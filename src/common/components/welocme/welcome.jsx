import style from './welcome.module.scss'
import technologiStack from "../../../assets/image/technologiStack.png"

export const Welcome = () => {
    return (<div className={style.content}>
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
        <div className={style.scroller}>
123123
        </div>
        </div>)
}