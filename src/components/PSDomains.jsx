import problemStatements from "../data/problemStatements.js";

// Inline SVG icons: no icon library needed
const icons = {
  health: (
    <>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M7 12h2l1.5 -3l2 6l1.5 -3h3" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3l8 3v6c0 4.5 -3.2 8.2 -8 9c-4.8 -.8 -8 -4.5 -8 -9v-6z" />
      <path d="M8.5 12l2.5 2.5l4.5 -5" />
    </>
  ),
  automation: (
    <>
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
      <path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
    </>
  ),
};

// Same order as the categories in data/problemStatements.js
const domains = [
  {
    title: "Meditech",
    tagline: "Technology for better healthcare.",
    icon: "health",
  },
  {
    title: "Women and child safety",
    tagline: "Innovation for safer communities.",
    icon: "safety",
  },
  {
    title: "Smart automation",
    tagline: "Intelligence for smarter systems.",
    icon: "automation",
  },
];

export default function PSDomains() {
  return (
    <section className="domains">
      <h2 style={{ marginBottom: "2rem" }}> Problem Statement Domains</h2>

      <hr className="divider" />

      <div
        className="domain-grid"
        style={{ marginBottom: "3rem", marginTop: "1.2rem" }}
      >
        {domains.map((d, i) => {
          const count = problemStatements[i]?.items.length ?? 5; // counts update automatically
          return (
            <article
              className="domain-card"
              key={d.title}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <svg
                className="domain-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[d.icon]}
              </svg>
              <h3>{d.title}</h3>
              <p>{d.tagline}</p>
              <span className="domain-chip">{count} problem statements</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
