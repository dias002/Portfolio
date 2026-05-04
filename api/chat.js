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
    id: 'security-fix',
    label: 'security-аудит и восстановление сайта',
    min: 50000,
    max: 250000,
    timeline: '1-5 рабочих дней',
    priority: 24,
    keywords: [
      'сайт взломали',
      'взломали сайт',
      'сайт заражен',
      'вирус на сайте',
      'редиректит',
      'malware',
      'hacked site',
      'site hacked',
      'website hacked',
      'virus on site',
      'security audit',
      'malware cleanup',
      'redirect hack',
    ],
    includes: ['security-аудит', 'проверка файлов/плагинов/пользователей', 'проверка логов и backup', 'план чистки', 'базовое закрытие найденных слабых мест'],
  },
  {
    id: 'payment-fix',
    label: 'диагностика оплаты / WooCommerce checkout',
    min: 30000,
    max: 150000,
    timeline: '1-4 рабочих дня',
    priority: 23,
    keywords: [
      'оплата не работает',
      'не проходит оплата',
      'woocommerce оплата',
      'checkout не работает',
      'заказ не создается',
      'платеж не проходит',
      'kaspi не работает',
      'payment not working',
      'payment is not working',
      'checkout broken',
      'checkout not working',
      'woocommerce payment',
      'woocommerce checkout',
      'order not created',
      'webhook payment',
      'payment webhook',
    ],
    includes: ['диагностика checkout', 'проверка платежного плагина/API-ключей', 'проверка SSL/webhook/callback', 'проверка логов', 'оценка фикса после диагностики'],
  },
  {
    id: 'form-fix',
    label: 'фикс формы заявки / уведомлений',
    min: 20000,
    max: 90000,
    timeline: '1-3 рабочих дня',
    priority: 22,
    keywords: [
      'форма не отправляет',
      'форма не работает',
      'заявки не приходят',
      'заявка не приходит',
      'письма не приходят',
      'telegram заявки не приходят',
      'телеграм заявки не приходят',
      'tilda не отправляет заявки',
      'tilda заявки telegram',
      'заявки в telegram не приходят',
      'form not sending',
      'form not working',
      'leads not coming',
      'emails not arriving',
      'telegram leads not working',
      'tilda form not working',
    ],
    includes: ['проверка формы', 'проверка email/SMTP/Telegram', 'проверка ошибок отправки', 'настройка уведомлений', 'тестовая заявка'],
  },
  {
    id: 'site-diagnostics',
    label: 'диагностика бага на сайте',
    min: 25000,
    max: 80000,
    timeline: '1-3 рабочих дня',
    priority: 21,
    keywords: [
      'ошибка 500',
      '500 ошибка',
      'ошибка 404',
      'белый экран',
      'сайт не открывается',
      'сайт упал',
      'после обновления сломалось',
      'обновить плагины',
      'почини',
      'почини сайт',
      'старый сайт почини',
      'починить форму',
      'починить сайт',
      'баг на сайте',
      'сломался сайт',
      'ssl не работает',
      'https не работает',
      'домен не работает',
      'error 500',
      '500 error',
      '404 error',
      'white screen',
      'site is down',
      'website down',
      'broken site',
      'fix site',
      'old custom php',
      'php site broken',
      'after update broke',
      'plugin conflict',
      'ssl issue',
      'domain issue',
    ],
    includes: ['диагностика админки/логов', 'проверка темы/плагинов', 'проверка хостинга/SSL', 'проверка backup/staging', 'план фикса с ценой'],
  },
  {
    id: 'existing-site-seo',
    label: 'SEO-доработка существующего сайта',
    min: 50000,
    max: 180000,
    timeline: '2-7 рабочих дней',
    priority: 19,
    keywords: [
      'улучшить seo',
      'улучшить сео',
      'поднять seo',
      'поднять сео',
      'seo существующего сайта',
      'сео существующего сайта',
      'существующий сайт seo',
      'существующий сайт сео',
      'техническое seo',
      'техническое сео',
      'seo audit',
      'improve seo',
      'improve technical seo',
      'seo improvement',
      'existing site seo',
      'existing wordpress site',
      'technical seo',
      'sitemap',
      'robots',
      'мета теги',
      'title description',
      'search console',
    ],
    includes: ['SEO-аудит', 'title/description', 'sitemap/robots', 'ЧПУ/редиректы', 'базовые технические правки'],
  },
  {
    id: 'existing-site-performance',
    label: 'ускорение существующего сайта',
    min: 40000,
    max: 180000,
    timeline: '1-5 рабочих дней',
    priority: 18,
    keywords: [
      'ускорить сайт',
      'ускорить загрузку',
      'сайт тормозит',
      'медленно грузится',
      'улучшить скорость',
      'оптимизировать скорость',
      'существующий сайт скорость',
      'pagespeed',
      'page speed',
      'performance',
      'speed optimization',
      'site speed',
      'existing site speed',
      'website is slow',
      'slow website',
      'core web vitals',
    ],
    includes: ['аудит скорости', 'оптимизация изображений', 'кэширование', 'проверка лишних скриптов/плагинов', 'базовые PageSpeed-правки'],
  },
  {
    id: 'existing-site-update',
    label: 'доработка существующего сайта',
    min: 20000,
    max: 220000,
    timeline: '1-7 рабочих дней',
    priority: 17,
    keywords: [
      'на существующем сайте',
      'существующий сайт',
      'есть сайт',
      'уже есть сайт',
      'готовый сайт',
      'сайт уже работает',
      'текущий сайт',
      'добавить форму',
      'форма заявки',
      'заявки в telegram',
      'добавить оплату',
      'онлайн оплату',
      'добавить страницу',
      'новую страницу',
      'поменять тексты',
      'поменять фото',
      'заменить тексты',
      'заменить фото',
      'английскую версию',
      'добавить язык',
      'existing website',
      'existing site',
      'current website',
      'add payment',
      'add a lead form',
      'lead form',
      'add new page',
      'change texts',
      'change photos',
      'add language',
    ],
    includes: ['аудит текущего сайта', 'небольшие правки контента/страниц', 'форма заявки', 'подключение модуля при необходимости', 'проверка после внесения изменений'],
  },
  {
    id: 'frontend-slicing',
    label: 'верстка по готовому дизайну',
    min: 30000,
    max: 180000,
    timeline: '1-7 рабочих дней',
    priority: 16,
    keywords: [
      'только верстка',
      'верстка',
      'сверстать',
      'figma to html',
      'figma to react',
      'html css',
      'html css js',
      'layout from figma',
      'frontend layout',
      'адаптив нужен',
      'из figma',
    ],
    includes: ['верстка по Figma', 'адаптив', 'базовая интерактивность', 'подключение формы при необходимости'],
  },
  {
    id: 'wordpress-onepage-portfolio',
    label: 'одностраничное портфолио на WordPress',
    min: 20000,
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
      'сайт',
      'сделай сайт',
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
    min: 40000,
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
    id: 'marketplace',
    label: 'маркетплейс / платформа с ролями',
    min: 1200000,
    max: 7000000,
    timeline: '1.5-8 месяцев',
    priority: 18,
    keywords: [
      'маркетплейс',
      'marketplace',
      'multi vendor',
      'multi-vendor',
      'как kaspi',
      'как amazon',
      'как airbnb',
      'аналог kaspi',
      'аналог amazon',
      'аналог airbnb',
      'marketplace like',
      'like airbnb',
      'like amazon',
      'like kaspi',
      'clone of airbnb',
      'seller account',
      'продавцы',
      'покупатели',
      'роли продавцов',
    ],
    includes: ['MVP с ролями покупателей/продавцов', 'карточки товаров/услуг', 'заявки или заказы', 'простая админка', 'базовый поиск'],
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
      'как flipkart',
    ],
    includes: ['каталог', 'карточки товаров', 'корзина', 'заказы', 'админка'],
  },
  {
    id: 'node-postgres-backend',
    label: 'backend/API на Node.js с PostgreSQL',
    min: 100000,
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
    id: 'mobile-mvp',
    label: 'MVP мобильного приложения',
    min: 490000,
    max: 900000,
    timeline: '3-8 недель',
    priority: 17,
    keywords: [
      'мобильное mvp',
      'mvp мобильного',
      'mvp приложение',
      'mobile mvp',
      'app mvp',
      'простое приложение',
      'только mvp',
      'первая версия приложения',
      'first app version',
    ],
    includes: ['5-8 экранов', 'базовая авторизация', 'основная функция', 'простая база данных или подключение API', 'базовое тестирование'],
  },
  {
    id: 'mobile-delivery-app',
    label: 'мобильное приложение доставки еды',
    min: 1000000,
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
    min: 10000,
    max: 1160000,
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
      'поддержку сайта',
      'поддержка сайта помесячно',
      'техподдержка сайта',
      'поддерживать сайт',
      'обслуживание сайта',
      'website support',
      'site support',
      'monthly website support',
      'website maintenance',
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
    skipIf: [
      'анимация не нужна',
      'анимации не нужны',
      'анимаций не нужно',
      'без анимации',
      'без анимаций',
      'анимацию не надо',
      'анимации не надо',
      'анимации не нужны говорю же',
      'no animation',
      'no animations',
      'without animation',
      'without animations',
      'animation not needed',
      'animations not needed',
    ],
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
    keywords: ['оплат', 'оплата', 'kaspi', 'эквайринг', 'stripe', 'paypal', 'liqpay', 'payment', 'checkout', 'card payments', 'online payment', 'take cards', 'paid orders'],
    skipIf: [
      'без оплаты',
      'без онлайн оплаты',
      'без онлайн-оплаты',
      'нет оплаты',
      'нет онлайн оплаты',
      'оплата не нужна',
      'онлайн оплата не нужна',
      'не нужна оплата',
      'no payment',
      'no checkout',
      'payment not needed',
      'no online payment',
    ],
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
    min: 100000,
    max: 850000,
    keywords: ['node.js', 'node js', 'nestjs', 'express', 'backend', 'бэкенд'],
    skipIf: ['без backend', 'без бэкенд', 'backend готов', 'бэкенд готов', 'backend есть', 'бэкенд есть', 'no backend', 'backend ready', 'have backend'],
    includedIn: ['node-postgres-backend', 'custom-cms', 'mobile-delivery-app', 'mobile-mvp'],
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
    skipIf: ['без tracking', 'без отслеживания', 'no tracking', 'without tracking', 'без live tracking', 'no live tracking'],
    includedIn: ['existing-site-seo'],
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
    min: 10000,
    max: 10000,
    timeline: 'минимум 2 часа',
    minHours: 2,
    includes: ['новые функции', 'верстка', 'WordPress/Tilda', 'API', 'автоматизация'],
  },
  {
    label: 'мини-поддержка сайта',
    min: 74000,
    max: 74000,
    timeline: 'до 8 часов в месяц',
    monthlyHours: 8,
    includes: ['мелкие задачи', 'советы', 'проверки'],
  },
  {
    label: 'базовая поддержка сайта',
    min: 175000,
    max: 175000,
    timeline: 'до 20 часов в месяц',
    monthlyHours: 20,
    includes: ['мелкие правки', 'обновления', 'мониторинг'],
  },
  {
    label: 'бизнес-поддержка сайта',
    min: 330000,
    max: 330000,
    timeline: 'до 40 часов в месяц',
    monthlyHours: 40,
    includes: ['приоритет', 'небольшие доработки', 'отчет'],
  },
  {
    label: 'частичная занятость',
    min: 620000,
    max: 620000,
    timeline: 'до 80 часов в месяц',
    monthlyHours: 80,
    includes: ['поддержка сайта', 'небольшие фичи', 'правки', 'интеграции'],
  },
  {
    label: 'выделенный full-time разработчик',
    min: 1160000,
    max: 1160000,
    timeline: 'до 160 часов в месяц',
    monthlyHours: 160,
    includes: ['полное вовлечение', 'разработка продукта', 'техническая поддержка команды'],
  },
];

