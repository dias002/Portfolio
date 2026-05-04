const VELOR_PRICING = require('./velorPricing.json');
const IT_SNG_PRICING = require('./itSngPricing.json');
const SALES_PLAYBOOK = require('./salesPlaybook.json');

const MODULE_SERVICE = {
  id: 'module-work',
  label: 'модульные доработки сайта по прайсу',
  min: 0,
  max: 0,
  timeline: 'по выбранным пунктам',
  includes: ['аудит задачи', 'подбор модулей', 'оценка сроков', 'приоритизация этапов'],
};

const SERVICES = [
  {
    id: 'wordpress-onepage-portfolio',
    label: 'одностраничное портфолио на WordPress',
    min: 50000,
    max: 120000,
    timeline: '2-4 рабочих дня',
    priority: 8,
    keywords: [
      'wordpress',
      'вордпресс',
      'вп',
      'портфолио',
      'portfolio',
      'одностранич',
      '1 странич',
      '1 страниц',
      'одна страниц',
      'one page',
      'one-page',
      'one pager',
      'single page',
      'single-page',
      'brochure site',
      'info site',
      'one pager wp',
      'wp one pager',
      'personal site',
      'personal website',
      'визитка',
    ],
    includes: ['установка WordPress', 'сборка 1 страницы', 'адаптив', 'базовая форма заявки', 'базовая SEO-подготовка'],
  },
  {
    id: 'landing',
    label: 'лендинг или сайт услуг',
    min: 50000,
    max: 120000,
    timeline: '2-5 рабочих дней',
    priority: 4,
    keywords: [
      'лендинг',
      'landing',
      'landing page',
      'website',
      'site',
      'home page',
      'service page',
      'brochure site',
      'promo site',
      'sales page',
      'squeeze page',
      'lead page',
      'small biz site',
      'business site',
      'одностранич',
      'сайт услуг',
      'услуги',
      'визитка',
      'портфолио',
      'нужен сайт',
    ],
    includes: ['структура', 'адаптивная верстка', 'форма заявки', 'базовая SEO-подготовка'],
  },
  {
    id: 'simple-multipage',
    label: 'простой сайт 3-4 страницы по готовому дизайну',
    min: 90000,
    max: 180000,
    timeline: '4-7 рабочих дней',
    priority: 7,
    keywords: [
      'простой сайт',
      'дизайн есть',
      'готовый дизайн',
      '3-4 страниц',
      '3-4 страницы',
      '3-4 pages',
      '3 страницы',
      '3 pages',
      '4 страницы',
      '4 pages',
      'несколько страниц',
      'few pages',
      'simple website',
      'small website',
      'starter website',
      'basic website',
      'brochure website',
      'сайт простой',
    ],
    includes: ['верстка 3-4 страниц', 'адаптив', 'форма заявки', 'подключение домена', 'базовая SEO-подготовка'],
  },
  {
    id: 'wordpress-site',
    label: 'сайт на WordPress',
    min: 70000,
    max: 180000,
    timeline: '2-7 рабочих дней',
    priority: 5,
    keywords: ['wordpress', 'вордпресс', 'elementor', 'woocommerce', 'wp', 'cms', 'блог', 'blog', 'wp site', 'wordpress site', 'wp website', 'wp build'],
    includes: ['настройка CMS', 'сборка страниц', 'адаптив', 'формы', 'базовая SEO-подготовка'],
  },
  {
    id: 'tilda-site',
    label: 'сайт на Tilda',
    min: 35000,
    max: 150000,
    timeline: '1-6 рабочих дней',
    priority: 5,
    keywords: ['tilda', 'тильда', 'zero block', 'зеро блок', 'tilda site'],
    includes: ['сборка на Tilda', 'адаптив', 'формы', 'базовая SEO-подготовка'],
  },
  {
    id: 'business',
    label: 'корпоративный сайт',
    min: 280000,
    max: 750000,
    timeline: '10-22 рабочих дня',
    priority: 3,
    keywords: ['корпоратив', 'компания', 'страниц', 'бизнес сайт', 'сайт компании', 'разделы', 'business website', 'company website', 'corporate site'],
    includes: ['несколько страниц', 'админка или CMS', 'контактные формы', 'мультиязычность по необходимости'],
  },
  {
    id: 'ecommerce',
    label: 'интернет-магазин',
    min: 150000,
    max: 550000,
    timeline: '5-20 рабочих дней',
    priority: 10,
    keywords: [
      'магазин',
      'e-commerce',
      'ecommerce',
      'online store',
      'web shop',
      'webshop',
      'shop',
      'ecom',
      'ecomm',
      'ecom site',
      'shop site',
      'товар',
      'каталог',
      'корзина',
      'оплата',
      'checkout',
      'woocommerce',
      'маркетплейс',
      'marketplace',
      'multi vendor',
      'multi-vendor',
      'как kaspi',
      'как flipkart',
      'как amazon',
    ],
    includes: ['каталог', 'карточки товаров', 'корзина', 'заказы', 'админка'],
  },
  {
    id: 'node-postgres-backend',
    label: 'backend/API на Node.js с PostgreSQL',
    min: 90000,
    max: 240000,
    timeline: '3-10 рабочих дней',
    priority: 7,
    keywords: [
      'node.js',
      'node js',
      'node',
      'nestjs',
      'express',
      'postgresql',
      'postgre sql',
      'postgres',
      'api',
      'backend',
      'бэкенд',
      'сервер',
      'база данных',
      'database',
      'server side',
      'server-side',
      'database app',
      'server work',
      'api server',
      'rest api',
    ],
    includes: ['серверная логика', 'структура базы данных', 'API', 'валидация данных', 'подготовка к деплою'],
  },
  {
    id: 'custom-cms',
    label: 'кастомная CMS или web-сервис',
    min: 750000,
    max: 2600000,
    timeline: '4-10 недель',
    priority: 7,
    keywords: ['кастом', 'custom', 'cms', 'админ', 'crm', 'сервис', 'панель', 'dashboard', 'личный кабинет', 'роли', 'admin panel', 'user account', 'members area', 'portal', 'client portal', 'customer portal', 'member portal', 'internal tool'],
    includes: ['backend', 'база данных', 'админ-панель', 'роли', 'API'],
  },
  {
    id: 'mobile-delivery-app',
    label: 'мобильное приложение доставки еды',
    min: 4000000,
    max: 10000000,
    timeline: '4-10 месяцев',
    priority: 14,
    keywords: [
      'мобильное приложение',
      'мобильное app',
      'приложение',
      'приложение доставки',
      'доставка еды',
      'еда доставка',
      'курьер',
      'курьеры',
      'клиенты',
      'ios',
      'android',
      'app store',
      'google play',
      'карта',
      'геолокация',
      'отслеживание курьера',
      'движение курьера',
      'push',
      'пуш',
      'food delivery app',
      'delivery app',
      'courier app',
      'mobile app',
      'ios app',
      'android app',
      'real-time tracking',
      'live tracking',
      'push notifications',
    ],
    includes: [
      'мобильные приложения iOS/Android по готовому дизайну',
      'backend/API и база данных',
      'роли клиента и курьера',
      'админ-панель',
      'статусы заказов, карта, push-уведомления и интеграция оплаты',
    ],
  },
  {
    id: 'telegram-bot',
    label: 'Telegram-бот',
    min: 25000,
    max: 250000,
    timeline: '2-10 рабочих дней',
    priority: 12,
    keywords: [
      'telegram-бот',
      'телеграм бот',
      'telegram bot',
      'tg bot',
      'bot for leads',
      'lead bot',
      'order bot',
      'booking bot',
      'appointment bot',
      'tg automation',
      'telegram automation',
      'бот для заявок',
      'бот заявок',
      'простои бот',
      'бот меню',
      'кнопки',
      'заявки в telegram',
      'google sheets',
      'sheets',
      'aiogram',
    ],
    includes: ['сценарии и кнопки', 'прием заявок', 'уведомления админу', 'простая инструкция'],
  },
  {
    id: 'ai-assistant',
    label: 'AI-бот для сайта',
    min: 190000,
    max: 500000,
    timeline: '4-10 рабочих дней',
    priority: 11,
    keywords: [
      'бот',
      'ai',
      'artificial intelligence',
      'ии',
      'чат',
      'chatbot',
      'chat bot',
      'ассистент',
      'assistant',
      'openai',
      'gemini',
      'gpt',
      'llm',
      'цены',
      'quote bot',
      'sales bot',
      'support bot',
      'ai chat',
      'база знаний',
      'knowledge base',
      'расчет цен',
      'расчетом цен',
    ],
    includes: ['чат-виджет', 'серверный API', 'правила консультации', 'передача заявки'],
  },
  {
    id: 'developer-retainer',
    label: 'постоянная работа с разработчиком',
    min: 20000,
    max: 1600000,
    timeline: 'почасово или помесячно',
    priority: 9,
    keywords: [
      'нанять',
      'постоянную основу',
      'постоянно',
      'программист',
      'разработчик',
      'аутстаф',
      'full time',
      'part time',
      'retainer',
      'developer',
      'dev',
      'engineer',
      'contractor',
      'freelancer',
      'programmer',
      'hire dev',
      'hire developer',
      'need a dev',
      'need developer',
      'monthly',
      'ongoing',
      'long term',
      'long-term',
      'сопровождение',
      'поддержка сайта',
    ],
    includes: ['фиксированные часы', 'разработка задач', 'поддержка проекта', 'созвоны и планирование'],
  },
];

const ADDONS = [
  {
    id: 'custom-design',
    label: 'дизайн с нуля',
    min: 80000,
    max: 260000,
    keywords: ['дизайн с нуля', 'нет дизайна', 'без дизайна', 'с нуля', 'нужен макет', 'figma сделать', 'брендинг', 'custom design', 'need design', 'no design', 'from scratch', 'figma design', 'brand identity', 'make the design', 'need ui', 'ui from scratch'],
    skipIf: ['есть дизайн', 'дизайн готов', 'готовый дизайн', 'figma есть', 'макет есть', 'design ready', 'have design', 'figma ready', 'template is ready', 'got design', 'figma is ready', 'already have design'],
  },
  {
    id: 'content',
    label: 'подготовка текстов и контента',
    min: 50000,
    max: 180000,
    keywords: ['написать тексты', 'тексты с нуля', 'контент с нуля', 'подготовить контент', 'копирайтинг', 'copywriting', 'write copy', 'content writing', 'need content', 'need copy', 'make content'],
    skipIf: ['тексты есть', 'контент есть', 'контент готов', 'фото есть', 'content ready', 'copy ready', 'text ready', 'photos ready', 'content is ready', 'got the copy', 'got photos'],
  },
  {
    id: 'animations',
    label: 'сложные анимации',
    min: 70000,
    max: 240000,
    keywords: ['анимац', 'motion', 'gsap', 'parallax', 'параллакс', 'wow эффект'],
  },
  {
    id: 'multilingual',
    label: 'мультиязычность',
    min: 70000,
    max: 220000,
    keywords: ['англ', 'english', 'каз', 'қазақ', 'язык', 'мультияз', '3 языка', '2 языка', 'multilingual', 'multi language', 'multi-language', 'two languages', '3 languages', 'bilingual', 'two-language'],
    skipIf: ['без мультиязычности', 'мультиязычность не нужна', 'один язык', 'только русский', 'только один язык', 'no multilingual', 'one language', 'english only', 'russian only', 'single language'],
  },
  {
    id: 'payment',
    label: 'онлайн-оплата',
    min: 120000,
    max: 350000,
    keywords: ['оплата', 'kaspi', 'эквайринг', 'stripe', 'paypal', 'liqpay', 'payment', 'checkout', 'card payments', 'online payment', 'take cards', 'paid orders'],
    skipIf: ['без оплаты', 'оплата не нужна', 'без онлайн-оплаты', 'не нужна оплата', 'no payment', 'no checkout', 'payment not needed', 'no online payment'],
    includedIn: ['mobile-delivery-app'],
  },
  {
    id: 'integrations',
    label: 'интеграции с внешними сервисами',
    min: 120000,
    max: 500000,
    keywords: ['интеграц', 'crm', 'telegram', 'whatsapp', 'amo', 'bitrix', 'webhook', 'zapier', 'api сервиса', 'integration', 'integrations', 'webhooks', 'connect to crm', 'zap', 'connect apps', 'third-party api'],
    skipIf: ['без интеграций', 'интеграции не нужны', 'crm не нужна', 'без crm', 'no integrations', 'no crm'],
    includedIn: ['mobile-delivery-app'],
  },
  {
    id: 'auth-roles',
    label: 'авторизация и роли пользователей',
    min: 160000,
    max: 480000,
    keywords: ['авторизац', 'регистрац', 'логин', 'роли', 'личный кабинет', 'пользователи', 'jwt', 'oauth', 'auth', 'login', 'signup', 'sign up', 'roles', 'user roles', 'account', 'member login', 'client login'],
    includedIn: ['custom-cms', 'mobile-delivery-app'],
  },
  {
    id: 'frontend-admin',
    label: 'frontend-интерфейс или админ-панель',
    min: 220000,
    max: 800000,
    keywords: ['frontend', 'фронт', 'интерфейс', 'админка', 'админ-панель', 'dashboard', 'личный кабинет', 'admin panel', 'control panel', 'user dashboard'],
    includedIn: ['custom-cms', 'mobile-delivery-app'],
  },
  {
    id: 'node-backend',
    label: 'Node.js backend',
    min: 250000,
    max: 850000,
    keywords: ['node.js', 'node js', 'nestjs', 'express', 'backend', 'бэкенд'],
    includedIn: ['node-postgres-backend', 'custom-cms', 'mobile-delivery-app'],
  },
  {
    id: 'postgres',
    label: 'PostgreSQL база данных',
    min: 180000,
    max: 600000,
    keywords: ['postgresql', 'postgre sql', 'postgres', 'база данных', 'database', 'sql', 'db', 'data model'],
    includedIn: ['node-postgres-backend', 'custom-cms', 'mobile-delivery-app'],
  },
  {
    id: 'server-setup',
    label: 'настройка сервера и деплой',
    min: 40000,
    max: 160000,
    keywords: ['сервер', 'vps', 'nginx', 'pm2', 'docker', 'деплой', 'deploy', 'deployment', 'hosting', 'хостинг', 'домен', 'domain', 'ssl'],
    includedIn: ['mobile-delivery-app'],
  },
  {
    id: 'analytics-seo',
    label: 'расширенная SEO/аналитика',
    min: 50000,
    max: 180000,
    keywords: ['seo', 'сео', 'analytics', 'метрика', 'google analytics', 'search console', 'tracking', 'ga4'],
  },
];

const BUDGET_TIERS = [
  {
    id: 'micro-start',
    min: 0,
    max: 50000,
    label: 'микро-бюджет до 50 000 ₸',
    bestFit: 'стартовый этап, правки или подготовка',
    canOffer: [
      'проверить дизайн и собрать короткое ТЗ',
      'подготовить структуру 3-4 страниц и список контента',
      'сделать одну простую страницу или черновой каркас без сложного адаптива',
      'настроить базовый WordPress/Tilda, домен, форму или небольшие правки',
    ],
    notIncluded: [
      'полноценная сборка 3-4 страниц под ключ',
      'кастомные анимации',
      'backend, оплата, личный кабинет и интеграции',
      'подготовка текстов и сложная SEO-настройка',
    ],
    recommendation: 'разбить работу на этапы: за этот бюджет сделать старт/каркас, затем довести сайт до полноценного запуска',
  },
  {
    id: 'lean-template',
    min: 50000,
    max: 100000,
    label: 'эконом-старт 50 000-100 000 ₸',
    bestFit: 'одна простая страница или очень легкий сайт по готовому дизайну',
    canOffer: [
      'собрать 1 страницу на Tilda/WordPress по готовому шаблону',
      'перенести готовые тексты и фото',
      'подключить простую форму заявки',
      'сделать базовый адаптив без сложных анимаций',
    ],
    notIncluded: ['3-4 страницы под ключ с глубокой версткой', 'индивидуальный дизайн', 'сложные интеграции'],
    recommendation: 'оставить только самые важные блоки и запускать минимальную версию',
  },
  {
    id: 'simple-launch',
    min: 100000,
    max: 180000,
    label: 'простой запуск 100 000-180 000 ₸',
    bestFit: 'одностраничный сайт или 2-3 простые статичные страницы при готовом дизайне',
    canOffer: [
      'собрать сайт на WordPress/Tilda',
      'адаптировать готовый дизайн',
      'подключить форму, домен и базовую SEO-подготовку',
      'подготовить запуск без backend и сложной логики',
    ],
    notIncluded: ['магазин', 'личный кабинет', 'кастомная CMS', 'много интеграций'],
    recommendation: 'делать простой релиз без лишних модулей, а расширение вынести во второй этап',
  },
  {
    id: 'standard-site',
    min: 180000,
    max: 350000,
    label: 'стандартный сайт 180 000-350 000 ₸',
    bestFit: 'лендинг или 3-4 страницы по готовому дизайну',
    canOffer: [
      'собрать 3-4 страницы',
      'сделать нормальный адаптив',
      'подключить формы, аналитику, домен и базовую SEO',
      'добавить умеренные анимации',
    ],
    notIncluded: ['сложный backend', 'личный кабинет', 'интернет-магазин под ключ'],
    recommendation: 'это оптимальная зона для простого сайта с готовым дизайном',
  },
  {
    id: 'advanced',
    min: 350000,
    max: 800000,
    label: 'расширенный проект 350 000-800 000 ₸',
    bestFit: 'корпоративный сайт, CMS, интеграции или небольшой каталог',
    canOffer: ['несколько разделов', 'CMS', 'интеграции', 'расширенная SEO/аналитика', 'больше UX-проработки'],
    notIncluded: ['большой магазин или сложная кастомная платформа без отдельного бюджета'],
    recommendation: 'можно планировать уже полноценную реализацию с запасом на качество',
  },
  {
    id: 'product',
    min: 800000,
    max: 999999999,
    label: 'продуктовая разработка от 800 000 ₸',
    bestFit: 'backend, PostgreSQL, личные кабинеты, кастомная CMS, AI-боты, магазины',
    canOffer: ['архитектуру', 'frontend/backend', 'базу данных', 'роли', 'админку', 'интеграции и деплой'],
    notIncluded: ['финальная цена без ТЗ'],
    recommendation: 'нужно собрать ТЗ и оценивать модулями',
  },
];

