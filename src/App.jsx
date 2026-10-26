import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import BoomOverlay from "./components/BoomOverlay.jsx";
import ProblemStatements from "./components/ProblemStatements.jsx";
import EventInfo from "./components/EventInfo.jsx";
import { DEMO_MODE, getUnlockTime } from "./config.js";
import SubmitPPT from "./components/SubmitPPT.jsx";
import FAQ from "./components/FAQ.jsx";
import PSDomains from "./components/PSDomains.jsx";

export default function App() {
  const [phase, setPhase] = useState("waiting");
  const [target, setTarget] = useState(getUnlockTime);

  const replay = () => {
    window.scrollTo(0, 0);
    setTarget(getUnlockTime());
    setPhase("waiting");
  };

  return (
    <>
      <Header />
      <Hero />

      {phase === "waiting" && (
        <>
          <Countdown target={target} onComplete={() => setPhase("boom")} />
          <br />
          <PSDomains />
          <br />
          <FAQ />
        </>
      )}

      {phase === "boom" && <BoomOverlay onDone={() => setPhase("revealed")} />}

      {phase === "revealed" && (
        <>
          <ProblemStatements />
          <SubmitPPT />
        </>
      )}

      <EventInfo />

      {DEMO_MODE && phase === "revealed" && (
        <button id="demo" onClick={replay}>
          Replay demo
        </button>
      )}
    </>
  );
}
