const capitulos = [
    { id: 0, titulo: "Bloco #0 — Gênesis", texto: "3 de Janeiro de 2009. O sistema financeiro global em colapso. Satoshi ativa o protocolo.\n\nGire o hasher para gerar o primeiro bloco da história — o alicerce imutável de toda a rede Bitcoin.", desenho: "⛏️", tarefa: "Gire o hasher (Proof of Work)" },
    { id: 1, titulo: "Bloco #1 — Assinaturas Digitais", texto: "Nem toda transação é válida. Uma delas carrega uma assinatura digital corrompida — chave privada inválida.\n\nAuditores da rede detectam e descartam transações fraudulentas antes de incluí-las em qualquer bloco.", desenho: "🔑", tarefa: "Descarte a Tx com assinatura inválida" },
    { id: 2, titulo: "Bloco #2 — Pizza Day", texto: "22 de Maio de 2010. Laszlo Hanyecz paga 10.000 BTC por duas pizzas — a primeira transação real com Bitcoin.\n\nClique nas transações para hashear cada uma e preencher a base da Merkle Tree.", desenho: "🍕", tarefa: "Selecione as Txs para a Merkle Tree" },
    { id: 3, titulo: "Bloco #3 — Merkle Tree", texto: "Gire o hasher. As transações são comprimidas camada a camada pelo SHA-256 até formar a Merkle Root — o lacre criptográfico único de todo o bloco.", desenho: "🌳", tarefa: "Gire o hasher para comprimir" },
    { id: 4, titulo: "Bloco #4 — Halving", texto: "28 de Novembro de 2012. Bloco #210.000 minerado.\n\nO protocolo corta a emissão pela metade: de 50 BTC para 25 BTC. Escassez matemática programada no código — imutável, previsível.", desenho: "✂️", tarefa: "Gire o hasher (PoW)" },
    { id: 5, titulo: "Bloco #5 — Consenso Nakamoto", texto: "Nenhum bloco entra sozinho na chain. Os nós da rede verificam o hash, conferem as regras do protocolo e só então adicionam o bloco ao ledger.\n\nObserve os nós validarem seu bloco.", desenho: "🌐", tarefa: "Minere e aguarde o consenso" },
    { id: 6, titulo: "Bloco #6 — Ataque de 51%", texto: "Um ator malicioso tenta reescrever o histórico alterando um bloco passado. Na prateleira, clique em um bloco para simular a adulteração.\n\nObserve a Merkle Tree e os nós da rede reagirem.", desenho: "⚠️", tarefa: "Clique em um bloco na chain" },
    { id: 7, titulo: "Bloco #7 — Lightning Network", texto: "A chain principal sobreviveu ao ataque. Agora opera em alta velocidade com a Lightning Network — camada 2 que permite microtransações instantâneas sem sobrecarregar o protocolo base.", desenho: "⚡", tarefa: "Gire o hasher rapidamente!" },
    { id: 8, titulo: "Bloco #8 — Ameaça Quântica", texto: "Computadores quânticos com poder de processamento massivo tentam quebrar chaves privadas por força bruta.\n\nA rede precisa de consenso urgente. Mantenha o hash power ativo!", desenho: "⚛️", tarefa: "Sustente o hash power!" },
    { id: 9, titulo: "Bloco #9 — Criptografia Pós-Quântica", texto: "Consenso alcançado. A rede adota algoritmos resistentes a computadores quânticos — como CRYSTALS-Dilithium e FALCON.\n\nO protocolo evolui. A descentralização persiste.", desenho: "🛡️", tarefa: "Sela o bloco final" }
];

