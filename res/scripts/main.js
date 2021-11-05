const progressBars = [...document.querySelectorAll('.skills__skillprogress')];

const options = {
  rootMargin: '-5%',
  treshold: 0.0,
};

const observer = new IntersectionObserver(showBar, options);

function showBar(entries) {
  entries.forEach((entry) => {
    const bar = entry.target.querySelector('.skills__bar');

    if (entry.isIntersecting) {
      bar.classList.add('skills__bar--animate');
      return;
    }
  });
}

progressBars.forEach((pb) => {
  observer.observe(pb);
});
