import { useState } from 'react';
import { links, images } from '../../constants'

import styles from './styles.module.scss';

export function Header(){
  const [isNavOpen, setIsNavOpen] = useState(false);

  return(
    <div className="container">
      <header className={styles.header}>
        <img src={images.logo} alt="Sunnyside" />
        <nav 
          id="primary-navigation"
          className={styles.header__nav}
          data-visible={isNavOpen ? "true" : "false"}
        >
          <ul>
            {links.map((link) =>{
              return(
                <li 
                  key={link.id}
                  data-type={link.type} 
                >
                  <a href={`#${link.id}`}>
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <button
          aria-label="open"
          title="open"
          className={styles.header__button}
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <img src={images.hamburger} alt="" />
        </button>
      </header>
    </div>
  )
}