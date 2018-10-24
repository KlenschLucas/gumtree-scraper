var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search Gumtree' });
});
router.get('/test', function(req, res, next) {

  let list = [];

 let base = 'https://www.gumtree.co.za';
  let page = 1;
  let url = '/s-computers/v1c9199p'+page;

    request((base + url), (err, response, html) => {
      let $ = cheerio.load(html);
      let array = $("div.view ul li").toArray();
      let i = 1;
      array.map((itemData) => {

        i++;
        if (itemData.children[1] && itemData.children[1].children[3] && itemData.children[1].children[3].children[1]) {
          if (i) {
            let item = itemData.children[1].children[3].children;

            // skip if price is not there
            if(item[7].children[1].children[1].children[1]) {
              let itm = {};
              itm.description = item[3].children[0].data;
              itm.title = item[1].children[1].children[0].data;
              itm.link = base + item[1].children[1].attribs.href;
              itm.price = item[7].children[1].children[1].children[1].children[0].data.replace(
                  'R ', '').replace(',', '');
              itm.creation_date = item[7].children[3].children[3].children[0].data;
              [itm.category, itm.location] = (item[9].children[1].children[0].data.replace('Published in: ', '').split(' , '));
              list.push(itm);
            }

          }

        }
        if (i === array.length) {
          res.render('test',
              {
                title: 'test' ,
                base:base,
                url: url,
                page: page,
                items:list
          });
        }
      });
    });




});
module.exports = router;
