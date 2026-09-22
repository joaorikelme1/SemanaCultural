import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import kafkaPortrait from '../../images/kafka-1923.jpg'
import schoolLogo from '../../images/logoced15.jpeg'

const works = {
  kafka: {
    number: '01',
    eyebrow: 'Prosa breve • PAS/UnB',
    title: 'A Próxima Aldeia',
    author: 'Franz Kafka',
    lead: 'Uma página para atravessar as distâncias entre o tempo, o caminho e aquilo que parece estar tão perto.',
    themes: ['tempo', 'distância', 'limites humanos'],
    introTitle: 'questionar o caminho.',
    summary: [
      'Em uma narrativa extremamente curta, a voz de um avô reflete sobre como a vida pode ser breve demais até mesmo para uma viagem à aldeia vizinha. Uma distância aparentemente simples ganha uma dimensão impossível.',
      'A mudança de perspectiva transforma o caminho em uma pergunta existencial: aquilo que parece próximo quando imaginamos pode se revelar inalcançável diante do tempo disponível e dos limites da experiência humana.',
      'Kafka não determina um único significado para a próxima aldeia. Ela pode representar um objetivo, o futuro, a juventude perdida ou algo que buscamos durante toda a vida sem conseguir alcançar.',
    ],
    facts: [
      ['Forma', 'Prosa breve'],
      ['Escrita', '1916–1917'],
      ['Publicação', '1920'],
      ['Coletânea', 'Um Médico Rural'],
    ],
    themeCards: [
      ['Passagem do tempo', 'O tempo altera nossas condições e também a forma como avaliamos possibilidades e objetivos.'],
      ['Expectativa e realidade', 'O percurso que parece simples no pensamento se mostra maior quando confrontado com a experiência.'],
      ['Limites humanos', 'A obra questiona quanto controle realmente temos sobre o caminho e sobre aquilo que planejamos alcançar.'],
      ['Velhice', 'A perspectiva do avô comprime a vida e faz a distância adquirir um peso que a juventude talvez não perceba.'],
      ['Percepção', 'A aldeia não muda de lugar; o que muda é o olhar lançado sobre a distância e sobre o tempo.'],
      ['Impossibilidade', 'O destino próximo se torna símbolo dos objetivos que permanecem fora de alcance.'],
    ],
    readingTitle: 'A aldeia como metáfora',
    readingText: 'A linguagem direta esconde uma pergunta aberta. A “próxima aldeia” pode ser lida como futuro, sonho, realização ou destino. É essa ausência de resposta definitiva que convida cada leitor a medir sua própria distância.',
    pasTitle: 'Por que olhar para esta obra no PAS?',
    pasText: 'O texto permite discutir condição humana, passagem do tempo, expectativa e realidade. Sua força está em transformar uma situação cotidiana em uma reflexão universal, característica marcante da literatura de Kafka.',
    sources: [
      ['Arquivo Franz Kafka — dados da obra', 'https://www.franzkafka.de/werk/saemtliche-titel/das-naechste-dorf'],
      ['Wikimedia Commons — retrato de 1923', 'https://commons.wikimedia.org/wiki/File:Franz_Kafka,_1923.jpg'],
    ],
    next: '/obras/uma-viagem-da-siria',
    nextLabel: 'Uma Viagem da Síria',
  },
  ivine: {
    number: '02',
    eyebrow: 'Curta animado • PAS/UnB',
    title: 'Uma Viagem da Síria',
    subtitle: 'A história de Ivine e o travesseiro',
    author: 'UNICEF • Unfairy Tales (2016)',
    lead: 'Um espaço guiado por memória, deslocamento e pelos afetos que também viajam com a gente.',
    themes: ['memória', 'refúgio', 'acolhimento'],
    introTitle: 'guardar memórias.',
    summary: [
      'O curta animado apresenta a história real de Ivine, uma menina síria de 14 anos obrigada a deixar sua casa por causa da guerra e a enfrentar uma jornada perigosa em busca de segurança.',
      'Na animação, Pillow — o travesseiro e amigo imaginário de Ivine — ajuda a narrar uma experiência atravessada por medo, perdas e pesadelos. Essa escolha aproxima o público da perspectiva de uma criança e dá forma ao impacto emocional do conflito.',
      'Depois de escapar da Síria, Ivine chega a um campo de refugiados na Alemanha. O destino oferece segurança, mas não apaga as lembranças da viagem: chegar também é o começo de outro percurso.',
    ],
    facts: [
      ['Formato', 'Curta animado'],
      ['Lançamento', '2016'],
      ['Protagonista', 'Ivine, 14 anos'],
      ['Campanha', 'Unfairy Tales'],
    ],
    themeCards: [
      ['Deslocamento forçado', 'Ivine não parte por escolha: o conflito a obriga a abandonar sua casa e buscar proteção.'],
      ['Infância e guerra', 'A narrativa evidencia experiências que nenhuma criança deveria ser obrigada a enfrentar.'],
      ['Memória e perda', 'Mesmo em segurança, as lembranças do lar, da família e da violência continuam presentes.'],
      ['Refúgio', 'A viagem revela que por trás de números e notícias existem pessoas com histórias e direitos.'],
      ['Pillow', 'O amigo imaginário transforma medo e sofrimento em uma linguagem sensível, próxima do universo infantil.'],
      ['Esperança', 'Continuar a jornada também significa procurar uma possibilidade de vida segura e digna.'],
      ['Pertencimento', 'Deixar o lar rompe rotinas e vínculos, criando o desafio de construir familiaridade em outro lugar.'],
      ['Direitos humanos', 'A obra afirma que crianças refugiadas continuam sendo, antes de tudo, crianças com direito à proteção.'],
    ],
    readingTitle: 'Pillow: afeto e testemunho',
    readingText: 'O travesseiro se torna personagem e interlocutor. Ele representa conforto e familiaridade, mas também guarda as lágrimas e os pesadelos de Ivine. Assim, ajuda a comunicar aquilo que uma criança talvez não consiga explicar diretamente.',
    pasTitle: 'Por que olhar para esta obra no PAS?',
    pasText: 'A história humaniza debates sobre guerra, migração, infância e direitos humanos. Em vez de reduzir o refúgio a estatísticas, o curta aproxima o espectador das consequências sociais e emocionais de um deslocamento forçado.',
    sources: [
      ['UNICEF — Ivine and Pillow', 'https://www.unicefusa.org/stories/ivine-and-pillow-one-syrian-childs-journey'],
      ['UNICEF — campanha Unfairy Tales', 'https://www.unicef.org/turkiye/en/press-releases/unicef-launches-unfairy-tales-refugee-and-migrant-children'],
      ['UNICEF — vídeo oficial', 'https://www.youtube.com/watch?v=3scOr_d9Dwo'],
    ],
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

function WorkMedia({ isKafka }) {
  if (isKafka) {
    return (
      <div className="context-media context-media--kafka">
        <figure className="author-photo">
          <img src={kafkaPortrait} alt="Retrato em preto e branco de Franz Kafka, feito em 1923" />
          <figcaption>Franz Kafka, 1923 • fotógrafo desconhecido • domínio público</figcaption>
        </figure>
        <div className="context-note">
          <span>Forma literária</span>
          <strong>Uma narrativa de poucas linhas, aberta a muitas leituras.</strong>
        </div>
      </div>
    )
  }

  return (
    <div className="context-media context-media--ivine">
      <div className="video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/3scOr_d9Dwo"
          title="Ivine and Pillow — vídeo oficial da UNICEF"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="context-note">
        <span>Assista à obra</span>
        <strong>Vídeo oficial da UNICEF, com legendas disponíveis no player.</strong>
      </div>
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
          <img src={schoolLogo} alt="" /><b>CEd 15 <small>3º B</small></b>
        </Link>
        <nav aria-label="Navegação da obra">
          <a href="#sobre">Sobre</a>
          <a href="#contexto">Contexto</a>
          <a href="#temas">Temas</a>
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

        <aside className="work-reader-notice" aria-label="Aviso sobre o conteúdo desta página">
          <span>Nota ao leitor</span>
          <p>Esta página é um material introdutório e complementar produzido pelo 3º B. Ela não pretende ser uma pesquisa aprofundada nem substituir a leitura e o estudo completo da obra.</p>
        </aside>

        <section className="page-intro page-section" id="sobre">
          <div className="page-section-label">01 — Primeiro contato</div>
          <div className="page-intro-grid">
            <div className="intro-heading">
              <h2>Uma obra para<br /><em>{data.introTitle}</em></h2>
              <div className="work-facts">
                {data.facts.map(([label, value]) => (
                  <div key={label}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
            </div>
            <div className="summary-copy">
              <span className="construction-label">Sobre a obra</span>
              {data.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="gallery-section page-section" id="contexto">
          <div className="section-heading-row">
            <div>
              <div className="page-section-label">02 — A obra em foco</div>
              <h2>{isKafka ? <>Autor, forma<br />e publicação.</> : <>Uma história real<br />transformada em animação.</>}</h2>
            </div>
            <p>{isKafka ? 'Kafka concentra uma reflexão existencial em poucas linhas. Conhecer a forma e o momento da publicação ajuda a perceber a força dessa síntese.' : 'A UNICEF transformou o relato de Ivine em um dos curtas da campanha Unfairy Tales, criada para combater preconceitos sobre crianças refugiadas e migrantes.'}</p>
          </div>
          <div className="context-grid">
            <WorkMedia isKafka={isKafka} />
            <div className="context-facts">
              {data.facts.map(([label, value], index) => (
                <article key={label}>
                  <span>0{index + 1}</span>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="research-section page-section" id="temas">
          <div className="page-section-label">03 — Temas principais</div>
          <h2>Ideias para atravessar a obra</h2>
          <div className="research-grid">
            {data.themeCards.map(([theme, description], index) => (
              <article key={theme}>
                <span>0{index + 1}</span>
                <h3>{theme}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="interpretation-section page-section">
          <div className="page-section-label">04 — Chaves de leitura</div>
          <div className="interpretation-grid">
            <article>
              <span className="interpretation-number">A</span>
              <h2>{data.readingTitle}</h2>
              <p>{data.readingText}</p>
            </article>
            <article>
              <span className="interpretation-number">B</span>
              <h2>{data.pasTitle}</h2>
              <p>{data.pasText}</p>
            </article>
          </div>
          <div className="source-box">
            <div><span>Fontes consultadas</span><p>Conteúdo preparado a partir do material da turma e conferido em fontes institucionais.</p></div>
            <ul>
              {data.sources.map(([label, url]) => (
                <li key={url}><a href={url} target="_blank" rel="noreferrer">{label} <Arrow /></a></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="class-production page-section">
          <div>
            <span className="production-sticker">3º B</span>
            <div className="page-section-label">05 — Nossa produção</div>
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
