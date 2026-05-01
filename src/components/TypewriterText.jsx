import { useEffect, useMemo, useState } from "react";

function TypewriterText({ texts: providedTexts }) {
  const texts = useMemo(
    () => providedTexts || [" Django Developer", " JavaScript Developer", " React Developer", " Full-stack Developer"],
    [providedTexts]
  );

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const fullText = texts[textIndex];

    if (!isDeleting) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 110);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 45);
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
