import { InfoSection } from "../../components/InfoSection";
import { aboutSections } from "../../constants/data";

export function About(){
  return(
    <div className="about">
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