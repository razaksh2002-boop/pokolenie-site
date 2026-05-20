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
nav_about:"О проекте",nav_founder:"Инициатор",nav_forum:"КазанФорум",nav_modules:"Направления",nav_kazan:"Казань",nav_roadmap:"Дорожная карта",nav_press:"Пресса",nav_contact:"Контакт",nav_partner:"Партнёрство",
hero_over:"Россия · Исламский мир · Человечество",hero_sub:"Международная гуманитарная платформа России и исламского мира",hero_tag:"Образование · Спорт · Культура · Партнёрство",hero_btn1:"Стать партнёром",hero_btn2:"Связаться",hero_btn3:"Презентация ↓",
about_label:"О проекте",about_title:"Новая архитектура гуманитарного партнёрства",about_p1:"ПОКОЛЕНИЕ — международная гуманитарная платформа, созданная для укрепления долгосрочного сотрудничества между Россией и исламским миром в области образования, молодёжной политики, спортивной дипломатии, культуры, медиа и гуманитарного диалога.",about_p2:"Инициатива не позиционируется как государственная структура или альтернативный институт. Это открытая партнёрская экосистема, направленная на укрепление существующих механизмов гуманитарного сотрудничества и формирование нового поколения международных партнёров.",about_mission_label:"Миссия",about_mission:"«Создать долгосрочную гуманитарную среду доверия, образования и сотрудничества между Россией и странами исламского мира.»",
founder_label:"Инициатор проекта",founder_title:"Абдулкасимов Хуснидин Махмуджонович",founder_role:"Международный эксперт в области гуманитарного сотрудничества",
founder_details:[
"Экс заместитель Управляющего делами ДУМ г. Москвы и Центрального региона «Московский муфтият»",
"Экс руководитель департамента международных отношений Духовного собрания мусульман России",
"Выпускник программы профессиональной переподготовки Дипломатической академии МИД России",
"Организатор крупных международных форумов и конференций",
"Инициатор федеральных инициатив в области спортивной дипломатии",
"Магистр теологии",
"Организатор федеральной спортивной лиги «Спорт — путь к единству»",
"Руководитель федерального проекта «Росмигрант» (45 регионов России)",
"Эксперт в области гуманитарного сотрудничества с исламским миром"
],
founder_projects:"Ключевые проекты и инициативы",
forums:["Федеральный проект «Росмигрант»","Международные межрелигиозные форумы","Всероссийские межрелигиозные форумы","Спортивная дипломатия: «Спорт — путь к единству»","Гуманитарные инициативы с международным участием","КазанФорум 2026","ВолгаФорум","Санкт-Петербургский международный религиозный форум"],
forum_label:"КазанФорум 2026",forum_title:"Выступление на сессии Россотрудничества",forum_date:"13 мая 2026 · Казань, Республика Татарстан",
forum_tags:["Молодёжная дипломатия","Образование","Спорт","Культура","Россия–ОИС"],
forum_desc:"В рамках сессии Россотрудничества на КазанФоруме 2026 была представлена инициатива ПОКОЛЕНИЕ как комплексная гуманитарная партнёрская платформа. В выступлении подчёркивалась необходимость построения устойчивых человеческих связей между Россией и исламским миром — вне политических циклов и институциональных рамок — через образование, молодёжное лидерство, спортивную дипломатию и культурный диалог.",
quotes:[{text:"Новое поколение международных партнёров не может быть сформировано только на саммитах — для этого необходим ежедневный образовательный, культурный и спортивный контакт.",topic:"Молодёжная дипломатия"},{text:"Россия и исламский мир несут общую цивилизационную ответственность за строительство мостов доверия для грядущих поколений.",topic:"Партнёрская экосистема"},{text:"Спорт — это не развлечение. Это язык, преодолевающий границы, религии и политические разногласия. Это дипломатия в самом человеческом её проявлении.",topic:"Спортивная дипломатия"}],
challenge_label:"Глобальный вызов",challenge_title:"Почему сейчас. Почему ПОКОЛЕНИЕ.",challenge_desc:"Следующее десятилетие определит, какие партнёрства выдержат испытание временем. Демография молодёжи, конкуренция в сфере образования и архитектура гуманитарной дипломатии меняют мировой порядок.",
stats:[{num:"1,9 млрд",label:"Мусульман в мире — быстрорастущая демографическая группа"},{num:"57",label:"Государств-членов ОИС"},{num:"60%",label:"Населения исламского мира в возрасте до 30 лет"},{num:"45",label:"Регионов России охвачено проектом Росмигрант"}],
challenge_cards:[{icon:"🎓",title:"Конкуренция в образовании",text:"Страны конкурируют за лояльность следующего поколения через стипендии, университеты и культурное погружение. У России есть уникальные предложения — но нужна структурированная платформа."},{icon:"🤝",title:"Гуманитарная дипломатия",text:"Жёсткая дипломатия имеет пределы. Мягкая сила, построенная на подлинных человеческих связях — образовании, спорте, искусстве — создаёт партнёрства, переживающие любой политический момент."},{icon:"🌍",title:"Лидерство будущего",text:"Лидеры завтрашнего дня — студенты сегодня. Отношения, которые Россия выстраивает с молодёжью исламского мира в ближайшие пять лет, определят следующие двадцать."}],
modules_label:"Ключевые направления",modules_title:"Три столпа партнёрства",
modules:[{icon:"📚",title:"Образование",sub:"Академические мосты",desc:"Партнёрства с университетами, стипендиальные программы, совместные исследования и языковые академии.",items:["Партнёрства с университетами","Стипендиальные программы","Совместные исследования","Языковые академии","Студенческие обмены"]},{icon:"⚽",title:"Спортивная дипломатия",sub:"Единство через спорт",desc:"Международные лиги, молодёжные федерации, совместные соревнования как инструменты народной дипломатии.",items:["Международные лиги","Молодёжные федерации","Совместные соревнования","Обмен тренерами","Форумы спортивной дипломатии"]},{icon:"🎨",title:"Культура и медиа",sub:"Общие нарративы",desc:"Культурные обмены, совместные медиапроекты, кинофестивали и художественные резиденции.",items:["Культурные обмены","Совместные медиапроекты","Кинофестивали","Художественные резиденции","Цифровые платформы"]}],
kazan_label:"Казань как центр",kazan_title:"Казань: мост между цивилизациями",kazan_p1:"Столица Татарстана — город, где европейская и исламская цивилизации сосуществуют на протяжении веков, где культурное многообразие России наиболее очевидно, и где пишется будущее диалога Востока и Запада.",kazan_p2:"Как город-хозяин КазанФорума, форматов ШОС и БРИКС, а также растущей экосистемы международных университетов и дипломатических институтов, Казань является естественной штаб-квартирой ПОКОЛЕНИЯ.",
kazan_cards:[{title:"Город-мост",desc:"Где Европа встречается с исламским миром — ежедневно, на протяжении веков"},{title:"Форумная столица",desc:"КазанФорум — главная площадка России для диалога с ОИС"},{title:"Университетский хаб",desc:"30+ вузов с международными программами"},{title:"Дипломатический центр",desc:"Экосистема консульств, культурных центров и НКО"}],
partners_label:"Международное партнёрство",partners_title:"Партнёры и институты",
roadmap_label:"Стратегическая дорожная карта",roadmap_title:"Дорожная карта 2026–2028",
roadmap:[{year:"2026 I–II кв.",title:"Основание и запуск",desc:"Регистрация инициативы, учредительные партнёрства, презентация на КазанФоруме, запуск сайта.",status:"current"},{year:"2026 III–IV кв.",title:"Пилотные программы",desc:"Первые программы образовательного обмена, лиги спортивной дипломатии, медиапартнёрства.",status:"upcoming"},{year:"2027",title:"Расширение",desc:"50+ партнёрских организаций, стипендиальная программа, ежегодный форум ПОКОЛЕНИЕ.",status:"upcoming"},{year:"2028",title:"Полноценная экосистема",desc:"Инфраструктура в 15+ странах, международные премии ПОКОЛЕНИЕ.",status:"upcoming"}],
press_label:"Пресса и СМИ",press_title:"ПОКОЛЕНИЕ в медиапространстве",press_subtitle:"Публикации и упоминания инициативы в российских и международных медиа.",press_cta:"Пресс-кит / Медиазапрос",press_email_label:"Медиазапросы:",
press_items:[{outlet:"КазанФорум 2026",date:"13 мая 2026",title:"Презентация ПОКОЛЕНИЕ на сессии Россотрудничества",type:"Форум"},{outlet:"Россотрудничество",date:"2026",title:"Гуманитарное партнёрство России и исламского мира: новые форматы",type:"Площадка"},{outlet:"ВолгаФорум",date:"2025",title:"Спортивная дипломатия как инструмент народной дипломатии",type:"Форум"},{outlet:"Духовное собрание мусульман России",date:"2024–2025",title:"Межкультурный диалог и международные гуманитарные инициативы",type:"Институт"}],
contact_label:"Контакт и партнёрство",contact_title:"Стать партнёром",contact_subtitle:"Присоединяйтесь к экосистеме ПОКОЛЕНИЕ. Свяжитесь с нами для обсуждения партнёрства.",contact_email_label:"Email",contact_phone_label:"Телефон",contact_hq_label:"Штаб-квартира",contact_hq:"Москва, Российская Федерация",contact_rep_label:"Представительство",contact_rep:"Казань, Республика Татарстан",
fields:{name:"Полное имя *",org:"Организация",country:"Страна",pos:"Должность",email:"Email *",phone:"Телефон",partnership:"Интерес к партнёрству",message:"Сообщение *"},
partnerships:["Образование и академическая среда","Спортивная дипломатия","Культура и медиа","Гуманитарный форум","Институциональный партнёр","Медиапартнёр","Инвестор / Донор"],
btn_send:"Отправить запрос",btn_partner:"Стать партнёром",sending:"Отправка...",success_msg:"Спасибо за ваш запрос. Наша команда свяжется с вами в ближайшее время.",error_fields:"Заполните обязательные поля (Имя, Email, Сообщение).",error_msg:"Ошибка. Напишите напрямую: khus-ab@yandex.ru",copied:"Скопировано!",copy:"Копировать",
footer_desc:"Международная гуманитарная платформа России и исламского мира.",footer_nav:"Навигация",footer_nav_links:[["О проекте","about"],["Инициатор","founder"],["КазанФорум","kazanforum"],["Направления","modules"],["Дорожная карта","roadmap"],["Пресса","press"],["Контакт","contact"]],footer_contact:"Контакты",footer_connect:"Связь",footer_hq:"Штаб-квартира",footer_hq_val:"Москва, Российская Федерация",footer_rep:"Представительство",footer_rep_val:"Казань, Республика Татарстан",footer_copy:"© 2026 ПОКОЛЕНИЕ. Все права защищены.",footer_geo:"Москва · Казань · Исламский мир",scroll:"Прокрутить",
},
en:{
nav_about:"About",nav_founder:"Founder",nav_forum:"KazanForum",nav_modules:"Modules",nav_kazan:"Kazan",nav_roadmap:"Roadmap",nav_press:"Press",nav_contact:"Contact",nav_partner:"Partner",
hero_over:"Russia · Islamic World · Humanity",hero_sub:"International Humanitarian Platform of Russia and the Islamic World",hero_tag:"Education · Sport · Culture · Future Partnerships",hero_btn1:"Become a Partner",hero_btn2:"Contact Us",hero_btn3:"Presentation ↓",
about_label:"About the Initiative",about_title:"A New Architecture of Humanitarian Partnership",about_p1:"POKOLENIE is an international humanitarian partnership platform designed to strengthen long-term cooperation between Russia and the Islamic world through education, youth engagement, sport diplomacy, culture, media and humanitarian dialogue.",about_p2:"The initiative is not positioned as a governmental structure or alternative institution. It is an open partnership ecosystem aimed at building a new generation of international partners.",about_mission_label:"Mission",about_mission:"\"To create a long-term humanitarian environment of trust, education and cooperation between Russia and the countries of the Islamic world.\"",
founder_label:"Project Founder",founder_title:"Khusnidin Abdulkasimov",founder_role:"International Expert in Humanitarian Cooperation",
founder_details:[
"Former Deputy Head of Administrative Affairs, Muslim Council of Moscow and Central Region (Moscow Muftiate)",
"Former Head of International Relations Department, Spiritual Assembly of Muslims of Russia",
"Graduate of the Diplomatic Academy of the Ministry of Foreign Affairs of Russia",
"Organiser of major international forums and conferences",
"Initiator of federal sports diplomacy initiatives",
"Master of Theology",
"Organiser of the Federal Sports League 'Sport — Path to Unity'",
"Head of Federal Project 'Rosmigrant' — Legal Protection & Social Adaptation Centre (45 regions of Russia)",
"Expert in humanitarian cooperation with the Islamic world"
],
founder_projects:"Key Projects & Initiatives",
forums:["Federal Project 'Rosmigrant'","International Interreligious Forums","All-Russian Interreligious Forums","Sport Diplomacy: 'Sport — Path to Unity'","Humanitarian Initiatives with International Participation","KazanForum 2026","VolgaForum","Saint Petersburg International Religious Forum"],
forum_label:"KazanForum 2026",forum_title:"Presentation at the Rossotrudnichestvo Session",forum_date:"May 13, 2026 · Kazan, Republic of Tatarstan",
forum_tags:["Youth Diplomacy","Education","Sport","Culture","Russia–OIC"],
forum_desc:"During the Rossotrudnichestvo session at KazanForum 2026, the POKOLENIE initiative was presented as a comprehensive humanitarian partnership platform. The address emphasised the urgent need to build sustainable people-to-people connections between Russia and the Islamic world through education, youth leadership, sport diplomacy and cultural dialogue.",
quotes:[{text:"The new generation of international partners cannot be formed through summits alone — it requires daily educational, cultural and sporting contact.",topic:"Youth Diplomacy"},{text:"Russia and the Islamic world share a common civilisational responsibility to build bridges of trust for the generations to come.",topic:"Partnership Ecosystem"},{text:"Sport is not entertainment — it is a language that crosses borders, religions and political divisions. It is diplomacy at its most human.",topic:"Sport Diplomacy"}],
challenge_label:"The Global Challenge",challenge_title:"Why Now. Why POKOLENIE.",challenge_desc:"The next decade will determine which partnerships endure. Youth demographics, education competition, and the architecture of humanitarian diplomacy are reshaping the world order.",
stats:[{num:"1.9B",label:"Muslims worldwide — the fastest-growing demographic"},{num:"57",label:"OIC member states"},{num:"60%",label:"Of the Islamic world population under 30"},{num:"45",label:"Regions of Russia covered by Rosmigrant project"}],
challenge_cards:[{icon:"🎓",title:"Education Competition",text:"Nations are competing for the loyalty of the next generation. Russia has unique offerings — but needs a structured platform."},{icon:"🤝",title:"Humanitarian Diplomacy",text:"Soft power built on genuine human connection — education, sport, art — creates partnerships that outlast any political moment."},{icon:"🌍",title:"Future Leadership",text:"The leaders of tomorrow are students today. The relationship Russia builds in the next five years will define the next twenty."}],
modules_label:"Core Modules",modules_title:"Three Pillars of Partnership",
modules:[{icon:"📚",title:"Education",sub:"Academic Bridges",desc:"University partnerships, scholarship programs, joint research and language academies.",items:["University partnerships","Scholarship programs","Joint research","Language academies","Student exchanges"]},{icon:"⚽",title:"Sport Diplomacy",sub:"Unity Through Sport",desc:"International leagues, youth federations, joint competitions as instruments of people-to-people diplomacy.",items:["International leagues","Youth federations","Joint competitions","Coaching exchanges","Sports diplomacy forums"]},{icon:"🎨",title:"Culture & Media",sub:"Shared Narratives",desc:"Cultural exchanges, joint media productions, film festivals and artistic residencies.",items:["Cultural exchanges","Joint media","Film festivals","Artistic residencies","Digital platforms"]}],
kazan_label:"Kazan as Hub",kazan_title:"Kazan: Bridge Between Civilisations",kazan_p1:"The capital of Tatarstan — a city where European and Islamic civilisations have coexisted for centuries, where Russia's cultural diversity is most visible, and where the future of East-West dialogue is being written.",kazan_p2:"As host city of KazanForum, SCO and BRICS processes, and a growing ecosystem of international universities and diplomatic institutions, Kazan is the natural representative office for POKOLENIE.",
kazan_cards:[{title:"Bridge City",desc:"Where Europe meets the Islamic world, daily, for centuries"},{title:"Forum Capital",desc:"KazanForum — Russia's premier platform for OIC dialogue"},{title:"University Hub",desc:"30+ institutions with international programs"},{title:"Diplomatic Centre",desc:"Growing ecosystem of consulates and cultural centres"}],
partners_label:"International Partnership",partners_title:"Partners & Institutions",
roadmap_label:"Strategic Roadmap",roadmap_title:"Roadmap 2026–2028",
roadmap:[{year:"2026 Q1–Q2",title:"Foundation & Launch",desc:"Initiative registration, founding partnerships, KazanForum presentation, website launch.",status:"current"},{year:"2026 Q3–Q4",title:"Pilot Programs",desc:"First educational exchanges, sport diplomacy leagues, media partnerships.",status:"upcoming"},{year:"2027",title:"Expansion",desc:"50+ partner institutions, scholarship program, annual POKOLENIE forum.",status:"upcoming"},{year:"2028",title:"Full Ecosystem",desc:"Infrastructure in 15+ countries, international POKOLENIE awards.",status:"upcoming"}],
press_label:"Press & Media",press_title:"POKOLENIE in the Media",press_subtitle:"Publications and mentions of the initiative in Russian and international media.",press_cta:"Press Kit / Media Enquiry",press_email_label:"Media enquiries:",
press_items:[{outlet:"KazanForum 2026",date:"May 13, 2026",title:"POKOLENIE Presentation at the Rossotrudnichestvo Session",type:"Forum"},{outlet:"Rossotrudnichestvo",date:"2026",title:"Russia–Islamic World Humanitarian Partnership: New Formats",type:"Platform"},{outlet:"VolgaForum",date:"2025",title:"Sport Diplomacy as an Instrument of People-to-People Diplomacy",type:"Forum"},{outlet:"Spiritual Assembly of Muslims of Russia",date:"2024–2025",title:"Intercultural Dialogue and International Humanitarian Initiatives",type:"Institution"}],
contact_label:"Contact & Partnership",contact_title:"Become a Partner",contact_subtitle:"Join the POKOLENIE ecosystem. Reach out to explore educational, cultural, sporting or institutional partnerships.",contact_email_label:"Email",contact_phone_label:"Phone",contact_hq_label:"Headquarters",contact_hq:"Moscow, Russian Federation",contact_rep_label:"Representative Office",contact_rep:"Kazan, Republic of Tatarstan",
fields:{name:"Full Name *",org:"Organisation",country:"Country",pos:"Position",email:"Email *",phone:"Phone",partnership:"Partnership Interest",message:"Message *"},
partnerships:["Education & Academic","Sport Diplomacy","Culture & Media","Humanitarian Forum","Institutional Partner","Media Partner","Investor / Donor"],
btn_send:"Send Request",btn_partner:"Become a Partner",sending:"Sending...",success_msg:"Thank you for your request. Our team will contact you shortly.",error_fields:"Please fill in required fields (Name, Email, Message).",error_msg:"Error. Please email us directly: khus-ab@yandex.ru",copied:"Copied!",copy:"Copy",
footer_desc:"International Humanitarian Platform of Russia and the Islamic World.",footer_nav:"Navigation",footer_nav_links:[["About","about"],["Founder","founder"],["KazanForum","kazanforum"],["Modules","modules"],["Roadmap","roadmap"],["Press","press"],["Contact","contact"]],footer_contact:"Contact",footer_connect:"Connect",footer_hq:"Headquarters",footer_hq_val:"Moscow, Russian Federation",footer_rep:"Representative Office",footer_rep_val:"Kazan, Republic of Tatarstan",footer_copy:"© 2026 POKOLENIE. All rights reserved.",footer_geo:"Moscow · Kazan · Islamic World",scroll:"Scroll",
}
};

