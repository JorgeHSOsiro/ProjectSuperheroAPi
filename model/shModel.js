const { fetchPromise } = require('../service/shApi.js');

const searchHero = async (url, q) => {
  return await fetchPromise(url).then((data) =>
    data.filter((hero) => {
      const appearanceArray = Object.values(hero.appearance).flat().map((item) => {
        if (item !== null) {
           return item.toUpperCase();
        }
      });
      const biographyArray = Object.values(hero.biography).flat().map((item) => {
        if (item !== null) {
           return item.toUpperCase();
        }
      });
      const workArray = Object.values(hero.work).map((item) => {
        if (item !== null) {
           return item.toUpperCase();
        }
      });
      if (
        hero.name.toUpperCase() == q ||
        workArray.includes(q) ||
        appearanceArray.includes(q) ||
        biographyArray.includes(q)
      ) {
        return hero;
      }
    }),
  );
};

module.exports = {
  searchHero,
};