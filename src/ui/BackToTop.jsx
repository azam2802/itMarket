import { useEffect, useRef } from "react";
import { PiCaretDoubleUpThin } from "react-icons/pi";
import "@styles/ui/back-to-top.scss";

const BackToTop = () => {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      ref.current.classList.toggle("active", window.scrollY > 800);
    });
  });

  const toTop = () => {
    let currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.requestAnimationFrame(toTop);
      window.scrollTo(0, currentPosition - currentPosition / 13);
    }
  };

  return (
    <div className="top_btn" id="top-btn" onClick={toTop} ref={ref}>
      <PiCaretDoubleUpThin alt="top-btn" />
    </div>
  );
};

export default BackToTop;
