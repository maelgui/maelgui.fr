import React from "react"
import * as styles from "./toggle.module.scss";
import { BiSun, BiMoon } from "react-icons/bi";
import Tooltip from "./tooltip";


const Toggle = (props) => {
    return (
        <button className={styles.toggle} onClick={props.onClick}>
            <Tooltip position="left" help="Toggle dark mode">
                {props.theme === 'light' ? <BiMoon/> : <BiSun/>}
            </Tooltip>
        </button>
    )
}

export default Toggle