const explicacoesTecnicas = {
    timestamp: {
        titulo: "⏱️ Carimbo de Tempo (Timestamp)",
        texto: "O relógio imutável da rede.\n\nNa Blockchain, o tempo é crucial para evitar o 'Gasto Duplo'. Sabendo a ordem cronológica exata, a rede impede que alguém tente gastar a mesma moeda duas vezes.\n\nCada bloco carrega o momento exato em que foi minerado. Como esse dado está selado dentro do Hash, qualquer tentativa de alterar o horário invalida toda a cadeia a partir daquele ponto."
    },
    nonce: {
        titulo: "🎲 O Número de Trabalho (Nonce)",
        texto: "O enigma que o seu computador resolveu girando a manivela.\n\nNa mineração (Proof of Work), a máquina testa bilhões de números até encontrar um Nonce que faça o Hash do bloco começar com vários zeros — como '0000a3f...'.\n\nEste número não tem valor por si só: ele é a PROVA de que você gastou energia computacional real para minerar o bloco. É impossível falsificar sem refazer todo o trabalho."
    },
    hashAnterior: {
        titulo: "🔗 Hash Anterior — O Elo da Corrente",
        texto: "A cola que une o presente ao passado.\n\nCada bloco guarda o Hash do bloco anterior, formando uma corrente (daí o nome Blockchain). Se alguém alterar qualquer dado de um bloco antigo, o seu Hash muda — e todos os blocos seguintes que apontavam para ele ficam com um elo inválido.\n\nIsso torna a fraude computacionalmente impossível: para alterar 1 bloco, é necessário recalcular toda a cadeia que vem depois dele, mais rápido do que a rede honesta está minerando. Algo inviável na prática."
    },
    hashAnteriorGenesis: {
        titulo: "🌱 Hash Anterior do Bloco Gênesis",
        texto: "O Bloco #0 não tem predecessor.\n\nPor ser o primeiro bloco da história do Bitcoin, não existe nenhum bloco antes dele. Por isso, seu campo 'Hash Anterior' é preenchido com zeros:\n\n0000000000000000000000000000000000000000000000000000000000000000\n\nEste valor não é um erro — é uma convenção definida pelo próprio Satoshi Nakamoto no código original do Bitcoin. Ele sinaliza à rede: 'aqui começa tudo'. É o alicerce sobre o qual toda a cadeia foi construída em Janeiro de 2009."
    },
    hashAtual: {
        titulo: "🔏 Hash Atual — A Impressão Digital do Bloco",
        texto: "A identidade única e imutável deste bloco.\n\nO Hash Atual é calculado a partir de TODOS os dados do bloco: transações, timestamp, nonce e o hash anterior. Qualquer alteração, mesmo de um único caractere, gera um Hash completamente diferente.\n\nNo Bitcoin, o algoritmo usado é o SHA-256 (aplicado duas vezes). O resultado é sempre uma sequência de 64 caracteres hexadecimais. Para ser aceito pela rede, este Hash precisa começar com um certo número de zeros — isso é exatamente o que a 'Prova de Trabalho' garante."
    },
    chaves: {
        titulo: "🔑 Criptografia Assimétrica — Chaves P2P",
        texto: "Como funciona a identidade no Bitcoin:\n\n🔓 Chave Pública (Endereço Bitcoin):\nDeriivada matematicamente da chave privada via curva elíptica (secp256k1). É o seu endereço público — você pode divulgar livremente. Qualquer pessoa pode enviar BTC para ele.\n\n🔐 Chave Privada (Seed / Assinatura):\nUm número de 256 bits gerado aleatoriamente. Com ela você assina transações, provando que você é o dono dos fundos — sem jamais revelar a chave em si. É sua identidade criptográfica.\n\n⚠️ REGRA ABSOLUTA:\nNunca compartilhe sua chave privada. Não existe 'recuperação'. Quem tiver sua chave privada controla seus fundos — para sempre, sem reversão."
    }
};

