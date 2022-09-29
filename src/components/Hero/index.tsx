import { images } from '../../constants';

import styles from './styles.module.scss';

export function Hero(){
  return(
    <div id="hero" className={styles.heroContainer}>
      <div className="container">
        <h1 className={styles.heading}>We are creatives</h1>
    
        <img src={images.arrowDown} alt="" />
      </div>
    </div>
  )
}