const HIRING_OPTIONS = [
  {
    label: 'почасовая работа',
    min: 20000,
    max: 20000,
    timeline: 'минимум 2 часа',
    includes: ['новые функции', 'верстка', 'WordPress/Tilda', 'API', 'автоматизация'],
  },
  {
    label: 'частичная занятость',
    min: 400000,
    max: 800000,
    timeline: '40-80 часов в месяц',
    includes: ['поддержка сайта', 'небольшие фичи', 'правки', 'интеграции'],
  },
  {
    label: 'выделенный full-time разработчик',
    min: 1600000,
    max: 1600000,
    timeline: '160 часов в месяц',
    includes: ['полное вовлечение', 'разработка продукта', 'техническая поддержка команды'],
  },
];

const EN_BUDGET_TIER_COPY = {
  micro: {
    bestFit: 'a micro-start: brief, structure, one simple draft page or setup task',
    canOffer: [
      'check the design and prepare a short scope',
      'prepare the structure and content checklist',
      'make one simple draft page or basic setup',
      'connect a simple form, domain or small WordPress/Tilda setup',
    ],
    notIncluded: [
      'full 3-4 page build',
      'custom animations',
      'backend, payment, user accounts or integrations',
      'copywriting and deep SEO setup',
    ],
    recommendation: 'treat it as the first stage, then finish the full launch with a separate budget',
  },
  'lean-template': {
    bestFit: 'one simple page or a very light website with ready design',
    canOffer: ['build 1 WordPress/Tilda page', 'place ready text and photos', 'connect a simple lead form', 'make basic responsive layout'],
    notIncluded: ['full 3-4 page build', 'custom design', 'complex integrations'],
    recommendation: 'keep only the key blocks and launch the smallest useful version',
  },
  'simple-launch': {
    bestFit: 'one-page site or 2-3 simple static pages with ready design',
    canOffer: ['build the site on WordPress/Tilda', 'adapt the ready design', 'connect form, domain and basic SEO', 'launch without backend or complex logic'],
    notIncluded: ['online store', 'user account', 'custom CMS', 'many integrations'],
    recommendation: 'launch a simple release first and move extra modules to phase two',
  },
  'standard-site': {
    bestFit: 'landing page or 3-4 page website with ready design',
    canOffer: ['build 3-4 pages', 'make responsive layout', 'connect forms, analytics, domain and basic SEO', 'add moderate animations'],
    notIncluded: ['complex backend', 'user account', 'full online store'],
    recommendation: 'this is a healthy budget zone for a simple ready-design website',
  },
  advanced: {
    bestFit: 'business website, CMS, integrations or a small catalog',
    canOffer: ['multiple sections', 'CMS setup', 'integrations', 'advanced SEO/analytics', 'more UX polish'],
    notIncluded: ['large marketplace or complex custom platform without a separate budget'],
    recommendation: 'plan a proper implementation with quality reserve',
  },
  product: {
    bestFit: 'product-style development: backend, CMS, AI assistant, store or integrations',
    canOffer: ['architecture', 'frontend/backend', 'database', 'roles', 'admin panel', 'integrations and deployment'],
    notIncluded: ['final fixed price without a clear scope'],
    recommendation: 'prepare a scope and estimate by modules',
  },
};

const PRICE_LIST = {
  currency: 'KZT',
  services: SERVICES,
  addons: ADDONS,
  budgetTiers: BUDGET_TIERS,
  hiringOptions: HIRING_OPTIONS,
  salesPlaybook: {
    source: SALES_PLAYBOOK.source,
    updatedAt: SALES_PLAYBOOK.updatedAt,
  },
  itSngCatalog: {
    source: IT_SNG_PRICING.source,
    displayCurrency: IT_SNG_PRICING.sourceCurrency,
    sections: IT_SNG_PRICING.sections,
    itemsCount: IT_SNG_PRICING.items.length,
  },
  modularPricing: {
    source: VELOR_PRICING.source,
    displayCurrency: VELOR_PRICING.displayCurrency,
    rubToKztRate: VELOR_PRICING.rubToKztRate,
    blocks: VELOR_PRICING.blocks.map((block) => ({
      id: block.id,
      title: block.title,
      timeline: block.timeline,
      itemCount: block.items.length,
    })),
    recommendedRoadmap: VELOR_PRICING.recommendedRoadmap,
  },
  rules: [
    'Если клиент назвал бюджет, сначала сравни его с прайс-листом и предложи лучший вариант в рамках суммы.',
    'Если бюджет ниже реальной стоимости, не отказывай сухо: предложи урезанный MVP, первый этап или альтернативу.',
    'Не обещай полноценный сайт, backend, магазин или интеграции за микро-бюджет.',
    'Всегда отделяй "что можно сделать за этот бюджет" от "что лучше вынести во второй этап".',
  ],
};

const CONVERSATION_EXAMPLES = [
  {
    user: 'У меня сайт тормозит, что можно сделать?',
    assistant:
      'Сначала я бы не лез в дизайн или новые функции. По таким симптомам логичнее начать с производительности: CDN, кэширование, lazy loading и оптимизация веса CSS/JS. Это даст быстрый эффект без переделки всего сайта. По модульному прайсу такой старт обычно собирается из 3-5 небольших задач, а точный набор лучше выбрать после короткого аудита.',
  },
  {
    user: 'Хочу маркетплейс как Kaspi за 100 тысяч',
    assistant:
      'За 100 000 ₸ полноценный маркетплейс с оплатой, доставкой, кабинетами и админкой я бы не обещал. Реалистичный вариант - сделать витрину или preorder-страницу, чтобы проверить спрос и собрать заявки. Каталог, корзину, оплату и кабинеты лучше вынести во второй этап, иначе получится слабый продукт, который будет сложно поддерживать.',
  },
  {
    user: 'Мне нужен поиск по товарам, чтобы понимал ошибки',
    assistant:
      'Это уже не обычная строка поиска, а отдельный поисковый контур. Я бы рассматривал Meilisearch, индексацию товаров, fuzzy-поиск и отдельный API для выдачи. Так поиск будет понимать опечатки, транслит и похожие формулировки, а не просто искать точное совпадение по названию.',
  },
];

const EN_SERVICE_LABELS = {
  'wordpress-onepage-portfolio': 'one-page WordPress portfolio site',
  landing: 'landing page or service website',
  'simple-multipage': 'simple 3-4 page website with ready design',
  'wordpress-site': 'WordPress website',
  'tilda-site': 'Tilda website',
  business: 'business website',
  ecommerce: 'online store',
  'node-postgres-backend': 'Node.js backend/API with PostgreSQL',
  'custom-cms': 'custom CMS or web app',
  'mobile-delivery-app': 'food delivery mobile app',
  'telegram-bot': 'Telegram bot',
  'ai-assistant': 'AI assistant for a website',
  'developer-retainer': 'monthly developer support',
  'module-work': 'modular website improvements from the price list',
};

const QUESTION_SETS = {
  generic: [
    'Какой тип проекта нужен: лендинг, WordPress/Tilda, интернет-магазин, backend/API, CMS или AI-бот?',
    'Сколько страниц, товаров, ролей пользователей или основных экранов планируется на старте?',
    'Дизайн и контент уже готовы или их нужно делать с нуля?',
    'Нужны ли формы, оплата, мультиязычность, интеграции, личный кабинет или настройка сервера?',
  ],
  simpleSite: [
    'Дизайн будет по готовому шаблону, по существующему Figma-макету или его нужно сделать с нуля?',
    'Какие блоки нужны на странице: hero, обо мне, проекты, услуги, отзывы, контакты, форма заявки?',
    'Тексты, фото и материалы уже готовы или их нужно подготовить?',
    'Нужны ли мультиязычность, SEO, подключение домена/хостинга, аналитика или Telegram/WhatsApp-заявки?',
  ],
  ecommerce: [
    'Сколько товаров будет на старте и кто будет загружать каталог?',
    'Нужны ли корзина, онлайн-оплата, доставка, личный кабинет и статусы заказов?',
    'На чем делать магазин: WordPress/WooCommerce, готовая CMS или кастомная разработка?',
    'Какие интеграции нужны: Kaspi, CRM, склад, Telegram/WhatsApp, 1C или email-уведомления?',
  ],
  backend: [
    'Это только backend/API или нужен еще frontend и админ-панель?',
    'Какие сущности будут в базе: пользователи, заявки, товары, заказы, файлы, платежи?',
    'Нужны ли авторизация, роли, личный кабинет, логирование и модерация?',
    'Где будет запускаться проект: ваш VPS/сервер, Vercel, Render, Beget, Docker или другой хостинг?',
  ],
  mobileApp: [
    'Какие роли нужны в первой версии: клиенты, курьеры, рестораны/партнеры, администраторы?',
    'Нужны ли онлайн-оплата, карта с движением курьера, push-уведомления и статусы заказа?',
    'Backend/API и админ-панель уже есть или их тоже нужно разрабатывать?',
    'Дизайн готов полностью по всем экранам или нужна доработка UI/UX?',
  ],
  aiAssistant: [
    'Бот должен только консультировать или еще принимать заявки, считать стоимость и отправлять лиды в Telegram/CRM?',
    'Откуда брать знания: фиксированный прайс, документы, база данных, сайт или админка?',
    'Какой AI-провайдер планируется: Gemini, OpenAI, локальная модель или уже есть свой ключ?',
    'Нужны ли история диалогов, аналитика, антиспам, ограничения по темам и панель настройки ответов?',
  ],
  telegramBot: [
    'Что должен делать бот: меню, заявки, запись, уведомления, оплата или админ-панель?',
    'Куда отправлять заявки: Telegram-админу, Google Sheets, CRM или базу данных?',
    'Нужны ли база данных, роли администратора, рассылки или интеграции?',
    'Есть ли готовый сценарий кнопок и текстов или его нужно собрать с нуля?',
  ],
  hiring: [
    'Какой формат нужен: part-time, проектный retainer или full-time разработчик?',
    'Какой стек и задачи: frontend, backend, WordPress, Node.js, PostgreSQL, интеграции?',
    'Сколько часов в месяц или какая загрузка ожидается?',
    'Нужен один разработчик или команда с менеджментом и дизайном?',
  ],
};

const QUESTION_SETS_EN = {
  generic: [
    'What do you need: landing page, WordPress/Tilda website, online store, backend/API, CMS or AI bot?',
    'How many pages, products, user roles or main screens are planned for the first version?',
    'Are design and content ready, or should they be prepared from scratch?',
    'Do you need forms, payments, multilingual support, integrations, user accounts or server setup?',
  ],
  simpleSite: [
    'Will the design be based on a template, an existing Figma file, or should it be created from scratch?',
    'Which blocks are needed: hero, about, projects, services, reviews, contacts, lead form?',
    'Are texts, photos and materials ready?',
    'Do you need SEO, domain/hosting setup, analytics or Telegram/WhatsApp leads?',
  ],
  ecommerce: [
    'How many products should be added at launch?',
    'Do you need cart, online payment, delivery, user account and order statuses?',
    'Should it be WordPress/WooCommerce, a ready CMS or custom development?',
    'Which integrations are needed: CRM, warehouse, Telegram/WhatsApp, email or payment provider?',
  ],
  backend: [
    'Is it backend/API only, or do you also need frontend and an admin panel?',
    'Which data entities are needed: users, leads, products, orders, files, payments?',
    'Do you need authentication, roles, user accounts, logging or moderation?',
    'Where should it be deployed: VPS/server, Vercel, Render, Docker or another hosting?',
  ],
  mobileApp: [
    'Which roles are needed in the first version: customers, couriers, restaurants/partners, admins?',
    'Do you need online payment, live courier map, push notifications and order statuses?',
    'Do backend/API and admin panel already exist, or should they be developed too?',
    'Is design fully ready for all screens, or is UI/UX work still needed?',
  ],
  aiAssistant: [
    'Should the bot only consult users, or also collect leads, calculate prices and send them to Telegram/CRM?',
    'Where should knowledge come from: fixed price list, documents, database, website or admin panel?',
    'Which AI provider do you plan to use: Gemini, OpenAI, local model, or do you already have a key?',
    'Do you need chat history, analytics, anti-spam, topic limits or an admin panel for answers?',
  ],
  telegramBot: [
    'What should the bot do: menu, leads, booking, notifications, payment or admin panel?',
    'Where should leads go: Telegram admin, Google Sheets, CRM or database?',
    'Do you need a database, admin roles, broadcasts or integrations?',
    'Do you already have button flow and texts, or should they be prepared from scratch?',
  ],
  hiring: [
    'Which format do you need: part-time, project retainer or full-time developer?',
    'Which stack and tasks: frontend, backend, WordPress, Node.js, PostgreSQL, integrations?',
    'How many hours per month or what workload do you expect?',
    'Do you need one developer or a team with design/project management?',
  ],
};

function normalizeText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/ё/g, 'е');
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .slice(-12)
    .map((message) => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: String(message.content || '').slice(0, 1600),
    }))
    .filter((message) => message.content.trim());
}

const FX_RATES = {
  RUB_PER_KZT: Number(process.env.RUB_PER_KZT || 0.19),
  USD_PER_KZT: Number(process.env.USD_PER_KZT || 0.002),
};

function getOutputCurrency(language) {
  if (language === 'en') {
    return {
      code: 'USD',
      symbol: '$',
      locale: 'en-US',
      perKzt: FX_RATES.USD_PER_KZT,
    };
  }

  return {
    code: 'RUB',
    symbol: '₽',
    locale: 'ru-RU',
    perKzt: FX_RATES.RUB_PER_KZT,
  };
}

function formatPrice(valueKzt, language = 'ru') {
  const amount = Number(valueKzt);
  const { symbol, locale, perKzt } = getOutputCurrency(language);
  const safePerKzt = Number.isFinite(perKzt) && perKzt > 0 ? perKzt : language === 'en' ? 0.002 : 0.19;

  if (!Number.isFinite(amount) || amount <= 0) {
    return `0 ${symbol}`;
  }

  const converted = Math.round(amount * safePerKzt);
  return `${new Intl.NumberFormat(locale).format(converted)} ${symbol}`;
}

function formatPriceRange(minKzt, maxKzt, language = 'ru') {
  const min = Number(minKzt);
  const max = Number(maxKzt);

  if (!Number.isFinite(min) && !Number.isFinite(max)) {
    return formatPrice(0, language);
  }

  if (!Number.isFinite(max) || min === max) {
    return formatPrice(Number.isFinite(min) ? min : max, language);
  }

  return `${formatPrice(min, language)} - ${formatPrice(max, language)}`;
}

