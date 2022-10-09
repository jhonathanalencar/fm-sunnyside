import { InfoSection } from "../../components";
import { aboutSections } from "../../constants";

export function About(){
  return(
    <div id="about" className="about">
      {aboutSections.map((section) => {
        return(
          <InfoSection 
            key={section.id}
            title={section.title}
            content={section.content}
            linkText={section.linkText}
            linkTo={section.linkTo}
            color={section.color}
            alt={section.alt}
            width={section.width}
            startWithImage={section.startWithImage}
            smallScreenImage={section.smallScreenImage}
            largeScreenImage={section.largeScreenImage}
          />
        )
      })}
    </div>
  )
}