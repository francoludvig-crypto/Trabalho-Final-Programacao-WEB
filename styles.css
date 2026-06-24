/* ═══════════════════════════════════════════════════════════
   SATOSHI'S WORKSHOP v3 — Bitcoin Terminal Design System
   Palette: void · BTC orange · amber · signal green · alert red
   Tipografia: Space Grotesk (UI) + JetBrains Mono (dados)
   ═══════════════════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,600;0,700;1,400&display=swap');

/* ── Variables ── */
:root {
    --void:           #07090E;
    --surface:        #0C1018;
    --surface-2:      #111822;
    --surface-3:      #172030;
    --card:           #141B28;
    --card-2:         #1C2638;

    --btc:            #F7931A;
    --btc-dark:       #C8720E;
    --btc-glow:       rgba(247,147,26,.28);
    --amber:          #FFB347;

    --green:          #00D97E;
    --green-glow:     rgba(0,217,126,.22);
    --red:            #FF3B30;
    --red-glow:       rgba(255,59,48,.22);
    --blue:           #4A9EFF;
    --quantum:        #8B5CF6;
    --quantum-glow:   rgba(139,92,246,.3);
    --pending:        #F59E0B;

    --text:           #E2EAF4;
    --text-muted:     #5E6F84;
    --text-dim:       #2E3D50;
    --text-hash:      #4A9EFF;

    --border:         rgba(255,255,255,.06);
    --border-btc:     rgba(247,147,26,.28);
    --border-active:  rgba(247,147,26,.55);

    --font-ui:   'Space Grotesk', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

    --r-xs: 4px;
    --r-sm: 8px;
    --r-md: 12px;
    --r-lg: 18px;
    --r-xl: 24px;

    --shadow-sm:  0 2px 8px rgba(0,0,0,.45);
    --shadow-md:  0 6px 24px rgba(0,0,0,.55);
    --shadow-btc: 0 0 24px var(--btc-glow), 0 6px 20px rgba(0,0,0,.5);
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
button { font-family: var(--font-ui); cursor: pointer; border: none; }

/* ── Body ── */
body {
    background-color: var(--void);
    background-image:
        radial-gradient(ellipse 90% 55% at 50% -15%, rgba(247,147,26,.07) 0%, transparent 65%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpath d='M30 4L58 20v36L30 72 2 56V20z' fill='none' stroke='rgba(247,147,26,0.035)' stroke-width='1'/%3E%3Cpath d='M30 52L58 68v36L30 120 2 104V68z' fill='none' stroke='rgba(247,147,26,0.035)' stroke-width='1'/%3E%3C/svg%3E");
    font-family: var(--font-ui);
    color: var(--text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

/* ── Utilitários ── */
.mono { font-family: var(--font-mono); }

.label-tag {
    font-size: .64rem;
    font-weight: 700;
    letter-spacing: .13em;
    text-transform: uppercase;
    color: var(--text-muted);
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    padding: 3px 10px;
    background: rgba(255,255,255,.03);
    border: 1px solid var(--border);
    border-radius: 20px;
}
.label-tag::before {
    content: '';
    width: 5px; height: 5px;
    background: var(--btc);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--btc);
    flex-shrink: 0;
}

.helper-text {
    font-family: var(--font-mono);
    font-size: .74rem;
    color: var(--text-muted);
    text-align: center;
    margin-top: .4rem;
}

/* ─────────────────────────────────
   MODAIS
───────────────────────────────── */
.modal-overlay {
    position: fixed; inset: 0;
    background: rgba(7,9,14,.88);
    backdrop-filter: blur(18px) saturate(1.3);
    display: flex; align-items: center; justify-content: center;
    z-index: 1000;
    opacity: 0; pointer-events: none;
    transition: opacity .3s ease;
    padding: 1rem;
}
.modal-overlay.active { opacity: 1; pointer-events: all; }

/* ── Tela de Título ── */
.title-content {
    background: var(--card);
    border: 1px solid var(--border-btc);
    border-radius: var(--r-xl);
    padding: 2.5rem 2.25rem 2rem;
    text-align: center;
    max-width: 540px; width: 100%;
    box-shadow: var(--shadow-btc);
    position: relative;
    overflow: hidden;
}
.title-content::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 75% 45% at 50% 0%, rgba(247,147,26,.1) 0%, transparent 65%);
    pointer-events: none;
}

.title-badge {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: .6rem; font-weight: 700;
    letter-spacing: .15em; text-transform: uppercase;
    color: var(--btc);
    background: rgba(247,147,26,.08);
    border: 1px solid var(--border-btc);
    padding: 3px 12px; border-radius: 20px;
    margin-bottom: 1.4rem;
}

.title-logo-wrap {
    position: relative;
    width: 80px; height: 80px;
    margin: 0 auto 1.25rem;
}
.title-logo {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.4rem;
    background: linear-gradient(135deg, var(--btc), var(--amber));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    filter: drop-shadow(0 0 18px rgba(247,147,26,.55));
    animation: logoPulse 3s ease-in-out infinite;
    z-index: 1;
}
.title-logo-ring {
    position: absolute; inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(247,147,26,.3);
    animation: ringRotate 8s linear infinite;
}
.title-logo-ring::before {
    content: '';
    position: absolute; top: -2px; left: 50%;
    width: 5px; height: 5px;
    background: var(--btc);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--btc);
    transform: translateX(-50%);
}
@keyframes logoPulse {
    0%,100% { filter: drop-shadow(0 0 14px rgba(247,147,26,.5)); }
    50%      { filter: drop-shadow(0 0 28px rgba(247,147,26,.85)); }
}
@keyframes ringRotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}

