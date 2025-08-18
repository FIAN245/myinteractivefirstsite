// ===== Tema (persisten via localStorage) =====
const THEME_KEY = 'km_theme';
const themeBtn = document.getElementById('themeBtn');
const greetBtn = document.getElementById('greetBtn');
const greet = document.getElementById('greet');

function setTheme(mode){
  const isDark = mode === 'dark';
  document.body.classList.toggle('dark', isDark);
  themeBtn.setAttribute('aria-pressed', String(isDark));
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

// Init theme dari preferensi user atau storage
const stored = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(stored || (prefersDark ? 'dark' : 'light'));

function toggleTheme(){ setTheme(document.body.classList.contains('dark') ? 'light' : 'dark'); }
themeBtn.addEventListener('click', toggleTheme);
window.addEventListener('keydown', (e)=>{ if(e.key.toLowerCase()==='t') toggleTheme(); });

// ===== Interaksi kecil: acak salam =====
const SALAMS = [
  'Selamat datang! Hari ini milikmu. ✨',
  'Gaskeun! Satu commit lagi. 🚀',
  'Kode sedikit, progres selangit. 🌈',
  'Santai, tapi konsisten. 🍵',
  'Halo dari GitHub Pages! 🐙',
  'Keren, kamu sudah mulai. 💪',
];
greetBtn.addEventListener('click', ()=>{
  const next = SALAMS[Math.floor(Math.random()*SALAMS.length)];
  greet.textContent = next;
});

// ===== Orb mengikuti kursor (lerp) =====
const orb = document.querySelector('.orb');
let target = { x: innerWidth/2, y: innerHeight/2 };
let pos = { ...target };
let active = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('mousemove', (e)=>{ target.x = e.clientX; target.y = e.clientY; });
function lerp(a,b,t){ return a + (b-a)*t }
function loop(){
  if(active){
    pos.x = lerp(pos.x, target.x, .12);
    pos.y = lerp(pos.y, target.y, .12);
    orb.style.left = pos.x + 'px';
    orb.style.top  = pos.y + 'px';
  }
  requestAnimationFrame(loop);
}
loop();

// Aksesibilitas: jika preferensi berubah, hormati
try{
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', (e)=>{ 
    active = !e.matches; 
    orb.style.display = e.matches ? 'none' : 'block'; 
  });
}catch(err){ /* Safari lama fallback */ }

