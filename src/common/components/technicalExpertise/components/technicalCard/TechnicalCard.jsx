import style from './TechnicalCard.module.scss';
import {Icon} from "../../../icon/Icon";

export const TechnicalCard = ({ logo, title, color }) => {

    return (
        <div className={style.content}>
            <div className={style.block}>
              <Icon logo={logo} color={color}/>
            </div>
            <p className={style.name}>{title}</p>
        </div>
    );
};
