import { useState, useEffect, useRef } from "react";

const GOLD = "#A8832A";
const NAVY = "#0A0E1A";
const NAVY_MID = "#111827";
const NAVY_LIGHT = "#1a2236";
const WHITE = "#F5F3EE";
const MUTED = "#8A8FA0";
const BR = "10px";

const T = {
  ru: {
    nav_about:"О проекте",nav_founder:"Основатель",nav_forum:"КазанФорум",nav_modules:"Направления",nav_kazan:"Казань",nav_roadmap:"Дорожная карта",nav_press:"Пресса",nav_contact:"Контакт",nav_partner:"Партнёрство",
    hero_over:"Россия · Исламский мир · Человечество",hero_sub:"Международная гуманитарная платформа России и исламского мира",hero_tag:"Образование · Спорт · Культура · Партнёрство",hero_btn1:"Стать партнёром",hero_btn2:"Связаться",hero_btn3:"Презентация ↓",
    about_label:"О проекте",about_title:"Новая архитектура гуманитарного партнёрства",about_p1:"ПОКОЛЕНИЕ — международная гуманитарная платформа, созданная для укрепления долгосрочного сотрудничества между Россией и исламским миром в области образования, молодёжной политики, спортивной дипломатии, культуры, медиа и гуманитарного диалога.",about_p2:"Инициатива не позиционируется как государственная структура или альтернативный институт. Это открытая партнёрская экосистема, направленная на укрепление существующих механизмов гуманитарного сотрудничества и формирование нового поколения международных партнёров.",about_mission_label:"Миссия",about_mission:"«Создать долгосрочную гуманитарную среду доверия, образования и сотрудничества между Россией и странами исламского мира.»",
    founder_label:"Основатель",founder_title:"Визионер ПОКОЛЕНИЯ",founder_role:"Основатель · Инициатива ПОКОЛЕНИЕ",
    founder_details:["Международный эксперт в области гуманитарного сотрудничества","Бывший руководитель административного управления Духовного собрания мусульман России","Бывший руководитель департамента международных отношений Духовного собрания мусульман России","Выпускник программы профессиональной переподготовки Дипломатической академии МИД России","Организатор крупных международных форумов и конференций","Инициатор федеральных инициатив в области спортивной дипломатии","Магистр теологии","Эксперт в области гуманитарного сотрудничества с исламским миром"],
    founder_projects:"Ключевые проекты и форумы",forums:["Сибирь — Территория диалога","ВолгаФорум","Санкт-Петербургский международный религиозный форум","Спорт — Путь к единству (Федеральная лига)"],
    forum_label:"КазанФорум 2026",forum_title:"Выступление на сессии Россотрудничества",forum_date:"13 мая 2026 · Казань, Республика Татарстан",forum_tags:["Молодёжная дипломатия","Образование","Спорт","Культура","Россия–ОИС"],forum_desc:"В рамках сессии Россотрудничества на КазанФоруме 2026 была представлена инициатива ПОКОЛЕНИЕ как комплексная гуманитарная партнёрская платформа. В выступлении подчёркивалась необходимость построения устойчивых человеческих связей между Россией и исламским миром — вне политических циклов и институциональных рамок — через общую приверженность образованию, молодёжному лидерству, спортивной дипломатии и культурному диалогу.",
    quotes:[{text:"Новое поколение международных партнёров не может быть сформировано только на саммитах — для этого необходим ежедневный образовательный, культурный и спортивный контакт.",topic:"Молодёжная дипломатия"},{text:"Россия и исламский мир несут общую цивилизационную ответственность за строительство мостов доверия для грядущих поколений.",topic:"Партнёрская экосистема"},{text:"Спорт — это не развлечение. Это язык, преодолевающий границы, религии и политические разногласия. Это дипломатия в самом человеческом её проявлении.",topic:"Спортивная дипломатия"}],
    challenge_label:"Глобальный вызов",challenge_title:"Почему сейчас. Почему ПОКОЛЕНИЕ.",challenge_desc:"Следующее десятилетие определит, какие партнёрства выдержат испытание временем. Демография молодёжи, конкуренция в сфере образования и архитектура гуманитарной дипломатии меняют мировой порядок. Окно для построения подлинного долгосрочного доверия узко — и оно открыто сейчас.",
    stats:[{num:"1,9 млрд",label:"Мусульман в мире — быстрорастущая демографическая группа"},{num:"57",label:"Государств-членов ОИС, представляющих исламский мир"},{num:"60%",label:"Населения исламского мира в возрасте до 30 лет"},{num:"2028",label:"Горизонт создания долгосрочной партнёрской инфраструктуры"}],
    challenge_cards:[{icon:"🎓",title:"Конкуренция в образовании",text:"Страны конкурируют за лояльность следующего поколения через стипендии, университеты и культурное погружение. У России есть уникальные предложения — но нужна структурированная платформа."},{icon:"🤝",title:"Гуманитарная дипломатия",text:"Жёсткая дипломатия имеет пределы. Мягкая сила, построенная на подлинных человеческих связях — образовании, спорте, искусстве — создаёт партнёрства, переживающие любой политический момент."},{icon:"🌍",title:"Международное лидерство будущего",text:"Лидеры завтрашнего дня — студенты сегодня. Отношения, которые Россия выстраивает с молодёжью исламского мира в ближайшие пять лет, определят следующие двадцать."}],
    modules_label:"Ключевые направления",modules_title:"Три столпа партнёрства",
    modules:[{icon:"📚",title:"Образование",sub:"Академические мосты",desc:"Партнёрства с университетами, стипендиальные программы, совместные исследования, языковые академии, связывающие российские и международные учебные заведения.",items:["Партнёрства с университетами","Стипендиальные программы","Совместные исследования","Языковые академии","Студенческие обмены"]},{icon:"⚽",title:"Спортивная дипломатия",sub:"Единство через спорт",desc:"Международные лиги, молодёжные федерации, совместные соревнования и обмен тренерами как инструменты народной дипломатии.",items:["Международные лиги","Молодёжные федерации","Совместные соревнования","Обмен тренерами","Форумы спортивной дипломатии"]},{icon:"🎨",title:"Культура и медиа",sub:"Общие нарративы",desc:"Культурные обмены, совместные медиапроекты, кинофестивали, художественные резиденции и цифровые платформы.",items:["Культурные обмены","Совместные медиапроекты","Кинофестивали","Художественные резиденции","Цифровые платформы"]}],
    kazan_label:"Казань как центр",kazan_title:"Казань: мост между цивилизациями",kazan_p1:"Столица Татарстана занимает уникальное место в мире — город, где европейская и исламская цивилизации сосуществуют на протяжении веков, где культурное многообразие России наиболее очевидно, и где пишется будущее диалога Востока и Запада.",kazan_p2:"Как город-хозяин КазанФорума, форматов ШОС и БРИКС, а также растущей экосистемы международных университетов и дипломатических институтов, Казань является естественной штаб-квартирой для такой платформы, как ПОКОЛЕНИЕ.",
    kazan_cards:[{title:"Город-мост",desc:"Где Европа встречается с исламским миром — ежедневно, на протяжении веков"},{title:"Форумная столица",desc:"Ежегодный КазанФорум — главная площадка России для диалога с ОИС"},{title:"Университетский хаб",desc:"30+ вузов с международными программами"},{title:"Дипломатический центр",desc:"Растущая экосистема консульств, культурных центров и НКО"}],
    partners_label:"Международное партнёрство",partners_title:"Партнёры и институты",
    roadmap_label:"Стратегическая дорожная карта",roadmap_title:"Дорожная карта 2026–2028",
    roadmap:[{year:"2026 I–II кв.",title:"Основание и запуск",desc:"Регистрация инициативы, учредительные партнёрства, презентация на КазанФоруме, запуск сайта и коммуникаций.",status:"current"},{year:"2026 III–IV кв.",title:"Пилотные программы",desc:"Первые программы образовательного обмена, лиги спортивной дипломатии, медиапартнёрства с институтами исламского мира.",status:"upcoming"},{year:"2027",title:"Расширение",desc:"50+ партнёрских организаций, запуск стипендиальной программы, ежегодный гуманитарный форум ПОКОЛЕНИЕ, цифровая платформа.",status:"upcoming"},{year:"2028",title:"Полноценная экосистема",desc:"Сложившаяся гуманитарная инфраструктура, 15+ стран, международные премии ПОКОЛЕНИЕ, наследие программ.",status:"upcoming"}],
    press_label:"Пресса и СМИ",press_title:"ПОКОЛЕНИЕ в медиапространстве",press_subtitle:"Публикации, интервью и упоминания инициативы в российских и международных медиа.",press_cta:"Пресс-кит / Медиазапрос",press_email_label:"Медиазапросы:",
    press_items:[{outlet:"КазанФорум 2026",date:"13 мая 2026",title:"Презентация инициативы ПОКОЛЕНИЕ на сессии Россотрудничества",type:"Форум"},{outlet:"Россотрудничество",date:"2026",title:"Гуманитарное партнёрство России и исламского мира: новые форматы",type:"Официальная площадка"},{outlet:"ВолгаФорум",date:"2025",title:"Спортивная дипломатия как инструмент народной дипломатии",type:"Форум"},{outlet:"Духовное собрание мусульман России",date:"2024–2025",title:"Межкультурный диалог и международные гуманитарные инициативы",type:"Институт"}],
    contact_label:"Контакт и партнёрство",contact_title:"Стать партнёром",contact_subtitle:"Присоединяйтесь к экосистеме ПОКОЛЕНИЕ. Свяжитесь с нами для обсуждения образовательного, культурного, спортивного или институционального партнёрства.",contact_email_label:"Email",contact_phone_label:"Телефон",contact_hq_label:"Штаб-квартира",contact_hq:"Российская Федерация\nКазань, Республика Татарстан\nПредставительство в Москве",
    fields:{name:"Полное имя *",org:"Организация",country:"Страна",pos:"Должность / Звание",email:"Адрес эл. почты *",phone:"Телефон",partnership:"Интерес к партнёрству",message:"Ваше сообщение *"},
    partnerships:["Образование и академическая среда","Спортивная дипломатия","Культура и медиа","Гуманитарный форум","Институциональный партнёр","Медиапартнёр","Инвестор / Донор"],
    btn_send:"Отправить запрос",btn_partner:"Стать партнёром",sending:"Отправка...",success_msg:"✓ Ваше сообщение отправлено. Мы ответим в течение 24–48 часов.",error_fields:"Пожалуйста, заполните все обязательные поля (Имя, Email, Сообщение).",error_msg:"Что-то пошло не так. Пожалуйста, напишите напрямую на khus-ab@yandex.ru",copied:"Скопировано!",copy:"Копировать",
    footer_desc:"Международная гуманитарная платформа России и исламского мира. Образование · Спорт · Культура · Будущее.",footer_nav:"Навигация",footer_nav_links:[["О проекте","about"],["Основатель","founder"],["КазанФорум","kazanforum"],["Направления","modules"],["Дорожная карта","roadmap"],["Пресса","press"],["Контакт","contact"]],footer_contact:"Контакты",footer_connect:"Связь",footer_copy:"© 2026 ПОКОЛЕНИЕ — Международная гуманитарная инициатива. Все права защищены.",footer_geo:"Казань · Москва · Исламский мир",scroll:"Прокрутить",
  },
  en: {
    nav_about:"About",nav_founder:"Founder",nav_forum:"KazanForum",nav_modules:"Modules",nav_kazan:"Kazan",nav_roadmap:"Roadmap",nav_press:"Press",nav_contact:"Contact",nav_partner:"Partner",
    hero_over:"Russia · Islamic World · Humanity",hero_sub:"International Humanitarian Platform of Russia and the Islamic World",hero_tag:"Education · Sport · Culture · Future Partnerships",hero_btn1:"Become a Partner",hero_btn2:"Contact Us",hero_btn3:"Presentation ↓",
    about_label:"About the Initiative",about_title:"A New Architecture of Humanitarian Partnership",about_p1:"POKOLENIE is an international humanitarian partnership platform designed to strengthen long-term cooperation between Russia and the Islamic world through education, youth engagement, sport diplomacy, culture, media and humanitarian dialogue.",about_p2:"The initiative is not positioned as a governmental structure or alternative institution. It is an open partnership ecosystem aimed at strengthening existing humanitarian cooperation mechanisms and building a new generation of international partners.",about_mission_label:"Mission",about_mission:"\"To create a long-term humanitarian environment of trust, education and cooperation between Russia and the countries of the Islamic world.\"",
    founder_label:"Founder",founder_title:"The Vision Behind POKOLENIE",founder_role:"Founder · POKOLENIE Initiative",
    founder_details:["International humanitarian expert","Former Head of Administrative Affairs of the Spiritual Assembly of Muslims of Russia","Former Head of International Relations Department of the Spiritual Assembly of Muslims of Russia","Graduate of the Diplomatic Academy of the MFA of Russia — professional retraining program","Organiser of major international forums and conferences","Initiator of federal sports diplomacy initiatives","Master of Theology","Expert in humanitarian cooperation with the Islamic world"],
    founder_projects:"Key Projects & Forums",forums:["Siberia — Territory of Dialogue","VolgaForum","Saint Petersburg International Religious Forum","Sport — Path to Unity (Federal League)"],
    forum_label:"KazanForum 2026",forum_title:"Presentation at the Rossotrudnichestvo Session",forum_date:"May 13, 2026 · Kazan, Republic of Tatarstan",forum_tags:["Youth Diplomacy","Education","Sport","Culture","Russia–OIC"],forum_desc:"During the Rossotrudnichestvo session at KazanForum 2026, the POKOLENIE initiative was presented as a comprehensive humanitarian partnership platform. The address emphasised the urgent need to build sustainable people-to-people connections between Russia and the Islamic world — beyond political cycles and institutional frameworks — through education, youth leadership, sport diplomacy and cultural dialogue.",
    quotes:[{text:"The new generation of international partners cannot be formed through summits alone — it requires daily educational, cultural and sporting contact.",topic:"Youth Diplomacy"},{text:"Russia and the Islamic world share a common civilisational responsibility to build bridges of trust for the generations to come.",topic:"Partnership Ecosystem"},{text:"Sport is not entertainment — it is a language that crosses borders, religions and political divisions. It is diplomacy at its most human.",topic:"Sport Diplomacy"}],
    challenge_label:"The Global Challenge",challenge_title:"Why Now. Why POKOLENIE.",challenge_desc:"The next decade will determine which partnerships endure. Youth demographics, education competition, and the architecture of humanitarian diplomacy are reshaping the world order. The window for building genuine long-term trust is narrow — and it is open now.",
    stats:[{num:"1.9B",label:"Muslims worldwide — the fastest-growing demographic"},{num:"57",label:"OIC member states representing the Islamic world"},{num:"60%",label:"Of the Islamic world population under the age of 30"},{num:"2028",label:"Horizon for establishing long-term partnership infrastructure"}],
    challenge_cards:[{icon:"🎓",title:"Education Competition",text:"Nations are competing for the loyalty of the next generation through scholarships, universities and cultural immersion. Russia has unique offerings — but needs a structured platform."},{icon:"🤝",title:"Humanitarian Diplomacy",text:"Hard diplomacy has limits. Soft power built on genuine human connection — education, sport, art — creates partnerships that outlast any political moment."},{icon:"🌍",title:"Future International Leadership",text:"The leaders of tomorrow are students today. The relationship Russia builds with young people from the Islamic world in the next five years will define the next twenty."}],
    modules_label:"Core Modules",modules_title:"Three Pillars of Partnership",
    modules:[{icon:"📚",title:"Education",sub:"Academic Bridges",desc:"University partnerships, scholarship programs, joint research initiatives, and language academies connecting Russian and Islamic world academic institutions.",items:["University partnerships","Scholarship programs","Joint research","Language academies","Student exchanges"]},{icon:"⚽",title:"Sport Diplomacy",sub:"Unity Through Sport",desc:"International leagues, youth sports federations, joint competitions and coaching exchanges as instruments of people-to-people diplomacy.",items:["International leagues","Youth federations","Joint competitions","Coaching exchanges","Sports diplomacy forums"]},{icon:"🎨",title:"Culture & Media",sub:"Shared Narratives",desc:"Cultural exchanges, joint media productions, film festivals, artistic residencies and digital media platforms.",items:["Cultural exchanges","Joint media","Film festivals","Artistic residencies","Digital platforms"]}],
    kazan_label:"Kazan as Hub",kazan_title:"Kazan: Bridge Between Civilisations",kazan_p1:"The capital of Tatarstan occupies a unique position in the world — a city where European and Islamic civilisations have coexisted for centuries, where Russia's cultural diversity is most visible, and where the future of East-West dialogue is being written.",kazan_p2:"As host city of KazanForum, SCO and BRICS processes, and a growing ecosystem of international universities and diplomatic institutions, Kazan is the natural headquarters for a platform like POKOLENIE.",
    kazan_cards:[{title:"Bridge City",desc:"Where Europe meets the Islamic world, daily, for centuries"},{title:"Forum Capital",desc:"Annual KazanForum — Russia's premier platform for OIC dialogue"},{title:"University Hub",desc:"30+ higher education institutions with international programs"},{title:"Diplomatic Centre",desc:"Growing ecosystem of consulates, cultural centres and NGOs"}],
    partners_label:"International Partnership",partners_title:"Partners & Institutions",
    roadmap_label:"Strategic Roadmap",roadmap_title:"Roadmap 2026–2028",
    roadmap:[{year:"2026 Q1–Q2",title:"Foundation & Launch",desc:"Initiative registration, founding partnerships, KazanForum presentation, website and communications launch.",status:"current"},{year:"2026 Q3–Q4",title:"Pilot Programs",desc:"First educational exchange programs, sport diplomacy leagues, media partnerships with Islamic world institutions.",status:"upcoming"},{year:"2027",title:"Expansion",desc:"50+ partner institutions, scholarship program launch, annual POKOLENIE humanitarian forum, digital platform.",status:"upcoming"},{year:"2028",title:"Full Ecosystem",desc:"Established humanitarian infrastructure, 15+ countries, international POKOLENIE awards, legacy programming.",status:"upcoming"}],
    press_label:"Press & Media",press_title:"POKOLENIE in the Media",press_subtitle:"Publications, interviews and mentions of the initiative in Russian and international media.",press_cta:"Press Kit / Media Enquiry",press_email_label:"Media enquiries:",
    press_items:[{outlet:"KazanForum 2026",date:"May 13, 2026",title:"POKOLENIE Initiative Presentation at the Rossotrudnichestvo Session",type:"Forum"},{outlet:"Rossotrudnichestvo",date:"2026",title:"Russia–Islamic World Humanitarian Partnership: New Formats",type:"Official Platform"},{outlet:"VolgaForum",date:"2025",title:"Sport Diplomacy as an Instrument of People-to-People Diplomacy",type:"Forum"},{outlet:"Spiritual Assembly of Muslims of Russia",date:"2024–2025",title:"Intercultural Dialogue and International Humanitarian Initiatives",type:"Institution"}],
    contact_label:"Contact & Partnership",contact_title:"Become a Partner",contact_subtitle:"Join the POKOLENIE ecosystem. Reach out to explore educational, cultural, sporting or institutional partnerships.",contact_email_label:"Email",contact_phone_label:"Phone",contact_hq_label:"Headquarters",contact_hq:"Russian Federation\nKazan, Republic of Tatarstan\nMoscow representation",
    fields:{name:"Full Name *",org:"Organisation",country:"Country",pos:"Position / Title",email:"Email Address *",phone:"Phone Number",partnership:"Partnership Interest",message:"Your message *"},
    partnerships:["Education & Academic","Sport Diplomacy","Culture & Media","Humanitarian Forum","Institutional Partner","Media Partner","Investor / Donor"],
    btn_send:"Send Request",btn_partner:"Become a Partner",sending:"Sending...",success_msg:"✓ Your message has been sent. We will respond within 24–48 hours.",error_fields:"Please fill in all required fields (Name, Email, Message).",error_msg:"Something went wrong. Please email us directly at khus-ab@yandex.ru",copied:"Copied!",copy:"Copy",
    footer_desc:"International Humanitarian Platform of Russia and the Islamic World. Education · Sport · Culture · Future.",footer_nav:"Navigation",footer_nav_links:[["About","about"],["Founder","founder"],["KazanForum","kazanforum"],["Modules","modules"],["Roadmap","roadmap"],["Press","press"],["Contact","contact"]],footer_contact:"Contact",footer_connect:"Connect",footer_copy:"© 2026 POKOLENIE International Humanitarian Initiative. All rights reserved.",footer_geo:"Kazan · Moscow · Islamic World",scroll:"Scroll",
  }
};