const PHOTO_B64 = "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";

const partners_data = {
  international: [
    {name:"Organization of Islamic Cooperation",abbr:"OIC",en:"Organization of Islamic Cooperation (OIC)"},
    {name:"Muslim World League",abbr:"MWL",en:"Muslim World League (MWL)"},
    {name:"League of Arab States",abbr:"LAS",en:"League of Arab States (LAS)"},
    {name:"General Assembly of Peoples of the World",abbr:"GAPW",en:"General Assembly of Peoples of the World"},
  ],
  humanitarian: [
    {name:"КазанФорум",abbr:"KF",en:"KazanForum"},
    {name:"ВолгаФорум",abbr:"VF",en:"VolgaForum"},
    {name:"Россотрудничество",abbr:"RS",en:"Rossotrudnichestvo"},
    {name:"Русские дома",abbr:"RH",en:"Russian House Network"},
  ],
  interreligious: [
    {name:"Духовное собрание мусульман России",abbr:"ДСМР",en:"Spiritual Assembly of Muslims of Russia"},
    {name:"Московский муфтият",abbr:"ММ",en:"Muslim Council of Moscow"},
    {name:"Межрелигиозный совет России",abbr:"МСР",en:"Interreligious Council of Russia"},
  ],
  diplomatic: [
    {name:"Дипломатическая академия МИД",abbr:"ДА",en:"Diplomatic Academy MFA Russia"},
    {name:"Секретариат ШОС",abbr:"ШОС",en:"SCO Secretariat"},
    {name:"Республика Татарстан",abbr:"РТ",en:"Republic of Tatarstan"},
  ]
};

