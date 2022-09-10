import style from './Welcome.module.scss';
import technologyStack from '../../../assets/image/technologiStack.png';
import { arrIcons } from './welcomeData';
import {Icon} from "../icon/Icon";

export const Welcome = () => {
    return (
        <section className={style.content}>
            <div className={style.greetings}>
                <h1 className={style.title}>
                    Ваш IT-отдел
                    <p className={style.blue_title}>на аутсорсе.</p>
                </h1>
                <span className={style.description}>
                    NeatSoft — команда опытных разработчиков и менеджеров,
                    готовых создать идеальное программное решение для вашего
                    проекта.
                </span>
            </div>
            <div className={style.technology_stack}>
                <img src={technologyStack} alt="Technology stack" />
            </div>
            <div className={style.carousel_wrapper}>
                {arrIcons.map((el) => (
                    <div className={style.icon}>
                        <Icon style={{  padding: '0 20px'}} logo={el.name}/>
                    </div>
                ))}
            </div>
        </section>
    );
};
