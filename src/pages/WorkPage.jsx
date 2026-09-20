import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const works = {
  kafka: {
    number: '01',
    eyebrow: 'Literatura • PAS/UnB',
    title: 'A Próxima Aldeia',
    author: 'Franz Kafka',
    lead: 'Uma página para atravessar as distâncias entre o tempo, o caminho e aquilo que parece estar tão perto.',
    themes: ['tempo', 'distância', 'caminho'],
    next: '/obras/uma-viagem-da-siria',
    nextLabel: 'Uma Viagem da Síria',
  },
  ivine: {
    number: '02',
    eyebrow: 'Narrativa • PAS/UnB',
    title: 'Uma Viagem da Síria',
    subtitle: 'A história de Ivine e o travesseiro',
    author: 'A jornada de Ivine',
    lead: 'Um espaço guiado por memória, deslocamento e pelos afetos que também viajam com a gente.',
    themes: ['memória', 'refúgio', 'acolhimento'],
    next: '/obras/a-proxima-aldeia',
    nextLabel: 'A Próxima Aldeia',
  },
}

const Arrow = ({ back = false }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={back ? 'M19 12H5' : 'M5 12h14'} />
    <path d={back ? 'm11 18-6-6 6-6' : 'm13 6 6 6-6 6'} />
  </svg>
)

function KafkaArtwork() {
  return (
    <div className="page-art page-art--kafka" aria-label="Ilustração de um caminho em direção a uma aldeia">
      <span className="page-kafka-sun" />
      <span className="page-kafka-road" />
      <span className="page-house page-house--one" />
      <span className="page-house page-house--two" />
      <span className="page-traveler" />
      <span className="page-art-word">longe?</span>
    </div>
  )
}

function IvineArtwork() {
  return (
    <div className="page-art page-art--ivine" aria-label="Ilustração de um travesseiro sob um céu estrelado">
      <span className="page-ivine-moon" />
      <span className="page-stars">✦ &nbsp; · &nbsp; ✦ &nbsp; ·</span>
      <span className="page-ivine-route" />
      <span className="page-pillow"><i /><b>♥</b></span>
      <span className="page-art-word">lembrar.</span>
    </div>
  )
}

function WorkPage({ work }) {
  const data = works[work]
  const isKafka = work === 'kafka'

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${data.title} | Semana Cultural`
    return () => { document.title = 'Semana Cultural | CEd 15' }
  }, [data.title])

  return (
    <div className={`work-page work-page--${work}`}>
      <header className="work-nav">
        <Link to="/" className="work-back"><Arrow back /> Voltar ao projeto</Link>
        <Link to="/" className="work-mini-brand" aria-label="Página inicial do CEd 15">
          <span>15</span><b>CEd 15 <small>3º B</small></b>
        </Link>
        <nav aria-label="Navegação da obra">
          <a href="#sobre">Sobre</a>
          <a href="#galeria">Galeria</a>
          <a href="#pesquisa">Pesquisa</a>
        </nav>
      </header>

      <main>
        <section className="work-hero">
          <div className="work-hero-copy">
            <span className="work-number">Obra {data.number}</span>
            <p className="work-eyebrow">{data.eyebrow}</p>
            <h1>{data.title}</h1>
            {data.subtitle && <h2>{data.subtitle}</h2>}
            <p className="work-author">{data.author}</p>
            <p className="work-lead">{data.lead}</p>
            <div className="page-themes">
              {data.themes.map((theme) => <span key={theme}>{theme}</span>)}
            </div>
          </div>
          <div className="work-hero-visual">
            {isKafka ? <KafkaArtwork /> : <IvineArtwork />}
            <span className="visual-caption">Identidade visual da obra • 3º B</span>
          </div>
          <a href="#sobre" className="scroll-hint">Começar a leitura <span>↓</span></a>
        </section>

        <section className="page-intro page-section" id="sobre">
          <div className="page-section-label">01 — Primeiro contato</div>
          <div className="page-intro-grid">
            <h2>Um espaço para<br /><em>{isKafka ? 'questionar o caminho.' : 'guardar memórias.'}</em></h2>
            <div>
              <span className="construction-label">Conteúdo em construção</span>
              <p>Esta área será usada para apresentar a obra, seu contexto e os primeiros caminhos de interpretação escolhidos pela turma.</p>
              <div className="text-placeholder" aria-label="Espaço reservado para texto">
                <i /><i /><i /><i />
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section page-section" id="galeria">
          <div className="section-heading-row">
            <div>
              <div className="page-section-label">02 — Galeria visual</div>
              <h2>Imagens que ajudam<br />a contar a história.</h2>
            </div>
            <p>Espaço reservado para fotografias, ilustrações, referências e registros da produção da turma.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-placeholder gallery-placeholder--large">
              <span>+</span><figcaption>Imagem principal</figcaption>
            </figure>
            <figure className="gallery-placeholder">
              <span>+</span><figcaption>Referência visual</figcaption>
            </figure>
            <figure className="gallery-placeholder">
              <span>+</span><figcaption>Processo da turma</figcaption>
            </figure>
          </div>
        </section>

        <section className="research-section page-section" id="pesquisa">
          <div className="page-section-label">03 — Trilhas de pesquisa</div>
          <h2>Pontos para explorar</h2>
          <div className="research-grid">
            {data.themes.map((theme, index) => (
              <article key={theme}>
                <span>0{index + 1}</span>
                <h3>{theme}</h3>
                <p>Área preparada para reunir descobertas, perguntas e referências sobre este eixo da obra.</p>
                <div className="card-lines"><i /><i /><i /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="class-production page-section">
          <div>
            <span className="production-sticker">3º B</span>
            <div className="page-section-label">04 — Nossa produção</div>
            <h2>O olhar da turma.</h2>
            <p>Aqui entrarão o trabalho final, os bastidores e os materiais criados para a Semana Cultural.</p>
          </div>
          <div className="production-placeholder"><span>Em breve</span><i /></div>
        </section>

        <Link to={data.next} className="next-work">
          <span>Continuar explorando</span>
          <strong>{data.nextLabel}</strong>
          <Arrow />
        </Link>
      </main>

      <footer className="work-footer">
        <Link to="/">CEd 15 de Ceilândia • Semana Cultural</Link>
        <span>Turma 3º B • 2026</span>
      </footer>
    </div>
  )
}

export default WorkPage
