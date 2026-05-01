import projectRail from './../assets/project1.png';
import codingVisual from './../assets/5070f9e7af565d1d16a3edfd7f53cd1e.jpg';
import codeTexture from './../assets/Technology.jpg';
import portrait from './../assets/IMAGE 2026-01-07 15:00:34.jpg';
import reactLogo from './../assets/React.svg';
import djangoLogo from './../assets/Django.svg';
import jsLogo from './../assets/JavaScript.svg';
import postgresLogo from './../assets/PostgreSQL.svg';
import pythonLogo from './../assets/Python.svg';
import nodeLogo from './../assets/Nodejs.svg';
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
];

export const featuredProjects = [
  {
    accent: '#63e6ff',
    image: projectRail,
    titleEn: 'Freight service platform',
    titleRu: 'Платформа грузовых сервисов',
    summaryEn: 'A corporate platform concept with complex navigation, service cataloging and a responsive multi-device presentation.',
    summaryRu: 'Концепт корпоративной платформы со сложной навигацией, каталогом сервисов и адаптивной подачей для разных устройств.',
    outcomeEn: 'Focuses the user on service discovery and core conversion actions instead of visual noise.',
    outcomeRu: 'Фокусирует пользователя на поиске сервиса и ключевых целевых действиях вместо визуального шума.',
    stack: ['React', 'SCSS', 'Adaptive UI', 'Product UX'],
    detailsEn: [
      'Multi-level information architecture for large service catalogs',
      'Clear CTA emphasis across desktop and mobile compositions',
      'Reusable sections prepared for future integrations',
    ],
    detailsRu: [
      'Многоуровневая архитектура для больших каталогов услуг',
      'Ясный акцент на CTA в desktop и mobile композициях',
      'Переиспользуемые секции с запасом под будущие интеграции',
    ],
  },
  {
    accent: '#ff9d6c',
    image: codingVisual,
    titleEn: 'E-commerce platform',
    titleRu: 'E-commerce платформа',
    summaryEn: 'A full-stack commerce product with product structure, backend logic and a cleaner buying path for end users.',
    summaryRu: 'Full-stack commerce продукт с продуманной структурой каталога, бэкенд-логикой и более чистым сценарием покупки.',
    outcomeEn: 'Built to present offers clearly, reduce friction in navigation and support growth with a stable backend.',
    outcomeRu: 'Сделан так, чтобы ясно показывать предложения, снижать трение в навигации и опираться на стабильный backend.',
    stack: ['React', 'Django', 'PostgreSQL', 'REST API'],
    detailsEn: [
      'Structured catalog and content presentation',
      'Reusable UI patterns for product and category pages',
      'Backend foundation for auth, data modeling and business flows',
    ],
    detailsRu: [
      'Структурированная подача каталога и контента',
      'Переиспользуемые UI-паттерны для товаров и категорий',
      'Бэкенд-основа под авторизацию, модели данных и бизнес-потоки',
    ],
  },
  {
    accent: '#8cf5bc',
    image: codeTexture,
    titleEn: 'API and backend systems',
    titleRu: 'API и backend-системы',
    summaryEn: 'Backend architecture for web and mobile products with a focus on maintainability, integrations and admin workflows.',
    summaryRu: 'Backend-архитектура для web и mobile-продуктов с упором на поддерживаемость, интеграции и админские сценарии.',
    outcomeEn: 'Keeps products reliable behind the interface and shortens the path from idea to working internal tooling.',
    outcomeRu: 'Делает продукт надежным за интерфейсом и сокращает путь от идеи до рабочего внутреннего инструмента.',
    stack: ['Python', 'Django REST', 'PostgreSQL', 'Automation'],
    detailsEn: [
      'REST APIs with room for future scaling',
      'Admin-oriented logic for content and business operations',
      'Automation mindset for repetitive flows and integrations',
    ],
    detailsRu: [
      'REST API с запасом под дальнейшее масштабирование',
      'Логика под админку, контент и бизнес-операции',
      'Подход к автоматизации повторяющихся процессов и интеграций',
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
