

  const carousel = document.getElementById('carousel'); // 参照だけ残す

  // 右パネル更新
  const panelImg   = document.getElementById('panelImg');
  const panelTitle = document.getElementById('panelTitle');
  const panelDesc  = document.getElementById('panelDesc');
  const panelBadges= document.getElementById('panelBadges');
  const panelLinks = document.getElementById('panelLinks');

  function infoTemplate(it){
    return `
      <div class="info">
        <p class="summary">${it.summary || ""}</p>
        <div class="info-grid">
          <div class="label">License</div><div class="value">${it.license || "-"}</div>
          <div class="label">Authors</div><div class="value">${(it.authors||[]).join(", ") || "-"}</div>
          <div class="label">Maintainers</div><div class="value">${(it.maintainers||[]).join(", ") || "-"}</div>
          <div class="label">Main Macros</div><div class="value">${(it.macros||[]).join(", ") || "-"}</div>
          <div class="label">Features</div><div class="value">${(it.features||[]).join(" ・ ") || "-"}</div>
        </div>
      </div>`;
  }


function buildFreeBoard(itemsObj){
  const keys = Object.keys(layoutMap).filter(k => itemsObj[k]?.img);

  const LOGO = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--logo-size')) || 140;
  let maxX = 0, maxY = 0;
  keys.forEach(k=>{
    const p = layoutMap[k] || {};
    if (typeof p.x === 'number') maxX = Math.max(maxX, p.x);
    if (typeof p.y === 'number') maxY = Math.max(maxY, p.y);
  });
  const stageW = Math.max(500, Math.ceil(maxX + LOGO * 0.6 + 40));
  const stageH = Math.max(600,  Math.ceil(maxY + LOGO * 0.6 + 40));
  const wrapStyle = `style="--stage-w:${stageW}; --stage-h:${stageH};"`;

  // 4カテゴリの抽出
  const TAGS = ["Output/Visualization","Data Utility","Checker","Other"];

  // ハニカムセル
  const cells = keys.map(k=>{
    const v = itemsObj[k];
    const gh = (v.links||[]).find(l => (l.href||'').startsWith('https://github.com/PharmaForest/'));
    const href = gh ? gh.href : (v.links?.[0]?.href || '#');
    const pos  = layoutMap[k] || {};
    const style = `style="--x:${pos.x ?? 0}; --y:${pos.y ?? 0}; --scale:${pos.scale ?? 1};"`;
    const hoverAttr = v.hover ? ` data-hover="${v.hover}"` : "";
    const tags = (v.badges||[]).filter(b => TAGS.includes(b));
    const tagAttr = `data-tags="${tags.join('|')}"`;
    return `
      <a class="free" ${style} ${tagAttr} href="${href}" target="_blank" rel="noopener" title="${v.title||k}">
        <span class="hex"><img src="${v.img}"${hoverAttr} alt="${v.title||k}"></span>
      </a>`;
  }).join('');

  // ★ラジオボタン（ハニカムの“上”）
  const radiosHTML = `
    <div class="filters" id="filters">
      <label><input type="radio" name="cat" value="All" checked> All</label>
      <label><input type="radio" name="cat" value="Output/Visualization"> Output/Visualization</label>
      <label><input type="radio" name="cat" value="Data Utility"> Data Utility</label>
      <label><input type="radio" name="cat" value="Checker"> Checker</label>
      <label><input type="radio" name="cat" value="Other"> Other</label>
    </div>`;

  return `
    <section class="panel" id="panel">
      <div class="hero">
        <img id="panelImg" src="./logo/pharmaforest.png" alt="PharmaForest">
        <div>
          <h1 id="panelTitle">PharmaForest</h1>
          <div class="badges" id="panelBadges">
            ${(items['pharmaforest'].badges||[]).map(b=>`<span class="badge">${b}</span>`).join('')}
          </div>
        </div>
      </div>

      <div id="panelDesc">${items['pharmaforest'].desc || ''}</div>

      ${radiosHTML}            <!-- ← ここがハニカム“上” -->

      <div class="free-outer">
        <div class="free-wrap" ${wrapStyle}>
          ${cells}
        </div>
      </div>

      <div class="cta" id="panelLinks">
        ${(items['pharmaforest'].links||[]).map(l =>
          l.html ? l.html : `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.text}</a>`
        ).join('')}
      </div>
    </section>`;
}


// 既存：ホバー差し替えはそのまま
function attachHoneycombHover(){
  const imgs = document.querySelectorAll('#panel .free img[data-hover]');
  imgs.forEach(img=>{
    const orig  = img.getAttribute('src');
    const hover = img.getAttribute('data-hover');
    const pre = new Image(); pre.src = hover;
    img.addEventListener('mouseenter', ()=>{ img.src = hover; });
    img.addEventListener('mouseleave', ()=>{ img.src = orig;  });
    img.addEventListener('touchstart', ()=>{ img.src = hover; }, {passive:true});
    img.addEventListener('touchend',   ()=>{ img.src = orig;  }, {passive:true});
  });
}

