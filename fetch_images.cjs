const https = require('https');
const fs = require('fs');

function fetchImages(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${query}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/https:\\u002F\\u002Fimages\.unsplash\.com\\u002Fphoto-[a-zA-Z0-9\-]+\?ixlib=rb-4\.0\.3[^"]+/g)];
        let urls = matches.map(m => m[0].replace(/\\u002F/g, '/').replace(/\\u0026/g, '&'));
        if (urls.length === 0) {
          // Alternative regex for some other formats
          const matches2 = [...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?ixlib=rb-4\.0\.3[^"]+/g)];
          urls = matches2.map(m => m[0].replace(/&amp;/g, '&'));
        }
        resolve(urls);
      });
    });
  });
}

(async () => {
  const indianFood = await fetchImages('indian-food');
  const biryani = await fetchImages('biryani');
  const curry = await fetchImages('curry');
  
  const allUrls = [...new Set([...indianFood, ...biryani, ...curry])].slice(0, 60);
  console.log(JSON.stringify(allUrls, null, 2));
})();
