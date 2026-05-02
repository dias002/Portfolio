import flipkartVisual from './../assets/flipkart-case.svg';
import airAstanaVisual from './../assets/airastana-case.svg';
import cleverMarketVisual from './../assets/clevermarket-case.svg';
import portrait from './../assets/IMAGE 2026-01-07 15:00:34.jpg';
import reactLogo from './../assets/React.svg';
import djangoLogo from './../assets/Django.svg';
import jsLogo from './../assets/JavaScript.svg';
import postgresLogo from './../assets/PostgreSQL.svg';
import pythonLogo from './../assets/Python.svg';
import nodeLogo from './../assets/Nodejs.svg';
import wordpressLogo from './../assets/WordPress.svg';
import tildaLogo from './../assets/Tilda.svg';
import customCmsLogo from './../assets/CustomCMS.svg';
import instagramLogo from './../assets/Instagram.svg';
import telegramLogo from './../assets/Telegram.svg';
import linkedinLogo from './../assets/LinkedIn.svg';

export const profilePhoto = portrait;

export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rerochelick/',
    icon: instagramLogo,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/Berliyn_h',
    icon: telegramLogo,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/',
    icon: linkedinLogo,
  },
];

export const techStack = [
  { name: 'React', icon: reactLogo },
  { name: 'Django', icon: djangoLogo },
  { name: 'JavaScript', icon: jsLogo },
  { name: 'PostgreSQL', icon: postgresLogo },
  { name: 'Python', icon: pythonLogo },
  { name: 'Node.js', icon: nodeLogo },
  { name: 'WordPress', icon: wordpressLogo },
  { name: 'Tilda', icon: tildaLogo },
  { name: 'Custom CMS', icon: customCmsLogo },
];

export const capabilityCards = [
  {
    accent: '#63e6ff',
    titleEn: 'Full-stack product delivery',
    titleRu: 'Полная разработка продукта',
    bodyEn: 'From the first screen to API, database, auth and deployment, I build coherent products instead of disconnected pieces.',
    bodyRu: 'От первого экрана до API, базы данных, авторизации и деплоя я собираю цельный продукт, а не отдельные куски.',
  },
  {
    accent: '#ff9d6c',
    titleEn: 'Business-first interfaces',
    titleRu: 'Интерфейсы под бизнес-задачу',
    bodyEn: 'I turn dense flows into clean screens that help users decide fast, trust the product and actually convert.',
    bodyRu: 'Превращаю сложные сценарии в чистые экраны, где пользователю легко принять решение, доверять продукту и дойти до действия.',
  },
  {
    accent: '#8cf5bc',
    titleEn: 'Backend and automation',
    titleRu: 'Бэкенд и автоматизация',
    bodyEn: 'I design APIs, admin flows, integrations and automations that remove manual work and keep the product scalable.',
    bodyRu: 'Проектирую API, админские потоки, интеграции и автоматизации, которые убирают ручную работу и дают запас на рост.',
  },
  {
    accent: '#ffcf5c',
    titleEn: 'WordPress, Tilda and custom CMS',
    titleRu: 'WordPress, Tilda и кастомные CMS',
    bodyEn: 'I can ship fast on WordPress or Tilda when the business needs speed, and build a custom CMS from scratch when the client needs full control.',
    bodyRu: 'Могу быстро собрать решение на WordPress или Tilda, когда бизнесу важна скорость, и сделать кастомную CMS с нуля, когда клиенту нужен полный контроль.',
  },
];

