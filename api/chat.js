const VELOR_PRICING = require('./velorPricing.json');

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
    min: 80000,
    max: 180000,
    timeline: '3-7 рабочих дней',
    priority: 8,
    keywords: [
      'wordpress',
      'вордпресс',
      'портфолио',
      'portfolio',
      'одностранич',
      '1 страниц',
      'одна страниц',
      'one page',
      'one-page',
      'визитка',
    ],
    includes: ['установка WordPress', 'сборка 1 страницы', 'адаптив', 'базовая форма заявки', 'базовая SEO-подготовка'],
  },
  {
    id: 'landing',
    label: 'лендинг или сайт услуг',
    min: 150000,
    max: 340000,
    timeline: '5-10 рабочих дней',
    priority: 4,
    keywords: ['лендинг', 'landing', 'одностранич', 'сайт услуг', 'услуги', 'визитка', 'портфолио'],
    includes: ['структура', 'адаптивная верстка', 'форма заявки', 'базовая SEO-подготовка'],
  },
  {
    id: 'simple-multipage',
    label: 'простой сайт 3-4 страницы по готовому дизайну',
    min: 160000,
    max: 350000,
    timeline: '6-12 рабочих дней',
    priority: 7,
    keywords: [
      'простой сайт',
      'дизайн есть',
      'готовый дизайн',
      '3-4 страниц',
      '3-4 страницы',
      '3 страницы',
      '4 страницы',
      'несколько страниц',
      'сайт простой',
    ],
    includes: ['верстка 3-4 страниц', 'адаптив', 'форма заявки', 'подключение домена', 'базовая SEO-подготовка'],
  },
  {
    id: 'wordpress-site',
    label: 'сайт на WordPress',
    min: 140000,
    max: 480000,
    timeline: '5-16 рабочих дней',
    priority: 5,
    keywords: ['wordpress', 'вордпресс', 'elementor', 'woocommerce', 'wp', 'cms', 'блог'],
    includes: ['настройка CMS', 'сборка страниц', 'адаптив', 'формы', 'базовая SEO-подготовка'],
  },
  {
    id: 'tilda-site',
    label: 'сайт на Tilda',
    min: 110000,
    max: 360000,
    timeline: '4-12 рабочих дней',
    priority: 5,
    keywords: ['tilda', 'тильда', 'zero block', 'зеро блок'],
    includes: ['сборка на Tilda', 'адаптив', 'формы', 'базовая SEO-подготовка'],
  },
  {
    id: 'business',
    label: 'корпоративный сайт',
    min: 280000,
    max: 750000,
    timeline: '10-22 рабочих дня',
    priority: 3,
    keywords: ['корпоратив', 'компания', 'страниц', 'бизнес сайт', 'сайт компании', 'разделы'],
    includes: ['несколько страниц', 'админка или CMS', 'контактные формы', 'мультиязычность по необходимости'],
  },
  {
    id: 'ecommerce',
    label: 'интернет-магазин',
    min: 550000,
    max: 1600000,
    timeline: '3-8 недель',
    priority: 6,
    keywords: [
      'магазин',
      'e-commerce',
      'ecommerce',
      'товар',
      'каталог',
      'корзина',
      'оплата',
      'checkout',
      'woocommerce',
      'маркетплейс',
      'marketplace',
      'как kaspi',
      'как flipkart',
      'как amazon',
    ],
    includes: ['каталог', 'карточки товаров', 'корзина', 'заказы', 'админка'],
  },
  {
    id: 'node-postgres-backend',
    label: 'backend/API на Node.js с PostgreSQL',
    min: 450000,
    max: 1400000,
    timeline: '2-6 недель',
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
    keywords: ['кастом', 'custom', 'cms', 'админ', 'crm', 'сервис', 'панель', 'dashboard', 'личный кабинет', 'роли'],
    includes: ['backend', 'база данных', 'админ-панель', 'роли', 'API'],
  },
  {
    id: 'ai-assistant',
    label: 'AI-бот для сайта',
    min: 250000,
    max: 850000,
    timeline: '1-4 недели',
    priority: 11,
    keywords: [
      'бот',
      'ai',
      'ии',
      'чат',
      'ассистент',
      'openai',
      'gemini',
      'gpt',
      'llm',
      'цены',
      'база знаний',
      'расчет цен',
      'расчетом цен',
      'лиды',
      'telegram',
    ],
    includes: ['чат-виджет', 'серверный API', 'правила консультации', 'передача заявки'],
  },
  {
    id: 'developer-retainer',
    label: 'постоянная работа с разработчиком',
    min: 300000,
    max: 1800000,
    timeline: 'помесячно',
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
    keywords: ['дизайн с нуля', 'нет дизайна', 'без дизайна', 'с нуля', 'нужен макет', 'figma сделать', 'брендинг'],
    skipIf: ['есть дизайн', 'дизайн готов', 'готовый дизайн', 'figma есть', 'макет есть'],
  },
  {
    id: 'content',
    label: 'подготовка текстов и контента',
    min: 50000,
    max: 180000,
    keywords: ['написать тексты', 'тексты с нуля', 'контент с нуля', 'подготовить контент', 'копирайтинг'],
    skipIf: ['тексты есть', 'контент есть', 'контент готов', 'фото есть'],
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
    keywords: ['англ', 'english', 'каз', 'қазақ', 'язык', 'мультияз', '3 языка', '2 языка'],
    skipIf: ['без мультиязычности', 'мультиязычность не нужна', 'один язык', 'только русский', 'только один язык'],
  },
  {
    id: 'payment',
    label: 'онлайн-оплата',
    min: 120000,
    max: 350000,
    keywords: ['оплата', 'kaspi', 'эквайринг', 'stripe', 'paypal', 'liqpay'],
    skipIf: ['без оплаты', 'оплата не нужна', 'без онлайн-оплаты', 'не нужна оплата'],
  },
  {
    id: 'integrations',
    label: 'интеграции с внешними сервисами',
    min: 120000,
    max: 500000,
    keywords: ['интеграц', 'crm', 'telegram', 'whatsapp', 'amo', 'bitrix', 'webhook', 'zapier', 'api сервиса'],
    skipIf: ['без интеграций', 'интеграции не нужны', 'crm не нужна', 'без crm'],
  },
  {
    id: 'auth-roles',
    label: 'авторизация и роли пользователей',
    min: 160000,
    max: 480000,
    keywords: ['авторизац', 'регистрац', 'логин', 'роли', 'личный кабинет', 'пользователи', 'jwt', 'oauth'],
    includedIn: ['custom-cms'],
  },
  {
    id: 'frontend-admin',
    label: 'frontend-интерфейс или админ-панель',
    min: 220000,
    max: 800000,
    keywords: ['frontend', 'фронт', 'интерфейс', 'админка', 'админ-панель', 'dashboard', 'личный кабинет'],
    includedIn: ['custom-cms'],
  },
  {
    id: 'node-backend',
    label: 'Node.js backend',
    min: 250000,
    max: 850000,
    keywords: ['node.js', 'node js', 'nestjs', 'express', 'backend', 'бэкенд'],
    includedIn: ['node-postgres-backend', 'custom-cms'],
  },
  {
    id: 'postgres',
    label: 'PostgreSQL база данных',
    min: 180000,
    max: 600000,
    keywords: ['postgresql', 'postgre sql', 'postgres', 'база данных', 'database', 'sql'],
    includedIn: ['node-postgres-backend', 'custom-cms'],
  },
  {
    id: 'server-setup',
    label: 'настройка сервера и деплой',
    min: 40000,
    max: 160000,
    keywords: ['сервер', 'vps', 'nginx', 'pm2', 'docker', 'деплой', 'deploy', 'хостинг', 'домен', 'ssl'],
  },
  {
    id: 'analytics-seo',
    label: 'расширенная SEO/аналитика',
    min: 50000,
    max: 180000,
    keywords: ['seo', 'сео', 'analytics', 'метрика', 'google analytics', 'search console'],
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
    label: 'частичная занятость',
    min: 300000,
    max: 650000,
    timeline: '40-80 часов в месяц',
    includes: ['поддержка сайта', 'небольшие фичи', 'правки', 'интеграции'],
  },
  {
    label: 'проектный retainer',
    min: 650000,
    max: 1200000,
    timeline: '80-120 часов в месяц',
    includes: ['планирование спринтов', 'frontend/backend задачи', 'регулярные релизы'],
  },
  {
    label: 'выделенный full-time разработчик',
    min: 1200000,
    max: 1800000,
    timeline: 'полная занятость в месяц',
    includes: ['полное вовлечение', 'разработка продукта', 'техническая поддержка команды'],
  },
];

