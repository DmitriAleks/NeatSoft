import { Header } from '../../common/components/header/Header';
import style from './Main.module.scss';
import { Welcome } from '../../common/components/welocme/Welcome';
import { Offers } from '../../common/components/offers/Offers';
import { StickyMenu } from './components/StickyMenu';
import { Services } from '../../common/components/services/Services';
import { TechnicalExpertise } from '../../common/components/technicalExpertise/TechnicalExpertise';

export const Main = () => {
    return (
        <section className={style.container}>
            <Header />
            <Welcome />
            <Offers />
            <div className={style.split_block}>
                <div className={style.sticky_menu}>
                    <StickyMenu />
                </div>
                <div>
                    <Services />
                    <TechnicalExpertise />
                </div>
            </div>
        </section>
    );
};
