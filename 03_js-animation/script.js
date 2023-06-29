const tl1 = gsap.timeline();
const tl2 = gsap.timeline({paused: true});
const photosWrap = document.querySelector('.photos-wrap');
const img1 = photosWrap.children[0];
const img2 = photosWrap.children[1];
const img3 = photosWrap.children[2];
const burgerBtnOpen = document.querySelector('.burger');
const burgerBtnClose = document.querySelector('.close');

tl1.from('.hero__title', { opacity: 0, y: 100, duration: 1 })
  .from('.hero__btn', { opacity: 0, y: 100, duration: 1 }, "-=1")
  .from('.hero__descr', { opacity: 0, y: 100, duration: 0.7 })
  .from(img1, { opacity: 0, scale: 0, duration: 0.7 }, "-=0.5")
  .from(img2, { opacity: 0, scale: 0, duration: 0.5 }, "-=0.4")
  .from(img3, { opacity: 0, scale: 0, duration: 0.5 }, "-=0.3")
  .from('.photos__author', { opacity: 0, scale: 0, duration: 1 });

tl2.fromTo('.menu', {opacity: 0}, {opacity: 1, display: 'block', duration: 0.5 })
  .from('.menu__nav', {opacity: 0, y: 100, duration: 0.7})
  .from(['.social', '.menu__right'], {opacity: 0, y: 100, duration: 0.7, stagger: 0}, "-=0.3");

burgerBtnOpen.addEventListener('click', () => {
  tl2.play();
  console.log('clicked!');
});

burgerBtnClose.addEventListener('click', () => {
  tl2.reverse();
  console.log('clicked?');
});

