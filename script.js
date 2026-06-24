/* ═══════════════════════════════════════════════════════════
   SATOSHI'S WORKSHOP v3 — Game Logic
   Narrativa: linear · pragmática · lúdica
   ═══════════════════════════════════════════════════════════ */

"use strict";

/* ─────────────────────────────────
   DADOS: CAPÍTULOS (História)
───────────────────────────────── */
const CAPITULOS = [
    {
        id: 0,
        titulo: "Bloco #0 — O Dia em que Satoshi Ligou o Motor",
        badge: "CAP. 01",
        texto: `3 de Janeiro de 2009. O mundo ainda sente o colapso de 2008.
Bancos pedem socorro ao governo. Poupanças evaporam da noite para o dia.

Em algum lugar desconhecido, um programador chamado Satoshi Nakamoto abre o terminal e digita o comando que vai criar o primeiro bloco da história do Bitcoin.

Ele não tem chefe. Não pede permissão a nenhum banco. Não precisa.

O Bitcoin é uma rede de computadores ao redor do mundo que, juntos, concordam sobre quem possui o quê — sem precisar de nenhuma autoridade central para garantir isso.

Você vai minerar o primeiro bloco. Gire o hasher.`,
        desenho: "⛏️",
        tarefa: "Gire o hasher para minerar o Bloco Gênesis"
    },
    {
        id: 1,
        titulo: "Bloco #1 — O Zelador da Rede",
        badge: "CAP. 02",
        texto: `Agora você sabe como minerar um bloco. Mas e se alguém tentar trapacear?

Imagine que Maria quer enviar 0.5 BTC para João. Para provar que o dinheiro é dela, ela usa sua CHAVE PRIVADA para assinar a transação — como uma assinatura digital que ninguém mais consegue falsificar.

Na Mempool (a sala de espera das transações), chegou uma transação suspeita. Alguém tentou enviar Bitcoin sem ter a chave certa — a assinatura está corrompida.

Nenhum minerador honesto vai incluir uma transação inválida no bloco. A rede rejeita automaticamente.

🎯 Encontre e descarte a transação com assinatura inválida (⚠️).`,
        desenho: "🔑",
        tarefa: "Clique na transação com assinatura inválida para removê-la"
    },
    {
        id: 2,
        titulo: "Bloco #2 — Pizza Day: A Primeira Compra Real",
        badge: "CAP. 03",
        texto: `22 de Maio de 2010. Laszlo Hanyecz posta no fórum BitcoinTalk:

"Vou pagar 10.000 BTC por duas pizzas. Alguém me ajuda?"

Outro usuário aceitou. As pizzas chegaram. A transação foi confirmada.

Foram as primeiras pizzas compradas com Bitcoin. Aqueles 10.000 BTC, hoje, valeriam centenas de milhões de reais.

Mas o que Laszlo fez não foi tolice — ele provou que o Bitcoin podia funcionar como moeda real. Essa transação histórica precisa entrar em um bloco.

🎯 Clique nas transações da Mempool para adicioná-las à Merkle Tree.`,
        desenho: "🍕",
        tarefa: "Clique nas transações para montar a base da Merkle Tree"
    },
    {
        id: 3,
        titulo: "Bloco #3 — A Árvore Que Sela Tudo",
        badge: "CAP. 04",
        texto: `Agora que as transações estão na Merkle Tree, o trabalho do SHA-256 começa.

SHA-256 é uma função matemática com uma propriedade mágica:
• Entre com qualquer texto → ela devolve sempre 64 caracteres
• Mude uma vírgula → o resultado muda completamente
• Impossível fazer o caminho inverso

A Merkle Tree usa esse processo em cascata:
→ As 4 transações viram 4 hashes
→ Os 4 hashes se combinam em 2
→ Os 2 viram 1: a Merkle Root

Esse único número representa TODAS as transações do bloco. Se alguém alterar qualquer transação, a Merkle Root muda. A fraude é detectada instantaneamente.

🎯 Gire o hasher para comprimir a árvore.`,
        desenho: "🌳",
        tarefa: "Gire o hasher para calcular a Merkle Root"
    },
    {
        id: 4,
        titulo: "Bloco #4 — Halving: A Escassez Programada",
        badge: "CAP. 05",
        texto: `28 de Novembro de 2012. Bloco #210.000 minerado.

O protocolo executa automaticamente uma linha de código que estava lá desde o início: a recompensa de mineração é cortada pela metade.

De 50 BTC → 25 BTC por bloco.

Isso acontece a cada 210.000 blocos (~4 anos). Já aconteceu 4 vezes. Em 2140, nenhum Bitcoin novo será criado. O total máximo será sempre 21 milhões.

Por que isso importa?
Ouro é escasso porque a Terra tem quantidade limitada.
Bitcoin é escasso porque o código diz que é. E ninguém pode mudar isso sem convencer a maioria da rede.

A sua recompensa por bloco acabou de cair para 25 BTC. Continue minerando.`,
        desenho: "✂️",
        tarefa: "Mine com a nova recompensa de 25 BTC por bloco"
    },
    {
        id: 5,
        titulo: "Bloco #5 — Consenso: Quando a Rede Concorda",
        badge: "CAP. 06",
        texto: `Você minerou o bloco. Mas um bloco sozinho não vale nada.

O Bitcoin não tem um servidor central para dizer "esse bloco é válido". Em vez disso, a rede inteira vota.

Cada nó da rede recebe o bloco e confere três coisas:
1. As transações são válidas? (assinaturas corretas)
2. O hash começa com zeros suficientes? (PoW válido)
3. O bloco aponta para o bloco anterior correto? (cadeia íntegra)

Se a maioria dos nós aprovar → o bloco entra na chain.
Se algo estiver errado → o bloco é rejeitado. O minerador perde o trabalho.

Esse sistema é chamado de Consenso Nakamoto. Nenhuma autoridade central. Apenas matemática e regras.

🎯 Mine e observe os nós da rede validando seu bloco.`,
        desenho: "🌐",
        tarefa: "Mine o bloco e aguarde o consenso da rede"
    },
    {
        id: 6,
        titulo: "Bloco #6 — Ataque de 51%: Por Que Não Funciona",
        badge: "CAP. 07",
        texto: `Aqui está a pergunta que todo mundo faz: "E se alguém tentar hackear o Bitcoin?"

Vamos testar. Você vai tentar adulterar um bloco já confirmado.

O que acontece matematicamente:
→ Você altera um bloco antigo
→ O hash desse bloco muda
→ O próximo bloco apontava para o hash antigo — agora é inválido
→ Todos os blocos que vieram depois também são inválidos
→ Para a fraude funcionar, você precisaria recalcular toda a chain mais rápido do que a rede honesta está minerando — com mais de 51% do poder computacional global

Em 2024, a rede Bitcoin tem mais de 500 Exahash/s de poder de mineração. Um ataque de 51% custaria bilhões de dólares por hora.

🎯 Clique em um bloco da chain para simular o ataque e ver o que acontece.`,
        desenho: "⚠️",
        tarefa: "Clique em um bloco da chain para simular a adulteração"
    },
    {
        id: 7,
        titulo: "Bloco #7 — Lightning: Bitcoin na Velocidade da Luz",
        badge: "CAP. 08",
        texto: `A chain principal sobreviveu ao ataque. Imutável.

Mas há um limite: a chain principal confirma um bloco a cada ~10 minutos. Isso é perfeito para grandes transações — mas e para comprar um café?

A Lightning Network resolve isso. É como uma "aba aberta" entre duas pessoas:

1. Você e a cafeteria abrem um canal de pagamento (1 transação na chain)
2. Vocês fazem milhares de micropagamentos instantâneos (fora da chain)
3. Quando o canal fecha, apenas o saldo final vai para a blockchain (1 transação)

Resultado: pagamentos em milissegundos, com taxas de frações de centavo — sem sobrecarregar o protocolo base.

🎯 Clique rápido no hasher — simule a velocidade da Lightning!`,
        desenho: "⚡",
        tarefa: "Clique rapidamente no hasher para simular a Lightning Network"
    },
    {
        id: 8,
        titulo: "Bloco #8 — A Ameaça Quântica",
        badge: "CAP. 09",
        texto: `2030 — hipotético. Computadores quânticos com poder de processamento massivo chegam ao mercado.

Uma criptografia normal (RSA) pode ser quebrada por eles. Mas o Bitcoin usa curvas elípticas (secp256k1) — mais resistente, mas não invulnerável.

A questão não é se os computadores quânticos vão existir — mas quando a criptografia atual vai precisar ser atualizada.

A comunidade Bitcoin já discute isso. BIP-360 propõe endereços resistentes a quântico. CRYSTALS-Dilithium e FALCON são algoritmos candidatos.

O Bitcoin não é estático. É um protocolo vivo que a comunidade pode atualizar por consenso — sem precisar de nenhuma empresa ou governo para isso.

🎯 Sustente o hash power — mantenha a rede segura durante a transição!`,
        desenho: "⚛️",
        tarefa: "Sustente o hash power durante a ameaça quântica"
    },
    {
        id: 9,
        titulo: "Bloco #9 — O Protocolo Persiste",
        badge: "CAP. 10",
        texto: `Consenso alcançado. A rede adota novos algoritmos criptográficos.

15 anos depois de Satoshi ligar o motor, o Bitcoin ainda funciona. Nenhuma empresa o controla. Nenhum governo o apagou. Nenhum hacker o quebrou.

Por quê? Porque o Bitcoin não depende de confiança em pessoas — depende de matemática verificável por qualquer computador no mundo.

Cada vez que você usa Bitcoin, você participa de uma rede de verificação distribuída que:
• Não precisa do seu nome
• Não pode ser censurada
• Funciona 24h, 365 dias, em qualquer lugar do planeta

Satoshi desapareceu em 2011. Mas o protocolo vive.

🎯 Sele o bloco final. Você completou o workshop.`,
        desenho: "🛡️",
        tarefa: "Sele o bloco final do protocolo"
    }
];