// ★新規：ラジオ版フィルター
function attachCategoryRadios(){
  const panel = document.getElementById('panel');
  const radios = panel.querySelectorAll('#filters input[type="radio"][name="cat"]');
  const icons  = panel.querySelectorAll('.free');

  function apply(){
    const picked = panel.querySelector('#filters input[name="cat"]:checked')?.value || 'All';
    if (picked === 'All'){
      icons.forEach(a => a.classList.remove('dim'));
      return;
    }
    icons.forEach(a=>{
      const tags = (a.getAttribute('data-tags') || '').split('|').filter(Boolean);
      const matched = tags.includes(picked);
      a.classList.toggle('dim', !matched);  // 一致しないものだけグレー
    });
  }

  radios.forEach(r => r.addEventListener('change', apply));
  apply(); // 初回
}

  function updatePanel(key){
    const it = items[key];
    if(!it) return;

    const right = document.getElementById('rightPanel');
    if (key === 'pharmaforest'){
      right.innerHTML = buildFreeBoard(items);
      attachHoneycombHover();
      attachCategoryRadios(); 
      addCounter();
      return;
    }

    // ── 通常の詳細パネル（従来処理） ──
    const panelHTML = `
      <section class="panel" id="panel">
        <div class="hero">
          <img id="panelImg" src="${it.img}" alt="${it.title}">
          <div>
            <h1 id="panelTitle">${it.title}</h1>
            <div class="badges" id="panelBadges">
              ${(it.badges||[]).map(b=>`<span class="badge">${b}</span>`).join('')}
            </div>
          </div>
        </div>
        <div id="panelDesc">${
          it.desc ? it.desc : `
            <div class="info">
              <p class="summary">${it.summary || ""}</p>
              <div class="info-grid">
                <div class="label">License</div><div class="value">${it.license || "-"}</div>
                <div class="label">Authors</div><div class="value">${(it.authors||[]).join(", ") || "-"}</div>
                <div class="label">Maintainers</div><div class="value">${(it.maintainers||[]).join(", ") || "-"}</div>
                <div class="label">Main Macros</div><div class="value">${(it.macros||[]).join(", ") || "-"}</div>
                <div class="label">Features</div><div class="value">${(it.features||[]).join(" ・ ") || "-"}</div>
              </div>
            </div>`
        }</div>
        <div class="cta" id="panelLinks">
          ${(it.links||[]).map(l => l.html ? l.html : `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${l.text}</a>`).join('')}
        </div>
      </section>`;
    right.innerHTML = panelHTML;
    addCounter();
  }

  // 左の要素クリックで選択＆右更新、中央にスクロール
const cards = Array.from(document.querySelectorAll('.logo'));
cards.forEach(card => {
  const img = card.querySelector('img');
  const key = card.getAttribute('data-key');

  // --- クリックで右パネル更新（復活） ---
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    updatePanel(key);
    card.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });

  if (img) {
    const orig = img.getAttribute('src');
    const hover = img.dataset.hover;
    if (hover) {
      const pre = new Image(); pre.src = hover; // プリロード
      card.addEventListener('mouseenter', () => { img.src = hover; });
      card.addEventListener('mouseleave', () => { img.src = orig;  });
      card.addEventListener('touchstart', () => { img.src = hover; }, {passive:true});
      card.addEventListener('touchend',   () => { img.src = orig;  }, {passive:true});
    }
  }
});

  // 初期選択
  (function init(){
    addCounter();
  })();

  // カウンター追加
function addCounter(){
  const host = document.querySelector('.right'); // 右パネル
  if (!host) return;

  // 二重追加防止
  if (host.querySelector('.counter-widget')) return;

  const box = document.createElement('div');
  box.className = 'counter-widget';

  // Rays Counter の配布タグを文字列で入れる（改変・改行しない）
  box.innerHTML = `
<nobr><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><a href="https://ctr.stylemap.co.jp/"><img src="https://www.f-counter.net/ani1/66/1756908915/" alt="無料アクセスカウンター" border="0" style="margin:0px; padding:0px; border:0px; vertical-align:bottom"></a></td>
<td><a href="https://ctr.stylemap.co.jp/"><img src="https://www.f-counter.net/ani2/66/1756908915/" alt="無料アクセスカウンター" border="0" style="margin:0px; padding:0px; border:0px; vertical-align:bottom"></a></td></tr></tbody></table></nobr>
  `;

  host.appendChild(box);
}