.title-main {
    font-size: 2.6rem; font-weight: 700;
    color: var(--text); letter-spacing: -.03em;
    line-height: 1.05;
    margin-bottom: .4rem;
}
.title-main span { color: var(--btc); }

.title-sub {
    font-family: var(--font-mono);
    font-size: .85rem; color: var(--btc);
    letter-spacing: .14em; opacity: .8;
    margin-bottom: 1.4rem;
}

.title-intro {
    font-size: .92rem; line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 1.75rem;
    padding: .875rem 1rem;
    background: rgba(255,255,255,.025);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    text-align: left;
}
.title-intro strong { color: var(--text); }

.choice-container {
    background: rgba(255,255,255,.025);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    padding: 1.25rem;
    margin-bottom: 1rem;
}
.choice-container h3 {
    font-size: .82rem; font-weight: 500;
    color: var(--text-muted); text-transform: uppercase;
    letter-spacing: .07em; margin-bottom: 1rem;
}
.choices { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; }

.choice-btn {
    border-radius: var(--r-md);
    padding: 1rem .875rem;
    display: flex; flex-direction: column; align-items: center;
    gap: .3rem; text-align: center;
    transition: all .18s ease;
    position: relative; overflow: hidden;
}
.choice-btn .choice-icon { font-size: 1.65rem; margin-bottom: .2rem; }
.choice-btn strong { font-size: .9rem; display: block; }
.choice-btn small  { font-size: .76rem; display: block; font-weight: 400; opacity: .75; line-height: 1.45; }

.choice-bad {
    background: rgba(255,59,48,.07);
    border: 1px solid rgba(255,59,48,.3);
    color: #FF8A82;
}
.choice-bad:hover {
    background: rgba(255,59,48,.14);
    border-color: rgba(255,59,48,.55);
    box-shadow: 0 0 16px rgba(255,59,48,.18);
    transform: translateY(-2px);
}
.choice-good {
    background: rgba(0,217,126,.07);
    border: 1px solid rgba(0,217,126,.3);
    color: #00D97E;
}
.choice-good:hover {
    background: rgba(0,217,126,.14);
    border-color: rgba(0,217,126,.55);
    box-shadow: 0 0 16px rgba(0,217,126,.18);
    transform: translateY(-2px);
}

.title-note {
    font-family: var(--font-mono);
    font-size: .7rem; color: var(--text-dim);
    letter-spacing: .06em;
}

/* ── Botão primário ── */
.btn-primary {
    background: linear-gradient(135deg, var(--btc), var(--btc-dark));
    color: #000;
    font-weight: 700; font-size: .92rem;
    border-radius: var(--r-md);
    padding: .9rem 1.5rem;
    width: 100%;
    box-shadow: 0 4px 16px rgba(247,147,26,.35);
    transition: all .18s ease;
    position: relative; overflow: hidden;
}
.btn-primary::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,.12) 0%, transparent 50%);
    pointer-events: none;
}
.btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 22px rgba(247,147,26,.5);
}
.btn-primary:active { transform: translateY(1px); }
.btn-arrow { margin-left: .4rem; }

/* ── Modal Notebook ── */
.notebook {
    background: var(--card);
    border: 1px solid var(--border-btc);
    border-radius: var(--r-xl);
    width: 100%; max-width: 500px;
    box-shadow: var(--shadow-btc);
    overflow: hidden;
    position: relative;
    display: flex; flex-direction: column;
}
.notebook-top-bar {
    display: flex; align-items: center; justify-content: space-between;
    padding: .7rem 1.4rem;
    background: rgba(247,147,26,.06);
    border-bottom: 1px solid var(--border-btc);
}
.notebook-chapter-badge {
    font-family: var(--font-mono);
    font-size: .68rem; font-weight: 700;
    letter-spacing: .12em;
    color: var(--btc);
    background: rgba(247,147,26,.12);
    border: 1px solid var(--border-btc);
    padding: 3px 10px; border-radius: 20px;
}
.notebook-protocol-label {
    font-family: var(--font-mono);
    font-size: .6rem; color: var(--text-dim);
    letter-spacing: .1em;
}
.notebook-page { padding: 1.75rem 1.75rem 1.5rem; }

