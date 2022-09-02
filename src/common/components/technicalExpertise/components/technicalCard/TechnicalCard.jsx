import style from './TechnicalCard.module.scss';

export const TechnicalCard = ({ logo, name }) => {
    return (
        <div className={style.content}>
            <div className={style.block}>
                <img src={logo} alt="NeatSoft logo" />
            </div>
            <p className={style.name}>{name}</p>
        </div>
    );
};
