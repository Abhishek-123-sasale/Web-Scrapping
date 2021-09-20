const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",requestCallback);
let batsmanProfileUrls = [];
function requestCallback (err,res,html)
{
    const $ = cheerio.load(html);
    const batsmanAnchorTags = $(".batsman-cell a");
    

    for(let i=0 ; i<batsmanAnchorTags.length ; i++)
    {
        batsmanProfileUrls.push({
                name : $(batsmanAnchorTags[i]).text(),
                url : "http://www.espncricinfo.com" + $(batsmanAnchorTags[i]).attr("href")
        
        })
    }

     // console.log(batsmanProfileUrls);
    for(let j in batsmanProfileUrls)
    {
       request(batsmanProfileUrls[j].url , fetchDataOfBirth.bind(this,j));
     //console.log(j);
    }
}

let count = 0;

function fetchDataOfBirth(index,err,res,html){
    count++;
    const $ = cheerio.load(html);
    const playerDateOfBirth = $($("h5.player-card-description.gray-900")[1]).text();
    batsmanProfileUrls[index]["Date of Birth"] = playerDateOfBirth;
    if(count == batsmanProfileUrls.length)
    {
        console.log(batsmanProfileUrls);
    }

}
