import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    calendar: <><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    lightbulb: <><path d="M9 18h6M10 22h4"/><path d="M8.5 15.5A7 7 0 1 1 15.5 15.5c-.9.7-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.8-1.5-2.5Z"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h2.8A6.2 6.2 0 0 0 21 7.8C21 5.15 16.97 3 12 3Z"/><circle cx="7.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="10" cy="7" r=".5" fill="currentColor"/><circle cx="14" cy="7" r=".5" fill="currentColor"/><circle cx="17" cy="10" r=".5" fill="currentColor"/></>,
    sparkles: <><path d="m12 3-1.2 3.3L7.5 7.5l3.3 1.2L12 12l1.2-3.3 3.3-1.2-3.3-1.2L12 3Z"/><path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.6 1.4L17 15l1.4.6L19 17l.6-1.4L21 15l-1.4-.6L19 13Z"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    x: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const navItems = [
  ['Início', 'inicio'],
  ['O projeto', 'projeto'],
  ['Obras', 'obras'],
  ['A turma', 'turma'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      const current = [...navItems].reverse().find(([, id]) => {
        const el = document.getElementById(id)
        return el && window.scrollY >= el.offsetTop - 180
      })
      if (current) setActiveSection(current[1])
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="header">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir para o início">
          <span className="brand-mark">15</span>
          <span className="brand-copy">
            <strong>CEd 15</strong>
            <small>Ceilândia</small>
          </span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([label, id]) => (
            <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
          <button className="nav-highlight" onClick={() => goTo('contato')}>Para professores</button>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grain" />
          <div className="hero-copy reveal">
            <div className="eyebrow"><span>Projeto escolar</span> • 3º B • 2026</div>
            <h1>Entre caminhos<br />e <em>memórias.</em></h1>
            <p>O 3º B atravessa duas histórias sobre jornadas muito diferentes — da aldeia quase inalcançável de Kafka à viagem de Ivine para longe da Síria.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => goTo('obras')}>Conheça as obras <Icon name="arrow" /></button>
              <button className="text-button" onClick={() => goTo('projeto')}>Sobre o projeto</button>
            </div>
            <div className="hero-meta">
              <span><Icon name="calendar" size={17} /> Semana Cultural</span>
              <span><Icon name="users" size={17} /> Turma 3º B</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Colagem artística com caderno, sol e elementos escolares">
            <div className="sun-shape" />
            <div className="tape tape-one" />
            <div className="paper-card">
              <span className="paper-kicker">Nosso ponto de partida</span>
              <div className="hero-work hero-work--kafka"><b>01</b><span>A Próxima Aldeia<small>Franz Kafka</small></span></div>
              <div className="paper-route"><i /><i /><i /><i /></div>
              <div className="hero-work hero-work--ivine"><b>02</b><span>Uma Viagem da Síria<small>Ivine e o travesseiro</small></span></div>
              <div className="paper-sign">3º B <span>✦</span></div>
            </div>
            <div className="blue-note">PAS<br /><strong>UnB</strong></div>
            <div className="scribble">↗</div>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
          </div>
        </section>

        <section className="intro section" id="projeto">
          <div className="section-label">01 — O projeto</div>
          <div className="intro-grid">
            <div><h2>Duas viagens.<br /><span>Novos modos de olhar.</span></h2></div>
            <div className="intro-text">
              <p>Em <strong>A Próxima Aldeia</strong>, a brevidade de Franz Kafka nos provoca a pensar sobre o tempo, a distância e os limites de uma vida. Já <strong>Uma Viagem da Síria</strong> acompanha Ivine e seu travesseiro em uma narrativa marcada por deslocamento e lembranças.</p>
              <p>Nosso trabalho aproxima essas jornadas para investigar o que significa partir, tentar chegar e levar consigo aquilo que ajuda a preservar a própria história.</p>
            </div>
          </div>

          <div className="principles">
            <article>
              <span className="principle-icon coral"><Icon name="lightbulb" /></span>
              <strong>Investigar</strong>
              <p>Conhecer os contextos e as linguagens que dão forma a cada jornada.</p>
              <span className="number">01</span>
            </article>
            <article>
              <span className="principle-icon blue"><Icon name="palette" /></span>
              <strong>Criar</strong>
              <p>Transformar pesquisa em expressão com o olhar único da nossa turma.</p>
              <span className="number">02</span>
            </article>
            <article>
              <span className="principle-icon yellow"><Icon name="users" /></span>
              <strong>Compartilhar</strong>
              <p>Construir pontes entre estudantes, professores e toda a comunidade.</p>
              <span className="number">03</span>
            </article>
          </div>
        </section>

        <section className="works section" id="obras">
          <div className="works-heading">
            <div>
              <div className="section-label light">02 — As obras</div>
              <h2>Duas jornadas.<br />Um encontro de olhares.</h2>
            </div>
            <p>De uma parábola literária sobre uma aldeia próxima a uma história de refúgio atravessada por fronteiras: nossa pesquisa começa pelo movimento.</p>
          </div>

          <div className="work-list">
            <Link to="/obras/a-proxima-aldeia" className="work-card work-card-one" aria-label="Abrir página da obra A Próxima Aldeia">
              <div className="work-visual">
                <span className="work-index">01</span>
                <div className="story-poster kafka-poster" aria-hidden="true">
                  <span className="kafka-sun" />
                  <span className="kafka-road" />
                  <span className="kafka-house house-one" />
                  <span className="kafka-house house-two" />
                  <span className="kafka-traveler" />
                </div>
                <span className="waiting-stamp">Literatura</span>
              </div>
              <div className="work-info">
                <span className="tag">Franz Kafka • conto breve</span>
                <h3>A Próxima Aldeia</h3>
                <p>Uma viagem aparentemente simples se torna impossível diante da brevidade da vida. O texto de Kafka desloca nossa percepção de tempo, distância e destino.</p>
                <div className="theme-list"><span>tempo</span><span>caminho</span><span>existência</span></div>
                <span className="coming-soon">Abrir página da obra <Icon name="arrow" size={17} /></span>
              </div>
            </Link>

            <Link to="/obras/uma-viagem-da-siria" className="work-card work-card-two" aria-label="Abrir página da obra Uma Viagem da Síria">
              <div className="work-visual">
                <span className="work-index">02</span>
                <div className="story-poster ivine-poster" aria-hidden="true">
                  <span className="ivine-moon" />
                  <span className="ivine-stars">✦ · ✦</span>
                  <span className="ivine-route" />
                  <span className="pillow"><i /><b>♥</b></span>
                </div>
                <span className="waiting-stamp">Narrativa</span>
              </div>
              <div className="work-info">
                <span className="tag">Ivine • história de refúgio</span>
                <h3>Uma Viagem da Síria</h3>
                <h4>A história de Ivine e o travesseiro</h4>
                <p>Uma trajetória contada a partir das lembranças de Ivine e de um objeto afetivo que atravessa a viagem com ela — elo entre o que ficou e a esperança de recomeçar.</p>
                <div className="theme-list"><span>memória</span><span>refúgio</span><span>acolhimento</span></div>
                <span className="coming-soon">Abrir página da obra <Icon name="arrow" size={17} /></span>
              </div>
            </Link>
          </div>
        </section>

        <section className="class-section section" id="turma">
          <div className="class-collage">
            <div className="photo-placeholder">
              <div className="people-row"><span /><span /><span /><span /><span /></div>
              <strong>Nossa turma</strong>
              <small>foto em breve</small>
            </div>
            <div className="class-sticker">3º<br /><strong>B</strong></div>
            <span className="tape tape-two" />
            <span className="class-note">feito por nós<br />— para todos ✦</span>
          </div>
          <div className="class-copy">
            <div className="section-label">03 — Quem faz</div>
            <h2>Somos o <span>3º B.</span></h2>
            <p>Estudantes do CEd 15 de Ceilândia, no último ano do ensino médio, construindo juntos uma Semana Cultural feita de curiosidade, colaboração e muita personalidade.</p>
            <div className="class-facts">
              <div><strong>1</strong><span>turma unida</span></div>
              <div><strong>2</strong><span>jornadas em foco</span></div>
              <div><strong>∞</strong><span>ideias para criar</span></div>
            </div>
          </div>
        </section>

        <section className="teacher-section" id="contato">
          <div className="teacher-icon"><Icon name="book" size={28} /></div>
          <div>
            <span>Espaço para educadores</span>
            <h2>Professor(a), acompanhe nosso percurso.</h2>
            <p>Acompanhe nossas leituras de Kafka e da história de Ivine, além dos materiais e resultados produzidos para a Semana Cultural.</p>
          </div>
          <button onClick={() => goTo('obras')}>Ver andamento <Icon name="arrow" /></button>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark brand-mark--footer">15</span>
          <div><strong>Semana Cultural</strong><small>CEd 15 de Ceilândia • 3º B</small></div>
        </div>
        <p>Um projeto feito com ideias, afeto e educação pública.</p>
        <span className="footer-mark"><Icon name="sparkles" size={18} /> 2026</span>
      </footer>
    </div>
  )
}

export default App
