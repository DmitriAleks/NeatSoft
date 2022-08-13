import {Header} from "../../common/components/header/header";
import style from './main.module.scss'
import {Welcome} from "../../common/components/welocme/welcome";


export const Main = () => {

    return (<div className={style.container}>
        <Header/>
        <Welcome/>
    </div>)

}