const PRICE_LIST = {
  currency: 'KZT',
  services: SERVICES,
  addons: ADDONS,
  budgetTiers: BUDGET_TIERS,
  hiringOptions: HIRING_OPTIONS,
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
  aiAssistant: [
    'Бот должен только консультировать или еще принимать заявки, считать стоимость и отправлять лиды в Telegram/CRM?',
    'Откуда брать знания: фиксированный прайс, документы, база данных, сайт или админка?',
    'Какой AI-провайдер планируется: Gemini, OpenAI, локальная модель или уже есть свой ключ?',
    'Нужны ли история диалогов, аналитика, антиспам, ограничения по темам и панель настройки ответов?',
  ],
  hiring: [
    'Какой формат нужен: part-time, проектный retainer или full-time разработчик?',
    'Какой стек и задачи: frontend, backend, WordPress, Node.js, PostgreSQL, интеграции?',
    'Сколько часов в месяц или какая загрузка ожидается?',
    'Нужен один разработчик или команда с менеджментом и дизайном?',
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

function formatPrice(value) {
  return `${new Intl.NumberFormat('ru-KZ').format(value)} ₸`;
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

function hasAny(text, keywords = []) {
  return keywords.some((keyword) => text.includes(normalizeText(keyword)));
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

  if (/скорост|ускор|быстр|производитель|кэш|cache|redis|opcache|cloudflare|cdn|lazy|минификац|шрифт|backup|бэкап|uptime|404|500/.test(normalized) && block.includes('производительность')) boost += 5;
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

function shouldUseVelorPricing(text) {
  const normalized = normalizeText(text);

  return /cloudflare|redis|opcache|cdn|lazy|sitemap|robots|canonical|json-ld|чпу|редирект|meili|поиск|autocomplete|опечат|транслит|артикул|штрихкод|каталог|карточк товар|фильтр|ajax|range slider|drawer|crm|рассыл|wishlist|избран|сравнен|лояльност|отзыв|excel|pdf|word|кп|юрлиц|мультивалюта|безопасност|2fa|мобильн прилож|app store|google play|push|robokassa|скорост|ускор|производитель|техническ(ое|ий) seo|seo|сео|оптимизац|верстк|кроссбраузер|минификац/.test(
    normalized
  );
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

  const score = item.keywords.reduce((sum, keyword) => {
    const normalizedKeyword = normalizeText(keyword);
    return text.includes(normalizedKeyword) ? sum + Math.max(1, normalizedKeyword.split(/\s+/).length) : sum;
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
  const isExplicitOnePage = /одностранич|one[-\s]?page|1\s*(страниц|page|экран)|визитка/.test(normalized);
  const isPortfolio = /портфолио|portfolio/.test(normalized);

  return matches.filter((service) => {
    if (service.id !== 'wordpress-onepage-portfolio') {
      return true;
    }

    if (pageCount && pageCount > 1) {
      return false;
    }

    return isExplicitOnePage || isPortfolio;
  });
}

function parsePageCount(text) {
  const normalized = normalizeText(text);

  if (/одностранич|one[-\s]?page|1\s*(страниц|page|экран)/.test(normalized)) {
    return 1;
  }

  const rangeMatch = normalized.match(/(\d{1,3})\s*[-–]\s*(\d{1,3})\s*(страниц|page|экран|раздел|блок)/);
  if (rangeMatch) {
    return Number(rangeMatch[2]);
  }

  const match = normalized.match(/(\d{1,3})\s*(страниц|page|экран|раздел|блок)/);
  return match ? Number(match[1]) : null;
}

function parseBudget(text) {
  const normalized = normalizeText(text).replace(/\u00a0/g, ' ');
  const patterns = [
    {
      hasBudgetContext: true,
      regex:
        /(?:бюджет|за|до|есть|имею|готов\w*|выделил\w*|заплачу|потрачу|на руках)\s*(?:заплатить|потратить|примерно|около|порядка|до)?\s*(\d[\d\s]*(?:[.,]\d+)?)\s*(тыс|к|k|млн|миллион|миллиона|тенге|тг|₸)?/,
    },
    {
      hasBudgetContext: false,
      regex: /(\d[\d\s]*(?:[.,]\d+)?)\s*(тыс|к|k|млн|миллион|миллиона)\s*(?:тенге|тг|₸)?/,
    },
    {
      hasBudgetContext: false,
      regex: /(\d[\d\s]{3,})\s*(?:тенге|тг|₸)/,
    },
  ];

  for (const pattern of patterns) {
    const match = normalized.match(pattern.regex);
    if (!match) {
      continue;
    }

    const rawNumber = match[1].replace(/\s/g, '').replace(',', '.');
    const value = Number(rawNumber);
    const suffix = match[2] || '';

    if (!Number.isFinite(value) || value <= 0) {
      continue;
    }

    if (/млн|миллион/.test(suffix)) {
      return Math.round(value * 1000000);
    }

    if (/тыс|к|k/.test(suffix)) {
      return Math.round(value * 1000);
    }

    if (pattern.hasBudgetContext && value < 1000) {
      return Math.round(value * 1000);
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

  return unique(technologies);
}

function getQuestionSet(service) {
  if (!service) return QUESTION_SETS.generic;
  if (service.id === 'ecommerce') return QUESTION_SETS.ecommerce;
  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') return QUESTION_SETS.backend;
  if (service.id === 'ai-assistant') return QUESTION_SETS.aiAssistant;
  if (service.id === 'developer-retainer') return QUESTION_SETS.hiring;
  return QUESTION_SETS.simpleSite;
}

function getMissingQuestions(text, service) {
  const normalized = normalizeText(text);
  const questions = getQuestionSet(service);

  if (!service) {
    return questions;
  }

  const pageCount = parsePageCount(normalized);
  const hasDesign = /figma|макет|дизайн готов|готовый дизайн|есть дизайн|дизайн с нуля|без дизайна|шаблон|template|брендбук|с нуля/.test(normalized);
  const hasContent = /контент|тексты|фото|материал|копирайт|логотип|готово|есть/.test(normalized);
  const hasFeatures = /форма|заявк|оплат|мультияз|язык|админ|каталог|корзин|личный кабинет|авторизац|интеграц|crm|telegram|whatsapp|seo|аналитик|бот|ai|api/.test(normalized);
  const hasHosting = /домен|хостинг|сервер|vps|vercel|beget|nginx|docker|deploy|деплой|ssl|уже размещен/.test(normalized);
  const hasDataScope = /пользовател|заявк|товар|заказ|файл|платеж|таблиц|сущност|данн|база/.test(normalized);
  const hasProvider = /gemini|openai|gpt|llm|локальн|ключ|токен|модель/.test(normalized);

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

  if (service.id === 'ai-assistant') {
    return questions.filter((question) => {
      if (question.includes('консультировать')) return !hasFeatures;
      if (question.includes('Откуда брать')) return !/прайс|документ|база|сайт|админ|знани/.test(normalized);
      if (question.includes('AI-провайдер')) return !hasProvider;
      if (question.includes('история')) return !hasFeatures;
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

function isGreetingOnly(text) {
  return /^(привет|салам|здравствуйте|hello|hi|hey|добрый день)[\s!.?]*$/i.test(text.trim());
}

function isProjectRequest(text) {
  const normalized = normalizeText(text);

  return /сколько|цена|стоим|оцен|сайт|лендинг|магазин|бот|cms|wordpress|вордпресс|tilda|node|postgres|backend|api|портфолио/.test(
    normalized
  ) || /нанять|программист|разработчик|аутстаф|full[-\s]?time|part[-\s]?time|retainer|поддержка/.test(
    normalized
  );
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

  if (['ecommerce', 'custom-cms', 'node-postgres-backend'].includes(service.id)) {
    reasons.push('есть backend, база данных или бизнес-логика');
  }

  if (hasAny(normalized, ['оплата', 'авторизац', 'личный кабинет', 'роли', 'интеграц', 'crm', 'postgres', 'node'])) {
    reasons.push('есть функции, которые требуют серверной логики и тестирования');
  }

  if (addons.length >= 3) {
    reasons.push('несколько дополнительных модулей в одной задаче');
  }

  if (reasons.length || ['ecommerce', 'custom-cms', 'node-postgres-backend'].includes(service.id)) {
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
  const serviceScope = budget < min ? getServiceBudgetScope(service) : null;
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

function estimateFromMessages(messages) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const text = userMessages.map((message) => message.content).join(' ');
  const normalized = normalizeText(text);
  const pageCount = parsePageCount(normalized);
  const velorMatches = shouldUseVelorPricing(normalized) ? findVelorMatches(normalized) : [];
  const velorSummary = summarizeVelorMatches(velorMatches);
  const serviceMatches = filterServiceMatches(findMatches(normalized, SERVICES), normalized, pageCount);
  const service = velorSummary ? MODULE_SERVICE : serviceMatches[0] || null;
  const isHiring = service?.id === 'developer-retainer';
  const addonMatches = isHiring ? [] : findMatches(normalized, ADDONS).filter((addon) => !isAddonIncluded(service, addon));
  const technologies = detectTechnologies(normalized);
  const budget = parseBudget(normalized);
  const missingQuestions = getMissingQuestions(normalized, service);
  const projectRequest = isProjectRequest(normalized);
  const shouldAskFirst = projectRequest && userMessages.length <= 1 && !budget && !isHiring;
  const addonMin = addonMatches.reduce((sum, item) => sum + item.min, 0);
  const addonMax = addonMatches.reduce((sum, item) => sum + item.max, 0);
  const min = velorSummary ? velorSummary.minKzt : service ? service.min + addonMin : null;
  const max = velorSummary ? velorSummary.maxKzt : service ? service.max + addonMax : null;
  const complexity = getComplexity(service, addonMatches, normalized);
  const budgetPlan = buildBudgetPlan({ budget, service, min, max });
  const ready = Boolean(service && (velorSummary || isHiring || budget || (!shouldAskFirst && missingQuestions.length <= 2)));
  const phase = isHiring ? 'hiring_guidance' : budget ? 'budget_guidance' : velorSummary ? 'module_pricing' : ready ? 'estimate_allowed' : 'questions_only';

  return {
    service,
    addons: addonMatches,
    technologies,
    pageCount,
    budget,
    budgetPlan,
    velorMatches,
    velorSummary,
    min,
    max,
    ready,
    phase,
    complexity,
    missingQuestions,
    summary: service
      ? `${service.label}: ${min ? formatPrice(min) : ''} - ${max ? formatPrice(max) : ''}, срок ${service.timeline}.`
      : 'Недостаточно данных для честной оценки. Нужно понять тип проекта, объем, дизайн, функции и стек.',
  };
}

function buildQuestionsReply(estimate, language) {
  const isRu = language !== 'en';
  const questions = (estimate.missingQuestions.length ? estimate.missingQuestions : getQuestionSet(estimate.service)).slice(0, 4);

  if (!isRu) {
    const intro = estimate.service
      ? `I understand, this looks like ${estimate.service.label}. I need a few details before pricing it properly:`
      : 'I need a few details before giving a realistic estimate:';

    return `${intro}\n${questions.map((question, index) => `${index + 1}. ${question}`).join('\n')}\nAfter that I will calculate a range, timeline and what is included.`;
  }

  const intro = estimate.service
    ? `Понял, это похоже на ${estimate.service.label}. Чтобы не назвать случайную вилку, сначала уточню:`
    : 'Чтобы нормально посчитать, сначала уточню вводные:';

  return `${intro}\n${questions.map((question, index) => `${index + 1}. ${question}`).join('\n')}\nПосле ответа дам вилку, срок и что входит в работу.`;
}

function buildEstimateReply(estimate, language) {
  const isRu = language !== 'en';

  if (estimate.velorSummary) {
    const items = estimate.velorSummary.items
      .slice(0, 5)
      .map((item) => `- ${item.task}: ${formatPrice(item.priceKzt)}, ${item.timeline}. ${item.explanation}`)
      .join('\n');
    const total = `${formatPrice(estimate.velorSummary.minKzt)} - ${formatPrice(estimate.velorSummary.maxKzt)}`;
    const blocks = estimate.velorSummary.blocks.join(', ');

    if (!isRu) {
      return [
        `I found this in the modular price list. The closest area is: ${blocks}.`,
        `Relevant modules:\n${items}`,
        `Rough range for these selected modules: ${total}.`,
        `I would prioritize it this way: first the items that affect speed, SEO and purchase flow, then design/CRM, and mobile app work as a separate phase.`,
      ].join('\n\n');
    }

    return [
      `По модульному прайсу это ближе всего к блоку: ${blocks}.`,
      `Что я бы заложил в оценку:\n${items}`,
      `Ориентир по этим пунктам: ${total}.`,
      `По порядку работ я бы шел так: сначала то, что влияет на скорость, SEO и путь к покупке; затем поиск, дизайн и CRM; мобильное приложение - отдельным этапом.`,
    ].join('\n\n');
  }

  const addons = estimate.addons.length ? estimate.addons.map((item) => item.label).join(', ') : null;
  const tech = estimate.technologies.length ? estimate.technologies.join(', ') : estimate.service.label;
  const included = estimate.service.includes.slice(0, 4).join(', ');
  const assumptions = estimate.missingQuestions.slice(0, 2);

  if (!isRu) {
    return [
      `Based on your answers, this is a ${estimate.complexity.level} task: ${estimate.service.label}.`,
      `Characteristics: stack/platform - ${tech}; scope - ${estimate.pageCount || 'to be finalized'} page(s)/main screens; extras - ${addons || 'no major extras detected'}.`,
      `Rough range: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)}, timeline ${estimate.service.timeline}. Includes: ${included}.`,
      assumptions.length ? `I am assuming the remaining details are standard: ${assumptions.join('; ')}.` : 'A final quote still depends on the exact brief and materials.',
    ].join(' ');
  }

  return [
    `По ответам это ${estimate.complexity.level} задача: ${estimate.service.label}.`,
    `Характеристики: стек/платформа - ${tech}; объем - ${estimate.pageCount || 'уточняется'} страниц/основных экранов; доп. модули - ${addons || 'без явных сложных модулей'}.`,
    `Ориентир: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)}, срок ${estimate.service.timeline}. Входит: ${included}.`,
    assumptions.length ? `Пока считаю по стандартным условиям, еще можно уточнить: ${assumptions.join('; ')}.` : 'Финальная цена зависит от точного ТЗ и материалов.',
  ].join(' ');
}

function formatList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function buildBudgetReply(estimate, language) {
  const isRu = language !== 'en';
  const plan = estimate.budgetPlan;
  const budget = formatPrice(plan.budget);
  const serviceLabel = estimate.service?.label || (isRu ? 'проект' : 'project');
  const expectedRange = estimate.service
    ? `${formatPrice(estimate.min)} - ${formatPrice(estimate.max)}`
    : isRu
      ? 'зависит от типа проекта'
      : 'depends on the project type';
  const canOffer = formatList(plan.canOffer.slice(0, 4));
  const notIncluded = formatList(plan.notIncluded.slice(0, 4));

  if (estimate.velorSummary) {
    const affordableItems = [];
    let runningTotal = 0;

    estimate.velorSummary.items.forEach((item) => {
      if (runningTotal + item.priceKzt <= plan.budget) {
        affordableItems.push(item);
        runningTotal += item.priceKzt;
      }
    });

    const selected = affordableItems.length
      ? affordableItems.map((item) => `- ${item.task}: ${formatPrice(item.priceKzt)}, ${item.timeline}`).join('\n')
      : '- короткий аудит и приоритизация задач перед разработкой';
    const totalText = affordableItems.length ? formatPrice(runningTotal) : null;

    if (!isRu) {
      return [
        `Budget ${budget} is clear. From the modular price list, the full selected set is around ${expectedRange}.`,
        `Inside the current budget I would start with:\n${selected}`,
        totalText ? `This first step is about ${totalText}.` : 'This should be treated as a preparation step, not a full implementation.',
        'The rest should go into the next phase so quality does not collapse.',
      ].join('\n\n');
    }

    return [
      `Бюджет ${budget} понял. По модульному прайсу полный выбранный набор тянет примерно на ${expectedRange}.`,
      `Внутри текущего бюджета я бы начал с этого:\n${selected}`,
      totalText ? `Такой первый этап выходит примерно на ${totalText}.` : 'Это лучше подать как подготовительный этап, а не как полноценную разработку.',
      'Остальные пункты лучше вынести во второй этап, чтобы не просесть по качеству.',
    ].join('\n\n');
  }

  if (!isRu) {
    if (plan.fit === 'within_estimate' || plan.fit === 'above_estimate') {
      return [
        `Budget ${budget} is workable for ${serviceLabel}. The realistic range is ${expectedRange}, so I would keep the scope focused and avoid adding hidden backend or integrations.`,
      `Best option for this budget: ${plan.bestFit}.`,
        `Can include:\n${canOffer}`,
        `I would clarify final details next: platform, exact pages, form/SEO/hosting and who provides content.`,
      ].join('\n\n');
    }

    return [
      `Budget ${budget} is clear. For ${serviceLabel}, a full build is usually around ${expectedRange}, so I would not promise the whole project inside this amount.`,
      `Best option inside the budget: ${plan.bestFit}.`,
      `Can offer now:\n${canOffer}`,
      `Not included at this stage:\n${notIncluded}`,
      `Optimal proposal: ${plan.recommendation}.`,
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
  const budget = estimate.budget ? formatPrice(estimate.budget) : null;
  const options = HIRING_OPTIONS.map(
    (option) => `${option.label}: ${formatPrice(option.min)} - ${formatPrice(option.max)}, ${option.timeline}`
  ).join('\n');

  if (!isRu) {
    return [
      budget
        ? `With a monthly budget of ${budget}, the closest format is part-time support unless the scope is very small.`
        : 'Yes, a developer can be hired on a monthly format.',
      `Reference ranges:\n${options}`,
      'To choose the right format, I would ask: stack, expected hours per month, task list and whether project management/design is needed.',
    ].join('\n\n');
  }

  return [
    budget
      ? `Бюджет ${budget} на постоянную работу понял. Ближайший реалистичный формат — частичная занятость или фиксированный пакет часов, если задач немного.`
      : 'Да, можно работать в формате постоянного разработчика или помесячного сопровождения.',
    `Ориентиры по прайсу:\n${options}`,
    'Чтобы подобрать формат, нужно уточнить стек, количество часов в месяц, список задач и нужен ли менеджмент/дизайн вместе с разработкой.',
  ].join('\n\n');
}

function buildFallbackReply(messages, language) {
  const lastText = messages[messages.length - 1]?.content || '';
  const estimate = estimateFromMessages(messages);
  const isRu = language !== 'en';

  if (isGreetingOnly(lastText)) {
    return isRu
      ? 'Привет. Опишите задачу: тип сайта, платформа, объем, дизайн, функции и нужен ли сервер/backend. Я сначала задам уточняющие вопросы, потом посчитаю вилку.'
      : 'Hi. Describe the task: website type, platform, scope, design, features and whether backend/server work is needed. I will ask clarifying questions first, then calculate a range.';
  }

  if (estimate.service?.id === 'developer-retainer') {
    return buildHiringReply(estimate, language);
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
    addons: estimate.addons.map((addon) => ({
      label: addon.label,
      minKzt: addon.min,
      maxKzt: addon.max,
    })),
    modularPricing: estimate.velorSummary
      ? {
          blocks: estimate.velorSummary.blocks,
          totalKzt: estimate.velorSummary.totalKzt,
          rangeKzt: [estimate.velorSummary.minKzt, estimate.velorSummary.maxKzt],
          roadmap: estimate.velorSummary.roadmap,
          matchedItems: estimate.velorSummary.items,
        }
      : null,
  };
}

function buildInstructions(estimate, language) {
  const isRu = language !== 'en';

  return `
You are Dias's website assistant for potential clients. Speak ${isRu ? 'Russian' : 'English'} unless the user clearly switches language.

Core behavior:
- Write like a calm human consultant, not a scripted FAQ.
- Be concise and practical.
- Output plain text only. Do not use Markdown formatting, no **bold**, no * bullet points, no headings, no tables, no code blocks.
- For lists use either "1. ..." numbered lines or "- ..." lines only.
- Help estimate websites, WordPress/Tilda, ecommerce, Node.js, PostgreSQL, backend, CMS, integrations, AI-bot work and monthly developer hiring.
- Never say a price is final. Use "ориентир", "примерно", "вилка" / "rough range".
- If the client seems ready, suggest continuing in Telegram: https://t.me/Berliyn_h.

Pricing gate:
- Current phase is "${estimate.phase}".
- If phase is "questions_only", DO NOT give any price, budget, numeric money range, "from-to" amount, KZT/tenge amount, or final estimate. Ask 3-5 concrete questions from suggestedQuestions and say that the estimate comes after answers.
- If phase is "estimate_allowed", give a realistic range using only the provided pricing data, then explain the task characteristics: platform/stack, complexity, modules, timeline and what is included.
- If phase is "budget_guidance", the user already gave a budget. Do not ignore it. Compare the budget with the price list, explain what can fit into that amount, what cannot fit, and suggest the optimal reduced scope or phased plan.
- If phase is "hiring_guidance", explain monthly hiring/retainer options from hiringOptions and ask only the missing details needed to choose a format.
- If phase is "module_pricing", use matched modular pricing items. Mention the module names, client-facing value, KZT price and timeline. Do not mention source RUB prices.
- If Node.js, PostgreSQL, backend, auth, server setup, payment or integrations are mentioned, treat the task as more complex than a simple site.
- For a one-page WordPress portfolio, do not use the broad generic WordPress range if it is simple; use the specific WordPress portfolio service and add modules only when the user mentions them.
- For low budgets like 30,000 KZT, never promise a full 3-4 page site. Offer a micro-start: brief, structure, one simple page/draft, setup or phased launch.

Dias offer:
- Full-stack development with React, Django, Node.js, Python, PostgreSQL.
- WordPress, Tilda and custom CMS builds.
- Product-minded UI, backend, integrations, admin panels and AI assistants.

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
  return /(\d[\d\s.,]{2,})\s*(₸|тг|тенге|kzt)|от\s+\d|до\s+\d|\d+\s*-\s*\d+\s*(тыс|млн|k|₸)/.test(normalized);
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

function isReplySafe(text, estimate) {
  const cleaned = cleanAssistantReply(text);

  if (!cleaned || cleaned.length > 2600) {
    return false;
  }

  if (/₽|руб|rub/i.test(cleaned)) {
    return false;
  }

  return isBudgetGuidanceUseful(cleaned, estimate) && isHiringGuidanceUseful(cleaned, estimate) && isModulePricingUseful(cleaned, estimate);
}

async function callGemini(messages, estimate, language) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return null;
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
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
  });

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

  if (!isReplySafe(outputText, estimate)) {
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
        modules: estimate.velorSummary?.items?.map((item) => ({
          id: item.id,
          task: item.task,
          priceKzt: item.priceKzt,
          timeline: item.timeline,
        })) || [],
        summary: estimate.ready ? estimate.summary : 'Сначала нужно уточнить вводные.',
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
        modules: estimate.velorSummary?.items?.map((item) => ({
          id: item.id,
          task: item.task,
          priceKzt: item.priceKzt,
          timeline: item.timeline,
        })) || [],
        summary: estimate.ready ? estimate.summary : 'Сначала нужно уточнить вводные.',
      },
      error: 'AI service is temporarily unavailable',
      mode: 'local-estimator',
    });
  }
};