/* ─────────────────────────────────
   DADOS: GLOSSÁRIO TÉCNICO
───────────────────────────────── */
const GLOSSARIO = {
    timestamp: {
        titulo: "⏱️ Carimbo de Tempo — Timestamp",
        badge: "CAMPO DO BLOCO",
        texto: `O relógio imutável da blockchain.

Cada bloco carrega o momento exato em que foi minerado — um número inteiro que representa segundos desde 1º de Janeiro de 1970 (Unix Time).

Por que isso importa?
O timestamp resolve o problema do "gasto duplo". Se Maria tenta gastar o mesmo Bitcoin duas vezes, os nós da rede verificam qual transação chegou primeiro pelo timestamp e rejeitam a segunda.

Como está selado dentro do hash do bloco, qualquer alteração no horário invalida toda a cadeia a partir daquele ponto. O passado não pode ser reescrito.`
    },
    nonce: {
        titulo: "🎲 O Número do Trabalho — Nonce",
        badge: "PROOF OF WORK",
        texto: `"Number used once" — o número que você muda bilhões de vezes até acertar.

Na mineração, o computador pega todos os dados do bloco e testa:
→ Nonce = 0: hash = "a4f9..." (não começa com zeros)
→ Nonce = 1: hash = "3bc1..." (não começa com zeros)
→ Nonce = 847.392: hash = "0000a3f..." ✓ ENCONTRADO!

Quando o hash começa com o número certo de zeros, o bloco é válido. Esse número de zeros é ajustado pela rede a cada 2016 blocos para garantir que um bloco seja encontrado a cada ~10 minutos — não importa quanto poder computacional exista.

O Nonce não tem valor por si só. Ele é simplesmente a prova de que você gastou energia real para encontrá-lo.`
    },
    hashAnterior: {
        titulo: "🔗 Hash Anterior — O Elo da Corrente",
        badge: "ESTRUTURA DA CHAIN",
        texto: `A cola que une o presente ao passado.

Cada bloco guarda o hash do bloco anterior. É por isso que o sistema se chama block"chain" — corrente de blocos.

O que torna isso poderoso:
→ Se alguém alterar qualquer dado do Bloco #50, o hash do #50 muda
→ O Bloco #51 guarda o hash antigo do #50 — agora aponta para algo inválido
→ Para a fraude funcionar, é preciso recalcular o #50, depois o #51, depois o #52... até o bloco atual
→ E fazer isso mais rápido do que a rede honesta está minerando

Com 500+ Exahash/s de poder global em 2024, isso é computacionalmente impossível.

O passado da blockchain é gravado em pedra matemática.`
    },
    hashAnteriorGenesis: {
        titulo: "🌱 Hash Anterior do Bloco Gênesis",
        badge: "ORIGEM",
        texto: `O Bloco #0 não tem predecessor. É o início absoluto.

Por convenção definida pelo próprio Satoshi Nakamoto no código original, o campo "Hash Anterior" do Bloco Gênesis é preenchido com 64 zeros:

0000000000000000000000000000000000000000000000000000000000000000

Este valor não é um erro. É uma declaração:
"Aqui começa a cadeia. Nada vem antes disto."

É o alicerce sobre o qual toda a história do Bitcoin foi construída em 3 de Janeiro de 2009. Imutável. Verificável por qualquer pessoa com um computador.`
    },
    hashAtual: {
        titulo: "🔏 Hash Atual — A Impressão Digital do Bloco",
        badge: "SHA-256",
        texto: `A identidade única e imutável do bloco.

O Hash Atual é calculado combinando TODOS os dados do bloco:
• Merkle Root (resumo de todas as transações)
• Timestamp
• Nonce
• Hash do bloco anterior
• Número do bloco

O algoritmo usado é o SHA-256, aplicado duas vezes (SHA-256d). O resultado é sempre uma sequência de 64 caracteres hexadecimais (0-9, a-f).

Propriedade chave: mudar qualquer caractere de qualquer transação → a Merkle Root muda → o Hash Atual muda completamente.

Para ser aceito pela rede, o hash precisa começar com um número específico de zeros. Encontrar esse hash é exatamente o que a Prova de Trabalho garante.`
    },
    chaves: {
        titulo: "🔑 Criptografia Assimétrica — Chaves Pública & Privada",
        badge: "CRIPTOGRAFIA",
        texto: `Como a identidade funciona no Bitcoin — sem precisar de CPF, banco ou nome.

🔓 CHAVE PÚBLICA (seu endereço Bitcoin):
Derivada matematicamente da chave privada via curva elíptica (secp256k1). É como seu número de conta — você pode divulgar para qualquer pessoa. Quem tiver esse endereço pode enviar BTC para você.

🔐 CHAVE PRIVADA (sua identidade criptográfica):
Um número de 256 bits gerado aleatoriamente. Com ela você assina transações, provando que você é o dono dos fundos — sem jamais revelar a chave em si.

Como a assinatura funciona:
→ Você quer enviar 0.1 BTC
→ Sua chave privada assina matematicamente a transação
→ Qualquer pessoa pode verificar a assinatura usando sua chave pública
→ Mas ninguém pode forjar sua assinatura sem a chave privada

⚠️ REGRA DE OURO:
Quem tiver sua chave privada, tem seus fundos. Para sempre. Sem reversão. Sem suporte ao cliente.`
    },
    mempool: {
        titulo: "📡 Mempool — A Sala de Espera das Transações",
        badge: "PROTOCOLO",
        texto: `"Memory Pool" — onde as transações aguardam para entrar na blockchain.

Quando você envia Bitcoin, sua transação não vai direto para um bloco. Ela vai primeiro para a Mempool de cada nó da rede que a recebe.

Os mineradores escolhem quais transações incluir no próximo bloco. Eles geralmente escolhem as que pagam mais taxa de rede (fee) — assim como um taxista prefere uma corrida mais longa em hora de pico.

Se a rede estiver congestionada, a Mempool pode ter centenas de milhares de transações esperando. Pague mais taxa → seu Bitcoin chega mais rápido.

Se a Mempool estiver tranquila → transações baratas confirmam em minutos.`
    },
    merkle: {
        titulo: "🌳 Merkle Tree — O Resumo Matemático",
        badge: "ESTRUTURA DE DADOS",
        texto: `Criada por Ralph Merkle em 1979. Bitcoin a usa para resumir centenas de transações em um único número de 64 caracteres.

Como funciona:
1. Cada transação é processada pelo SHA-256 → vira um hash
2. Os hashes são combinados aos pares → novos hashes
3. Continua até restar um único hash: a Merkle Root

Por que isso é genial:
→ Você pode provar que uma transação está em um bloco SEM baixar o bloco inteiro
→ Basta o caminho de hashes até a Merkle Root (chamado de Merkle Proof)
→ Isso permite carteiras leves (como no celular) sem baixar 600GB+ da blockchain completa

Se qualquer transação for alterada, a Merkle Root muda. Fraude detectada instantaneamente.`
    },
    pow: {
        titulo: "⚡ Proof of Work — A Prova de Trabalho",
        badge: "CONSENSO",
        texto: `A solução de Satoshi para o maior problema das redes descentralizadas: quem tem o direito de escrever o próximo bloco?

A resposta: quem gastar energia computacional real.

Como funciona:
1. O computador testa bilhões de combinações de Nonce
2. Para cada combinação, calcula o hash do bloco inteiro
3. Quando o hash começa com zeros suficientes → bloco válido
4. O primeiro minerador a encontrar ganha a recompensa

Por que isso garante segurança:
• Para falsificar um bloco, você precisa refazer o PoW daquele bloco + de todos que vieram depois
• E fazer isso mais rápido que a rede honesta está minerando
• Isso exige mais de 51% do poder computacional global — algo que custaria bilhões e seria facilmente detectado

A beleza: mineradores honestos ganham dinheiro protegendo a rede. Atacantes gastam bilhões para... nada.`
    },
    blockchain: {
        titulo: "📦 Blockchain — O Livro-Caixa Distribuído",
        badge: "FUNDAMENTO",
        texto: `Uma cadeia de blocos, onde cada bloco aponta para o anterior.

O "livro-caixa" (ledger) do Bitcoin registra TODAS as transações já feitas desde o Bloco Gênesis em 2009. Qualquer pessoa pode baixar e verificar toda a história.

O que torna isso especial:
→ Não existe um servidor central que guarda a blockchain
→ Existem ~20.000 nós completos ao redor do mundo, cada um com uma cópia
→ Para "hackear" a blockchain, você precisaria atacar todos eles simultaneamente
→ Se um nó mente, os outros 19.999 o corrigem

Transparência total: você pode verificar qualquer transação de qualquer época em block explorers públicos como mempool.space ou blockchain.com — sem precisar de login, sem pedir permissão.`
    }
};

