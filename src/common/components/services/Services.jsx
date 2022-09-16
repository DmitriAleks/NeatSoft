import { useContext } from 'react';
import style from './Services.module.scss';
import { ServiceCard } from './components/serviceCard/ServiceCard';
import logo from '../../../assets/icon/miniLogo.svg';
import { arrServicesCard } from './serviceData';
import { SliderCard } from './components/sliderCard/SliderCard';
import { ThemeContext } from '../../../App';
import darkLogo from '../../../assets/icon/miniDarkLogo.svg';
import { LIGHT_THEME } from '../../constants/constants';

export const Services = () => {
    const themeControl = useContext(ThemeContext);

    return (
        <section className={style.content} id="service">
            <h3 className={style.title}>Услуги</h3>
            <div className={style.hide_block}>
                {arrServicesCard.map((el) => (
                    <ServiceCard
                        key={el.id}
                        logo={
                            themeControl.themeName === LIGHT_THEME
                                ? logo
                                : darkLogo
                        }
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