const GP=({opacity=0.06,size=60})=>(
  <svg width={size*4} height={size*4} viewBox={`0 0 ${size*4} ${size*4}`} style={{position:"absolute",top:0,right:0,opacity,pointerEvents:"none"}}>
    <defs><pattern id="ig" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
      <polygon points={`${size/2},2 ${size-2},${size*.35} ${size-2},${size*.65} ${size/2},${size-2} 2,${size*.65} 2,${size*.35}`} fill="none" stroke={GOLD} strokeWidth="0.7"/>
      <circle cx={size/2} cy={size/2} r="3" fill="none" stroke={GOLD} strokeWidth="0.5"/>
    </pattern></defs>
    <rect width={size*4} height={size*4} fill="url(#ig)"/>
  </svg>
);
const SP=({opacity=0.04})=>(
  <svg width="480" height="480" viewBox="0 0 480 480" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",opacity,pointerEvents:"none"}}>
    {Array.from({length:8},(_,i)=>{const a=(i*Math.PI*2)/8;return <circle key={i} cx={240+Math.cos(a)*170} cy={240+Math.sin(a)*170} r="3" fill={GOLD}/>;}) }
    <polygon points="240,60 268,168 376,168 292,236 320,344 240,280 160,344 188,236 104,168 212,168" fill="none" stroke={GOLD} strokeWidth="0.8"/>
    <circle cx="240" cy="240" r="170" fill="none" stroke={GOLD} strokeWidth="0.4"/>
    <circle cx="240" cy="240" r="56" fill="none" stroke={GOLD} strokeWidth="0.5"/>
  </svg>
);
const GL=()=><div style={{width:60,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`,margin:"0 auto 22px"}}/>;
const SL=({c})=><div style={{color:GOLD,fontSize:11,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:10,fontWeight:500,textAlign:"center"}}>{c}</div>;
const Sec=({id,children,bg=NAVY,style={}})=><section id={id} style={{padding:"80px 0",position:"relative",overflow:"hidden",background:bg,...style}}>{children}</section>;
const Wrap=({children,n})=><div style={{maxWidth:n?800:1160,margin:"0 auto",padding:"0 28px"}}>{children}</div>;

function useInV(){
  const ref=useRef(null);const[v,setV]=useState(false);
  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true);},{threshold:0.1});
    if(ref.current)o.observe(ref.current);return()=>o.disconnect();
  },[]);return[ref,v];
}
const Rv=({children,delay=0,style={}})=>{const[ref,v]=useInV();return<div ref={ref} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(24px)",transition:`opacity .8s ease ${delay}s,transform .8s ease ${delay}s`,...style}}>{children}</div>;};

const Btn=({children,variant="gold",onClick,disabled,style={}})=>{
  const base={padding:"12px 28px",cursor:disabled?"wait":"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:13,letterSpacing:"0.17em",textTransform:"uppercase",borderRadius:BR,border:"none",transition:"opacity .2s,transform .15s",fontWeight:600,...style};
  const V={gold:{background:GOLD,color:NAVY},outline:{background:"transparent",color:WHITE,border:`1px solid rgba(168,131,42,.55)`},ghost:{background:"transparent",color:MUTED,border:`1px solid rgba(138,143,160,.3)`},small:{background:"transparent",color:GOLD,border:`1px solid rgba(168,131,42,.4)`,padding:"5px 13px",fontSize:11}};
  return<button onClick={onClick} disabled={disabled} style={{...base,...V[variant],opacity:disabled?.7:1}}>{children}</button>;
};

const Logo=({onClick})=>(
  <button onClick={onClick} style={{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:10}}>
    <svg width="24" height="24" viewBox="0 0 24 24"><polygon points="12,1 15,8.5 23,8.5 17,14 19,21.5 12,17 5,21.5 7,14 1,8.5 9,8.5" fill="none" stroke={GOLD} strokeWidth="1.2"/><circle cx="12" cy="12" r="3" fill="none" stroke={GOLD} strokeWidth="0.8"/></svg>
    <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:WHITE,letterSpacing:"0.14em",fontWeight:300}}>ПОКОЛЕНИЕ</span>
  </button>
);
const LS=({lang,setLang})=>(
  <div style={{display:"flex",border:`1px solid rgba(168,131,42,.38)`,borderRadius:BR,overflow:"hidden"}}>
    {["ru","en"].map(l=><button key={l} onClick={()=>setLang(l)} style={{padding:"5px 13px",background:lang===l?GOLD:"transparent",color:lang===l?NAVY:MUTED,border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:lang===l?700:400}}>{l}</button>)}
  </div>
);

function Nav({onNav,lang,setLang,t}){
  const[sc,setSc]=useState(false);
  useEffect(()=>{const f=()=>setSc(window.scrollY>60);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const links=[[t.nav_about,"about"],[t.nav_founder,"founder"],[t.nav_forum,"kazanforum"],[t.nav_modules,"modules"],[t.nav_kazan,"kazan"],[t.nav_roadmap,"roadmap"],[t.nav_press,"press"],[t.nav_contact,"contact"]];
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:sc?"rgba(10,14,26,.97)":"transparent",borderBottom:sc?`1px solid rgba(168,131,42,.15)`:"none",transition:"background .5s",backdropFilter:sc?"blur(14px)":"none"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 28px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
        <Logo onClick={()=>onNav("home")}/>
        <div style={{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
          {links.map(([label,id])=><button key={id} onClick={()=>onNav(id)} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:WHITE,opacity:.62,letterSpacing:"0.1em",padding:0,textTransform:"uppercase"}}>{label}</button>)}
          <Btn variant="small" onClick={()=>onNav("contact")}>{t.nav_partner}</Btn>
          <LS lang={lang} setLang={setLang}/>
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
      <SP opacity={.07}/>
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`}}/>
      <div style={{textAlign:"center",position:"relative",zIndex:2,padding:"0 28px",maxWidth:900}}>
        <div style={{opacity:m?1:0,transform:m?"translateY(0)":"translateY(-20px)",transition:"opacity 1.2s ease .2s,transform 1.2s ease .2s"}}>
          <div style={{color:GOLD,fontSize:10,letterSpacing:"0.42em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:28,display:"flex",alignItems:"center",justifyContent:"center",gap:14}}>
            <div style={{width:36,height:1,background:GOLD}}/>{t.hero_over}<div style={{width:36,height:1,background:GOLD}}/>
          </div>
        </div>
        <div style={{opacity:m?1:0,transform:m?"translateY(0)":"translateY(30px)",transition:"opacity 1.4s ease .4s,transform 1.4s ease .4s"}}>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(56px,11vw,128px)",fontWeight:300,color:WHITE,margin:"0 0 6px",letterSpacing:"0.08em",lineHeight:1}}>ПОКОЛЕНИЕ</h1>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(12px,2.3vw,18px)",fontWeight:300,color:WHITE,margin:"0 0 20px",letterSpacing:"0.3em",opacity:.55}}>POKOLENIE</h2>
        </div>
        <div style={{opacity:m?1:0,transition:"opacity 1.4s ease .7s"}}>
          <div style={{width:110,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`,margin:"0 auto 24px"}}/>
        </div>
        <div style={{opacity:m?1:0,transform:m?"translateY(0)":"translateY(20px)",transition:"opacity 1.2s ease .9s,transform 1.2s ease .9s"}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(14px,2.3vw,19px)",color:WHITE,opacity:.86,marginBottom:10,letterSpacing:"0.05em",fontWeight:300}}>{t.hero_sub}</p>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(10px,1.3vw,13px)",color:GOLD,letterSpacing:"0.2em",marginBottom:44}}>{t.hero_tag}</p>
        </div>
        <div style={{opacity:m?1:0,transition:"opacity 1.2s ease 1.2s",display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <Btn onClick={()=>onNav("contact")}>{t.hero_btn1}</Btn>
          <Btn variant="outline" onClick={()=>onNav("contact")}>{t.hero_btn2}</Btn>
          <Btn variant="ghost">{t.hero_btn3}</Btn>
        </div>
      </div>
      <div style={{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",opacity:m?.4:0,transition:"opacity 1.5s ease 2s",display:"flex",flexDirection:"column",alignItems:"center",gap:7}}>
        <div style={{color:MUTED,fontSize:10,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{t.scroll}</div>
        <div style={{width:1,height:32,background:`linear-gradient(180deg,${GOLD},transparent)`}}/>
      </div>
    </div>
  );
}

function About({t}){return(
  <Sec id="about" bg={NAVY_MID}><GP opacity={.05}/><Wrap n>
    <Rv><SL c={t.about_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(24px,5vw,46px)",fontWeight:300,color:WHITE,marginBottom:28,lineHeight:1.2,textAlign:"center"}}>{t.about_title}</h2>
    </Rv>
    <Rv delay={.2}>
      <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(13px,1.9vw,16px)",color:WHITE,opacity:.82,lineHeight:1.9,marginBottom:20,textAlign:"center"}}>{t.about_p1}</p>
      <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.6vw,14px)",color:MUTED,lineHeight:1.9,marginBottom:36,textAlign:"center"}}>{t.about_p2}</p>
    </Rv>
    <Rv delay={.4}>
      <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.09),rgba(168,131,42,.03))`,border:`1px solid rgba(168,131,42,.22)`,padding:36,position:"relative",borderRadius:8}}>
        <div style={{position:"absolute",top:-1,left:"50%",transform:"translateX(-50%)",width:56,height:1,background:GOLD}}/>
        <div style={{color:GOLD,fontSize:10,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:12,textAlign:"center"}}>{t.about_mission_label}</div>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(15px,2.6vw,22px)",color:WHITE,textAlign:"center",fontStyle:"italic",lineHeight:1.65,margin:0}}>{t.about_mission}</p>
      </div>
    </Rv>
  </Wrap></Sec>
);}

