import './../styles/style.scss';

import gear from './../assets/Gear.svg';
import wrench from './../assets/Wrench.svg';

import JS from './../assets/JavaScript.svg';
import dj from './../assets/Django.svg';
import postgre from './../assets/PostgreSQL.svg';
import py from './../assets/Python.svg';
import react from './../assets/React.svg';

import linkedin from './../assets/LinkedIn.svg';
import instagram from './../assets/Instagram.svg';
import telegram from './../assets/Telegram.svg';
import { useTranslation } from "react-i18next";
import TypewriterText from './../components/TypewriterText.jsx';
import {
  MoveSides,
  MoveSides1,
  MoveSides2,
  ImgPulse,
  ActionBtn,
  AnimatedText,
  HoverScale,
  PortfolioCards,
  AboutMeMotion
} from './../components/motions.jsx';

function Home() {
    const { t } = useTranslation();
  return (
    <div className="main">
      <div className="background">
        <MoveSides src={gear} className="movingIcon" />
        <MoveSides1 src={wrench} className="movingIcon" />
        <MoveSides2 src={gear} className="movingIcon" />
      </div>

      <div className="banner">
        <div className="bannerText">
          <h1>
            <AnimatedText>{t("home.hello")}</AnimatedText>
            <br />
            <AnimatedText>{t("home.im")}</AnimatedText>
            <TypewriterText

            />
          </h1>

          <div className="links">
            <a href="https://www.instagram.com/rerochelick/" target="_blank" rel="noopener noreferrer">
              <HoverScale src={instagram} alt="Instagram" />
            </a>

            <a href="https://t.me/Berliyn_h" target="_blank" rel="noopener noreferrer">
              <HoverScale src={telegram} alt="Telegram" />
            </a>

            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <HoverScale src={linkedin} alt="LinkedIn" />
            </a>

            <ActionBtn className="contactBtn">
              <AnimatedText>{t("home.contact")}</AnimatedText>
            </ActionBtn>
          </div>
        </div>
        <div className="icons">
          <ImgPulse src={JS} className="icon" />
          <ImgPulse src={react} className="icon" />
          <ImgPulse src={postgre} className="icon" />
          <ImgPulse src={py} className="icon" />
          <ImgPulse src={dj} className="icon" />
        </div>
      </div>
      <PortfolioCards />
      <AboutMeMotion>
        <div className="AboutMeContainer">
            <div className="title">
                <h1>{t("home.AboutMe")}</h1>
                <p>{t("home.AboutMeTitle")}</p>
            </div>

            <img src="" alt="" />

        </div>
      </AboutMeMotion>
    </div>
  );
}

export default Home;
