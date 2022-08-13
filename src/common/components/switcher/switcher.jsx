import style from './switcher.module.scss'
import {useEffect, useState} from "react";

export const Switcher = ({name}) => {
    const [selected, setSelected] = useState('left')
    useEffect(() => {
        console.log("left" === selected)
    }, [selected])


    return (
        <div className={style.block}>
            <div className={"left" === selected ? "active" : ""}
                 onClick={() => {
                     setSelected('left')
                 }
                 }>{name[0]}</div>
            <div className={"right" === selected ? "active" : ""}
                 onClick={() => {
                     setSelected('right')
                 }
                 }
            >{name[1]}</div>
        </div>
    )

}