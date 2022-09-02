import {Header} from "../../common/components/header/header";
import style from './main.module.scss'
import {Welcome} from "../../common/components/welocme/welcome";
import {Offers} from "../../common/components/offers/offers";


export const Main = () => {

    return (
        <div className={style.container}>
        <Header/>
        <Welcome/>
        <Offers/>
    </div>)

}