import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { featuredProjects } from './../components/projectCards.jsx';
import './../styles/style.scss';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function ProjectsPage() {
  const { i18n, t } = useTranslation();
  const isRu = i18n.language === 'ru';

  return (
    <main className="projectsPage">
      <section className="projectsHero">
        <div className="shell">
          <motion.div className="sectionIntro sectionIntro--wide" {...reveal}>
            <span className="eyebrow">{t('projectsPage.eyebrow')}</span>
            <h1>{t('projectsPage.title')}</h1>
            <p>{t('projectsPage.lead')}</p>
          </motion.div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="shell showcaseGrid">
          {featuredProjects.map((project, index) => (
            <motion.article
              className={`showcaseCard ${index % 2 === 1 ? 'isReverse' : ''}`}
              key={project.titleEn}
              style={{ '--accent-color': project.accent }}
              {...reveal}
            >
              <div className="showcaseCard__media">
                <img src={project.image} alt={isRu ? project.titleRu : project.titleEn} loading="lazy" />
              </div>

              <div className="showcaseCard__body">
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
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sectionBlock sectionBlock--contact">
        <div className="shell">
          <motion.div className="contactPanel contactPanel--compact" {...reveal}>
            <div className="contactPanel__copy">
              <span className="eyebrow">{t('projectsPage.ctaEyebrow')}</span>
              <h2>{t('projectsPage.ctaTitle')}</h2>
              <p>{t('projectsPage.ctaLead')}</p>
            </div>
            <div className="contactPanel__actions">
              <a className="primaryButton" href="https://t.me/Berliyn_h" target="_blank" rel="noreferrer">
                {t('projectsPage.ctaButton')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
