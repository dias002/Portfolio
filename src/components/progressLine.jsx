import { useEffect, useState } from "react";
import './../styles/style.scss'
export const ProgressLine = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScroll(0);
        return;
      }
      setScroll((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='progressLineContainer'>
      <div className='progressLine' style={{
        width: `${scroll}%`
      }} />
    </div>
  );
}
