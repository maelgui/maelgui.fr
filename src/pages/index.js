import { graphql } from 'gatsby'
import Helmet from "react-helmet";
import Particles from "react-particles-js";

import particles from "../assets/particles.json";
import About from "../components/about";
import Links from "../components/links";
import * as styles from './index.module.scss';


const IndexPage = () => {
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', setColor);
    setColor();
    return () => {
      mq.removeEventListener('change', setColor);
    };
  }, []);

  const setColor = () => {
    _setColor(getComputedStyle(document.documentElement).getPropertyValue('--particles-color').trim());
  };

  const [color, _setColor] = useState(0);


  return (
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
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
