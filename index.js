
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
      

    

