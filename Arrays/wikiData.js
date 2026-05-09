const axios = require("axios");
// Please use these headers along with your request.
const headers = {
  "Accept-Encoding": "gzip,deflate",
  "User-Agent":
    "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)",
};

const wikidataScraper = async (url) => {
  let data = await fetch(url, {
    method: "GET",
    headers,    
  });
  data = await data.json();
  let { id, label, description } = data;
  console.log(data.entities);
  console.log(id);
  return {
    id,
    label,
    description,
  };
};
