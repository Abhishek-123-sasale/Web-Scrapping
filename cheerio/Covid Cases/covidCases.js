const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');

request('https://www.worldometers.info/coronavirus/',callBack);

function callBack(error,response,html){

    if(error){
        console.error('error : ',error);
    }else{
        extractHTML(html);
    }
};

function extractHTML(html){

    let $ = cheerio.load(html);
    let statsArr = $('.maincounter-number');

    let CoronaVirusCases = $(statsArr[0]).text();
    console.log(chalk.red("Corona Virus Cases : ",CoronaVirusCases))

    let Deaths  = $(statsArr[1]).text();
    console.log(chalk.white("Deaths : ",Deaths))

    let Recovered = $(statsArr[2]).text();
    console.log(chalk.green("Recovered : ",Recovered))
}