function formatTimeline(timeline, language = 'ru') {
  const value = String(timeline || '');

  if (language !== 'en') {
    return value;
  }

  return value
    .replace(/рабочих\s+д(ня|ней)/g, 'business days')
    .replace(/рабочий\s+день/g, 'business day')
    .replace(/д(ня|ней)/g, 'days')
    .replace(/недел(я|и|ь)/g, 'weeks')
    .replace(/полная занятость в месяц/g, 'full-time monthly')
    .replace(/месяц(а|ев)?/g, 'months')
    .replace(/помесячно/g, 'monthly')
    .replace(/часов\s+в\s+месяц/g, 'hours/month')
    .replace(/по выбранным пунктам/g, 'by selected items');
}

function getVelorItems() {
  return VELOR_PRICING.blocks.flatMap((block) =>
    block.items.map((item) => ({
      ...item,
      blockTitle: block.title,
      blockTimeline: block.timeline,
    }))
  );
}

const VELOR_ITEMS = getVelorItems();

function getItsngItems() {
  return (IT_SNG_PRICING.items || []).map((item) => ({
    ...item,
    catalogTitle: item.title,
    catalogSection: item.section,
  }));
}

const ITSNG_ITEMS = getItsngItems();

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function includesKeyword(text, keyword) {
  const normalizedText = normalizeText(text);
  const normalizedKeyword = normalizeText(keyword).trim();

  if (!normalizedKeyword) {
    return false;
  }

  if (/^[a-zа-я0-9]+$/i.test(normalizedKeyword) && normalizedKeyword.length <= 3) {
    return new RegExp(`(^|[^a-zа-я0-9])${escapeRegExp(normalizedKeyword)}($|[^a-zа-я0-9])`, 'i').test(normalizedText);
  }

  return normalizedText.includes(normalizedKeyword);
}

function hasAny(text, keywords = []) {
  return keywords.some((keyword) => includesKeyword(text, keyword));
}

function getSearchTokens(text) {
  return unique(
    normalizeText(text)
      .replace(/[^a-zа-я0-9+./-]+/gi, ' ')
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 3)
  );
}

function getVelorBlockBoost(text, item) {
  const normalized = normalizeText(text);
  const block = normalizeText(item.blockTitle);
  let boost = 0;

  if (/скорост|ускор|быстр|производитель|кэш|cache|redis|opcache|cloudflare|cdn|lazy|минификац|шрифт|backup|бэкап|uptime|404|500|speed|slow|performance/.test(normalized) && block.includes('производительность')) boost += 10;
  if (/seo|сео|sitemap|robots|canonical|json-ld|чпу|редирект|404|мета|title|description|перелинков/.test(normalized) && block.includes('seo')) boost += 5;
  if (/поиск|meili|опечат|транслит|синоним|артикул|штрихкод|autocomplete|фото|голос/.test(normalized) && block.includes('поиск')) boost += 5;
  if (/каталог|категор|товар|карточк|популярн|новинк|просмотр|аналог|страна происх/.test(normalized) && block.includes('каталог')) boost += 5;
  if (/фильтр|filter|ajax|range|slider|drawer|пагинац|сброс/.test(normalized) && block.includes('фильтр')) boost += 5;
  if (/дизайн-систем|дизайн главн|дизайн каталог|дизайн карточ|ui|ux|шапк|футер|checkout|кабинет|корзин/.test(normalized) && block.includes('дизайн')) boost += 5;
  if (/верстк|адаптив|frontend|фронт|кроссбраузер|мобильн меню|бургер/.test(normalized) && block.includes('верстка')) boost += 5;
  if (/crm|email|рассыл|wishlist|избран|сравнен|лояльност|отзыв|рейтинг|ожидания/.test(normalized) && block.includes('crm')) boost += 5;
  if (/главн|город|cookie|баннер|реферал|simaland|цвет|размер/.test(normalized) && block.includes('главная')) boost += 5;
  if (/excel|pdf|word|кп|юрлиц|валют|конкурент|безопасност|2fa|rate/.test(normalized) && block.includes('бизнес')) boost += 5;
  if (/мобильн|приложен|app store|google play|push|dark|темн|robokassa/.test(normalized) && block.includes('мобильное')) boost += 5;
  if (/audit|аудит|checkup|review/.test(normalized) && /speed|slow|performance|seo|technical|скорост|производитель/.test(normalized)) boost += 4;

  return boost;
}

function getVelorDirectBoost(text, item) {
  const normalized = normalizeText(text);
  const task = normalizeText(item.task);
  let boost = 0;

  const pairs = [
    [/cloudflare|cdn/, /cloudflare|cdn/],
    [/redis|opcache|кэш|cache/, /redis|opcache|кэш/],
    [/lazy|loading|ленив/, /lazy loading/],
    [/минификац|css|js|html|tree/, /минификац|tree-shaking/],
    [/шрифт/, /шрифт/],
    [/индекс|индексы бд/, /индексы бд/],
    [/бэкап|backup/, /автобэкап/],
    [/uptime|логирован|404|500|telegram-алерт/, /uptimerobot|404|500|telegram/],
    [/sitemap/, /sitemap/],
    [/robots/, /robots/],
    [/canonical/, /canonical/],
    [/json-ld|schema|product|breadcrumb|organization/, /json-ld|product|breadcrumblist|organization/],
    [/чпу|алиас|301|редирект/, /чпу|301|редирект/],
    [/опечат|транслит|синоним|fuzzy/, /fuzzy|опечат|транслит|синоним/],
    [/артикул|штрихкод|атрибут/, /артикул|штрихкод|атрибут/],
    [/autocomplete|подсказ/, /autocomplete|подсказ/],
    [/аналитик.*запрос|что ищут/, /аналитика запрос/],
    [/поиск.*фото|фото.*поиск|камер/, /поиск по фото|камер/],
    [/голосов.*поиск|голос/, /голосовой поиск/],
    [/фасет|фильтр.*выдач/, /фасет/],
    [/ранжирован/, /ранжирован/],
    [/нулев.*результ|нет результатов/, /нулевом результате/],
    [/ajax.*фильтр|фильтр.*ajax/, /ajax-эндпоинт фильтрации/],
    [/url.*фильтр|фильтр.*url/, /синхронизация фильтров с url/],
    [/range|slider|цена/, /range slider/],
    [/drawer|мобильн.*фильтр/, /мобильный drawer/],
    [/wishlist|избран/, /wishlist|избран/],
    [/сравнен/, /сравнение/],
    [/брошен.*корзин/, /брошенная корзина/],
    [/лояльност|бонус/, /программа лояльности/],
    [/отзыв|рейтинг/, /отзывы|рейтинг/],
    [/excel/, /excel/],
    [/pdf|word|кп|коммерческ/, /pdf|word|кп/],
    [/юрлиц|юрлицо|реквизит/, /юрлиц/],
    [/мультивалют|валют/, /мультивалюта/],
    [/безопасност|https|rate|2fa/, /безопасность|https|2fa|rate/],
    [/push/, /push/],
    [/app store|google play|публикац/, /app store|google play|публикац/],
    [/robokassa|оплата/, /robokassa|оплата/],
  ];

  pairs.forEach(([needle, target]) => {
    if (needle.test(normalized) && target.test(task)) {
      boost += 14;
    }
  });

  return boost;
}

function scoreVelorItem(text, item) {
  const normalized = normalizeText(text);
  const haystack = normalizeText(`${item.blockTitle} ${item.task} ${item.ownerExplanation} ${item.scope}`);
  const tokens = getSearchTokens(normalized);
  let score = getVelorBlockBoost(normalized, item) + getVelorDirectBoost(normalized, item);

  if (haystack.includes(normalized) || normalized.includes(normalizeText(item.task))) {
    score += 20;
  }

  tokens.forEach((token) => {
    if (haystack.includes(token)) {
      score += token.length > 5 ? 3 : 1;
    }
  });

  return score;
}

function scoreItsngItem(text, item) {
  const normalized = normalizeText(text);
  const haystack = normalizeText(`${item.catalogTitle} ${item.stack} ${item.catalogSection}`);
  const tokens = getSearchTokens(normalized);
  let score = 0;

  tokens.forEach((token) => {
    if (haystack.includes(token)) {
      score += token.length >= 5 ? 3 : 2;
    }
  });

  if (normalized.includes(normalizeText(item.catalogTitle))) {
    score += 10;
  }

  if (haystack.includes(normalized)) {
    score += 18;
  }

  if (/wordpress/.test(normalized) && /wordpress/.test(haystack)) {
    score += 5;
  }

  if (/tilda/.test(normalized) && /tilda/.test(haystack)) {
    score += 5;
  }

  if (/телеграм|telegram/.test(normalized) && /telegram/.test(haystack)) {
    score += 6;
  }

  if (/бот|ai/.test(normalized) && /бот/.test(haystack)) {
    score += 4;
  }

  if (item.keywords && item.keywords.length) {
    item.keywords.forEach((keyword) => {
      const normalizedKeyword = normalizeText(keyword);
      if (!normalizedKeyword || normalizedKeyword.length < 3) {
        return;
      }

    if (includesKeyword(normalized, normalizedKeyword)) {
      score += 2;
    }
    });
  }

  return score;
}

function getVelorAllowedBlocks(text) {
  const normalized = normalizeText(text);
  const blocks = [];

  if (/скорост|ускор|производитель|cloudflare|redis|opcache|cdn|lazy|минификац|кэш|cache|шрифт|бэкап|backup|uptime/.test(normalized)) blocks.push('Производительность и инфраструктура');
  if (/seo|сео|sitemap|robots|canonical|json-ld|чпу|редирект|404|301|302|мета|title|description|перелинков/.test(normalized)) blocks.push('Техническое SEO');
  if (/поиск|meili|autocomplete|опечат|транслит|синоним|артикул|штрихкод|голос|по фото|камер/.test(normalized)) blocks.push('Поиск');
  if (/каталог|категор|карточк товар|рекоменд|часто покуп|просмотр|аналог|страна происх/.test(normalized)) blocks.push('Каталог');
  if (/фильтр|filter|ajax|range slider|drawer|пагинац|сброс/.test(normalized)) blocks.push('Фильтр');
  if (/дизайн-систем|дизайн главн|дизайн каталог|дизайн карточ|ui|ux|checkout|личный кабинет|шапк|футер/.test(normalized)) blocks.push('Дизайн');
  if (/верстк|адаптив|frontend|фронт|кроссбраузер|бургер|мобильн меню/.test(normalized)) blocks.push('Адаптация и верстка');
  if (/crm|email|рассыл|wishlist|избран|сравнен|лояльност|отзыв|рейтинг|лист ожидания/.test(normalized)) blocks.push('Маркетинг / CRM');
  if (/cookie|выбор город|баннер|реферал|simaland|главн.*сценар/.test(normalized)) blocks.push('Главная и сценарии входа');
  if (/excel|pdf|word|кп|юрлиц|мультивалют|конкурент|безопасност|2fa|rate/.test(normalized)) blocks.push('Бизнес-функции');
  if (/мобильн прилож|приложение|app store|google play|push|robokassa|dark|темн.*тема/.test(normalized)) blocks.push('Мобильное приложение');

  return unique(blocks);
}

function findVelorMatches(text, limit = 7) {
  const normalized = normalizeText(text);
  const allowedBlocks = getVelorAllowedBlocks(normalized);

  if (!normalized || normalized.length < 4) {
    return [];
  }

  return VELOR_ITEMS.map((item) => ({
    ...item,
    score: scoreVelorItem(normalized, item),
  }))
    .filter((item) => !allowedBlocks.length || allowedBlocks.includes(item.blockTitle))
    .filter((item) => item.score >= 8)
    .sort((a, b) => b.score - a.score || b.priceKzt - a.priceKzt)
    .slice(0, limit);
}

function findItsngMatches(text, limit = 7) {
  const normalized = normalizeText(text);

  const ranked = ITSNG_ITEMS.map((item) => ({
    ...item,
    score: scoreItsngItem(normalized, item),
  }))
    .filter((item) => item.score >= 8)
    .sort((a, b) => b.score - a.score || b.minKzt - a.minKzt)
    .filter((item, index, list) => {
      const itemKey = normalizeText(`${item.catalogSection}::${item.catalogTitle}::${item.stack || ''}`);
      return (
        list.findIndex((entry) => normalizeText(`${entry.catalogSection}::${entry.catalogTitle}::${entry.stack || ''}`) === itemKey) ===
        index
      );
    });

  return ranked.slice(0, limit);
}

function shouldUseVelorPricing(text) {
  const normalized = normalizeText(text);

  return /cloudflare|redis|opcache|cdn|lazy|sitemap|robots|canonical|json-ld|чпу|редирект|redirect|meili|search|поиск|autocomplete|опечат|typo|fuzzy|translit|транслит|артикул|sku|barcode|штрихкод|каталог|catalog|карточк товар|product card|фильтр|filter|ajax|range slider|drawer|crm|рассыл|newsletter|wishlist|избран|compare|сравнен|loyalty|лояльност|review|rating|отзыв|excel|pdf|word|кп|юрлиц|мультивалюта|multi-currency|security|безопасност|2fa|mobile app|мобильн прилож|app store|google play|push|robokassa|скорост|speed|fast|slow|performance|ускор|производитель|technical seo|техническ(ое|ий) seo|seo|сео|optimization|оптимизац|frontend|layout|верстк|кроссбраузер|cross-browser|minify|минификац/.test(
    normalized
  );
}

function shouldUseItsngPricing(text) {
  const normalized = normalizeText(text);

  return /wordpress|вордпресс|woocommerce|tilda|тильда|telegram|телеграм|бот|bot|chatbot|chat\s+bot|ai\s+chat|ai|ии|ассистент|assistant|backend|api|node|nestjs|express|postgres|postgre|sql|database|db|база\s*данных|mvp|saas|cms|админ|admin|dashboard|portal|client\s+portal|internal\s+tool|личн(ый|ого)\s+кабинет|user account|парсер|parser|scraper|автоматизац|automation|деплой|deploy|deployment|hosting|хостинг|ssl|domain|домен/.test(
    normalized
  );
}

function hasModuleIntent(text) {
  const normalized = normalizeText(text);

  return /модул|module|доработ|улучш|improve|improvement|tweak|patch|fix|оптимизац|optimi[sz]e|audit|аудит|чеклист|checklist|поэтап|roadmap|калькуляц|calculator|внедр|implement|интеграц|integration|webhook|connect|технич|technical|seo|производитель|performance|speed|slow|скорост|фильтр|filter|faceted|поиск|search|каталог|catalog/.test(
    normalized
  );
}

function isItsngSummaryReliable(text, matches) {
  if (!matches.length) {
    return false;
  }

  const normalized = normalizeText(text);
  const topScore = matches[0]?.score || 0;
  const strongIntent =
    /wordpress|вордпресс|woocommerce|tilda|тильда|telegram|телеграм|бот|ai|ии|backend|api|node|nestjs|express|postgres|postgre|sql|mvp|saas|cms|админ|парсер|автоматизац/.test(
      normalized
    );

  if (strongIntent) {
    return topScore >= 10;
  }

  return matches.length >= 2 && topScore >= 14;
}

function summarizeItsngMatches(matches) {
  if (!matches.length) {
    return null;
  }

  const totalMin = matches.reduce((sum, item) => sum + item.minKzt, 0);
  const totalMax = matches.reduce((sum, item) => sum + (item.maxKzt || item.minKzt), 0);
  const sections = unique(matches.map((item) => item.catalogSection));

  return {
    minKzt: totalMin,
    maxKzt: totalMax,
    items: matches.map((item) => ({
      id: item.id,
      section: item.catalogSection,
      title: item.catalogTitle,
      stack: item.stack,
      minKzt: item.minKzt,
      maxKzt: item.maxKzt,
      pricingType: item.pricingType,
      hourly: item.hourly,
      priceText: item.priceText,
    })),
    blocks: sections,
  };
}

function getModuleSummary(estimate) {
  if (estimate.service?.id !== MODULE_SERVICE.id) {
    return null;
  }

  return estimate.velorSummary || estimate.itsngSummary || null;
}

function englishModuleText(item) {
  const text = normalizeText(`${item.task || item.title || ''} ${item.blockTitle || item.section || ''}`);

  if (/cloudflare|cdn/.test(text)) return 'Cloudflare/CDN setup';
  if (/redis|opcache|кэш|cache/.test(text)) return 'server caching';
  if (/lazy/.test(text)) return 'lazy loading for images and media';
  if (/минификац|css|js|html|tree/.test(text)) return 'CSS/JS/HTML optimization';
  if (/шрифт|font/.test(text)) return 'font optimization';
  if (/индекс|database|бд/.test(text)) return 'database index optimization';
  if (/sitemap/.test(text)) return 'sitemap setup';
  if (/robots/.test(text)) return 'robots.txt setup';
  if (/canonical/.test(text)) return 'canonical URL cleanup';
  if (/json-ld|schema|product|breadcrumb|organization/.test(text)) return 'structured data / JSON-LD';
  if (/чпу|301|redirect|редирект/.test(text)) return 'clean URLs and 301 redirects';
  if (/перелинков|похожие|просмотренные/.test(text)) return 'internal linking blocks';
  if (/поиск|search|meili|fuzzy|autocomplete/.test(text)) return 'site search improvement';
  if (/фильтр|filter|ajax|range|drawer/.test(text)) return 'catalog filters';
  if (/аудит|audit/.test(text)) return 'technical audit';
  if (/seo|сео/.test(text)) return 'technical SEO task';
  if (/скорост|производитель|performance|speed/.test(text)) return 'performance optimization';

  return item.stack ? `${item.stack} task` : 'selected module';
}