.notebook-drawing {
    font-size: 2.4rem;
    text-align: center;
    background: rgba(247,147,26,.05);
    border: 1px solid var(--border-btc);
    border-radius: var(--r-md);
    padding: 1rem;
    margin-bottom: 1.1rem;
}
.notebook h2 {
    font-size: 1.25rem; font-weight: 700;
    color: var(--btc);
    margin-bottom: .6rem;
}
.notebook-divider {
    height: 1px;
    background: var(--border);
    margin-bottom: 1rem;
}
.notebook-text {
    font-family: var(--font-mono);
    font-size: .88rem; line-height: 1.8;
    color: var(--text); opacity: .88;
    margin-bottom: 1.25rem;
    white-space: pre-line;
}
.notebook-mission {
    display: flex; align-items: flex-start; gap: .6rem;
    background: rgba(0,217,126,.06);
    border: 1px solid rgba(0,217,126,.22);
    border-radius: var(--r-md);
    padding: .75rem 1rem;
    margin-bottom: 1.25rem;
    font-size: .85rem; line-height: 1.55;
}
.mission-label {
    font-weight: 700; color: var(--green);
    white-space: nowrap; font-size: .82rem;
}
.notebook-progress {
    display: flex; align-items: center; justify-content: space-between;
    padding: .75rem 1.75rem;
    border-top: 1px solid var(--border);
    background: rgba(255,255,255,.02);
}
.progress-dots {
    display: flex; gap: 5px; flex-wrap: wrap; max-width: 280px;
}
.progress-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--text-dim);
    transition: all .3s;
}
.progress-dot.done  { background: var(--btc); box-shadow: 0 0 5px var(--btc-glow); }
.progress-dot.current { background: var(--green); box-shadow: 0 0 5px var(--green-glow); animation: dotPulse 1.2s ease-in-out infinite; }
@keyframes dotPulse {
    0%,100% { transform: scale(1); }
    50%      { transform: scale(1.3); }
}
.progress-label {
    font-family: var(--font-mono);
    font-size: .7rem; color: var(--text-muted);
}

/* ── Tech Card (Glossário) ── */
.tech-card {
    background: var(--card);
    border: 1px solid var(--border-btc);
    border-radius: var(--r-xl);
    width: 100%; max-width: 520px;
    padding: 2rem;
    box-shadow: var(--shadow-btc);
    position: relative;
}
.tech-close {
    position: absolute; top: 1rem; right: 1rem;
    background: rgba(255,255,255,.05);
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 28px; height: 28px;
    display: flex; align-items: center; justify-content: center;
    font-size: .8rem; color: var(--text-muted);
    cursor: pointer;
    transition: all .15s;
}
.tech-close:hover { background: rgba(255,59,48,.1); color: var(--red); border-color: rgba(255,59,48,.3); }
.tech-header {
    display: flex; align-items: center;
    justify-content: space-between;
    gap: .5rem; flex-wrap: wrap;
    margin-bottom: 1.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
    padding-right: 2rem;
}
.tech-card h2 { font-size: 1.1rem; font-weight: 700; color: var(--text); }
.tech-badge {
    font-family: var(--font-mono);
    font-size: .6rem; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    background: var(--btc); color: #000;
    padding: 3px 10px; border-radius: 20px;
}
.tech-body {
    font-family: var(--font-mono);
    font-size: .86rem; line-height: 1.85;
    color: var(--text); opacity: .88;
    margin-bottom: 1.25rem;
    white-space: pre-line;
}
.tech-footer {
    border-top: 1px solid var(--border);
    padding-top: .875rem;
}
.tech-footer-note {
    font-family: var(--font-mono);
    font-size: .74rem; color: var(--text-muted);
}

/* ── Genesis Modal ── */
.genesis-card { border-color: rgba(247,147,26,.45); box-shadow: 0 0 32px rgba(247,147,26,.18), var(--shadow-md); }
.genesis-badge { background: var(--btc); color: #000; }
.genesis-body { display: flex; flex-direction: column; gap: 1rem; }
.genesis-fact-box {
    display: flex; align-items: flex-start; gap: .875rem;
    background: rgba(255,255,255,.03);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: .875rem 1rem;
    font-size: .86rem; line-height: 1.7;
}
.genesis-fact-box.genesis-msg { background: rgba(247,147,26,.05); border-color: var(--border-btc); }
.fact-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: .1rem; }
.genesis-fact-box strong { color: var(--text); display: block; margin-bottom: .25rem; }
.genesis-fact-box small { color: var(--text-muted); }
.genesis-quote {
    display: block;
    font-family: var(--font-mono); font-size: .82rem; font-style: italic;
    color: var(--amber);
    background: rgba(247,147,26,.07);
    border-left: 3px solid var(--btc);
    padding: .5rem .875rem;
    border-radius: 0 var(--r-sm) var(--r-sm) 0;
    margin: .5rem 0;
}