const GeometricPattern = ({ opacity=0.06, size=60 }) => (
  <svg width={size*4} height={size*4} viewBox={`0 0 ${size*4} ${size*4}`} style={{position:"absolute",top:0,right:0,opacity,pointerEvents:"none"}}>
    <defs><pattern id="ig" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
      <polygon points={`${size/2},2 ${size-2},${size*.35} ${size-2},${size*.65} ${size/2},${size-2} 2,${size*.65} 2,${size*.35}`} fill="none" stroke={GOLD} strokeWidth="0.7"/>
      <circle cx={size/2} cy={size/2} r="3" fill="none" stroke={GOLD} strokeWidth="0.5"/>
    </pattern></defs>
    <rect width={size*4} height={size*4} fill="url(#ig)"/>
  </svg>
);

const StarPattern = ({ opacity=0.04 }) => (
  <svg width="480" height="480" viewBox="0 0 480 480" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",opacity,pointerEvents:"none"}}>
    {Array.from({length:8},(_,i)=>{const a=(i*Math.PI*2)/8;return <circle key={i} cx={240+Math.cos(a)*170} cy={240+Math.sin(a)*170} r="3" fill={GOLD}/>;}) }
    <polygon points="240,60 268,168 376,168 292,236 320,344 240,280 160,344 188,236 104,168 212,168" fill="none" stroke={GOLD} strokeWidth="0.8"/>
    <circle cx="240" cy="240" r="170" fill="none" stroke={GOLD} strokeWidth="0.4"/>
    <circle cx="240" cy="240" r="56" fill="none" stroke={GOLD} strokeWidth="0.5"/>
  </svg>
);