/* ─────────────────────────────────
   HELPERS
───────────────────────────────── */
function fakeHash(prefix = '0000') {
    const chars = '0123456789abcdef';
    let r = prefix;
    for (let i = 0; i < 60; i++) r += chars[Math.floor(Math.random() * 16)];
    return r;
}

function fakeShortHash(prefix = '') {
    return prefix + Math.random().toString(16).slice(2, 10);
}

/* ─────────────────────────────────
   GAME ENGINE
───────────────────────────────── */
class SatoshisWorkshop {

    constructor() {
        this.filosofia     = null;
        this.capituloAtual = 0;
        this.blocosCriados = 0;
        this.moedas        = 0;
        this.recompensa    = 50;
        this.energia       = 0;
        this.slotsPreenchidos = 0;
        this.ultimoHash    = '0000000000000000';
        this.powAttempts   = 0;
        this.totalAttempts = 0;

        this.ui = {
            titleScreen:   document.getElementById('title-screen'),
            modalNotebook: document.getElementById('notebook-modal'),
            modalTech:     document.getElementById('tech-modal'),
            modalGenesis:  document.getElementById('genesis-modal'),
            modalVictory:  document.getElementById('victory-modal'),

            tarefa:        document.getElementById('current-task'),
            headerBlock:   document.getElementById('header-block'),

            mempool:       document.getElementById('conveyor-track'),
            mempoolEmpty:  document.getElementById('mempool-empty'),

            btnCrank:      document.getElementById('btn-crank'),
            barraEnergia:  document.getElementById('energy-fill'),
            powPct:        document.getElementById('pow-pct'),
            powAttempts:   document.getElementById('pow-attempts'),
            powHint:       document.getElementById('pow-hint'),
            prensa:        document.getElementById('press-machine'),

            prateleira:    document.getElementById('ledger-shelf'),
            contadorMoeda: document.getElementById('coin-count'),
            statusRede:    document.getElementById('network-status'),
            explorer:      document.getElementById('block-explorer'),

            chapterBadge:     document.getElementById('chapter-badge'),
            chapterProgress:  document.getElementById('notebook-progress'),
            progressDots:     document.getElementById('progress-dots'),
            progressLabel:    document.getElementById('progress-label'),
            cpbInner:         document.getElementById('chapter-progress-bar-inner'),
            cpbLabel:         document.getElementById('chapter-progress-label'),
        };

        this._buildProgressDots();
        this._bindEvents();
        window.app = this;
    }

