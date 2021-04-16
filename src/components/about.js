import * as React from "react"

import * as styles from "./about.module.scss";
import Tooltip from "./tooltip";

const About = () => {
    return (
        <div>
            <h1 className={styles.title}>Mael Guillossou</h1>
            <div className={styles.headline}>I'm a Cyber Security Engineer at <Tooltip help="Hire me!" position="top">___</Tooltip>. </div>
        </div>
    )
}

export default About
