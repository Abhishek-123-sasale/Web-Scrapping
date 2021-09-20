//Highest Wicket Taker Of This Match : https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard

const request = require('request');
const cheerio = require('cheerio');
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';

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
    let bowlersTableArr = selectorTool('.table.bowler'); // 2 tables we get i.e, elements arr 2

    let hwt = ""; //highest wicket taker
    let now = 0; //number Of wicker

    for(let i = 0;i< bowlersTableArr.length;i++){
        let bowlerTable = selectorTool(bowlersTableArr[i]);
        let allBowlers = selectorTool(bowlerTable).find("tbody>tr");

        //console.log(allBowlers.length);
        for(let j = 0;j<allBowlers.length;j++){
            let colOfEachPlayerArr = selectorTool(allBowlers).find("td");

            let playername = selectorTool(colOfEachPlayerArr[0]).text();
            let currNumOfWicket = selectorTool(colOfEachPlayerArr[4]).text();
            if(colOfEachPlayerArr.lenght > 1) continue;

            if(currNumOfWicket > now){
                now = currNumOfWicket;
                hwt = playername;
            }
        }

    }    

    console.log(" Highest Wicket Taking Player Is :",hwt);
    console.log(" Number Of Wickets :",now);
    
}