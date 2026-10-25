import { useEffect, useMemo, useState } from "react";

// Full-screen 3 -> 2 -> 1 -> BOOM sequence. Calls onDone() when finished.
export default function BoomOverlay({ onDone }) {
  const [stage, setStage] = useState(3); // 3, 2, 1, then 0 = BOOM

  // Random flying sparks, created once
  const sparks = useMemo(
    () =>
      Array.from({ length: 44 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const dist =
          150 + (Math.random() * Math.min(window.innerWidth, 900)) / 1.5;
        return {
          "--x": `${Math.cos(angle) * dist}px`,
          "--y": `${Math.sin(angle) * dist}px`,
        };
      }),
    [],
  );

  useEffect(() => {
    if (stage > 0) {
      const t = setTimeout(() => setStage((s) => s - 1), 950);
      return () => clearTimeout(t);
    }
    // stage 0: shake the screen, then hand over to the problem statements
    document.body.classList.add("shake");
    const stopShake = setTimeout(
      () => document.body.classList.remove("shake"),
      500,
    );
    const finish = setTimeout(onDone, 1900);
    return () => {
      clearTimeout(stopShake);
      clearTimeout(finish);
    };
  }, [stage]);

  return (
    <div id="boom" className="on">
      {stage > 0 ? (
        // key={stage} makes React re-create the element so the CSS animation restarts
        <div id="num" key={stage}>
          {stage}
        </div>
      ) : (
        <>
          <div className="flash" />
          <div className="ring" />
          <div className="ring" style={{ animationDelay: ".15s" }} />
          {sparks.map((style, i) => (
            <i className="sp" key={i} style={style} />
          ))}
          <div id="num" className="b">
            BOOM!
          </div>
        </>
      )}
    </div>
  );
}
