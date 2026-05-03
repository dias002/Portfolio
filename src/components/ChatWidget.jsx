import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './../styles/style.scss';

const copy = {
  ru: {
    title: 'AI-консультант',
    subtitle: 'Оценит задачу и подскажет следующий шаг',
    opener: 'Привет. Опишите задачу в одном сообщении: какой сайт нужен, есть ли дизайн, админка, оплата или AI-бот. Я дам ориентир по цене.',
    input: 'Напишите задачу...',
    send: 'Отправить',
    open: 'Открыть чат',
    close: 'Свернуть чат',
    typing: 'Думаю над оценкой',
    error: 'Не получилось отправить сообщение. Попробуйте еще раз.',
    telegram: 'Перейти в Telegram',
    suggestions: ['Сколько стоит интернет-магазин?', 'Нужен лендинг для услуг', 'Хочу AI-бота на сайт'],
  },
  en: {
    title: 'AI consultant',
    subtitle: 'Estimates the task and suggests the next step',
    opener: 'Hi. Describe what you need in one message: website type, design, CMS, payment or AI assistant. I will give you a realistic price range.',
    input: 'Describe your project...',
    send: 'Send',
    open: 'Open chat',
    close: 'Minimize chat',
    typing: 'Estimating',
    error: 'Could not send the message. Try again.',
    telegram: 'Continue in Telegram',
    suggestions: ['How much is an online store?', 'I need a service landing page', 'I want an AI bot on my site'],
  },
};

function ChatWidget() {
  const { i18n } = useTranslation();
  const language = i18n.language === 'en' ? 'en' : 'ru';
  const text = copy[language];
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(() => new URLSearchParams(window.location.search).get('chat') === 'open');
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState(() => [
    {
      role: 'assistant',
      content: copy.ru.opener,
    },
  ]);

  const visibleMessages = useMemo(() => messages.slice(-12), [messages]);

  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'assistant') {
      setMessages([{ role: 'assistant', content: text.opener }]);
    }
  }, [language, messages, text.opener]);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isOpen, messages, isSending]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 160);
    }
  }, [isOpen]);

  const sendMessage = async (content) => {
    const message = content.trim();
    if (!message || isSending) {
      return;
    }

    const nextMessages = [...messages, { role: 'user', content: message }];
    setMessages(nextMessages);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language,
          messages: nextMessages,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'Chat request failed');
      }

      setMessages((current) => [...current, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages((current) => [...current, { role: 'assistant', content: text.error }]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className={`chatWidget ${isOpen ? 'isOpen' : ''}`}>
      {isOpen && (
        <section className="chatPanel" aria-label={text.title}>
          <div className="chatPanel__header">
            <div>
              <span className="chatPanel__eyebrow">Dias</span>
              <h2>{text.title}</h2>
              <p>{text.subtitle}</p>
            </div>
            <button className="chatIconButton" type="button" onClick={() => setIsOpen(false)} aria-label={text.close}>
              ×
            </button>
          </div>

          <div className="chatPanel__messages">
            {visibleMessages.map((message, index) => (
              <div className={`chatMessage chatMessage--${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </div>
            ))}
            {isSending && (
              <div className="chatMessage chatMessage--assistant chatMessage--loading">
                <span>{text.typing}</span>
                <i />
                <i />
                <i />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chatPanel__suggestions">
            {text.suggestions.map((suggestion) => (
              <button type="button" key={suggestion} onClick={() => sendMessage(suggestion)} disabled={isSending}>
                {suggestion}
              </button>
            ))}
          </div>

          <form className="chatPanel__form" onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={text.input}
              rows="2"
              maxLength="700"
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage(input);
                }
              }}
            />
            <button type="submit" disabled={isSending || !input.trim()}>
              {text.send}
            </button>
          </form>

          <a className="chatPanel__telegram" href="https://t.me/Berliyn_h" target="_blank" rel="noreferrer">
            {text.telegram}
          </a>
        </section>
      )}

      <button className="chatLauncher" type="button" onClick={() => setIsOpen((value) => !value)} aria-label={text.open}>
        <span>AI</span>
      </button>
    </div>
  );
}

export default ChatWidget;