class GameEngine {
    constructor() {
        this.filosofia = null;
        this.capituloAtual = 0;
        this.blocosCriados = 0;
        this.moedas = 0;
        this.recompensa = 50;
        this.energia = 0;
        this.slotsPreenchidos = 0;
        this.ultimoHash = "0000000000000000";

        this.ui = {
            titleScreen: document.getElementById('title-screen'),
            modalNotebook: document.getElementById('notebook-modal'),
            modalTech: document.getElementById('tech-modal'),
            modalGenesis: document.getElementById('genesis-modal'),
            tarefa: document.getElementById('current-task'),
            esteira: document.getElementById('conveyor-track'),
            btnManivela: document.getElementById('btn-crank'),
            barraEnergia: document.getElementById('energy-fill'),
            prensa: document.getElementById('press-machine'),
            prateleira: document.getElementById('ledger-shelf'),
            contadorMoeda: document.getElementById('coin-count'),
            statusRede: document.getElementById('network-status'),
            nosRede: document.querySelectorAll('.network-node'),
            explorer: document.getElementById('block-explorer')
        };

        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('btn-honesto').addEventListener('click', () => this.escolherFilosofia('honesto'));
        document.getElementById('btn-oportunista').addEventListener('click', () => this.escolherFilosofia('oportunista'));
        document.getElementById('btn-start-chapter').addEventListener('click', () => this.fecharCaderno());
        this.ui.btnManivela.addEventListener('click', () => this.girarManivela());
        window.app = this;
    }

    escolherFilosofia(tipo) {
        this.filosofia = tipo;
        this.ui.titleScreen.classList.remove('active');
        this.abrirCaderno();
    }

    abrirCaderno() {
        if (this.capituloAtual >= capitulos.length) return;
        const dados = capitulos[this.capituloAtual];
        document.getElementById('chapter-title').innerText = dados.titulo;
        document.getElementById('chapter-text').innerText = dados.texto;
        document.getElementById('chapter-drawing').innerText = dados.desenho;
        this.ui.tarefa.innerText = `// ${dados.tarefa}`;
        this.ui.modalNotebook.classList.add('active');
    }

    fecharCaderno() {
        this.ui.modalNotebook.classList.remove('active');
        this.iniciarMecanica();
    }

    mostrarExplicacao(chave) {
        const dados = explicacoesTecnicas[chave];
        if (!dados) return;
        document.getElementById('tech-title').innerText = dados.titulo;
        document.getElementById('tech-body').innerText = dados.texto;
        this.ui.modalTech.classList.add('active');
    }

    mostrarGenesisModal() {
        this.ui.modalGenesis.classList.add('active');
    }

    iniciarMecanica() {
        this.resetarMerkle();
        this.energia = 0;
        this.atualizarEnergia();

        if (this.capituloAtual === 1 || this.capituloAtual === 2 || this.capituloAtual === 6) {
            this.ui.btnManivela.style.pointerEvents = "none";
        } else {
            this.ui.btnManivela.style.pointerEvents = "all";
        }

        if (this.capituloAtual === 1 || this.capituloAtual === 2) {
            this.gerarCartas(this.capituloAtual);
        } else if (this.capituloAtual === 4) {
            this.recompensa = 25;
        } else if (this.capituloAtual === 8) {
            document.querySelector('.machine-section').classList.add('quantum-threat');
        } else if (this.capituloAtual === 9) {
            document.querySelector('.machine-section').classList.remove('quantum-threat');
            document.querySelector('.machine-section').style.borderColor = "var(--seal-good)";
        }
    }

    resetarMerkle() {
        this.slotsPreenchidos = 0;
        document.querySelectorAll('.merkle-slot').forEach(slot => {
            slot.innerText = "Vazio";
            slot.classList.remove('node-active', 'node-error');
        });
        document.querySelectorAll('.mid-node, .root-node').forEach(node => node.classList.remove('node-active', 'node-error'));
        this.ui.esteira.innerHTML = '';
    }