const GoldLine = () => <div style={{width:60,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`,margin:"0 auto 22px"}}/>;
const SLabel = ({c}) => <div style={{color:GOLD,fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:10,fontWeight:500,textAlign:"center"}}>{c}</div>;
const Sec = ({id,children,bg=NAVY,style={}}) => <section id={id} style={{padding:"96px 0",position:"relative",overflow:"hidden",background:bg,...style}}>{children}</section>;
const Wrap = ({children,n}) => <div style={{maxWidth:n?800:1200,margin:"0 auto",padding:"0 36px"}}>{children}</div>;

function useInView(t=0.12){
  const ref=useRef(null);const[v,setV]=useState(false);
  useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:t});if(ref.current)o.observe(ref.current);return()=>o.disconnect();},[]);
  return[ref,v];
}
const Reveal=({children,delay=0,style={}})=>{const[ref,v]=useInView();return<div ref={ref} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(26px)",transition:`opacity .85s ease ${delay}s,transform .85s ease ${delay}s`,...style}}>{children}</div>;};

const Btn=({children,variant="gold",onClick,disabled,style={}})=>{
  const base={padding:"13px 30px",cursor:disabled?"wait":"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:14,letterSpacing:"0.17em",textTransform:"uppercase",borderRadius:BR,border:"none",transition:"opacity .2s,transform .15s",fontWeight:600,...style};
  const V={gold:{background:GOLD,color:NAVY},outline:{background:"transparent",color:WHITE,border:`1px solid rgba(168,131,42,.55)`},ghost:{background:"transparent",color:MUTED,border:`1px solid rgba(138,143,160,.3)`},small:{background:"transparent",color:GOLD,border:`1px solid rgba(168,131,42,.4)`,padding:"5px 14px",fontSize:11,letterSpacing:"0.14em"}};
  return<button onClick={onClick} disabled={disabled} style={{...base,...V[variant],opacity:disabled?.7:1}} onMouseEnter={e=>{e.currentTarget.style.opacity=".82";e.currentTarget.style.transform="translateY(-1px)";}} onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="translateY(0)"}}>{children}</button>;
};

const Logo=({onClick})=>(
  <button onClick={onClick} style={{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:10}}>
    <svg width="26" height="26" viewBox="0 0 26 26">
      <polygon points="13,1.5 16,9 24,9 18,15 20.5,23 13,18.5 5.5,23 8,15 2,9 10,9" fill="none" stroke={GOLD} strokeWidth="1.2"/>
      <circle cx="13" cy="13" r="3.5" fill="none" stroke={GOLD} strokeWidth="0.8"/>
    </svg>
    <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,color:WHITE,letterSpacing:"0.14em",fontWeight:300}}>ПОКОЛЕНИЕ</span>
  </button>
);

const LangSwitch=({lang,setLang})=>(
  <div style={{display:"flex",border:`1px solid rgba(168,131,42,.38)`,borderRadius:BR,overflow:"hidden"}}>
    {["ru","en"].map(l=>(
      <button key={l} onClick={()=>setLang(l)} style={{padding:"5px 14px",background:lang===l?GOLD:"transparent",color:lang===l?NAVY:MUTED,border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",transition:"background .25s,color .25s",fontWeight:lang===l?700:400}}>{l}</button>
    ))}
  </div>
);

function Nav({onNav,lang,setLang,t}){
  const[sc,setSc]=useState(false);
  useEffect(()=>{const f=()=>setSc(window.scrollY>60);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const links=[[t.nav_about,"about"],[t.nav_founder,"founder"],[t.nav_forum,"kazanforum"],[t.nav_modules,"modules"],[t.nav_kazan,"kazan"],[t.nav_roadmap,"roadmap"],[t.nav_press,"press"],[t.nav_contact,"contact"]];
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:sc?"rgba(10,14,26,.97)":"transparent",borderBottom:sc?`1px solid rgba(168,131,42,.15)`:"none",transition:"background .5s",backdropFilter:sc?"blur(14px)":"none"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 32px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
        <Logo onClick={()=>onNav("home")}/>
        <div style={{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
          {links.map(([label,id])=>(
            <button key={id} onClick={()=>onNav(id)} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:WHITE,opacity:.62,letterSpacing:"0.1em",padding:0,textTransform:"uppercase",transition:"opacity .25s"}} onMouseEnter={e=>e.currentTarget.style.opacity="1"} onMouseLeave={e=>e.currentTarget.style.opacity=".62"}>{label}</button>
          ))}
          <Btn variant="small" onClick={()=>onNav("contact")}>{t.nav_partner}</Btn>
          <LangSwitch lang={lang} setLang={setLang}/>
        </div>
      </div>
    </nav>
  );
}

function Hero({onNav,t}){
  const[m,setM]=useState(false);
  useEffect(()=>{setTimeout(()=>setM(true),100);},[]);
  return(
    <div id="home" style={{minHeight:"100vh",background:NAVY,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 20% 50%,rgba(168,131,42,.08) 0%,transparent 60%),radial-gradient(ellipse at 80% 20%,rgba(168,131,42,.06) 0%,transparent 50%)`}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='40,4 76,22 76,58 40,76 4,58 4,22' fill='none' stroke='%23A8832A' stroke-width='0.3' opacity='0.14'/%3E%3C/svg%3E")`,backgroundSize:"80px 80px",opacity:.5}}/>
      <StarPattern opacity={.07}/>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`}}/>
      <div style={{textAlign:"center",position:"relative",zIndex:2,padding:"0 36px",maxWidth:940}}>
        <div style={{opacity:m?1:0,transform:m?"translateY(0)":"translateY(-20px)",transition:"opacity 1.2s ease .2s,transform 1.2s ease .2s"}}>
          <div style={{color:GOLD,fontSize:10,letterSpacing:"0.42em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:28,display:"flex",alignItems:"center",justifyContent:"center",gap:14}}>
            <div style={{width:36,height:1,background:GOLD}}/>{t.hero_over}<div style={{width:36,height:1,background:GOLD}}/>
          </div>
        </div>
        <div style={{opacity:m?1:0,transform:m?"translateY(0)":"translateY(30px)",transition:"opacity 1.4s ease .4s,transform 1.4s ease .4s"}}>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(60px,11vw,132px)",fontWeight:300,color:WHITE,margin:"0 0 6px",letterSpacing:"0.08em",lineHeight:1}}>ПОКОЛЕНИЕ</h1>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(13px,2.3vw,19px)",fontWeight:300,color:WHITE,margin:"0 0 20px",letterSpacing:"0.3em",opacity:.55}}>POKOLENIE</h2>
        </div>
        <div style={{opacity:m?1:0,transition:"opacity 1.4s ease .7s"}}>
          <div style={{width:110,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`,margin:"0 auto 24px"}}/>
        </div>
        <div style={{opacity:m?1:0,transform:m?"translateY(0)":"translateY(20px)",transition:"opacity 1.2s ease .9s,transform 1.2s ease .9s"}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(15px,2.3vw,19px)",color:WHITE,opacity:.86,marginBottom:10,letterSpacing:"0.05em",fontWeight:300}}>{t.hero_sub}</p>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(10px,1.3vw,13px)",color:GOLD,letterSpacing:"0.2em",marginBottom:48,fontWeight:400}}>{t.hero_tag}</p>
        </div>
        <div style={{opacity:m?1:0,transition:"opacity 1.2s ease 1.2s",display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <Btn onClick={()=>onNav("contact")}>{t.hero_btn1}</Btn>
          <Btn variant="outline" onClick={()=>onNav("contact")}>{t.hero_btn2}</Btn>
          <Btn variant="ghost">{t.hero_btn3}</Btn>
        </div>
      </div>
      <div style={{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",opacity:m?.42:0,transition:"opacity 1.5s ease 2s",display:"flex",flexDirection:"column",alignItems:"center",gap:7}}>
        <div style={{color:MUTED,fontSize:10,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{t.scroll}</div>
        <div style={{width:1,height:32,background:`linear-gradient(180deg,${GOLD},transparent)`}}/>
      </div>
    </div>
  );
}

function About({t}){
  return(
    <Sec id="about" bg={NAVY_MID}>
      <GeometricPattern opacity={.05}/>
      <Wrap n>
        <Reveal><SLabel c={t.about_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(26px,5vw,48px)",fontWeight:300,color:WHITE,marginBottom:32,lineHeight:1.2,textAlign:"center"}}>{t.about_title}</h2>
        </Reveal>
        <Reveal delay={.2}>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(13px,1.9vw,16px)",color:WHITE,opacity:.82,lineHeight:1.9,marginBottom:24,textAlign:"center"}}>{t.about_p1}</p>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.6vw,14px)",color:MUTED,lineHeight:1.9,marginBottom:40,textAlign:"center"}}>{t.about_p2}</p>
        </Reveal>
        <Reveal delay={.4}>
          <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.09),rgba(168,131,42,.03))`,border:`1px solid rgba(168,131,42,.22)`,padding:38,position:"relative",borderRadius:8}}>
            <div style={{position:"absolute",top:-1,left:"50%",transform:"translateX(-50%)",width:56,height:1,background:GOLD}}/>
            <div style={{color:GOLD,fontSize:10,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:12,textAlign:"center"}}>{t.about_mission_label}</div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(16px,2.6vw,23px)",color:WHITE,textAlign:"center",fontStyle:"italic",lineHeight:1.65,margin:0}}>{t.about_mission}</p>
          </div>
        </Reveal>
      </Wrap>
    </Sec>
  );
}

function Founder({t,founderPhoto}){
  return(
    <Sec id="founder" bg={NAVY}>
      <GeometricPattern opacity={.04} size={80}/>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:52}}><SLabel c={t.founder_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE}}>{t.founder_title}</h2>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:44,alignItems:"start"}}>
          <Reveal>
            <div style={{position:"relative",marginBottom:18}}>
              <div style={{width:"100%",paddingBottom:"115%",background:`linear-gradient(160deg,${NAVY_LIGHT},${NAVY_MID})`,border:`1px solid rgba(168,131,42,.28)`,position:"relative",overflow:"hidden",borderRadius:4}}>
                {founderPhoto?(
                  <img src={founderPhoto} alt="Абдулкасимов Хуснидин Махмуджонович" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}}/>
                ):(
                  <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:80,height:80,borderRadius:"50%",border:`1px solid rgba(168,131,42,.45)`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
                      <span style={{fontSize:28,color:GOLD,fontFamily:"'Cormorant Garamond',serif"}}>ХМ</span>
                    </div>
                    <div style={{color:MUTED,fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>Фото основателя</div>
                  </div>
                )}
                <StarPattern opacity={.04}/>
              </div>
              <div style={{position:"absolute",bottom:-1,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`}}/>
            </div>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(17px,2.6vw,22px)",fontWeight:400,color:WHITE,marginBottom:4}}>Абдулкасимов<br/>Хуснидин Махмуджонович</h3>
            <p style={{color:GOLD,fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",margin:0}}>{t.founder_role}</p>
          </Reveal>
          <Reveal delay={.2}>
            <div>
              <div style={{marginBottom:26}}>
                {t.founder_details.map((d,i)=>(
                  <div key={i} style={{display:"flex",gap:10,marginBottom:11,paddingBottom:11,borderBottom:i<t.founder_details.length-1?`1px solid rgba(168,131,42,.1)`:"none"}}>
                    <div style={{width:4,height:4,minWidth:4,borderRadius:"50%",background:GOLD,marginTop:7}}/>
                    <span style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:WHITE,opacity:.8,lineHeight:1.6}}>{d}</span>
                  </div>
                ))}
              </div>
              <div style={{color:GOLD,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:12}}>{t.founder_projects}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {t.forums.map((f,i)=>(
                  <div key={i} style={{background:`rgba(168,131,42,.06)`,border:`1px solid rgba(168,131,42,.16)`,padding:"12px 13px",borderRadius:6}}>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.68,lineHeight:1.5}}>{f}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </Sec>
  );
}

