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

  // Subtle credit line (small + low contrast so it doesn't stand out)
  const credit = {
    width: "100%",
    marginTop: 16,
    textAlign: "right",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#6b7a99",
    opacity: 0.8,
    position: "relative",
    bottom: "1.5rem",
    top: "5px",
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

        <a
          href="https://chat.whatsapp.com/KDNbw5OVr1r0JyKTk3SttU?s=cl&p=a&mlu=4&ilr=4"
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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Join Whatsapp Group
        </a>
      </div>

      {/* Credit */}
      <div style={credit}>
        <div>Website made by ISTE Technical Team</div>
        <div style={{ opacity: "0.8" }}>~Atharva Desai</div>
      </div>
    </footer>
  );
}