/* ── Victory Modal ── */
.victory-card {
    background: var(--card);
    border: 1px solid rgba(0,217,126,.4);
    border-radius: var(--r-xl);
    padding: 2.5rem 2rem;
    max-width: 460px; width: 100%;
    text-align: center;
    box-shadow: 0 0 40px rgba(0,217,126,.18), var(--shadow-md);
}
.victory-icon { font-size: 3rem; margin-bottom: .75rem; }
.victory-title {
    font-size: 1.75rem; font-weight: 700;
    color: var(--green); letter-spacing: .04em;
    margin-bottom: .4rem;
}
.victory-sub { font-family: var(--font-mono); font-size: .88rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.victory-stats {
    display: flex; justify-content: center; gap: 1.5rem;
    margin-bottom: 1.25rem;
}
.victory-stat { text-align: center; }
.victory-stat-num {
    font-family: var(--font-mono); font-size: 1.75rem; font-weight: 700;
    color: var(--btc); display: block;
}
.victory-stat-label { font-size: .7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: .08em; }
.victory-text {
    font-family: var(--font-mono); font-size: .85rem; line-height: 1.75;
    color: var(--text-muted); margin-bottom: 1.5rem;
    background: rgba(255,255,255,.03);
    border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 1rem;
    text-align: left;
}

/* ─────────────────────────────────
   HEADER
───────────────────────────────── */
.workshop-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: .875rem 1.75rem;
    background: rgba(12,16,24,.96);
    border-bottom: 1px solid var(--border-btc);
    backdrop-filter: blur(20px);
    position: sticky; top: 0; z-index: 100;
    gap: 1rem;
}
.header-left { display: flex; align-items: center; }
.header-brand { display: flex; align-items: center; gap: .65rem; }
.header-icon {
    width: 34px; height: 34px;
    background: linear-gradient(135deg, var(--btc), var(--amber));
    border-radius: var(--r-sm);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.05rem;
    box-shadow: 0 0 14px var(--btc-glow);
    flex-shrink: 0;
}
.header-titles h1 {
    font-size: 1.35rem; font-weight: 700;
    color: var(--text); letter-spacing: -.02em;
    line-height: 1.1;
}
.header-titles h1 span { color: var(--btc); }
.header-task {
    font-family: var(--font-mono);
    font-size: .7rem; color: var(--btc);
    background: rgba(247,147,26,.08);
    border: 1px solid var(--border-btc);
    padding: 2px 8px; border-radius: 20px;
    display: inline-block; margin-top: 3px;
}
.header-right { display: flex; align-items: center; gap: 1rem; }
.header-divider { width: 1px; height: 32px; background: var(--border); }
.header-stat { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
.stat-label {
    font-size: .6rem; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    color: var(--text-muted);
}
.stat-value { font-family: var(--font-mono); font-size: .9rem; color: var(--text); }
.coin-display {
    background: rgba(247,147,26,.1);
    border: 1px solid var(--border-btc);
    border-radius: var(--r-md);
    padding: .4rem 1rem;
    font-family: var(--font-mono); font-weight: 700;
    color: var(--btc); font-size: 1rem;
    box-shadow: 0 0 12px var(--btc-glow);
    transition: box-shadow .3s;
}
.coin-display:hover { box-shadow: 0 0 22px var(--btc-glow); }

/* ─────────────────────────────────
   MAIN LAYOUT
───────────────────────────────── */
.workshop-table {
    flex: 1;
    display: flex; flex-direction: column;
    padding: 1.25rem 1.75rem 3rem;
    gap: 1.25rem;
    max-width: 1320px; width: 100%;
    margin: 0 auto;
}

/* ── Faixa de progresso global ── */
.chapter-progress-bar {
    height: 4px;
    background: var(--surface-2);
    border-radius: 2px;
    overflow: hidden;
    position: relative;
}
.cpb-inner {
    height: 100%; width: 0%;
    background: linear-gradient(90deg, var(--btc), var(--amber));
    border-radius: 2px;
    transition: width .6s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 0 8px var(--btc-glow);
}
.cpb-label {
    position: absolute; right: 0; top: 6px;
    font-family: var(--font-mono); font-size: .65rem;
    color: var(--text-muted);
}

/* ── Painel genérico ── */
.panel {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--r-xl);
    padding: 1.25rem 1.5rem;
    transition: border-color .3s;
}
.panel:hover { border-color: rgba(247,147,26,.12); }
.panel-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 1rem; gap: .5rem; flex-wrap: wrap;
}
.info-btn {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: rgba(74,158,255,.1);
    border: 1px solid rgba(74,158,255,.25);
    color: var(--blue); font-size: .72rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    transition: all .15s;
    flex-shrink: 0;
}
.info-btn:hover { background: rgba(74,158,255,.2); border-color: var(--blue); }

