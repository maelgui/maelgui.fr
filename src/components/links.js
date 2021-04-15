import * as React from "react"
import * as styles from "./links.module.scss";
import { FaLinkedin, FaAt, FaGithub } from "react-icons/fa";

const Links = () => {
    return (
        <div className={styles.links}>
            <a href="https://www.linkedin.com/in/mael-guillossou/" aria-label="Linkedin"><FaLinkedin/></a>
            <a href="https://github.com/maelgui" aria-label="Github"><FaGithub/></a>
            <a href="mailto:contact@maelgui.fr" aria-label="E-Mail"><FaAt/></a>
        </div>
    )
}

export default Links
