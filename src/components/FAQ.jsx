import { useState } from "react";
import faqs from "../data/faqs.js";

export default function FAQ() {
  const [open, setOpen] = useState(null); // index of the open question, or null

  return (
    <section className="faq">
      <h2>Frequently asked questions</h2>
      <hr
        style={{
          width: 60,
          height: 3,
          margin: "14px auto 22px",
          border: 0,
          borderRadius: 99,
          background: "#2f7bff",
        }}
      />

      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)} // click again to close
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
