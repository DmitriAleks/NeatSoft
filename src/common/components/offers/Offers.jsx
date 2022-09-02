import style from './Offers.module.scss';
import { Offer } from './offer/Offer';

export const Offers = () => {
    return (
        <div className={style.content}>
            <Offer
                descriptionPathOne="Разрабатываем"
                descriptionPathTwo="софт и приложения"
                descriptionPathThree="для бизнеса."
            />
            <Offer
                descriptionPathOne="Аутстаффим"
                descriptionPathTwo=" разработчиков"
                descriptionPathThree="от уровня middle."
            />
        </div>
    );
};