function KazanForum({t}){
  return(
    <Sec id="kazanforum" bg={NAVY_MID}>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:52}}><SLabel c={t.forum_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE,marginBottom:10}}>{t.forum_title}</h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,letterSpacing:"0.1em"}}>{t.forum_date}</p>
        </Reveal>
        <Reveal delay={.1}>
          <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.1),rgba(10,14,26,.5))`,border:`1px solid rgba(168,131,42,.28)`,padding:"36px 40px",marginBottom:36,position:"relative",overflow:"hidden",borderRadius:8}}>
            <GeometricPattern opacity={.07} size={50}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{display:"flex",gap:9,flexWrap:"wrap",marginBottom:16}}>
                {t.forum_tags.map(tag=><span key={tag} style={{padding:"3px 11px",border:`1px solid rgba(168,131,42,.32)`,color:GOLD,fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",borderRadius:20}}>{tag}</span>)}
              </div>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.8vw,14px)",color:WHITE,opacity:.85,lineHeight:1.88,margin:0}}>{t.forum_desc}</p>
            </div>
          </div>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:18}}>
          {t.quotes.map((q,i)=>(
            <Reveal key={i} delay={i*.14}>
              <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"28px 24px",position:"relative",borderRadius:8}}>
                <div style={{position:"absolute",top:14,left:22,color:GOLD,fontSize:48,fontFamily:"serif",lineHeight:1,opacity:.22}}>"</div>
                <div style={{color:GOLD,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:16,paddingTop:24}}>{q.topic}</div>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(13px,1.8vw,16px)",color:WHITE,fontStyle:"italic",lineHeight:1.7,margin:0,opacity:.9}}>"{q.text}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Challenge({t}){
  return(
    <Sec id="challenge" bg={NAVY}>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:52}}><SLabel c={t.challenge_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE,marginBottom:16}}>{t.challenge_title}</h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.7vw,14px)",color:MUTED,lineHeight:1.88,maxWidth:660,margin:"0 auto"}}>{t.challenge_desc}</p>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:1,background:"rgba(168,131,42,.1)",border:"1px solid rgba(168,131,42,.1)",marginBottom:48}}>
          {t.stats.map((s,i)=>(
            <Reveal key={i} delay={i*.1}>
              <div style={{background:NAVY,padding:"34px 22px",textAlign:"center"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(30px,5vw,50px)",color:GOLD,fontWeight:300,marginBottom:9}}>{s.num}</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,lineHeight:1.6}}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:18}}>
          {t.challenge_cards.map((c,i)=>(
            <Reveal key={i} delay={i*.14}>
              <div style={{background:NAVY_LIGHT,border:`1px solid rgba(168,131,42,.12)`,padding:"28px 24px",borderRadius:8}}>
                <div style={{fontSize:24,marginBottom:13}}>{c.icon}</div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,color:WHITE,fontWeight:400,marginBottom:9}}>{c.title}</h3>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.78,margin:0}}>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Modules({t}){
  return(
    <Sec id="modules" bg={NAVY_MID}>
      <GeometricPattern opacity={.04}/>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:52}}><SLabel c={t.modules_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE}}>{t.modules_title}</h2>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:0,border:`1px solid rgba(168,131,42,.16)`}}>
          {t.modules.map((m,i)=>(
            <Reveal key={i} delay={i*.18}>
              <div style={{padding:"40px 32px",borderRight:i<2?`1px solid rgba(168,131,42,.12)`:"none",transition:"background .3s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(168,131,42,.05)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                <div style={{fontSize:32,marginBottom:16}}>{m.icon}</div>
                <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{m.sub}</div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,color:WHITE,fontWeight:300,marginBottom:12}}>{m.title}</h3>
                <div style={{width:34,height:1,background:`linear-gradient(90deg,${GOLD},transparent)`,marginBottom:16}}/>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.82,marginBottom:20}}>{m.desc}</p>
                <ul style={{listStyle:"none",padding:0,margin:0}}>
                  {m.items.map((item,j)=>(
                    <li key={j} style={{display:"flex",alignItems:"center",gap:9,marginBottom:6}}>
                      <div style={{width:3,height:3,borderRadius:"50%",background:GOLD,minWidth:3}}/>
                      <span style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.6}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Kazan({t}){
  return(
    <Sec id="kazan" bg={NAVY}>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 50%,rgba(168,131,42,.08) 0%,transparent 60%)`}}/>
      <StarPattern opacity={.04}/>
      <Wrap>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:52,alignItems:"center"}}>
          <Reveal>
            <SLabel c={t.kazan_label}/><GoldLine/>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,42px)",fontWeight:300,color:WHITE,marginBottom:20,lineHeight:1.2,textAlign:"left"}}>{t.kazan_title}</h2>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.7vw,14px)",color:MUTED,lineHeight:1.88,marginBottom:24}}>{t.kazan_p1}</p>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(11px,1.5vw,13px)",color:MUTED,lineHeight:1.88}}>{t.kazan_p2}</p>
          </Reveal>
          <Reveal delay={.3}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {t.kazan_cards.map((c,i)=>(
                <div key={i} style={{background:`rgba(168,131,42,.06)`,border:`1px solid rgba(168,131,42,.16)`,padding:"20px 16px",borderRadius:8}}>
                  <div style={{color:GOLD,fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:7}}>{c.title}</div>
                  <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.65,lineHeight:1.6,margin:0}}>{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Wrap>
    </Sec>
  );
}

