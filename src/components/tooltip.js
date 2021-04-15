import React from "react"
import * as styles from "./tooltip.module.scss";

const Tooltip = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.children}
            <span className={styles.tooltip}>{props.help}</span>
        </div>
    )
}

export default Tooltip