function Founder({t}){
  const photo = PHOTO_B64 ? `data:image/jpeg;base64,${PHOTO_B64}` : null;
  return(
  <Sec id="founder" bg={NAVY}><GP opacity={.04} size={80}/><Wrap>
    <Rv style={{textAlign:"center",marginBottom:44}}><SL c={t.founder_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE}}>{t.founder_title}</h2>
      <p style={{color:GOLD,fontSize:13,letterSpacing:"0.15em",fontFamily:"'Cormorant Garamond',serif",marginTop:8,textTransform:"uppercase"}}>{t.founder_role}</p>
    </Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:40,alignItems:"start"}}>
      <Rv>
        <div style={{position:"relative",marginBottom:20}}>
          <div style={{width:"100%",paddingBottom:"112%",background:`linear-gradient(160deg,${NAVY_LIGHT},${NAVY_MID})`,border:`1px solid rgba(168,131,42,.28)`,position:"relative",overflow:"hidden",borderRadius:4}}>
            {photo?(
              <img src={photo} alt="Хуснидин Абдулкасимов" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center"}}/>
            ):(
              <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:76,height:76,borderRadius:"50%",border:`1px solid rgba(168,131,42,.45)`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10}}>
                  <span style={{fontSize:26,color:GOLD,fontFamily:"'Cormorant Garamond',serif"}}>ХА</span>
                </div>
              </div>
            )}
            <SP opacity={.04}/>
          </div>
          <div style={{position:"absolute",bottom:-1,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`}}/>
        </div>
        <div style={{background:`rgba(168,131,42,.06)`,border:`1px solid rgba(168,131,42,.2)`,padding:"16px 20px",borderRadius:8,marginBottom:12}}>
          <div style={{color:GOLD,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>Контакт</div>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:WHITE,margin:0,lineHeight:1.6}}>khus-ab@yandex.ru<br/>+7 925 766 4998</p>
        </div>
      </Rv>
      <Rv delay={.2}>
        <div style={{marginBottom:24}}>
          {t.founder_details.map((d,i)=>(
            <div key={i} style={{display:"flex",gap:10,marginBottom:12,paddingBottom:12,borderBottom:i<t.founder_details.length-1?`1px solid rgba(168,131,42,.1)`:"none"}}>
              <div style={{width:4,height:4,minWidth:4,borderRadius:"50%",background:GOLD,marginTop:7}}/>
              <span style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:WHITE,opacity:.85,lineHeight:1.65}}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{color:GOLD,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:14}}>{t.founder_projects}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {t.forums.map((f,i)=><div key={i} style={{background:`rgba(168,131,42,.06)`,border:`1px solid rgba(168,131,42,.16)`,padding:"11px 12px",borderRadius:6}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.75,lineHeight:1.5}}>{f}</div>
          </div>)}
        </div>
      </Rv>
    </div>
  </Wrap></Sec>
);}

function KazanForum({t}){return(
  <Sec id="kazanforum" bg={NAVY_MID}><Wrap>
    <Rv style={{textAlign:"center",marginBottom:44}}><SL c={t.forum_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE,marginBottom:8}}>{t.forum_title}</h2>
      <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,letterSpacing:"0.1em"}}>{t.forum_date}</p>
    </Rv>
    <Rv delay={.1}>
      <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.1),rgba(10,14,26,.5))`,border:`1px solid rgba(168,131,42,.28)`,padding:"32px 36px",marginBottom:32,position:"relative",overflow:"hidden",borderRadius:8}}>
        <GP opacity={.07} size={50}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:14}}>
            {t.forum_tags.map(tag=><span key={tag} style={{padding:"3px 10px",border:`1px solid rgba(168,131,42,.32)`,color:GOLD,fontSize:9,letterSpacing:"0.14em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",borderRadius:20}}>{tag}</span>)}
          </div>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.8vw,14px)",color:WHITE,opacity:.85,lineHeight:1.88,margin:0}}>{t.forum_desc}</p>
        </div>
      </div>
    </Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
      {t.quotes.map((q,i)=>(
        <Rv key={i} delay={i*.14}>
          <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"26px 22px",position:"relative",borderRadius:8}}>
            <div style={{position:"absolute",top:12,left:20,color:GOLD,fontSize:44,fontFamily:"serif",lineHeight:1,opacity:.22}}>"</div>
            <div style={{color:GOLD,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:14,paddingTop:22}}>{q.topic}</div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(13px,1.8vw,16px)",color:WHITE,fontStyle:"italic",lineHeight:1.7,margin:0,opacity:.9}}>"{q.text}"</p>
          </div>
        </Rv>
      ))}
    </div>
  </Wrap></Sec>
);}

