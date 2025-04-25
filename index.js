
    const track = document.getElementById('carousel-track');
    const items = track.children;
    const clone = track.innerHTML;

  track.innerHTML += clone;
    const menuButton = document.querySelector('.btn-wrap');
    const sideMenu = document.getElementById('sideMenu');

    menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    });


    document.addEventListener('DOMContentLoaded', () => {
        const bars = document.querySelectorAll('.bar-fill');
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const bar = entry.target;
              const targetWidth = bar.getAttribute('data-width');
              bar.style.setProperty('--target-width', targetWidth);
              bar.classList.add('filled');
              observer.unobserve(bar);
            }
          });
        }, {
          threshold: 0.5
        });
      
        bars.forEach(bar => {
          observer.observe(bar);
        });
      });
      
    const translations = {
  ru: {
    title: "Создаю современные решения, которые помогают бизнесу расти и выделяться в интернете.",
    about: "сайты, которые не просто «работают», а приносят результат.",
    about_title:"Мои проекты — это комбинация чистого кода, продуманного дизайна и реальных бизнес-целей. Я специализируюсь на HTML, CSS, JavaScript и React.js, NodeJS, MongoDB, Git, Figma, Adobe Photoshop и уже помог более 30+ клиентам вывести их проекты на новый уровень.",
    сontact:"связаться"
  },
  en: {
    title: "I create modern solutions that help businesses grow and stand out online.",
    about: "Websites that don't just “work” — they deliver results.",
    about_title:"My projects are a combination of clean code, thoughtful design, and real business goals. I specialize in HTML, CSS, JavaScript, and React.js, NodeJS, MongoDB, Git, Figma, and Adobe Photoshop. I’ve already helped over 30 clients take their projects to the next level.",
    сontact:"contact"
  },
  kz: {
    title: "Бизнесіңізге интернетте дамуға және ерекшеленуге көмектесетін заманауи шешімдер жасаймын.",
    about: "Тек жұмыс істейтін емес, нақты нәтиже беретін веб-сайттар.",
    about_title:"Менің жобаларым — таза кодтың, ойластырылған дизайнның және нақты бизнес-мақсаттардың үйлесімі. Мен HTML, CSS, JavaScript және React.js, NodeJS, MongoDB, Git, Figma, Adobe Photoshop технологияларына маманданғанмын және 30-дан астам клиентке жобаларын жаңа деңгейге көтеруге көмектестім.",
    сontact:"хабарласу"

  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('data-lang');
    setLanguage(selectedLang);
  });
});

    