    /* ── Setup ── */
    _buildProgressDots() {
        this.ui.progressDots.innerHTML = '';
        CAPITULOS.forEach((_, i) => {
            const d = document.createElement('div');
            d.className = 'progress-dot';
            d.id = `pdot-${i}`;
            this.ui.progressDots.appendChild(d);
        });
    }

    _bindEvents() {
        document.getElementById('btn-honesto').addEventListener('click',     () => this._escolher('honesto'));
        document.getElementById('btn-oportunista').addEventListener('click', () => this._escolher('oportunista'));
        document.getElementById('btn-start-chapter').addEventListener('click', () => this._fecharCaderno());
        this.ui.btnCrank.addEventListener('click', () => this._girarManivela());
    }

    /* ── Escolha de papel ── */
    _escolher(tipo) {
        this.filosofia = tipo;
        this.ui.titleScreen.classList.remove('active');
        this._abrirCaderno();
    }

    /* ── Modal Caderno ── */
    _abrirCaderno() {
        if (this.capituloAtual >= CAPITULOS.length) return;
        const cap = CAPITULOS[this.capituloAtual];

        document.getElementById('chapter-drawing').textContent = cap.desenho;
        document.getElementById('chapter-title').textContent   = cap.titulo;
        document.getElementById('chapter-text').textContent    = cap.texto;
        document.getElementById('chapter-task-text').textContent = cap.tarefa;
        document.getElementById('chapter-badge').textContent   = cap.badge;
        this.ui.tarefa.textContent = `// ${cap.tarefa}`;

        // Progresso
        const pct = ((this.capituloAtual) / CAPITULOS.length) * 100;
        this.ui.cpbInner.style.width = `${pct}%`;
        this.ui.cpbLabel.textContent = `Capítulo ${this.capituloAtual + 1} / ${CAPITULOS.length}`;

        document.querySelectorAll('.progress-dot').forEach((d, i) => {
            d.className = 'progress-dot';
            if (i < this.capituloAtual)       d.classList.add('done');
            else if (i === this.capituloAtual) d.classList.add('current');
        });
        this.ui.progressLabel.textContent = `${this.capituloAtual + 1} / ${CAPITULOS.length}`;

        this.ui.modalNotebook.classList.add('active');
    }

