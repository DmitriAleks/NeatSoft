import { arrLinks } from './StickyMenuData';
import style from './StickyMenu.module.scss';

export const StickyMenu = () => {
    return (
        <section className={style.content}>
            <h4 className={style.selected_link}>Услуги</h4>
            {arrLinks.map((el) => (
                <a key={el.id} className={style.link} href={el.link}>
                    {el.name}{' '}
                </a>
            ))}
        </section>
    );
};