    gerarCartas(fase) {
        const tipos = fase === 1 ? ['bom', 'ruim', 'bom', 'bom'] : ['bom', 'bom', 'bom', 'bom'];
        const valores = ['0.042 BTC', '0.100 BTC', '0.003 BTC', '0.271 BTC'];
        tipos.forEach((tipo, i) => {
            const carta = document.createElement('div');
            carta.className = `carta${tipo === 'ruim' ? ' carta-invalida' : ''}`;
            carta.innerHTML = `
                <div class="carta-id">TX-${String(i+1).padStart(4,'0')}</div>
                <div class="carta-valor">${tipo === 'ruim' ? '⚠ SIG INVÁLIDA' : valores[i]}</div>
            `;

            carta.addEventListener('click', () => {
                if (fase === 1) {
                    if (tipo === 'ruim') {
                        carta.classList.add('carta-removendo');
                        setTimeout(() => {
                            carta.remove();
                            this.ui.tarefa.innerText = "// Tx inválida removida — inicie o PoW";
                            this.ui.btnManivela.style.pointerEvents = "all";
                        }, 300);
                    } else {
                        this.mostrarExplicacao('chaves');
                    }
                } else if (fase === 2 || fase === 3) {
                    if (this.slotsPreenchidos < 4) {
                        this.slotsPreenchidos++;
                        document.getElementById(`slot-${this.slotsPreenchidos}`).innerText = "Hashed";
                        document.getElementById(`slot-${this.slotsPreenchidos}`).classList.add('node-active');
                        carta.remove();
                        if (this.slotsPreenchidos === 4 && fase === 2) {
                            this.ui.tarefa.innerText = "// Merkle base completa — inicie o PoW";
                            this.ui.btnManivela.style.pointerEvents = "all";
                        }
                    }
                }
            });
            this.ui.esteira.appendChild(carta);
        });
    }

    girarManivela() {
        if (this.capituloAtual >= 3 && this.slotsPreenchidos < 4 && this.capituloAtual !== 6) {
            this.slotsPreenchidos = 4;
            document.querySelectorAll('.merkle-slot').forEach(s => s.classList.add('node-active'));
        }

        const forceMultiplier = (this.capituloAtual === 7) ? 50 : 20;
        this.energia += forceMultiplier;
        this.atualizarEnergia();
        this.ui.btnManivela.style.transform = `rotate(${this.energia * 5}deg)`;

        if (this.energia >= 100) {
            this.ui.btnManivela.style.pointerEvents = "none";
            this.acionarPrensaEAnimarMerkle();
        }
    }

    atualizarEnergia() { this.ui.barraEnergia.style.width = `${this.energia}%`; }

    acionarPrensaEAnimarMerkle() {
        this.ui.prensa.classList.add('active');
        setTimeout(() => {
            document.getElementById('node-mid-1').classList.add('node-active');
            document.getElementById('node-mid-2').classList.add('node-active');
        }, 300);
        setTimeout(() => {
            document.getElementById('node-root').classList.add('node-active');
            this.ui.prensa.classList.remove('active');
            this.iniciarConsenso();
        }, 800);
    }

    iniciarConsenso() {
        this.ui.statusRede.innerText = "// broadcasting para peers...";
        this.ui.nosRede.forEach(node => { node.className = 'network-node validating'; });

        setTimeout(() => {
            this.ui.nosRede.forEach(node => { node.className = 'network-node approved'; });
            this.ui.statusRede.innerText = "// consenso: 3/3 nós aprovaram";
            this.guardarBloco();
        }, 1500);
    }

