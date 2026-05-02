import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

function ProjectShowcaseCard({ project, index }) {
  const ref = useRef(null);
  const { i18n, t } = useTranslation();
  const isRu = i18n.language === 'ru';
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -48]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 0.98]);
  const bodyY = useTransform(scrollYProgress, [0, 0.5, 1], [42, 0, -24]);

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`showcaseCard ${index % 2 === 1 ? 'isReverse' : ''}`}
      aria-label={isRu ? project.titleRu : project.titleEn}
      style={{
        '--accent-color': project.accent,
        '--stack-offset': `${112 + index * 28}px`,
      }}
      initial={{ opacity: 0, y: 90, scale: 0.94, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <div className="showcaseCard__media">
        <motion.img
          src={project.image}
          alt={isRu ? project.titleRu : project.titleEn}
          loading="lazy"
          style={{ y: imageY, scale: imageScale }}
        />
      </div>

      <motion.div className="showcaseCard__body" style={{ y: bodyY }}>
        <span className="showcaseCard__label">{t('projectsPage.caseLabel')}</span>
        <h2>{isRu ? project.titleRu : project.titleEn}</h2>
        <p>{isRu ? project.summaryRu : project.summaryEn}</p>

        <ul className="showcaseCard__list">
          {(isRu ? project.detailsRu : project.detailsEn).map((line) => (
            <li key={`${project.titleEn}-${line}`}>{line}</li>
          ))}
        </ul>

        <div className="chipRow">
          {project.stack.map((stackItem) => (
            <span className="chip" key={`${project.titleEn}-${stackItem}`}>
              {stackItem}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.a>
  );
}

export default ProjectShowcaseCard;