/* ─────────────────────────────────
   MEMPOOL
───────────────────────────────── */
.mempool-panel {}
.mempool-track-wrap {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: .75rem 1rem;
    min-height: 72px;
    margin-bottom: .75rem;
    position: relative;
    overflow: hidden;
}
.mempool-track-wrap::before {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
        90deg,
        transparent, transparent 48px,
        rgba(255,255,255,.018) 48px, rgba(255,255,255,.018) 49px
    );
    pointer-events: none;
}
.mempool-track { display: flex; gap: 10px; align-items: center; min-height: 52px; flex-wrap: wrap; }
.mempool-empty {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-mono); font-size: .78rem; color: var(--text-dim);
    letter-spacing: .06em;
}
.mempool-empty.hidden { display: none; }

/* Transações */
.tx-card {
    background: var(--surface-3);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    padding: .45rem .875rem;
    cursor: pointer;
    transition: all .2s;
    font-family: var(--font-mono);
    font-size: .78rem;
    position: relative;
    animation: txIn .35s ease;
}
@keyframes txIn {
    from { opacity: 0; transform: translateX(-18px) scale(.9); }
    to   { opacity: 1; transform: translateX(0) scale(1); }
}
.tx-card:hover { background: var(--card-2); border-color: var(--btc); box-shadow: 0 0 10px var(--btc-glow); transform: translateY(-2px); }
.tx-id   { font-size: .62rem; color: var(--text-muted); letter-spacing: .07em; text-transform: uppercase; margin-bottom: 2px; }
.tx-val  { font-weight: 600; color: var(--btc); }
.tx-card.tx-bad { border-color: rgba(255,59,48,.4); background: rgba(255,59,48,.06); }
.tx-card.tx-bad .tx-val { color: var(--red); }
.tx-card.tx-removing { opacity: 0; transform: scale(.8) translateY(-12px); transition: all .3s; }

/* Keys button */
.keys-ref-btn {
    width: 100%; text-align: center;
    background: rgba(74,158,255,.04);
    border: 1px dashed rgba(74,158,255,.2);
    border-radius: var(--r-sm);
    padding: .5rem 1rem;
    font-family: var(--font-mono); font-size: .76rem;
    color: var(--blue);
    cursor: pointer; transition: all .2s;
}
.keys-ref-btn:hover { background: rgba(74,158,255,.1); border-color: rgba(74,158,255,.45); }

/* ─────────────────────────────────
   MACHINE PANEL (Merkle + PoW)
───────────────────────────────── */
.machine-panel {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
    align-items: start;
    transition: border-color .3s, box-shadow .3s;
}
.machine-panel.quantum-threat {
    border-color: var(--quantum) !important;
    box-shadow: 0 0 28px var(--quantum-glow) !important;
    animation: quantumShake .45s infinite;
}
@keyframes quantumShake {
    0%,100% { transform: translateX(0); }
    25%      { transform: translateX(-3px); }
    75%      { transform: translateX(3px); }
}

/* Merkle col */
.merkle-col { display: flex; flex-direction: column; gap: .875rem; min-width: 0; }

.merkle-tree {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: 1rem 1.25rem;
    display: flex; flex-direction: column; gap: 0;
}

.merkle-level { display: flex; justify-content: center; gap: .6rem; padding: .4rem 0; }

.merkle-node, .merkle-slot {
    border-radius: var(--r-xs);
    font-family: var(--font-mono);
    font-size: .72rem; font-weight: 600;
    text-align: center;
    transition: all .3s;
    border: 1px solid var(--border);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 2px;
}
.mnode-label { font-size: .62rem; color: var(--text-muted); }
.mnode-hash  { font-size: .6rem; color: var(--text-dim); }

.merkle-node {
    background: var(--surface-3);
    color: var(--text-muted);
    padding: .45rem .875rem;
    min-width: 88px;
}
.root-node { min-width: 120px; }

.merkle-slot {
    background: var(--surface);
    padding: .5rem .65rem;
    min-width: 62px;
    cursor: default;
}
.slot-label { font-size: .62rem; color: var(--text-dim); }
.slot-hash  { font-size: .6rem; color: var(--text-dim); }