function Challenge({t}){return(
  <Sec id="challenge" bg={NAVY}><Wrap>
    <Rv style={{textAlign:"center",marginBottom:44}}><SL c={t.challenge_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE,marginBottom:14}}>{t.challenge_title}</h2>
      <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.7vw,14px)",color:MUTED,lineHeight:1.88,maxWidth:640,margin:"0 auto"}}>{t.challenge_desc}</p>
    </Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:1,background:"rgba(168,131,42,.1)",border:"1px solid rgba(168,131,42,.1)",marginBottom:40}}>
      {t.stats.map((s,i)=>(
        <Rv key={i} delay={i*.1}>
          <div style={{background:NAVY,padding:"30px 20px",textAlign:"center"}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(28px,5vw,48px)",color:GOLD,fontWeight:300,marginBottom:8}}>{s.num}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,lineHeight:1.6}}>{s.label}</div>
          </div>
        </Rv>
      ))}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
      {t.challenge_cards.map((c,i)=>(
        <Rv key={i} delay={i*.14}>
          <div style={{background:NAVY_LIGHT,border:`1px solid rgba(168,131,42,.12)`,padding:"26px 22px",borderRadius:8}}>
            <div style={{fontSize:22,marginBottom:12}}>{c.icon}</div>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:WHITE,fontWeight:400,marginBottom:8}}>{c.title}</h3>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.78,margin:0}}>{c.text}</p>
          </div>
        </Rv>
      ))}
    </div>
  </Wrap></Sec>
);}

