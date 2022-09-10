import style from './Services.module.scss';
import { ServiceCard } from './components/serviceCard/ServiceCard';
import logo from '../../../assets/icon/miniLogo.svg';
import { arrServicesCard } from './serviceData';
import { SliderCard } from './components/sliderCard/SliderCard';

export const Services = () => {
    return (
        <section className={style.content} id='service'>
            <h3 className={style.title}>Услуги</h3>
            <div className={style.hide_block}>
                {arrServicesCard.map((el) => (
                    <ServiceCard
                        key={el.id}
                        logo={logo}
                        description={el.description}
                        title={el.title}
                    />
                ))}
            </div>
            <div className={style.slider_block}>
                <SliderCard arrCard={arrServicesCard} />
            </div>
        </section>
    );
};
