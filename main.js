const sections = document.querySelectorAll('.section');
const title = document.querySelectorAll('.content')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.3 
  });

  sections.forEach(section => {
    observer.observe(section);
  });



  window.addEventListener('load', () => {
    if (location.hash) {
      history.replaceState(null, '', location.pathname); 
      window.scrollTo(0, 0); 
    }
  });