function summarizeVelorMatches(matches) {
  if (!matches.length) {
    return null;
  }

  const total = matches.reduce((sum, item) => sum + item.priceKzt, 0);
  const blocks = unique(matches.map((item) => item.blockTitle));

  return {
    totalKzt: total,
    minKzt: total,
    maxKzt: Math.round(total * 1.2),
    blocks,
    items: matches.map((item) => ({
      id: item.id,
      blockTitle: item.blockTitle,
      task: item.task,
      explanation: item.ownerExplanation,
      scope: item.scope,
      timeline: item.timeline,
      priceKzt: item.priceKzt,
    })),
    roadmap: VELOR_PRICING.recommendedRoadmap,
  };
}

function scoreItem(text, item) {
  if (hasAny(text, item.skipIf)) {
    return 0;
  }

  if (item.id === 'ai-assistant' && !/(^|[^a-zа-я0-9])(ai|ии|gpt|gemini|openai|llm|chatbot|чатбот|чат|assistant|ассистент|ai-бот|ии-бот|бот\s+с\s+ai|бот\s+с\s+ии)($|[^a-zа-я0-9])/.test(text)) {
    return 0;
  }

  const score = item.keywords.reduce((sum, keyword) => {
    const normalizedKeyword = normalizeText(keyword);
    return includesKeyword(text, normalizedKeyword) ? sum + Math.max(1, normalizedKeyword.split(/\s+/).length) : sum;
  }, 0);

  return score ? score + (item.priority || 0) : 0;
}