    _fecharCaderno() {
        this.ui.modalNotebook.classList.remove('active');
        this._iniciarMecanica();
    }

    /* ── Glossário ── */
    mostrarExplicacao(chave) {
        const dados = GLOSSARIO[chave];
        if (!dados) return;
        document.getElementById('tech-title').textContent = dados.titulo;
        document.getElementById('tech-body').textContent  = dados.texto;
        document.getElementById('tech-badge').textContent = dados.badge || 'PROTOCOLO';
        this.ui.modalTech.classList.add('active');
    }

    /* ── Gênesis ── */
    _mostrarGenesis() { this.ui.modalGenesis.classList.add('active'); }

    /* ── Iniciar mecânica por capítulo ── */
    _iniciarMecanica() {
        this._resetarMerkle();
        this.energia = 0;
        this.powAttempts = 0;
        this._atualizarBarra();

        const c = this.capituloAtual;

        // Nó da rede: resetar
        this._setNodeState('all', 'idle');

        // Travar/destravar crank
        const travado = (c === 1 || c === 2 || c === 6);
        this.ui.btnCrank.style.pointerEvents = travado ? 'none' : 'all';

        // Halving
        if (c === 4) this.recompensa = 25;

        // Quantum threat
        const machinePanel = document.getElementById('machine-panel');
        if (c === 8) machinePanel.classList.add('quantum-threat');
        else         machinePanel.classList.remove('quantum-threat');

        // Gerar cartas na mempool
        if (c === 1 || c === 2) {
            this._gerarTransacoes(c);
        } else {
            this._gerarTransacoes('auto');
        }

        // Hint PoW
        if (c === 7) this.ui.powHint.textContent = 'Clique RÁPIDO! Simule microtransações.';
        else if (c === 8) this.ui.powHint.textContent = '⚠ Ameaça quântica! Sustente o hash power!';
        else this.ui.powHint.textContent = 'Clique para minerar.';

        // Target display
        const targets = { 0:'0000...', 4:'0000...', 7:'00...', 8:'000000...' };
        document.getElementById('pow-target').textContent = targets[c] || '0000 xxxxxxx...';
    }

