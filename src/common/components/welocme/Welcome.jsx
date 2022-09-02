import style from './Welcome.module.scss';
import technologyStack from '../../../assets/image/technologiStack.png';
import { arrIcons } from './welcomeData';

export const Welcome = () => {
    return (
        <div className={style.content}>
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
                    <img className={style.icon} src={el.icon} alt={el.name} />
                ))}
            </div>
        </div>
    );
};
