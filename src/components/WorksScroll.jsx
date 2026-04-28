import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ListOfCards } from "./projectCards.jsx";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function WorksScroll() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [maxX, setMaxX] = useState(0);

  const cards = useMemo(() => {
    // Ensure stable keys even if titles repeat
    return ListOfCards.map((c, idx) => ({ ...c, _key: `${idx}-${c.title}` }));
  }, []);

  useLayoutEffect(() => {
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      const scrollWidth = track.scrollWidth;
      const clientWidth = track.clientWidth;
      setMaxX(Math.max(0, scrollWidth - clientWidth));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (v) => {
    const t = clamp(v, 0, 1);
    return -Math.round(maxX * t);
  });

  return (
    <section className="worksScroll" ref={sectionRef}>
      <div className="worksScroll__sticky">
        <div className="worksScroll__top">
          <div className="worksScroll__eyebrow">SELECTED WORK</div>
          <h2 className="worksScroll__title">
            Projects that <em>ship</em>
          </h2>
          <p className="worksScroll__desc">
            Scroll to browse. Hover a card for details. Click opens the repo (placeholder for now).
          </p>
        </div>

        <div className="worksScroll__viewport" ref={trackRef}>
          <motion.div className="worksScroll__track" style={{ x }}>
            {cards.map((card) => (
              <article className="workCard" key={card._key}>
                <div className="workCard__media">
                  <img src={card.img} alt={card.title} loading="lazy" />
                  <div className="workCard__glow" aria-hidden="true" />
                </div>
                <div className="workCard__body">
                  <h3 className="workCard__title">{card.title}</h3>
                  <div className="workCard__tags">
                    {card.tags.map((tag, idx) => (
                      <span className="workTag" key={`${card._key}-t-${idx}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="workCard__actions">
                    <a className="cyBtn cyBtn--ghost" href="#contact">
                      Details
                    </a>
                    <a className="cyBtn" href="#contact">
                      Contact
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="worksScroll__hint mono">
          <span className="dot" /> SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}

