import style from './offers.module.scss'
import {Offer} from "./offer/offer";


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
    )
}