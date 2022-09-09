import style from './TechnicalExpertise.module.scss';
import { TechnicalCard } from './components/technicalCard/TechnicalCard';
import { technicalExpertiseData } from './technicalExpertiseData';
import reactIcon from '../../../assets/icon/react.svg';

export const TechnicalExpertise = () => {
    return (
        <div className={style.content}>
            <h3 className={style.hide}>Технологии</h3>
            <h4 className={style.title}>Техническая экспертиза</h4>
            <p className={style.description}>
                Наши ведущие разработчики имеют огромный практический опыт. Они
                внесли свой вклад во всемирно известные компании и проекты с
                открытым исходным кодом.
            </p>
            <div className={style.card_block}>
                {technicalExpertiseData.map((el) => (
                    <TechnicalCard logo={reactIcon} name={el.name} />
                ))}
            </div>
        </div>
    );
};
