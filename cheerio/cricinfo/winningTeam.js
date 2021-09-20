const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",requestCallback);

function requestCallback (err,res,html)
{
    const $ = cheerio.load(html);
    const losingTeam = $(".team-gray .name-link p").text();
    const bothTeamObject = $(".name-link p");
    // const bothTeams = [$(bothTeamObject[0]).text(), $(bothTeamObject[1]).text()];
    // console.log(bothTeams);
    // const winningTeam = $(bothTeamObject[0]).text() == losingTeam ? $(bothTeamObject[1]).text() : $(bothTeamObject[0]).text();
    const bothTeamScoreObject = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .score");
    const winningTeamNameScoreArray = $(bothTeamObject[0]).text() == losingTeam ? [$(bothTeamObject[1]).text() , $(bothTeamScoreObject[1]).text()] : [$(bothTeamObject[0]).text() , $(bothTeamScoreObject[0]).text()];
    console.log(winningTeamNameScoreArray);
}