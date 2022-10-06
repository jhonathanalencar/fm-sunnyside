import { projects } from '../../constants';
import styles from './styles.module.scss';

export function Projects(){
  return(
    <div className={styles.projects}>
      {projects.map((project) =>{
        return(
          <img 
            key={project.id}
            src={project.smallScreenImage} 
            srcSet={`${project.smallScreenImage} 719w, 
                    ${project.largeScreenImage} 720w`}
            alt={project.alt} 
          />
        )
      })}
    </div>
  )
}