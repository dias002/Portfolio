import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectShowcaseCard from './../components/ProjectShowcaseCard.jsx';
import { featuredProjects } from './../components/projectCards.jsx';
import './../styles/style.scss';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function ProjectsPage() {
  const { t } = useTranslation();

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
            <ProjectShowcaseCard project={project} index={index} key={project.titleEn} />
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
