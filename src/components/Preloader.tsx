import { useState, useEffect, useCallback } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [dots, setDots] = useState("");
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const finish = useCallback(() => {
    setFadeOut(true);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  useEffect(() => {
    // Dot animation loop
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const t2 = setTimeout(() => setShowLine2(true), 1200);
    const t3 = setTimeout(() => setShowLine3(true), 2400);
    const tEnd = setTimeout(finish, 2800);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tEnd);
    };
  }, [finish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#000000] flex items-start transition-opacity duration-[600ms] ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="pt-[40vh] pl-[5vw] sm:pl-[60px] font-mono text-[18px] sm:text-[20px] font-normal space-y-3">
        <p className="preloader-line" style={{ textShadow: "0 0 8px #00FF41", color: "#00FF41" }}>
          AutonixLab Systems Initializing{dots.padEnd(3, "\u00A0")}
        </p>
        <p
          className="preloader-line transition-opacity duration-500"
          style={{
            textShadow: "0 0 8px #00FF41",
            color: "#00FF41",
            opacity: showLine2 ? 1 : 0,
          }}
        >
          Founder: Unaiza Masood
        </p>
        <p
          className="preloader-line transition-opacity duration-500"
          style={{
            textShadow: "0 0 8px #00FF41",
            color: "#00FF41",
            opacity: showLine3 ? 1 : 0,
          }}
        >
          Status: Operational ✓
        </p>
      </div>
    </div>
  );
};

export default Preloader;