function findMatches(text, items) {
  const normalized = normalizeText(text);

  return items
    .map((item) => ({ item, score: scoreItem(normalized, item) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((match) => match.item);
}

function filterServiceMatches(matches, text, pageCount) {
  const normalized = normalizeText(text);
  const isExplicitOnePage = /одностранич|1\s*странич|one[-\s]?page|1\s*(страниц|page|экран)|визитка/.test(normalized);
  const isPortfolio = /портфолио|portfolio/.test(normalized);
  const isEcommerceIntent = /интернет-магазин|магазин|woocommerce|каталог|товар|корзин|checkout|e-?com|ecomm|online store|webshop|shop|products?/.test(normalized);

  return matches
    .filter((service) => {
      if (service.id === 'ai-assistant' && isEcommerceIntent && !/ai|ии|gpt|gemini|openai|llm|chatbot|чатбот|ai-бот|ии-бот/.test(normalized)) {
        return false;
      }

    if (service.id !== 'wordpress-onepage-portfolio') {
      return true;
    }

    if (pageCount && pageCount > 1) {
      return false;
    }

    return isExplicitOnePage || isPortfolio;
    })
    .sort((a, b) => {
      if (isEcommerceIntent && a.id === 'ecommerce') return -1;
      if (isEcommerceIntent && b.id === 'ecommerce') return 1;
      return 0;
    });
}

function parsePageCount(text) {
  const normalized = normalizeText(text);

  if (/одностранич|1\s*странич|one[-\s]?page|one\s+pager|single[-\s]?page|1\s*(страниц|page|screen|экран)/.test(normalized)) {
    return 1;
  }

  const reverseMatch = normalized.match(/(?:страниц|pages|screens|screen|экранов|экран)\s*(\d{1,3})/);
  if (reverseMatch) {
    return Number(reverseMatch[1]);
  }

  const rangeMatch = normalized.match(/(\d{1,3})\s*[-–]\s*(\d{1,3})\s*(страниц|pages|page|screens|screen|экран|раздел|блок)/);
  if (rangeMatch) {
    return Number(rangeMatch[2]);
  }

  const match = normalized.match(/(\d{1,3})\s*(страниц|pages|page|screens|screen|экран|раздел|блок)/);
  return match ? Number(match[1]) : null;
}

function parseBudget(text) {
  const normalized = normalizeText(text).replace(/\u00a0/g, ' ');
  const rubPerKzt = Number.isFinite(FX_RATES.RUB_PER_KZT) && FX_RATES.RUB_PER_KZT > 0 ? FX_RATES.RUB_PER_KZT : 0.19;
  const usdPerKzt = Number.isFinite(FX_RATES.USD_PER_KZT) && FX_RATES.USD_PER_KZT > 0 ? FX_RATES.USD_PER_KZT : 0.002;
  const englishMoneyContext =
    /budget|under|around|about|up to|can spend|ready to spend|quote|estimate|ballpark|roughly|approx|bucks?|dollars?|\$|website|site|landing|one\s+pager|bot|app|shop|store|ecom|dev|developer/.test(normalized) ||
    /\b(?:can|could|would)\s+you\s+(?:do|build|make)\s+(?:it\s+)?for\b/.test(normalized) ||
    /\b(?:run|cost|set\s+me\s+back)\b/.test(normalized);
  const currencyRegex = 'тенге|тг|₸|kzt|руб(?:\\.|лей|ля|ль)?|₽|usd|доллар(?:а|ов)?|dollar(?:s)?|buck(?:s)?|\\$';
  const scaleRegex = 'тыс|к|k|млн|миллион|миллиона|grand|g';

  const patterns = [
    {
      hasBudgetContext: true,
      regex: new RegExp(
          `(?:бюджет|выделил\\w*|заплачу|потрачу|на руках|budget|my budget is|budget is|can spend|ready to spend|under|around|about|roughly|approx|ballpark|up to|can you do(?: it)? for|could you do(?: it)? for|would you do(?: it)? for|can you build(?: it)? for|could you build(?: it)? for|would you build(?: it)? for|would it run me|how much would it run me|how much would it cost me|set me back)\\s*(?:заплатить|потратить|примерно|около|порядка|до|pay|spend)?\\s*(?<currency1>${currencyRegex})?\\s*(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})?\\s*(?<currency2>${currencyRegex})?`
      ),
    },
    {
      hasBudgetContext: false,
      regex: new RegExp(`(?<currency1>${currencyRegex})\\s*(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})?`),
    },
    {
      hasBudgetContext: false,
      regex: new RegExp(`(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})?\\s*(?<currency2>${currencyRegex})`),
    },
    {
      hasBudgetContext: false,
      regex: new RegExp(`(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})`),
    },
    {
      hasBudgetContext: false,
      regex: new RegExp(`(?<amount>\\d[\\d\\s]{3,})\\s*(?<currency2>${currencyRegex})`),
    },
  ];

  for (const pattern of patterns) {
    const match = normalized.match(pattern.regex);
    if (!match?.groups) {
      continue;
    }

    const rawNumber = match.groups.amount.replace(/\s/g, '').replace(',', '.');
    let value = Number(rawNumber);
    const scale = match.groups.scale || '';
    const currencyToken = `${match.groups.currency1 || ''} ${match.groups.currency2 || ''}`.trim();
    const matchedText = match[0] || '';

    if (!Number.isFinite(value) || value <= 0) {
      continue;
    }

    if (!currencyToken && !scale && /\b(for\s+)?\d{1,4}\s*(pages?|screens?|sections?|blocks?|товар(?:ов|а)?|позиц(?:ий|ии|ия)?|экран(?:ов|а)?|страниц(?:ы)?)\b/.test(matchedText)) {
      continue;
    }

    if (!currencyToken && !scale && new RegExp(`${escapeRegExp(matchedText.trim())}\\s*(товар|позици|экран|страниц)`).test(normalized)) {
      continue;
    }

    if (!currencyToken && !scale && value < 1000 && !/[a-z]/.test(matchedText)) {
      continue;
    }

    if (!currencyToken && /^[\d\s.,]+[кk](?:$|[^a-zа-я0-9])/i.test(matchedText.trim()) && value < 10 && !englishMoneyContext) {
      continue;
    }

    if (/млн|миллион/.test(scale)) {
      value *= 1000000;
    } else if (/тыс|к|k|grand|g/.test(scale)) {
      value *= 1000;
    } else if (pattern.hasBudgetContext && value < 1000 && !currencyToken) {
      value *= 1000;
    }

    if (/руб|₽/.test(currencyToken)) {
      return Math.round(value / rubPerKzt);
    }

    if (/usd|доллар|dollar|buck|\$/.test(currencyToken) || /grand|g/.test(scale) || (englishMoneyContext && /k/.test(scale))) {
      return Math.round(value / usdPerKzt);
    }

    return Math.round(value);
  }

  return null;
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function detectTechnologies(text) {
  const normalized = normalizeText(text);
  const technologies = [];

  if (hasAny(normalized, ['wordpress', 'вордпресс', 'wp', 'woocommerce'])) technologies.push('WordPress');
  if (hasAny(normalized, ['tilda', 'тильда'])) technologies.push('Tilda');
  if (hasAny(normalized, ['react', 'next.js', 'nextjs'])) technologies.push('React/Next.js');
  if (hasAny(normalized, ['node.js', 'node js', 'node', 'express', 'nestjs'])) technologies.push('Node.js');
  if (hasAny(normalized, ['django', 'python'])) technologies.push('Python/Django');
  if (hasAny(normalized, ['postgresql', 'postgre sql', 'postgres'])) technologies.push('PostgreSQL');
  if (hasAny(normalized, ['mysql', 'mariadb'])) technologies.push('MySQL/MariaDB');
  if (hasAny(normalized, ['gemini', 'openai', 'gpt', 'llm', 'ai', 'ии'])) technologies.push('AI/LLM');
  if (hasAny(normalized, ['мобильное приложение', 'приложение', 'ios', 'android', 'mobile app'])) technologies.push('iOS/Android');

  return unique(technologies);
}

function getQuestionSet(service) {
  if (!service) return QUESTION_SETS.generic;
  if (service.id === 'ecommerce') return QUESTION_SETS.ecommerce;
  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') return QUESTION_SETS.backend;
  if (service.id === 'mobile-delivery-app') return QUESTION_SETS.mobileApp;
  if (service.id === 'telegram-bot') return QUESTION_SETS.telegramBot || QUESTION_SETS.aiAssistant;
  if (service.id === 'ai-assistant') return QUESTION_SETS.aiAssistant;
  if (service.id === 'developer-retainer') return QUESTION_SETS.hiring;
  return QUESTION_SETS.simpleSite;
}

function getQuestionSetForLanguage(service, language) {
  if (language !== 'en') {
    return getQuestionSet(service);
  }

  if (!service) return QUESTION_SETS_EN.generic;
  if (service.id === 'ecommerce') return QUESTION_SETS_EN.ecommerce;
  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') return QUESTION_SETS_EN.backend;
  if (service.id === 'mobile-delivery-app') return QUESTION_SETS_EN.mobileApp;
  if (service.id === 'telegram-bot') return QUESTION_SETS_EN.telegramBot;
  if (service.id === 'ai-assistant') return QUESTION_SETS_EN.aiAssistant;
  if (service.id === 'developer-retainer') return QUESTION_SETS_EN.hiring;
  return QUESTION_SETS_EN.simpleSite;
}

function getServiceLabel(service, language) {
  if (!service) {
    return null;
  }

  return language === 'en' ? EN_SERVICE_LABELS[service.id] || service.label : service.label;
}

function getProjectFacts(text) {
  const normalized = normalizeText(text);
  const readyDesign = /дизайн(?:\s+и\s+(?:тексты|контент|материалы|фото))?\s+готов[аы]?|дизайн\s+(готов|есть)|готовый\s+дизайн|figma\s+(есть|готов)|макет\s+(есть|готов)|design ready|have design|got design|already have design|figma ready/.test(normalized);
  const readyContent = /(?:тексты|контент|материалы|фото)(?:\s+и\s+дизайн)?\s+готов[ы]?|тексты\s+есть|контент\s+есть|content ready|copy ready|text ready|photos ready|have content|have copy/.test(normalized);
  const needsDesign = /дизайн\s+с\s+нуля|нет\s+дизайн|без\s+дизайн|нужен\s+(дизайн|макет)|no design|need design|custom design|from scratch|need ui/.test(normalized);
  const noBackend = /backend\s+(нет|не\s+готов)|бэкенд\s+(нет|не\s+готов)|серверн\w*\s+част[ьи]\s+(нет|не\s+готов)|нет\s+(еще\s+)?backend|нет\s+(еще\s+)?бэкенд|нет\s+еще|no backend|backend is not ready|need backend/.test(normalized);
  const readyBackend = /backend\s+(готов|есть)|бэкенд\s+(готов|есть)|серверн\w*\s+част[ьи]\s+(готов|есть)|api\s+(готов|есть)|backend ready|have backend|api ready/.test(normalized);
  const bothPlatforms = /ios.*android|android.*ios|на\s+обоих|обе\s+платформ|both platforms|ios and android|android and ios/.test(normalized);
  const customerCourierRoles = /клиент|курьер|courier|customer/.test(normalized);
  const adminPanel = /админ|admin panel|dashboard|панель/.test(normalized);
  const payment = /kaspi|каспи|оплат|payment|checkout|card/.test(normalized);
  const realtimeTracking = /карта|геолокац|отслеж|движени\w*\s+курьер|real[-\s]?time|live tracking|map|geolocation/.test(normalized);
  const push = /push|пуш|уведомлен|notification/.test(normalized);

  return {
    readyDesign,
    readyContent,
    needsDesign,
    noBackend,
    readyBackend,
    bothPlatforms,
    customerCourierRoles,
    adminPanel,
    payment,
    realtimeTracking,
    push,
  };
}

function getProvidedByClient(facts, language) {
  const isRu = language !== 'en';
  const provided = [];

  if (facts.readyDesign) {
    provided.push(isRu ? 'готовый дизайн' : 'ready design');
  }

  if (facts.readyContent) {
    provided.push(isRu ? 'готовые тексты/материалы' : 'ready content/materials');
  }

  if (facts.readyBackend) {
    provided.push(isRu ? 'готовый backend/API' : 'ready backend/API');
  }

  return provided;
}

function getExcludedFromEstimate(facts, language) {
  const isRu = language !== 'en';
  const excluded = [];

  if (facts.readyDesign && !facts.needsDesign) {
    excluded.push(isRu ? 'UI/UX-дизайн с нуля' : 'UI/UX design from scratch');
  }

  if (facts.readyContent) {
    excluded.push(isRu ? 'копирайтинг и подготовка контента с нуля' : 'copywriting and content preparation from scratch');
  }

  if (facts.readyBackend && !facts.noBackend) {
    excluded.push(isRu ? 'разработка backend с нуля' : 'backend development from scratch');
  }

  return excluded;
}

function getMissingQuestions(text, service) {
  const normalized = normalizeText(text);
  const questions = getQuestionSet(service);
  const facts = getProjectFacts(normalized);

  if (!service) {
    return questions;
  }

  const pageCount = parsePageCount(normalized);
  const hasDesign = facts.readyDesign || facts.needsDesign || /figma|макет|дизайн готов|готовый дизайн|есть дизайн|дизайн с нуля|без дизайна|шаблон|template|брендбук|с нуля|design ready|have design|no design|custom design|from scratch|brand book/.test(normalized);
  const hasContent = facts.readyContent || /контент|тексты|фото|материал|копирайт|логотип|content|copy|text|photos|materials|logo/.test(normalized);
  const hasFeatures = /форма|заявк|оплат|мультияз|язык|админ|каталог|корзин|личный кабинет|авторизац|интеграц|crm|telegram|whatsapp|seo|аналитик|бот|ai|api|form|lead|payment|checkout|multilingual|language|admin|catalog|cart|account|login|auth|integration|analytics|bot/.test(normalized);
  const hasHosting = /домен|хостинг|сервер|vps|vercel|beget|nginx|docker|deploy|деплой|ssl|уже размещен|domain|hosting|server|deployment|deployed|already hosted/.test(normalized);
  const hasDataScope = /пользовател|заявк|товар|заказ|файл|платеж|таблиц|сущност|данн|база|users|leads|products|orders|files|payments|tables|entities|data|database|db/.test(normalized);
  const hasProvider = /gemini|openai|gpt|llm|локальн|ключ|токен|модель|api key|token|local model/.test(normalized);

  if (service.id === 'ecommerce') {
    return questions.filter((question) => {
      if (question.includes('товаров')) return !/товар|каталог|\d{1,5}\s*(товар|позици)/.test(normalized);
      if (question.includes('корзина')) return !hasFeatures;
      if (question.includes('На чем')) return !hasAny(normalized, ['wordpress', 'woocommerce', 'cms', 'кастом', 'shopify']);
      if (question.includes('интеграции')) return !hasFeatures;
      return true;
    });
  }

  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') {
    return questions.filter((question) => {
      if (question.includes('только backend')) return !/frontend|фронт|админ|только backend|только api|сайт/.test(normalized);
      if (question.includes('сущности')) return !hasDataScope;
      if (question.includes('авторизация')) return !hasFeatures;
      if (question.includes('Где будет')) return !hasHosting;
      return true;
    });
  }

  if (service.id === 'mobile-delivery-app') {
    const facts = getProjectFacts(normalized);
    return questions.filter((question) => {
      if (question.includes('роли')) return !facts.customerCourierRoles;
      if (question.includes('онлайн-оплата')) return !(facts.payment && facts.realtimeTracking && facts.push);
      if (question.includes('Backend')) return !(facts.noBackend || facts.readyBackend || facts.adminPanel);
      if (question.includes('Дизайн')) return !(facts.readyDesign || facts.needsDesign);
      return true;
    });
  }

  if (service.id === 'ai-assistant') {
    return questions.filter((question) => {
      if (question.includes('консультировать')) return !hasFeatures;
      if (question.includes('Откуда брать')) return !/прайс|документ|база|сайт|админ|знани/.test(normalized);
      if (question.includes('AI-провайдер')) return !hasProvider;
      if (question.includes('история')) return !hasFeatures;
      return true;
    });
  }

  if (service.id === 'telegram-bot') {
    return questions.filter((question) => {
      if (question.includes('Что должен делать')) return !hasFeatures;
      if (question.includes('Куда отправлять')) return !/telegram|админ|google|sheets|crm|баз/.test(normalized);
      if (question.includes('база данных')) return !hasDataScope && !hasFeatures;
      if (question.includes('сценарий')) return !/сценари|кнопк|текст|готов/.test(normalized);
      return true;
    });
  }

  if (service.id === 'developer-retainer') {
    return questions.filter((question) => {
      if (question.includes('формат')) return !/part[-\s]?time|full[-\s]?time|полная|частичная|постоянн|месяц|retainer/.test(normalized);
      if (question.includes('стек')) return !/frontend|backend|wordpress|node|postgres|react|python|django|интеграц/.test(normalized);
      if (question.includes('часов')) return !/\d{1,3}\s*(час|ч)|полная загрузка|каждый день|месяц/.test(normalized);
      if (question.includes('один разработчик')) return !/один|команд|дизайн|менедж/.test(normalized);
      return true;
    });
  }

  return questions.filter((question) => {
    if (question.includes('Дизайн')) return !hasDesign;
    if (question.includes('блоки')) return !pageCount && !/hero|проекты|услуги|отзывы|контакты|форма|портфолио|блок/.test(normalized);
    if (question.includes('Тексты')) return !hasContent;
    if (question.includes('мультиязычность')) return !hasFeatures && !hasHosting;
    return true;
  });
}

function getMissingQuestionsEn(text, service) {
  const normalized = normalizeText(text);
  const questions = getQuestionSetForLanguage(service, 'en');
  const facts = getProjectFacts(normalized);

  if (!service) {
    return questions;
  }

  const pageCount = parsePageCount(normalized);
  const hasDesign = facts.readyDesign || facts.needsDesign || /figma|template|design ready|have design|got design|already have design|figma ready|no design|custom design|from scratch|brand book|need ui/.test(normalized);
  const hasContent = facts.readyContent || /content ready|copy ready|text ready|photos ready|materials ready|have content|have copy|have texts?|have photos|got the copy|got photos|content is ready|copy is ready/.test(normalized);
  const hasFeatures = /form|lead|payment|checkout|multilingual|language|admin|catalog|cart|account|login|auth|integration|crm|telegram|whatsapp|seo|analytics|bot|ai|api/.test(normalized);
  const hasHosting = /domain|hosting|server|vps|vercel|render|docker|deploy|deployment|deployed|already hosted|ssl/.test(normalized);
  const hasDataScope = /users|leads|products|orders|files|payments|tables|entities|data|database|db/.test(normalized);
  const hasProvider = /gemini|openai|gpt|llm|api key|token|local model/.test(normalized);

  if (service.id === 'ecommerce') {
    return questions.filter((question) => {
      if (question.includes('products')) return !/product|catalog|\d{1,5}\s*(products?|items?|sku)/.test(normalized);
      if (question.includes('cart')) return !hasFeatures;
      if (question.includes('WordPress')) return !hasAny(normalized, ['wordpress', 'woocommerce', 'cms', 'custom', 'shopify']);
      if (question.includes('integrations')) return !hasFeatures;
      return true;
    });
  }

  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') {
    return questions.filter((question) => {
      if (question.includes('backend/API only')) return !/frontend|admin|backend only|api only|website/.test(normalized);
      if (question.includes('data entities')) return !hasDataScope;
      if (question.includes('authentication')) return !hasFeatures;
      if (question.includes('deployed')) return !hasHosting;
      return true;
    });
  }

  if (service.id === 'mobile-delivery-app') {
    const facts = getProjectFacts(normalized);
    return questions.filter((question) => {
      if (question.includes('roles')) return !facts.customerCourierRoles;
      if (question.includes('online payment')) return !(facts.payment && facts.realtimeTracking && facts.push);
      if (question.includes('backend/API')) return !(facts.noBackend || facts.readyBackend || facts.adminPanel);
      if (question.includes('design')) return !(facts.readyDesign || facts.needsDesign);
      return true;
    });
  }

  if (service.id === 'ai-assistant') {
    return questions.filter((question) => {
      if (question.includes('only consult')) return !hasFeatures;
      if (question.includes('knowledge')) return !/price list|document|database|website|admin|knowledge/.test(normalized);
      if (question.includes('provider')) return !hasProvider;
      if (question.includes('history')) return !hasFeatures;
      return true;
    });
  }

  if (service.id === 'telegram-bot') {
    return questions.filter((question) => {
      if (question.includes('What should')) return !hasFeatures;
      if (question.includes('leads go')) return !/telegram|admin|google|sheets|crm|database/.test(normalized);
      if (question.includes('database')) return !hasDataScope && !hasFeatures;
      if (question.includes('button flow')) return !/flow|buttons?|texts?|ready/.test(normalized);
      return true;
    });
  }

  if (service.id === 'developer-retainer') {
    return questions.filter((question) => {
      if (question.includes('format')) return !/part[-\s]?time|full[-\s]?time|monthly|retainer|contract/.test(normalized);
      if (question.includes('stack')) return !/frontend|backend|wordpress|node|postgres|react|python|django|integration/.test(normalized);
      if (question.includes('hours')) return !/\d{1,3}\s*(hours?|hrs?)|full[-\s]?time|monthly|every day/.test(normalized);
      if (question.includes('one developer')) return !/one|team|design|manager/.test(normalized);
      return true;
    });
  }

  return questions.filter((question) => {
    if (question.includes('design')) return !hasDesign;
    if (question.includes('blocks')) return !pageCount && !/hero|about|projects|services|reviews|contacts|form|portfolio|blocks?/.test(normalized);
    if (question.includes('texts')) return !hasContent;
    if (question.includes('SEO')) return !hasFeatures && !hasHosting;
    return true;
  });
}

function isGreetingOnly(text) {
  return /^(привет|салам|здравствуйте|hello|hi|hey|добрый день)[\s!.?]*$/i.test(text.trim());
}

function isOldMaintenanceRequest(text) {
  const normalized = normalizeText(text);
  const hasMaintenance = /доработ|исправ|баг|ошибк|чинить|фикс|правк|поддержк|рефактор|додел|fix|bug|bugfix|patch|repair|maintain|maintenance|update|tweak|refactor|broken|site\s+is\s+down|not\s+working|doesn'?t\s+work|crashed/.test(normalized);
  const hasOldProject = /стар|существующ|чуж|готов(ый|ого)|текущ|уже есть|мой сайт|наш сайт|old|existing|current|legacy|someone else|third[-\s]?party|my site|our site|already have|built by/.test(normalized);

  return hasMaintenance && hasOldProject;
}

function isNegotiationRequest(text) {
  const normalized = normalizeText(text);
  const patterns = [
    /дорог(о|овато|ая|ие|ой)/,
    /expensive|pricey|costly|overpriced/,
    /too\s+(much|expensive|pricey|steep|high)/,
    /price\s+(is\s+)?(high|too high|steep|doesn'?t work|not okay)/,
    /that'?s\s+(a lot|too much|expensive|steep)/,
    /цена\s+(высок|больш|кусает|не\s+подходит)/,
    /слишком\s+(дорог|много|высок)/,
    /это\s+(много|дорого|выше\s+бюджета)/,
    /дешевле|подешевле|сдела(ешь|ете)?\s+дешев/,
    /cheaper|lower|less expensive|can you do lower|can you go lower|drop the price/,
    /скидк|уступ|торг/,
    /discount|deal|negotiate|negotiable|price match|match price/,
    /можно\s+(меньше|подешевле|скинуть|уступить)/,
    /снизить\s+(цен|стоимост)/,
    /уменьшить\s+(цен|стоимост|бюджет)/,
    /почему\s+(так|столько|такая\s+цена|дорого)/,
    /не\s+(потяну|потянем|хватает|укладываюсь|укладываемся)/,
    /can'?t\s+afford|cannot\s+afford|out\s+of\s+budget|not\s+in\s+budget|don'?t\s+have\s+that\s+budget/,
    /нет\s+(такого\s+)?бюджет/,
    /бюджет\s+(меньше|ограничен|маленький|небольшой|только|всего)|budget\s+(is\s+)?(tight|limited|small|lower|only|just)/,
    /у\s+меня\s+(меньше|только|всего)|i\s+(only|just)\s+have|i'?ve\s+got\s+only/,
    /друг(ой|ие)\s+(дела(ет|ют)|предлага(ет|ют))\s+дешев/,
    /someone\s+else\s+(does|offered|quoted)\s+.*cheaper|another\s+(dev|developer|guy|team)\s+.*cheaper/,
    /у\s+конкурент(а|ов)\s+дешев/,
    /(competitor|fiverr|upwork|kwork)\s+.*cheaper/,
    /наш[её]\s*л\s+дешевле/,
    /можно\s+за\s+\d/,
    /can\s+you\s+do\s+(it\s+)?for\s+\d/,
    /сдела(ешь|ете)?\s+за\s+\d|would\s+you\s+do\s+(it\s+)?for\s+\d/,
    /улож(имся|иться)\s+в\s+\d|fit\s+it\s+into\s+\d|fit\s+within\s+\d/,
    /влез(ем|ть)\s+в\s+бюджет|fit\s+(my\s+)?budget/,
    /оплат(а|ить)\s+после\s+(результат|готовност|запуск)/,
    /без\s+предоплат/,
    /рассрочк|поэтапн(о|ая)\s+оплат/,
    /barter|бартер/,
  ];

  return patterns.some((pattern) => pattern.test(normalized));
}

function hasExplicitCurrency(text) {
  return /тенге|тг|₸|kzt|руб|₽|usd|доллар|dollar|bucks?|\$|grand|\b\d+(?:[.,]\d+)?\s*[kg]\b/i.test(text);
}

function hasAmbiguousBudget(text) {
  const normalized = normalizeText(text);
  const hasBudgetWords = /бюджет|выделил\w*|улож|влез|потрачу|заплачу|budget|under|around|about|up to|can spend|ready to spend/.test(normalized);
  const hasAmount = /\d[\d\s]*(?:[.,]\d+)?\s*(тыс|к|k|млн|миллион|миллиона|grand|g)?/.test(normalized);

  if (/\b(for\s+)?\d{1,4}\s*(pages?|screens?|sections?|blocks?|товар(?:ов|а)?|позиц(?:ий|ии|ия)?|экран(?:ов|а)?|страниц(?:ы)?)\b/.test(normalized)) {
    return false;
  }

  return hasBudgetWords && hasAmount && !hasExplicitCurrency(normalized);
}

function isPaymentTermsRequest(text) {
  const normalized = normalizeText(text);

  return /оплат(а|ить)\s+после|после\s+(результат|готовност|запуск)|без\s+предоплат|предоплат[ау]\s+не|50\s*\/\s*50|рассрочк|поэтапн(о|ая)\s+оплат|частями|постоплат|barter|бартер|pay\s+after|payment\s+after|after\s+(delivery|result|launch)|pay\s+on\s+delivery|cash\s+after\s+launch|no\s+upfront|no\s+prepayment|without\s+prepayment|split\s+payment|installments?|milestone\s+payment|pay\s+in\s+parts/.test(
    normalized
  );
}

function isUrgentRequest(text) {
  const normalized = normalizeText(text);

  return /срочн|горит|надо\s+(сегодня|завтра|до\s+вечера|за\s+день|за\s+ночь|к\s+утру)|дедлайн|очень\s+быстро|asap|urgent|rush|need\s+it\s+(today|tomorrow|tonight|by\s+morning|by\s+eod)|same\s+day|next\s+day|deadline|end\s+of\s+day|eod|by\s+monday|by\s+friday/.test(
    normalized
  );
}

function isBigCloneRequest(text) {
  const normalized = normalizeText(text);

  return /как\s+(kaspi|каспи|amazon|амазон|flipkart|instagram|инстаграм|airbnb|uber|netflix|youtube|tiktok|тик\s*ток|wildberries|ozon|olx|avito|авито|booking|spotify|whatsapp|telegram|яндекс|yandex)|аналог\s+(kaspi|каспи|amazon|амазон|instagram|инстаграм|airbnb|uber|netflix|youtube|tiktok|wildberries|ozon|olx|avito|авито|booking)|маркетплейс\s+как|like\s+(amazon|instagram|airbnb|uber|netflix|youtube|tiktok|wildberries|ozon|olx|avito|booking|spotify|whatsapp|telegram|etsy|ebay|shopify)|marketplace\s+like|clone\s+of\s+(amazon|instagram|airbnb|uber|netflix|youtube|tiktok|etsy|ebay)|similar\s+to\s+(amazon|instagram|airbnb|uber|netflix|youtube|tiktok|etsy|ebay)/.test(
    normalized
  );
}

function isMixedProjectRequest(text) {
  const normalized = normalizeText(text);
  const signals = [
    /сайт|лендинг|wordpress|вордпресс|tilda|тильда|website|site|landing|web page/.test(normalized),
    /бот|telegram|телеграм|ai|ии|ассистент|bot|chatbot|assistant/.test(normalized),
    /backend|api|node|postgres|база|админ|личный кабинет/.test(normalized),
    /магазин|каталог|корзин|оплат|woocommerce|shop|store|catalog|cart|checkout|payment/.test(normalized),
    /crm|интеграц|автоматизац|парсер|integration|automation|parser|scraper/.test(normalized),
  ];

  return signals.filter(Boolean).length >= 2 && /(\+|и еще|также|плюс|вместе|сразу|и\s+бот|и\s+сайт|и\s+backend|и\s+оплат|и\s+crm|and\s+(a\s+)?bot|and\s+(a\s+)?telegram\s+bot|and\s+(a\s+)?site|plus|also|together|all\s+at\s+once|with\s+(payment|crm|backend|bot|telegram\s+bot))/.test(normalized);
}

function isCasualOrContactRequest(text) {
  const normalized = normalizeText(text).trim();

  return /^(ты\s+кто|кто\s+ты|ты\s+человек|что\s+умеешь|как\s+дела|контакты|как\s+связаться|telegram|телеграм|портфолио|покажи\s+портфолио|где\s+портфолио|who\s+are\s+you|are\s+you\s+human|what\s+can\s+you\s+do|contact|contacts|how\s+to\s+contact|show\s+(me\s+)?portfolio|portfolio|where\s+is\s+portfolio)[\s?.!]*$/.test(
    normalized
  );
}

function isProjectRequest(text) {
  const normalized = normalizeText(text);

  return /сколько|цена|стоим|оцен|сайт|лендинг|магазин|бот|cms|wordpress|вордпресс|tilda|node|postgres|backend|api|портфолио|приложен|мобильн|ios|android|доставка|курьер|how much|quote|quote me|rough quote|ballpark|estimate|cost|price|how much would|what would it cost|what would it run|run me|set me back|website|site|landing|one pager|store|shop|webshop|ecom|bot|web app|mobile app|app|portal|dashboard|portfolio|build me|make me/.test(
    normalized
  ) || /нанять|программист|разработчик|аутстаф|full[-\s]?time|part[-\s]?time|retainer|поддержка|hire|developer|dev|engineer|contractor|freelancer|programmer|monthly|ongoing|support/.test(
    normalized
  );
}

function buildOldMaintenanceReply(language) {
  if (language === 'en') {
    return [
      'I do not usually take direct bug fixing or maintenance of old third-party code because the scope is hard to control.',
      'A better format is to make a clean new version of the page, rebuild the broken module, or move the feature to a predictable platform.',
      'Send me the link, what is broken, your budget and deadline in Telegram: https://t.me/Berliyn_h. I will suggest two options: a minimal clean rebuild and a normal version.',
    ].join('\n\n');
  }

  return [
    'Я обычно не беру прямой багфикс и поддержку старого чужого кода, потому что там сложно честно зафиксировать объем и срок.',
    'Лучший вариант - сделать новую чистую версию страницы, отдельный новый модуль или перенос на понятную платформу.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте ссылку, что сломано, бюджет и срок - я предложу 2 варианта: минимальный и нормальный.',
  ].join('\n\n');
}

function buildNegotiationReply(language) {
  if (language === 'en') {
    return [
      'We can reduce the price only by reducing the scope, not by quietly promising the same work for less.',
      'The usual two options are: a minimal version now with the main function only, or a normal version later with design, integrations and polish. I can also split the work into paid stages, but I do not work on full delivery with payment only after the result.',
      'Send the task, budget and deadline in Telegram: https://t.me/Berliyn_h. I will suggest a budget option and a normal option.',
    ].join('\n\n');
  }

  return [
    'Снизить цену можно, но только через уменьшение объема: меньше страниц, без админки, без сложного дизайна или без интеграций.',
    'Я бы предложил 2 варианта: минимальный сейчас с главной функцией и нормальный вариант следующим этапом. Можно разбить оплату по этапам, но полный проект без предоплаты или только после результата я не беру.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте задачу, бюджет и срок - я распишу бюджетный и нормальный вариант.',
  ].join('\n\n');
}

function buildPaymentTermsReply(language) {
  if (language === 'en') {
    return [
      'I can split the work into stages: small prepayment, demo of the result, then the next payment or final payment.',
      'Full delivery with payment only after the result is not a good format because the scope can change during the work.',
      'Send the task, budget and deadline in Telegram: https://t.me/Berliyn_h. I will suggest a staged payment plan and two scope options.',
    ].join('\n\n');
  }

  return [
    'Можно работать по этапам: небольшая предоплата, демонстрация результата, затем следующий платеж или финальная оплата.',
    'Полный проект без предоплаты или только после результата я не беру, потому что объем может меняться в процессе.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте задачу, бюджет и срок - предложу оплату по этапам и 2 варианта объема.',
  ].join('\n\n');
}

function buildUrgentReply(language) {
  if (language === 'en') {
    return [
      'For an urgent deadline, I would not promise the full project. The realistic format is a minimal version: one key page, one bot scenario, or one critical module.',
      'Urgency affects the price or the scope: either we simplify the task, or we split it into a quick launch and a normal second phase.',
      'Send the deadline, must-have features and budget in Telegram: https://t.me/Berliyn_h. I will say what can realistically be done first.',
    ].join('\n\n');
  }

  return [
    'Если нужно срочно, я бы не обещал весь проект целиком. Реалистичный формат - минимальная версия: одна ключевая страница, один сценарий бота или один важный модуль.',
    'Срочность влияет на цену или объем: либо упрощаем задачу, либо делим на быстрый запуск и нормальный второй этап.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте срок, обязательные функции и бюджет - скажу, что реально успеть первым этапом.',
  ].join('\n\n');
}

function buildBigCloneReply(language) {
  if (language === 'en') {
    return [
      'A full clone of a large service is not a simple website. It usually means product logic, backend, database, accounts, payments, admin panel and integrations.',
      'The realistic way is to start with an MVP: one core flow, limited roles and a simple admin/requests flow. The full platform should go into later phases.',
      'Send the reference, must-have features and budget in Telegram: https://t.me/Berliyn_h. I will split it into a minimal version and a normal roadmap.',
    ].join('\n\n');
  }

  return [
    'Полный аналог крупного сервиса - это не обычный сайт. Там обычно нужны бизнес-логика, backend, база данных, кабинеты, оплата, админка и интеграции.',
    'Правильнее начать с MVP: один главный сценарий, ограниченные роли и простая админка/заявки. Полную платформу лучше вынести в этапы.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте пример, обязательные функции и бюджет - разобью на минимальную версию и нормальную дорожную карту.',
  ].join('\n\n');
}

function buildMixedProjectReply(language) {
  if (language === 'en') {
    return [
      'This is a combined project, so I would not estimate it as one simple website. We need to choose the first launch stage.',
      'The usual split is: 1. website/landing first, 2. bot or integration second, 3. backend/admin/payment as a separate stage if needed.',
      'Send the must-have part, budget and deadline in Telegram: https://t.me/Berliyn_h. I will suggest a minimal launch and a normal version.',
    ].join('\n\n');
  }

  return [
    'Это уже комбинированная задача, поэтому я бы не считал ее как один простой сайт. Нужно выбрать первый этап запуска.',
    'Обычно делим так: 1. сайт/лендинг, 2. бот или интеграция, 3. backend/админка/оплата отдельным этапом, если они нужны.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте, что обязательно на первом запуске, бюджет и срок - предложу минимальный и нормальный вариант.',
  ].join('\n\n');
}

function buildAmbiguousBudgetReply(language) {
  if (language === 'en') {
    return [
      'I see the budget, but the currency is unclear. Please specify whether it is RUB, USD or KZT.',
      'After that I can compare it with the price list and suggest what fits now and what should go into the second phase.',
    ].join('\n\n');
  }

  return [
    'Бюджет вижу, но валюта неясна. Уточните, пожалуйста: это рубли, доллары или тенге?',
    'После этого сравню сумму с прайсом и скажу, что реально сделать сейчас, а что лучше вынести во второй этап.',
  ].join('\n\n');
}

function buildCasualOrContactReply(language) {
  if (language === 'en') {
    return [
      'I am Dias’s project assistant. I can estimate websites, WordPress/Tilda, Telegram bots, AI assistants, backend/API, MVPs and automation.',
      'For a quick estimate, send: what you need, example link, budget, deadline and must-have features. Telegram: https://t.me/Berliyn_h.',
    ].join('\n\n');
  }

  return [
    'Я ассистент Диаса по проектам. Могу оценить сайты, WordPress/Tilda, Telegram-ботов, AI-ассистентов, backend/API, MVP и автоматизацию.',
    'Для быстрой оценки скиньте: что нужно, пример/ссылку, бюджет, срок и обязательные функции. Telegram: https://t.me/Berliyn_h.',
  ].join('\n\n');
}

function isAddonIncluded(service, addon) {
  return Boolean(service && addon.includedIn?.includes(service.id));
}

function getComplexity(service, addons, text) {
  const normalized = normalizeText(text);
  const reasons = [];

  if (!service) {
    return { level: 'не определена', reasons };
  }

  if (service.id === 'developer-retainer') {
    return { level: 'помесячная работа', reasons: ['формат зависит от загрузки, стека и зоны ответственности'] };
  }

  if (service.id === 'module-work') {
    return { level: 'модульная доработка', reasons: ['стоимость считается по отдельным пунктам прайса'] };
  }

  if (['ecommerce', 'custom-cms', 'node-postgres-backend', 'mobile-delivery-app'].includes(service.id)) {
    reasons.push('есть backend, база данных или бизнес-логика');
  }

  if (hasAny(normalized, ['оплата', 'авторизац', 'личный кабинет', 'роли', 'интеграц', 'crm', 'postgres', 'node', 'карта', 'курьер', 'push', 'ios', 'android'])) {
    reasons.push('есть функции, которые требуют серверной логики и тестирования');
  }

  if (addons.length >= 3) {
    reasons.push('несколько дополнительных модулей в одной задаче');
  }

  if (reasons.length || ['ecommerce', 'custom-cms', 'node-postgres-backend', 'mobile-delivery-app'].includes(service.id)) {
    return { level: 'сложная', reasons: unique(reasons) };
  }

  if (addons.length || service.id === 'business' || service.id === 'wordpress-site' || service.id === 'simple-multipage') {
    return { level: 'средняя', reasons: addons.length ? addons.map((addon) => addon.label) : ['несколько страниц или CMS'] };
  }

  return { level: 'простая', reasons: ['1 страница без сложной серверной логики'] };
}

function getBudgetTier(budget) {
  return BUDGET_TIERS.find((tier) => budget >= tier.min && budget <= tier.max) || BUDGET_TIERS[BUDGET_TIERS.length - 1];
}

function getServiceBudgetScope(service) {
  if (!service) {
    return null;
  }

  if (service.id === 'ai-assistant') {
    return {
      bestFit: 'прототип AI-консультанта и правила ответов без сложных интеграций',
      canOffer: [
        'подготовить сценарии ответов, прайс и ограничения для бота',
        'сделать простой FAQ/консультанта без базы знаний и CRM',
        'настроить черновой prompt и тестовые диалоги',
        'спланировать второй этап: CRM, Telegram, история, база знаний',
      ],
      notIncluded: [
        'полноценный AI-виджет под ключ',
        'интеграция с CRM и Telegram',
        'база знаний/RAG и хранение истории',
        'админка для настройки ответов',
      ],
      recommendation: 'начать с прототипа и правил ответов, а полноценного бота вынести отдельным этапом',
    };
  }

  if (service.id === 'telegram-bot') {
    return {
      bestFit: 'Telegram-бот для заявок с кнопками и уведомлением админу',
      canOffer: [
        'собрать сценарий кнопок и сообщений',
        'принимать заявки и отправлять их админу в Telegram',
        'подключить Google Sheets или простую базу при необходимости',
        'оставить оплату, Mini App и сложную админку на второй этап',
      ],
      notIncluded: [
        'полноценная админ-панель',
        'онлайн-оплата и сложные роли',
        'Mini App с frontend/backend',
        'массовые рассылки и сложная аналитика',
      ],
      recommendation: 'сначала запустить простой бот для заявок, а базу, оплату и админку добавить отдельными этапами',
    };
  }

  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') {
    return {
      bestFit: 'архитектура, ТЗ или маленький технический прототип',
      canOffer: [
        'описать архитектуру и схему базы',
        'сделать небольшой прототип или один ключевой API endpoint',
        'подготовить ТЗ, оценку модулей и план разработки',
        'провести аудит готового кода или сервера',
      ],
      notIncluded: [
        'полноценный backend под ключ',
        'админ-панель и роли пользователей',
        'безопасность, тестирование и деплой production-уровня',
        'интеграции с внешними сервисами',
      ],
      recommendation: 'продавать это как подготовительный этап, после которого можно точно оценить разработку',
    };
  }

  if (service.id === 'ecommerce') {
    return {
      bestFit: 'preorder-страница или прототип магазина без checkout',
      canOffer: [
        'собрать landing/preorder-страницу для проверки спроса',
        'подготовить структуру каталога и ТЗ магазина',
        'сделать статичный прототип нескольких товарных карточек',
        'спланировать этапы: каталог, корзина, оплата, админка',
      ],
      notIncluded: [
        'корзина и checkout под ключ',
        'онлайн-оплата и доставка',
        'личный кабинет и статусы заказов',
        'интеграции со складом, CRM или Kaspi',
      ],
      recommendation: 'сначала запустить витрину или preorder, а магазин делать отдельным бюджетом',
    };
  }

  return null;
}

function buildBudgetPlan({ budget, service, min, max }) {
  if (!budget) {
    return null;
  }

  const tier = getBudgetTier(budget);
  const serviceScope =
    service && (budget < min || ['telegram-bot', 'ai-assistant', 'node-postgres-backend', 'custom-cms'].includes(service.id))
      ? getServiceBudgetScope(service)
      : null;
  const fit = !service ? 'needs_project_type' : budget < min ? 'below_estimate' : budget <= max ? 'within_estimate' : 'above_estimate';
  const gap = service && budget < min ? min - budget : 0;

  return {
    budget,
    tier,
    fit,
    gap,
    bestFit: serviceScope?.bestFit || tier.bestFit,
    canOffer: serviceScope?.canOffer || tier.canOffer,
    notIncluded: serviceScope?.notIncluded || tier.notIncluded,
    recommendation: serviceScope?.recommendation || tier.recommendation,
  };
}

function applyReadyMaterialsDiscount({ min, max, service, facts }) {
  if (!service || !Number.isFinite(min) || !Number.isFinite(max)) {
    return { min, max, discountRate: 0 };
  }

  let discountRate = 0;

  if (facts.readyDesign && !facts.needsDesign) {
    discountRate += service.id === 'mobile-delivery-app' ? 0.1 : 0.15;
  }

  if (facts.readyContent) {
    discountRate += 0.05;
  }

  if (facts.readyBackend && ['mobile-delivery-app', 'custom-cms', 'node-postgres-backend'].includes(service.id)) {
    discountRate += 0.3;
  }

  discountRate = Math.min(discountRate, 0.4);

  if (!discountRate) {
    return { min, max, discountRate: 0 };
  }

  const floor = service.id === 'developer-retainer' ? min : 20000;

  return {
    min: Math.max(floor, Math.round(min * (1 - discountRate))),
    max: Math.max(floor, Math.round(max * (1 - discountRate))),
    discountRate,
  };
}

function estimateFromMessages(messages) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const text = userMessages.map((message) => message.content).join(' ');
  const normalized = normalizeText(text);
  const facts = getProjectFacts(normalized);
  const pageCount = parsePageCount(normalized);
  const velorMatches = shouldUseVelorPricing(normalized) ? findVelorMatches(normalized) : [];
  const velorSummary = summarizeVelorMatches(velorMatches);
  const itsngMatches = shouldUseItsngPricing(normalized) ? findItsngMatches(normalized) : [];
  const itsngSummary = velorSummary || !isItsngSummaryReliable(normalized, itsngMatches) ? null : summarizeItsngMatches(itsngMatches);
  const serviceMatches = filterServiceMatches(findMatches(normalized, SERVICES), normalized, pageCount);
  const primaryService = serviceMatches[0] || null;
  const moduleSummaryCandidate = velorSummary || itsngSummary;
  const useModuleSummary = Boolean(moduleSummaryCandidate && (hasModuleIntent(normalized) || !primaryService));
  const activeVelorSummary = useModuleSummary ? velorSummary : null;
  const activeItsngSummary = useModuleSummary ? itsngSummary : null;
  const service = useModuleSummary ? MODULE_SERVICE : primaryService;
  const isHiring = service?.id === 'developer-retainer';
  const addonMatches = isHiring ? [] : findMatches(normalized, ADDONS).filter((addon) => !isAddonIncluded(service, addon));
  const technologies = detectTechnologies(normalized);
  const budget = parseBudget(normalized);
  const missingQuestions = getMissingQuestions(normalized, service);
  const missingQuestionsEn = getMissingQuestionsEn(normalized, service);
  const projectRequest = isProjectRequest(normalized);
  const shouldAskFirst = projectRequest && userMessages.length <= 1 && !budget && !isHiring && missingQuestions.length > 0;
  const addonMin = addonMatches.reduce((sum, item) => sum + item.min, 0);
  const addonMax = addonMatches.reduce((sum, item) => sum + item.max, 0);
  const baseMin = moduleSummaryCandidate?.minKzt || 0;
  const baseMax = moduleSummaryCandidate?.maxKzt || 0;
  const rawMin = useModuleSummary ? baseMin : service ? service.min + addonMin : null;
  const rawMax = useModuleSummary ? baseMax : service ? service.max + addonMax : null;
  const adjusted = applyReadyMaterialsDiscount({ min: rawMin, max: rawMax, service, facts });
  const min = adjusted.min;
  const max = adjusted.max;
  const complexity = getComplexity(service, addonMatches, normalized);
  const budgetPlan = buildBudgetPlan({ budget, service, min, max });
  const moduleSummary = activeVelorSummary || activeItsngSummary;
  const ready = Boolean(service && (moduleSummary || isHiring || budget || (!shouldAskFirst && missingQuestions.length <= 2)));
  const phase = isHiring
    ? 'hiring_guidance'
    : budget
      ? 'budget_guidance'
      : moduleSummary
        ? 'module_pricing'
        : ready
          ? 'estimate_allowed'
          : 'questions_only';

  return {
    service,
    addons: addonMatches,
    technologies,
    pageCount,
    budget,
    budgetPlan,
    velorMatches,
    itsngSummary: activeItsngSummary,
    itsngMatches,
    velorSummary: activeVelorSummary,
    min,
    max,
    ready,
    phase,
    complexity,
    facts,
    discountRate: adjusted.discountRate,
    missingQuestions,
    missingQuestionsEn,
    summary: service
      ? `${service.label}: ${min || 0} - ${max || 0} KZT, срок ${service.timeline}.`
      : 'Недостаточно данных для честной оценки. Нужно понять тип проекта, объем, дизайн, функции и стек.',
  };
}

function buildQuestionsReply(estimate, language) {
  const isRu = language !== 'en';
  const questions = (isRu
    ? estimate.missingQuestions.length
      ? estimate.missingQuestions
      : getQuestionSet(estimate.service)
    : estimate.missingQuestionsEn?.length
      ? estimate.missingQuestionsEn
      : getQuestionSetForLanguage(estimate.service, language)
  ).slice(0, 4);

  if (!isRu) {
    const intro = estimate.service
      ? `I understand, this looks like ${getServiceLabel(estimate.service, language)}. I need a few details before pricing it properly:`
      : 'I need a few details before giving a realistic estimate:';

    return `${intro}\n${questions.map((question, index) => `${index + 1}. ${question}`).join('\n')}\nAfter that I will calculate a range, timeline and what is included.`;
  }

  const intro = estimate.service
    ? `Понял, это похоже на ${estimate.service.label}. Чтобы не назвать случайную вилку, сначала уточню:`
    : 'Чтобы нормально посчитать, сначала уточню вводные:';

  return `${intro}\n${questions.map((question, index) => `${index + 1}. ${question}`).join('\n')}\nПосле ответа дам вилку, срок и что входит в работу.`;
}

function getIncludedWork(estimate, language) {
  const service = estimate.service;
  const facts = estimate.facts || {};

  if (!service) {
    return [];
  }

  if (service.id === 'mobile-delivery-app') {
    if (language === 'en') {
      return [
        facts.readyDesign ? 'iOS/Android app development from ready designs' : 'iOS/Android app development',
        facts.noBackend ? 'backend/API and database from scratch' : 'backend/API integration',
        'customer and courier roles',
        'admin panel',
        'order statuses, live courier map, push notifications and payment integration',
      ];
    }

    return [
      facts.readyDesign ? 'разработка iOS/Android по готовым макетам' : 'разработка iOS/Android',
      facts.noBackend ? 'backend/API и база данных с нуля' : 'backend/API',
      'роли клиента и курьера',
      'админ-панель',
      'статусы заказов, карта курьера, push-уведомления и интеграция оплаты',
    ];
  }

  return service.includes.slice(0, 5);
}

function buildEstimateReply(estimate, language) {
  const isRu = language !== 'en';
  const moduleSummary = getModuleSummary(estimate);

  if (moduleSummary) {
    const isItsng = Boolean(estimate.itsngSummary);
    const catalogLabel = isRu
      ? isItsng
        ? 'каталогу услуг IT-SNG'
        : 'модульному прайсу'
      : isItsng
        ? 'IT-SNG catalog'
        : 'modular price list';
    const items = moduleSummary.items
      .slice(0, 5)
      .map((item) =>
        isRu
          ? isItsng
            ? `- ${item.title} (${item.stack || 'Технологический стек не указан'}): ${formatPriceRange(item.minKzt, item.maxKzt, language)}.`
            : `- ${item.task}: ${formatPrice(item.priceKzt, language)}, ${formatTimeline(item.timeline, language)}. ${item.explanation}`
          : isItsng
            ? `- ${item.stack || englishModuleText(item)}: ${formatPriceRange(item.minKzt, item.maxKzt, language)}.`
            : `- ${englishModuleText(item)}: ${formatPrice(item.priceKzt, language)}, ${formatTimeline(item.timeline, language)}.`
      )
      .join('\n');
    const total = formatPriceRange(moduleSummary.minKzt, moduleSummary.maxKzt, language);
    const blocks = isRu ? moduleSummary.blocks.join(', ') : unique(moduleSummary.items.map((item) => englishModuleText(item))).slice(0, 3).join(', ');

    if (!isRu) {
      return [
        `I found this in the ${catalogLabel}. The closest area is: ${blocks}.`,
        `Relevant modules:\n${items}`,
        `Rough range for these selected modules: ${total}.`,
        `I would prioritize it this way: first the items that affect speed, SEO and purchase flow, then design/CRM, and mobile app work as a separate phase.`,
      ].join('\n\n');
    }

    return [
      `По ${catalogLabel} это ближе всего к блоку: ${blocks}.`,
      `Что я бы заложил в оценку:\n${items}`,
      `Ориентир по этим пунктам: ${total}.`,
      `По порядку работ я бы шел так: сначала то, что влияет на скорость, SEO и путь к покупке; затем поиск, дизайн и CRM; мобильное приложение - отдельным этапом.`,
    ].join('\n\n');
  }

  const addons = estimate.addons.length ? estimate.addons.map((item) => item.label).join(', ') : null;
  const serviceLabel = getServiceLabel(estimate.service, language);
  const tech = estimate.technologies.length ? estimate.technologies.join(', ') : serviceLabel;
  const included = getIncludedWork(estimate, language).slice(0, 5).join(', ');
  const provided = getProvidedByClient(estimate.facts || {}, language);
  const excluded = getExcludedFromEstimate(estimate.facts || {}, language);
  const assumptions = estimate.missingQuestions.slice(0, 2);
  const discountNote = estimate.discountRate
    ? isRu
      ? `Уже применил снижение за готовые материалы: примерно ${Math.round(estimate.discountRate * 100)}%.`
      : `I already applied a ready-materials reduction of about ${Math.round(estimate.discountRate * 100)}%.`
    : null;
  const scopeLabel = estimate.service?.id === 'mobile-delivery-app'
    ? isRu
      ? `${estimate.pageCount || 'уточняется'} основных экранов`
      : `${estimate.pageCount || 'to be finalized'} main screens`
    : isRu
      ? `${estimate.pageCount || 'уточняется'} страниц/основных экранов`
      : `${estimate.pageCount || 'to be finalized'} page(s)/main screens`;

  if (!isRu) {
    return [
      `Based on your answers, this is a ${estimate.complexity.level} task: ${serviceLabel}.`,
      `Characteristics: stack/platform - ${tech}; scope - ${scopeLabel}; extras - ${addons || 'no major extras detected'}.`,
      provided.length ? `Provided by client: ${provided.join(', ')}.` : null,
      excluded.length ? `Not included in this estimate: ${excluded.join(', ')}.` : null,
      discountNote,
      `Rough range: ${formatPriceRange(estimate.min, estimate.max, language)}, timeline ${formatTimeline(estimate.service.timeline, language)}. Includes: ${included}.`,
      assumptions.length ? `I am assuming the remaining details are standard: ${assumptions.join('; ')}.` : 'A final quote still depends on the exact brief and materials.',
    ].filter(Boolean).join(' ');
  }

  return [
    `По ответам это ${estimate.complexity.level} задача: ${estimate.service.label}.`,
    `Характеристики: стек/платформа - ${tech}; объем - ${scopeLabel}; доп. модули - ${addons || 'без явных сложных модулей'}.`,
    provided.length ? `Со стороны клиента уже есть: ${provided.join(', ')}.` : null,
    excluded.length ? `Это не закладываю в стоимость: ${excluded.join(', ')}.` : null,
    discountNote,
    `Ориентир: ${formatPriceRange(estimate.min, estimate.max, language)}, срок ${estimate.service.timeline}. Входит: ${included}.`,
    assumptions.length ? `Пока считаю по стандартным условиям, еще можно уточнить: ${assumptions.join('; ')}.` : 'Финальная цена зависит от точного ТЗ и материалов.',
  ].filter(Boolean).join(' ');
}

function formatList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function buildBudgetReply(estimate, language) {
  const isRu = language !== 'en';
  const plan = estimate.budgetPlan;
  const planCopy = isRu ? plan : EN_BUDGET_TIER_COPY[plan.tier?.id] || plan;
  const budget = formatPrice(plan.budget, language);
  const moduleSummary = getModuleSummary(estimate);
  const serviceLabel = getServiceLabel(estimate.service, language) || (isRu ? 'проект' : 'project');
  const expectedRange = estimate.service
    ? formatPriceRange(estimate.min, estimate.max, language)
    : isRu
      ? 'зависит от типа проекта'
      : 'depends on the project type';
  const canOffer = formatList(planCopy.canOffer.slice(0, 4));
  const notIncluded = formatList(planCopy.notIncluded.slice(0, 4));

  if (moduleSummary) {
    const isItsng = Boolean(estimate.itsngSummary);
    const sourceLabel = isItsng ? (isRu ? 'каталогу услуг IT-SNG' : 'the IT-SNG catalog') : (isRu ? 'модульному прайсу' : 'the modular price list');
    const affordableItems = [];
    let runningTotal = 0;

    moduleSummary.items.forEach((item) => {
      const itemPrice = isItsng ? item.minKzt : item.priceKzt;
      if (itemPrice && runningTotal + itemPrice <= plan.budget) {
        affordableItems.push(item);
        runningTotal += itemPrice;
      }
    });

    const selected = affordableItems.length
      ? affordableItems
          .map((item) =>
            isRu
              ? isItsng
                ? `- ${item.title} (${item.stack || 'Тех. стек не указан'}): ${formatPriceRange(item.minKzt, item.maxKzt, language)}`
                : `- ${item.task}: ${formatPrice(item.priceKzt, language)}, ${formatTimeline(item.timeline, language)}`
              : isItsng
                ? `- ${item.stack || englishModuleText(item)}: ${formatPriceRange(item.minKzt, item.maxKzt, language)}`
                : `- ${englishModuleText(item)}: ${formatPrice(item.priceKzt, language)}, ${formatTimeline(item.timeline, language)}`
          )
          .join('\n')
      : isRu
        ? '- короткий аудит и приоритизация задач перед разработкой'
        : '- short audit and task prioritization before development';
    const totalText = affordableItems.length ? formatPrice(runningTotal, language) : null;

    if (!isRu) {
      return [
        `Budget ${budget} is clear. From ${sourceLabel}, the full selected set is around ${expectedRange}.`,
        `Inside the current budget I would start with:\n${selected}`,
        totalText ? `This first step is about ${totalText}.` : 'This should be treated as a preparation step, not a full implementation.',
        `I focused on items from ${sourceLabel}.`,
        'The rest should go into the next phase so quality does not collapse.',
      ].join('\n\n');
    }

    return [
      `Бюджет ${budget} понял. По ${sourceLabel} полный выбранный набор тянет примерно на ${expectedRange}.`,
      `Внутри текущего бюджета я бы начал с этого:\n${selected}`,
      totalText ? `Такой первый этап выходит примерно на ${totalText}.` : 'Это лучше подать как подготовительный этап, а не как полноценную разработку.',
      isItsng ? 'Сейчас я опирался на этот каталог услуг.' : 'Остальные пункты лучше вынести во второй этап, чтобы не просесть по качеству.',
    ].join('\n\n');
  }

  if (!isRu) {
    if (plan.fit === 'within_estimate' || plan.fit === 'above_estimate') {
      const bestOption =
        plan.fit === 'above_estimate'
          ? `build the requested ${serviceLabel} properly and use the extra room for SEO, analytics, polish or small integrations`
          : planCopy.bestFit;
      const includedText =
        plan.fit === 'above_estimate'
          ? formatList(['clean implementation of the requested scope', 'responsive layout', 'forms and basic SEO/analytics', 'launch support and small polish tasks'])
          : canOffer;
      return [
        `Budget ${budget} is workable for ${serviceLabel}. The realistic range is ${expectedRange}, so I would keep the scope focused and avoid adding hidden backend or integrations.`,
        `Best option for this budget: ${bestOption}.`,
        `Can include:\n${includedText}`,
        `I would clarify final details next: platform, exact pages, form/SEO/hosting and who provides content.`,
      ].join('\n\n');
    }

    return [
      `Budget ${budget} is clear. For ${serviceLabel}, a full build is usually around ${expectedRange}, so I would not promise the whole project inside this amount.`,
      `Best option inside the budget: ${planCopy.bestFit}.`,
      `Can offer now:\n${canOffer}`,
      `Not included at this stage:\n${notIncluded}`,
      `Optimal proposal: ${planCopy.recommendation}.`,
    ].join('\n\n');
  }

  if (plan.fit === 'within_estimate' || plan.fit === 'above_estimate') {
    return [
      `Бюджет ${budget} понял. Для задачи “${serviceLabel}” это рабочий бюджет: ориентир по прайсу ${expectedRange}.`,
      `Оптимальный вариант за эту сумму: ${plan.bestFit}.`,
      `Что можно включить:\n${canOffer}`,
      'Следующим шагом я бы уточнил платформу, точный список страниц, форму/SEO/хостинг и кто дает контент.',
    ].join('\n\n');
  }

  return [
    `Бюджет ${budget} понял. Полноценный вариант “${serviceLabel}” обычно стоит ${expectedRange}, поэтому я бы не обещал весь проект под ключ за эту сумму.`,
    `Оптимальный вариант в рамках бюджета: ${plan.bestFit}.`,
    `Что можно предложить сейчас:\n${canOffer}`,
    `Что лучше не включать в этот этап:\n${notIncluded}`,
    `Как подать клиенту: ${plan.recommendation}.`,
  ].join('\n\n');
}

function buildHiringReply(estimate, language) {
  const isRu = language !== 'en';
  const budget = estimate.budget ? formatPrice(estimate.budget, language) : null;
  const hourly = formatPrice(20000, language);
  const options = HIRING_OPTIONS.map(
    (option) =>
      `${language === 'en' ? option.label.replace('почасовая работа', 'hourly work').replace('частичная занятость', 'part-time support').replace('выделенный full-time разработчик', 'full-time developer') : option.label}: ${formatPriceRange(option.min, option.max, language)}, ${formatTimeline(option.timeline, language)}`
  ).join('\n');

  if (!isRu) {
    return [
      budget
        ? `With a monthly budget of ${budget}, I would calculate this as developer time. The base rate is about ${hourly}/hour, minimum 2 hours.`
        : `Yes, a developer can be hired hourly. The base rate is about ${hourly}/hour, minimum 2 hours.`,
      `Reference ranges:\n${options}`,
      'To choose the right format, I would ask: stack, expected hours per month, task list and whether project management/design is needed.',
    ].join('\n\n');
  }

  return [
    budget
      ? `Бюджет ${budget} на постоянную работу понял. Считал бы это как часы разработчика: базовая ставка примерно ${hourly}/час, минимум 2 часа.`
      : `Да, можно работать почасово или помесячно. Базовая ставка примерно ${hourly}/час, минимум 2 часа.`,
    `Ориентиры по прайсу:\n${options}`,
    'Чтобы подобрать формат, нужно уточнить стек, количество часов в месяц, список задач и нужен ли менеджмент/дизайн вместе с разработкой.',
  ].join('\n\n');
}

function buildMixedBudgetReply(estimate, language) {
  const isRu = language !== 'en';
  const budget = estimate.budgetPlan ? formatPrice(estimate.budgetPlan.budget, language) : null;

  if (!isRu) {
    return [
      `Budget ${budget} is clear, but this is a combined project, not one simple task.`,
      'For this budget I would choose one first stage: either a landing/site with lead form, or a Telegram bot for leads. CRM integration should be a separate second stage.',
      'I would not promise site + bot + CRM all together inside this amount because quality and testing would collapse.',
      'Send the must-have first step and deadline in Telegram: https://t.me/Berliyn_h. I will split it into budget and normal options.',
    ].join('\n\n');
  }

  return [
    `Бюджет ${budget} понял, но это комбинированный проект, а не одна простая задача.`,
    'В рамках этой суммы я бы выбрал один первый этап: либо сайт/лендинг с формой заявки, либо Telegram-бот для заявок. CRM-интеграцию лучше вынести вторым этапом.',
    'Я бы не обещал сайт + бот + CRM вместе в этот бюджет, потому что пострадают качество и тестирование.',
    'Напишите в Telegram: https://t.me/Berliyn_h. Скиньте, что обязательно запустить первым, и я распишу бюджетный и нормальный вариант.',
  ].join('\n\n');
}

function buildFallbackReply(messages, language) {
  const lastText = messages[messages.length - 1]?.content || '';
  const estimate = estimateFromMessages(messages);
  const isRu = language !== 'en';
  const userMessageCount = messages.filter((message) => message.role === 'user').length;

  if (isGreetingOnly(lastText)) {
    return isRu
      ? 'Привет. Опишите задачу: тип сайта, платформа, объем, дизайн, функции и нужен ли сервер/backend. Я сначала задам уточняющие вопросы, потом посчитаю вилку.'
      : 'Hi. Describe the task: website type, platform, scope, design, features and whether backend/server work is needed. I will ask clarifying questions first, then calculate a range.';
  }

  if (isCasualOrContactRequest(lastText)) {
    return buildCasualOrContactReply(language);
  }

  if (isOldMaintenanceRequest(lastText)) {
    return buildOldMaintenanceReply(language);
  }

  if (isPaymentTermsRequest(lastText) && userMessageCount <= 1) {
    return buildPaymentTermsReply(language);
  }

  if (isBigCloneRequest(lastText) && userMessageCount <= 1 && !estimate.budgetPlan) {
    return buildBigCloneReply(language);
  }

  if (isMixedProjectRequest(lastText) && userMessageCount <= 1 && !estimate.budgetPlan) {
    return buildMixedProjectReply(language);
  }

  if (isUrgentRequest(lastText) && userMessageCount <= 1 && !estimate.budgetPlan) {
    return buildUrgentReply(language);
  }

  if (hasAmbiguousBudget(lastText) && !hasExplicitCurrency(lastText) && userMessageCount <= 1) {
    return buildAmbiguousBudgetReply(language);
  }

  if (estimate.service?.id === 'developer-retainer') {
    return buildHiringReply(estimate, language);
  }

  if (isMixedProjectRequest(lastText) && estimate.budgetPlan) {
    return buildMixedBudgetReply(estimate, language);
  }

  if (estimate.budgetPlan && estimate.service) {
    return buildBudgetReply(estimate, language);
  }

  if (isNegotiationRequest(lastText) && userMessageCount <= 1) {
    return buildNegotiationReply(language);
  }

  if (estimate.budgetPlan) {
    return buildBudgetReply(estimate, language);
  }

  if (!estimate.ready) {
    return buildQuestionsReply(estimate, language);
  }

  return buildEstimateReply(estimate, language);
}

function buildPromptEstimate(estimate) {
  const moduleSummary = getModuleSummary(estimate);

  return {
    service: estimate.service?.label || null,
    minKzt: estimate.min,
    maxKzt: estimate.max,
    ready: estimate.ready,
    phase: estimate.phase,
    budgetKzt: estimate.budget,
    budgetFit: estimate.budgetPlan?.fit || null,
    complexity: estimate.complexity.level,
    technologies: estimate.technologies,
    pageCount: estimate.pageCount,
    providedByClient: getProvidedByClient(estimate.facts || {}, 'ru'),
    excludedFromEstimate: getExcludedFromEstimate(estimate.facts || {}, 'ru'),
    detectedFacts: estimate.facts || {},
    readyMaterialsDiscountRate: estimate.discountRate || 0,
    addons: estimate.addons.map((addon) => ({
      label: addon.label,
      minKzt: addon.min,
      maxKzt: addon.max,
    })),
    modularPricing: moduleSummary
      ? {
          source: estimate.velorSummary ? 'velor' : 'itSng',
          blocks: moduleSummary.blocks,
          totalKzt: moduleSummary.totalKzt || moduleSummary.minKzt,
          rangeKzt: [moduleSummary.minKzt, moduleSummary.maxKzt],
          roadmap: estimate.velorSummary ? estimate.velorSummary.roadmap : null,
          matchedItems: moduleSummary.items,
        }
      : null,
  };
}

function buildEstimateSummary(estimate, language) {
  const isRu = language !== 'en';

  if (!estimate.service) {
    return isRu
      ? 'Недостаточно данных для честной оценки. Нужно понять тип проекта, объем, дизайн, функции и стек.'
      : 'Not enough details for a fair estimate. I need project type, scope, design, features and stack.';
  }

  if (estimate.min && estimate.max) {
    return isRu
      ? `${estimate.service.label}: ${formatPriceRange(estimate.min, estimate.max, language)}, срок ${formatTimeline(estimate.service.timeline, language)}.`
      : `${getServiceLabel(estimate.service, language)}: ${formatPriceRange(estimate.min, estimate.max, language)}, timeline ${formatTimeline(estimate.service.timeline, language)}.`;
  }

  return isRu
    ? `${estimate.service.label}: срок ${formatTimeline(estimate.service.timeline, language)}.`
    : `${getServiceLabel(estimate.service, language)}: timeline ${formatTimeline(estimate.service.timeline, language)}.`;
}

function buildInstructions(estimate, language) {
  const isRu = language !== 'en';
  const outputCurrency = getOutputCurrency(language);

  return `
You are Dias's website assistant for potential clients. Speak ${isRu ? 'Russian' : 'English'} unless the user clearly switches language.

Core behavior:
- Write like a calm human consultant, not a scripted FAQ.
- Be concise and practical.
- In English, understand casual client slang and local variants such as "one pager", "small biz site", "ecom", "quote me", "ballpark", "how much would it run me", "set me back", "bucks", "grand", "2k", "ASAP", "no upfront", "dev/contractor". Answer in clear natural English; do not overuse slang back.
- Output plain text only. Do not use Markdown formatting, no **bold**, no * bullet points, no headings, no tables, no code blocks.
- For lists use either "1. ..." numbered lines or "- ..." lines only.
- Help estimate websites, WordPress/Tilda, ecommerce, mobile apps, Node.js, PostgreSQL, backend, CMS, integrations, AI-bot work and monthly developer hiring.
- Never say a price is final. Use "ориентир", "примерно", "вилка" / "rough range".
- If the client seems ready, suggest continuing in Telegram: https://t.me/Berliyn_h.
- All source prices are stored in KZT, but final user-facing prices must be in ${outputCurrency.code} (${outputCurrency.symbol}).
- Never output KZT/tenge in the final reply.
- Use the sales playbook below as the source of sales style, objections handling, discount rules and CTA behavior.
- If the client asks for bug fixes or old-site maintenance, do not accept that directly. Offer a new version, new module, clean rebuild or migration instead.
- When budget is small or the client negotiates, give two options: minimal now and normal/expanded later.
- Respect client-provided assets and existing work. If the user says design/Figma/content/backend is ready, treat it as provided by the client and do not include that work in the price or in the "what is included" list.
- If design is ready, say that UI/UX design from scratch is not included and that the estimate covers implementation/layout from the ready mockups. Do not write "разработка с дизайном" or "with design" in that case.
- If backend does not exist, include backend/API and database as development work. If backend already exists, do not price backend from scratch unless the user asks for it.
- For mobile delivery apps, distinguish clearly between provided inputs, actual development work, and optional later phases. Ready design reduces scope; it does not remove mobile development, backend, admin panel, payment, map tracking or push work.

Pricing gate:
- Current phase is "${estimate.phase}".
- If phase is "questions_only", DO NOT give any price, budget, numeric money range, "from-to" amount, or final estimate. Ask 3-5 concrete questions from suggestedQuestions and say that the estimate comes after answers.
- If phase is "estimate_allowed", give a realistic range using only the provided pricing data, then explain the task characteristics: platform/stack, complexity, modules, timeline and what is included.
- If phase is "budget_guidance", the user already gave a budget. Do not ignore it. Compare the budget with the price list, explain what can fit into that amount, what cannot fit, and suggest the optimal reduced scope or phased plan.
- If phase is "hiring_guidance", explain monthly hiring/retainer options from hiringOptions and ask only the missing details needed to choose a format.
- If phase is "module_pricing", use matched modular pricing items. Mention the module names, client-facing value, ${outputCurrency.code} price and timeline.
- If Node.js, PostgreSQL, backend, auth, server setup, payment or integrations are mentioned, treat the task as more complex than a simple site.
- For a one-page WordPress portfolio, do not use the broad generic WordPress range if it is simple; use the specific WordPress portfolio service and add modules only when the user mentions them.
- For low budgets equivalent to around 30,000 KZT, never promise a full 3-4 page site. Offer a micro-start: brief, structure, one simple page/draft, setup or phased launch.

Dias offer:
- Full-stack development with React, Django, Node.js, Python, PostgreSQL.
- WordPress, Tilda and custom CMS builds.
- Product-minded UI, backend, integrations, admin panels and AI assistants.

Sales playbook:
${SALES_PLAYBOOK.text}

Full price list and current estimate, KZT:
${JSON.stringify(
  {
    priceList: PRICE_LIST,
    currentEstimate: buildPromptEstimate(estimate),
    suggestedQuestions: estimate.missingQuestions,
    styleExamples: CONVERSATION_EXAMPLES,
  },
  null,
  2
)}
`.trim();
}

function toGeminiContents(messages) {
  return messages.map((message) => ({
    role: message.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: message.content }],
  }));
}

