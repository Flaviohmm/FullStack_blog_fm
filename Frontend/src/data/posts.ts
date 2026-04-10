export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
    content: string;
}

export const posts: BlogPost[] = [
    {
        slug: "por-que-migrei-para-linux-2026",
        title: "Por que migrei 100% para Linux em 2026",
        excerpt: "Após anos alternando entre Windows e Linux, finalmente dei o passo definitivo. Aqui conto como foi a transição e o que aprendi.",
        category: "Linux",
        date: "20 Mar 2026",
        readTime: "5 min",
        tags: ["Linux", "Open Source", "Produtividade"],
        content: `## Introdução

Depois de mais de uma década usando Windows como sistema principal, 2026 foi o ano em que finalmente migrei 100% para Linux. Não foi uma decisão impulsiva — foi o resultado de anos testando distribuições, aprendendo sobre o ecossistema e, acima de tudo, valorizando cada vez mais a **liberdade de controle** sobre minha própria máquina.

## O que motivou a mudança

A motivação veio de vários fatores que se acumularam ao longo do tempo:

- **Privacidade**: O Windows se tornou cada vez mais invasivo em termos de telemetria e coleta de dados. Cada atualização trazia novas "features" que na verdade eram mecanismos de vigilância.
- **Performance**: Meu hardware rodava significativamente melhor no Linux. Boot mais rápido, menos consumo de RAM, sem processos desnecessários em background.
- **Filosofia**: Como defensor da liberdade individual, usar software proprietário que me trata como produto começou a soar contraditório.

## A escolha da distribuição

Testei diversas distros ao longo dos anos:

### Arch Linux
O Arch foi minha escola. Aprendi mais sobre como um sistema operacional funciona instalando Arch do que em qualquer curso. O processo de instalação manual te força a entender cada componente.

### Fedora
Fedora oferece um excelente equilíbrio entre estabilidade e software atualizado. O suporte a Wayland é de primeira classe, e a integração com GNOME é impecável.

### NixOS
Minha escolha final. O NixOS traz um paradigma completamente diferente: **configuração declarativa e reproduzível**. Meu sistema inteiro é definido em um arquivo de configuração que posso versionar no Git.

## Ferramentas que substituí

| Windows | Linux | Nota |
|---------|-------|------|
| Microsoft Office | LibreOffice + LaTeX | Para documentos sérios, LaTeX é imbatível |
| Adobe Photoshop | GIMP + Inkscape | 90% dos casos cobertos perfeitamente |
| Visual Studio | Neovim + LSP | Mais leve, mais rápido, mais configurável |
| Windows Terminal | Alacritty + tmux | Produtividade multiplicada |

## O ecossistema de gaming

Graças ao **Proton** e ao **Steam Deck**, o gaming no Linux evoluiu enormamente. Hoje consigo rodar a grande maioria dos meus jogos sem nenhum problema. O Valve fez um trabalho incrível com o Proton.

## Desafios que enfrentei

Nem tudo são flores. Alguns desafios reais:

1. **Compatibilidade com software bancário**: Alguns bancos brasileiros ainda têm suporte limitado no Linux
2. **Drivers de hardware específico**: Impressoras e scanners podem ser problemáticos
3. **Curva de aprendizado**: Especialmente na linha de comando, há uma curva inicial

## Conclusão

A migração para Linux não é apenas uma escolha técnica — é uma declaração de valores. É escolher **liberdade sobre conveniência**, **controle sobre facilidade**, **privacidade sobre conformidade**.

Se você está considerando a mudança, meu conselho é: comece com dual-boot, escolha uma distribuição amigável como Fedora ou Linux Mint, e vá migrando gradualmente. O ecossistema nunca esteve tão maduro quanto agora.

> "A liberdade não é dada, é conquistada — inclusive no mundo digital."`,
    },
    {
        slug: "bitcoin-reserva-de-valor",
        title: "Bitcoin como reserva de valor: uma análise racional",
        excerpt: "Sem hype, sem maximismo. Uma análise fria e racional sobre o papel do Bitcoin como ativo de proteção patrimonial.",
        category: "Economia",
        date: "15 Mar 2026",
        readTime: "8 min",
        tags: ["Bitcoin", "Investimentos", "Economia"],
        content: `## Introdução

O debate sobre Bitcoin frequentemente oscila entre dois extremos: os maximistas que acreditam que BTC vai substituir todas as moedas fiduciárias, e os céticos que o consideram uma bolha especulativa sem valor intrínseco. A verdade, como quase sempre, está em algum lugar no meio.

## O que torna o Bitcoin único

### Escassez programática
Diferente de qualquer ativo na história, o Bitcoin tem uma oferta **matematicamente limitada** a 21 milhões de unidades. Não existe banco central que possa "imprimir mais Bitcoin".

### Descentralização
Nenhum governo, empresa ou indivíduo controla a rede Bitcoin. Isso o torna resistente à censura e à confiscação — algo especialmente relevante em países com histórico de instabilidade monetária.

### Portabilidade
Você pode carregar bilhões de dólares em Bitcoin na sua cabeça (memorizando uma seed phrase). Tente fazer isso com ouro ou imóveis.

## Bitcoin vs. Ouro

A comparação com o ouro é a mais natural:

- **Escassez**: Bitcoin é mais escasso (oferta fixa vs. mineração contínua de ouro)
- **Divisibilidade**: Bitcoin é divisível até 8 casas decimais
- **Verificabilidade**: Verificar Bitcoin é trivial; verificar ouro requer equipamento
- **Transporte**: Bitcoin é infinitamente mais transportável

## Os riscos reais

Uma análise honesta precisa reconhecer os riscos:

1. **Volatilidade**: Mesmo diminuindo ao longo do tempo, ainda é significativa
2. **Regulação**: Governos podem dificultar (mas não eliminar) seu uso
3. **Risco tecnológico**: Embora improvável, vulnerabilidades no protocolo são um risco teórico
4. **Adoção**: Se a adoção não continuar crescendo, a tese perde força

## Estratégia racional de alocação

Para um investidor racional, Bitcoin pode fazer sentido como **1% a 10%** de um portfólio diversificado. A ideia é:

- Alocar o que você pode perder 100%
- Fazer DCA (Dollar Cost Averaging) em vez de tentar timing
- Armazenar em cold wallet (não em exchanges)
- Ter horizonte de longo prazo (5+ anos)

## Conclusão

Bitcoin não é uma solução mágica nem um esquema fraudulento. É uma tecnologia monetária com propriedades únicas que o tornam uma **opção racional de diversificação** e proteção patrimonial, especialmente para quem vive em países com moedas constantemente desvalorizadas — como o Brasil.`,
    },
    {
        slug: "self-hosting-liberdade-digital",
        title: "Self-hosting: liberdade digital na prática",
        excerpt: "Como montar seu próprio servidor para email, cloud storage e mais, usando Docker e Linux.",
        category: "Tecnologia",
        date: "10 Mar 2026",
        readTime: "6 min",
        tags: ["Self-hosting", "Docker", "Linux"],
        content: `## Introdução

Self-hosting é o ato de hospedar seus próprios serviços digitais em vez de depender de empresas como Google, Microsoft ou Amazon. É a materialização prática da soberania digital.

## Por que self-hosting?

### Privacidade
Seus dados ficam **sob seu controle**. Nenhuma empresa está minerando seus emails, fotos ou documentos para vender publicidade.

### Liberdade
Você não está sujeito a mudanças de termos de serviço, aumentos de preço ou cancelamentos arbitrários de conta.

### Aprendizado
Montar e manter sua própria infraestrutura é uma das melhores formas de aprender sobre redes, Linux, segurança e DevOps.

## Stack recomendada

Aqui está o que eu uso no meu homelab:

### Hardware
- **Servidor**: Um mini PC com Intel N100 (baixo consumo, silencioso)
- **Storage**: 2x SSD NVMe em RAID 1 para redundância
- **UPS**: No-break básico para proteção contra quedas de energia

### Software base
- **OS**: Debian 12 Stable (confiável e leve)
- **Container runtime**: Docker + Docker Compose
- **Reverse proxy**: Traefik (com SSL automático via Let's Encrypt)
- **DNS**: Cloudflare (DNS público) + Pi-hole (DNS local)

## Serviços que hospedo

### Nextcloud — Substituto do Google Drive
Nextcloud é a peça central do meu setup. Ele substitui:
- Google Drive → Armazenamento de arquivos
- Google Calendar → Calendário
- Google Contacts → Contatos
- Google Keep → Notas

### Vaultwarden — Gerenciador de senhas
Um servidor compatível com Bitwarden, mas muito mais leve. Todas as minhas senhas ficam no meu servidor, sincronizadas entre todos os dispositivos.

### Immich — Substituto do Google Photos
Backup automático de fotos do celular com reconhecimento facial e busca por IA. A interface é impressionante.

### Uptime Kuma — Monitoramento
Dashboard bonito para monitorar a disponibilidade de todos os meus serviços, com alertas via Telegram.

## Docker Compose básico

Um exemplo simplificado da minha configuração:

\`\`\`yaml
version: "3.8"
services:
  traefik:
    image: traefik:v3
    ports:
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  nextcloud:
    image: nextcloud:28
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.nc.rule=Host(\\\`cloud.meudominio.com\\\`)"
\`\`\`

## Segurança essencial

Self-hosting vem com responsabilidade:

1. **Firewall**: Configure UFW ou iptables corretamente
2. **Updates**: Mantenha tudo atualizado (automatize com Watchtower)
3. **Backups**: Regra 3-2-1 (3 cópias, 2 mídias, 1 offsite)
4. **SSH**: Desabilite login com senha, use chaves Ed25519
5. **VPN**: Considere WireGuard para acesso remoto seguro

## Conclusão

Self-hosting não é para todos, mas para quem valoriza privacidade e liberdade digital, é um investimento que vale cada hora dedicada. Comece pequeno — um Pi-hole ou Vaultwarden — e vá expandindo conforme ganha confiança.`,
    },
    {
        slug: "liberalismo-classico-seculo-xxi",
        title: "O liberalismo clássico no século XXI",
        excerpt: "Por que os princípios de liberdade individual e economia de mercado continuam mais relevantes do que nunca.",
        category: "Política",
        date: "5 Mar 2026",
        readTime: "7 min",
        tags: ["Liberalismo", "Política", "Liberdade"],
        content: `## Introdução

O liberalismo clássico — a filosofia política que defende liberdade individual, propriedade privada, governo limitado e economia de mercado — é frequentemente mal compreendido no debate público brasileiro. Neste artigo, exploro por que esses princípios continuam fundamentais no século XXI.

## Os pilares do liberalismo clássico

### Liberdade individual
O indivíduo é soberano sobre si mesmo, seu corpo e sua mente. Nenhum grupo, maioria ou governo tem o direito de ditar como uma pessoa deve viver, desde que ela não agrida terceiros.

### Propriedade privada
O direito à propriedade é a base de todos os outros direitos. Sem propriedade privada, não existe liberdade de expressão, de religião ou de associação de forma genuína.

### Governo limitado
O Estado deve existir para proteger direitos individuais — vida, liberdade e propriedade — e nada mais. Cada expansão do poder estatal é uma contração da liberdade individual.

### Livre mercado
A cooperação voluntária entre indivíduos livres produz mais prosperidade do que qualquer planejamento central. Isso não é teoria — é o que a história demonstra repetidamente.

## Liberalismo não é libertinagem

Um equívoco comum é confundir liberalismo com ausência de valores. Pelo contrário: liberais clássicos geralmente possuem valores fortes — apenas entendem que esses valores devem ser promovidos por persuasão, não por coerção estatal.

## O problema do estatismo

### Incentivos perversos
Políticos e burocratas respondem a incentivos políticos, não econômicos. Isso inevitavelmente leva a má alocação de recursos.

### Concentração de poder
Quanto mais poder o Estado acumula, maior o prêmio por capturá-lo — e maior a corrupção resultante.

### Efeitos não intencionais
Regulações bem-intencionadas frequentemente produzem o oposto do pretendido. Leis de salário mínimo aumentam o desemprego; controle de aluguéis reduz a oferta de moradia.

## Aplicações práticas no Brasil

O Brasil é um caso de estudo perfeito dos males do estatismo:

1. **Carga tributária absurda**: Trabalhamos quase 5 meses por ano só para pagar impostos
2. **Burocracia paralisante**: Abrir uma empresa leva meses e montanhas de papel
3. **Protecionismo**: Pagamos o dobro por eletrônicos graças a tarifas de importação
4. **Monopólios estatais**: Serviços públicos caros e de baixa qualidade

## Conclusão

O liberalismo clássico não é uma ideologia utópica — é um framework pragmático para organizar a sociedade de forma a maximizar a liberdade e a prosperidade. No Brasil, onde o Estado é onipresente e ineficiente, esses princípios são mais urgentes do que nunca.

> "A liberdade não é um luxo dos tempos de paz — é a condição necessária para a prosperidade."`,
    },
    {
        slug: "rust-vs-go",
        title: "Rust vs Go: quando usar cada um?",
        excerpt: "Uma comparação prática entre duas das linguagens mais promissoras para sistemas e backend.",
        category: "Tecnologia",
        date: "1 Mar 2026",
        readTime: "10 min",
        tags: ["Rust", "Go", "Backend"],
        content: `## Introdução

Rust e Go são duas das linguagens que mais cresceram na última década, mas servem propósitos diferentes. Neste artigo, comparo ambas de forma prática para ajudar você a escolher a ferramenta certa para cada projeto.

## Go: simplicidade e produtividade

### Pontos fortes
- **Curva de aprendizado suave**: Go é deliberadamente simples. A linguagem inteira cabe na sua cabeça.
- **Concorrência nativa**: Goroutines tornam programação concorrente quase trivial
- **Compilação rápida**: Feedback instantâneo durante o desenvolvimento
- **Ecossistema maduro**: Excelente para APIs REST, microserviços e ferramentas CLI

### Quando usar Go
- APIs e microserviços
- Ferramentas de DevOps e CLI
- Projetos com equipes grandes (simplicidade = consistência)
- Quando time-to-market importa

## Rust: performance e segurança

### Pontos fortes
- **Zero-cost abstractions**: Performance comparável a C/C++ com abstrações de alto nível
- **Memory safety sem GC**: O borrow checker previne bugs de memória em tempo de compilação
- **Type system poderoso**: Enums, pattern matching e traits são extremamente expressivos
- **Segurança de threads**: Data races são impossíveis por design

### Quando usar Rust
- Sistemas de alta performance (databases, game engines)
- WebAssembly
- Sistemas embarcados
- Quando segurança de memória é crítica

## Comparação direta

| Aspecto | Go | Rust |
|---------|-----|------|
| Curva de aprendizado | Fácil | Difícil |
| Performance | Muito boa | Excelente |
| Gerenciamento de memória | Garbage collector | Ownership system |
| Concorrência | Goroutines | async/await + Tokio |
| Compilação | Rápida | Lenta |
| Ecossistema web | Maduro | Crescendo |

## Minha experiência pessoal

Uso Go para 80% dos meus projetos backend — APIs, automações e ferramentas. A produtividade é imbatível.

Uso Rust quando preciso de performance extrema ou estou construindo algo de baixo nível. Meu último projeto em Rust foi um parser de logs que processa 2GB/s.

## Conclusão

Não existe linguagem perfeita. Go e Rust são complementares, não competidoras. Escolha Go quando produtividade e simplicidade importam mais. Escolha Rust quando performance e segurança de memória são inegociáveis.

A melhor decisão é aprender ambas e usar cada uma onde ela brilha.`,
    },
    {
        slug: "privacidade-digital-guia-2026",
        title: "Privacidade digital: guia essencial 2026",
        excerpt: "Ferramentas, práticas e mindset para proteger seus dados no mundo digital moderno.",
        category: "Privacidade",
        date: "25 Fev 2026",
        readTime: "9 min",
        tags: ["Privacidade", "Segurança", "Ferramentas"],
        content: `## Introdução

Em 2026, a vigilância digital atingiu níveis sem precedentes. Governos e corporações coletam, analisam e monetizam cada aspecto da nossa vida digital. Proteger sua privacidade não é paranoia — é higiene digital básica.

## Fundamentos: o mindset correto

### Modelo de ameaças
Antes de escolher ferramentas, defina seu modelo de ameaças:
- **De quem** você quer se proteger? (Big tech, governo, hackers, stalkers?)
- **O que** você quer proteger? (Comunicações, localização, identidade, dados financeiros?)
- **Qual o impacto** se falhar? (Inconveniência, perda financeira, risco físico?)

### Privacidade é um espectro
Você não precisa viver como Edward Snowden. Cada passo em direção à privacidade já é uma melhoria.

## Ferramentas essenciais

### Navegador
- **Firefox** com configuração hardened (ou Librewolf)
- **Brave** como alternativa mainstream
- Extensões: uBlock Origin, Privacy Badger, HTTPS Everywhere

### Comunicação
- **Signal**: Mensagens criptografadas end-to-end. O padrão ouro.
- **ProtonMail**: Email criptografado com sede na Suíça
- **SimpleX**: Para os mais paranóicos — sem identificadores de usuário

### VPN
- **Mullvad**: Aceita pagamento em cash, não pede email
- **ProtonVPN**: Boa integração com ProtonMail
- Evite VPNs "grátis" — se é grátis, o produto é você

### DNS
- **NextDNS** ou **Pi-hole**: Bloqueie trackers e ads no nível do DNS
- Configure DNS-over-HTTPS para evitar que seu ISP monitore suas consultas DNS

### Gerenciador de senhas
- **Bitwarden** (ou Vaultwarden self-hosted)
- Senhas únicas e complexas para cada serviço
- Ative 2FA em tudo (use Aegis ou chave hardware como YubiKey)

### Sistema operacional
- **Linux** no desktop (de preferência com full-disk encryption)
- **GrapheneOS** no celular (se usar Pixel)

## Práticas diárias

1. **Não use Google para buscas**: Troque por DuckDuckGo, SearXNG ou Brave Search
2. **Minimize redes sociais**: Cada post é dado que você está doando
3. **Revise permissões de apps**: A maioria não precisa de acesso à sua câmera/microfone
4. **Use email aliases**: SimpleLogin ou addy.io para cadastros online
5. **Pague com privacidade**: Cash quando possível, Monero para digital

## Conclusão

Privacidade digital não é um destino — é uma jornada contínua. Comece com o que é fácil (trocar navegador, usar gerenciador de senhas) e vá avançando gradualmente. Cada passo conta.

> "Argumentar que você não se importa com privacidade porque não tem nada a esconder é como dizer que não se importa com liberdade de expressão porque não tem nada a dizer." — Edward Snowden`,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}