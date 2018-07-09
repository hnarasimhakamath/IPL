// 1. Plot the number of matches played per year of all the years in IPL.
let getMatchNumbers = function (dataSet) {
    var fs = require("fs");
    return new Promise(function (resolve, reject) {
        let matchPerSeason = {};
        fs.readFile(dataSet, function (err, data) {
            if (err) {
                reject(err);
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        const match = line.split(",");
                        const season = match[1];

                        if (matchPerSeason.hasOwnProperty(season)) {
                            matchPerSeason[season]++;
                        } else {
                            matchPerSeason[season] = 1;
                        }
                    }
                })
            }
            resolve(matchPerSeason);
        })
    })
}



// 2. Plot a stacked bar chart of matches won of all teams over all the years of IPL.
function getMatchesWon(dataSet) {
    var fs = require("fs");
    let teamNames = {};
    return new Promise(function (resolve, reject) {

        fs.readFile(dataSet, function (err, data) {
            if (err) {
                reject(err);
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index !== 0) {
                        const match = line.split(",");
                        const season = match[1];
                        const winner = match[2];

                        if (teamNames.hasOwnProperty(winner)) {
                            if (teamNames[winner].hasOwnProperty(season)) {
                                teamNames[winner][season]++;
                            } else {
                                teamNames[winner][season] = 1;
                            }
                        } else {
                            teamNames[winner] = {};
                            teamNames[winner][season] = 1;
                        }
                    }
                })
            }
            resolve(teamNames);
        })
    })
}


//Function to return the match IDs for a particular season.
function getMatchID(matches, year) {
    var fs = require("fs");
    var path = require("path");
    // var matches = path.resolve("question3m.csv");
    var matchid = [];
    return new Promise(function (resolve, reject) {
        fs.readFile(matches, function (err, matches) {
            matches.toString().split("\n").forEach(function (line, index, arr) {
                if (index !== 0) {
                    const match = line.split(",");
                    if (year == match[1]) {
                        matchid.push(match[0]);
                    }
                }
            })
            resolve(matchid);
        })

    })
}




// 3. For the year 2016 plot the extra runs conceded per team.
// function extraRuns(deliveries, year) {
//     console.log("Function called");
//     var fs = require("fs");
//     let matchids = getMatchID(year);
//     console.log(matchids);

//     return new Promise(function (resolve, reject) {
//         let extraRunsConceded = {};
//         let matchid = [];
//         fs.readFile(data, function (err, matches) {
//             if (err) {
//                 reject(err);
//             } else {
//                 matches.toString().split("\n").forEach(function (line, index, arr) {
//                     if (index != 0) {
//                         const match = line.split(",");
//                         const season = match[1];

//                         if (season === "2016") {
//                             matchid.push(match[0]);
//                         }

//                         // console.log(matchid);
//                     }
//                 })
//             }
//             resolve();
//         })
//     })
// }




// // let expect = require("chai").expect;
// let path = require("path");
// let file = path.resolve("deliveries.csv");
// // let dataSet = path.resolve("question1test.csv");
// let match = require(file);

// extraRuns("2016", match);


module.exports = {
    getMatchNumbers: getMatchNumbers,
    // extraRuns: extraRuns,
    getMatchID: getMatchID,
    getMatchesWon: getMatchesWon
}