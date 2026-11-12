# NEXT+

> **Prepare-se para sua próxima jornada.**

O **NEXT+** é uma plataforma web de orientação para quem está terminando o ensino médio. Ela reúne em um só lugar o que a pessoa precisa para decidir o que vem depois: **teste vocacional**, **cursos gratuitos**, **canais para aprender**, **notícias** de tecnologia, jogos, economia e saúde, **caminhos para a primeira vaga** e um **plano pessoal** com checklist.

Projeto desenvolvido para a **INFOTEC 2026** pela turma do **3º Informática, Sala 01**, da **E.E.T.I. Professor Fontes** (Belo Horizonte, MG).

---

## Sumário

- [Como surgiu a ideia](#como-surgiu-a-ideia)
- [Público-alvo](#público-alvo)
- [Funcionalidades](#funcionalidades)
- [Notícias](#notícias)
- [Teste vocacional](#teste-vocacional)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Como editar o conteúdo](#como-editar-o-conteúdo)
- [Acessibilidade e experiência de uso](#acessibilidade-e-experiência-de-uso)
- [Status e próximos passos](#status-e-próximos-passos)
- [Equipe](#equipe)
- [Documentação acadêmica](#documentação-acadêmica)
- [Aviso importante](#aviso-importante)

---

## Como surgiu a ideia

O NEXT+ nasceu da convivência da turma. Ao longo do curso, dividimos aulas, projetos e muitas conversas, e no último ano do ensino médio percebemos que quase todo mundo enfrentava o mesmo problema: não saber por onde começar a decidir o que fazer depois da formatura. As informações existiam, mas estavam espalhadas. Por isso criamos uma plataforma feita por estudantes, para estudantes, que reúne em um só lugar o que a gente mesmo gostaria de ter encontrado.

## Público-alvo

Estudantes do ensino médio, principalmente os que estão no último ano e ainda têm dúvidas sobre faculdade, curso técnico, cursos livres ou primeiro emprego.

## Funcionalidades

O site é uma página única (SPA) com oito seções, acessadas pelo menu:

| Seção | O que oferece |
|---|---|
| **Início** | Apresentação do projeto e os três passos da jornada: **Descubra**, **Aprenda** e **Conquiste**. |
| **Teste vocacional** | Questionário de 20 perguntas que gera um mapa de afinidades por área. |
| **Cursos** | Temas de estudo (abrem em janela modal) e plataformas de cursos gratuitos. |
| **Canais** | Curadoria de canais do YouTube, cada um com o vídeo de trailer reproduzido no próprio site. |
| **Notícias** | Feed de matérias recentes de tecnologia, jogos, economia e saúde, que levam ao site oficial de cada veículo. |
| **Vagas** | Caminhos para buscar a primeira oportunidade (LinkedIn, Google Vagas e InfoJobs). |
| **Meu plano** | Checklist com barra de progresso, salvo no navegador. |
| **Sobre nós** | A equipe, com perfil de cada integrante, e a história de como surgiu a ideia. |

Há ainda o **tema claro/escuro** (a escolha fica salva) e um botão **Área do Aluno**, que por enquanto abre um aviso de que a área está em desenvolvimento.

### Cursos gratuitos

**Temas** (cada um abre um modal com os links para estudar):

- 💻 **Tecnologia e informática**: freeCodeCamp, Santander Open Academy e Fundação Bradesco.
- 📚 **Organização e estudos**: Santander Open Academy e Fundação Bradesco.
- 🌎 **Idiomas**: MEC Idiomas, Santander Open Academy e Fundação Bradesco.

**Plataformas listadas:**

- [Santander Open Academy](https://www.santanderopenacademy.com/pt_br/sites/courses.html)
- [Fundação Bradesco (EV.G)](https://www.ev.org.br/cursos)
- [FGV Cursos Gratuitos](https://cursosgratuitos.fgv.br/)
- [Aprenda Mais (MEC)](https://aprendamais.mec.gov.br/)
- [Mackenzie Cursos Gratuitos](https://www.mackenzie.br/cursosgratuitos)
- [Google for Education (certificações)](https://edu.google.com/intl/ALL_br/learning-center/certifications/)

Também estão nos temas: [MEC Idiomas](https://www.gov.br/mec/pt-br/mec-idiomas) e [freeCodeCamp](https://www.freecodecamp.org/learn).

### Canais para aprender

Lista vertical: cada canal aparece com sua descrição e o vídeo de trailer logo abaixo, e a pessoa rola a página para ver o próximo. Canais da curadoria:

- [Curso em Vídeo](https://www.youtube.com/@cursoemvideo): programação, informática e outras áreas, em português.
- [Filipe Deschamps](https://www.youtube.com/@FilipeDeschamps): notícias e explicações sobre tecnologia e programação.
- [Me Poupe!](https://www.youtube.com/@MePoupe/videos): educação financeira.
- [Ciência Todo Dia](https://www.youtube.com/@CienciaTodoDia): divulgação científica.
- Mais uma indicação da equipe.

Os vídeos são incorporados com `youtube-nocookie.com` e carregam sob demanda (`loading="lazy"`).

### Notícias

Feed rolável no estilo da tela inicial do Chrome no celular: a pessoa vai descendo a página e encontra matérias recentes de veículos de notícias. Cada matéria é um cartão com **fonte**, **horário** ("há 2 h"), **título** e **miniatura**. Ao tocar no cartão, o site do veículo abre em uma nova aba, e a matéria completa é lida lá, no site oficial.

**Assuntos e fontes**

| Assunto | Fontes |
|---|---|
| Tecnologia | Tecnoblog, g1 Tecnologia e Adrenaline |
| Jogos | Tecnoblog (editoria de jogos) e Flow Games |
| Economia | g1 Economia e Agência Brasil |
| Saúde | Agência Brasil |

**Como funciona**

1. **Leitura das fontes:** cada fonte publica um feed RSS com as matérias mais recentes. Como o navegador não consegue ler RSS diretamente, o site usa o serviço gratuito [rss2json](https://rss2json.com/), que converte o feed em JSON. Para o **Flow Games**, que é um site WordPress, o navegador lê direto a API pública do site (`wp-json`) e o RSS fica como plano B.
2. **Montagem do feed:** o `script.js` busca todas as fontes ao mesmo tempo, junta as matérias, remove as repetidas (a mesma matéria pode aparecer em mais de um assunto) e ordena da mais nova para a mais antiga.
3. **Imagem:** a miniatura vem da própria matéria. Quando não existe ou não carrega, aparece a **imagem padrão da fonte** (por exemplo, `flowgames.png` para o Flow Games) e, se a fonte não tiver uma, um ícone.
4. **Rolagem infinita:** aparecem 10 matérias por vez, e mais 10 são mostradas conforme a pessoa desce (`IntersectionObserver`).
5. **Filtros:** os botões **Tudo**, **Tecnologia**, **Jogos**, **Economia** e **Saúde** ficam fixos no topo e filtram o feed na hora.
6. **Atualização:** o feed só é buscado quando a pessoa abre a aba. As notícias ficam salvas no navegador (`localStorage`) por **15 minutos**, para evitar pedidos repetidos, e se a pessoa voltar depois desse prazo o feed atualiza sozinho. O botão **Atualizar** busca de novo quando ela quiser.
7. **Falhas:** se uma fonte não responder, as outras continuam aparecendo e o site mostra o nome de quem falhou (por exemplo, "não responderam: Flow Games"). Os detalhes do erro ficam no console do navegador (F12). Sem internet, ele mostra as últimas notícias salvas. Se não houver nada salvo, aparece uma mensagem com o botão "Tentar de novo".

**Limitações**

- As notícias são quase em tempo real, e não instantâneas, por causa da atualização a cada 15 minutos.
- O site depende de serviços externos: os feeds dos veículos e o rss2json. O rss2json gratuito tem limite de uso e pode falhar em alguns momentos.
- O feed precisa de internet. Se algum veículo mudar o endereço do feed, a fonte para de aparecer até o endereço ser atualizado em `NOTICIAS`.

**Direitos e créditos:** o NEXT+ mostra apenas título, miniatura e fonte, e leva a pessoa ao site original para ler a matéria. O conteúdo pertence aos veículos, e o NEXT+ não o produz nem o edita.

### Vagas

- [LinkedIn](https://br.linkedin.com/): perfil profissional e contato com recrutadores.
- [Google Vagas](https://jobs.google.com/): vagas de Jovem Aprendiz e estágio.
- [InfoJobs](https://www.infojobs.com.br/): vagas de Jovem Aprendiz e estágio.

### Meu plano

Checklist com barra de progresso. O andamento é salvo no navegador (`localStorage`), sem necessidade de login. Passos:

1. Fazer o teste vocacional do NEXT+
2. Pesquisar 3 cursos ou carreiras que combinam com o resultado
3. Começar um curso gratuito (Santander Open Academy ou Fundação Bradesco)
4. Criar o perfil no LinkedIn
5. Atualizar o currículo
6. Pesquisar vagas de Jovem Aprendiz ou estágio
7. Conversar com alguém que trabalha na área de interesse

## Teste vocacional

O teste é uma **ajuda simples e um ponto de partida**, não um teste psicológico. Ele tem **20 perguntas**, em duas partes:

- **Parte 1, afirmações (12):** a pessoa diz o quanto concorda com cada frase, de "Discordo totalmente" a "Concordo totalmente" (de 0 a 4 pontos).
- **Parte 2, escolhas (8):** a pessoa escolhe a opção que mais combina com ela (2 pontos para a área escolhida). Sempre existe a opção neutra "Depende / nenhuma dessas".

O resultado é um **mapa de afinidades**, com a porcentagem de cada uma das seis áreas, e as **três áreas mais altas** vêm com uma descrição e caminhos para pesquisar:

1. Tecnologia
2. Exatas e engenharias
3. Humanas e sociedade
4. Saúde e ciências da vida
5. Negócios e gestão
6. Comunicação e criação

Ao final, o site sugere próximos passos de pesquisa (ler grades curriculares, conversar com quem trabalha na área, visitar faculdades e escolas técnicas, testar com um curso gratuito e procurar orientação vocacional profissional). O resultado fica salvo no navegador.

## Tecnologias

**Em uso:**

- **HTML5**: estrutura semântica.
- **CSS3**: variáveis CSS, Grid, Flexbox, tema claro/escuro e layout responsivo.
- **JavaScript (puro, sem frameworks)**: navegação por hash, modais, teste vocacional, checklist, tema e feed de notícias (`fetch`, `Promise.allSettled` e `IntersectionObserver`).
- **Feeds RSS + [rss2json](https://rss2json.com/)**: fonte das notícias.
- **Google Fonts**: Sora (títulos) e Source Sans 3 (texto).
- **`localStorage`**: guarda o plano, o resultado do teste, o tema escolhido e as últimas notícias carregadas.

**Previstas para o back-end:**

- **PHP**
- **MySQL**, com **XAMPP** e **phpMyAdmin**

## Estrutura do projeto

```
.
├── index.html   # estrutura das seções, menu e modal
├── style.css    # estilos, tema claro/escuro e responsividade
├── script.js    # dados do site, navegação, modal, teste, plano, tema e notícias
├── flowgames.png # imagem padrão das notícias do Flow Games (logo)
└── README.md
```

O `script.js` guarda os dados do site (cursos, canais, fontes de notícias, plano, equipe, áreas e perguntas do teste) em constantes no topo do arquivo, e o restante do código monta a página a partir delas.

## Como executar

O projeto é estático, então não há instalação nem dependências.

**Opção 1: direto no navegador**

1. Baixe ou clone o repositório.
2. Abra o `index.html` no navegador.

**Opção 2: servidor local (recomendada)**

Pelo **XAMPP**, copie a pasta do projeto para `htdocs`, inicie o Apache e acesse `http://localhost/nome-da-pasta/`.

> A aba **Notícias** precisa de conexão com a internet e deve ser aberta por um servidor local (XAMPP), pois alguns sites só liberam a leitura para páginas servidas por `http://`. Rode pelo servidor local se for usar os vídeos de trailer. Abrir o arquivo direto (`file://`) pode fazer o player do YouTube mostrar erro (como o 153) ou ficar em branco.

## Como editar o conteúdo

Quase tudo se altera no topo do `script.js`:

| Para mudar… | Edite |
|---|---|
| Temas de cursos e seus links | `CURSOS` (campo `extra` para links específicos de um tema) e `PLATAFORMAS` |
| Canais e trailers | `CANAIS` (campo `video` com o ID do vídeo do YouTube) |
| Fontes e assuntos das notícias | `NOTICIAS` (cada assunto tem uma lista de fontes no formato `{ nome, feed }`, onde `feed` é o endereço RSS; sites WordPress podem ter também `wp`, o endereço da API `wp-json`, e qualquer fonte pode ter `logo`, o nome de uma imagem da pasta do projeto usada quando a matéria não tem foto) |
| Tempo de cache e quantidade de matérias por rolagem | `NOTICIAS_TTL` e `NOTICIAS_POR_VEZ` |
| Itens do plano | `PLANO` |
| Integrantes da equipe e links | `EQUIPE` (`github`, `linkedin`, `portfolio`, `rede`; o que ficar vazio não aparece) |
| Áreas do teste | `AREAS` |
| Perguntas do teste | `LIKERT` e `PERGUNTAS` |

As plataformas de cursos e vagas exibidas como cards fixos ficam no `index.html`, nas seções `#cursos` e `#vagas`.

**Pegando o ID de um vídeo do YouTube:** em `youtube.com/watch?v=dQw4w9WgXcQ`, o ID é `dQw4w9WgXcQ`.

## Acessibilidade e experiência de uso

- Link "Ir para o conteúdo" para navegação por teclado.
- Foco visível nos elementos interativos e uso de atributos ARIA (menu, modal e barra de progresso).
- Modal que fecha com `Esc`, com clique fora ou no botão de fechar, e devolve o foco ao elemento anterior.
- Respeito à preferência `prefers-reduced-motion` (sem animações).
- No feed de notícias, o status da atualização é anunciado a leitores de tela e cada cartão avisa que abre o site original em nova aba.
- Tema claro/escuro, que usa a preferência do sistema na primeira visita.
- Layout responsivo, com menu em formato de botão em telas de até 1100 px.
- Links externos abrem em nova aba com `rel="noopener noreferrer"`.

## Status e próximos passos

**Já feito**

- Todas as seções do site, o teste vocacional e o plano salvo no navegador
- Tema claro/escuro
- Cursos, canais e vagas, com trailers de vídeo nos canais
- Aba de notícias com feed rolável, filtros por assunto e links para os sites originais
- Seção "Sobre nós", com equipe e história do projeto

**Em desenvolvimento**

- **Área do Aluno** (login) com PHP e MySQL
- Links de GitHub, LinkedIn, portfólio e redes de todos os integrantes (hoje só um perfil está completo)

## Equipe

3º Informática, Sala 01, E.E.T.I. Professor Fontes, INFOTEC 2026.

- Ana Clara de Almeida Teixeira
- Arthur Gonçalves Duarte
- Bernardo Magalhães Orlando
- João Silva Ribeiro ([GitHub](https://github.com/joaosr8) · [LinkedIn](https://www.linkedin.com/in/joaosr8/))
- Lucas Gomes Schmidt
- Yasmim Santana de Oliveira

## Documentação acadêmica

O projeto também tem documentação acadêmica em Word, com normas da ABNT, para a feira.

## Aviso importante

O teste vocacional do NEXT+ **não é um teste psicológico**, não mede talento e não decide a carreira de ninguém. Ele é só um ponto de partida. Antes de escolher, pesquise mais, converse com quem trabalha na área e, se quiser uma avaliação mais completa, procure orientação vocacional com um psicólogo ou com a orientação da escola.

---

<p align="center">NEXT+ · Prepare-se para sua próxima jornada · INFOTEC 2026</p>
