const cheerio = require('cheerio');
const request = require('request');

let data = {
  title: String,
  link:String,
  description: String,
  price: Number,
  creation_date: String,
  category:String,
  location:String,
  thumb:String
};

let list = [{}];

const checkLinks = function (base, url) {
  request((base + url), (err, response, html) => {
    let $ = cheerio.load(html);
    let array = $("div.view ul li").toArray();
    let i = 0;
    array.map((itemData) => {

      if (itemData.children[1] && itemData.children[1].children[3] && itemData.children[1].children[3].children[1]) {
        if (!i) {
          let item = itemData.children[1].children[3].children;

          // skip if price is not there
          if(item[7].children[1].children[1].children[1]) {
            let itm = data;
            itm.description = item[3].children[0].data;
            itm.title = item[1].children[1].children[0].data;
            itm.link = base + item[1].children[1].attribs.href;
            itm.price = item[7].children[1].children[1].children[1].children[0].data.replace(
                'R ', '').replace(',', '');
            itm.creation_date = item[7].children[3].children[3].children[0].data;
            [itm.category, itm.location] = (item[9].children[1].children[0].data.replace('Published in: ', '').split(' , '));
            // i++;
            // let temp = itemData.children[1].children[1].children[1].children[1].attribs.src;
            // temp.shift();
            // itm.thumb = temp;
            // console.log(itm.thumb);
            console.dir(itm);
          }

        }

      }
    });
  });
};

// Change the amount of pages you want to scrape
checkLinks('https://www.gumtree.co.za','/s-computers/v1c9199p1');

