import useCountdown from "../hooks/useCountdown.js";

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown({ target, onComplete }) {
  const { days, hours, minutes, seconds } = useCountdown(target, onComplete);
  const units = [
    ["Days", days],
    ["Hours", hours],
    ["Minutes", minutes],
    ["Seconds", seconds],
  ];

  return (
    <section id="wait">
      <div className="lbl">Problem statements unlock in</div>
      <div className="clock">
        {units.map(([label, value]) => (
          <div className="u" key={label}>
            <strong>{pad(value)}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="when">28 October 2026, 10:00 AM IST</div>
    </section>
  );
}
