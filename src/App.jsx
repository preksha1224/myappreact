import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <span className="brand">MyApp</span>
        <nav>
          <a href="#features">Features</a>
          <a href="#deploy">Deploy</a>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Hello world</span>
          <h1>Deploy an attractive Vite + React project.</h1>
          <p>
            Launch fast with a polished UI, responsive layout, and
            production-ready deployment flow.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#deploy">
              Deploy now
            </a>
            <a className="button button-secondary" href="#features">
              View features
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card__media" />
          <div className="hero-card__body">
            <p className="hero-card__meta">Live preview</p>
            <h2>Beautiful landing page</h2>
            <p>
              This project ships with a clean hero section, interactive buttons,
              and feature cards that feel ready for production.
            </p>
            <div className="hero-card__stats">
              <span>Fast build</span>
              <span>Responsive</span>
              <span>Deploy-ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <article className="feature-card">
          <h3>Fast performance</h3>
          <p>
            Built with Vite for lightning-fast reloads and optimized production
            builds.
          </p>
        </article>
        <article className="feature-card">
          <h3>Modern design</h3>
          <p>
            Soft gradients, glassmorphism, and clear typography create a
            professional feel.
          </p>
        </article>
        <article className="feature-card">
          <h3>Ready to deploy</h3>
          <p>Use Docker, Jenkins, or AWS workflows to deploy immediately.</p>
        </article>
      </section>

      <footer className="launch-bar" id="deploy">
        <p>Ready to push live — just build, package, and deploy.</p>
      </footer>
    </main>
  );
}

export default App;