    /* ── Transações na Mempool ── */
    _gerarTransacoes(fase) {
        this.ui.mempool.innerHTML = '';

        const configFases = {
            1:    [
                { id:'TX-0001', val:'0.042 BTC', tipo:'bom' },
                { id:'TX-0002', val:'⚠ SIG INVÁLIDA', tipo:'ruim' },
                { id:'TX-0003', val:'0.003 BTC', tipo:'bom' },
                { id:'TX-0004', val:'0.271 BTC', tipo:'bom' },
            ],
            2:    [
                { id:'TX-PIZZA-1', val:'5.000 BTC — Pizza', tipo:'bom' },
                { id:'TX-PIZZA-2', val:'5.000 BTC — Pizza', tipo:'bom' },
                { id:'TX-0003', val:'0.100 BTC', tipo:'bom' },
                { id:'TX-0004', val:'0.050 BTC', tipo:'bom' },
            ],
            auto: [
                { id:`TX-${fakeShortHash()}`, val:`${(Math.random()*.5+.01).toFixed(3)} BTC`, tipo:'bom' },
                { id:`TX-${fakeShortHash()}`, val:`${(Math.random()*.5+.01).toFixed(3)} BTC`, tipo:'bom' },
                { id:`TX-${fakeShortHash()}`, val:`${(Math.random()*.5+.01).toFixed(3)} BTC`, tipo:'bom' },
                { id:`TX-${fakeShortHash()}`, val:`${(Math.random()*.5+.01).toFixed(3)} BTC`, tipo:'bom' },
            ]
        };

        const txs = configFases[fase] || configFases.auto;
        let contadorBom = 0;

        txs.forEach(tx => {
            const card = document.createElement('div');
            card.className = `tx-card${tx.tipo === 'ruim' ? ' tx-bad' : ''}`;
            card.innerHTML = `<div class="tx-id">${tx.id}</div><div class="tx-val">${tx.val}</div>`;

            card.addEventListener('click', () => {
                if (fase === 1) {
                    if (tx.tipo === 'ruim') {
                        card.classList.add('tx-removing');
                        setTimeout(() => {
                            card.remove();
                            this._checkMempoolEmpty();
                            this.ui.tarefa.textContent = '// Tx inválida removida — inicie o PoW';
                            this.ui.btnCrank.style.pointerEvents = 'all';
                        }, 300);
                    } else {
                        this.mostrarExplicacao('chaves');
                    }
                } else if (fase === 2) {
                    if (this.slotsPreenchidos < 4) {
                        this.slotsPreenchidos++;
                        const slot = document.getElementById(`slot-${this.slotsPreenchidos}`);
                        slot.querySelector('.slot-label').textContent = tx.id.slice(0, 6);
                        slot.querySelector('.slot-hash').textContent  = fakeShortHash('0x');
                        slot.classList.add('node-active');
                        card.remove();
                        this._checkMempoolEmpty();
                        if (this.slotsPreenchidos === 4) {
                            this.ui.tarefa.textContent = '// Merkle base completa — inicie o PoW';
                            this.ui.btnCrank.style.pointerEvents = 'all';
                        }
                    }
                } else {
                    // capítulos de mine automático: clicar adiciona ao slot
                    if (this.slotsPreenchidos < 4) {
                        this.slotsPreenchidos++;
                        const slot = document.getElementById(`slot-${this.slotsPreenchidos}`);
                        slot.querySelector('.slot-label').textContent = tx.id.slice(0, 6);
                        slot.querySelector('.slot-hash').textContent  = fakeShortHash('0x');
                        slot.classList.add('node-active');
                        card.remove();
                        this._checkMempoolEmpty();
                    }
                }
            });

            this.ui.mempool.appendChild(card);
        });

        this._checkMempoolEmpty();
    }

    _checkMempoolEmpty() {
        const hasCards = this.ui.mempool.children.length > 0;
        this.ui.mempoolEmpty.classList.toggle('hidden', hasCards);
    }

    /* ── Girar Manivela (PoW) ── */
    _girarManivela() {
        // Auto-preencher slots se capítulo não é 1 ou 2
        if (this.capituloAtual !== 1 && this.capituloAtual !== 2 && this.slotsPreenchidos < 4) {
            this.slotsPreenchidos = 4;
            document.querySelectorAll('.merkle-slot').forEach((s, i) => {
                s.querySelector('.slot-label').textContent = `Tx ${String.fromCharCode(65+i)}`;
                s.querySelector('.slot-hash').textContent  = fakeShortHash('0x');
                s.classList.add('node-active');
            });
            this._checkMempoolEmpty();
        }

        const mult = (this.capituloAtual === 7) ? 55 : 20;
        this.energia      = Math.min(100, this.energia + mult);
        this.powAttempts += Math.floor(Math.random() * 180000 + 50000);
        this.totalAttempts += this.powAttempts;

        this._atualizarBarra();

        // Rotacionar botão visualmente
        this.ui.btnCrank.style.transform = `rotate(${this.energia * 3.6}deg)`;

        if (this.energia >= 100) {
            this.ui.btnCrank.style.pointerEvents = 'none';
            this.ui.btnCrank.style.transform = '';
            this._acionarPrensaEMerkle();
        }
    }

    _atualizarBarra() {
        this.ui.barraEnergia.style.width = `${this.energia}%`;
        this.ui.powPct.textContent = `${this.energia}%`;
        this.ui.powAttempts.textContent = this.powAttempts.toLocaleString('pt-BR');
    }