    guardarBloco() {
        this.moedas += this.recompensa;
        this.ui.contadorMoeda.innerText = this.moedas;

        const isGenesis = this.blocosCriados === 0;
        const hashAnteriorDoBloco = this.ultimoHash;
        const hashNovo = isGenesis
            ? "0000a" + Math.floor(Math.random() * 90000 + 10000)
            : "0000x" + Math.floor(Math.random() * 90000 + 10000);
        const numeroBlocoAtual = this.blocosCriados;

        // Cubo na prateleira
        const bloco = document.createElement('div');
        bloco.className = `cubo${isGenesis ? ' cubo-genesis' : ''}`;
        bloco.title = isGenesis ? 'Clique para saber sobre o Bloco Gênesis!' : `Bloco #${numeroBlocoAtual}`;
        bloco.innerHTML = isGenesis
            ? `<span class="cubo-num">#0</span><span class="cubo-genesis-star">₿</span>`
            : `<span class="cubo-num">#${numeroBlocoAtual}</span>`;

        bloco.addEventListener('click', () => {
            if (isGenesis) {
                this.mostrarGenesisModal();
            } else if (this.capituloAtual === 6) {
                this.simularAtaque(bloco);
            }
        });
        this.ui.prateleira.appendChild(bloco);
        this.ui.prateleira.scrollLeft = this.ui.prateleira.scrollWidth;

        // Ficha Técnica no Explorador
        const date = new Date();
        const timestamp = `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`;
        const nonce = Math.floor(Math.random() * 9000000 + 1000000);

        // Escolhe qual explicação de Hash Anterior usar
        const hashAntChave = isGenesis ? 'hashAnteriorGenesis' : 'hashAnterior';
        const hashAntDisplay = isGenesis ? '0000000000000000' : hashAnteriorDoBloco;

        const ficha = document.createElement('div');
        ficha.className = `ficha${isGenesis ? ' ficha-genesis' : ''}`;
        ficha.innerHTML = `
            <h4>${isGenesis ? '⛏️ Bloco Gênesis' : `Bloco #${numeroBlocoAtual}`}</h4>
            <ul>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('timestamp')">⏱ Timestamp:</span>
                    <span class="ficha-valor">${timestamp}</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('nonce')">🎲 Nonce:</span>
                    <span class="ficha-valor">${nonce}</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('${hashAntChave}')">🔗 Hash Anterior:</span>
                    <span class="ficha-hash ficha-valor">${hashAntDisplay}</span>
                </li>
                <li>
                    <span class="hotspot" onclick="app.mostrarExplicacao('hashAtual')">🔏 Hash Atual:</span>
                    <span class="ficha-hash ficha-valor">${hashNovo}</span>
                </li>
            </ul>
            ${numeroBlocoAtual > 0 ? '<span class="ficha-seta">➔</span>' : ''}
        `;
        this.ui.explorer.appendChild(ficha);
        this.ui.explorer.scrollLeft = this.ui.explorer.scrollWidth;

        this.ultimoHash = hashNovo;
        this.blocosCriados++;

        if (this.capituloAtual !== 6) setTimeout(() => this.avancarFase(), 1200);
    }

    simularAtaque(blocoAlvo) {
        document.querySelectorAll('.merkle-slot').forEach(n => n.classList.add('node-error'));
        setTimeout(() => document.querySelectorAll('.mid-node').forEach(n => n.classList.add('node-error')), 300);
        setTimeout(() => document.getElementById('node-root').classList.add('node-error'), 600);

        setTimeout(() => {
            const blocos = document.querySelectorAll('.cubo');
            blocos.forEach(b => b.classList.add('quebrado'));

            this.ui.statusRede.innerText = "// ALERTA: divergência de hash detectada";
            this.ui.nosRede.forEach(node => node.className = 'network-node mono rejected');

            setTimeout(() => {
                this.ui.statusRede.innerText = "// fraude rejeitada — restaurando chain...";
                let msg = this.filosofia === 'oportunista'
                    ? "ATAQUE FALHOU.\nA rede detectou a divergência de hash e rejeitou a cadeia adulterada.\nProva de Trabalho impossível de falsificar."
                    : "LIÇÃO VITAL:\nO consenso distribuído torna o passado inviolável.\nAlterar 1 bloco exige recomputar toda a cadeia — mais rápido que a rede honesta. Inviável.";
                alert(msg);

                blocos.forEach(b => b.classList.remove('quebrado'));
                this.resetarMerkle();
                this.ui.nosRede.forEach(node => node.className = 'network-node mono');
                this.ui.statusRede.innerText = "// chain restaurada — rede sincronizada";
                this.avancarFase();
            }, 2000);
        }, 1000);
    }

    avancarFase() {
        this.capituloAtual++;
        if (this.capituloAtual < capitulos.length) this.abrirCaderno();
        else alert("🎉 PROTOCOLO COMPLETO\nVocê concluiu a trilha Satoshi's Workshop!\nAgora você entende os fundamentos que fazem o Bitcoin funcionar.");
    }
}

window.addEventListener('DOMContentLoaded', () => { new GameEngine(); });