function Partners({t}){
  const logos=["OIC","Россотрудничество","КазанФорум","ВолгаФорум","Диплом. академия МИД","Русские дома","Спорт России","Исламские ун-ты","Татарстан","Секретариат ШОС"];
  return(
    <Sec id="partners" bg={NAVY_MID}>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:48}}><SLabel c={t.partners_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE}}>{t.partners_title}</h2>
        </Reveal>
        <Reveal delay={.2}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:1,background:"rgba(168,131,42,.08)"}}>
            {logos.map((l,i)=>(
              <div key={i} style={{background:NAVY_MID,padding:"24px 12px",textAlign:"center",transition:"background .3s",cursor:"default"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(168,131,42,.07)"} onMouseLeave={e=>e.currentTarget.style.background=NAVY_MID}>
                <div style={{width:38,height:38,borderRadius:"50%",border:`1px solid rgba(168,131,42,.28)`,margin:"0 auto 9px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{color:GOLD,fontSize:13,fontFamily:"'Cormorant Garamond',serif",fontWeight:500}}>{l[0]}</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:9,color:WHITE,opacity:.55,letterSpacing:"0.04em"}}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </Sec>
  );
}

function Roadmap({t}){
  return(
    <Sec id="roadmap" bg={NAVY}>
      <Wrap n>
        <Reveal style={{textAlign:"center",marginBottom:52}}><SLabel c={t.roadmap_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE}}>{t.roadmap_title}</h2>
        </Reveal>
        <div style={{position:"relative",paddingLeft:34}}>
          <div style={{position:"absolute",left:7,top:0,bottom:0,width:1,background:`linear-gradient(180deg,${GOLD},rgba(168,131,42,.1))`}}/>
          {t.roadmap.map((item,i)=>(
            <Reveal key={i} delay={i*.16}>
              <div style={{display:"flex",gap:24,marginBottom:32,position:"relative"}}>
                <div style={{position:"absolute",left:-34,top:4,width:15,height:15,borderRadius:"50%",background:item.status==="current"?GOLD:NAVY,border:`2px solid ${GOLD}`}}/>
                <div style={{flex:1,background:item.status==="current"?`rgba(168,131,42,.09)`:NAVY_LIGHT,border:`1px solid ${item.status==="current"?"rgba(168,131,42,.38)":"rgba(168,131,42,.11)"}`,padding:"24px 28px",borderRadius:8}}>
                  <div style={{color:GOLD,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{item.year}</div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:WHITE,fontWeight:400,marginBottom:7}}>{item.title}</h3>
                  <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.75,margin:0}}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Sec>
  );
}

function Press({t}){
  return(
    <Sec id="press" bg={NAVY_MID}>
      <GeometricPattern opacity={.04}/>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:48}}><SLabel c={t.press_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE,marginBottom:12}}>{t.press_title}</h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:MUTED,maxWidth:580,margin:"0 auto"}}>{t.press_subtitle}</p>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:18,marginBottom:44}}>
          {t.press_items.map((item,i)=>(
            <Reveal key={i} delay={i*.11}>
              <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"26px 24px",borderRadius:8,transition:"border-color .3s"}} onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(168,131,42,.4)"} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(168,131,42,.16)"}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                  <span style={{padding:"3px 10px",background:"rgba(168,131,42,.12)",color:GOLD,fontSize:9,letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",borderRadius:20}}>{item.type}</span>
                  <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:MUTED}}>{item.date}</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:GOLD,letterSpacing:"0.04em",marginBottom:9}}>{item.outlet}</div>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:WHITE,opacity:.82,lineHeight:1.6,margin:0}}>{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.3} style={{textAlign:"center"}}>
          <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.09),rgba(168,131,42,.03))`,border:`1px solid rgba(168,131,42,.22)`,padding:"32px 36px",borderRadius:8,display:"inline-block",maxWidth:560,width:"100%",boxSizing:"border-box"}}>
            <div style={{color:GOLD,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:10}}>{t.press_email_label}</div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,color:WHITE,marginBottom:18}}>khus-ab@yandex.ru</p>
            <Btn onClick={()=>window.open("mailto:khus-ab@yandex.ru?subject=Media Enquiry — POKOLENIE")}>{t.press_cta}</Btn>
          </div>
        </Reveal>
      </Wrap>
    </Sec>
  );
}

function Contact({t}){
  const[form,setForm]=useState({name:"",organization:"",country:"",position:"",email:"",phone:"",partnership:"",message:""});
  const[status,setStatus]=useState(null);const[sending,setSending]=useState(false);const[copied,setCopied]=useState(false);
  const EMAIL="khus-ab@yandex.ru";const PHONE="+7 925 766 4998";
  const hc=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit=async()=>{
    if(!form.name||!form.email||!form.message){setStatus("ef");return;}
    setSending(true);setStatus(null);
    try{const r=await fetch(`https://formsubmit.co/ajax/${EMAIL}`,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({_subject:`POKOLENIE — ${form.name}`,name:form.name,organization:form.organization,country:form.country,position:form.position,email:form.email,phone:form.phone,partnership:form.partnership,message:form.message,_captcha:"false"})});const d=await r.json();if(d.success==="true"||r.ok){setStatus("ok");setForm({name:"",organization:"",country:"",position:"",email:"",phone:"",partnership:"",message:""});}else setStatus("err");}catch{setStatus("err");}
    setSending(false);
  };
  const copyE=()=>{navigator.clipboard.writeText(EMAIL);setCopied(true);setTimeout(()=>setCopied(false),2000);};
  const inp={width:"100%",background:"rgba(255,255,255,.04)",border:`1px solid rgba(168,131,42,.22)`,color:WHITE,padding:"12px 14px",fontFamily:"'Playfair Display',serif",fontSize:13,outline:"none",boxSizing:"border-box",borderRadius:6};
  return(
    <Sec id="contact" bg={NAVY_MID}>
      <GeometricPattern opacity={.05}/>
      <Wrap>
        <Reveal style={{textAlign:"center",marginBottom:48}}><SLabel c={t.contact_label}/><GoldLine/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,4.5vw,44px)",fontWeight:300,color:WHITE}}>{t.contact_title}</h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:MUTED,maxWidth:580,margin:"12px auto 0"}}>{t.contact_subtitle}</p>
        </Reveal>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:40}}>
          <Reveal>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {[{label:t.contact_email_label,value:EMAIL,action:copyE,aLabel:copied?t.copied:t.copy},{label:t.contact_phone_label,value:PHONE}].map((c,i)=>(
                <div key={i} style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"20px 24px",borderRadius:8}}>
                  <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{c.label}</div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10}}>
                    <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:WHITE}}>{c.value}</span>
                    {c.action&&<Btn variant="small" onClick={c.action}>{c.aLabel}</Btn>}
                  </div>
                </div>
              ))}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {[["✈","Telegram","https://t.me/pokolenie_init"],["📱","WhatsApp","https://wa.me/79257664998"]].map(([icon,label,href])=>(
                  <a key={label} href={href} style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"16px 12px",textAlign:"center",textDecoration:"none",display:"block",borderRadius:8}}>
                    <div style={{color:GOLD,fontSize:18,marginBottom:5}}>{icon}</div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:WHITE,opacity:.65}}>{label}</div>
                  </a>
                ))}
              </div>
              <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.1),transparent)`,border:`1px solid rgba(168,131,42,.2)`,padding:"20px 24px",borderRadius:8}}>
                <div style={{color:GOLD,fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:9}}>{t.contact_hq_label}</div>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.7,margin:0,whiteSpace:"pre-line"}}>{t.contact_hq}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={.2}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:9}}>
              {[["name",t.fields.name],["organization",t.fields.org],["country",t.fields.country],["position",t.fields.pos],["email",t.fields.email,"email"],["phone",t.fields.phone]].map(([n,ph,type])=>(
                <input key={n} name={n} type={type||"text"} placeholder={ph} value={form[n]||""} onChange={hc} style={inp}/>
              ))}
            </div>
            <select name="partnership" value={form.partnership} onChange={hc} style={{...inp,marginBottom:9}}>
              <option value="">{t.fields.partnership}</option>
              {t.partnerships.map(p=><option key={p} value={p}>{p}</option>)}
            </select>
            <textarea name="message" placeholder={t.fields.message} value={form.message} onChange={hc} rows={5} style={{...inp,resize:"vertical",marginBottom:14}}/>
            {status==="ok"&&<div style={{background:"rgba(29,158,117,.14)",border:"1px solid rgba(29,158,117,.38)",padding:"13px 16px",marginBottom:12,fontFamily:"'Cormorant Garamond',serif",color:"#4ECBA1",fontSize:13,borderRadius:6}}>{t.success_msg}</div>}
            {(status==="err"||status==="ef")&&<div style={{background:"rgba(226,75,74,.13)",border:"1px solid rgba(226,75,74,.3)",padding:"13px 16px",marginBottom:12,fontFamily:"'Cormorant Garamond',serif",color:"#F09595",fontSize:12,borderRadius:6}}>{status==="ef"?t.error_fields:t.error_msg}</div>}
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <Btn onClick={submit} disabled={sending} style={{flex:1}}>{sending?t.sending:t.btn_send}</Btn>
              <Btn variant="outline" onClick={submit} disabled={sending} style={{flex:1}}>{t.btn_partner}</Btn>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </Sec>
  );
}

function Footer({onNav,t}){
  return(
    <footer style={{background:"#060810",padding:"52px 0 26px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`}}/>
      <Wrap>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:32,marginBottom:40}}>
          <div>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,color:WHITE,fontWeight:300,letterSpacing:"0.08em",marginBottom:5}}>ПОКОЛЕНИЕ</h3>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:GOLD,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>POKOLENIE</p>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,lineHeight:1.78}}>{t.footer_desc}</p>
          </div>
          <div>
            <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:13}}>{t.footer_nav}</div>
            {t.footer_nav_links.map(([label,id])=>(
              <div key={id} style={{marginBottom:6}}>
                <button onClick={()=>onNav(id)} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,padding:0,transition:"color .25s"}} onMouseEnter={e=>e.currentTarget.style.color=WHITE} onMouseLeave={e=>e.currentTarget.style.color=MUTED}>{label}</button>
              </div>
            ))}
          </div>
          <div>
            <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:13}}>{t.footer_contact}</div>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,lineHeight:1.88}}>khus-ab@yandex.ru<br/>+7 925 766 4998<br/>Казань · Москва<br/>Российская Федерация</p>
          </div>
          <div>
            <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:13}}>{t.footer_connect}</div>
            <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>
              {[["✈","Telegram"],["📱","WhatsApp"],["✉","Email"]].map(([icon,label])=>(
                <div key={label} style={{background:"rgba(168,131,42,.08)",border:"1px solid rgba(168,131,42,.2)",padding:"8px 11px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,borderRadius:6}}>
                  <span style={{fontSize:12}}>{icon}</span>
                  <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:WHITE,opacity:.65}}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(168,131,42,.1)",paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:MUTED,letterSpacing:"0.07em",margin:0}}>{t.footer_copy}</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:MUTED,letterSpacing:"0.07em",margin:0}}>{t.footer_geo}</p>
        </div>
      </Wrap>
    </footer>
  );
}

export default function App(){
  const[lang,setLang]=useState("ru");
  const[founderPhoto,setFounderPhoto]=useState(null);
  const t=T[lang];
  useEffect(()=>{
    const link=document.createElement("link");link.rel="stylesheet";link.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap";document.head.appendChild(link);
    document.body.style.margin="0";document.body.style.background=NAVY;document.body.style.overflowX="hidden";
  },[]);
  useEffect(()=>{if(window.__founderPhoto)setFounderPhoto(window.__founderPhoto);},[]);
  const scrollTo=(id)=>{if(id==="home"){window.scrollTo({top:0,behavior:"smooth"});return;}const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"});};
  return(
    <div style={{background:NAVY,minHeight:"100vh"}}>
      <Nav onNav={scrollTo} lang={lang} setLang={setLang} t={t}/>
      <Hero onNav={scrollTo} t={t}/>
      <About t={t}/>
      <Founder t={t} founderPhoto={founderPhoto}/>
      <KazanForum t={t}/>
      <Challenge t={t}/>
      <Modules t={t}/>
      <Kazan t={t}/>
      <Partners t={t}/>
      <Roadmap t={t}/>
      <Press t={t}/>
      <Contact t={t}/>
      <Footer onNav={scrollTo} t={t}/>
    </div>
  );
}
