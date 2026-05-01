import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './../assets/Frame2.svg';
import { ProgressLine } from './progressLine.jsx';
import './../styles/style.scss';

function Header() {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('lang', nextLang);
  };

  const isProjects = location.pathname === '/projects';

  return (
    <>
      <header className="siteHeader">
        <nav className="siteNav">
          <Link className="siteBrand" to="/">
            <img src={logo} alt="Dias Portfolio" className="siteBrand__logo" />
            <div className="siteBrand__copy">
              <span className="siteBrand__name">Dias</span>
              <span className="siteBrand__role">
                {i18n.language === 'ru' ? 'full-stack developer' : 'full-stack developer'}
              </span>
            </div>
          </Link>

          <div className="siteNav__links">
            <Link className={`navLink ${!isProjects ? 'isActive' : ''}`} to="/">
              {t('nav.home')}
            </Link>
            <Link className={`navLink ${isProjects ? 'isActive' : ''}`} to="/projects">
              {t('nav.projects')}
            </Link>
            <a className="navLink" href={isProjects ? '/#contact' : '#contact'}>
              {t('nav.contact')}
            </a>
          </div>

          <div className="siteNav__actions">
            <a
              className="navButton navButton--ghost"
              href="https://t.me/Berliyn_h"
              target="_blank"
              rel="noreferrer"
            >
              {t('nav.cta')}
            </a>
            <button className="langSwitch" onClick={toggleLanguage} type="button">
              {i18n.language === 'en' ? 'RU' : 'EN'}
            </button>
          </div>
        </nav>
      </header>
      <ProgressLine />
    </>
  );
}

export default Header;
