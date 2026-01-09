import { useEffect, useState, useMemo } from "react";

function TypewriterText() {
  const texts = useMemo(() => [" Django Developer",' JavaScript Developer', " React Developer", " Fullstack Developer"], []);

  const [textIndex, setTextIndex] = useState(0); // какой текст сейчас
  const [charIndex, setCharIndex] = useState(0); // какая буква
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false); // печать или удаление

  useEffect(() => {
    let timeout;

    const fullText = texts[textIndex];

    if (!isDeleting) {
      // печатаем текст
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150); // скорость печати
      } else {
        // после полного текста ждём 1 секунду и начинаем стирать
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // стираем текст
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50); 
      } else {
       
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
}

export default TypewriterText;