function Modules({t}){return(
  <Sec id="modules" bg={NAVY_MID}><GP opacity={.04}/><Wrap>
    <Rv style={{textAlign:"center",marginBottom:44}}><SL c={t.modules_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE}}>{t.modules_title}</h2>
    </Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:0,border:`1px solid rgba(168,131,42,.16)`}}>
      {t.modules.map((m,i)=>(
        <Rv key={i} delay={i*.18}>
          <div style={{padding:"36px 28px",borderRight:i<2?`1px solid rgba(168,131,42,.12)`:"none"}}>
            <div style={{fontSize:30,marginBottom:14}}>{m.icon}</div>
            <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{m.sub}</div>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,color:WHITE,fontWeight:300,marginBottom:10}}>{m.title}</h3>
            <div style={{width:32,height:1,background:`linear-gradient(90deg,${GOLD},transparent)`,marginBottom:14}}/>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.8,marginBottom:18}}>{m.desc}</p>
            <ul style={{listStyle:"none",padding:0,margin:0}}>
              {m.items.map((item,j)=><li key={j} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}><div style={{width:3,height:3,borderRadius:"50%",background:GOLD,minWidth:3}}/><span style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.6}}>{item}</span></li>)}
            </ul>
          </div>
        </Rv>
      ))}
    </div>
  </Wrap></Sec>
);}

function Kazan({t}){return(
  <Sec id="kazan" bg={NAVY}>
    <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 50%,rgba(168,131,42,.08) 0%,transparent 60%)`}}/>
    <SP opacity={.04}/>
    <Wrap>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:48,alignItems:"center"}}>
        <Rv>
          <SL c={t.kazan_label}/><GL/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,40px)",fontWeight:300,color:WHITE,marginBottom:18,lineHeight:1.2,textAlign:"left"}}>{t.kazan_title}</h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.7vw,14px)",color:MUTED,lineHeight:1.88,marginBottom:20}}>{t.kazan_p1}</p>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(11px,1.5vw,13px)",color:MUTED,lineHeight:1.88}}>{t.kazan_p2}</p>
        </Rv>
        <Rv delay={.3}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {t.kazan_cards.map((c,i)=><div key={i} style={{background:`rgba(168,131,42,.06)`,border:`1px solid rgba(168,131,42,.16)`,padding:"18px 14px",borderRadius:8}}><div style={{color:GOLD,fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{c.title}</div><p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.65,lineHeight:1.6,margin:0}}>{c.desc}</p></div>)}
          </div>
        </Rv>
      </div>
    </Wrap>
  </Sec>
);}

function Partners({t,lang}){
  const categories = [
    {label: lang==="ru"?"Международные институты":"International Institutions", items: partners_data.international},
    {label: lang==="ru"?"Гуманитарные платформы":"Humanitarian Platforms", items: partners_data.humanitarian},
    {label: lang==="ru"?"Межрелигиозные структуры":"Interreligious Structures", items: partners_data.interreligious},
    {label: lang==="ru"?"Дипломатические партнёрства":"Diplomatic Partnerships", items: partners_data.diplomatic},
  ];
  return(
    <Sec id="partners" bg={NAVY_MID}><Wrap>
      <Rv style={{textAlign:"center",marginBottom:48}}><SL c={t.partners_label}/><GL/>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE}}>{t.partners_title}</h2>
      </Rv>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:24}}>
        {categories.map((cat,ci)=>(
          <Rv key={ci} delay={ci*.1}>
            <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,borderRadius:8,overflow:"hidden"}}>
              <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.12),rgba(168,131,42,.04))`,padding:"14px 20px",borderBottom:`1px solid rgba(168,131,42,.15)`}}>
                <div style={{color:GOLD,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{cat.label}</div>
              </div>
              <div style={{padding:"16px 20px"}}>
                {cat.items.map((item,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"10px 0",borderBottom:i<cat.items.length-1?`1px solid rgba(168,131,42,.08)`:"none"}}>
                    <div style={{width:36,height:36,minWidth:36,borderRadius:"50%",border:`1px solid rgba(168,131,42,.3)`,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(168,131,42,.06)"}}>
                      <span style={{color:GOLD,fontSize:11,fontFamily:"'Cormorant Garamond',serif",fontWeight:600}}>{item.abbr.slice(0,3)}</span>
                    </div>
                    <div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:13,color:WHITE,opacity:.9,lineHeight:1.4}}>{lang==="en"?item.en:item.name}</div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:GOLD,opacity:.7}}>{item.abbr}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Rv>
        ))}
      </div>
    </Wrap></Sec>
  );
}

