/* ====== Dados (edite aqui para mudar o conteúdo do site) ====== */
const SANTANDER = 'https://www.santanderopenacademy.com/pt_br/sites/courses.html';
const BRADESCO = 'https://www.ev.org.br/cursos';
const MEC_IDIOMAS = 'https://www.gov.br/mec/pt-br/mec-idiomas';
const FREECODECAMP = 'https://www.freecodecamp.org/learn';

/* Links que aparecem em todos os temas */
const PLATAFORMAS = [
    { nome: 'Santander Open Academy', url: SANTANDER },
    { nome: 'Fundação Bradesco', url: BRADESCO }
];

const CURSOS = [
    { icone: '💻', titulo: 'Tecnologia e informática', desc: 'Lógica de programação, HTML, CSS e outras trilhas para quem quer entrar na área de TI.',
      extra: [{ nome: 'freeCodeCamp', url: FREECODECAMP }] },
    { icone: '📚', titulo: 'Organização e estudos', desc: 'Aprenda a organizar a rotina de estudo e de trabalho e a usar melhor o seu tempo.' },
    { icone: '🌎', titulo: 'Idiomas', desc: 'Cursos básicos de inglês e espanhol para abrir portas na faculdade e no trabalho.',
      extra: [{ nome: 'MEC Idiomas', url: MEC_IDIOMAS }] }
];

const CANAIS = [
    { nome: 'Curso em Vídeo', desc: 'Aulas gratuitas de programação, informática e outras áreas, em português.', url: 'https://www.youtube.com/@cursoemvideo', video: 'KwFrvsnxPW0'},
    { nome: 'Filipe Deschamps', desc: 'Notícias e explicações sobre tecnologia e programação.', url: 'https://www.youtube.com/@FilipeDeschamps', video: 'ZtMzB5CoekE' },
    { nome: 'Me Poupe!', desc: 'Educação financeira para organizar o dinheiro desde cedo.', url: 'https://www.youtube.com/@MePoupe/videos', video: 'eT2y12OgDls' },
    { nome: 'Ciência Todo Dia', desc: 'Divulgação científica para quem gosta de entender como as coisas funcionam.', url: 'https://www.youtube.com/@CienciaTodoDia', video: '3vdzghRCprU' },
    { nome: 'Canal recomendado pela equipe', desc: 'Mais uma indicação da nossa curadoria.', url: 'https://www.youtube.com/channel/UCafFexaRoRylOKdzGBU6Pgg', video: 'c6kJFWd8R30' }
];

/* Notícias: cada assunto tem as suas fontes. Para incluir uma, adicione { nome, feed } (endereço RSS) na lista.
   Sites WordPress sem RSS bom podem usar também { wp } (API wp-json), que o navegador lê direto; o RSS vira plano B.
   Qualquer fonte pode ter { logo: 'arquivo.png' }: imagem da pasta do projeto usada quando a matéria não tem foto. */
const NOTICIAS = {
    tec: { nome: 'Tecnologia', fontes: [
        { nome: 'Tecnoblog', feed: 'https://tecnoblog.net/feed' },
        { nome: 'g1 Tecnologia', feed: 'https://g1.globo.com/rss/g1/tecnologia/' },
        { nome: 'Adrenaline', feed: 'https://adrenaline.com.br/rss' }
    ] },
    jog: { nome: 'Jogos', fontes: [
        { nome: 'Tecnoblog', feed: 'https://tecnoblog.net/tema/jogos/feed' },
        { nome: 'Flow Games', wp: 'https://flowgames.gg/wp-json/wp/v2/posts?per_page=20&_embed=wp:featuredmedia&_fields=link,title,date_gmt,_links,_embedded', feed: 'https://flowgames.gg/feed/', logo: 'flowgames.png' }
    ] },
    eco: { nome: 'Economia', fontes: [
        { nome: 'g1 Economia', feed: 'https://g1.globo.com/rss/g1/economia/' },
        { nome: 'Agência Brasil', feed: 'https://agenciabrasil.ebc.com.br/rss/economia/feed.xml' }
    ] },
    sau: { nome: 'Saúde', fontes: [
        { nome: 'Agência Brasil', feed: 'https://agenciabrasil.ebc.com.br/rss/saude/feed.xml' }
    ] }
};
const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url='; /* converte o RSS em JSON para o navegador conseguir ler */
const NOTICIAS_TTL = 15 * 60 * 1000;  /* reaproveita as notícias salvas por 15 minutos */
const NOTICIAS_POR_VEZ = 10;          /* quantas matérias aparecem a cada rolagem */

