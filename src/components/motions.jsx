import { motion, AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import {HomeCards} from './projectCards'
import './../styles/style.scss';

// ------------------- Иконки движения -------------------
export const MoveSides = ({ src, className, alt = "icon" }) => (
  <motion.img
    src={src} alt={alt} className={className}
    animate={{ x: [0, 400, -50, 0], y: [0, -100, 100, 0], rotate: [0, 360, 0] }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  />
);

export const MoveSides1 = ({ src, className, alt = "icon" }) => (
  <motion.img
    src={src} alt={alt} className={className}
    animate={{ x: [0, 150, 600, 0], y: [0, -300, 50, 0], rotate: [0, 360, 0] }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  />
);

export const MoveSides2 = ({ src, className, alt = "icon" }) => (
  <motion.img
    src={src} alt={alt} className={className}
    animate={{ x: [0, 150, 1000, 0], y: [0, -100, -100, 0], rotate: [0, 360, 0] }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  />
);

// ------------------- Кнопки -------------------
export const ActionBtn = ({ children, className }) => (
  <motion.button className={className} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    {children}
  </motion.button>
);

export const MotionDivNavbar = ({ children, className }) => (
  <motion.div className={className} initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 0.2 }}>
    {children}
  </motion.div>
);

export const LinkNav = ({ children, className, to }) => (
  <motion.div className={className} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link to={to}>{children}</Link>
  </motion.div>
);

// ------------------- Картинки -------------------
export const ScaleImg = ({ className, src, alt='IMG' }) => (
  <motion.img
    src={src} className={className} alt={alt}
    initial={{ scale: 0 }} animate={{ scale: 1 }}
    transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.6, bounce: 0.9 } }}
  />
);

export const ImgPulse = ({ className, src, alt='icon' }) => (
  <motion.img
    src={src} className={className} alt={alt}
    initial={{ opacity: 0 }} animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ opacity: 1 }}
  />
);

export const HoverScale = ({ src, alt, className }) => (
  <motion.img src={src} alt={alt} className={className} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} />
);

// ------------------- Текст -------------------
export const AnimatedText = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={i18n.language}
        style={{ display: "inline-block" }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
};

// ------------------- Карточки -------------------
export const MotionCard = ({ children, className }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} whileHover={{ scale: 1.05 }}>
    {children}
  </motion.div>
);

// ------------------- PortfolioCards -------------------

// Компонент для отдельной карточки с parallax
const PortfolioCardItem = ({
  card,
  index,
  activeIndex,
  setActiveIndex
}) => {
  const isActive = activeIndex === index;

const { t} = useTranslation();
  return (
    <motion.div
      onClick={() => setActiveIndex(index)}
      className={`portfolioCard ${isActive ? "active" : ""}`}
      data-label={t(card.labelKey)}
      style={{
        zIndex: isActive ? 20 : index
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    > <img src={`./assets/${card.image}`} alt={t(card.titleKey)} className="cardImage" />
      <div className="cardTitle">
        <h3>{t(card.titleKey)}</h3>
        <p>{t(card.descKey)}</p></div>
    </motion.div>
  );
};

export const PortfolioCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="portfolioContainer">
      {HomeCards.map((card, index) => (
        <PortfolioCardItem
          key={index}
          card={card}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};



// ------------------- About Me Block -----------------------


export const AboutMeMotion =({children, className})=>{
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
      >
        {children}
      </motion.div>
    );
}
