import {Link} from "react-scroll";
import { arrLinks } from './StickyMenuData';
import style from './StickyMenu.module.scss';

export const StickyMenu = () => {
    return (
        <section className={style.content}>
            {arrLinks.map((el) => (
                <Link key={el.id}
                      className={style.link}
                      href={el.link}
                      activeClass={style.active}
                      to={el.name}
                      spy
                      smooth
                      offset={0}
                      duration={500}
                >
                    {el.title}
                </Link>
            ))}
        </section>
    );
};