const PLANO = [
    'Fazer o teste vocacional do NEXT+',
    'Pesquisar 3 cursos ou carreiras que combinam com meu resultado',
    'Começar um curso gratuito (Santander Open Academy ou Fundação Bradesco)',
    'Criar meu perfil no LinkedIn',
    'Atualizar meu currículo',
    'Pesquisar vagas de Jovem Aprendiz ou estágio',
    'Conversar com alguém que trabalha na área que me interessa'
];

/* Preencha github, linkedin, portfolio e rede de cada integrante (o que ficar vazio não aparece) */
const EQUIPE = [
    { nome: 'Ana Clara de Almeida Teixeira', curto: 'Ana Clara', portfolio: '', rede: '' },
    { nome: 'Arthur Gonçalves Duarte', curto: 'Arthur Gonçalves', portfolio: '', rede: '' },
    { nome: 'Bernardo Magalhães Orlando', curto: 'Bernardo Magalhães', portfolio: 'https://bernardo150908.github.io/meu-site/', rede: 'https://www.instagram.com/_bernardo_orlando/' },
    { nome: 'João Silva Ribeiro', curto: 'João Silva', github: 'https://github.com/joaosr8', linkedin: 'https://www.linkedin.com/in/joaosr8/' },
    { nome: 'Lucas Gomes Schmidt', curto: 'Lucas Gomes', portfolio: '', rede: '' },
    { nome: 'Yasmim Santana de Oliveira', curto: 'Yasmim Santana', portfolio: '', rede: '' }
];

const AREAS = {
    tec: { nome: 'Tecnologia', txt: 'Você curte resolver problemas com lógica e criar coisas digitais.', sug: ['Desenvolvimento de software', 'Redes e infraestrutura', 'Ciência de dados', 'Segurança da informação'] },
    exa: { nome: 'Exatas e engenharias', txt: 'Você gosta de números, cálculo e de entender como as coisas funcionam.', sug: ['Engenharias', 'Matemática e estatística', 'Física', 'Arquitetura'] },
    hum: { nome: 'Humanas e sociedade', txt: 'Você se interessa por pessoas, história, política e pelo mundo.', sug: ['História e geografia', 'Direito', 'Relações internacionais', 'Pedagogia'] },
    sau: { nome: 'Saúde e ciências da vida', txt: 'Você se importa com o cuidado das pessoas e com a ciência do corpo e da natureza.', sug: ['Medicina e enfermagem', 'Psicologia', 'Biologia', 'Nutrição'] },
    neg: { nome: 'Negócios e gestão', txt: 'Você gosta de organizar, liderar e transformar ideias em resultado.', sug: ['Administração', 'Economia', 'Contabilidade', 'Empreendedorismo'] },
    art: { nome: 'Comunicação e criação', txt: 'Você gosta de criar, contar histórias e se expressar.', sug: ['Design', 'Publicidade e jornalismo', 'Audiovisual', 'Música e artes'] }
};

