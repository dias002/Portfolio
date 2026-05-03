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
    keywords: ['магазин', 'e-commerce', 'ecommerce', 'товар', 'каталог', 'корзина', 'оплата', 'checkout', 'woocommerce'],
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
    priority: 6,
    keywords: ['бот', 'ai', 'ии', 'чат', 'ассистент', 'openai', 'gemini', 'gpt', 'llm', 'цены'],
    includes: ['чат-виджет', 'серверный API', 'правила консультации', 'передача заявки'],
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

function hasAny(text, keywords = []) {
  return keywords.some((keyword) => text.includes(normalizeText(keyword)));
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

function parsePageCount(text) {
  const normalized = normalizeText(text);

  if (/одностранич|one[-\s]?page|1\s*(страниц|page|экран)/.test(normalized)) {
    return 1;
  }

  const match = normalized.match(/(\d{1,3})\s*(страниц|page|экран|раздел|блок)/);
  return match ? Number(match[1]) : null;
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

  if (addons.length || service.id === 'business' || service.id === 'wordpress-site') {
    return { level: 'средняя', reasons: addons.length ? addons.map((addon) => addon.label) : ['несколько страниц или CMS'] };
  }

  return { level: 'простая', reasons: ['1 страница без сложной серверной логики'] };
}

function estimateFromMessages(messages) {
  const userMessages = messages.filter((message) => message.role === 'user');
  const text = userMessages.map((message) => message.content).join(' ');
  const normalized = normalizeText(text);
  const serviceMatches = findMatches(normalized, SERVICES);
  const service = serviceMatches[0] || null;
  const addonMatches = findMatches(normalized, ADDONS).filter((addon) => !isAddonIncluded(service, addon));
  const technologies = detectTechnologies(normalized);
  const pageCount = parsePageCount(normalized);
  const missingQuestions = getMissingQuestions(normalized, service);
  const projectRequest = isProjectRequest(normalized);
  const shouldAskFirst = projectRequest && userMessages.length <= 1;
  const ready = Boolean(service && !shouldAskFirst && missingQuestions.length <= 2);
  const addonMin = addonMatches.reduce((sum, item) => sum + item.min, 0);
  const addonMax = addonMatches.reduce((sum, item) => sum + item.max, 0);
  const min = service ? service.min + addonMin : null;
  const max = service ? service.max + addonMax : null;
  const complexity = getComplexity(service, addonMatches, normalized);

  return {
    service,
    addons: addonMatches,
    technologies,
    pageCount,
    min,
    max,
    ready,
    phase: ready ? 'estimate_allowed' : 'questions_only',
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

function buildFallbackReply(messages, language) {
  const lastText = messages[messages.length - 1]?.content || '';
  const estimate = estimateFromMessages(messages);
  const isRu = language !== 'en';

  if (isGreetingOnly(lastText)) {
    return isRu
      ? 'Привет. Опишите задачу: тип сайта, платформа, объем, дизайн, функции и нужен ли сервер/backend. Я сначала задам уточняющие вопросы, потом посчитаю вилку.'
      : 'Hi. Describe the task: website type, platform, scope, design, features and whether backend/server work is needed. I will ask clarifying questions first, then calculate a range.';
  }

  if (!estimate.ready) {
    return buildQuestionsReply(estimate, language);
  }

  return buildEstimateReply(estimate, language);
}

function buildInstructions(estimate, language) {
  const isRu = language !== 'en';

  return `
You are Dias's website assistant for potential clients. Speak ${isRu ? 'Russian' : 'English'} unless the user clearly switches language.

Core behavior:
- Write like a calm human consultant, not a scripted FAQ.
- Be concise and practical.
- Help estimate websites, WordPress/Tilda, ecommerce, Node.js, PostgreSQL, backend, CMS, integrations and AI-bot work.
- Never say a price is final. Use "ориентир", "примерно", "вилка" / "rough range".
- If the client seems ready, suggest continuing in Telegram: https://t.me/Berliyn_h.

Pricing gate:
- Current phase is "${estimate.phase}".
- If phase is "questions_only", DO NOT give any price, budget, numeric money range, "from-to" amount, KZT/tenge amount, or final estimate. Ask 3-5 concrete questions from suggestedQuestions and say that the estimate comes after answers.
- If phase is "estimate_allowed", give a realistic range using only the provided pricing data, then explain the task characteristics: platform/stack, complexity, modules, timeline and what is included.
- If Node.js, PostgreSQL, backend, auth, server setup, payment or integrations are mentioned, treat the task as more complex than a simple site.
- For a one-page WordPress portfolio, do not use the broad generic WordPress range if it is simple; use the specific WordPress portfolio service and add modules only when the user mentions them.

Dias offer:
- Full-stack development with React, Django, Node.js, Python, PostgreSQL.
- WordPress, Tilda and custom CMS builds.
- Product-minded UI, backend, integrations, admin panels and AI assistants.

Pricing data, KZT:
${JSON.stringify({ services: SERVICES, addons: ADDONS, currentEstimate: estimate, suggestedQuestions: estimate.missingQuestions }, null, 2)}
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

function containsPrice(text) {
  const normalized = normalizeText(text);
  return /(\d[\d\s.,]{2,})\s*(₸|тг|тенге|kzt)|от\s+\d|до\s+\d|\d+\s*-\s*\d+\s*(тыс|млн|k|₸)/.test(normalized);
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
        temperature: 0.62,
        topP: 0.9,
        maxOutputTokens: 760,
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

  if (!estimate.ready && containsPrice(outputText)) {
    return null;
  }

  return outputText;
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
    const reply = aiReply || buildFallbackReply(messages, language);

    return res.status(200).json({
      reply,
      estimate: {
        service: estimate.service?.label || null,
        min: estimate.ready ? estimate.min : null,
        max: estimate.ready ? estimate.max : null,
        ready: estimate.ready,
        phase: estimate.phase,
        complexity: estimate.complexity.level,
        technologies: estimate.technologies,
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
      reply: buildFallbackReply(messages, language),
      estimate: {
        service: estimate.service?.label || null,
        min: estimate.ready ? estimate.min : null,
        max: estimate.ready ? estimate.max : null,
        ready: estimate.ready,
        phase: estimate.phase,
        complexity: estimate.complexity.level,
        technologies: estimate.technologies,
        summary: estimate.ready ? estimate.summary : 'Сначала нужно уточнить вводные.',
      },
      error: 'AI service is temporarily unavailable',
      mode: 'local-estimator',
    });
  }
};
