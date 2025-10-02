(() => {
  const openBtn = document.getElementById('mobileMenuBtn');
  const menu    = document.getElementById('mobiMenu');
  const scrim   = menu.querySelectorAll('[data-close]');
  const root    = document.getElementById('mm-root');
  const sub     = document.getElementById('mm-sub');
  const subBody = document.getElementById('mmSubBody');
  const subTitle= document.getElementById('mm-sub-title');

  const open  = () => { menu.classList.add('is-open'); menu.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
  const close = () => { menu.classList.remove('is-open'); menu.setAttribute('aria-hidden','true'); document.body.style.overflow=''; showRoot(); };

  const showRoot = () => { root.hidden=false; sub.hidden=true; };
  const showSub  = (key) => {
    const tpl = document.getElementById('tpl-'+key);
    subBody.innerHTML = tpl ? tpl.innerHTML : '<div class="ms"><p>Coming soon…</p></div>';
    subTitle.textContent = key.charAt(0).toUpperCase()+key.slice(1);
    root.hidden=true; sub.hidden=false;
  };

  openBtn?.addEventListener('click', open);
  scrim.forEach(el => el.addEventListener('click', close));
  menu.querySelector('[data-back]').addEventListener('click', showRoot);

  root.querySelector('.mm__list').addEventListener('click', (e) => {
    const btn = e.target.closest('.mm__row[data-sub]');
    if (!btn) return;
    showSub(btn.dataset.sub);
  });

  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && menu.classList.contains('is-open')) close(); });
})();