const PERGUNTAS = [
    { q: 'Em um trabalho em grupo, você prefere…', o: [['Montar a parte técnica ou o sistema', 'tec'], ['Fazer os cálculos e conferir os dados', 'exa'], ['Pesquisar o contexto e escrever', 'hum'], ['Organizar o grupo e os prazos', 'neg']] },
    { q: 'Qual assunto você abriria no tempo livre?', o: [['Como um app ou jogo é feito', 'tec'], ['Como funciona o corpo humano', 'sau'], ['Um documentário de história ou política', 'hum'], ['Como criar um vídeo ou uma arte', 'art']] },
    { q: 'Qual dessas matérias você mais gosta?', o: [['Matemática e Física', 'exa'], ['Biologia e Química', 'sau'], ['História, Geografia e Sociologia', 'hum'], ['Artes e Português', 'art']] },
    { q: 'Que tipo de problema você gosta de resolver?', o: [['Um erro no computador', 'tec'], ['Um desafio de lógica ou número', 'exa'], ['Um conflito entre pessoas', 'hum'], ['Uma dificuldade de saúde ou bem-estar', 'sau']] },
    { q: 'Seu ambiente de trabalho ideal é…', o: [['Com computador e projetos próprios', 'tec'], ['Em um laboratório ou campo', 'exa'], ['Em contato direto com pessoas', 'sau'], ['Criando algo novo, com liberdade', 'art']] },
    { q: 'Se você abrisse um negócio, o que faria primeiro?', o: [['Planejaria custos e metas', 'neg'], ['Criaria a marca e a divulgação', 'art'], ['Construiria o produto ou o site', 'tec'], ['Estudaria o público e o mercado', 'hum']] },
    { q: 'Você se imagina daqui a 10 anos…', o: [['Liderando uma equipe ou empresa', 'neg'], ['Criando soluções com tecnologia', 'tec'], ['Cuidando e ajudando pessoas', 'sau'], ['Contando histórias ou criando projetos', 'art']] },
    { q: 'Qual dessas frases combina mais com você?', o: [['“Gosto de entender como tudo funciona.”', 'exa'], ['“Gosto de organizar e fazer acontecer.”', 'neg'], ['“Gosto de entender as pessoas.”', 'hum'], ['“Gosto de construir coisas novas.”', 'tec']] }
];

/* Parte 1 do teste: o quanto a pessoa concorda (0 a 4 pontos). a = área */
const LIKERT = [
    { t: 'Gosto de descobrir como programas, sites e aparelhos funcionam.', a: 'tec' },
    { t: 'Resolver problemas de matemática ou de lógica me dá satisfação.', a: 'exa' },
    { t: 'Gosto de debater ideias, história e assuntos da sociedade.', a: 'hum' },
    { t: 'Me sinto bem quando posso ajudar alguém a ficar melhor.', a: 'sau' },
    { t: 'Gosto de planejar, organizar e assumir a liderança.', a: 'neg' },
    { t: 'Gosto de criar coisas: textos, desenhos, vídeos, músicas ou designs.', a: 'art' },
    { t: 'Tenho paciência para testar, errar e corrigir até funcionar.', a: 'tec' },
    { t: 'Gosto de explicar o porquê das coisas com números e experimentos.', a: 'exa' },
    { t: 'Me interessa entender por que pessoas e países agem como agem.', a: 'hum' },
    { t: 'Tenho curiosidade sobre o corpo humano, a saúde e a natureza.', a: 'sau' },
    { t: 'Me interessa saber como as empresas ganham dinheiro e crescem.', a: 'neg' },
    { t: 'Presto atenção em detalhes visuais e no jeito como algo é comunicado.', a: 'art' }
];

/* ====== Utilidades ====== */
const $ = (s, r = document) => r.querySelector(s);
const salvar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const ler = (k, padrao) => { try { return JSON.parse(localStorage.getItem(k)) ?? padrao; } catch (e) { return padrao; } };
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ====== Navegação (SPA) ====== */
function navegar() {
    const id = location.hash.substring(1) || 'inicio';
    const alvo = document.getElementById(id) || document.getElementById('inicio');
    document.querySelectorAll('.secao').forEach(s => s.classList.toggle('ativa', s === alvo));
    document.querySelectorAll('nav a').forEach(a => {
        if (a.getAttribute('href') === '#' + alvo.id) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
    });
    $('#nav').classList.remove('aberto');
    $('#btn-menu').setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    if (alvo.id === 'noticias') iniciarNoticias();
}
window.addEventListener('hashchange', navegar);
$('#btn-menu').addEventListener('click', () => {
    const aberto = $('#nav').classList.toggle('aberto');
    $('#btn-menu').setAttribute('aria-expanded', aberto);
});

