document.body.classList.add('is-ready');

  // Orchestrated scroll reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Cursor-reactive hero blob, gentle parallax
  const blob = document.querySelector('.hero-blob');
  const heroEl = document.querySelector('.hero');
  if (blob && heroEl && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    heroEl.addEventListener('mousemove', (e) => {
      const r = heroEl.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      blob.style.transform = `translate(${x * 24}px, ${y * 24}px)`;
    });
    heroEl.addEventListener('mouseleave', () => { blob.style.transform = ''; });
  }

  // Soft radial-veil transition on same-page anchor navigation
  const veil = document.getElementById('veil');
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      veil.style.setProperty('--vx', e.clientX + 'px');
      veil.style.setProperty('--vy', e.clientY + 'px');
      veil.classList.add('is-active');
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 160);
      setTimeout(() => veil.classList.remove('is-active'), 700);
    });
  });
