

import './../styles/style.scss'
import logo from './../assets/Frame2.svg'
import { MotionDivNavbar, LinkNav, ScaleImg, AnimatedText} from './motions.jsx'
import { useTranslation } from "react-i18next";
import {useState} from 'react'
import {ProgressLine} from './progressLine.jsx'
function Header(){
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ru" : "en";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };
    const [active, setActive] = useState(false)
    const handleClick = () => {
    toggleLanguage();
    setActive(prev => !prev);
    };
    return(
        <div>
            <header>
             <nav className="navbar">
                    <ScaleImg src={logo} className='logo'/>
                    <MotionDivNavbar className='navLinks'>
                        <AnimatedText><LinkNav to='/'>{t("home.home")}</LinkNav></AnimatedText>
                        <AnimatedText><LinkNav to='/projects'>{t("home.projects")}</LinkNav></AnimatedText>
                        
                        <AnimatedText><button className={active ? "ruBtn" : 'enBtn' } onClick={handleClick}>
                            {i18n.language === "en" ? "RU" : "EN"}
                        </button></AnimatedText>
                    </MotionDivNavbar>
                    
             </nav>
             <ProgressLine></ProgressLine>
            </header>

        </div>
    )
}




export default Header;