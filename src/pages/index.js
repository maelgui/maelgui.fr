import React, { useState, useRef } from "react";
import { graphql } from 'gatsby'
import Helmet from "react-helmet";
import Particles from "react-particles-js";

import particles from "../assets/particles.json";
import About from "../components/about";
import Links from "../components/links";
import * as styles from './index.module.scss';
import Toggle from "../components/toggle";


const IndexPage = ({data}) => {
  const [theme, setTheme] = useState('light');
  const rootRef = useRef(null);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeChanged(mq);
    mq.addEventListener('change', colorSchemeChanged);
    return () => {
      mq.removeEventListener('change', colorSchemeChanged);
    };
  }, []);

  const colorSchemeChanged = (mq) => {
    setTheme(mq.matches ? 'dark' : 'light')
  };

  const modeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const getColor = () => {
    return theme === 'dark' ? 'hsl(0, 0%, 100%)' : 'hsl(211, 100%, 50%)';
  };

  



  return (
    <div ref={rootRef} data-theme={theme}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Particles params={{...particles, particles: {...particles.particles, color: {value: getColor()} } }} className={styles.particles} />
      <Toggle onClick={modeToggle} theme={theme}/>
      <div className={styles.container}>
        <div className={styles.content}>
          <About/>
          <Links/>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
