const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
// const { error } = require("console");
// const { html } = require("cheerio/lib/api/manipulation");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",requestCallback);

function requestCallback (err,res,html)
{
    // fs.writeFileSync("temp.html",html);
    const $ = cheerio.load(html);
    console.log($($(".playerofthematch-name")[1]).text());
    console.log($(".playerofthematch-name").length);
    console.log($($(".playerofthematch-player-detail")[1]).text());
    console.log($($(".playerofthematch-player-detail")[1]).html());
    console.log($($(".playerofthematch-player-detail")[1]).attr("class"));
    console.log($($(".playerofthematch-player-detail")[1]).get(0));
    console.log($($(".playerofthematch-player-detail")[1]).get(0).attribs);
    
}