    /* ── Animar SHA-256 + Merkle ── */
    _acionarPrensaEMerkle() {
        this.ui.prensa.classList.add('active');

        setTimeout(() => {
            document.getElementById('node-mid-1').classList.add('node-active');
            document.getElementById('node-mid-2').classList.add('node-active');
        }, 300);

        setTimeout(() => {
            const rootNode = document.getElementById('node-root');
            const rootHash = fakeShortHash('0000');
            rootNode.classList.add('node-active');
            rootNode.querySelector('.mnode-hash').textContent = rootHash.slice(0, 8) + '...';
            this.ui.prensa.classList.remove('active');
            this._iniciarConsenso();
        }, 800);
    }

    /* ── Consenso P2P ── */
    _iniciarConsenso() {
        this.ui.statusRede.textContent = '// broadcasting para peers...';
        this._setNodeState('all', 'validating');

        const ids = ['node-a-status', 'node-b-status', 'node-c-status'];
        ids.forEach(id => { document.getElementById(id).textContent = 'validando...'; });

        setTimeout(() => {
            this._setNodeState('all', 'approved');
            ids.forEach(id => { document.getElementById(id).textContent = 'aprovado ✓'; });
            this.ui.statusRede.textContent = `// consenso: 3/3 nós aprovaram`;
            this._guardarBloco();
        }, 1600);
    }

    _setNodeState(target, state) {
        const nodes = ['node-a', 'node-b', 'node-c'];
        nodes.forEach(id => {
            const el = document.getElementById(id);
            el.classList.remove('validating', 'approved', 'rejected');
            if (state !== 'idle') el.classList.add(state);
        });
    }

