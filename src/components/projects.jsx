
import { ListOfCards } from "./projectCards.jsx";
import './../styles/style.scss'
import {MotionCard} from './motions.jsx'

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-grid">
        {ListOfCards.map((card, index) => (
            <MotionCard key={index} className="project-card">
                <img src={card.img} alt={card.title} />
                <h3>{card.title}</h3>
                <div className="tags">
                {card.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                ))}
                </div>
            </MotionCard>
        ))}
      </div>
    </div>
  );
};