function WorldMap(){
  const oicCountries = ["DZ","EG","LY","MA","MR","SD","TN","BJ","BF","CM","CI","GA","GN","GW","GQ","ML","NE","NG","SN","SL","TG","TD","UG","MZ","SO","BI","KM","DJ","GM","GH","SY","JO","KW","LB","PS","SA","QA","AE","YE","OM","BH","IQ","IR","AF","PK","BD","MV","MY","ID","BN","KZ","KG","TJ","TM","UZ","AZ","GY","SR"];
  return(
    <Sec id="map" bg={NAVY_MID}>
      <Wrap>
        <Rv style={{textAlign:"center",marginBottom:40}}>
          <SL c="Geography · География"/>
          <GL/>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE,marginBottom:12}}>
            Russia & 57 OIC Nations
          </h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:MUTED,maxWidth:560,margin:"0 auto"}}>
            POKOLENIE bridges Russia with the 57 member states of the Organisation of Islamic Cooperation
          </p>
        </Rv>
        <Rv delay={.2}>
          <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.2)`,borderRadius:8,padding:"32px 24px",position:"relative",overflow:"hidden"}}>
            <svg viewBox="0 0 1000 500" style={{width:"100%",height:"auto"}} xmlns="http://www.w3.org/2000/svg">
              {/* World background */}
              <rect width="1000" height="500" fill={NAVY}/>
              {/* Simple world map outline - continents */}
              {/* Europe */}
              <path d="M450,80 L480,75 L510,80 L520,100 L500,110 L480,105 L460,110 L445,100 Z" fill="rgba(168,131,42,0.15)" stroke="rgba(168,131,42,0.3)" strokeWidth="0.5"/>
              {/* Russia - highlighted */}
              <path d="M480,60 L600,50 L750,55 L820,70 L830,90 L800,100 L750,95 L700,100 L650,95 L600,100 L550,95 L500,100 L480,90 Z" fill="rgba(201,168,76,0.35)" stroke={GOLD} strokeWidth="1.2"/>
              <text x="640" y="82" fill={GOLD} fontSize="11" fontFamily="Cormorant Garamond" textAnchor="middle" fontWeight="600">РОССИЯ / RUSSIA</text>
              {/* Middle East */}
              <path d="M540,130 L580,125 L610,130 L620,155 L600,165 L570,160 L545,155 Z" fill="rgba(168,131,42,0.25)" stroke="rgba(168,131,42,0.4)" strokeWidth="0.7"/>
              {/* Central Asia */}
              <path d="M600,90 L680,85 L710,100 L700,120 L660,125 L620,120 L600,110 Z" fill="rgba(168,131,42,0.25)" stroke="rgba(168,131,42,0.4)" strokeWidth="0.7"/>
              {/* North Africa */}
              <path d="M430,140 L540,135 L560,160 L550,185 L530,195 L480,200 L440,195 L420,170 Z" fill="rgba(168,131,42,0.25)" stroke="rgba(168,131,42,0.4)" strokeWidth="0.7"/>
              {/* West Africa */}
              <path d="M420,170 L480,200 L490,230 L470,250 L440,245 L415,230 L405,200 Z" fill="rgba(168,131,42,0.2)" stroke="rgba(168,131,42,0.35)" strokeWidth="0.7"/>
              {/* South/East Asia */}
              <path d="M720,120 L780,115 L800,130 L790,150 L760,155 L730,145 Z" fill="rgba(168,131,42,0.2)" stroke="rgba(168,131,42,0.35)" strokeWidth="0.7"/>
              {/* Indonesia */}
              <path d="M760,190 L800,185 L830,195 L835,210 L810,215 L775,210 Z" fill="rgba(168,131,42,0.2)" stroke="rgba(168,131,42,0.35)" strokeWidth="0.7"/>

              {/* Connection lines from Russia to OIC regions */}
              <line x1="640" y1="85" x2="580" y2="140" stroke={GOLD} strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="640" y1="85" x2="480" y2="155" stroke={GOLD} strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="640" y1="85" x2="650" y2="110" stroke={GOLD} strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="640" y1="85" x2="750" y2="135" stroke={GOLD} strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>
              <line x1="640" y1="85" x2="790" y2="200" stroke={GOLD} strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4"/>

              {/* Legend */}
              <rect x="20" y="420" width="14" height="14" fill="rgba(201,168,76,0.35)" stroke={GOLD} strokeWidth="1"/>
              <text x="40" y="431" fill={WHITE} fontSize="10" fontFamily="Playfair Display" opacity="0.7">Russia (RF)</text>
              <rect x="130" y="420" width="14" height="14" fill="rgba(168,131,42,0.25)" stroke="rgba(168,131,42,0.4)" strokeWidth="0.7"/>
              <text x="150" y="431" fill={WHITE} fontSize="10" fontFamily="Playfair Display" opacity="0.7">OIC Member States (57)</text>

              {/* Dots for major cities */}
              <circle cx="530" cy="72" r="4" fill={GOLD} opacity="0.9"/>
              <text x="530" y="65" fill={GOLD} fontSize="9" fontFamily="Cormorant Garamond" textAnchor="middle">Moscow</text>
              <circle cx="595" cy="80" r="3" fill={GOLD} opacity="0.7"/>
              <text x="595" y="73" fill={GOLD} fontSize="8" fontFamily="Cormorant Garamond" textAnchor="middle">Kazan</text>
            </svg>
            <div style={{display:"flex",justifyContent:"center",gap:32,marginTop:20,flexWrap:"wrap"}}>
              {[["57","OIC Member States"],["1.9B","Muslims Worldwide"],["Moscow","Headquarters"],["Kazan","Representative Office"]].map(([num,label])=>(
                <div key={label} style={{textAlign:"center"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:GOLD,fontWeight:300}}>{num}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:10,color:MUTED}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Rv>
      </Wrap>
    </Sec>
  );
}

function Roadmap({t}){return(
  <Sec id="roadmap" bg={NAVY}><Wrap n>
    <Rv style={{textAlign:"center",marginBottom:44}}><SL c={t.roadmap_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE}}>{t.roadmap_title}</h2>
    </Rv>
    <div style={{position:"relative",paddingLeft:32}}>
      <div style={{position:"absolute",left:7,top:0,bottom:0,width:1,background:`linear-gradient(180deg,${GOLD},rgba(168,131,42,.1))`}}/>
      {t.roadmap.map((item,i)=>(
        <Rv key={i} delay={i*.16}>
          <div style={{display:"flex",gap:22,marginBottom:28,position:"relative"}}>
            <div style={{position:"absolute",left:-32,top:4,width:14,height:14,borderRadius:"50%",background:item.status==="current"?GOLD:NAVY,border:`2px solid ${GOLD}`}}/>
            <div style={{flex:1,background:item.status==="current"?`rgba(168,131,42,.09)`:NAVY_LIGHT,border:`1px solid ${item.status==="current"?"rgba(168,131,42,.38)":"rgba(168,131,42,.11)"}`,padding:"22px 26px",borderRadius:8}}>
              <div style={{color:GOLD,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:5}}>{item.year}</div>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,color:WHITE,fontWeight:400,marginBottom:6}}>{item.title}</h3>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:MUTED,lineHeight:1.75,margin:0}}>{item.desc}</p>
            </div>
          </div>
        </Rv>
      ))}
    </div>
  </Wrap></Sec>
);}

function Press({t}){return(
  <Sec id="press" bg={NAVY_MID}><GP opacity={.04}/><Wrap>
    <Rv style={{textAlign:"center",marginBottom:40}}><SL c={t.press_label}/><GL/>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE,marginBottom:10}}>{t.press_title}</h2>
      <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:MUTED,maxWidth:560,margin:"0 auto"}}>{t.press_subtitle}</p>
    </Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16,marginBottom:36}}>
      {t.press_items.map((item,i)=>(
        <Rv key={i} delay={i*.11}>
          <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"22px 20px",borderRadius:8}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <span style={{padding:"3px 9px",background:"rgba(168,131,42,.12)",color:GOLD,fontSize:9,letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",borderRadius:20}}>{item.type}</span>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:MUTED}}>{item.date}</span>
            </div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:GOLD,marginBottom:7}}>{item.outlet}</div>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:WHITE,opacity:.82,lineHeight:1.6,margin:0}}>{item.title}</p>
          </div>
        </Rv>
      ))}
    </div>
    <Rv delay={.3} style={{textAlign:"center"}}>
      <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.09),rgba(168,131,42,.03))`,border:`1px solid rgba(168,131,42,.22)`,padding:"28px 32px",borderRadius:8,display:"inline-block",maxWidth:520,width:"100%",boxSizing:"border-box"}}>
        <div style={{color:GOLD,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:8}}>{t.press_email_label}</div>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:WHITE,marginBottom:16}}>khus-ab@yandex.ru</p>
        <Btn onClick={()=>window.open("mailto:khus-ab@yandex.ru?subject=Media Enquiry — POKOLENIE")}>{t.press_cta}</Btn>
      </div>
    </Rv>
  </Wrap></Sec>
);}