    /* ── Guardar Bloco na Chain ── */
    _guardarBloco() {
        this.moedas += this.recompensa;
        this.ui.contadorMoeda.textContent = this.moedas;

        const isGenesis      = this.blocosCriados === 0;
        const hashAnterior   = this.ultimoHash;
        const hashNovo       = fakeHash('0000');
        const blocoNum       = this.blocosCriados;

        // Cubo na prateleira
        const cubo = document.createElement('div');
        cubo.className = `block-cube${isGenesis ? ' block-cube-genesis' : ''}`;
        cubo.title = isGenesis ? 'Bloco Gênesis — clique para saber mais' : `Bloco #${blocoNum}`;
        cubo.innerHTML = isGenesis
            ? `<span class="block-num">#0</span><span class="genesis-star">₿</span>`
            : `<span class="block-num">#${blocoNum}</span>`;

        cubo.addEventListener('click', () => {
            if (isGenesis)                    this._mostrarGenesis();
            else if (this.capituloAtual === 6) this._simularAtaque(cubo);
        });

        this.ui.prateleira.appendChild(cubo);
        this.ui.prateleira.parentElement.scrollLeft = this.ui.prateleira.scrollWidth;
        this.ui.headerBlock.textContent = `#${blocoNum}`;

        // Block Explorer card
        const agora = new Date();
        const ts    = `${String(agora.getHours()).padStart(2,'0')}:${String(agora.getMinutes()).padStart(2,'0')}:${String(agora.getSeconds()).padStart(2,'0')}`;
        const nonce = Math.floor(Math.random() * 9000000 + 1000000);
        const txCount = this.slotsPreenchidos || 4;

        const hashAntChave   = isGenesis ? 'hashAnteriorGenesis' : 'hashAnterior';
        const hashAntDisplay = isGenesis ? '0000000000000000000000000000000000000000000000000000000000000000' : hashAnterior;

        const card = document.createElement('div');
        card.className = `block-card${isGenesis ? ' block-card-genesis' : ''}`;
        card.innerHTML = `
            <div class="bc-title">${isGenesis ? '⛏️ Bloco Gênesis' : `Bloco #${blocoNum}`}</div>
            <ul class="bc-fields">
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('timestamp')">⏱ Timestamp:</span>
                    <span class="bc-val">${ts} — ${agora.toLocaleDateString('pt-BR')}</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('nonce')">🎲 Nonce:</span>
                    <span class="bc-val mono">${nonce.toLocaleString('pt-BR')}</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('${hashAntChave}')">🔗 Hash Anterior:</span>
                    <span class="bc-hash">${hashAntDisplay.slice(0, 32)}...</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('hashAtual')">🔏 Hash Atual:</span>
                    <span class="bc-hash">${hashNovo.slice(0, 32)}...</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('merkle')">🌳 Merkle Root:</span>
                    <span class="bc-hash">${fakeHash('').slice(0, 32)}...</span>
                </li>
                <li>
                    <span style="font-family:var(--font-mono);font-size:.74rem;color:var(--text-muted);">📦 Transações:</span>
                    <span class="bc-val">${txCount} tx · +${this.recompensa} BTC (coinbase)</span>
                </li>
            </ul>
            ${blocoNum > 0 ? '<span class="bc-arrow">→</span>' : ''}
        `;

        this.ui.explorer.appendChild(card);
        this.ui.explorer.scrollLeft = this.ui.explorer.scrollWidth;

        this.ultimoHash = hashNovo;
        this.blocosCriados++;

        if (this.capituloAtual !== 6) {
            setTimeout(() => this._avancarFase(), 1300);
        }
    }

    /* ── Simular Ataque 51% ── */
    _simularAtaque(blocoAlvo) {
        // Erro na Merkle Tree
        document.querySelectorAll('.merkle-slot').forEach(n => n.classList.add('node-error'));
        setTimeout(() => document.querySelectorAll('.mid-node').forEach(n => n.classList.add('node-error')), 300);
        setTimeout(() => document.getElementById('node-root').classList.add('node-error'), 600);

        setTimeout(() => {
            // Blocos tremem
            document.querySelectorAll('.block-cube').forEach(b => b.classList.add('cubo-quebrado'));

            this.ui.statusRede.textContent = '// ⚠ ALERTA: divergência de hash detectada!';
            this._setNodeState('all', 'rejected');
            ['node-a-status','node-b-status','node-c-status'].forEach(id => {
                document.getElementById(id).textContent = 'rejeitado ✗';
            });

            setTimeout(() => {
                this.ui.statusRede.textContent = '// fraude rejeitada — restaurando chain...';

                const msg = this.filosofia === 'oportunista'
                    ? `⚠ ATAQUE FALHOU.\n\nA rede detectou a divergência de hash e rejeitou a chain adulterada.\n\nPara ter sucesso, você precisaria de mais de 51% de todo o poder computacional global do Bitcoin — algo que custaria bilhões de dólares e seria detectado em horas.`
                    : `✅ DEMONSTRAÇÃO CONCLUÍDA.\n\nO consenso distribuído torna o passado inviolável.\n\nAlterar 1 bloco exige recalcular toda a chain posterior, mais rápido que a rede honesta. Com 500+ Exahash/s no mundo, isso é computacionalmente impossível.`;

                alert(msg);

                document.querySelectorAll('.block-cube').forEach(b => b.classList.remove('cubo-quebrado'));
                this._resetarMerkle();
                this._setNodeState('all', 'idle');
                ['node-a-status','node-b-status','node-c-status'].forEach(id => {
                    document.getElementById(id).textContent = 'online';
                });
                this.ui.statusRede.textContent = '// chain restaurada — rede sincronizada';

                setTimeout(() => this._avancarFase(), 800);
            }, 2200);
        }, 1000);
    }

    /* ── Avançar Fase ── */
    _avancarFase() {
        this.capituloAtual++;

        // Atualizar progresso da barra global
        const pct = (this.capituloAtual / CAPITULOS.length) * 100;
        this.ui.cpbInner.style.width = `${pct}%`;

        if (this.capituloAtual < CAPITULOS.length) {
            this._abrirCaderno();
        } else {
            this._mostrarVitoria();
        }
    }

    /* ── Tela de Vitória ── */
    _mostrarVitoria() {
        const pct = 100;
        this.ui.cpbInner.style.width = `${pct}%`;

        document.querySelectorAll('.progress-dot').forEach(d => d.classList.add('done'));

        const sub = this.filosofia === 'oportunista'
            ? 'Você tentou burlar o Bitcoin — e aprendeu por que é impossível.'
            : 'Você protegeu a rede e minerou com sucesso!';

        document.getElementById('victory-sub').textContent = sub;

        const statsEl = document.getElementById('victory-stats');
        statsEl.innerHTML = `
            <div class="victory-stat">
                <span class="victory-stat-num">${this.blocosCriados}</span>
                <span class="victory-stat-label">Blocos minerados</span>
            </div>
            <div class="victory-stat">
                <span class="victory-stat-num">${this.moedas}</span>
                <span class="victory-stat-label">BTC acumulados</span>
            </div>
            <div class="victory-stat">
                <span class="victory-stat-num">${CAPITULOS.length}</span>
                <span class="victory-stat-label">Capítulos completos</span>
            </div>
        `;

        const msg = this.filosofia === 'oportunista'
            ? `Você descobriu na prática por que o Bitcoin é resistente a ataques. Cada tentativa de fraude revelou um mecanismo de defesa diferente: assinaturas digitais, Merkle Root, Proof of Work, Consenso Nakamoto.\n\nO Bitcoin não confia em ninguém — e é exatamente isso que o torna confiável.`
            : `Você vivenciou todo o ciclo do Bitcoin: da Mempool até o consenso. Agora você sabe que cada BTC na sua carteira está protegido por matemática verificável, energia computacional real e uma rede global de nós independentes.\n\n"Don't trust, verify." — Princípio fundamental do Bitcoin.`;

        document.getElementById('victory-text').textContent = msg;
        this.ui.modalVictory.classList.add('active');
    }

    /* ── Reset Merkle ── */
    _resetarMerkle() {
        this.slotsPreenchidos = 0;
        document.querySelectorAll('.merkle-slot').forEach((s, i) => {
            s.classList.remove('node-active', 'node-error');
            s.querySelector('.slot-label').textContent = `Tx ${String.fromCharCode(65+i)}`;
            s.querySelector('.slot-hash').textContent  = 'vazio';
        });
        document.querySelectorAll('.mid-node, .root-node').forEach(n => {
            n.classList.remove('node-active', 'node-error');
        });
        const rootHash = document.getElementById('root-hash-display');
        if (rootHash) rootHash.textContent = '—';

        this.ui.mempool.innerHTML = '';
        this._checkMempoolEmpty();
    }
}

/* ── Init ── */
window.addEventListener('DOMContentLoaded', () => {
    new SatoshisWorkshop();
});