function extractGeminiText(data) {
  return data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || '')
    .join('')
    .trim();
}

function cleanAssistantReply(text) {
  return String(text || '')
    .replace(/\r\n/g, '\n')
    .replace(/\*\*([^*\n]+)\*\*/g, '$1')
    .replace(/__([^_\n]+)__/g, '$1')
    .replace(/(^|\s)\*([^*\n]+)\*(?=\s|[.,!?;:]|$)/g, '$1$2')
    .replace(/(^|\s)_([^_\n]+)_(?=\s|[.,!?;:]|$)/g, '$1$2')
    .replace(/^\s*[*•]\s+/gm, '- ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/`([^`\n]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '$1: $2')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function containsPrice(text) {
  const normalized = normalizeText(text);
  return /(\d[\d\s.,]{2,})\s*(₸|тг|тенге|kzt|₽|руб|usd|доллар|\$)|от\s+\d|до\s+\d|\d+\s*-\s*\d+\s*(тыс|млн|k|₸|₽|\$)/.test(normalized);
}

function isBudgetGuidanceUseful(text, estimate) {
  if (estimate.phase !== 'budget_guidance') {
    return true;
  }

  const normalized = normalizeText(text);
  const hasBudgetContext = /бюджет|в рамках|за эту сумму|за такой бюджет|budget/.test(normalized);
  const hasReducedScope = /этап|прототип|mvp|каркас|можно предлож|не включ|не обещ|не получится|лучше вынести|урезан|preorder/.test(
    normalized
  );

  if (estimate.budgetPlan?.fit === 'below_estimate') {
    return hasBudgetContext && hasReducedScope;
  }

  return hasBudgetContext;
}

function isHiringGuidanceUseful(text, estimate) {
  if (estimate.phase !== 'hiring_guidance') {
    return true;
  }

  const normalized = normalizeText(text);
  return /месяц|час|частич|retainer|full|полная|разработчик|команд/.test(normalized);
}

function isModulePricingUseful(text, estimate) {
  if (estimate.phase !== 'module_pricing') {
    return true;
  }

  const normalized = normalizeText(text);
  return /модул|прайс|ориентир|срок|задач|работ|этап/.test(normalized) && containsPrice(text);
}

function onlyDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

function isEstimateRangeUseful(text, estimate, language) {
  if (estimate.phase !== 'estimate_allowed' || !estimate.min || !estimate.max) {
    return true;
  }

  const textDigits = onlyDigits(text);
  const minDigits = onlyDigits(formatPrice(estimate.min, language));
  const maxDigits = onlyDigits(formatPrice(estimate.max, language));

  return textDigits.includes(minDigits) && textDigits.includes(maxDigits);
}

function isProvidedScopeRespected(text, estimate) {
  const normalized = normalizeText(text);
  const facts = estimate.facts || {};

  if (facts.readyDesign) {
    const claimsDesignWork =
      /разработк[а-я\s]+дизайн|создан[а-я\s]+дизайн|ui\/ux[-\s]*дизайн\s+входит|дизайн\s+входит|с\s+дизайн(ом|ом,)|with\s+design|design\s+included|including\s+design|design\s+from\s+scratch/.test(
        normalized
      );
    const clarifiesReadyDesign = /готов(ый|ого)?\s+дизайн|по\s+готов(ым|ому)\s+макет|не\s+закладыв|не\s+включ|not\s+included|ready\s+design|from\s+ready\s+design/.test(
      normalized
    );

    if (claimsDesignWork && !clarifiesReadyDesign) {
      return false;
    }
  }

  if (facts.noBackend && /backend\s+(уже\s+)?(готов|есть)|бэкенд\s+(уже\s+)?(готов|есть)|backend\s+already\s+exists|backend\s+is\s+ready/.test(normalized)) {
    return false;
  }

  return true;
}

function isReplySafe(text, estimate, language) {
  const cleaned = cleanAssistantReply(text);

  if (!cleaned || cleaned.length > 2600) {
    return false;
  }

  if (['budget_guidance', 'hiring_guidance', 'module_pricing'].includes(estimate.phase) && cleaned.length < 320) {
    return false;
  }

  if (!/[.!?)]$/.test(cleaned) && !/https?:\/\/\S+$/.test(cleaned)) {
    return false;
  }

  if (/тенге|тг|₸|kzt/i.test(cleaned)) {
    return false;
  }

  if (language === 'ru' && /usd|dollar|\$/i.test(cleaned)) {
    return false;
  }

  if (language === 'en' && /руб|₽/i.test(cleaned)) {
    return false;
  }

  return (
    isBudgetGuidanceUseful(cleaned, estimate) &&
    isHiringGuidanceUseful(cleaned, estimate) &&
    isModulePricingUseful(cleaned, estimate) &&
    isEstimateRangeUseful(cleaned, estimate, language) &&
    isProvidedScopeRespected(cleaned, estimate)
  );
}