/* ====== Modal ====== */
const modal = $('#modal');
let ultimoFoco = null;
function abrirModal(titulo, html) {
    ultimoFoco = document.activeElement;
    $('#modal-titulo').textContent = titulo;
    $('#modal-corpo').innerHTML = html;
    modal.classList.add('active');
    $('.close-btn').focus();
}
function fecharModal() {
    modal.classList.remove('active');
    if (ultimoFoco) ultimoFoco.focus();
}
$('.close-btn').addEventListener('click', fecharModal);
modal.addEventListener('click', e => { if (e.target === modal) fecharModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) fecharModal(); });

$('#btn-login').addEventListener('click', () =>
    abrirModal('Login NEXT+', '<p>🚧 Área em desenvolvimento. A integração com PHP e banco de dados será adicionada em breve.</p>'));

/* ====== Cursos, canais e equipe ====== */
$('#grid-cursos').innerHTML = CURSOS.map((c, i) =>
    `<button class="card" data-curso="${i}"><h3>${c.icone} ${esc(c.titulo)}</h3><p>Toque para ver onde estudar.</p></button>`).join('');
$('#grid-cursos').addEventListener('click', e => {
    const b = e.target.closest('[data-curso]');
    if (!b) return;
    const c = CURSOS[b.dataset.curso];
    const links = [...(c.extra || []), ...PLATAFORMAS].map((l, i) =>
        `<a class="btn ${i ? 'btn-sec' : ''}" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.nome)}</a>`).join('');
    abrirModal(c.titulo, `<p>${esc(c.desc)}</p><div class="modal-btns">${links}</div>`);
});

