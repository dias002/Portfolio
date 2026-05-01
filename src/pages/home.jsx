import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TypewriterText from './../components/TypewriterText.jsx';
import {
  capabilityCards,
  featuredProjects,
  heroMetrics,
  profilePhoto,
  socialLinks,
  techStack,
} from './../components/projectCards.jsx';
import './../styles/style.scss';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function Home() {
  const { i18n, t } = useTranslation();
  const isRu = i18n.language === 'ru';
  const typedRoles = isRu
    ? [' React / Django разработчик', ' backend архитектор', ' full-stack исполнитель', ' product-minded developer']
    : [' React / Django developer', ' backend architect', ' full-stack builder', ' product-minded developer'];

  return (
    <main className="homePage">
      <section className="heroSection">
        <div className="shell heroGrid">
          <motion.div className="heroCopy" {...reveal}>
            <span className="eyebrow">{t('hero.eyebrow')}</span>
            <h1 className="heroTitle">{t('hero.title')}</h1>
            <p className="heroLead">{t('hero.lead')}</p>

            <div className="heroType">
              <span className="heroType__prefix">{t('hero.typePrefix')}</span>
              <TypewriterText texts={typedRoles} />
            </div>

            <div className="heroActions">
              <Link className="primaryButton" to="/projects">
                {t('hero.primaryCta')}
              </Link>
              <a className="secondaryButton" href="#contact">
                {t('hero.secondaryCta')}
              </a>
            </div>

            <div className="heroMeta">
              <span>{t('hero.metaLocation')}</span>
              <span>{t('hero.metaAvailability')}</span>
            </div>
          </motion.div>

          <motion.div className="heroVisual" {...reveal}>
            <div className="heroPortraitCard">
              <div className="heroPortraitCard__glow" />
              <img className="heroPortrait" src={profilePhoto} alt="Dias" />
            </div>

            <div className="heroBadge heroBadge--top">
              <span>{t('hero.badgePrimary')}</span>
            </div>
            <div className="heroBadge heroBadge--bottom">
              <span>{t('hero.badgeSecondary')}</span>
            </div>

            <div className="heroStack">
              {techStack.slice(0, 4).map((item) => (
                <div className="stackPill" key={item.name}>
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="metricsSection">
        <div className="shell metricsGrid">
          {heroMetrics.map((metric) => (
            <motion.article className="metricCard" key={metric.valueEn} {...reveal}>
              <strong>{isRu ? metric.valueRu : metric.valueEn}</strong>
              <span>{isRu ? metric.labelRu : metric.labelEn}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="sectionBlock sectionBlock--featured" id="featured">
        <div className="shell">
          <motion.div className="sectionIntro" {...reveal}>
            <span className="eyebrow">{t('featured.eyebrow')}</span>
            <h2>{t('featured.title')}</h2>
            <p>{t('featured.lead')}</p>
          </motion.div>

          <div className="featureGrid">
            {featuredProjects.map((project) => (
              <motion.article
                className="featureCard"
                key={project.titleEn}
                style={{ '--accent-color': project.accent }}
                {...reveal}
              >
                <div className="featureCard__media">
                  <img src={project.image} alt={isRu ? project.titleRu : project.titleEn} loading="lazy" />
                </div>
                <div className="featureCard__body">
                  <div className="featureCard__header">
                    <span className="featureCard__tag">{t('featured.caseLabel')}</span>
                    <h3>{isRu ? project.titleRu : project.titleEn}</h3>
                  </div>
                  <p>{isRu ? project.summaryRu : project.summaryEn}</p>
                  <div className="chipRow">
                    {project.stack.map((stackItem) => (
                      <span className="chip" key={`${project.titleEn}-${stackItem}`}>
                        {stackItem}
                      </span>
                    ))}
                  </div>
                  <div className="featureOutcome">{isRu ? project.outcomeRu : project.outcomeEn}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionBlock" id="services">
        <div className="shell">
          <motion.div className="sectionIntro" {...reveal}>
            <span className="eyebrow">{t('services.eyebrow')}</span>
            <h2>{t('services.title')}</h2>
            <p>{t('services.lead')}</p>
          </motion.div>

          <div className="serviceGrid">
            {capabilityCards.map((card) => (
              <motion.article
                className="serviceCard"
                key={card.titleEn}
                style={{ '--accent-color': card.accent }}
                {...reveal}
              >
                <div className="serviceCard__bar" />
                <h3>{isRu ? card.titleRu : card.titleEn}</h3>
                <p>{isRu ? card.bodyRu : card.bodyEn}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionBlock" id="about">
        <div className="shell aboutGrid">
          <motion.div className="aboutCard aboutCard--photo" {...reveal}>
            <img src={profilePhoto} alt="Dias portrait" />
          </motion.div>

          <motion.div className="aboutCard aboutCard--content" {...reveal}>
            <span className="eyebrow">{t('about.eyebrow')}</span>
            <h2>{t('about.title')}</h2>
            <p>{t('about.body')}</p>

            <div className="stackCloud">
              {techStack.map((item) => (
                <div className="stackCloud__item" key={item.name}>
                  <img src={item.icon} alt={item.name} loading="lazy" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sectionBlock sectionBlock--contact" id="contact">
        <div className="shell">
          <motion.div className="contactPanel" {...reveal}>
            <div className="contactPanel__copy">
              <span className="eyebrow">{t('contact.eyebrow')}</span>
              <h2>{t('contact.title')}</h2>
              <p>{t('contact.lead')}</p>
            </div>

            <div className="contactPanel__actions">
              <a className="primaryButton" href="https://t.me/Berliyn_h" target="_blank" rel="noreferrer">
                {t('contact.primaryCta')}
              </a>
              <div className="socialRow">
                {socialLinks.map((link) => (
                  <a href={link.href} key={link.name} target="_blank" rel="noreferrer" className="socialIcon">
                    <img src={link.icon} alt={link.name} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
