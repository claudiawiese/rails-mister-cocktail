import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["mix awesome cocktails", "share your recipies", "get inspired by our recipies"],
    typeSpeed: 70,
  });
};


export { loadDynamicBannerText };
