export default function EventInfo() {
  // Shared look for both buttons
  const btn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: 44,
    padding: "10px 20px",
    borderRadius: 99,
    border: "1px solid #2f7bff",
    background: "#0f2250",
    color: "#eef4ff",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    flex: "1 1 160px", // grows on phones, wraps when space runs out
    maxWidth: 220,
  };

  return (
    <footer className="info">
      <span>
        <b>28 &amp; 29 Oct</b>
      </span>
      <span>
        Team size <b>2–4</b>
      </span>
      <span>
        Prize pool <b>₹15K</b>
      </span>
      <span>5th Floor, Computer Dept, MMCOE</span>

      {/* Social buttons: full row, centred, wraps on small screens */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
          marginTop: 8,
        }}
      >
        <a
          href="https://www.linkedin.com/company/iste-mmcoe/"
          target="_blank"
          rel="noopener noreferrer"
          style={btn}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#7db4ff"
            aria-hidden="true"
          >
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.8v1.54h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4V9.75z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/iste_mmcoe?cplk=ZTR5amF2ZmszNTZt"
          target="_blank"
          rel="noopener noreferrer"
          style={btn}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7db4ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="#7db4ff" />
          </svg>
          Instagram
        </a>
      </div>
    </footer>
  );
}
