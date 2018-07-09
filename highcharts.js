let path = require("path");
let file = path.resolve("app.js");
let dataSet = path.resolve("question1test.csv");
let match = require(file);

let getMatchNumbers = function (data) {
    var fs = require("fs");
    return new Promise(function (resolve, reject) {
        let matchPerSeason = {};
        fs.readFile(data, function (err, data) {
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
            // console.log(matchPerSeason);
            resolve(matchPerSeason);
        })
    })
}

var n = getMatchNumbers(dataSet);
console.log(n);

// var test = match.getMatchNumbers();
// console.log(test);

