const themeButton = document.getElementById('theme');
function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(dark));
}
let savedTheme;
try { savedTheme = localStorage.getItem('melanie-theme'); } catch {}
setTheme(savedTheme === 'dark');
themeButton.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  setTheme(dark);
  try { localStorage.setItem('melanie-theme', dark ? 'dark' : 'light'); } catch {}
});
document.getElementById('year').textContent = new Date().getFullYear();

const motionToggle = document.getElementById('motion-toggle');
motionToggle.addEventListener('click', () => {
  const paused = document.querySelector('.experience-strip').classList.toggle('paused');
  motionToggle.textContent = paused ? 'Play ▷' : 'Pause Ⅱ';
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.setAttribute('aria-label', paused ? 'Play company animation' : 'Pause company animation');
});
