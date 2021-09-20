const request = require('request');
const cheerio = require('cheerio');
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';

request(url,callBack);

function callBack(error,response,html){

    if(error){
        console.error('error : ',error);
    }else{
        extractHTML(html);
    }
}

function extractHTML(html){

    let selectorTool = cheerio.load(html);
    let commentaryArr = selectorTool('.match-comment-wrapper .match-comment-long-text');
    let lbc = selectorTool(commentaryArr[0]).text();
    console.log(lbc);
    
}