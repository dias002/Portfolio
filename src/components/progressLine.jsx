import { useEffect, useState } from "react";
import './../styles/style.scss'
export const ProgressLine = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScroll((scrollTop / docHeight) * 100); // процент
    };
    window.addEventListener("scroll", handleScroll);
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
