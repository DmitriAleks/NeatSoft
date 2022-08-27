import style from './offer.module.scss'
import arrow from '../../../../assets/icon/arrow.svg'

export const Offer = ({descriptionPathOne, descriptionPathTwo, descriptionPathThree}) => {
    return (
        <div className={style.card_block}>
            <span>
                 {descriptionPathOne}
            </span>
            <span className={style.text}>
                 {descriptionPathTwo}
            </span>
            <span>
                 {descriptionPathThree}
            </span>
            <div className={style.footer_card}>
                <span className={style.hide_text}>Поброднее</span>
                <img src={arrow} alt=""/>
            </div>

        </div>
    )
}