$('#grid-canais').innerHTML = CANAIS.map(c =>
    `<article class="card estatico canal">
        <p class="tag">YouTube</p>
        <h3>${esc(c.nome)}</h3>
        <p>${esc(c.desc)}</p>
        ${c.video ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(c.video)}"
            title="Trailer do canal ${esc(c.nome)}" loading="lazy"
            allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>` : ''}
        <a href="${c.url}" target="_blank" rel="noopener noreferrer">Abrir canal</a>
    </article>`).join('');

$('#grid-equipe').innerHTML = EQUIPE.map((m, i) =>
    `<button class="card" data-membro="${i}"><h3>${esc(m.curto)}</h3><p>Toque para ver o perfil.</p></button>`).join('');
$('#grid-equipe').addEventListener('click', e => {
    const b = e.target.closest('[data-membro]');
    if (!b) return;
    const m = EQUIPE[b.dataset.membro];
    const rotulos = [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['portfolio', 'Portfólio'], ['rede', 'Rede social']];
    const links = rotulos.filter(([k]) => m[k]).map(([k, r], i) =>
        `<a class="btn ${i ? 'btn-sec' : ''}" href="${esc(m[k])}" target="_blank" rel="noopener noreferrer">${r}</a>`).join('');
    abrirModal(m.nome, `<p>Integrante do projeto NEXT+.</p>${links ? `<div class="modal-btns">${links}</div>` : '<p><small>Links em breve.</small></p>'}`);
});

/* ====== Teste vocacional ====== */
const quiz = $('#quiz');
const ESCALA = ['Discordo totalmente', 'Discordo', 'Neutro / depende', 'Concordo', 'Concordo totalmente'];
const NEUTRO = ['Depende / nenhuma dessas', null];
const PESO_C = 2;
const ETAPAS = [
    ...LIKERT.map(l => ({ tipo: 'l', bloco: 'Parte 1 de 2 (afirmações)', ...l })),
    ...PERGUNTAS.map(p => ({ tipo: 'c', bloco: 'Parte 2 de 2 (escolhas)', ...p }))
];
const AVISO = `<p class="aviso"><strong>Importante:</strong> este teste é só uma ajuda simples e um ponto de partida. Ele não é um teste psicológico, não mede talento e não decide a sua carreira. Pesquise mais antes de escolher.</p>`;
const PESQUISAR = [
    'Leia a grade curricular dos cursos que apareceram e veja se as matérias te interessam.',
    'Converse com quem estuda ou trabalha na área e pergunte como é o dia a dia.',
    'Pesquise o mercado: o que a profissão faz, onde há vagas e qual a faixa salarial.',
    'Visite faculdades e escolas técnicas, e vá a feiras de profissões e dias abertos.',
    'Teste na prática com um curso gratuito antes de decidir.',
    'Para uma avaliação mais completa, procure orientação vocacional com um psicólogo ou com a orientação da escola.'
];
let passo = -1, pontos = {};

function maximos() {
    const m = {};
    Object.keys(AREAS).forEach(k => m[k] = 0);
    ETAPAS.forEach(e => {
        if (e.tipo === 'l') m[e.a] += ESCALA.length - 1;
        else new Set(e.o.map(o => o[1])).forEach(k => m[k] += PESO_C);
    });
    return m;
}
function renderIntro() {
    quiz.innerHTML = `${AVISO}<p>São ${ETAPAS.length} perguntas e leva cerca de 5 minutos. Não existe resposta certa: responda pelo que você sente hoje. Se não souber, use "Neutro / depende".</p>
        <p style="margin-top:1.2rem"><button class="btn" id="comecar">Começar o teste</button></p>`;
}
function renderQuiz() {
    if (passo < 0) return renderIntro();
    if (passo >= ETAPAS.length) return renderResultado();
    const e = ETAPAS[passo];
    const opcoes = e.tipo === 'l' ? ESCALA.map((t, i) => [t, i]) : [...e.o, NEUTRO];
    quiz.innerHTML = `<p class="q-prog">${e.bloco}: ${passo + 1} de ${ETAPAS.length}</p>
        <div class="barra"><i style="width:${passo / ETAPAS.length * 100}%"></i></div>
        <p class="q-texto">${e.tipo === 'l' ? '<small class="dica">O quanto você concorda com a frase?</small><br>' : ''}${esc(e.tipo === 'l' ? e.t : e.q)}</p>` +
        opcoes.map((o, i) => `<button class="opcao" data-i="${i}">${esc(o[0])}</button>`).join('');
}
function renderResultado() {
    const mx = maximos();
    const lista = Object.keys(AREAS).map(k => [k, Math.round((pontos[k] || 0) / mx[k] * 100)]).sort((a, b) => b[1] - a[1]);
    salvar('next-teste', lista.slice(0, 3).map(x => x[0]));
    quiz.innerHTML = `<div class="res">${AVISO}<h2>Seu mapa de afinidades</h2>
        <p>Quanto mais alta a barra, mais as suas respostas se aproximaram daquela área. Áreas próximas podem se combinar.</p>` +
        lista.map(([k, p]) => `<div class="afin"><span>${esc(AREAS[k].nome)}</span><div class="barra"><i style="width:${p}%"></i></div><b>${p}%</b></div>`).join('') +
        lista.slice(0, 3).map(([k], i) => `<h3 class="res-area">${i + 1}º ${esc(AREAS[k].nome)}</h3>
            <p>${esc(AREAS[k].txt)}</p><p>Caminhos para pesquisar:</p><ul>${AREAS[k].sug.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`).join('') +
        `<h2>Agora, pesquise mais</h2><ul>${PESQUISAR.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
        <p><button class="btn" id="refazer">Refazer o teste</button> <a class="btn btn-sec" href="#cursos">Ver cursos gratuitos</a></p></div>`;
}
quiz.addEventListener('click', e => {
    if (e.target.id === 'comecar' || e.target.id === 'refazer') { passo = 0; pontos = {}; return renderQuiz(); }
    const b = e.target.closest('.opcao');
    if (!b) return;
    const et = ETAPAS[passo], i = Number(b.dataset.i);
    if (et.tipo === 'l') pontos[et.a] = (pontos[et.a] || 0) + i;
    else { const a = (et.o[i] || NEUTRO)[1]; if (a) pontos[a] = (pontos[a] || 0) + PESO_C; }
    passo++;
    renderQuiz();
});
renderQuiz();

/* ====== Meu plano (salvo no navegador) ====== */
let feitos = ler('next-plano', []);
function renderPlano() {
    $('#lista-plano').innerHTML = PLANO.map((t, i) =>
        `<li><label><input type="checkbox" data-i="${i}" ${feitos.includes(i) ? 'checked' : ''}><span>${esc(t)}</span></label></li>`).join('');
    const pct = Math.round(feitos.length / PLANO.length * 100);
    $('#barra-prog').style.width = pct + '%';
    $('#plano .barra').setAttribute('aria-valuenow', pct);
    $('#prog-texto').textContent = `${feitos.length} de ${PLANO.length} passos concluídos`;
}
$('#lista-plano').addEventListener('change', e => {
    const i = Number(e.target.dataset.i);
    feitos = e.target.checked ? [...feitos, i] : feitos.filter(x => x !== i);
    salvar('next-plano', feitos);
    renderPlano();
});
renderPlano();

/* ====== Notícias (feed) ====== */
let noticias = [], filtroNot = 'todas', mostradas = 0, ultimaCarga = 0;
let noticiasIniciadas = false, carregandoNot = false, observador = null;
const sentinela = $('#feed-fim');
const LOGOS = {};
Object.values(NOTICIAS).forEach(c => c.fontes.forEach(f => { if (f.logo) LOGOS[f.nome] = f.logo; }));
const PIXEL = /ebc\.(png|gif)|pixel|track|1x1/i;

const textoLimpo = h => (new DOMParser().parseFromString(h || '', 'text/html').documentElement.textContent || '').trim();
const linkSeguro = u => { try { const x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : ''; } catch (e) { return ''; } };
const imgSegura = u => linkSeguro(u).replace(/^http:/, 'https:');
function dataMs(p) {
    p = String(p || '').trim().replace(' ', 'T');
    if (!p) return 0;
    return Date.parse(/(z|[+-]\d\d:?\d\d)$/i.test(p) ? p : p + 'Z') || 0;
}
function haQuanto(ms) {
    const m = Math.round((Date.now() - ms) / 60000);
    if (m < 1) return 'agora';
    if (m < 60) return `há ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 24) return `há ${h} h`;
    const d = Math.floor(h / 24);
    return d === 1 ? 'ontem' : `há ${d} dias`;
}
function imagemDoItem(it) {
    const cand = [it.thumbnail];
    const e = it.enclosure;
    if (e && e.link && /image|\.(jpe?g|png|webp|gif)(\?|$)/i.test((e.type || '') + e.link)) cand.push(e.link);
    const doc = new DOMParser().parseFromString((it.content || '') + (it.description || ''), 'text/html');
    doc.querySelectorAll('img').forEach(im => {
        if (Number(im.getAttribute('width') || 100) > 5) cand.push(im.getAttribute('src'));
    });
    const ok = cand.map(u => (u && !PIXEL.test(u)) ? imgSegura(u) : '').find(Boolean);
    return ok || '';
}
async function buscarFonte(f) {
    const r = await fetch(RSS2JSON + encodeURIComponent(f.feed));
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    if (d.status !== 'ok' || !Array.isArray(d.items)) throw new Error(d.message || 'resposta inválida');
    return d.items.map(it => ({
        titulo: textoLimpo(it.title), link: linkSeguro(it.link), data: dataMs(it.pubDate),
        img: imagemDoItem(it), fonte: f.nome
    })).filter(n => n.titulo && n.link);
}
/* Sites WordPress têm uma API pública (wp-json) que o navegador lê direto, sem intermediário */
async function buscarWP(f) {
    const r = await fetch(f.wp);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    if (!Array.isArray(d)) throw new Error('resposta inválida');
    return d.map(p => {
        const m = ((p._embedded || {})['wp:featuredmedia'] || [])[0] || {};
        const sz = (m.media_details && m.media_details.sizes) || {};
        const capa = sz.medium_large || sz.medium || sz.large || m;
        return {
            titulo: textoLimpo(p.title && p.title.rendered), link: linkSeguro(p.link), data: dataMs(p.date_gmt),
            img: imgSegura(capa.source_url || ''), fonte: f.nome
        };
    }).filter(n => n.titulo && n.link);
}
async function buscar(f) {
    if (!f.wp) return buscarFonte(f);
    try { return await buscarWP(f); }
    catch (e) { console.warn('API do WordPress falhou em ' + f.nome + ', tentando o RSS:', e); if (!f.feed) throw e; return buscarFonte(f); }
}
async function carregarNoticias(forcar) {
    if (carregandoNot) return;
    const cache = ler('next-noticias', null);
    const cacheOk = cache && Array.isArray(cache.itens) && cache.itens.length;
    if (!forcar && cacheOk && Date.now() - cache.t < NOTICIAS_TTL) {
        noticias = cache.itens; ultimaCarga = cache.t;
        return mostrarNoticias();
    }
    carregandoNot = true;
    $('#btn-atualizar').disabled = true;
    $('#feed-status').textContent = 'Buscando as notícias mais recentes…';
    if (!noticias.length) $('#feed').innerHTML = '<div class="sk" aria-hidden="true"></div>'.repeat(5);

    const fontes = [];
    Object.entries(NOTICIAS).forEach(([cat, c]) => c.fontes.forEach(f => fontes.push({ cat, f })));
    const res = await Promise.allSettled(fontes.map(({ cat, f }) => buscar(f).then(itens => itens.map(n => ({ ...n, cat })))));
    const falhas = [...new Set(res.map((r, i) => {
        if (r.status !== 'rejected') return '';
        console.warn('Fonte sem resposta: ' + fontes[i].f.nome, r.reason);
        return fontes[i].f.nome;
    }).filter(Boolean))];

    const mapa = new Map();
    res.filter(r => r.status === 'fulfilled').forEach(r => r.value.forEach(n => {
        const ja = mapa.get(n.link);
        if (ja) { if (!ja.cats.includes(n.cat)) ja.cats.push(n.cat); if (!ja.img && n.img) ja.img = n.img; }
        else mapa.set(n.link, { titulo: n.titulo, link: n.link, data: n.data, img: n.img, fonte: n.fonte, cats: [n.cat] });
    }));
    const novas = [...mapa.values()].sort((a, b) => b.data - a.data);

    carregandoNot = false;
    $('#btn-atualizar').disabled = false;
    if (novas.length) {
        noticias = novas; ultimaCarga = Date.now();
        salvar('next-noticias', { t: ultimaCarga, itens: novas });
    } else if (!noticias.length && cacheOk) {
        noticias = cache.itens; ultimaCarga = cache.t;   /* sem internet: mostra as últimas salvas */
    }
    mostrarNoticias(falhas, novas.length > 0);
}
function mostrarNoticias(falhas = [], atualizou = true) {
    const st = $('#feed-status');
    if (!noticias.length) {
        st.textContent = '';
        $('#feed').innerHTML = '<div class="feed-vazio"><p>Não foi possível carregar as notícias agora. Confira sua conexão e tente de novo.</p><p><button class="btn" id="tentar" type="button">Tentar de novo</button></p></div>';
        return;
    }
    const hora = new Date(ultimaCarga).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    st.textContent = `Atualizado às ${hora}` + (!atualizou ? ' (mostrando as últimas notícias salvas, não deu para atualizar agora)' : falhas.length ? ' · não responderam: ' + falhas.join(', ') : '');
    renderFeed();
}
const filtradas = () => noticias.filter(n => filtroNot === 'todas' || n.cats.includes(filtroNot));
function cartao(n) {
    const quando = n.data ? ' · ' + haQuanto(n.data) : '';
    const logo = LOGOS[n.fonte] || '';
    const src = n.img || logo;
    const img = src ? `<img src="${esc(src)}" data-logo="${esc(logo)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '';
    return `<a class="noticia" href="${esc(n.link)}" target="_blank" rel="noopener noreferrer">
        <div class="noticia-txt"><span class="noticia-meta">${esc(n.fonte)}${quando}</span>
            <h3>${esc(n.titulo)}</h3><span class="sr">(abre o site original em nova aba)</span></div>
        <div class="noticia-img${src ? '' : ' sem-img'}${!n.img && logo ? ' com-logo' : ''}" aria-hidden="true">${img}</div></a>`;
}
function renderFeed() {
    mostradas = 0;
    $('#feed').innerHTML = filtradas().length ? '' : '<p class="feed-vazio">Nenhuma notícia desse assunto por enquanto.</p>';
    maisNoticias();
}
function maisNoticias() {
    const l = filtradas();
    const lote = l.slice(mostradas, mostradas + (observador ? NOTICIAS_POR_VEZ : l.length));
    if (lote.length) $('#feed').insertAdjacentHTML('beforeend', lote.map(cartao).join(''));
    mostradas += lote.length;
    if (!observador) return;
    observador.unobserve(sentinela);
    if (mostradas < l.length) observador.observe(sentinela);   /* observar de novo dispara a checagem se o fim ainda estiver visível */
}
function iniciarNoticias() {
    if (noticiasIniciadas) {
        if (Date.now() - ultimaCarga > NOTICIAS_TTL) carregarNoticias(true);
        return;
    }
    noticiasIniciadas = true;
    $('#chips').innerHTML = [['todas', 'Tudo'], ...Object.entries(NOTICIAS).map(([k, c]) => [k, c.nome])].map(([k, t]) =>
        `<button class="chip" type="button" data-cat="${k}" aria-pressed="${k === filtroNot}">${esc(t)}</button>`).join('');
    $('#chips').addEventListener('click', e => {
        const b = e.target.closest('[data-cat]');
        if (!b) return;
        filtroNot = b.dataset.cat;
        document.querySelectorAll('#chips .chip').forEach(c => c.setAttribute('aria-pressed', c === b));
        renderFeed();
        window.scrollTo(0, 0);
    });
    $('#btn-atualizar').addEventListener('click', () => carregarNoticias(true));
    $('#feed').addEventListener('click', e => { if (e.target.id === 'tentar') carregarNoticias(true); });
    /* imagem que não carrega vira o ícone padrão (o evento error não "sobe", por isso usamos captura) */
    $('#feed').addEventListener('error', e => {
        if (e.target.tagName !== 'IMG') return;
        const logo = e.target.dataset.logo;
        if (logo && e.target.getAttribute('src') !== logo) {   /* foto da matéria falhou: usa a logo da fonte */
            e.target.parentElement.classList.add('com-logo');
            e.target.setAttribute('src', logo);
            return;
        }
        e.target.parentElement.classList.add('sem-img');       /* nem a logo carregou: mostra o ícone */
        e.target.remove();
    }, true);
    if ('IntersectionObserver' in window)
        observador = new IntersectionObserver(es => { if (es.some(x => x.isIntersecting)) maisNoticias(); }, { rootMargin: '400px' });
    carregarNoticias(false);
}

/* ====== Tema claro/escuro (lembra a escolha) ====== */
const btnTema = $('#btn-tema');
function aplicarTema(escuro) {
    if (escuro) document.body.setAttribute('data-theme', 'dark');
    else document.body.removeAttribute('data-theme');
    btnTema.textContent = escuro ? '☀️' : '🌙';
}
aplicarTema(ler('next-tema', window.matchMedia('(prefers-color-scheme: dark)').matches) === true);
btnTema.addEventListener('click', () => {
    const escuro = document.body.getAttribute('data-theme') !== 'dark';
    aplicarTema(escuro);
    salvar('next-tema', escuro);
});

navegar();