async function callGemini(messages, estimate, language) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return null;
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const timeoutMs = Number(process.env.GEMINI_TIMEOUT_MS || 8500);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  let response;
  try {
    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: buildInstructions(estimate, language) }],
        },
        contents: toGeminiContents(messages),
        generationConfig: {
          temperature: 0.68,
          topP: 0.9,
          maxOutputTokens: 1100,
        },
      }),
      signal: controller.signal,
    });
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error(`Gemini request timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.error?.message || `Gemini request failed with ${response.status}`);
  }

  const outputText = extractGeminiText(data);

  if (!outputText) {
    throw new Error('Gemini returned an empty response');
  }

  if (estimate.phase === 'questions_only' && containsPrice(outputText)) {
    return null;
  }

  if (!isReplySafe(outputText, estimate, language)) {
    return null;
  }

  return cleanAssistantReply(outputText);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const messages = normalizeMessages(req.body?.messages);
    const language = req.body?.language === 'en' ? 'en' : 'ru';

    if (!messages.length) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const estimate = estimateFromMessages(messages);
    const aiReply = await callGemini(messages, estimate, language);
    const reply = cleanAssistantReply(aiReply || buildFallbackReply(messages, language));

    return res.status(200).json({
      reply,
      estimate: {
        service: estimate.service?.label || null,
        min: estimate.ready ? estimate.min : null,
        max: estimate.ready ? estimate.max : null,
        ready: estimate.ready,
        phase: estimate.phase,
        budget: estimate.budget,
        budgetFit: estimate.budgetPlan?.fit || null,
        complexity: estimate.complexity.level,
        technologies: estimate.technologies,
        modules: getModuleSummary(estimate)?.items?.map((item) => ({
          id: item.id,
          task: item.task || item.title,
          timeline: item.timeline || null,
          priceKzt: item.priceKzt || item.minKzt || 0,
          stack: item.stack || null,
          section: item.blockTitle || item.section || null,
        })) || [],
        summary: estimate.ready ? buildEstimateSummary(estimate, language) : 'Сначала нужно уточнить вводные.',
      },
      mode: aiReply ? 'gemini' : 'local-estimator',
    });
  } catch (error) {
    console.error('Gemini chat fallback:', error.message);

    const messages = normalizeMessages(req.body?.messages);
    const language = req.body?.language === 'en' ? 'en' : 'ru';
    const estimate = estimateFromMessages(messages);

    return res.status(200).json({
      reply: cleanAssistantReply(buildFallbackReply(messages, language)),
      estimate: {
        service: estimate.service?.label || null,
        min: estimate.ready ? estimate.min : null,
        max: estimate.ready ? estimate.max : null,
        ready: estimate.ready,
        phase: estimate.phase,
        budget: estimate.budget,
        budgetFit: estimate.budgetPlan?.fit || null,
        complexity: estimate.complexity.level,
        technologies: estimate.technologies,
        modules: getModuleSummary(estimate)?.items?.map((item) => ({
          id: item.id,
          task: item.task || item.title,
          timeline: item.timeline || null,
          priceKzt: item.priceKzt || item.minKzt || 0,
          stack: item.stack || null,
          section: item.blockTitle || item.section || null,
        })) || [],
        summary: estimate.ready ? buildEstimateSummary(estimate, language) : 'Сначала нужно уточнить вводные.',
      },
      error: 'AI service is temporarily unavailable',
      mode: 'local-estimator',
    });
  }
};
