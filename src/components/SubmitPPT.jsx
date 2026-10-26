import {
  SUBMISSION_URL,
  PPT_Format_URL,
  RuleBook_URL,
  SUBMISSION_DEADLINE,
} from "../config.js";

export default function SubmitPPT() {
  // Button stays disabled until you replace the placeholder link in config.js
  const ready = SUBMISSION_URL && !SUBMISSION_URL.includes("YOUR-");

  return (
    <section className="submit">
      <h3>Ready with your idea?</h3>
      <p>Pick a problem statement, prepare your PPT and submit it here.</p>
      {SUBMISSION_DEADLINE && (
        <p className="deadline">Deadline: {SUBMISSION_DEADLINE}</p>
      )}
      {ready ? (
        <a
          className="btn"
          href={PPT_Format_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          PPT Format
        </a>
      ) : (
        <></>
      )}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {ready ? (
        <a
          className="btn"
          href={RuleBook_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Rulebook
        </a>
      ) : (
        <></>
      )}
      <br />
      <hr
        style={{
          width: 60,
          height: 3,
          margin: "14px auto",
          border: 0,
          borderRadius: 99,
          background: "var(--blue)",
        }}
      />
      <br />
      <br />
      {ready ? (
        <a
          className="btn"
          href={SUBMISSION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit your PPT
        </a>
      ) : (
        <></>
      )}
    </section>
  );
}
