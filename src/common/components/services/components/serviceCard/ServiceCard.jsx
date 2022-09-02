import style from './ServiceCard.module.scss';

export const ServiceCard = ({ logo, title, description }) => {
    return (
        <section className={style.content}>
            <img src={logo} alt="NeatSoft logo" className={style.icon} />
            <h4 className={style.title}>{title}</h4>
            <p className={style.description}>{description}</p>
        </section>
    );
};
