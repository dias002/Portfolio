const PRICE_RANGES = [
  {
    id: 'landing',
    label: 'лендинг или сайт услуг',
    min: 150000,
    max: 320000,
    timeline: '5-10 рабочих дней',
    keywords: ['лендинг', 'landing', 'одностранич', 'сайт услуг', 'услуги', 'визитка', 'портфолио'],
    includes: ['структура', 'адаптивная верстка', 'форма заявки', 'базовая SEO-подготовка'],
  },
  {
    id: 'business',
    label: 'корпоративный сайт',
    min: 280000,
    max: 650000,
    timeline: '10-20 рабочих дней',
    keywords: ['корпоратив', 'компания', 'страниц', 'бизнес сайт', 'сайт компании'],
    includes: ['несколько страниц', 'админка или CMS', 'контактные формы', 'мультиязычность по необходимости'],
  },
  {
    id: 'ecommerce',
    label: 'интернет-магазин',
    min: 550000,
    max: 1400000,
    timeline: '3-7 недель',
    keywords: ['магазин', 'e-commerce', 'ecommerce', 'товар', 'каталог', 'корзина', 'оплата', 'checkout'],
    includes: ['каталог', 'карточки товаров', 'корзина', 'заказы', 'админка'],
  },
  {
    id: 'wordpress-tilda',
    label: 'WordPress или Tilda сайт',
    min: 120000,
    max: 420000,
    timeline: '4-14 рабочих дней',
    keywords: ['wordpress', 'вордпресс', 'tilda', 'тильда', 'cms'],
    includes: ['сборка на CMS', 'настройка блоков', 'адаптив', 'формы'],
  },
  {
    id: 'custom-cms',
    label: 'кастомная CMS или web-сервис',
    min: 700000,
    max: 2200000,
    timeline: '4-10 недель',
    keywords: ['кастом', 'cms', 'админ', 'crm', 'сервис', 'панель', 'dashboard', 'api', 'backend'],
    includes: ['backend', 'база данных', 'админ-панель', 'роли', 'API'],
  },
  {
    id: 'ai-assistant',
    label: 'AI-бот для сайта',
    min: 250000,
    max: 750000,
    timeline: '1-3 недели',
    keywords: ['бот', 'ai', 'ии', 'чат', 'ассистент', 'openai', 'gpt', 'цены'],
    includes: ['чат-виджет', 'серверный API', 'правила расчета цены', 'передача заявки'],
  },
];

const ADDONS = [
  { label: 'онлайн-оплата', min: 120000, max: 280000, keywords: ['оплата', 'kaspi', 'эквайринг', 'stripe'] },
  { label: 'мультиязычность', min: 70000, max: 180000, keywords: ['англ', 'english', 'каз', 'язык', 'мультияз'] },
  { label: 'интеграции', min: 120000, max: 450000, keywords: ['интеграц', 'crm', 'telegram', 'whatsapp', 'amo', 'bitrix'] },
  { label: 'дизайн с нуля', min: 120000, max: 350000, keywords: ['дизайн', 'figma', 'макет'] },
];

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .slice(-10)
    .map((message) => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: String(message.content || '').slice(0, 1400),
    }))
    .filter((message) => message.content.trim());
}

function formatPrice(value) {
  return `${new Intl.NumberFormat('ru-KZ').format(value)} ₸`;
}

