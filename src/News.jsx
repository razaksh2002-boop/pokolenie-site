import { useState, useEffect, useRef } from "react";

const GOLD = "#A8832A";
const NAVY = "#0A0E1A";
const NAVY_MID = "#111827";
const WHITE = "#F5F3EE";
const MUTED = "#8A8FA0";

const Sec = ({id, children, bg = NAVY, style = {}}) => 
  <section id={id} style={{padding:"60px 0", position:"relative", overflow:"hidden", background:bg, ...style}}>{children}</section>;

const Wrap = ({children, n}) => 
  <div style={{maxWidth: n ? 800 : 1160, margin:"0 auto", padding:"0 20px"}}>{children}</div>;

const SL = ({c}) => 
  <div style={{color:GOLD, fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase", fontFamily:"'Cormorant Garamond',serif", marginBottom:10, fontWeight:500, textAlign:"center"}}>{c}</div>;

const GL = () => 
  <div style={{width:60, height:1, background:`linear-gradient(90deg,transparent,${GOLD},transparent)`, margin:"0 auto 22px"}}/>;

const useInV = () => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setV(true);
    }, {threshold: 0.1});
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
};

const Rv = ({children, delay = 0, style = {}}) => {
  const [ref, v] = useInV();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(24px)",
      transition: `opacity .8s ease ${delay}s,transform .8s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
};

export default function News({lang = "ru"}) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSource, setActiveSource] = useState('all');

  const t = {
    ru: {
      label: "Новости",
      title: "Актуальные новости партнёрства",
      subtitle: "Новости из ключевых источников",
      all: "Все новости",
      readMore: "Читать →",
    }
  }[lang] || {};

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch('/news.json');
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        }
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <Sec id="news" bg={NAVY_MID}>
      <Wrap>
        <Rv style={{textAlign:"center", marginBottom:44}}>
          <SL c={t.label}/>
          <GL/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(22px,4.5vw,42px)", fontWeight:300, color:WHITE, marginBottom:12}}>{t.title}</h2>
          <p style={{fontFamily:"'Playfair Display',serif", fontSize:13, color:MUTED, maxWidth:600, margin:"0 auto"}}>{t.subtitle}</p>
        </Rv>

        {loading ? (
          <div style={{textAlign:"center", padding:"40px 0", color:MUTED}}>Загружаем новости...</div>
        ) : news.length === 0 ? (
          <div style={{textAlign:"center", padding:"40px 0", color:MUTED}}>Новостей не найдено</div>
        ) : (
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20}}>
            {news.map((item, i) => (
              <Rv key={i} delay={i * .1}>
                <div style={{background:NAVY, border:`1px solid rgba(168,131,42,.16)`, padding:"24px 22px", borderRadius:8}}>
                  <div style={{color:GOLD, fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", fontFamily:"'Cormorant Garamond',serif", marginBottom:10}}>
                    {item.source}
                  </div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:WHITE, fontWeight:400, marginBottom:12}}>{item.title}</h3>
                  <p style={{fontFamily:"'Playfair Display',serif", fontSize:12, color:MUTED, lineHeight:1.7, marginBottom:14}}>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{color:GOLD, fontSize:10, textDecoration:"none"}}>
                    {t.readMore}
                  </a>
                </div>
              </Rv>
            ))}
          </div>
        )}
      </Wrap>
    </Sec>
  );
}