/* Connector lines */
.tree-connectors-mid,
.tree-connectors-base {
    display: flex; justify-content: center;
    height: 16px; position: relative;
    margin: 0 auto; width: 75%;
}
.tree-connectors-mid::before {
    content: '';
    position: absolute;
    top: 0; left: 25%; right: 25%;
    height: 1px; background: var(--border);
}
.tree-connectors-mid::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 25%; right: 25%;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
    height: 100%;
}
.tree-connectors-base::before {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px; background: var(--border);
}

/* Active / Error states */
.node-active {
    background: rgba(0,217,126,.1) !important;
    border-color: var(--green) !important;
    color: var(--green) !important;
    box-shadow: 0 0 12px var(--green-glow) !important;
}
.node-active .mnode-label { color: var(--green) !important; }
.node-active .slot-label  { color: var(--green) !important; }
.node-error {
    background: rgba(255,59,48,.1) !important;
    border-color: var(--red) !important;
    color: var(--red) !important;
    box-shadow: 0 0 12px var(--red-glow) !important;
    animation: errShake .4s ease !important;
}
@keyframes errShake {
    0%,100% { transform: translateX(0); }
    25%      { transform: translateX(-4px); }
    75%      { transform: translateX(4px); }
}

/* SHA Press */
.sha-press-wrap { display: flex; align-items: center; gap: .875rem; }
.sha-press {
    width: 58px; height: 74px;
    background: var(--surface);
    border: 2px solid var(--border);
    border-radius: var(--r-xs);
    display: flex; flex-direction: column;
    justify-content: flex-end;
    overflow: hidden; flex-shrink: 0;
    transition: border-color .3s;
}
.sha-piston {
    background: linear-gradient(180deg, var(--text-muted), var(--text-dim));
    height: 18%;
    width: 78%; margin: 0 auto;
    transition: height .3s cubic-bezier(.4,0,.2,1);
    border-radius: 4px 4px 0 0;
}
.sha-press.active .sha-piston { height: 83%; background: linear-gradient(180deg, var(--btc), var(--btc-dark)); }
.sha-press.active { border-color: var(--btc); box-shadow: 0 0 14px var(--btc-glow); }
.sha-label {
    background: var(--surface-3); color: var(--text-muted);
    text-align: center; padding: 3px 2px;
    font-family: var(--font-mono); font-weight: 700; font-size: .54rem;
    letter-spacing: .04em;
}
.sha-desc { font-family: var(--font-mono); font-size: .72rem; color: var(--text-dim); }

/* PoW col */
.pow-col {
    display: flex; flex-direction: column;
    align-items: center; gap: .875rem;
    padding: 1.1rem;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--r-lg);
    min-width: 148px;
}
.pow-inner { display: flex; flex-direction: column; align-items: center; gap: .875rem; width: 100%; }
.pow-attempts-label { text-align: center; }
.pow-attempts-num {
    font-family: var(--font-mono); font-size: 1.5rem; font-weight: 700;
    color: var(--btc); display: block; line-height: 1;
}
.pow-attempts-desc { font-family: var(--font-mono); font-size: .62rem; color: var(--text-dim); }

/* Crank button */
.crank-btn {
    width: 82px; height: 82px;
    border-radius: 50%;
    background: transparent;
    border: none;
    position: relative;
    cursor: pointer;
    transition: transform .1s linear;
}
.crank-ring {
    position: absolute; inset: 0;
    border-radius: 50%;
    transition: all .2s;
}
.crank-ring-outer {
    border: 3px solid rgba(247,147,26,.35);
    box-shadow: 0 0 16px var(--btc-glow), inset 0 0 16px rgba(0,0,0,.3);
    animation: crankOuter 4s linear infinite;
}
.crank-ring-inner {
    inset: 8px;
    border: 2px solid rgba(247,147,26,.2);
    background: conic-gradient(from 0deg, rgba(247,147,26,.6), rgba(255,179,71,.4), rgba(247,147,26,.6));
    animation: crankInner 2s linear infinite reverse;
}
@keyframes crankOuter {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}
@keyframes crankInner {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
}
.crank-center {
    position: absolute; inset: 16px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--surface-3) 60%, var(--surface-2));
    border: 1px solid rgba(247,147,26,.3);
    display: flex; align-items: center; justify-content: center;
}
.crank-symbol { font-size: 1.3rem; }
.crank-btn:hover .crank-ring-outer { border-color: rgba(247,147,26,.65); box-shadow: 0 0 28px rgba(247,147,26,.45); }
.crank-btn:active { transform: scale(.94); }
.crank-btn[style*="pointer-events: none"] { opacity: .32; cursor: not-allowed; }
.crank-btn[style*="pointer-events: none"] .crank-ring-outer,
.crank-btn[style*="pointer-events: none"] .crank-ring-inner { animation-play-state: paused; }

