const fetch = require('node-fetch');

const fetchPromise = async (url) => {
  return await fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
      return data;
  });
};

module.exports = { fetchPromise };