export const featuredProjects = [
  {
    accent: '#63e6ff',
    image: flipkartVisual,
    titleEn: 'Flipkart marketplace experience',
    titleRu: 'Marketplace experience для Flipkart',
    summaryEn: 'Work around dense marketplace surfaces where navigation, offers and price signals need to stay scannable even under heavy merchandising load.',
    summaryRu: 'Работа с плотными marketplace-поверхностями, где навигация, офферы и ценовые сигналы должны оставаться быстро считываемыми даже при высокой промо-нагрузке.',
    outcomeEn: 'Turns a crowded merchandising layer into a cleaner purchase path with stronger hierarchy and faster product discovery.',
    outcomeRu: 'Превращает перегруженный слой мерчендайзинга в более чистый путь к покупке с сильной иерархией и быстрым поиском товара.',
    stack: ['React', 'Marketplace UX', 'Design Systems', 'Performance'],
    detailsEn: [
      'High-density category and product surfaces without losing visual hierarchy',
      'Promotion blocks, offer cards and pricing cues tuned for faster comparison',
      'Reusable UI patterns that scale across desktop and mobile commerce flows',
    ],
    detailsRu: [
      'Плотные категории и товарные поверхности без потери визуальной иерархии',
      'Промо-блоки, офферы и ценовые сигналы, настроенные под быстрое сравнение',
      'Переиспользуемые UI-паттерны, масштабируемые на desktop и mobile commerce-сценарии',
    ],
  },
  {
    accent: '#ff9d6c',
    image: airAstanaVisual,
    titleEn: 'Air Astana booking and content flow',
    titleRu: 'Booking и контентные сценарии Air Astana',
    summaryEn: 'Airline-facing product work where booking UX, route content and trust-building interface details have to stay premium and operationally clear.',
    summaryRu: 'Продуктовая работа для авиасервиса, где booking UX, маршрутный контент и доверительные детали интерфейса должны оставаться премиальными и операционно понятными.',
    outcomeEn: 'Creates a calmer search and decision flow for flights, loyalty content and route information across responsive layouts.',
    outcomeRu: 'Формирует более спокойный сценарий поиска и принятия решения по перелетам, loyalty-контенту и маршрутной информации в адаптивных интерфейсах.',
    stack: ['React', 'Booking UX', 'Responsive UI', 'Product Architecture'],
    detailsEn: [
      'Search-heavy interface where clarity directly affects conversion and trust',
      'Information hierarchy for route, fare and loyalty content across multiple surfaces',
      'Reusable booking-oriented blocks prepared for multilingual and responsive use',
    ],
    detailsRu: [
      'Интерфейс с большим весом поиска, где ясность напрямую влияет на конверсию и доверие',
      'Иерархия информации для маршрутов, тарифов и loyalty-контента на разных поверхностях',
      'Переиспользуемые booking-блоки с запасом под мультиязычность и адаптив',
    ],
  },
  {
    accent: '#8cf5bc',
    image: cleverMarketVisual,
    titleEn: 'Clever Market commerce platform',
    titleRu: 'Commerce-платформа Clever Market',
    summaryEn: 'Local e-commerce work focused on promo-led grocery discovery, cleaner category browsing and admin flows that do not slow the business down.',
    summaryRu: 'Локальный e-commerce кейс с фокусом на промо-ориентированное открытие ассортимента, более чистый просмотр категорий и админские потоки без торможения бизнеса.',
    outcomeEn: 'Combines fast storefront decisions with practical backend control through WordPress, CMS customization and conversion-focused product structure.',
    outcomeRu: 'Соединяет быстрые решения на storefront со здравым backend-контролем через WordPress, кастомизацию CMS и продуктовую структуру, заточенную под конверсию.',
    stack: ['WordPress', 'Custom CMS', 'E-commerce UX', 'Conversion'],
    detailsEn: [
      'Promo-first landing zones and category entry points for faster selection',
      'Catalog and checkout structure tuned for practical local commerce behavior',
      'CMS-side flexibility for content, merchandising and operational updates',
    ],
    detailsRu: [
      'Промо-ориентированные входы в каталог и категории для более быстрого выбора',
      'Структура каталога и checkout, подстроенная под реальный local commerce-сценарий',
      'Гибкость на стороне CMS для контента, мерчендайзинга и операционных обновлений',
    ],
  },
];

export const heroMetrics = [
  {
    valueEn: 'Full-stack',
    valueRu: 'Full-stack',
    labelEn: 'design to backend delivery',
    labelRu: 'доставка от дизайна до backend',
  },
  {
    valueEn: 'Fast',
    valueRu: 'Быстро',
    labelEn: 'clear iteration and execution',
    labelRu: 'понятная итерация и реализация',
  },
  {
    valueEn: 'Product',
    valueRu: 'Product',
    labelEn: 'focus on user and business goals',
    labelRu: 'фокус на пользователе и бизнес-цели',
  },
];

export const ListOfCards = featuredProjects.map((project) => ({
  title: project.titleEn,
  tags: project.stack,
  img: project.image,
}));

export const HomeCards = featuredProjects.map((project) => ({
  titleKey: project.titleEn,
  descKey: project.summaryEn,
  img: project.image,
  labelKey: project.titleEn,
}));
