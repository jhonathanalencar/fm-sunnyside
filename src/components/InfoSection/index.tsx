import styles from './styles.module.scss';

interface InfoSectioProps{
  title: string;
  content: string;
  linkText: string;
  linkTo: string;
  color: string;
  alt: string;
  width: string;
  startWithImage: boolean;
  smallScreenImage: string;
  largeScreenImage: string;
}

export function InfoSection({ 
  title, content, linkText, linkTo, color, alt, width, startWithImage, smallScreenImage, largeScreenImage
}: InfoSectioProps){
  return(
    <section className={styles.sectionContainer}>
      <div className={`container  ${styles.section__info}`}>
        <h2 data-width={width} className={styles.section__info_title}>{title}</h2>
        <p className={styles.section__info_content}>
          {content}
        </p>
        <a href={linkTo} data-color={color} className={styles.section__info_link}>
          <strong>{linkText}</strong>
        </a>
      </div>
      <div data-image-first={startWithImage} className={styles.section__image}>
        <img 
          src={smallScreenImage} 
          srcSet={`${smallScreenImage} 719w,
                   ${largeScreenImage} 720w`}
          alt={alt} 
        />
      </div>
    </section>
  )
}