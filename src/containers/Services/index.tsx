import { servicesSections } from "../../constants";

import { BackgroundSection } from "../../components";

import styles from './styles.module.scss';

export function Services(){
  return(
    <div className={styles.services}>
      {servicesSections.map((section) =>{
        return(
          <BackgroundSection 
            key={section.id}
            title={section.title}
            name={section.name}
            content={section.content}
          />
        )
      })}
    </div>
  )
}