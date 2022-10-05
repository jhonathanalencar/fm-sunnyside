import { Testimonial } from '../../components';
import { testimonials } from '../../constants';
import styles from './styles.module.scss';

export function Testimonials(){
  return(
    <div className={styles.testimonials}>
      <section className="container">
        <h2>Client testimonials</h2>
        <div className={styles.testimonials__wrapper}>
          {testimonials.map((testimonial) =>{
            return(
              <Testimonial 
                key={testimonial.id}
                name={testimonial.name}
                occupation={testimonial.occupation}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}