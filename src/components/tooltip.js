import React from "react"
import * as styles from "./tooltip.module.scss";

const Tooltip = (props) => {
    return (
        <span className={styles.wrapper}>
            {props.children}
            <span className={styles.tooltip} data-position={props.position}>{props.help}</span>
        </span>
    )
}

export default Tooltip