/* PoW bar */
.pow-bar-wrap { width: 100%; }
.pow-bar-label {
    font-size: .6rem; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    color: var(--text-muted); display: block; margin-bottom: 4px;
    text-align: center;
}
.pow-bar {
    width: 100%; height: 10px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 5px; overflow: hidden; position: relative;
}
.pow-bar-fill {
    background: linear-gradient(90deg, var(--green), #00FFB2);
    height: 100%; width: 0%;
    transition: width .1s ease;
    box-shadow: 2px 0 8px var(--green-glow);
}
.pow-bar-pct {
    position: absolute; right: 4px; top: 50%;
    transform: translateY(-50%);
    font-family: var(--font-mono); font-size: .55rem;
    color: var(--text-muted); pointer-events: none;
}

.pow-target-wrap { text-align: center; }
.pow-target-label { font-size: .62rem; color: var(--text-dim); display: block; margin-bottom: 2px; }
.pow-target {
    font-family: var(--font-mono); font-size: .68rem;
    color: var(--text-hash);
    background: rgba(74,158,255,.06);
    border: 1px solid rgba(74,158,255,.15);
    border-radius: var(--r-xs); padding: 2px 6px;
}

/* ─────────────────────────────────
   BOTTOM ROW
───────────────────────────────── */
.bottom-row {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.25rem;
}

/* Shelf */
.shelf-panel {}
.shelf-scroll-wrap {
    position: relative;
    overflow-x: auto;
    padding-bottom: 18px;
    scroll-behavior: smooth;
    min-height: 88px;
}
.shelf-scroll-wrap::-webkit-scrollbar { height: 3px; }
.shelf-scroll-wrap::-webkit-scrollbar-thumb { background: var(--btc); border-radius: 2px; }
.shelf-plank-line {
    position: absolute; bottom: 0;
    width: max(100%, 480px); height: 3px;
    background: linear-gradient(90deg, var(--btc), var(--amber), var(--btc));
    box-shadow: 0 0 12px var(--btc-glow);
    border-radius: 2px;
}
.blocks-container {
    display: flex; gap: 10px;
    padding: .25rem .25rem 2px;
    position: relative; z-index: 1;
    align-items: flex-end; min-height: 78px;
    min-width: 100%;
}

/* Blocos */
.block-cube {
    width: 64px; height: 64px; flex-shrink: 0;
    background: var(--surface-3);
    border: 1px solid rgba(247,147,26,.22);
    border-radius: var(--r-sm);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    cursor: pointer;
    transition: all .25s;
    box-shadow: var(--shadow-sm);
    gap: 3px; position: relative;
    animation: blockDrop .45s cubic-bezier(.34,1.56,.64,1);
}
@keyframes blockDrop {
    from { opacity: 0; transform: translateY(-22px) scale(.85); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
}
.block-cube:hover { transform: translateY(-5px); border-color: var(--btc); box-shadow: 0 0 18px var(--btc-glow); }
.block-num {
    font-family: var(--font-mono); font-size: .72rem; font-weight: 700;
    color: var(--text-muted);
}
.block-cube-genesis {
    background: rgba(247,147,26,.08);
    border-color: var(--btc);
    box-shadow: 0 0 16px var(--btc-glow);
}
.block-cube-genesis:hover { box-shadow: 0 0 28px rgba(247,147,26,.5); }
.block-cube-genesis .block-num { color: var(--btc); }
.genesis-star { font-size: 1.1rem; }

/* Chain connector */
.block-cube::after {
    content: '';
    position: absolute; right: -11px; top: 50%;
    width: 10px; height: 2px;
    background: var(--border-btc);
    transform: translateY(-50%);
}
.block-cube:last-child::after { display: none; }

.block-cube.cubo-quebrado {
    background: rgba(255,59,48,.1);
    border-color: var(--red);
    box-shadow: 0 0 14px var(--red-glow);
    transform: rotate(6deg) translateY(5px);
}

/* ── Rede P2P ── */
.network-panel {}
.nodes-grid { display: flex; flex-direction: column; gap: .5rem; margin-bottom: .875rem; }
.net-node {
    background: var(--surface-3);
    border: 1px solid var(--border);
    border-radius: var(--r-md);
    padding: .65rem 1rem;
    display: flex; align-items: center; gap: .65rem;
    transition: all .3s;
}
.net-node-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--text-dim); flex-shrink: 0;
    transition: all .3s;
}
.net-node-id { font-size: .78rem; font-weight: 700; color: var(--text-muted); flex: 1; }
.net-node-status {
    font-family: var(--font-mono); font-size: .62rem;
    color: var(--text-dim); text-transform: uppercase;
}

.net-node.validating { border-color: rgba(245,158,11,.4); }
.net-node.validating .net-node-dot { background: var(--pending); box-shadow: 0 0 7px var(--pending); animation: dotBlink .7s infinite; }
.net-node.validating .net-node-status { color: var(--pending); }
@keyframes dotBlink { 0%,100%{ opacity:1; } 50%{ opacity:.3; } }

