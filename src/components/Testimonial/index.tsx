import styles from './styles.module.scss';

interface TestimonialProps{
  name: string;
  occupation: string;
  quote: string;
  avatar: string;
}

export function Testimonial({ 
  name, occupation, quote, avatar,
}: TestimonialProps){
  return(
    <article className={styles.testimonial}>
      <img src={avatar} alt="avatar" className={styles.testimonial__avatar} />
      <blockquote className={styles.testimonial__quoteContainer}>
        <p>{quote}</p>
        <cite>
            <strong>{name}</strong>
            <span>{occupation}</span>
        </cite>
      </blockquote> 
    </article>
  )
}