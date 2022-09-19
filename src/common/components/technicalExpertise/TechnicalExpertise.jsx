import style from './TechnicalExpertise.module.scss';
import { TechnicalCard } from './components/technicalCard/TechnicalCard';
import { technicalExpertiseData } from './technicalExpertiseData';


export const TechnicalExpertise = () => {
    return (
        <section className={style.content} id='technology'>
            <h3 className={style.hide}>Технологии</h3>
            <h4 className={style.title}>Техническая экспертиза</h4>
            <p className={style.description}>
                Наши ведущие разработчики имеют огромный практический опыт. Они
                внесли свой вклад во всемирно известные компании и проекты с
                открытым исходным кодом.
            </p>
            <div className={style.card_block}>
                {technicalExpertiseData.map((el) => (
                    <TechnicalCard logo={el.logo} title={el.title} color={el.color}/>
                ))}
            </div>
        </section>
    );
};
