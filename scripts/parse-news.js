const axios = require('axios');
const fs = require('fs');
const path = require('path');

const news = [
  {
    title: "КазанФорум 2026: Расширение программ",
    description: "Ежегодный форум представит новые инициативы в образовании",
    link: "https://kazanforum.ru",
    source: "Россия - Исламский мир",
    date: "2026-05-31"
  }
];

const dir = path.join(__dirname, '../public');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'news.json'), JSON.stringify(news, null, 2));
console.log('✅ Новости обновлены');
