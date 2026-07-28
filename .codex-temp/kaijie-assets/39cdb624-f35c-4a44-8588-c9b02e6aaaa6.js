// tweaks-app.jsx
// Tweaks panel for the self-intro page.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d97757",
  "dark": false,
  "motion": 1,
  "portraitShape": "rect",
  "headingFont": "serif"
}/*EDITMODE-END*/;

function applyTheme(t){
  const root = document.documentElement;
  root.style.setProperty('--accent', t.accent);
  root.style.setProperty('--motion', t.motion);
  if (t.dark){
    root.style.setProperty('--bg', '#0e0d0b');
    root.style.setProperty('--fg', '#f3efe5');
    root.style.setProperty('--paper', '#1a1815');
    root.style.setProperty('--muted', '#8a8478');
    root.style.setProperty('--line', 'rgba(243,239,229,.18)');
    root.style.setProperty('--line-strong', 'rgba(243,239,229,.55)');
  } else {
    root.style.setProperty('--bg', '#faf8f3');
    root.style.setProperty('--fg', '#1a1a1a');
    root.style.setProperty('--paper', '#f3efe5');
    root.style.setProperty('--muted', '#8a8478');
    root.style.setProperty('--line', 'rgba(26,26,26,.16)');
    root.style.setProperty('--line-strong', 'rgba(26,26,26,.55)');
  }
  // portrait shape
  const slot = document.getElementById('portrait');
  if (slot) slot.setAttribute('shape', t.portraitShape);
  // heading font
  document.querySelectorAll('.hero-title, .about-lead, .mani-line, .skills-title h2, .int-title h2, .contact-title').forEach(el=>{
    if (t.headingFont === 'sans'){
      el.style.fontFamily = '"Space Grotesk","Noto Sans SC",sans-serif';
      el.style.fontWeight = 700;
    } else {
      el.style.fontFamily = '';
      el.style.fontWeight = '';
    }
  });
}

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(()=>{ applyTheme(t); }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Theme · 主题" />
      <TweakColor label="Accent · 强调色" value={t.accent}
        options={['#d97757','#0066ff','#1f8a5b','#7a5ae0','#e0335a']}
        onChange={(v)=>setTweak('accent', v)} />
      <TweakToggle label="Dark mode · 深色" value={t.dark}
        onChange={(v)=>setTweak('dark', v)} />

      <TweakSection label="Type · 字体" />
      <TweakRadio label="Heading · 标题" value={t.headingFont}
        options={['serif','sans']}
        onChange={(v)=>setTweak('headingFont', v)} />

      <TweakSection label="Motion · 动效" />
      <TweakSlider label="Intensity · 强度" value={t.motion}
        min={0} max={1.6} step={0.1}
        onChange={(v)=>setTweak('motion', v)} />

      <TweakSection label="Portrait · 头像" />
      <TweakRadio label="Shape · 形状" value={t.portraitShape}
        options={['rect','rounded','circle']}
        onChange={(v)=>setTweak('portraitShape', v)} />
    </TweaksPanel>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
