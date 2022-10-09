import { images } from "../../constants";
import { Logo } from "../Logo";

import styles from './styles.module.scss';

export function Footer(){
  return(
    <footer className={styles.footer}>
      <div>
        <Logo color="var(--clr-primary-cyan-450)" />
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
      <ul aria-label="Social links">
        <li>
          <a aria-label="facebook" href="#">
            <svg>
              <use xlinkHref={`${images.socialLinks}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a aria-label="instagram" href="#">
            <svg>
              <use xlinkHref={`${images.socialLinks}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a aria-label="twitter" href="#">
            <svg>
              <use xlinkHref={`${images.socialLinks}#icon-twitter`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a aria-label="pinterest" href="#">
            <svg>
              <use xlinkHref={`${images.socialLinks}#icon-pinterest`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  )
}