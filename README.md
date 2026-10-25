# ProtoTech V2.0 – Problem Statement Reveal

## Run
    npm install
    npm run dev        # open the printed localhost link
    npm run build      # production build in /dist

## Go live
In `src/config.js` set `DEMO_MODE = false`. The timer then targets 26 Oct 2026, 1:00 AM IST.

## Structure
    src/
      main.jsx                   entry, mounts <App/>
      App.jsx                    phase control: waiting -> boom -> revealed
      config.js                  demo switch + unlock time
      index.css                  all styles
      hooks/useCountdown.js      timer logic
      data/problemStatements.js  the 15 problem statements
      components/                Header, Hero, Countdown, BoomOverlay, ProblemStatements, EventInfo
      assets/                    MMCOE + ISTE logos
