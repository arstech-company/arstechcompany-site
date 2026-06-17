import Image from "next/image";

const LOGO_VERSION = "20260617";

export default function Home() {
  return (
    <main className="page">
      <section className="container">
        <div className="logo-wrapper">
          <Image
            src={`/images/ars-tech-logo.png?v=${LOGO_VERSION}`}
            alt="ARS TECH COMPANY Logo"
            width={160}
            height={160}
            priority
            className="logo"
          />
        </div>

        <h1>
          ARS <span>TECH</span> COMPANY
        </h1>

        <p className="tagline">🚀 Estamos construindo algo incrível</p>

        <div className="card">
          <div className="service-item">
            <span className="service-icon">💻</span>
            <span>Desenvolvimento de Software</span>
          </div>
          <div className="service-item">
            <span className="service-icon">☁️</span>
            <span>Cloud Computing</span>
          </div>
          <div className="service-item">
            <span className="service-icon">⚙️</span>
            <span>Automação e Tecnologia</span>
          </div>
          <div className="service-item">
            <span className="service-icon">📣</span>
            <span>Marketing Digital</span>
          </div>
        </div>

        <p className="soon">Em breve no ar...</p>

        <div className="contact">
          <p className="contact-label">Quer saber mais ou entrar em contato?</p>
          <a
            href="mailto:desenvolvimento@arstechcompany.com.br"
            className="contact-link"
          >
            ✉️ desenvolvimento@arstechcompany.com.br
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 ARS Tech Company. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