.net-node.approved { background: rgba(0,217,126,.05); border-color: rgba(0,217,126,.35); }
.net-node.approved .net-node-dot { background: var(--green); box-shadow: 0 0 7px var(--green-glow); }
.net-node.approved .net-node-status { color: var(--green); }

.net-node.rejected { background: rgba(255,59,48,.05); border-color: rgba(255,59,48,.35); }
.net-node.rejected .net-node-dot { background: var(--red); }
.net-node.rejected .net-node-status { color: var(--red); }

.net-status-bar {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--r-sm);
    padding: .5rem .875rem;
}
.net-status-text {
    font-family: var(--font-mono); font-size: .72rem;
    color: var(--text-muted); display: block;
}

/* ─────────────────────────────────
   BLOCK EXPLORER
───────────────────────────────── */
.explorer-panel {}
.explorer-hint {
    font-family: var(--font-mono); font-size: .72rem;
    color: var(--text-muted);
}
.hotspot-demo {
    color: var(--btc);
    border-bottom: 1px dashed rgba(247,147,26,.5);
}
.explorer-scroll {
    display: flex; gap: .875rem;
    overflow-x: auto; padding: .25rem 0;
    scroll-behavior: smooth;
}
.explorer-scroll::-webkit-scrollbar { height: 3px; }
.explorer-scroll::-webkit-scrollbar-thumb { background: var(--btc); border-radius: 2px; }

/* Block card */
.block-card {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-top: 2px solid var(--text-dim);
    border-radius: var(--r-md);
    padding: .875rem 1rem;
    min-width: 240px; max-width: 260px;
    flex-shrink: 0;
    transition: all .2s;
    position: relative;
    animation: slideIn .35s ease;
}
@keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px) scale(.95); }
    to   { opacity: 1; transform: translateX(0) scale(1); }
}
.block-card:hover { border-color: rgba(247,147,26,.28); border-top-color: var(--btc); box-shadow: 0 0 14px var(--btc-glow); }
.block-card-genesis { border-top-color: var(--btc); background: rgba(247,147,26,.04); box-shadow: 0 0 18px var(--btc-glow); }

.bc-title {
    font-family: var(--font-mono); font-size: .8rem; font-weight: 700;
    color: var(--btc);
    border-bottom: 1px solid var(--border);
    padding-bottom: 6px; margin-bottom: 8px;
}
.bc-fields { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.bc-fields li { display: flex; flex-direction: column; gap: 1px; }
.bc-val {
    font-family: var(--font-mono); font-size: .74rem;
    color: var(--text); opacity: .7;
}
.bc-hash {
    font-family: var(--font-mono); font-size: .66rem;
    color: var(--text-hash);
    background: rgba(74,158,255,.06);
    border: 1px solid rgba(74,158,255,.12);
    border-radius: 3px; padding: 2px 5px;
    word-break: break-all; white-space: nowrap;
    overflow: hidden; text-overflow: ellipsis;
    max-width: 205px;
}
.hotspot {
    font-family: var(--font-mono); font-size: .74rem; font-weight: 700;
    color: var(--btc); cursor: pointer;
    border-bottom: 1px dashed rgba(247,147,26,.4);
    transition: color .15s, border-color .15s;
    padding-bottom: 1px;
}
.hotspot:hover { color: var(--amber); border-color: var(--amber); }

.bc-arrow {
    position: absolute; right: -14px; top: 50%;
    color: var(--border-btc); font-size: 1rem;
    transform: translateY(-50%); pointer-events: none;
    font-family: var(--font-mono);
}

/* ─────────────────────────────────
   RESPONSIVE
───────────────────────────────── */
@media (max-width: 900px) {
    .machine-panel { grid-template-columns: 1fr; }
    .pow-col { flex-direction: row; flex-wrap: wrap; justify-content: center; min-width: unset; }
    .bottom-row { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
    .workshop-table { padding: .875rem 1rem 2.5rem; gap: 1rem; }
    .workshop-header { padding: .75rem 1rem; }
    .title-main { font-size: 2rem; }
    .choices { grid-template-columns: 1fr; }
    .title-content { padding: 1.75rem 1.25rem 1.5rem; }
    .header-right { display: none; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
    }
}

/* ── Scanline overlay cosmético ── */
.tech-card::after, .notebook::after {
    content: '';
    position: absolute; inset: 0;
    background: repeating-linear-gradient(
        0deg,
        transparent, transparent 3px,
        rgba(255,255,255,.006) 3px, rgba(255,255,255,.006) 4px
    );
    pointer-events: none;
    border-radius: inherit;
}