function Contact({t}){
  const[form,setForm]=useState({name:"",organization:"",country:"",position:"",email:"",phone:"",partnership:"",message:""});
  const[status,setStatus]=useState(null);const[sending,setSending]=useState(false);const[copied,setCopied]=useState(false);
  const EMAIL="khus-ab@yandex.ru";
  const hc=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit=async()=>{
    if(!form.name||!form.email||!form.message){setStatus("ef");return;}
    setSending(true);setStatus(null);
    try{
      const r=await fetch(`https://formsubmit.co/ajax/${EMAIL}`,{
        method:"POST",
        headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({
          _subject:`POKOLENIE Partnership Request — ${form.name}`,
          _captcha:"false",
          _template:"table",
          name:form.name,
          organization:form.organization,
          country:form.country,
          position:form.position,
          email:form.email,
          phone:form.phone,
          partnership_interest:form.partnership,
          message:form.message
        })
      });
      const d=await r.json();
      if(d.success==="true"||r.ok){setStatus("ok");setForm({name:"",organization:"",country:"",position:"",email:"",phone:"",partnership:"",message:""});}
      else setStatus("err");
    }catch{setStatus("err");}
    setSending(false);
  };
  const copyE=()=>{navigator.clipboard.writeText(EMAIL);setCopied(true);setTimeout(()=>setCopied(false),2000);};
  const inp={width:"100%",background:"rgba(255,255,255,.04)",border:`1px solid rgba(168,131,42,.22)`,color:WHITE,padding:"12px 14px",fontFamily:"'Playfair Display',serif",fontSize:13,outline:"none",boxSizing:"border-box",borderRadius:6};
  return(
    <Sec id="contact" bg={NAVY_MID}><GP opacity={.05}/><Wrap>
      <Rv style={{textAlign:"center",marginBottom:48}}><SL c={t.contact_label}/><GL/>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,4.5vw,42px)",fontWeight:300,color:WHITE}}>{t.contact_title}</h2>
        <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:MUTED,maxWidth:580,margin:"10px auto 0"}}>{t.contact_subtitle}</p>
      </Rv>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:40}}>
        <Rv>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {/* Email */}
            <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"20px 24px",borderRadius:8}}>
              <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{t.contact_email_label}</div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:WHITE}}>{EMAIL}</span>
                <Btn variant="small" onClick={copyE}>{copied?t.copied:t.copy}</Btn>
              </div>
            </div>
            {/* Phone */}
            <div style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"20px 24px",borderRadius:8}}>
              <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:6}}>{t.contact_phone_label}</div>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:WHITE}}>+7 925 766 4998</span>
            </div>
            {/* Messengers */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[["✈","Telegram","https://t.me/pokolenie_init"],["📱","WhatsApp","https://wa.me/79257664998"]].map(([icon,label,href])=>(
                <a key={label} href={href} style={{background:NAVY,border:`1px solid rgba(168,131,42,.16)`,padding:"16px 12px",textAlign:"center",textDecoration:"none",display:"block",borderRadius:8}}>
                  <div style={{color:GOLD,fontSize:18,marginBottom:5}}>{icon}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:WHITE,opacity:.65}}>{label}</div>
                </a>
              ))}
            </div>
            {/* HQ */}
            <div style={{background:`linear-gradient(135deg,rgba(168,131,42,.1),transparent)`,border:`1px solid rgba(168,131,42,.2)`,padding:"20px 24px",borderRadius:8}}>
              <div style={{color:GOLD,fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:4}}>{t.contact_hq_label}</div>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:WHITE,opacity:.85,margin:"0 0 12px"}}>{t.contact_hq}</p>
              <div style={{color:GOLD,fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:4}}>{t.contact_rep_label}</div>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:WHITE,opacity:.85,margin:0}}>{t.contact_rep}</p>
            </div>
          </div>
        </Rv>
        <Rv delay={.2}>
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
          {status==="ok"&&(
            <div style={{background:"rgba(29,158,117,.14)",border:"1px solid rgba(29,158,117,.38)",padding:"16px 20px",marginBottom:12,fontFamily:"'Cormorant Garamond',serif",color:"#4ECBA1",fontSize:14,borderRadius:6,textAlign:"center"}}>
              ✓ {t.success_msg}
            </div>
          )}
          {(status==="err"||status==="ef")&&(
            <div style={{background:"rgba(226,75,74,.13)",border:"1px solid rgba(226,75,74,.3)",padding:"13px 16px",marginBottom:12,fontFamily:"'Cormorant Garamond',serif",color:"#F09595",fontSize:12,borderRadius:6}}>
              {status==="ef"?t.error_fields:t.error_msg}
            </div>
          )}
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <Btn onClick={submit} disabled={sending} style={{flex:1}}>{sending?t.sending:t.btn_send}</Btn>
            <Btn variant="outline" onClick={submit} disabled={sending} style={{flex:1}}>{t.btn_partner}</Btn>
          </div>
        </Rv>
      </div>
    </Wrap></Sec>
  );
}

function Footer({onNav,t}){return(
  <footer style={{background:"#060810",padding:"52px 0 26px",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${GOLD},transparent)`}}/>
    <Wrap>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:32,marginBottom:40}}>
        <div>
          <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:WHITE,fontWeight:300,letterSpacing:"0.08em",marginBottom:4}}>ПОКОЛЕНИЕ</h3>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:GOLD,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>POKOLENIE</p>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,lineHeight:1.78}}>{t.footer_desc}</p>
        </div>
        <div>
          <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:13}}>{t.footer_nav}</div>
          {t.footer_nav_links.map(([label,id])=>(
            <div key={id} style={{marginBottom:6}}>
              <button onClick={()=>onNav(id)} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,padding:0}}>{label}</button>
            </div>
          ))}
        </div>
        <div>
          <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:13}}>{t.footer_contact}</div>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:MUTED,lineHeight:1.88}}>khus-ab@yandex.ru<br/>+7 925 766 4998</p>
        </div>
        <div>
          <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:8}}>{t.footer_hq}</div>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.8,marginBottom:12}}>{t.footer_hq_val}</p>
          <div style={{color:GOLD,fontSize:9,letterSpacing:"0.3em",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:8}}>{t.footer_rep}</div>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:11,color:WHITE,opacity:.8,margin:0}}>{t.footer_rep_val}</p>
        </div>
      </div>
      <div style={{borderTop:"1px solid rgba(168,131,42,.1)",paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:MUTED,margin:0}}>{t.footer_copy}</p>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:10,color:MUTED,margin:0}}>{t.footer_geo}</p>
      </div>
    </Wrap>
  </footer>
);}

export default function App(){
  const[lang,setLang]=useState("ru");
  const t=T[lang];
  useEffect(()=>{
    const link=document.createElement("link");link.rel="stylesheet";link.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap";document.head.appendChild(link);
    document.body.style.margin="0";document.body.style.background=NAVY;document.body.style.overflowX="hidden";
  },[]);
  const scrollTo=(id)=>{if(id==="home"){window.scrollTo({top:0,behavior:"smooth"});return;}const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"});};
  return(
    <div style={{background:NAVY,minHeight:"100vh"}}>
      <Nav onNav={scrollTo} lang={lang} setLang={setLang} t={t}/>
      <Hero onNav={scrollTo} t={t}/>
      <About t={t}/>
      <Founder t={t}/>
      <KazanForum t={t}/>
      <Challenge t={t}/>
      <Modules t={t}/>
      <Kazan t={t}/>
      <Partners t={t} lang={lang}/>
      <WorldMap/>
      <Roadmap t={t}/>
      <Press t={t}/>
      <Contact t={t}/>
      <Footer onNav={scrollTo} t={t}/>
    </div>
  );
}
