import styles from './styles.module.scss';

interface BackgroundSectionProps{
  title: string;
  name: string;
  content: string;
}

export function BackgroundSection({
  title, content, name,
}: BackgroundSectionProps){
  
  return(
    <section data-section={name} className={styles.backgroundSectionContainer}>
      <div className="container">
        <h3 className={styles.backgroundSection__heading}>{title}</h3>
        <p className={styles.backgroundSection__content}>{content}</p>
      </div>
    </section>
  )
}