const EN_BUDGET_TIER_COPY = {
  'micro-start': {
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
  'security-fix': 'security audit and website recovery',
  'payment-fix': 'payment / WooCommerce checkout diagnostics',
  'form-fix': 'lead form / notification fix',
  'site-diagnostics': 'website bug diagnostics',
  'existing-site-seo': 'SEO improvements for an existing website',
  'existing-site-performance': 'speed optimization for an existing website',
  'existing-site-update': 'existing website improvements',
  'wordpress-onepage-portfolio': 'one-page WordPress portfolio site',
  'frontend-slicing': 'frontend layout from ready design',
  landing: 'landing page or service website',
  'simple-multipage': 'simple 3-4 page website with ready design',
  'wordpress-site': 'WordPress website',
  'tilda-site': 'Tilda website',
  business: 'business website',
  ecommerce: 'online store',
  marketplace: 'marketplace MVP or multi-role platform',
  'node-postgres-backend': 'Node.js backend/API with PostgreSQL',
  'custom-cms': 'custom CMS or web app',
  'mobile-mvp': 'mobile app MVP',
  'mobile-delivery-app': 'food delivery mobile app',
  'telegram-bot': 'Telegram bot',
  'ai-assistant': 'AI assistant for a website',
  'developer-retainer': 'monthly developer support',
  'module-work': 'modular website improvements from the price list',
};

const EN_ADDON_LABELS = {
  'custom-design': 'custom design from scratch',
  content: 'content/copy preparation',
  animations: 'advanced animations',
  multilingual: 'multilingual version',
  payment: 'online payment',
  integrations: 'external integrations',
  'auth-roles': 'authentication and user roles',
  'frontend-admin': 'frontend interface or admin panel',
  'node-backend': 'Node.js backend',
  postgres: 'PostgreSQL database',
  'server-setup': 'server setup and deployment',
  'analytics-seo': 'advanced SEO/analytics',
};

function getAddonLabel(addon, language) {
  return language === 'en' ? EN_ADDON_LABELS[addon.id] || addon.label : addon.label;
}

const QUESTION_SETS = {
  generic: [
    'Какой тип проекта нужен: лендинг, WordPress/Tilda, интернет-магазин, backend/API, CMS или AI-бот?',
    'Сколько страниц, товаров, ролей пользователей или основных экранов планируется на старте?',
    'Дизайн и контент уже готовы или их нужно делать с нуля?',
    'Нужны ли формы, оплата, мультиязычность, интеграции, личный кабинет или настройка сервера?',
  ],
  fixDiagnostics: [
    'Ссылка на сайт и на чем он сделан: WordPress, Tilda, custom или другое?',
    'Что именно сломалось и когда началось?',
    'Что меняли перед поломкой: обновления, плагины, тема, хостинг или код?',
    'Есть ли скрин/текст ошибки, доступы, backup или staging?',
  ],
  formFix: [
    'На чем сайт и какая форма сейчас стоит?',
    'Куда должны приходить заявки: email, Telegram, WhatsApp или CRM?',
    'Что именно происходит: форма не отправляет, письмо не приходит или ошибка видна пользователю?',
    'Есть ли доступ к админке и можно ли сделать тестовую заявку?',
  ],
  paymentFix: [
    'Какая платежная система и платформа: WooCommerce, Kaspi, Stripe, другой провайдер?',
    'Что видит клиент при оплате и есть ли текст ошибки?',
    'Когда началось и меняли ли плагины, ключи, SSL, webhook/callback или хостинг?',
    'Есть ли доступ к админке, логам и тестовому платежу?',
  ],
  securityFix: [
    'Что именно происходит: редирект, вирус, черный экран, чужой контент или предупреждение браузера?',
    'Сайт сейчас открывается и есть ли доступ к хостингу/админке?',
    'Есть ли backup до взлома и известно ли, когда началась проблема?',
    'На чем сайт: WordPress, Tilda, custom или другая CMS?',
  ],
  existingSiteSeo: [
    'Сайт на WordPress, Tilda или кастомной CMS?',
    'Что именно нужно улучшить: title/description, sitemap/robots, скорость, индексацию, редиректы или структуру страниц?',
    'Есть ли доступ к админке, Search Console/Метрике и текущий список проблем?',
  ],
  existingSitePerformance: [
    'Сайт на WordPress, Tilda или кастомной CMS?',
    'Что сейчас проседает: мобильная скорость, PageSpeed, изображения, плагины, сервер или Core Web Vitals?',
    'Есть ли доступ к админке/хостингу и можно ли делать backup/staging перед правками?',
  ],
  existingSiteUpdate: [
    'На чем сделан текущий сайт: WordPress, Tilda или кастомная CMS?',
    'Что именно нужно добавить или изменить: форму, оплату, страницу, язык, тексты, фото или интеграцию?',
    'Есть ли доступ к админке/хостингу и готовы ли материалы для правок?',
  ],
  frontendSlicing: [
    'Сколько макетов нужно сверстать: один блок, одна страница, лендинг или 3-5 страниц?',
    'Есть ли mobile-версия в Figma или адаптив нужно продумать самому?',
    'Нужны ли формы, анимации, отправка заявок в Telegram/email или только статичная верстка?',
  ],
  simpleSite: [
    'Сколько страниц нужно: одна, две или 3-4?',
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
  marketplace: [
    'Какие роли нужны в MVP: покупатель, продавец, администратор?',
    'Что должно быть в первом запуске: карточки, поиск, заявки/заказы, оплата, чат, рейтинг?',
    'Нужна ли онлайн-оплата и комиссия платформы сразу или можно начать с заявок?',
    'Есть ли готовый дизайн и контент для карточек/категорий?',
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
  mobileMvp: [
    'Какая одна главная функция должна работать в первой версии?',
    'Сколько экранов в MVP и готов ли дизайн под mobile?',
    'Backend/API уже есть или нужна простая база/Firebase/backend?',
    'Нужны ли публикация в App Store/Google Play, push, оплата или карты в первом этапе?',
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
  fixDiagnostics: [
    'Please send the site link and stack: WordPress, Tilda, custom or something else.',
    'What exactly is broken and when did it start?',
    'What changed before it broke: updates, plugins, theme, hosting or code?',
    'Do you have a screenshot/error text, access, backup or staging?',
  ],
  formFix: [
    'What platform is the site built on, and which form is used now?',
    'Where should leads go: email, Telegram, WhatsApp or CRM?',
    'What exactly happens: form does not submit, email does not arrive, or the user sees an error?',
    'Do you have admin access, and can we send a test lead?',
  ],
  paymentFix: [
    'Which payment provider and platform are used: WooCommerce, Kaspi, Stripe or something else?',
    'What does the customer see during payment, and is there an error text?',
    'When did it start, and were plugins, keys, SSL, webhook/callback or hosting changed?',
    'Do you have admin/log access and a way to make a test payment?',
  ],
  securityFix: [
    'What exactly is happening: redirect, malware, blank screen, injected content or browser warning?',
    'Is the site still opening, and do you have hosting/admin access?',
    'Is there a backup before the hack, and do you know when the issue started?',
    'What is the site built on: WordPress, Tilda, custom or another CMS?',
  ],
  existingSiteSeo: [
    'Is the site built on WordPress, Tilda, or a custom CMS?',
    'What should be improved: title/description, sitemap/robots, speed, indexing, redirects or page structure?',
    'Do you have admin access, Search Console/analytics access and a current issue list?',
  ],
  existingSitePerformance: [
    'Is the site built on WordPress, Tilda, or a custom CMS?',
    'What is weak now: mobile speed, PageSpeed, images, plugins, server or Core Web Vitals?',
    'Do you have admin/hosting access, and can we make a backup or staging copy before changes?',
  ],
  existingSiteUpdate: [
    'What is the current site built on: WordPress, Tilda or a custom CMS?',
    'What exactly should be added or changed: form, payment, page, language, texts, photos or integration?',
    'Do you have admin/hosting access and ready materials for the changes?',
  ],
  frontendSlicing: [
    'How many layouts should be built: one block, one page, landing page, or 3-5 pages?',
    'Is the mobile version ready in Figma, or should responsive behavior be designed during layout?',
    'Do you need forms, animations, Telegram/email leads, or only static layout?',
  ],
  simpleSite: [
    'How many pages are needed: one, two, or 3-4?',
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
  marketplace: [
    'Which roles are needed in the MVP: buyer, seller, admin?',
    'What should launch first: listings, search, leads/orders, payment, chat, ratings?',
    'Do you need online payment and platform commission now, or can MVP start with leads/orders?',
    'Are design and listing/category content ready?',
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
  mobileMvp: [
    'What is the one core function for the first version?',
    'How many screens are in the MVP, and is mobile design ready?',
    'Does backend/API already exist, or do you need a simple database/Firebase/backend?',
    'Do you need App Store/Google Play publishing, push, payments or maps in the first stage?',
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
    .replace(/до\s+(\d+)\s+часов\s+в\s+месяц/g, 'up to $1 hours/month')
    .replace(/(\d+)-(\d+)\s+часов\s+в\s+месяц/g, '$1-$2 hours/month')
    .replace(/(\d+)\s+часов\s+в\s+месяц/g, '$1 hours/month')
    .replace(/минимум\s+(\d+)\s+часа?/g, 'minimum $1 hours')
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

function getHiringOptionLabel(option, language) {
  if (language !== 'en') {
    return option.label;
  }

  const map = {
    'почасовая работа': 'hourly work',
    'мини-поддержка сайта': 'mini website support',
    'базовая поддержка сайта': 'basic website support',
    'бизнес-поддержка сайта': 'business website support',
    'частичная занятость': 'part-time support',
    'выделенный full-time разработчик': 'full-time developer',
  };

  return map[option.label] || option.label;
}

function getHiringOptionLine(option, language) {
  const label = getHiringOptionLabel(option, language);
  const amount = formatPriceRange(option.min, option.max, language);
  const timeline = formatTimeline(option.timeline, language);
  const isRu = language !== 'en';

  if (option.monthlyHours && option.min === option.max) {
    const hourlyKzt = Math.round(option.min / option.monthlyHours);
    const hourlyRate = formatPrice(hourlyKzt, language);
    return isRu
      ? `${label}: ${amount} в месяц, ${timeline} (эффективно ~${hourlyRate}/час)`
      : `${label}: ${amount} per month, ${timeline} (effective ~${hourlyRate}/hour)`;
  }

  if (option.minHours && option.min === option.max) {
    const hourlyRate = formatPrice(option.min, language);
    const minTotal = formatPrice(option.min * option.minHours, language);
    return isRu
      ? `${label}: ${hourlyRate}/час, ${timeline} (минимум чек ${minTotal})`
      : `${label}: ${hourlyRate}/hour, ${timeline} (minimum charge ${minTotal})`;
  }

  return `${label}: ${amount}, ${timeline}`;
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

function hasExplicitModulePricingIntent(text) {
  const normalized = normalizeText(text);

  if (/модул|module|по\s+прайс|price\s+list|чеклист|checklist|roadmap|поэтап|калькуляц|calculator/.test(normalized)) {
    return true;
  }

  const actionVerb = /доработ|улучш|оптимизац|аудит|исправ|фикс|подкрут|improve|optimization|optimi[sz]e|audit|fix|patch|tweak/;
  const moduleTarget = /seo|сео|каталог|catalog|поиск|search|фильтр|filter|speed|performance|core web vitals|sitemap|robots|schema|json-ld|редирект|redirect/;

  return actionVerb.test(normalized) && moduleTarget.test(normalized);
}

function shouldPreferModulePricing(text, primaryService) {
  const normalized = normalizeText(text);

  if (!hasModuleIntent(normalized)) {
    return false;
  }

  if (!hasExplicitModulePricingIntent(normalized)) {
    return false;
  }

  if (!primaryService) {
    return true;
  }

  if (
    [
      'ai-assistant',
      'telegram-bot',
      'mobile-delivery-app',
      'mobile-mvp',
      'developer-retainer',
      'landing',
      'simple-multipage',
      'wordpress-site',
      'wordpress-onepage-portfolio',
      'tilda-site',
    ].includes(primaryService.id)
  ) {
    return false;
  }

  if (primaryService.id === 'existing-site-seo') {
    return false;
  }

  if (['existing-site-performance', 'existing-site-update'].includes(primaryService.id)) {
    return false;
  }

  const explicitModuleIntent = hasExplicitModulePricingIntent(normalized);
  const newBuildIntent = /нов(ый|ого|ую)|с\s+нуля|нужен|сделай|создать|разработать|лендинг|landing|build|make|create|new\s+site|new\s+website/.test(
    normalized
  );

  if (newBuildIntent && !explicitModuleIntent) {
    return false;
  }

  return explicitModuleIntent;
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

  const aiAssistantIntentSignal =
    /(^|[^a-zа-я0-9])(ai|ии|gpt|gemini|openai|llm|chatbot|чатбот|chat|assistant|ассистент|ai-бот|ии-бот|бот\s+с\s+ai|бот\s+с\s+ии)($|[^a-zа-я0-9])/.test(text) ||
    /(бот|chatbot|assistant|ассистент|bot).*(должен|умеет|может|поним|отвеч|консульт|подсказ|recommend|understand|answer|assist|handle)/.test(text);

  if (item.id === 'ai-assistant' && !aiAssistantIntentSignal) {
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

function hasEcommerceNegation(text) {
  const normalized = normalizeText(text);

  return (
    /не\s+(интернет[-\s]?магазин|магазин|online\s+store|ecommerce|e-?com)|нет\s+(корзин|оплат|checkout|каталог|товар)|без\s+(корзин|оплат|checkout|каталог|товар|продаж|online\s+sales)|товар\w*\s+не\s+(буду|нужно|нужны|показывать|выкладывать)|не\s+буду\s+(показывать|продавать|выкладывать)\s+товар|не\s+продавать\s+(онлайн|через\s+сайт)|просто\s+(рекламировать|презентовать|показать)\s+магазин|сайт[-\s]?визитк|просто\s+сайт\s+визитк|просто\s+визитк|brochure\s+site|info\s+site/.test(
      normalized
    ) ||
    hasCatalogNegation(normalized) ||
    (hasBrochureSiteIntent(normalized) && hasPaymentNegation(normalized))
  );
}

function hasBrochureSiteIntent(text) {
  const normalized = normalizeText(text);

  return /сайт[-\s]?визитк|визитк|лендинг|landing|промо[-\s]?сайт|информационн\w*\s+сайт|ознакомительн\w*\s+сайт|просто\s+сайт|рекламировать\s+магазин|презентовать\s+магазин|показать\s+магазин|без\s+продаж|brochure\s+site|info\s+site|promo\s+site|business\s+site/.test(
    normalized
  );
}

function hasPaymentNegation(text) {
  const normalized = normalizeText(text);

  return /без\s+(?:онлайн[-\s]?)?оплат|нет\s+(?:онлайн[-\s]?)?оплат|оплат[а-яa-z0-9_-]*\s+не\s+нуж|не\s+нужн[аы]\s+(?:онлайн[-\s]?)?оплат|онлайн[-\s]?оплат[а-яa-z0-9_-]*\s+не\s+будет|no\s+(?:online\s+)?payment|no\s+checkout|without\s+(?:online\s+)?payment|payment\s+not\s+needed/.test(
    normalized
  );
}

function hasCatalogNegation(text) {
  const normalized = normalizeText(text);

  return /без\s+(?:больш[а-яa-z0-9_-]*\s+)?каталог|нет\s+каталог|каталог\s+(?:не\s+нуж|не\s+надо|нет)|не\s+нужен\s+каталог|товар[а-яa-z0-9_-]*\s+не\s+(?:буду|нужно|нужны|планир|показывать|выкладывать)|не\s+буду\s+(?:показывать|выкладывать)\s+товар|без\s+товар[а-яa-z0-9_-]*|no\s+catalog|no\s+products?|without\s+catalog|catalog\s+not\s+needed/.test(
    normalized
  );
}

function hasNonTechnicalClientSignal(text) {
  const normalized = normalizeText(text);

  return /не\s+разбира[а-яa-z0-9_-]*\s+(?:в\s+)?(?:дизайн|программ|сайт|техник|разработк)|не\s+понима[а-яa-z0-9_-]*\s+(?:в\s+)?(?:дизайн|программ|сайт|техник|разработк)|не\s+шарю|я\s+не\s+техническ|i'?m\s+not\s+technical|not\s+technical|don'?t\s+understand\s+(?:design|development|websites)/.test(
    normalized
  );
}

function hasWordPressNegation(text) {
  const normalized = normalizeText(text);

  return /не\s+(?:на\s+)?(?:wp|wordpress|вордпресс)|без\s+(?:wp|wordpress|вордпресс)|(?:wp|wordpress|вордпресс)\s+не\s+нуж|not\s+wordpress|no\s+wordpress|without\s+wordpress/.test(
    normalized
  );
}

function hasHtmlCssStackIntent(text) {
  const normalized = normalizeText(text);

  return /html\s*\/?\s*css|html\s+css|html\s+и\s+css|css\s+html|статичн[а-яa-z0-9_-]*\s+html|чист[а-яa-z0-9_-]*\s+html|vanilla\s+(?:html|css)|plain\s+html/.test(
    normalized
  );
}

function hasTrafficLandingSignal(text) {
  const normalized = normalizeText(text);

  return /гонять\s+трафик|под\s+трафик|для\s+трафик|лить\s+трафик|трафик|реклам[а-яa-z0-9_-]*\s+трафик|traffic|ads?|ad\s+traffic|lead\s+page|leadgen/.test(
    normalized
  );
}

function hasFreeTopicSignal(text) {
  const normalized = normalizeText(text);

  return /тема\s+свободн|тематика\s+свободн|любая\s+тема|тему\s+(?:можно\s+)?(?:выбрать|придумать)\s+сам|просто\s+чтобы\s+был\s+сайт|free\s+topic|any\s+topic|choose\s+the\s+topic/.test(
    normalized
  );
}

function hasDesignFromScratchIntent(text) {
  const normalized = normalizeText(text);

  return /дизайн\s+с\s+нуля|нужен\s+дизайн|дизайн\s+от\s+(?:вас|тебя|исполнителя)|без\s+готов[а-яa-z0-9_-]*\s+дизайн|no\s+design|need\s+design|design\s+from\s+scratch|custom\s+design/.test(
    normalized
  );
}

function hasAnimationNegation(text) {
  const normalized = normalizeText(text);

  return (
    /анимац[а-яa-z0-9_-]*\s+(?:не\s+нуж|не\s+надо|нет)|без\s+анимац|анимац[а-яa-z0-9_-]*\s+не\s+будет|анимац[а-яa-z0-9_-]*\s+не\s+дела|no\s+animations?|without\s+animations?|animations?\s+not\s+needed/.test(
      normalized
    ) ||
    /форм[а-яa-z0-9_-]*\s+и\s+анимац[а-яa-z0-9_-]*\s+не\s+нуж|анимац[а-яa-z0-9_-]*\s+и\s+форм[а-яa-z0-9_-]*\s+не\s+нуж/.test(normalized)
  );
}

function hasFormNegation(text) {
  const normalized = normalizeText(text);

  return (
    /форм[а-яa-z0-9_-]*\s+(?:не\s+нуж|не\s+надо|нет)|без\s+форм|форм[а-яa-z0-9_-]*\s+не\s+будет|форм[а-яa-z0-9_-]*\s+не\s+дела|заявк[а-яa-z0-9_-]*\s+не\s+нуж|no\s+forms?|without\s+forms?|forms?\s+not\s+needed|no\s+lead\s+form/.test(
      normalized
    ) ||
    /форм[а-яa-z0-9_-]*\s+и\s+анимац[а-яa-z0-9_-]*\s+не\s+нуж|анимац[а-яa-z0-9_-]*\s+и\s+форм[а-яa-z0-9_-]*\s+не\s+нуж/.test(normalized)
  );
}

function hasInteractivityNegation(text) {
  const normalized = normalizeText(text);

  return /интерактив[а-яa-z0-9_-]*\s+(?:не\s+нуж|не\s+надо|нет)|без\s+интерактив|js\s+не\s+нуж|javascript\s+не\s+нуж|no\s+interactivity|without\s+interactivity|no\s+javascript/.test(
    normalized
  );
}

function hasReadyMobileVersion(text) {
  const normalized = normalizeText(text);

  return /мобильн[а-яa-z0-9_-]*\s+верс[а-яa-z0-9_-]*\s+(?:есть|готов)|адаптив\s+(?:есть|готов)|mobile\s+(?:version|design)\s+(?:is\s+)?ready|have\s+(?:a\s+)?mobile\s+(?:version|design)|responsive\s+(?:is\s+)?ready/.test(
    normalized
  );
}

function hasRepeatedNegativeCorrection(text) {
  const normalized = normalizeText(text);

  return /(говорю\s+же|я\s+же\s+сказал|уже\s+сказал|повторяю|еще\s+раз|already\s+said|as\s+i\s+said)/.test(normalized);
}

function hasHtmlCssTrafficLandingIntent(text) {
  const normalized = normalizeText(text);

  return Boolean(
    hasHtmlCssStackIntent(normalized) &&
      parsePageCount(normalized) === 1 &&
      hasDesignFromScratchIntent(normalized) &&
      (hasTrafficLandingSignal(normalized) || hasFreeTopicSignal(normalized) || /лендинг|landing|сайт/.test(normalized)) &&
      !/figma|макет\s+(?:есть|готов)|готов[а-яa-z0-9_-]*\s+дизайн|design\s+ready|figma\s+ready/.test(normalized)
  );
}

function hasNewWebsiteBuildIntent(text) {
  const normalized = normalizeText(text);

  return /нужен\s+(?:нов[а-яa-z0-9_-]*\s+)?(?:одностраничн[а-яa-z0-9_-]*\s+)?сайт|хочу\s+(?:сделать|создать|заказать)\s+(?:одностраничн[а-яa-z0-9_-]*\s+)?сайт|сделать\s+(?:одностраничн[а-яa-z0-9_-]*\s+)?сайт|создать\s+(?:одностраничн[а-яa-z0-9_-]*\s+)?сайт|разработать\s+(?:одностраничн[а-яa-z0-9_-]*\s+)?сайт|сайт\s+(?:с\s+нуля|под\s+ключ)|build\s+(?:a\s+)?(?:new\s+)?(?:one[-\s]?page\s+)?(?:site|website)|create\s+(?:a\s+)?(?:new\s+)?(?:site|website)|need\s+(?:a\s+)?(?:new\s+)?(?:site|website)/.test(
    normalized
  );
}

function hasExistingSiteWorkIntent(text) {
  const normalized = normalizeText(text);
  const existingSignal = /существующ|уже\s+есть\s+сайт|есть\s+сайт|текущ|готов[а-яa-z0-9_-]*\s+сайт|мой\s+сайт|наш\s+сайт|existing|current|already\s+have/.test(normalized);
  const workSignal = /исправ|доработ|поменять|заменить|изменить|обновить|добавить|почин|фикс|fix|update|change|replace|add/.test(normalized);

  return existingSignal && workSignal && !hasNewWebsiteBuildIntent(normalized);
}

function filterServiceMatches(matches, text, pageCount) {
  const normalized = normalizeText(text);
  const existingSiteSignal = /существующ|уже\s+есть|текущ|готов\w*\s+сайт|сайт\s+уже\s+работает|мой\s+сайт|наш\s+сайт|стар|live\s+site|existing|current|already\s+have|ready\s+site/.test(normalized);
  const buildFromScratchIntent =
    hasNewWebsiteBuildIntent(normalized) ||
    /с\s+нуля|нов(ый|ого)\s+сайт|создать\s+сайт|сделать\s+сайт|разработать\s+сайт|build\s+(a\s+)?(new\s+)?(site|website)|new\s+(site|website)|from\s+scratch/.test(
      normalized
    );
  const isExplicitOnePage = /одностранич|1\s*странич|one[-\s]?page|1\s*(страниц|page|экран)|визитка/.test(normalized);
  const isPortfolio = /портфолио|portfolio/.test(normalized);
  const isWordPressIntent = /wordpress|вордпресс|\bwp\b/.test(normalized) && !hasWordPressNegation(normalized);
  const isHtmlCssTrafficLandingIntent = hasHtmlCssTrafficLandingIntent(normalized);
  const ecommerceNegation = hasEcommerceNegation(normalized);
  const brochureSiteIntent = hasBrochureSiteIntent(normalized);
  const isEcommerceIntent =
    !ecommerceNegation && /интернет[-\s]?магазин|woocommerce|каталог\s+товар|карточк\w*\s+товар|товар\w*\s+на\s+сайт|корзин|checkout|e-?com|ecomm|online store|webshop|products?/.test(normalized);
  const aiAssistantIntentSignal =
    /(^|[^a-zа-я0-9])(ai|ии|gpt|gemini|openai|llm|chatbot|чатбот|chat|assistant|ассистент|ai-бот|ии-бот|бот\s+с\s+ai|бот\s+с\s+ии)($|[^a-zа-я0-9])/.test(normalized) ||
    /(бот|chatbot|assistant|ассистент|bot).*(должен|умеет|может|поним|отвеч|консульт|подсказ|recommend|understand|answer|assist|handle)/.test(normalized);
  const isMobileMvpIntent = /mvp|первая\s+версия|только\s+mvp|без\s+live\s+tracking|без\s+отслежив/.test(normalized) && /приложен|mobile|app|ios|android/.test(normalized);
  const isHiringIntent = /нанять|программист|разработчик|аутстаф|постоянн|сопровождени|поддержк\w*\s+сайт|техподдержк\w*\s+сайт|обслуживание\s+сайта|помесячн|full[-\s]?time|part[-\s]?time|retainer|hire|developer|dev|engineer|contractor|freelancer|programmer|monthly|ongoing|long[-\s]?term|website support|site support|website maintenance/.test(normalized);
  const isExistingSeoIntent = /seo|сео|sitemap|robots|search console|мета|title|description|индексац|редирект|чпу|meta/.test(normalized) && (existingSiteSignal || !buildFromScratchIntent);
  const isExistingPerformanceIntent =
    /скорост|ускор|медлен|тормозит|pagespeed|page speed|performance|core web vitals|slow|speed/.test(normalized) &&
    /сайт|лендинг|wordpress|вордпресс|tilda|тильда|website|site|existing|current|already|уже\s+есть|существующ|ready\s+site/.test(normalized);
  const isExistingUpdateIntent =
    hasExistingSiteWorkIntent(normalized) &&
    /добавить|поменять|заменить|изменить|подключить|форма|заявк|оплат|страниц|язык|английск|текст|фото|интеграц|add|change|update|connect|payment|lead form|new page|language|texts?|photos?|integration/.test(normalized);
  const supportPriority = {
    'security-fix': /взлом|вирус|заражен|редиректит|malware|hacked|security|redirect hack/.test(normalized),
    'payment-fix': /оплата\s+не|не\s+проходит\s+оплат|checkout|woocommerce\s+оплат|woocommerce\s+payment|payment\s+(is\s+)?not|payment.*not working|payment\s+broken|broken\s+payment|checkout broken|checkout not working|woocommerce.*checkout|order not created|webhook/.test(normalized),
    'form-fix': /форма\s+не|заявк\w*\s+не\s+приход|заявк\w*\s+не\s+отправ|не\s+отправ.*заявк|письм\w*\s+не\s+приход|telegram-заявк|телеграм\s+заявк|заявк.*telegram|tilda.*заявк|form not|leads? not|emails? not/.test(normalized),
    'site-diagnostics': /ошибка\s*(500|404)|500\s+ошибка|404\s+ошибка|белый экран|сайт\s+не\s+откры|сайт\s+упал|после\s+обнов|обновить\s+плагин|почин|сломал|слом|ssl\s+не|https\s+не|error\s*(500|404)|white screen|site is down|website down|after update|plugin conflict|ssl issue|domain issue|broken/.test(normalized),
  };
  const prioritizedMatches = [...matches];
  const ensureService = (serviceId, condition) => {
    if (!condition || prioritizedMatches.some((service) => service.id === serviceId)) {
      return;
    }

    const service = SERVICES.find((item) => item.id === serviceId);
    if (service) {
      prioritizedMatches.unshift(service);
    }
  };

  ensureService('existing-site-seo', isExistingSeoIntent);
  ensureService('existing-site-performance', isExistingPerformanceIntent);
  ensureService('existing-site-update', isExistingUpdateIntent);
  ensureService('landing', isHtmlCssTrafficLandingIntent);

  return prioritizedMatches
    .filter((service) => {
      if (service.id === 'ecommerce' && ecommerceNegation) {
        return false;
      }

      if (service.id === 'ai-assistant' && isEcommerceIntent && !aiAssistantIntentSignal) {
        return false;
      }

    if (['security-fix', 'payment-fix', 'form-fix', 'site-diagnostics'].includes(service.id)) {
      return supportPriority[service.id];
    }

    if (service.id === 'existing-site-seo') {
      return isExistingSeoIntent;
    }

    if (service.id === 'existing-site-performance') {
      return isExistingPerformanceIntent;
    }

    if (service.id === 'existing-site-update') {
      return isExistingUpdateIntent;
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
      const supportOrder = ['security-fix', 'payment-fix', 'form-fix', 'site-diagnostics'];
      const aSupportIndex = supportOrder.indexOf(a.id);
      const bSupportIndex = supportOrder.indexOf(b.id);
      if (aSupportIndex !== -1 || bSupportIndex !== -1) {
        if (aSupportIndex === -1) return 1;
        if (bSupportIndex === -1) return -1;
        return aSupportIndex - bSupportIndex;
      }
      if (isExistingSeoIntent && a.id === 'existing-site-seo') return -1;
      if (isExistingSeoIntent && b.id === 'existing-site-seo') return 1;
      if (isExistingPerformanceIntent && a.id === 'existing-site-performance') return -1;
      if (isExistingPerformanceIntent && b.id === 'existing-site-performance') return 1;
      if (isExistingUpdateIntent && a.id === 'existing-site-update') return -1;
      if (isExistingUpdateIntent && b.id === 'existing-site-update') return 1;
      if (isHiringIntent && a.id === 'developer-retainer') return -1;
      if (isHiringIntent && b.id === 'developer-retainer') return 1;
      if (isMobileMvpIntent && a.id === 'mobile-mvp') return -1;
      if (isMobileMvpIntent && b.id === 'mobile-mvp') return 1;
      if (aiAssistantIntentSignal && a.id === 'ai-assistant') return -1;
      if (aiAssistantIntentSignal && b.id === 'ai-assistant') return 1;
      if (isHtmlCssTrafficLandingIntent && a.id === 'landing') return -1;
      if (isHtmlCssTrafficLandingIntent && b.id === 'landing') return 1;
      if (isWordPressIntent && isExplicitOnePage && a.id === 'wordpress-onepage-portfolio') return -1;
      if (isWordPressIntent && isExplicitOnePage && b.id === 'wordpress-onepage-portfolio') return 1;
      if (brochureSiteIntent && ['landing', 'wordpress-onepage-portfolio', 'simple-multipage', 'wordpress-site'].includes(a.id)) return -1;
      if (brochureSiteIntent && ['landing', 'wordpress-onepage-portfolio', 'simple-multipage', 'wordpress-site'].includes(b.id)) return 1;
      if (isEcommerceIntent && a.id === 'ecommerce') return -1;
      if (isEcommerceIntent && b.id === 'ecommerce') return 1;
      return 0;
    });
}

function hasExplicitTopicSwitch(text) {
  const normalized = normalizeText(text);
  return /(?:^|[^a-zа-я0-9])(?:теперь|другая задача|другой проект|новая задача|новый проект|отдельно|переключ(?:им|имся|иться)|сменим тему|switch topic|switch to|another project|new project|different task|separate project)(?:$|[^a-zа-я0-9])/.test(
    normalized
  );
}

function shouldPreservePreviousService(previousService, currentService, lastText) {
  if (!previousService || !currentService || previousService.id === currentService.id) {
    return false;
  }

  if (hasExplicitTopicSwitch(lastText)) {
    return false;
  }

  const normalized = normalizeText(lastText);
  if (previousService.id === 'ecommerce' && hasEcommerceNegation(normalized)) {
    return false;
  }

  const aiContext = previousService.id === 'ai-assistant' && /бот|chatbot|assistant|ai|ии|gpt|openai|gemini|llm/.test(normalized);
  const existingSiteContext =
    ['existing-site-seo', 'existing-site-performance', 'existing-site-update'].includes(previousService.id) &&
    /существующ|уже\s+есть|готов\w*\s+сайт|текущ|seo|сео|title|description|sitemap|robots|скорост|performance|доработ|обнов|fix|update/.test(normalized) &&
    !/нов(ый|ого|ую)|с\s+нуля|new\s+site|new\s+website|from\s+scratch/.test(normalized);
  const followUpSignal = /^(?:и|а|тогда|ок|хорошо|понял|ясно|нет|да)\b|например|сможет\s+ли|а\s+если|если|что\s+если|можно\s+ли|how\s+about|what\s+if|can\s+it|would\s+it/.test(
    normalized
  );

  return aiContext || existingSiteContext || followUpSignal;
}

function selectPrimaryServiceFromConversation(userMessages, fullNormalized, fallbackPageCount) {
  const fullMatches = filterServiceMatches(findMatches(fullNormalized, SERVICES), fullNormalized, fallbackPageCount);
  const fullPrimary = fullMatches[0] || null;

  if (hasHtmlCssTrafficLandingIntent(fullNormalized)) {
    return {
      serviceMatches: fullMatches,
      primaryService: fullMatches.find((service) => service.id === 'landing') || fullPrimary,
    };
  }

  const lastUserText = userMessages[userMessages.length - 1]?.content || '';
  const lastNormalized = normalizeText(lastUserText);
  const lastPageCount = parsePageCount(lastNormalized) || fallbackPageCount;
  const lastMatches = filterServiceMatches(findMatches(lastNormalized, SERVICES), lastNormalized, lastPageCount);
  const lastPrimary = lastMatches[0] || null;

  if (userMessages.length <= 1) {
    return {
      serviceMatches: lastMatches.length ? lastMatches : fullMatches,
      primaryService: lastPrimary || fullPrimary,
    };
  }

  const previousText = userMessages
    .slice(0, -1)
    .map((message) => message.content)
    .join(' ');
  const previousNormalized = normalizeText(previousText);
  const previousPageCount = parsePageCount(previousNormalized) || fallbackPageCount;
  const previousMatches = filterServiceMatches(findMatches(previousNormalized, SERVICES), previousNormalized, previousPageCount);
  const previousPrimary = previousMatches[0] || null;

  let primaryService = lastPrimary || fullPrimary || previousPrimary || null;
  let serviceMatches = lastMatches.length ? lastMatches : fullMatches;

  if (!lastPrimary && previousPrimary) {
    primaryService = previousPrimary;
    serviceMatches = previousMatches;
  }

  if (previousPrimary && lastPrimary && shouldPreservePreviousService(previousPrimary, lastPrimary, lastUserText)) {
    primaryService = previousPrimary;
    serviceMatches = previousMatches;
  }

  return { serviceMatches, primaryService };
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

  const rangeMatch = normalized.match(/(\d{1,3})\s*[-–]\s*(\d{1,3})\s*(страниц|pages|page|screens|screen|экран|раздел)/);
  if (rangeMatch) {
    return Number(rangeMatch[2]);
  }

  const match = normalized.match(/(\d{1,3})\s*(страниц|pages|page|screens|screen|экран|раздел)/);
  return match ? Number(match[1]) : null;
}

function parseBlockCount(text) {
  const normalized = normalizeText(text);
  const reverseMatch = normalized.match(/(?:блоков|блока|блок|sections?|blocks?)\s*(\d{1,3})/);
  if (reverseMatch) {
    return Number(reverseMatch[1]);
  }

  const rangeMatch = normalized.match(/(\d{1,3})\s*[-–]\s*(\d{1,3})\s*(блоков|блока|блок|sections?|blocks?)/);
  if (rangeMatch) {
    return Number(rangeMatch[2]);
  }

  const match = normalized.match(/(\d{1,3})\s*(блоков|блока|блок|sections?|blocks?)/);
  return match ? Number(match[1]) : null;
}

function parseProductCount(text) {
  const normalized = normalizeText(text);
  const reverseMatch = normalized.match(/(?:товаров|товара|товар|позици(?:й|и|я)|products?|items?|sku)\s*(\d{1,5})/);
  if (reverseMatch) {
    return Number(reverseMatch[1]);
  }

  const match = normalized.match(/(\d{1,5})\s*(товаров|товара|товар|позици(?:й|и|я)|products?|items?|sku)/);
  return match ? Number(match[1]) : null;
}

function parseBudget(text) {
  const normalized = normalizeText(text).replace(/\u00a0/g, ' ');
  const rubPerKzt = Number.isFinite(FX_RATES.RUB_PER_KZT) && FX_RATES.RUB_PER_KZT > 0 ? FX_RATES.RUB_PER_KZT : 0.19;
  const usdPerKzt = Number.isFinite(FX_RATES.USD_PER_KZT) && FX_RATES.USD_PER_KZT > 0 ? FX_RATES.USD_PER_KZT : 0.002;
  const englishMoneyContext =
    /budget|under|around|about|up to|can spend|ready to spend|quote|estimate|ballpark|roughly|approx|bucks?|dollars?|\$|website|site|landing|one\s+pager|bot|app|shop|store|ecom|marketplace|platform|mvp|airbnb|amazon|kaspi|dev|developer/.test(normalized) ||
    /\b(?:can|could|would)\s+you\s+(?:do|build|make)\s+(?:it\s+)?for\b/.test(normalized) ||
    /\b(?:run|cost|set\s+me\s+back)\b/.test(normalized);
  const currencyRegex = 'тенге|тг|₸|kzt|руб(?:\\.|лей|ля|ль)?|₽|usd|доллар(?:а|ов)?|dollar(?:s)?|buck(?:s)?|\\$';
  const scaleRegex = 'тыс|к|k|млн|миллион|миллиона|grand|g';

  const quantityRegex =
    'товар(?:ов|а)?|позици(?:й|и|я)|products?|items?|sku|страниц(?:ы|а)?|pages?|screens?|screen|экран(?:ов|а)?|sections?|blocks?|блок(?:ов|а)?|заказ(?:ов|а)?|orders?|users?|пользовател(?:ей|я)|клиент(?:ов|а)|clients?|курьер(?:ов|а)?|couriers?|ресторан(?:ов|а)?|restaurants?|рол(?:ей|и)|roles?|час(?:ов|а)?|hours?|дн(?:ей|я)|days?|месяц(?:ев|а)?|months?';
  const quantityStartPattern = new RegExp(`^(?:${quantityRegex})(?:$|[^a-zа-я0-9])`);
  const quantityAroundPattern = new RegExp(`(?:^|[^a-zа-я0-9])(?:${quantityRegex})(?:$|[^a-zа-я0-9])`);
  const budgetWordsPattern =
    /бюджет|выделил\w*|заплачу|потрачу|на\s+руках|примерно|около|порядка|до|за\s+\d|budget|can spend|ready to spend|under|around|about|up to|pay|spend|quote|estimate|cost|price|for\s+\d|set me back|run me/i;
  const patterns = [
    {
      hasBudgetContext: true,
      source:
        `(?:бюджет|выделил\\w*|заплачу|потрачу|на руках|budget|my budget is|budget is|can spend|ready to spend|under|around|about|roughly|approx|ballpark|up to|for|can you do(?: it)? for|could you do(?: it)? for|would you do(?: it)? for|can you build(?: it)? for|could you build(?: it)? for|would you build(?: it)? for|would it run me|how much would it run me|how much would it cost me|set me back)\\s*(?:заплатить|потратить|примерно|около|порядка|до|pay|spend)?\\s*(?<currency1>${currencyRegex})?\\s*(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})?\\s*(?<currency2>${currencyRegex})?`
    },
    {
      hasBudgetContext: false,
      source: `(?<currency1>${currencyRegex})\\s*(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})?`,
    },
    {
      hasBudgetContext: false,
      source: `(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})?\\s*(?<currency2>${currencyRegex})`,
    },
    {
      hasBudgetContext: false,
      source: `(?<amount>\\d[\\d\\s]*(?:[.,]\\d+)?)\\s*(?<scale>${scaleRegex})`,
    },
    {
      hasBudgetContext: false,
      source: `(?<amount>\\d[\\d\\s]{3,})\\s*(?<currency2>${currencyRegex})`,
    },
  ];
  const candidates = [];

  for (const pattern of patterns) {
    const regex = new RegExp(pattern.source, 'gi');

    for (const match of normalized.matchAll(regex)) {
      if (!match?.groups?.amount) {
        continue;
      }

      const rawNumber = match.groups.amount.replace(/\s/g, '').replace(',', '.');
      let value = Number(rawNumber);
      let scale = match.groups.scale || '';
      const currencyToken = `${match.groups.currency1 || ''} ${match.groups.currency2 || ''}`.trim();
      const matchedText = match[0] || '';
      const start = match.index || 0;
      const afterMatch = normalized.slice(start + matchedText.length).trim();
      const beforeMatch = normalized.slice(Math.max(0, start - 26), start);
      const aroundMatch = `${beforeMatch} ${matchedText} ${afterMatch.slice(0, 26)}`.trim();
      const detachedScale = !scale && afterMatch.match(/^(k|g|grand)\b/);

      if (detachedScale) {
        scale = detachedScale[1];
      }

      if (!Number.isFinite(value) || value <= 0) {
        continue;
      }

      const hasCurrency = Boolean(currencyToken);
      const trimmedAfter = afterMatch.replace(/^[\s,.:;!?+\-–—()[\]{}]+/, '');
      const quantityAfterMatch = quantityStartPattern.test(trimmedAfter);
      const quantityAroundMatch = quantityAroundPattern.test(aroundMatch);
      const hasBudgetWordsNear = budgetWordsPattern.test(aroundMatch);

      if (!hasCurrency && (quantityAfterMatch || (quantityAroundMatch && !hasBudgetWordsNear))) {
        continue;
      }

      if (!hasCurrency && scale && !pattern.hasBudgetContext && !hasBudgetWordsNear && !englishMoneyContext) {
        continue;
      }

      if (!hasCurrency && !scale && value < 1000 && !pattern.hasBudgetContext && !hasBudgetWordsNear) {
        continue;
      }

      if (!hasCurrency && /^[\d\s.,]+[кk](?:$|[^a-zа-я0-9])/i.test(matchedText.trim()) && value < 10 && !englishMoneyContext && !hasBudgetWordsNear) {
        continue;
      }

      if (/млн|миллион/.test(scale)) {
        value *= 1000000;
      } else if (/тыс|к|k|grand|g/.test(scale)) {
        value *= 1000;
      }

      let valueKzt = Math.round(value);

      if (/руб|₽/.test(currencyToken)) {
        valueKzt = Math.round(value / rubPerKzt);
      } else if (/usd|доллар|dollar|buck|\$/.test(currencyToken) || /grand|g/.test(scale) || (englishMoneyContext && /\bk\b/.test(scale))) {
        valueKzt = Math.round(value / usdPerKzt);
      }

      if (!Number.isFinite(valueKzt) || valueKzt <= 0) {
        continue;
      }

      let confidence = 0;
      if (hasCurrency) confidence += 6;
      if (pattern.hasBudgetContext || hasBudgetWordsNear) confidence += 4;
      if (scale) confidence += 2;
      if (englishMoneyContext) confidence += 1;

      candidates.push({
        valueKzt,
        confidence,
        index: start,
      });
    }
  }

  if (!candidates.length) {
    return null;
  }

  candidates.sort((a, b) => b.confidence - a.confidence || b.index - a.index);
  return candidates[0].valueKzt;
}

function parseBudgetFromUserMessages(userMessages) {
  for (let index = userMessages.length - 1; index >= 0; index -= 1) {
    const value = parseBudget(userMessages[index]?.content || '');
    if (Number.isFinite(value) && value > 0) {
      return value;
    }
  }

  return null;
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function detectTechnologies(text) {
  const normalized = normalizeText(text);
  const technologies = [];

  if (hasHtmlCssStackIntent(normalized)) technologies.push('HTML/CSS');
  if (hasAny(normalized, ['wordpress', 'вордпресс', 'wp', 'woocommerce']) && !hasWordPressNegation(normalized)) technologies.push('WordPress');
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

function normalizeTechnologiesForService(technologies, service, lastUserText) {
  if (!service) {
    return technologies;
  }

  const normalizedLast = normalizeText(lastUserText || '');
  const hasAiInCurrentTurn = /(^|[^a-zа-я0-9])(ai|ии|gpt|openai|gemini|llm|chatbot|чатбот|assistant|ассистент)($|[^a-zа-я0-9])/.test(normalizedLast);
  const hasMobileInCurrentTurn = /(^|[^a-zа-я0-9])(ios|android|mobile|app|приложен)($|[^a-zа-я0-9])/.test(normalizedLast);

  let result = [...technologies];

  if (service.id !== 'ai-assistant' && !hasAiInCurrentTurn) {
    result = result.filter((tech) => tech !== 'AI/LLM');
  }

  if (!['mobile-delivery-app', 'mobile-mvp'].includes(service.id) && !hasMobileInCurrentTurn) {
    result = result.filter((tech) => tech !== 'iOS/Android');
  }

  return unique(result);
}

function getQuestionSet(service) {
  if (!service) return QUESTION_SETS.generic;
  if (service.id === 'security-fix') return QUESTION_SETS.securityFix;
  if (service.id === 'payment-fix') return QUESTION_SETS.paymentFix;
  if (service.id === 'form-fix') return QUESTION_SETS.formFix;
  if (service.id === 'site-diagnostics') return QUESTION_SETS.fixDiagnostics;
  if (service.id === 'existing-site-seo') return QUESTION_SETS.existingSiteSeo;
  if (service.id === 'existing-site-performance') return QUESTION_SETS.existingSitePerformance;
  if (service.id === 'existing-site-update') return QUESTION_SETS.existingSiteUpdate;
  if (service.id === 'frontend-slicing') return QUESTION_SETS.frontendSlicing;
  if (service.id === 'ecommerce') return QUESTION_SETS.ecommerce;
  if (service.id === 'marketplace') return QUESTION_SETS.marketplace;
  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') return QUESTION_SETS.backend;
  if (service.id === 'mobile-mvp') return QUESTION_SETS.mobileMvp;
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
  if (service.id === 'security-fix') return QUESTION_SETS_EN.securityFix;
  if (service.id === 'payment-fix') return QUESTION_SETS_EN.paymentFix;
  if (service.id === 'form-fix') return QUESTION_SETS_EN.formFix;
  if (service.id === 'site-diagnostics') return QUESTION_SETS_EN.fixDiagnostics;
  if (service.id === 'existing-site-seo') return QUESTION_SETS_EN.existingSiteSeo;
  if (service.id === 'existing-site-performance') return QUESTION_SETS_EN.existingSitePerformance;
  if (service.id === 'existing-site-update') return QUESTION_SETS_EN.existingSiteUpdate;
  if (service.id === 'frontend-slicing') return QUESTION_SETS_EN.frontendSlicing;
  if (service.id === 'ecommerce') return QUESTION_SETS_EN.ecommerce;
  if (service.id === 'marketplace') return QUESTION_SETS_EN.marketplace;
  if (service.id === 'node-postgres-backend' || service.id === 'custom-cms') return QUESTION_SETS_EN.backend;
  if (service.id === 'mobile-mvp') return QUESTION_SETS_EN.mobileMvp;
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

function isSimpleSiteService(service) {
  return ['landing', 'wordpress-site', 'tilda-site', 'simple-multipage', 'wordpress-onepage-portfolio'].includes(service?.id);
}

function getProjectFacts(text) {
  const normalized = normalizeText(text);
  const readyDesign = /дизайн(?:\s+и\s+(?:тексты|контент|материалы|фото))?\s+готов[аы]?|дизайн\s+(готов|есть)|готовый\s+дизайн|figma\s+(есть|готов)|макет\s+(есть|готов)|design ready|have design|got design|already have design|figma ready/.test(normalized);
  const clientProvidesMaterials =
    /(?:данн[а-яa-z0-9_-]*|материал[а-яa-z0-9_-]*|текст[а-яa-z0-9_-]*|фото|контент[а-яa-z0-9_-]*)\s+(?:я|мы)?\s*(?:сам|сами|самостоятельно)\s+(?:предостав[а-яa-z0-9_-]*|дам|дадим|скину|пришлю)|(?:я|мы)?\s*(?:сам|сами|самостоятельно)\s+(?:предостав[а-яa-z0-9_-]*|дам|дадим|скину|пришлю)\s+(?:данн[а-яa-z0-9_-]*|материал[а-яa-z0-9_-]*|текст[а-яa-z0-9_-]*|фото|контент[а-яa-z0-9_-]*)|client\s+will\s+provide|i\s+will\s+provide|we\s+will\s+provide/.test(
      normalized
    );
  const noMaterials =
    /нет\s+(?:никаких\s+)?(?:данн|материал|текст|фото|контент|дизайн|макет)|ничего\s+нет|пока\s+нет\s+(?:данн|материал|текст|фото|контент|дизайн|макет)|no\s+(design|content|copy|texts?|photos?|materials)|nothing\s+ready/.test(
      normalized
    );
  const turnkey = /под\s+ключ|полностью\s+под\s+ключ|полностью\s+все|turnkey|full\s+build|end[-\s]?to[-\s]?end/.test(normalized);
  const readyContent =
    clientProvidesMaterials ||
    /(?:тексты|контент|материалы|фото|данные)(?:\s+и\s+дизайн)?\s+готов[ы]?|тексты\s+есть|контент\s+есть|материалы\s+есть|данные\s+есть|content ready|copy ready|text ready|photos ready|materials ready|have content|have copy|have materials/.test(
      normalized
    );
  const needsDesign =
    noMaterials ||
    /дизайн\s+с\s+нуля|нет\s+дизайн|без\s+дизайн|нужен\s+(дизайн|макет)|no design|need design|custom design|from scratch|need ui/.test(normalized);
  const noBackend = /backend\s+(нет|не\s+готов)|бэкенд\s+(нет|не\s+готов)|серверн\w*\s+част[ьи]\s+(нет|не\s+готов)|нет\s+(еще\s+)?backend|нет\s+(еще\s+)?бэкенд|нет\s+еще|no backend|backend is not ready|need backend/.test(normalized);
  const readyBackend = /backend\s+(готов|есть)|бэкенд\s+(готов|есть)|серверн\w*\s+част[ьи]\s+(готов|есть)|api\s+(готов|есть)|backend ready|have backend|api ready/.test(normalized);
  const existingSite = /существующ[а-я]*\s+сайт|есть\s+сайт|уже\s+есть\s+сайт|сайт\s+уже\s+работает|текущ[а-я]*\s+сайт|готов(ый|ого)?\s+сайт|мой\s+сайт|наш\s+сайт|стар[а-я]*\s+сайт|existing\s+(site|website)|current\s+(site|website)|already\s+have\s+(a\s+)?(site|website)/.test(normalized);
  const bothPlatforms = /ios.*android|android.*ios|на\s+обоих|обе\s+платформ|both platforms|ios and android|android and ios/.test(normalized);
  const customerCourierRoles = /клиент|курьер|courier|customer/.test(normalized);
  const adminPanel = /админ|admin panel|dashboard|панель/.test(normalized);
  const payment = /kaspi|каспи|оплат|payment|checkout|card/.test(normalized);
  const realtimeTracking = /карта|геолокац|отслеж|движени\w*\s+курьер|real[-\s]?time|live tracking|map|geolocation/.test(normalized);
  const push = /push|пуш|уведомлен|notification/.test(normalized);
  const urgent = /срочн|горит|сегодня|завтра|ночью|ночь|к\s+утру|до\s+вечера|за\s+день|asap|urgent|rush|today|tomorrow|tonight|by\s+morning|same\s+day|next\s+day/.test(normalized);
  const noOnlinePayment = hasPaymentNegation(normalized);
  const noCatalog = hasCatalogNegation(normalized);
  const nonTechnicalClient = hasNonTechnicalClientSignal(normalized);
  const noAnimations = hasAnimationNegation(normalized);
  const noForms = hasFormNegation(normalized);
  const noInteractivity = hasInteractivityNegation(normalized);
  const readyMobileVersion = hasReadyMobileVersion(normalized);
  const repeatedNegativeCorrection = hasRepeatedNegativeCorrection(normalized) && (noAnimations || noForms || noInteractivity);

  return {
    readyDesign,
    readyContent,
    needsDesign,
    clientProvidesMaterials,
    noMaterials,
    turnkey,
    noBackend,
    readyBackend,
    existingSite,
    bothPlatforms,
    customerCourierRoles,
    adminPanel,
    payment,
    noOnlinePayment,
    noCatalog,
    noAnimations,
    noForms,
    noInteractivity,
    readyMobileVersion,
    realtimeTracking,
    push,
    urgent,
    nonTechnicalClient,
    repeatedNegativeCorrection,
  };
}

function getProvidedByClient(facts, language) {
  const isRu = language !== 'en';
  const provided = [];

  if (facts.readyDesign) {
    provided.push(isRu ? 'готовый дизайн' : 'ready design');
  }

  if (facts.readyContent) {
    provided.push(
      facts.clientProvidesMaterials
        ? isRu
          ? 'материалы предоставляет клиент'
          : 'client provides materials'
        : isRu
          ? 'готовые тексты/материалы'
          : 'ready content/materials'
    );
  }

  if (facts.readyBackend) {
    provided.push(isRu ? 'готовый backend/API' : 'ready backend/API');
  }

  if (facts.existingSite) {
    provided.push(isRu ? 'существующий сайт' : 'existing website');
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
    excluded.push(isRu ? 'копирайтинг и подготовка материалов с нуля' : 'copywriting and content preparation from scratch');
  }

  if (facts.readyBackend && !facts.noBackend) {
    excluded.push(isRu ? 'разработка backend с нуля' : 'backend development from scratch');
  }

  if (facts.existingSite) {
    excluded.push(isRu ? 'создание нового сайта/лендинга с нуля' : 'new website/landing build from scratch');
  }

  return excluded;
}

function getLeadNiche(text) {
  const normalized = normalizeText(text);

  if (/евро\s*мебел|euromebel|euro\s*furniture/.test(normalized)) return 'евро мебель';
  if (/мебел|furniture/.test(normalized)) return 'мебель';
  if (/сантехник|сануз|ванн|смесител|раковин|унитаз|душ|plumb|bathroom|sanitary/.test(normalized)) return 'сантехника';
  if (/одежд|бутик|fashion|clothing|apparel/.test(normalized)) return 'магазин одежды';
  if (/посуд|кухонн|cookware|kitchenware|tableware/.test(normalized)) return 'кухонная посуда';
  if (/магазин|store|shop/.test(normalized)) return 'магазин';
  return null;
}

function getLeadPlatform(text, service) {
  const normalized = normalizeText(text);

  if (hasHtmlCssStackIntent(normalized)) return 'HTML/CSS';
  if (/tilda|тильда/.test(normalized) || service?.id === 'tilda-site') return 'Tilda';
  if ((/wordpress|вордпресс|\bwp\b/.test(normalized) || service?.id === 'wordpress-site' || service?.id === 'wordpress-onepage-portfolio') && !hasWordPressNegation(normalized)) return 'WordPress';
  if (isSimpleSiteService(service)) return 'WordPress';
  return null;
}

function buildLeadState(text, service, facts, pageCount) {
  const normalized = normalizeText(text);
  const simpleSite = isSimpleSiteService(service);
  const brochureConfirmed = hasBrochureSiteIntent(normalized) || /просто\s+визитк|только\s+визитк|визитк[а-яa-z0-9_-]*\s+нуж|brochure/.test(normalized);
  const noOnlinePayment = facts.noOnlinePayment || hasPaymentNegation(normalized);
  const noCatalog = facts.noCatalog || hasCatalogNegation(normalized) || (brochureConfirmed && noOnlinePayment);
  const noEcommerce = hasEcommerceNegation(normalized) || (brochureConfirmed && (noOnlinePayment || noCatalog));
  const hasHostingAnswer = /домен|хостинг|hosting|domain|сервер|ssl/.test(normalized);
  const hasMaterialsAnswer =
    facts.readyContent ||
    facts.noMaterials ||
    facts.clientProvidesMaterials ||
    /фото|текст|контент|материал|данн|логотип|photos?|texts?|content|materials?|logo/.test(normalized);
  const hasStartDateAnswer = /старт|начать|запуск|срок|дедлайн|когда|сегодня|завтра|недел|месяц|start|launch|deadline|timeline/.test(normalized);
  let nextQuestion = null;

  if (simpleSite && brochureConfirmed && pageCount && (noOnlinePayment || noCatalog || noEcommerce)) {
    if (!hasHostingAnswer) {
      nextQuestion = 'домен и хостинг';
    } else if (!hasMaterialsAnswer) {
      nextQuestion = 'материалы';
    } else if (!hasStartDateAnswer) {
      nextQuestion = 'дата старта';
    }
  }

  return {
    niche: getLeadNiche(normalized),
    type: brochureConfirmed ? 'сайт-визитка' : simpleSite ? 'простой сайт' : service?.label || null,
    pageCount: pageCount || null,
    format: facts.turnkey || facts.nonTechnicalClient ? 'под ключ' : null,
    platform: getLeadPlatform(normalized, service),
    noOnlinePayment,
    noCatalog,
    noEcommerce,
    nonTechnicalClient: facts.nonTechnicalClient,
    hasHostingAnswer,
    hasMaterialsAnswer,
    nextQuestion,
  };
}

function hasConfirmedBrochureSiteState(leadState, service) {
  return Boolean(
    isSimpleSiteService(service) &&
      leadState?.type === 'сайт-визитка' &&
      leadState.pageCount &&
      leadState.pageCount >= 2 &&
      leadState.pageCount <= 3 &&
      (leadState.noOnlinePayment || leadState.noCatalog || leadState.noEcommerce) &&
      (leadState.format || leadState.nonTechnicalClient || leadState.niche)
  );
}

function getMissingQuestions(text, service) {
  const normalized = normalizeText(text);
  const questions = getQuestionSet(service);
  const facts = getProjectFacts(normalized);

  if (!service) {
    return questions;
  }

  const pageCount = parsePageCount(normalized);
  const hasDesign = facts.readyDesign || facts.needsDesign || facts.turnkey || /figma|макет|дизайн готов|готовый дизайн|есть дизайн|дизайн с нуля|без дизайна|шаблон|template|брендбук|с нуля|design ready|have design|no design|custom design|from scratch|brand book/.test(normalized);
  const hasContent = facts.readyContent || facts.noMaterials || /контент|тексты|фото|материал|данн|копирайт|логотип|content|copy|text|photos|materials|logo/.test(normalized);
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

  if (['landing', 'wordpress-site', 'tilda-site', 'simple-multipage', 'wordpress-onepage-portfolio'].includes(service.id)) {
    return questions.filter((question) => {
      if (question.includes('Сколько страниц')) return !pageCount;
      if (question.includes('Дизайн')) return !hasDesign;
      if (question.includes('блоки')) return !(pageCount || facts.turnkey || /визитк|одежд|магазин|контакт|форма|о\s+нас|услуг|hero|about|contacts|lead/.test(normalized));
      if (question.includes('Тексты')) return !hasContent;
      if (question.includes('мультиязычность')) return !(hasFeatures || facts.turnkey || /без\s+оплат|без\s+каталог|без\s+продаж|визитк|одежд|магазин|контакт|форма|telegram|whatsapp|seo|домен|хостинг/.test(normalized));
      return true;
    });
  }

  if (service.id === 'marketplace') {
    return questions.filter((question) => {
      if (question.includes('роли')) return !/покупател|продавц|админ|buyer|seller|admin|role/.test(normalized);
      if (question.includes('первом запуске')) return !/карточк|поиск|заявк|заказ|оплат|чат|рейтинг|listing|search|lead|order|payment|chat|rating/.test(normalized);
      if (question.includes('онлайн-оплата')) return !hasFeatures;
      if (question.includes('дизайн')) return !(facts.readyDesign || facts.needsDesign || hasContent);
      return true;
    });
  }

  if (['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id)) {
    return questions.filter((question) => {
      if (question.includes('Ссылка') || question.includes('На чем') || question.includes('Какая платежная') || question.includes('Сайт сейчас')) {
        return !/ссылк|http|wordpress|вордпресс|wp|tilda|тильда|custom|кастом|woocommerce|kaspi|stripe|cloudpayments|хостинг|админ/.test(normalized);
      }
      if (question.includes('сломалось') || question.includes('происходит') || question.includes('видит клиент') || question.includes('именно происходит')) {
        return !/слом|ошиб|не\s+работ|не\s+приход|не\s+отправ|не\s+проход|500|404|белый экран|редирект|вирус|форма|оплат|заявк/.test(normalized);
      }
      if (question.includes('меняли') || question.includes('Когда началось')) {
        return !/после|обнов|начал|сегодня|вчера|недел|плагин|тема|хостинг|код|когда/.test(normalized);
      }
      if (question.includes('скрин') || question.includes('доступ') || question.includes('backup')) {
        return !/скрин|текст ошибки|доступ|админ|лог|backup|staging|бэкап|хостинг|тестов/.test(normalized);
      }
      return true;
    });
  }

  if (service.id === 'existing-site-seo') {
    return questions.filter((question) => {
      if (question.includes('WordPress')) return !/wordpress|вордпресс|wp|tilda|тильда|cms|кастом/.test(normalized);
      if (question.includes('Что именно')) return !/seo|сео|title|description|sitemap|robots|скорост|индексац|редирект|чпу|мета/.test(normalized);
      if (question.includes('доступ')) return !/доступ|админ|search console|метрик|analytics|список проблем|audit|аудит/.test(normalized);
      return true;
    });
  }

  if (service.id === 'existing-site-performance') {
    return questions.filter((question) => {
      if (question.includes('WordPress')) return !/wordpress|вордпресс|wp|tilda|тильда|cms|кастом/.test(normalized);
      if (question.includes('проседает')) return !/скорост|ускор|медлен|тормозит|pagespeed|page speed|core web vitals|изображ|плагин|сервер/.test(normalized);
      if (question.includes('backup')) return !/доступ|админ|хостинг|backup|staging|бэкап|сервер/.test(normalized);
      return true;
    });
  }

  if (service.id === 'existing-site-update') {
    return questions.filter((question) => {
      if (question.includes('сделан')) return !/wordpress|вордпресс|wp|tilda|тильда|cms|кастом/.test(normalized);
      if (question.includes('именно')) return !/форма|заявк|оплат|страниц|язык|английск|текст|фото|интеграц|telegram|whatsapp|crm|form|lead|payment|page|language|texts?|photos?|integration/.test(normalized);
      if (question.includes('доступ')) return !/доступ|админ|хостинг|материал|текст|фото|готов/.test(normalized);
      return true;
    });
  }

  if (service.id === 'frontend-slicing') {
    return questions.filter((question) => {
      if (question.includes('макетов')) return !(pageCount || parseBlockCount(normalized));
      if (question.includes('mobile')) return !(facts.readyMobileVersion || /адаптив|mobile|responsive|мобильн/.test(normalized));
      if (question.includes('формы')) return !(facts.noForms || facts.noAnimations || facts.noInteractivity || hasFeatures);
      return true;
    });
  }

  if (service.id === 'mobile-mvp') {
    return questions.filter((question) => {
      if (question.includes('главная функция')) return !/доставк|заказ|каталог|бронь|чат|карта|оплат|delivery|order|booking|chat|map|payment/.test(normalized);
      if (question.includes('экранов')) return !(pageCount && (facts.readyDesign || facts.needsDesign));
      if (question.includes('Backend')) return !(facts.readyBackend || facts.noBackend);
      if (question.includes('публикация')) return !hasFeatures;
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
    if (question.includes('Сколько страниц')) return !pageCount;
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
  const hasDesign = facts.readyDesign || facts.needsDesign || facts.turnkey || /figma|template|design ready|have design|got design|already have design|figma ready|no design|custom design|from scratch|brand book|need ui/.test(normalized);
  const hasContent = facts.readyContent || facts.noMaterials || /content ready|copy ready|text ready|photos ready|materials ready|have content|have copy|have texts?|have photos|got the copy|got photos|content is ready|copy is ready|data|materials/.test(normalized);
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

  if (['landing', 'wordpress-site', 'tilda-site', 'simple-multipage', 'wordpress-onepage-portfolio'].includes(service.id)) {
    return questions.filter((question) => {
      if (question.includes('How many pages')) return !pageCount;
      if (question.includes('design')) return !hasDesign;
      if (question.includes('blocks')) return !(pageCount || facts.turnkey || /brochure|clothing|shop|store|contacts?|form|about|hero|lead/.test(normalized));
      if (question.includes('texts') || question.includes('photos')) return !hasContent;
      if (question.includes('SEO')) return !(hasFeatures || hasHosting || facts.turnkey || /brochure|clothing|shop|store|contacts?|form|no\s+(cart|payment|catalog|products?)/.test(normalized));
      return true;
    });
  }

  if (service.id === 'marketplace') {
    return questions.filter((question) => {
      if (question.includes('roles')) return !/buyer|seller|admin|roles?|покупател|продавц|админ/.test(normalized);
      if (question.includes('launch first')) return !/listings?|search|leads?|orders?|payment|chat|ratings?|карточк|поиск|заявк|заказ|оплат/.test(normalized);
      if (question.includes('online payment')) return !hasFeatures;
      if (question.includes('design')) return !(facts.readyDesign || facts.needsDesign || hasContent);
      return true;
    });
  }

  if (['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id)) {
    return questions.filter((question) => {
      if (question.includes('site link') || question.includes('platform') || question.includes('payment provider') || question.includes('site still')) {
        return !/https?:|wordpress|wp|tilda|custom|woocommerce|kaspi|stripe|cloudpayments|hosting|admin/.test(normalized);
      }
      if (question.includes('broken') || question.includes('happens') || question.includes('customer see') || question.includes('exactly is happening')) {
        return !/broken|error|not working|doesn'?t work|not sending|not arriving|not created|500|404|blank screen|redirect|malware|form|payment|lead/.test(normalized);
      }
      if (question.includes('changed') || question.includes('When did')) {
        return !/after|update|started|today|yesterday|week|plugin|theme|hosting|code|when/.test(normalized);
      }
      if (question.includes('screenshot') || question.includes('access') || question.includes('backup')) {
        return !/screenshot|error text|access|admin|logs?|backup|staging|hosting|test/.test(normalized);
      }
      return true;
    });
  }

  if (['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id)) {
    if (language === 'en') {
      const map = {
        'site-diagnostics': ['diagnostics through admin/logs', 'theme/plugin and hosting/SSL check', 'backup/staging check', 'cause report', 'fix plan with price'],
        'form-fix': ['form check', 'email/SMTP/Telegram check', 'submission error check', 'notification setup', 'test lead'],
        'payment-fix': ['checkout diagnostics', 'payment plugin/API key check', 'SSL/webhook/callback check', 'log review', 'fix estimate after diagnostics'],
        'security-fix': ['security audit', 'file/plugin/user check', 'logs and backup review', 'cleanup plan', 'basic hardening of found weak points'],
      };
      return map[service.id];
    }

    const map = {
      'site-diagnostics': ['диагностика админки/логов', 'проверка темы/плагинов и хостинга/SSL', 'проверка backup/staging', 'описание причины', 'план фикса с ценой'],
      'form-fix': ['проверка формы', 'проверка email/SMTP/Telegram', 'проверка ошибок отправки', 'настройка уведомлений', 'тестовая заявка'],
      'payment-fix': ['диагностика checkout', 'проверка платежного плагина/API-ключей', 'проверка SSL/webhook/callback', 'проверка логов', 'оценка фикса после диагностики'],
      'security-fix': ['security-аудит', 'проверка файлов/плагинов/пользователей', 'проверка логов и backup', 'план чистки', 'базовое закрытие найденных слабых мест'],
    };
    return map[service.id];
  }

  if (service.id === 'existing-site-seo') {
    return questions.filter((question) => {
      if (question.includes('WordPress')) return !/wordpress|wp|tilda|cms|custom/.test(normalized);
      if (question.includes('improved')) return !/seo|title|description|sitemap|robots|speed|indexing|redirect|technical/.test(normalized);
      if (question.includes('access')) return !/access|admin|search console|analytics|issue list|audit/.test(normalized);
      return true;
    });
  }

  if (service.id === 'existing-site-performance') {
    return questions.filter((question) => {
      if (question.includes('WordPress')) return !/wordpress|wp|tilda|cms|custom/.test(normalized);
      if (question.includes('weak')) return !/speed|slow|pagespeed|page speed|core web vitals|images?|plugins?|server|performance/.test(normalized);
      if (question.includes('backup')) return !/access|admin|hosting|backup|staging|server/.test(normalized);
      return true;
    });
  }

  if (service.id === 'existing-site-update') {
    return questions.filter((question) => {
      if (question.includes('current site')) return !/wordpress|wp|tilda|cms|custom/.test(normalized);
      if (question.includes('exactly')) return !/form|lead|payment|page|language|texts?|photos?|integration|telegram|whatsapp|crm/.test(normalized);
      if (question.includes('access')) return !/access|admin|hosting|materials?|texts?|photos?|ready/.test(normalized);
      return true;
    });
  }

  if (service.id === 'frontend-slicing') {
    return questions.filter((question) => {
      if (question.includes('layouts')) return !(pageCount || parseBlockCount(normalized));
      if (question.includes('mobile')) return !(facts.readyMobileVersion || /responsive|mobile|адаптив|мобильн/.test(normalized));
      if (question.includes('forms')) return !(facts.noForms || facts.noAnimations || facts.noInteractivity || hasFeatures);
      return true;
    });
  }

  if (service.id === 'mobile-mvp') {
    return questions.filter((question) => {
      if (question.includes('core function')) return !/delivery|order|catalog|booking|chat|map|payment|доставк|заказ|каталог|бронь|чат|карта|оплат/.test(normalized);
      if (question.includes('screens')) return !(pageCount && (facts.readyDesign || facts.needsDesign));
      if (question.includes('backend/API')) return !(facts.readyBackend || facts.noBackend);
      if (question.includes('publishing')) return !hasFeatures;
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
    if (question.includes('How many pages')) return !pageCount;
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
  const hasMaintenance = /исправ|баг|ошибк|чинить|фикс|правк|поддержк|рефактор|додел|сломал|сломалась|сломался|сломано|не\s+работает|fix|bug|bugfix|patch|repair|maintain|maintenance|update|tweak|refactor|broken|site\s+is\s+down|not\s+working|doesn'?t\s+work|crashed/.test(
    normalized
  );
  const hasOldProject = /стар|существующ|чуж|готов(ый|ого)|текущ|уже есть|мой сайт|наш сайт|old|existing|current|legacy|someone else|third[-\s]?party|my site|our site|already have|built by/.test(normalized);
  const hasSeoIntent = /seo|сео|title|description|meta|мета|sitemap|robots|search console|индексац|чпу|canonical|schema/.test(normalized);
  const hasFeatureWork = /доработ|улучш|оптимизац|нов(ый|ая|ое)\s+раздел|добавить\s+страниц|add\s+page|new\s+page|expand|feature/.test(normalized);

  return hasMaintenance && hasOldProject && !hasSeoIntent && !hasFeatureWork;
}

function isOldAuditRequest(text) {
  const normalized = normalizeText(text);
  const hasAuditIntent = /аудит|диагност|разобраться|провер|посмотр|готов\w*\s+оплат|платн\w*\s+аудит|paid audit|audit first|diagnostic|code review|investigation/.test(normalized);

  return isOldMaintenanceRequest(normalized) && hasAuditIntent;
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
  const aiSingleScope = /(?:бот|chatbot|assistant|ai|ии).*(должен|уме|может|should|can|needs to|handle)/.test(normalized);
  const connectorPattern =
    /\+|и\s+еще|также|плюс|вместе|сразу|одновременно|all\s+at\s+once|plus|also|together|and\s+also|along\s+with|вместе\s+с|with\s+(?:payment|crm|backend|admin|telegram\s+bot)/;

  if (aiSingleScope && !/\+|плюс|и\s+еще|также|вместе|одновременно|all\s+at\s+once|plus|also|together|and\s+also/.test(normalized)) {
    return false;
  }

  return signals.filter(Boolean).length >= 2 && connectorPattern.test(normalized);
}

function isCasualOrContactRequest(text) {
  const normalized = normalizeText(text).trim();

  return /^(?:ну\s+|а\s+|и\s+вообще\s+|кстати\s+|btw\s+)?(ты\s+кто|кто\s+ты|ты\s+человек|что\s+умеешь|как\s+дела|контакты|как\s+связаться|telegram|телеграм|портфолио|покажи\s+портфолио|где\s+портфолио|напиши\s+(мне\s+)?в\s+(telegram|телеграм)|давай(те)?\s+в\s+(telegram|телеграм)|кинь\s+(telegram|телеграм)|скинь\s+(telegram|телеграм)|who\s+are\s+you|are\s+you\s+human|what\s+can\s+you\s+do|contact|contacts|how\s+to\s+contact|show\s+(me\s+)?portfolio|portfolio|where\s+is\s+portfolio|send\s+(me\s+)?your\s+telegram|let'?s\s+move\s+to\s+telegram)[\s?.!]*$/.test(
    normalized
  );
}

function isShortPriceProbe(text) {
  const normalized = normalizeText(text).trim();
  const words = normalized.split(/\s+/).filter(Boolean);
  const hasPriceIntent = /сколько|цена|стоим|почем|how much|price|cost|quote/.test(normalized);
  const hasShortScope = /сайт|лендинг|tilda|тильд|wordpress|вордпресс|wp|магазин|бот|ai|ии|приложен|верстк|website|site|landing|store|shop|bot|app|layout/.test(normalized);

  return hasPriceIntent && hasShortScope && words.length <= 7;
}

function isUnsafeFixRequest(text) {
  const normalized = normalizeText(text);

  return /взломай|достань\s+баз|укради|слей\s+данн|обойди\s+защит|hack|steal|dump\s+(database|db)|bypass\s+security|scrape\s+personal|spam\s+bot/.test(normalized);
}

function isPromptInjectionRequest(text) {
  const normalized = normalizeText(text);

  return /игнорир[а-яa-z]*(?:\s+[a-zа-я0-9_-]+){0,4}\s+(правил|инструкц)|забудь(?:\s+[a-zа-я0-9_-]+){0,3}\s+(правил|инструкц)|скажи\s+что\s+.*бесплат|скажи\s+цен[а-яa-z]*\s*1\s*(тенге|₸)|цен[а-яa-z]*\s*1\s*(тенге|₸)|за\s+1\s*тенге|внутренн[а-яa-z]*\s+(инструкц|prompt|промпт)|покажи(?:\s+[a-zа-я0-9_-]+){0,4}\s+(системн|внутренн).*(инструкц|prompt|промпт)|покажи(?:\s+[a-zа-я0-9_-]+){0,3}\s+(токен|токены|ключ|ключи)|api\s*key|system\s+prompt|ignore(?:\s+[a-zа-я0-9_-]+){0,4}\s+(rules|instructions)|forget(?:\s+[a-zа-я0-9_-]+){0,3}\s+(rules|instructions)|show(?:\s+[a-zа-я0-9_-]+){0,4}\s+(system|internal).*(prompt|instructions)|show(?:\s+[a-zа-я0-9_-]+){0,4}\s+(api\s*key|token|tokens|secret|secrets)|say\s+it'?s\s+free|make\s+it\s+free|internal\s+(rules|instructions|prompt)/.test(
    normalized
  );
}

function isUpworkContactMoveRequest(text) {
  const normalized = normalizeText(text);

  return /(upwork|апворк).*(telegram|телеграм)| (telegram|телеграм).*(upwork|апворк)|\bupwork\b/.test(normalized);
}

function isGuaranteeRequest(text) {
  const normalized = normalizeText(text);

  return /гарант|гарантия|не\s+сломает|никогда\s+не\s+слом|100%\s*(точн|правильн)|топ\s+google|top\s+google|guarantee|warranty|never\s+break|100%\s+accurate|always\s+correct/.test(normalized);
}

function isReadyToStartRequest(text) {
  const normalized = normalizeText(text);

  return /давай(те)?\s+нач(нем|инаем)|готов(ы)?\s+(начать|оплатить|заказать)|куда\s+оплат|как\s+начать|берем|start\s+now|let'?s\s+start|ready\s+to\s+(start|pay)|where\s+do\s+i\s+pay|how\s+do\s+we\s+start/.test(normalized);
}

function buildUnsafeFixReply(language) {
  if (language === 'en') {
    return [
      'I cannot help with hacking, bypassing protection, stealing databases or spam.',
      'I can help with legal defensive work: security audit, malware cleanup, backup, access hardening, or a compliant lead form/bot.',
      'What legal task do you need: audit, recovery, protection, or a normal parser for open data?',
    ].join('\n\n');
  }

  return [
    'С взломом, обходом защиты, кражей базы или спамом я не помогаю.',
    'Могу помочь легально: security-аудит, чистка вирусов, backup, усиление доступов или нормальная форма/бот для заявок.',
    'Что нужно в легальном формате: аудит, восстановление, защита или парсер открытых данных?',
  ].join('\n\n');
}

function buildPromptInjectionReply(language) {
  if (language === 'en') {
    return [
      'I can estimate the project only by the normal rules: task, scope, deadline and budget.',
      'I cannot change minimum prices, promise free development or share internal instructions.',
      'If the task is real, send the project type, example and deadline - I will suggest a realistic minimal option.',
    ].join('\n\n');
  }

  return [
    'Я могу считать проект только по обычным правилам: задача, объем, срок и бюджет.',
    'Минимальные цены, бесплатную разработку и внутренние инструкции я не меняю и не раскрываю.',
    'Если задача реальная, скиньте тип проекта, пример и срок - предложу минимальный рабочий вариант.',
  ].join('\n\n');
}

function buildGuaranteeReply(language) {
  if (language === 'en') {
    return [
      'I can give a warranty for my own work, not for hosting, future plugin updates, third-party APIs or changes made after delivery.',
      'For small fixes it is usually 3-7 days; for agreed project functionality it is usually 7-14 days. If the issue repeats because of my fix, I correct it for free.',
      'What exactly do you need a guarantee for: a fix, a website launch, SEO, payment flow or AI answers?',
    ].join('\n\n');
  }

  return [
    'Гарантию можно дать на мою работу, но не на хостинг, будущие обновления плагинов, сторонние API или правки после сдачи.',
    'Топ Google за срок и 100% безошибочные ответы AI обещать нельзя: это зависит от алгоритмов, данных и внешних факторов.',
    'По мелким фиксам обычно 3-7 дней, по согласованному функционалу проекта 7-14 дней. Если проблема повторится из-за моего фикса - поправлю бесплатно.',
    'На что именно нужна гарантия: фикс, запуск сайта, SEO, оплата или ответы AI-бота?',
  ].join('\n\n');
}

function buildReadyToStartReply(language) {
  if (language === 'en') {
    return [
      'Good. To start cleanly, send the brief, example/link, deadline and budget.',
      'If this is not an Upwork-style platform, the fastest next step is Telegram: https://t.me/Berliyn_h. Send the materials there and Dias will confirm the exact price and first milestone.',
    ].join('\n\n');
  }

  return [
    'Хорошо. Чтобы стартовать нормально, скиньте задачу, пример/ссылку, срок и бюджет.',
    'Если это не Upwork/биржа, быстрее всего написать Диасу в Telegram: https://t.me/Berliyn_h. Туда можно отправить материалы, и он подтвердит точную цену и первый этап.',
  ].join('\n\n');
}

function buildUpworkContactReply(language) {
  if (language === 'en') {
    return [
      'Before an active Upwork contract, it is safer to keep discussion here on the platform.',
      'After the contract starts, we can move to Telegram for faster coordination if needed.',
      'Send the scope, budget and deadline here, and I will prepare a clear estimate and first milestone.',
    ].join('\n\n');
  }

  return [
    'До активного контракта на Upwork лучше обсуждать задачу прямо в чате площадки.',
    'После старта контракта можно перейти в Telegram для удобной координации.',
    'Скиньте здесь объем, бюджет и срок - я дам понятную оценку и первый этап.',
  ].join('\n\n');
}

function isSupportService(service) {
  return ['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service?.id);
}

function buildShortPriceReply(text, language) {
  const normalized = normalizeText(text);
  const isRu = language !== 'en';
  const line = (min, normalMin, normalMax, questionRu, questionEn) =>
    isRu
      ? `Минимально от ${formatPrice(min, language)}, нормальный вариант ${formatPriceRange(normalMin, normalMax, language)}. ${questionRu}`
      : `Starts around ${formatPrice(min, language)}, a normal range is ${formatPriceRange(normalMin, normalMax, language)}. ${questionEn}`;

  if (/tilda|тильд/.test(normalized)) {
    return line(35000, 60000, 90000, 'Вам нужна 1 страница или несколько?', 'Do you need one page or several pages?');
  }

  if (/wordpress|вордпресс|wp/.test(normalized)) {
    return line(50000, 80000, 180000, 'Сколько страниц и есть ли готовые тексты/дизайн?', 'How many pages, and are design/content ready?');
  }

  if (/магазин|store|shop|ecom|woocommerce/.test(normalized)) {
    return line(290000, 390000, 550000, 'Сколько товаров и нужна ли онлайн-оплата?', 'How many products, and do you need online payment?');
  }

  if (/ai|ии|gpt|бот.*ai|ai.*bot/.test(normalized)) {
    return line(190000, 290000, 500000, 'Бот нужен на сайте или в Telegram, и будет ли база знаний?', 'Should it work on the website or Telegram, and do you need a knowledge base?');
  }

  if (/бот|bot/.test(normalized)) {
    return line(25000, 50000, 180000, 'Что должен делать бот: меню, заявки, CRM, оплата или AI?', 'What should the bot do: menu, leads, CRM, payment or AI?');
  }

  if (/приложен|mobile|app/.test(normalized)) {
    return line(240000, 490000, 890000, 'Что должно быть в первой версии?', 'What should be in the first version?');
  }

  if (/верстк|layout|figma/.test(normalized)) {
    return line(30000, 50000, 90000, 'Есть Figma и мобильная версия?', 'Do you have Figma and a mobile version?');
  }

  return line(50000, 80000, 180000, 'Сколько страниц нужно и есть ли пример?', 'How many pages do you need, and do you have an example?');
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

function buildOldAuditReply(language) {
  if (language === 'en') {
    return [
      'Yes, this format is workable: first a paid audit/diagnostic, then a separate estimate for the fix.',
      'During the audit I would check the codebase, hosting, logs, broken flow and risks. After that there are two honest options: a small focused fix, or rebuilding the broken module cleanly.',
      'I would not promise a fixed bugfix price before the audit, because legacy code can hide extra work. Send the link, access details, symptoms and deadline in Telegram: https://t.me/Berliyn_h.',
    ].join('\n\n');
  }

  return [
    'Да, такой формат нормальный: сначала платный аудит/диагностика, потом отдельная оценка фикса.',
    'На аудите я бы проверил код, хостинг, логи, сломанный сценарий и риски. После этого честные варианты: маленький точечный фикс или чистая пересборка проблемного модуля.',
    'Фикс-прайс до аудита я бы не обещал, потому что в старом коде объем часто всплывает по ходу. Скиньте ссылку, доступы, симптомы и срок в Telegram: https://t.me/Berliyn_h.',
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
  const small = formatPrice(50000, language);
  const medium = formatPriceRange(50000, 150000, language);

  if (language === 'en') {
    return [
      'Full payment only after completion is not a format I use, but we can make it safe through milestones.',
      `Typical terms: up to ${small} - full prepayment; ${medium} - 50/50; larger projects - milestones with a clear scope. Urgent tasks and live-site diagnostics require prepayment.`,
      'Send the task, budget and deadline in Telegram: https://t.me/Berliyn_h. I will suggest a staged payment plan and two scope options.',
    ].join('\n\n');
  }

  return [
    'Полностью после результата я не работаю, но можно сделать безопасно через этапы.',
    `Обычно так: до ${small} - 100% предоплата; ${medium} - 50/50; крупные проекты - milestones с понятным объемом. Срочные задачи и диагностика live-сайта идут по предоплате.`,
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

  if (['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id)) {
    return { level: service.id === 'security-fix' || service.id === 'payment-fix' ? 'сложная' : 'средняя', reasons: ['сначала нужна диагностика, backup/staging для live-сайта и проверка причины'] };
  }

  if (service.id === 'existing-site-seo') {
    return { level: 'средняя', reasons: ['работа идет с существующим сайтом, поэтому сначала важны аудит, доступы и список SEO-проблем'] };
  }

  if (service.id === 'existing-site-performance') {
    return { level: 'средняя', reasons: ['работа идет с существующим сайтом, поэтому нужны аудит скорости, backup и аккуратные правки'] };
  }

  if (service.id === 'existing-site-update') {
    return { level: 'средняя', reasons: ['это доработка текущего сайта, а не создание нового проекта'] };
  }

  if (['ecommerce', 'marketplace', 'custom-cms', 'node-postgres-backend', 'mobile-delivery-app'].includes(service.id)) {
    reasons.push('есть backend, база данных или бизнес-логика');
  }

  if (hasAny(normalized, ['оплата', 'авторизац', 'личный кабинет', 'роли', 'интеграц', 'crm', 'postgres', 'node', 'карта', 'курьер', 'push', 'ios', 'android'])) {
    reasons.push('есть функции, которые требуют серверной логики и тестирования');
  }

  if (addons.length >= 3) {
    reasons.push('несколько дополнительных модулей в одной задаче');
  }

  if (reasons.length || ['ecommerce', 'marketplace', 'custom-cms', 'node-postgres-backend', 'mobile-delivery-app'].includes(service.id)) {
    return { level: 'сложная', reasons: unique(reasons) };
  }

  if (service.id === 'mobile-mvp') {
    return { level: 'средняя', reasons: ['мобильная разработка даже в MVP требует сборки, тестирования и интеграции API'] };
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

  if (['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id)) {
    return {
      bestFit: 'диагностика причины, безопасный план фикса и только потом точная цена исправления',
      canOffer: [
        'сделать мини-диагностику по ссылке, скрину и описанию',
        'проверить админку, логи, плагины, форму, оплату или хостинг по задаче',
        'перед рискованными правками сделать backup или staging',
        'дать точную причину, цену фикса и срок после проверки',
      ],
      notIncluded: [
        'фикс-прайс вслепую без доступа и логов',
        'рискованные правки на live-сайте без backup',
        'покупка платных плагинов, лицензий или услуг провайдера',
        'гарантия, что сайт никогда больше не сломается',
      ],
      recommendation: 'продавать сначала диагностику или маленький безопасный фикс; сложные правки считать после проверки',
    };
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

  if (service.id === 'marketplace') {
    return {
      bestFit: 'MVP маркетплейса: роли, карточки, заявки/заказы и простая админка без тяжелой продуктовой логики',
      canOffer: [
        'собрать ТЗ, user flow и структуру ролей',
        'сделать кликабельный прототип или минимальную витрину с заявками',
        'запустить ограниченный MVP без платежной комиссии, чата, рейтингов и сложного поиска',
        'разбить полноценную платформу на этапы: каталог, продавцы, оплата, админка, модерация',
      ],
      notIncluded: [
        'полный аналог Kaspi/Airbnb/Amazon',
        'многосторонние платежи и комиссия платформы',
        'сложный поиск, рейтинги, чат, споры и модерация',
        'масштабируемая архитектура production-уровня под большие нагрузки',
      ],
      recommendation: 'не обещать полный маркетплейс за маленький бюджет; продать MVP или подготовительный этап и честную дорожную карту',
    };
  }

  if (service.id === 'mobile-mvp') {
    return {
      bestFit: 'первая версия приложения с одной ключевой функцией и ограниченным числом экранов',
      canOffer: [
        'собрать 5-8 экранов по готовому дизайну',
        'подключить готовый backend/API или простую базу',
        'оставить только главный пользовательский сценарий',
        'отложить карты, сложные роли, оплату, аналитику и публикацию на следующий этап',
      ],
      notIncluded: [
        'полноценная продуктовая версия iOS/Android',
        'live tracking, сложная карта и courier flow',
        'полная админ-панель и много ролей',
        'сложные платежи и интеграции',
      ],
      recommendation: 'сначала запускать узкий MVP, а после проверки спроса расширять приложение модулями',
    };
  }

  if (service.id === 'mobile-delivery-app') {
    return {
      bestFit: 'discovery + MVP-срез: один ключевой пользовательский сценарий без полной продуктовой сборки',
      canOffer: [
        'собрать техническое ТЗ и архитектуру (клиент, курьер, заказы, статусы)',
        'прототипировать 1-2 ключевых потока и карту релиза по этапам',
        'сделать подготовительный backend-скелет или один критичный API-модуль',
        'оценить отдельными этапами: мобильные клиенты, админка, оплата, real-time tracking, push',
      ],
      notIncluded: [
        'полноценные iOS+Android приложения под ключ',
        'production backend со всеми ролями и админкой',
        'online-оплата + realtime tracking + push как полностью готовый продукт',
        'публикация и поддержка полного релиза в этот бюджет',
      ],
      recommendation: 'не обещать full delivery app в один этап; запускать через discovery и узкий MVP, затем масштабировать по модулям',
    };
  }

  return null;
}

function getEnglishServiceBudgetScope(service) {
  if (!service) {
    return null;
  }

  if (['site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id)) {
    return {
      bestFit: 'diagnose the cause, prepare a safe fix plan, then quote the exact repair',
      canOffer: [
        'run a mini-diagnosis using the link, screenshot and symptoms',
        'check admin area, logs, plugins, forms, payment or hosting depending on the issue',
        'make a backup or staging copy before risky live-site changes',
        'give the exact cause, fix price and timeline after checking',
      ],
      notIncluded: [
        'blind fixed-price repair without access and logs',
        'risky live-site edits without backup',
        'paid plugins, licenses or provider-side costs',
        'a guarantee that the whole site will never break again',
      ],
      recommendation: 'start with diagnostics or a small safe fix; price complex repairs after inspection',
    };
  }

  if (service.id === 'marketplace') {
    return {
      bestFit: 'marketplace MVP: roles, listings, leads/orders and a simple admin panel without heavy platform logic',
      canOffer: [
        'prepare scope, user flow and role structure',
        'build a clickable prototype or a minimal listing site with leads',
        'launch a limited MVP without platform commission, chat, ratings and advanced search',
        'split the full platform into phases: catalog, sellers, payments, admin and moderation',
      ],
      notIncluded: [
        'a full Kaspi/Airbnb/Amazon-style platform',
        'multi-party payments and platform commission logic',
        'advanced search, ratings, chat, disputes and moderation',
        'production-scale architecture for heavy traffic',
      ],
      recommendation: 'do not promise a full marketplace on a small budget; sell an MVP or discovery phase with an honest roadmap',
    };
  }

  if (service.id === 'mobile-mvp') {
    return {
      bestFit: 'first app version with one core function and a limited number of screens',
      canOffer: [
        'build 5-8 screens from ready design',
        'connect an existing backend/API or a simple database',
        'keep only the main user flow',
        'move maps, complex roles, payments, analytics and store publishing to the next phase',
      ],
      notIncluded: [
        'full iOS/Android product version',
        'live tracking, complex map and courier flow',
        'full admin panel and many roles',
        'complex payments and integrations',
      ],
      recommendation: 'launch a narrow MVP first, then expand the app by modules after demand is validated',
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
    service && (budget < min || ['telegram-bot', 'ai-assistant', 'node-postgres-backend', 'custom-cms', 'site-diagnostics', 'form-fix', 'payment-fix', 'security-fix'].includes(service.id))
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

  if (facts.readyBackend && ['mobile-delivery-app', 'mobile-mvp', 'custom-cms', 'node-postgres-backend'].includes(service.id)) {
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
  const lastUserText = userMessages[userMessages.length - 1]?.content || '';
  const normalized = normalizeText(text);
  const facts = getProjectFacts(normalized);
  const pageCount = parsePageCount(normalized);
  const blockCount = parseBlockCount(normalized);
  const productCount = parseProductCount(normalized);
  const velorMatches = shouldUseVelorPricing(normalized) ? findVelorMatches(normalized) : [];
  const velorSummary = summarizeVelorMatches(velorMatches);
  const itsngMatches = shouldUseItsngPricing(normalized) ? findItsngMatches(normalized) : [];
  const itsngSummary = velorSummary || !isItsngSummaryReliable(normalized, itsngMatches) ? null : summarizeItsngMatches(itsngMatches);
  const { primaryService } = selectPrimaryServiceFromConversation(userMessages, normalized, pageCount);
  const moduleSummaryCandidate = velorSummary || itsngSummary;
  const useModuleSummary = Boolean(moduleSummaryCandidate && shouldPreferModulePricing(normalized, primaryService));
  const activeVelorSummary = useModuleSummary ? velorSummary : null;
  const activeItsngSummary = useModuleSummary ? itsngSummary : null;
  const service = useModuleSummary ? MODULE_SERVICE : primaryService;
  const leadState = buildLeadState(normalized, service, facts, pageCount);
  const isHiring = service?.id === 'developer-retainer';
  const addonMatches = isHiring || isSupportService(service)
    ? []
    : findMatches(normalized, ADDONS).filter((addon) => {
        if (isAddonIncluded(service, addon)) {
          return false;
        }
        if (facts.noAnimations && addon.id === 'animations') {
          return false;
        }
        return true;
      });
  const technologies = normalizeTechnologiesForService(detectTechnologies(normalized), service, lastUserText);
  const budget = parseBudgetFromUserMessages(userMessages) ?? parseBudget(normalized);
  const missingQuestions = getMissingQuestions(normalized, service);
  const missingQuestionsEn = getMissingQuestionsEn(normalized, service);
  const projectRequest = isProjectRequest(normalized);
  const hasMvpReadyInputs = service?.id === 'mobile-mvp' && pageCount && (facts.readyDesign || facts.readyBackend);
  const hasFrontendReadyInputs =
    service?.id === 'frontend-slicing' && (pageCount || blockCount) && /figma|макет|верстк|адаптив|responsive|html|css/.test(normalized);
  const hasExistingSeoReadyInputs =
    service?.id === 'existing-site-seo' && /seo|сео|sitemap|robots|search console|мета|title|description|индексац|редирект|чпу|скорост/.test(normalized);
  const hasExistingPerformanceReadyInputs =
    service?.id === 'existing-site-performance' && /скорост|ускор|медлен|тормозит|pagespeed|page speed|performance|slow|core web vitals/.test(normalized);
  const hasExistingUpdateReadyInputs =
    service?.id === 'existing-site-update' && /форма|заявк|оплат|страниц|язык|английск|текст|фото|интеграц|payment|lead form|new page|language|texts?|photos?/.test(normalized);
  const hasSupportReadyInputs =
    isSupportService(service) && /ошиб|слом|не\s+работ|не\s+приход|не\s+отправ|не\s+проход|500|404|белый экран|взлом|вирус|форма|заявк|оплат|ssl|домен|error|broken|not working|not sending|not arriving|payment|checkout|hacked|malware|domain/.test(normalized);
  const shouldAskFirst =
    projectRequest &&
    userMessages.length <= 1 &&
    !budget &&
    !isHiring &&
    !hasMvpReadyInputs &&
    !hasFrontendReadyInputs &&
    !hasExistingSeoReadyInputs &&
    !hasExistingPerformanceReadyInputs &&
    !hasExistingUpdateReadyInputs &&
    !hasSupportReadyInputs &&
    missingQuestions.length > 0;
  const addonMin = addonMatches.reduce((sum, item) => sum + item.min, 0);
  const addonMax = addonMatches.reduce((sum, item) => sum + item.max, 0);
  const catalogExtra = service?.id === 'ecommerce' && productCount > 30 ? Math.min(300000, (productCount - 30) * 1500) : 0;
  const baseMin = moduleSummaryCandidate?.minKzt || 0;
  const baseMax = moduleSummaryCandidate?.maxKzt || 0;
  const rawMin = useModuleSummary ? baseMin : service ? service.min + addonMin + catalogExtra : null;
  const rawMax = useModuleSummary ? baseMax : service ? service.max + addonMax + catalogExtra * 2 : null;
  const adjusted = applyReadyMaterialsDiscount({ min: rawMin, max: rawMax, service, facts });
  const urgentSupportMultiplier = isSupportService(service) && facts.urgent ? (/ноч|к\s+утру|tonight|by\s+morning/.test(normalized) ? 2 : 1.5) : 1;
  let min = adjusted.min && urgentSupportMultiplier > 1 ? Math.max(urgentSupportMultiplier >= 2 ? 70000 : 50000, Math.round(adjusted.min * urgentSupportMultiplier)) : adjusted.min;
  let max = adjusted.max && urgentSupportMultiplier > 1 ? Math.round(adjusted.max * urgentSupportMultiplier) : adjusted.max;
  const hasWordPressIntroLandingInputs = isWordPressIntroLandingText(normalized, service);
  if (hasWordPressIntroLandingInputs) {
    const rubPerKzt = Number.isFinite(FX_RATES.RUB_PER_KZT) && FX_RATES.RUB_PER_KZT > 0 ? FX_RATES.RUB_PER_KZT : 0.19;
    min = Math.round(15000 / rubPerKzt);
    max = Math.round(30000 / rubPerKzt);
  }
  const hasHtmlCssTrafficLandingInputs = isHtmlCssTrafficLandingText(normalized, service);
  if (hasHtmlCssTrafficLandingInputs) {
    min = 40000;
    max = 80000;
  }
  const hasSimpleHtmlCssSlicingInputs = isSimpleHtmlCssReadySlicingText(normalized, service);
  if (hasSimpleHtmlCssSlicingInputs) {
    min = 20000;
    max = 40000;
  }
  const hasConfirmedBrochureInputs = hasConfirmedBrochureSiteState(leadState, service);
  if (hasConfirmedBrochureInputs) {
    min = 80000;
    max = 120000;
  }
  const complexity = getComplexity(service, addonMatches, normalized);
  const budgetPlan = buildBudgetPlan({ budget, service, min, max });
  const moduleSummary = activeVelorSummary || activeItsngSummary;
  const hasReadyExistingWork = hasExistingSeoReadyInputs || hasExistingPerformanceReadyInputs || hasExistingUpdateReadyInputs || hasSupportReadyInputs;
  const hasSimpleSiteBaselineInputs =
    isSimpleSiteService(service) &&
    (facts.noMaterials ||
      facts.turnkey ||
      facts.clientProvidesMaterials ||
      (hasBrochureSiteIntent(normalized) && /магазин|одежд|посуд|бизнес|store|shop|business|clothing|fashion/.test(normalized)));
  const hasLeadProgressQuestionInputs = isSimpleSiteService(service) && leadState.type === 'сайт-визитка' && !leadState.pageCount && !budget;
  const ready = Boolean(
    service &&
      !hasLeadProgressQuestionInputs &&
      (moduleSummary ||
        isHiring ||
        budget ||
        hasReadyExistingWork ||
        hasWordPressIntroLandingInputs ||
        hasHtmlCssTrafficLandingInputs ||
        hasSimpleHtmlCssSlicingInputs ||
        hasConfirmedBrochureInputs ||
        hasSimpleSiteBaselineInputs ||
        (!shouldAskFirst && missingQuestions.length <= 2))
  );
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
    blockCount,
    productCount,
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
    leadState,
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
  ).slice(0, 1);

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

  if (service.id === 'existing-site-seo') {
    if (language === 'en') {
      return ['SEO audit', 'title/description fixes', 'sitemap and robots.txt', 'redirects/URL checks', 'basic technical SEO fixes'];
    }

    return ['SEO-аудит', 'правки title/description', 'sitemap и robots.txt', 'проверка редиректов/URL', 'базовые технические SEO-правки'];
  }

  if (service.id === 'existing-site-performance') {
    if (language === 'en') {
      return ['speed audit', 'image optimization', 'cache setup', 'script/plugin review', 'basic PageSpeed fixes'];
    }

    return ['аудит скорости', 'оптимизация изображений', 'настройка кэша', 'проверка лишних скриптов/плагинов', 'базовые PageSpeed-правки'];
  }

  if (service.id === 'existing-site-update') {
    if (language === 'en') {
      return ['current site audit', 'small content/page changes', 'lead form or payment module', 'integration setup if needed', 'post-change testing'];
    }

    return ['аудит текущего сайта', 'правки контента/страниц', 'форма заявки или модуль оплаты', 'подключение интеграции при необходимости', 'проверка после изменений'];
  }

  if (service.id === 'frontend-slicing') {
    if (language === 'en') {
      return [
        'HTML/CSS layout from ready design',
        facts.readyMobileVersion ? 'responsive implementation from ready mobile version' : 'responsive layout',
        !facts.noInteractivity && !facts.noAnimations ? 'basic interactivity' : null,
        !facts.noForms ? 'lead form setup if needed' : null,
        'phone check and launch file preparation',
      ].filter(Boolean);
    }

    return [
      'HTML/CSS-верстка по готовому дизайну',
      facts.readyMobileVersion ? 'адаптив по готовой мобильной версии' : 'адаптив',
      !facts.noInteractivity && !facts.noAnimations ? 'базовая интерактивность' : null,
      !facts.noForms ? 'подключение формы при необходимости' : null,
      'проверка на телефоне и подготовка файлов к запуску',
    ].filter(Boolean);
  }

  if (isSupportService(service)) {
    if (language === 'en') {
      const map = {
        'site-diagnostics': ['diagnostics through admin/logs', 'theme/plugin and hosting/SSL check', 'backup/staging check', 'cause report', 'fix plan with price'],
        'form-fix': ['form check', 'email/SMTP/Telegram check', 'submission error check', 'notification setup', 'test lead'],
        'payment-fix': ['checkout diagnostics', 'payment plugin/API key check', 'SSL/webhook/callback check', 'log review', 'fix estimate after diagnostics'],
        'security-fix': ['security audit', 'file/plugin/user check', 'logs and backup review', 'cleanup plan', 'basic hardening of found weak points'],
      };
      return map[service.id] || [];
    }

    const map = {
      'site-diagnostics': ['диагностика админки/логов', 'проверка темы/плагинов', 'проверка хостинга/SSL', 'проверка backup/staging', 'план фикса с ценой'],
      'form-fix': ['проверка формы', 'проверка email/SMTP/Telegram', 'проверка ошибок отправки', 'настройка уведомлений', 'тестовая заявка'],
      'payment-fix': ['диагностика checkout', 'проверка платежного плагина/API-ключей', 'проверка SSL/webhook/callback', 'проверка логов', 'оценка фикса после диагностики'],
      'security-fix': ['security-аудит', 'проверка файлов/плагинов/пользователей', 'проверка логов и backup', 'план чистки', 'базовое закрытие найденных слабых мест'],
    };
    return map[service.id] || [];
  }

  return service.includes.slice(0, 5);
}

function buildNextStepCta(estimate, language) {
  const isRu = language !== 'en';
  const serviceId = estimate.service?.id;
  const highValue = estimate.min >= 500000 || estimate.max >= 500000;

  if (isSupportService(estimate.service)) {
    return isRu
      ? 'Следующий шаг: скиньте ссылку, скрин ошибки и что меняли перед поломкой; если удобно, отправьте это Диасу в Telegram: https://t.me/Berliyn_h.'
      : 'Next step: send the site link, screenshot/error text and what changed before it broke; if convenient, send it to Dias in Telegram: https://t.me/Berliyn_h.';
  }

  if (serviceId === 'developer-retainer' || highValue || estimate.facts?.urgent) {
    return isRu
      ? 'Здесь лучше, чтобы Диас посмотрел детали лично: напишите в Telegram https://t.me/Berliyn_h и отправьте пример, бюджет и срок.'
      : 'This is better reviewed by Dias directly: message Telegram https://t.me/Berliyn_h with the example, budget and deadline.';
  }

  return isRu
    ? 'Следующим шагом скиньте пример, готовые материалы и срок - тогда можно подтвердить точную вилку и первый этап.'
    : 'Next, send an example, ready materials and deadline, then we can confirm the exact range and first milestone.';
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

  const addons = estimate.addons.length ? estimate.addons.map((item) => getAddonLabel(item, language)).join(', ') : null;
  const serviceLabel = getServiceLabel(estimate.service, language);
  const tech = estimate.technologies.length ? estimate.technologies.join(', ') : serviceLabel;
  const included = getIncludedWork(estimate, language).slice(0, 5).join(', ');
  const provided = getProvidedByClient(estimate.facts || {}, language);
  const excluded = getExcludedFromEstimate(estimate.facts || {}, language);
  const assumptions = (isRu ? estimate.missingQuestions : estimate.missingQuestionsEn || estimate.missingQuestions).slice(0, 2);
  const complexityLabel = isRu
    ? estimate.complexity.level
    : {
        простая: 'simple',
        средняя: 'medium-complexity',
        сложная: 'complex',
        'модульная доработка': 'modular',
        'помесячная работа': 'monthly/retainer',
        'не определена': 'unclear',
      }[estimate.complexity.level] || estimate.complexity.level;
  const discountNote = estimate.discountRate
    ? isRu
      ? `Уже применил снижение за готовые материалы: примерно ${Math.round(estimate.discountRate * 100)}%.`
      : `I already applied a ready-materials reduction of about ${Math.round(estimate.discountRate * 100)}%.`
    : null;
  const urgentNote = estimate.facts?.urgent && isSupportService(estimate.service)
    ? isRu
      ? 'Так как это срочный/live-фикс, сначала закладываю backup или staging, потом правку.'
      : 'Because this is an urgent/live fix, I would plan backup or staging first, then apply the fix.'
    : null;
  let scopeLabel;
  if (['mobile-delivery-app', 'mobile-mvp'].includes(estimate.service?.id)) {
    scopeLabel = isRu
      ? `${estimate.pageCount || 'уточняется'} основных экранов`
      : `${estimate.pageCount || 'to be finalized'} main screens`;
  } else if (isSupportService(estimate.service)) {
    const supportScope = {
      'site-diagnostics': isRu ? 'существующий сайт, диагностика бага' : 'existing website, bug diagnostics',
      'form-fix': isRu ? 'существующий сайт, форма/уведомления' : 'existing website, form/notification fix',
      'payment-fix': isRu ? 'существующий сайт, оплата/checkout' : 'existing website, payment/checkout diagnostics',
      'security-fix': isRu ? 'существующий сайт, security-аудит/восстановление' : 'existing website, security audit/recovery',
    };
    scopeLabel = supportScope[estimate.service.id];
  } else if (estimate.service?.id === 'frontend-slicing' && estimate.pageCount === 1) {
    scopeLabel = isRu ? '1 страница верстки' : '1 page layout';
  } else if (estimate.service?.id === 'landing' && estimate.blockCount) {
    scopeLabel = isRu ? `${estimate.blockCount} блоков` : `${estimate.blockCount} sections`;
  } else if (estimate.service?.id === 'existing-site-seo') {
    scopeLabel = isRu ? 'существующий сайт, SEO-доработка' : 'existing website, SEO improvements';
  } else if (estimate.service?.id === 'existing-site-performance') {
    scopeLabel = isRu ? 'существующий сайт, ускорение' : 'existing website, speed optimization';
  } else if (estimate.service?.id === 'existing-site-update') {
    scopeLabel = isRu ? 'существующий сайт, точечная доработка' : 'existing website, targeted improvements';
  } else if (['ecommerce', 'marketplace'].includes(estimate.service?.id) && estimate.productCount) {
    scopeLabel = isRu ? `${estimate.productCount} товаров/позиций` : `${estimate.productCount} products/items`;
  } else {
    scopeLabel = isRu
      ? `${estimate.pageCount || 'уточняется'} страниц/основных экранов`
      : `${estimate.pageCount || 'to be finalized'} page(s)/main screens`;
  }

  if (!isRu) {
    return [
      `Based on your answers, this is a ${complexityLabel} task: ${serviceLabel}.`,
      `Characteristics: stack/platform - ${tech}; scope - ${scopeLabel}; extras - ${addons || 'no major extras detected'}.`,
      provided.length ? `Provided by client: ${provided.join(', ')}.` : null,
      excluded.length ? `Not included in this estimate: ${excluded.join(', ')}.` : null,
      discountNote,
      urgentNote,
      `Rough range: ${formatPriceRange(estimate.min, estimate.max, language)}, timeline ${formatTimeline(estimate.service.timeline, language)}. Includes: ${included}.`,
      assumptions.length ? `I am assuming the remaining details are standard: ${assumptions.join('; ')}.` : 'A final quote still depends on the exact brief and materials.',
      buildNextStepCta(estimate, language),
    ].filter(Boolean).join(' ');
  }

  return [
    `По ответам это ${complexityLabel} задача: ${estimate.service.label}.`,
    `Характеристики: стек/платформа - ${tech}; объем - ${scopeLabel}; доп. модули - ${addons || 'без явных сложных модулей'}.`,
    provided.length ? `Со стороны клиента уже есть: ${provided.join(', ')}.` : null,
    excluded.length ? `Это не закладываю в стоимость: ${excluded.join(', ')}.` : null,
    discountNote,
    urgentNote,
    `Ориентир: ${formatPriceRange(estimate.min, estimate.max, language)}, срок ${estimate.service.timeline}. Входит: ${included}.`,
    assumptions.length ? `Для точного подтверждения цены осталось уточнить: ${assumptions.join('; ')}.` : 'Финальная цена зависит от точного ТЗ и материалов.',
    buildNextStepCta(estimate, language),
  ].filter(Boolean).join(' ');
}

function formatList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function buildBudgetReply(estimate, language) {
  const isRu = language !== 'en';
  const plan = estimate.budgetPlan;
  const planCopy = isRu ? plan : getEnglishServiceBudgetScope(estimate.service) || EN_BUDGET_TIER_COPY[plan.tier?.id] || plan;
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
  const urgencyNote = estimate.facts?.urgent
    ? isRu
      ? 'Срочность учитываю: за этот бюджет лучше резать объем и запускать минимальный этап, а не пытаться сделать все сразу.'
      : 'I am accounting for urgency: with this budget, the scope should be reduced to a focused first step instead of trying to build everything at once.'
    : null;

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
        urgencyNote,
        `I would clarify final details next: platform, exact pages, form/SEO/hosting and who provides content.`,
      ].filter(Boolean).join('\n\n');
    }

    return [
      `Budget ${budget} is clear. For ${serviceLabel}, a full build is usually around ${expectedRange}, so I would not promise the whole project inside this amount.`,
      `Best option inside the budget: ${planCopy.bestFit}.`,
      `Can offer now:\n${canOffer}`,
      `Not included at this stage:\n${notIncluded}`,
      urgencyNote,
      `Optimal proposal: ${planCopy.recommendation}.`,
    ].filter(Boolean).join('\n\n');
  }

  if (plan.fit === 'within_estimate' || plan.fit === 'above_estimate') {
    return [
      `Бюджет ${budget} понял. Для задачи “${serviceLabel}” это рабочий бюджет: ориентир по прайсу ${expectedRange}.`,
      `Оптимальный вариант за эту сумму: ${plan.bestFit}.`,
      `Что можно включить:\n${canOffer}`,
      urgencyNote,
      'Следующим шагом я бы уточнил платформу, точный список страниц, форму/SEO/хостинг и кто дает контент.',
    ].filter(Boolean).join('\n\n');
  }

  return [
    `Бюджет ${budget} понял. Полноценный вариант “${serviceLabel}” обычно стоит ${expectedRange}, поэтому я бы не обещал весь проект под ключ за эту сумму.`,
    `Оптимальный вариант в рамках бюджета: ${plan.bestFit}.`,
    `Что можно предложить сейчас:\n${canOffer}`,
    `Что лучше не включать в этот этап:\n${notIncluded}`,
    urgencyNote,
    `Как подать клиенту: ${plan.recommendation}.`,
  ].filter(Boolean).join('\n\n');
}

function buildHiringReply(estimate, language) {
  const isRu = language !== 'en';
  const budget = estimate.budget ? formatPrice(estimate.budget, language) : null;
  const hourlyOption = HIRING_OPTIONS.find((option) => option.label === 'почасовая работа');
  const hourly = formatPrice(hourlyOption?.min || 10000, language);
  const options = HIRING_OPTIONS.map((option) => getHiringOptionLine(option, language)).join('\n');

  if (!isRu) {
    return [
      budget
        ? `With a monthly budget of ${budget}, I would calculate this as developer time. The base rate is about ${hourly}/hour, minimum 2 hours.`
        : `Yes, a developer can be hired hourly. The base rate is about ${hourly}/hour, minimum 2 hours.`,
      `Reference ranges:\n${options}`,
      'As the monthly hours grow, the effective hourly rate goes down in a controlled way, so long-term support is more cost-efficient.',
      'To choose the right format, I would ask: stack, expected hours per month, task list and whether project management/design is needed.',
    ].join('\n\n');
  }

  return [
    budget
      ? `Бюджет ${budget} на постоянную работу понял. Считал бы это как часы разработчика: базовая ставка примерно ${hourly}/час, минимум 2 часа.`
      : `Да, можно работать почасово или помесячно. Базовая ставка примерно ${hourly}/час, минимум 2 часа.`,
    `Ориентиры по прайсу:\n${options}`,
    'Логика такая: при росте пакета эффективная ставка за час плавно снижается, но без демпинга.',
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

function formatKzt(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount <= 0) {
    return '0 ₸';
  }

  return `${new Intl.NumberFormat('ru-RU').format(Math.round(amount))} ₸`;
}

function formatKztRange(min, max) {
  return `${formatKzt(min)}–${formatKzt(max)}`;
}

function getSimpleSiteSubject(text, language) {
  const normalized = normalizeText(text);

  if (language === 'en') {
    if (/euro\s*furniture|furniture/.test(normalized)) return 'furniture business';
    if (/clothing|fashion|apparel/.test(normalized)) return 'clothing store';
    if (/plumb|bathroom|sanitary/.test(normalized)) return 'plumbing/sanitary store';
    if (/dish|cookware|kitchenware|tableware/.test(normalized)) return 'kitchenware store';
    if (/store|shop/.test(normalized)) return 'store';
    return 'business';
  }

  if (/евро\s*мебел/.test(normalized)) return 'евро мебели';
  if (/мебел/.test(normalized)) return 'магазина мебели';
  if (/одежд|бутик|fashion/.test(normalized)) return 'магазина одежды';
  if (/сантехник|сануз|ванн|смесител|раковин|унитаз|душ/.test(normalized)) return 'магазина сантехники';
  if (/посуд|кухонн|посуда/.test(normalized)) return 'магазина кухонной посуды';
  if (/магазин/.test(normalized)) return 'магазина';
  return 'бизнеса';
}

function shouldUseWordPressIntroLandingReply(messages, estimate) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const normalized = normalizeText(userMessages.map((message) => message.content).join(' '));

  return isWordPressIntroLandingText(normalized, estimate.service);
}

function isWordPressIntroLandingText(text, service) {
  const normalized = normalizeText(text);

  return (
    ['wordpress-onepage-portfolio', 'wordpress-site', 'landing'].includes(service?.id) &&
    /wordpress|вордпресс|\bwp\b/.test(normalized) &&
    /одностранич|1\s*странич|one[-\s]?page|лендинг|landing|сайт[-\s]?визитк|визитк/.test(normalized) &&
    /ознакомительн|информационн|без\s+продаж|без\s+оплат|не\s+продавать|brochure|informational|no\s+(sales|payment|checkout)/.test(normalized) &&
    /дизайн\s+(?:от\s+(?:вас|тебя|исполнителя)|нужен|с\s+нуля)|без\s+дизайн|нужен\s+дизайн|design\s+(?:from\s+you|needed|required)/.test(normalized)
  );
}

function buildWordPressIntroLandingReply(messages, language) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const text = userMessages.map((message) => message.content).join(' ');
  const subject = getSimpleSiteSubject(text, language);

  if (language === 'en') {
    return [
      `Understood. This is a simple one-page WordPress brochure site for a ${subject}.`,
      'Since design is needed from my side and photos are already available, the rough range is 15,000–30,000 ₽, timeline about 3–5 business days.',
      'The work can include: page structure, simple modern design, store description block, product/service categories, advantages, photo gallery, contacts, map, call or WhatsApp button, mobile adaptation and basic WordPress setup.',
      'Not included: online store, cart, online payment, product catalog logic, complex integrations and copywriting from scratch.',
      'To confirm the exact price, I only need: whether domain/hosting already exist, whether a logo is needed, and which sections you want on the page.',
    ].join('\n\n');
  }

  return [
    `Понял, вам нужен простой одностраничный сайт на WordPress для ${subject}.`,
    'Так как дизайн нужен с нашей стороны, а фото уже есть, ориентир по стоимости: 15 000–30 000 ₽, срок примерно 3–5 рабочих дней.',
    'В работу может входить: разработка структуры страницы, простой современный дизайн, блок с описанием магазина, категории товаров/услуг, преимущества, галерея фото, контакты, карта, кнопка звонка или WhatsApp, адаптация под телефон и базовая настройка WordPress.',
    'Не входит: интернет-магазин, корзина, онлайн-оплата, логика каталога товаров, сложные интеграции и написание всех текстов с нуля.',
    'Чтобы точно подтвердить цену, нужно уточнить только пару моментов: есть ли уже домен и хостинг, нужен ли логотип, и какие разделы вы хотите видеть на странице.',
  ].join('\n\n');
}

function isHtmlCssTrafficLandingText(text, service) {
  const normalized = normalizeText(text);

  return (
    ['landing', 'frontend-slicing', 'simple-multipage', 'wordpress-site'].includes(service?.id) &&
    hasHtmlCssTrafficLandingIntent(normalized)
  );
}

function shouldUseHtmlCssTrafficLandingReply(messages, estimate) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const normalized = normalizeText(userMessages.map((message) => message.content).join(' '));

  return isHtmlCssTrafficLandingText(normalized, estimate.service);
}

function buildHtmlCssTrafficLandingReply(language) {
  if (language === 'en') {
    return [
      'Yes, this can be built without WordPress, as a simple HTML/CSS landing page.',
      'In this case it is a one-page landing page with design from scratch, mobile adaptation and a basic traffic-focused structure.',
      `Rough range: ${formatKztRange(40000, 80000)}, timeline about 3-5 business days.`,
      'Since the topic is open, I can propose the structure myself: hero section, offer description, benefits, trust block, lead form or WhatsApp button, contacts.',
      'To avoid overloading you with extra questions, it is better to discuss the details directly with Dias. He will suggest which topic and structure to choose for traffic: https://t.me/Berliyn_h',
    ].join('\n\n');
  }

  return [
    'Да, можно сделать не на WordPress, а на простом HTML/CSS.',
    'В вашем случае это будет одностраничный лендинг с дизайном с нуля, адаптивом под телефон и базовой структурой под трафик.',
    `Ориентир по стоимости: ${formatKztRange(40000, 80000)}, срок примерно 3-5 рабочих дней.`,
    'Так как тема свободная, я могу предложить простую структуру сам: главный экран, описание предложения, преимущества, блок доверия, форма заявки или кнопка WhatsApp, контакты.',
    'Чтобы не мучить вас лишними вопросами, лучше дальше обсудить детали напрямую с Диасом - он подскажет, какую тему и структуру выбрать под трафик. Telegram: https://t.me/Berliyn_h',
  ].join('\n\n');
}

function isSimpleHtmlCssReadySlicingText(text, service) {
  const normalized = normalizeText(text);

  return Boolean(
    ['frontend-slicing', 'landing'].includes(service?.id) &&
      hasHtmlCssStackIntent(normalized) &&
      parsePageCount(normalized) === 1 &&
      getProjectFacts(normalized).readyDesign &&
      hasReadyMobileVersion(normalized) &&
      hasAnimationNegation(normalized) &&
      hasFormNegation(normalized)
  );
}

function shouldUseSimpleHtmlCssSlicingReply(messages, estimate) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const normalized = normalizeText(userMessages.map((message) => message.content).join(' '));

  return isSimpleHtmlCssReadySlicingText(normalized, estimate.service);
}

function buildSimpleHtmlCssSlicingReply(messages, estimate, language) {
  const facts = estimate.facts || {};
  const correctionPrefix =
    facts.repeatedNegativeCorrection && facts.noForms && facts.noAnimations
      ? language === 'en'
        ? 'Yes, understood, sorry. I am fixing it: forms and animations are not needed.\n\n'
        : 'Да, понял, извините, фиксирую: формы и анимации не нужны.\n\n'
      : '';

  if (language === 'en') {
    return [
      `${correctionPrefix}Understood. This is a simple task: one HTML/CSS page from a ready design, mobile version already exists, without forms and without animations.`,
      `Rough range: ${formatKztRange(20000, 40000)}, timeline about 1-3 business days.`,
      'Included: clean HTML/CSS layout, responsive implementation from the ready mobile version, phone check and basic file preparation for launch.',
      'The main details are already clear, so next it is better to send Dias the mockup or page example, and he will confirm the exact price: https://t.me/Berliyn_h',
    ].join('\n\n');
  }

  return [
    `${correctionPrefix}${correctionPrefix ? 'Тогда задача простая' : 'Понял, тогда задача простая'}: 1 страница на HTML/CSS по готовому дизайну, мобильная версия уже есть, без форм и без анимаций.`,
    `Ориентир по стоимости: ${formatKztRange(20000, 40000)}, срок примерно 1-3 рабочих дня.`,
    'В работу входит аккуратная HTML/CSS-верстка, адаптив по готовой мобильной версии, проверка на телефоне и базовая подготовка файлов к запуску.',
    'Так как основные данные уже понятны, дальше лучше скинуть Диасу макет/пример страницы, и он уже подтвердит точную цену: https://t.me/Berliyn_h',
  ].join('\n\n');
}

function getRuPageLabel(count) {
  const number = Number(count);

  if (!Number.isFinite(number) || number <= 0) {
    return 'несколько страниц';
  }

  if (number === 1) return '1 страницу';
  if (number >= 2 && number <= 4) return `${number} страницы`;
  return `${number} страниц`;
}

function shouldUseLeadProgressQuestionReply(messages, estimate) {
  const state = estimate.leadState || {};

  return Boolean(isSimpleSiteService(estimate.service) && state.type === 'сайт-визитка' && !state.pageCount && !estimate.budget);
}

function buildLeadProgressQuestionReply(estimate, language) {
  const state = estimate.leadState || {};

  if (language === 'en') {
    const niche = state.niche ? ` for ${state.niche}` : '';
    const exclusions = state.noCatalog || state.noOnlinePayment ? ', without catalog or online payment' : '';
    return `Understood, I will treat it as a brochure site${niche}${exclusions}. To calculate it properly, I only need one detail: how many pages are needed - one, two, or 3-4?`;
  }

  const nicheLabel = state.niche === 'евро мебель' ? 'евро мебели' : state.niche;
  const niche = nicheLabel ? ` для ${nicheLabel}` : '';
  const exclusions = state.noCatalog || state.noOnlinePayment ? ', без каталога и онлайн-оплаты' : '';
  return `Понял, фиксирую: это сайт-визитка${niche}${exclusions}. Чтобы нормально посчитать, уточню только одно: сколько страниц нужно - одна, две или 3-4?`;
}

function shouldUseConfirmedBrochureSiteReply(messages, estimate) {
  return hasConfirmedBrochureSiteState(estimate.leadState, estimate.service);
}

function buildConfirmedBrochureSiteReply(messages, estimate, language) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const text = userMessages.map((message) => message.content).join(' ');
  const subject = getSimpleSiteSubject(text, language);
  const state = estimate.leadState || {};
  const pageCount = state.pageCount || estimate.pageCount || 2;
  const platform = state.platform || 'WordPress';
  const nextQuestion = state.nextQuestion === 'дата старта'
    ? 'Когда хотите начать работу: на этой неделе или позже?'
    : state.nextQuestion === 'материалы'
      ? 'Фото, тексты и логотип уже готовы или их нужно помочь подготовить?'
      : 'У вас уже есть домен и хостинг или их тоже нужно помочь оформить?';

  if (language === 'en') {
    return [
      `Understood. Then I will count this as a simple ${pageCount}-page brochure site for a ${subject}, turnkey, without a catalog and without online payment.`,
      `Rough range: ${formatPriceRange(80000, 120000, 'en')}, timeline about 5-7 business days.`,
      `Included: site structure, simple design, ${platform}, mobile adaptation, ${pageCount} pages, company/about blocks, advantages, furniture photos, contacts, WhatsApp/Instagram, lead form and basic launch preparation.`,
      `Next I only need one thing: ${state.hasHostingAnswer ? 'when would you like to start?' : 'do you already have a domain and hosting, or should I help with that too?'}`,
    ].join('\n\n');
  }

  return [
    `Понял, тогда это простой сайт-визитка на ${getRuPageLabel(pageCount)} под ключ для ${subject}, без каталога и онлайн-оплаты.`,
    `Ориентир по стоимости: ${formatKztRange(80000, 120000)}, срок примерно 5-7 рабочих дней.`,
    `В работу входит: структура сайта, дизайн, ${platform}, адаптация под телефон, ${getRuPageLabel(pageCount)}, блоки о компании, преимущества, фото мебели, контакты, WhatsApp/Instagram, форма заявки и базовая подготовка к запуску.`,
    `Следующим шагом нужно понять: ${nextQuestion}`,
  ].join('\n\n');
}

function shouldUseSimpleSiteBaselineReply(messages, estimate) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const normalized = normalizeText(userMessages.map((message) => message.content).join(' '));

  return (
    isSimpleSiteService(estimate.service) &&
    (estimate.facts?.noMaterials ||
      estimate.facts?.turnkey ||
      estimate.facts?.clientProvidesMaterials ||
      (hasBrochureSiteIntent(normalized) && /магазин|одежд|посуд|бизнес|store|shop|business|clothing|fashion/.test(normalized)))
  );
}

function buildSimpleSiteBaselineReply(messages, estimate, language) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const text = userMessages.map((message) => message.content).join(' ');
  const subject = getSimpleSiteSubject(text, language);
  const facts = estimate.facts || {};

  if (language === 'en') {
    return [
      `Okay, I will count this as a basic turnkey brochure site for a ${subject}.`,
      `Minimal option starts from ${formatPrice(50000, 'en')}: one page, responsive layout, store/about blocks, photos or collections, contacts, WhatsApp/Instagram links and a lead form.`,
      `A normal version is ${formatPriceRange(80000, 120000, 'en')}: cleaner design, structure adapted to the business, collection/advantages/delivery or pickup blocks and basic launch preparation.`,
      facts.clientProvidesMaterials
        ? 'If you provide photos, texts and business details yourself, the project can stay closer to the minimal option.'
        : 'Since the exact materials are not ready yet, I will take the base option and estimate roughly. Copywriting, product photos and branding can be estimated separately.',
      'Not included: online store, cart, online payment, large product catalog, photo shoot and full branding.',
      'To price it exactly, I only need one thing: should it be just a brochure site, or also a small product/catalog section without online payment?',
    ].join('\n\n');
  }

  return [
    `Понял. Тогда считаем как сайт-визитку под ключ для ${subject}.`,
    `Минимально можно сделать от ${formatKzt(50000)}: одна страница, адаптив, блоки про магазин, фото/коллекции, контакты, WhatsApp/Instagram и форма заявки.`,
    `Нормальный вариант: ${formatKztRange(80000, 120000)}. В него закладываю аккуратный дизайн, структуру под нишу, блоки с коллекциями, преимуществами, доставкой/самовывозом и базовую подготовку к запуску.`,
    facts.clientProvidesMaterials
      ? 'Если фото, тексты и данные вы предоставляете сами, можно держаться ближе к минимальному варианту.'
      : 'Так как точных данных пока нет, беру базовый вариант и считаю примерно. Подготовку текстов, фотосъемку и брендинг лучше считать отдельно.',
    'Не входит: интернет-магазин, корзина, онлайн-оплата, большой каталог товаров, фотосъемка и полноценный брендинг.',
    'Чтобы посчитать точно, уточню только одно: вам нужна просто визитка или еще небольшой каталог товаров без онлайн-оплаты?',
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

  if (isUnsafeFixRequest(lastText)) {
    return buildUnsafeFixReply(language);
  }

  if (isPromptInjectionRequest(lastText)) {
    return buildPromptInjectionReply(language);
  }

  if (isReadyToStartRequest(lastText)) {
    return buildReadyToStartReply(language);
  }

  if (isGuaranteeRequest(lastText)) {
    return buildGuaranteeReply(language);
  }

  if (isUpworkContactMoveRequest(lastText)) {
    return buildUpworkContactReply(language);
  }

  if (isCasualOrContactRequest(lastText)) {
    return buildCasualOrContactReply(language);
  }

  if (isShortPriceProbe(lastText) && userMessageCount <= 1) {
    return buildShortPriceReply(lastText, language);
  }

  if (isOldAuditRequest(lastText)) {
    return buildOldAuditReply(language);
  }

  if (
    isOldMaintenanceRequest(lastText) &&
    !isSupportService(estimate.service) &&
    !['existing-site-seo', 'existing-site-performance', 'existing-site-update', 'ai-assistant'].includes(estimate.service?.id)
  ) {
    return buildOldMaintenanceReply(language);
  }

  if (isPaymentTermsRequest(lastText) && userMessageCount <= 1 && !isSupportService(estimate.service)) {
    return buildPaymentTermsReply(language);
  }

  if (isBigCloneRequest(lastText) && userMessageCount <= 1 && !estimate.budgetPlan) {
    return buildBigCloneReply(language);
  }

  if (isMixedProjectRequest(lastText) && userMessageCount <= 1 && !estimate.budgetPlan) {
    return buildMixedProjectReply(language);
  }

  if (isUrgentRequest(lastText) && userMessageCount <= 1 && !estimate.budgetPlan && !isSupportService(estimate.service)) {
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

  if (shouldUseWordPressIntroLandingReply(messages, estimate)) {
    return buildWordPressIntroLandingReply(messages, language);
  }

  if (shouldUseHtmlCssTrafficLandingReply(messages, estimate)) {
    return buildHtmlCssTrafficLandingReply(language);
  }

  if (shouldUseSimpleHtmlCssSlicingReply(messages, estimate)) {
    return buildSimpleHtmlCssSlicingReply(messages, estimate, language);
  }

  if (shouldUseLeadProgressQuestionReply(messages, estimate)) {
    return buildLeadProgressQuestionReply(estimate, language);
  }

  if (shouldUseConfirmedBrochureSiteReply(messages, estimate)) {
    return buildConfirmedBrochureSiteReply(messages, estimate, language);
  }

  if (shouldUseSimpleSiteBaselineReply(messages, estimate)) {
    return buildSimpleSiteBaselineReply(messages, estimate, language);
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
    blockCount: estimate.blockCount,
    productCount: estimate.productCount,
    providedByClient: getProvidedByClient(estimate.facts || {}, 'ru'),
    excludedFromEstimate: getExcludedFromEstimate(estimate.facts || {}, 'ru'),
    detectedFacts: estimate.facts || {},
    currentLeadState: estimate.leadState || {},
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
- Manage the dialogue like a web-studio sales manager: remember every client answer inside the current conversation, update currentLeadState, and move to the next logical step instead of restarting the same question.
- Never repeat the same question if the client already answered it. If the client says "без онлайн-оплаты", "просто визитка", "каталог не нужен", "без продаж", treat it as not ecommerce, not a catalog and not an online store; do not ask about catalog or online payment again.
- If the client says "не нужно", "не нужны", "нет", "без", "не надо", treat that feature as disabled and never add it to project characteristics, modules or active included work. If the client says "анимация не нужна", never write "сложные анимации" as an add-on. If the client says "формы не нужны", do not include lead form setup as active work and do not ask about forms again. After "мобильная версия есть, анимация не нужна, формы не нужны", the task is ready for an estimate and should move to the manager.
- If the client repeats a negative answer, for example "формы и анимации не нужны говорю же", apologize briefly, fix the state, do not ask that question again, then give the updated estimate and next step.
- Ask only one clarifying question at a time. Progression: if site type is unclear, clarify type; if type is clear, clarify page count; if pages are clear, clarify features; if features are clear, give price and timeline; if price is already given, ask about domain/hosting, materials or start date.
- Do not repeat a previous answer verbatim. Every new client message must change the answer or advance the deal.
- If the client says they do not understand design/programming, explain in simple words and offer a turnkey option.
After the client gives the main data for an estimate - site type, page count, platform/stack, and whether design is from scratch - give the price, timeline and included work. After an estimate, do not ask many extra questions: ask at most one short next question or move the client to the owner/manager. If the client asks whether another stack is possible, for example HTML/CSS instead of WordPress, recalculate the project for the new stack and do not ask about Figma if the client already said the design is from scratch. If the client says "тема свободная" or "просто чтобы был сайт под трафик", do not demand a ready topic, texts or design; propose a basic structure yourself and pass the client to the manager. After calculating, do not output a long list of questions about multilingual support, SEO, analytics, Telegram, WhatsApp, domain, hosting and Figma. These can be discussed after contact with the manager. The main task is to understand the project quickly, give a rough price and timeline, then softly move the client into a personal dialogue with the owner.
- In English, understand casual client slang and local variants such as "one pager", "small biz site", "ecom", "quote me", "ballpark", "how much would it run me", "set me back", "bucks", "grand", "2k", "ASAP", "no upfront", "dev/contractor". Answer in clear natural English; do not overuse slang back.
- Output plain text only. Do not use Markdown formatting, no **bold**, no * bullet points, no headings, no tables, no code blocks.
- For lists use either "1. ..." numbered lines or "- ..." lines only.
- Help estimate websites, WordPress/Tilda, ecommerce, mobile apps, Node.js, PostgreSQL, backend, CMS, integrations, AI-bot work and monthly developer hiring.
- Never say a price is final. Use "ориентир", "примерно", "вилка" / "rough range".
- If the client seems ready, suggest continuing in Telegram: https://t.me/Berliyn_h.
- All source prices are stored in KZT, but final user-facing prices must be in ${outputCurrency.code} (${outputCurrency.symbol}).
- Never output KZT/tenge in the final reply.
- Use the sales playbook below as the source of sales style, objections handling, discount rules and CTA behavior.
- If the client asks for bug fixes, forms, payments, SSL, hacked sites or old-site maintenance, offer diagnostics/audit first, mention backup/staging for live sites, and never promise a blind fixed price. For old custom code, suggest audit or hourly work before a fixed quote.
- When budget is small or the client negotiates, give two options: minimal now and normal/expanded later.
- Respect client-provided assets and existing work. If the user says design/Figma/content/backend is ready, treat it as provided by the client and do not include that work in the price or in the "what is included" list.
- If design is ready, say that UI/UX design from scratch is not included and that the estimate covers implementation/layout from the ready mockups. Do not write "разработка с дизайном" or "with design" in that case.
- If backend does not exist, include backend/API and database as development work. If backend already exists, do not price backend from scratch unless the user asks for it.
- For mobile delivery apps, distinguish clearly between provided inputs, actual development work, and optional later phases. Ready design reduces scope; it does not remove mobile development, backend, admin panel, payment, map tracking or push work.

Pricing gate:
- Current phase is "${estimate.phase}".
- If phase is "questions_only", DO NOT give any price, budget, numeric money range, "from-to" amount, or final estimate. Ask only one concrete question from suggestedQuestions and say that the estimate comes after that answer.
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

function shouldUseLocalReply(messages) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const lastText = userMessages[userMessages.length - 1]?.content || '';

  if (userMessages.length > 1) {
    return false;
  }

  return isShortPriceProbe(lastText) || isCasualOrContactRequest(lastText);
}

function shouldForceLocalReply(messages, estimate) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const lastText = userMessages[userMessages.length - 1]?.content || '';

  return (
    shouldUseLocalReply(messages) ||
    shouldUseWordPressIntroLandingReply(messages, estimate) ||
    shouldUseHtmlCssTrafficLandingReply(messages, estimate) ||
    shouldUseSimpleHtmlCssSlicingReply(messages, estimate) ||
    shouldUseLeadProgressQuestionReply(messages, estimate) ||
    shouldUseConfirmedBrochureSiteReply(messages, estimate) ||
    shouldUseSimpleSiteBaselineReply(messages, estimate) ||
    estimate.service?.id === 'developer-retainer' ||
    isSupportService(estimate.service) ||
    isUnsafeFixRequest(lastText) ||
    isPromptInjectionRequest(lastText) ||
    isGuaranteeRequest(lastText) ||
    isUpworkContactMoveRequest(lastText) ||
    isReadyToStartRequest(lastText) ||
    isPaymentTermsRequest(lastText)
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
    const aiReply = shouldForceLocalReply(messages, estimate) ? null : await callGemini(messages, estimate, language);
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
        pageCount: estimate.pageCount,
        blockCount: estimate.blockCount,
        productCount: estimate.productCount,
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
