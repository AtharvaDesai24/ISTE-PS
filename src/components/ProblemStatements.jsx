import problemStatements from "../data/problemStatements.js";

export default function ProblemStatements() {
  let order = 0; // used to stagger each item's entrance animation
  const delay = () => ({ animationDelay: `${order++ * 0.12}s` });

  return (
    <main id="ps" className="on">
      <div className="ps-head">
        <h2>Problem Statements Unlocked</h2>
        <p>Pick one. Build it. Pitch it.</p>
      </div>

      {problemStatements.map((group) => (
        <section key={group.category}>
          <h3 className="cat" style={delay()}>{group.category}</h3>
          <div className="grid">
            {group.items.map((ps) => (
              <article className="card" key={ps.id} style={delay()}>
                <em>{ps.id}</em>
                <p>{ps.text}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