function findMatches(text, items) {
  const normalized = text.toLowerCase();
  return items.filter((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
}

function estimateFromMessages(messages) {
  const text = messages.map((message) => message.content).join(' ');
  const serviceMatches = findMatches(text, PRICE_RANGES);
  const addonMatches = findMatches(text, ADDONS);
  const service = serviceMatches[0] || null;

  if (!service) {
    return {
      service: null,
      addons: addonMatches,
      min: null,
      max: null,
      summary: 'Недостаточно данных для честной оценки. Нужно понять тип проекта, количество страниц и нужна ли CMS/оплата.',
    };
  }

  const addonMin = addonMatches.reduce((sum, item) => sum + item.min, 0);
  const addonMax = addonMatches.reduce((sum, item) => sum + item.max, 0);
  const min = service.min + addonMin;
  const max = service.max + addonMax;

  return {
    service,
    addons: addonMatches,
    min,
    max,
    summary: `${service.label}: ${formatPrice(min)} - ${formatPrice(max)}, срок ${service.timeline}.`,
  };
}

function isGreetingOnly(text) {
  return /^(привет|салам|здравствуйте|hello|hi|hey|добрый день)[\s!.?]*$/i.test(text.trim());
}

function buildFallbackReply(messages, language) {
  const lastText = messages[messages.length - 1]?.content || '';
  const estimate = estimateFromMessages(messages);
  const isRu = language !== 'en';

  if (isGreetingOnly(lastText)) {
    return isRu
      ? 'Привет. Напишите, что нужно сделать: лендинг, интернет-магазин, сайт на WordPress/Tilda, кастомная CMS или AI-бот. Я сразу дам ориентир по цене и задам пару точных вопросов.'
      : 'Hi. Tell me what you need: landing page, online store, WordPress/Tilda site, custom CMS or an AI assistant. I will give a realistic price range and ask only the key questions.';
  }

  if (!estimate.service) {
    return isRu
      ? 'Пока рано называть честную цену. Уточню два момента: это лендинг, интернет-магазин или сервис с админкой? И сколько примерно страниц или товаров будет на старте?'
      : 'It is too early to price this honestly. Two quick questions: is it a landing page, online store, or a service with an admin panel? And how many pages or products are planned at launch?';
  }

  const addons = estimate.addons.length
    ? ` Дополнительно вижу: ${estimate.addons.map((item) => item.label).join(', ')}.`
    : '';

  return isRu
    ? `По описанию это похоже на ${estimate.service.label}. Ориентир: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)}, срок ${estimate.service.timeline}.${addons} Чтобы сузить вилку, скажите: нужен дизайн с нуля или уже есть макет, и нужна ли админка/оплата?`
    : `This looks like ${estimate.service.label}. Rough range: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)}, timeline ${estimate.service.timeline}.${addons} To narrow it down, tell me whether you already have a design and whether admin/payment features are needed.`;
}

function buildInstructions(estimate, language) {
  const isRu = language !== 'en';

  return `
You are Dias's website assistant for potential clients. Speak ${isRu ? 'Russian' : 'English'} unless the user clearly switches language.

Behavior:
- Write like a calm human consultant, not a scripted FAQ.
- Be concise: 2-5 short sentences unless the user asks for details.
- Ask at most two useful follow-up questions.
- Help estimate website, CMS, ecommerce, backend and AI-bot work.
- Never say a price is final. Use "ориентир", "примерно", "вилка" / "rough range".
- Do not invent prices outside the provided pricing data.
- If the client seems ready, suggest continuing in Telegram: https://t.me/Berliyn_h.

Dias offer:
- Full-stack development with React, Django, Node.js, Python, PostgreSQL.
- WordPress, Tilda and custom CMS builds.
- Product-minded UI, backend, integrations, admin panels and AI assistants.

Pricing data, KZT:
${JSON.stringify({ services: PRICE_RANGES, addons: ADDONS, currentEstimate: estimate }, null, 2)}
`.trim();
}

async function callOpenAI(messages, estimate, language) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  const preferredModel = process.env.OPENAI_MODEL || 'gpt-5.4-mini';
  const fallbackModel = 'gpt-4.1-mini';
  const models = [...new Set([preferredModel, fallbackModel])];
  let lastError = null;

  for (const model of models) {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        instructions: buildInstructions(estimate, language),
        input: messages,
        max_output_tokens: 700,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      lastError = data?.error?.message || `OpenAI request failed with ${response.status}`;
      if ((response.status === 400 || response.status === 404) && model !== fallbackModel) {
        continue;
      }
      throw new Error(lastError);
    }

    const outputText =
      data.output_text ||
      data.output
        ?.flatMap((item) => item.content || [])
        .filter((item) => item.type === 'output_text')
        .map((item) => item.text)
        .join('\n')
        .trim();

    if (outputText) {
      return outputText;
    }
  }

  throw new Error(lastError || 'OpenAI returned an empty response');
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
    const aiReply = await callOpenAI(messages, estimate, language);
    const reply = aiReply || buildFallbackReply(messages, language);

    return res.status(200).json({
      reply,
      estimate: {
        service: estimate.service?.label || null,
        min: estimate.min,
        max: estimate.max,
        summary: estimate.summary,
      },
      mode: aiReply ? 'ai' : 'local-estimator',
    });
  } catch (error) {
    return res.status(200).json({
      reply: buildFallbackReply(normalizeMessages(req.body?.messages), req.body?.language),
      error: 'AI service is temporarily unavailable',
      mode: 'local-estimator',
    });
  }
};
