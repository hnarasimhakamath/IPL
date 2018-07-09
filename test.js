let expect = require("chai").expect;
let path = require("path");
let file = path.resolve("app.js");
// let dataSet = path.resolve("question1test.csv");
let match = require(file);

describe("IPL Data Set Test Cases...", function () {

    it("Number of matches played per year of all the years in IPL.", function (done) {
        let file = path.resolve("question1test.csv");

        const expectedResult = {
            2016: 2,
            2017: 2,
            2018: 1
        };

        match.getMatchNumbers(file).then(function (data) {
            try {
                expect(data).deep.equals(expectedResult);
                done();
            } catch (e) {
                done(e);
            }
        })
    })



    it("Matches won of all teams over all the years of IPL", function (done) {
        let file = path.resolve("question2test.csv");

        const expectedResult = {
            'Kolkata Knight Riders': {
                '2010': 1,
                '2017': 1
            },
            'Mumbai Indians': {
                '2010': 1,
                '2017': 2
            },
            'Royal Challengers Bangalore': {
                '2008': 1,
                '2009': 1
            },
            'Kings XI Punjab': {
                '2008': 1
            },
            'Deccan Chargers': {
                '2009': 1
            }
        };

        match.getMatchesWon(file).then(function (data) {
            try {
                expect(data).deep.equals(expectedResult);
                done();
            } catch (e) {
                done(e);
            }
        })
    })

    it("Get the match IDs", function (done) {
        let matches = path.resolve("matchIDtest.csv");
        let year = "2016";
        const expectedMatchIDs = ["1", "2", "4", "5", "7", "8", "10"];

        match.getMatchID(matches, year).then(function (data) {
            try {
                expect(data).deep.equals(expectedMatchIDs);
                matchIDs = data;
                // console.log(matchIDs);
                done();
            } catch (e) {
                done(e);
            }
        })
    })

    // it("For the year 2016 plot the extra runs conceded per team.", function (done) {
    //     let matches = path.resolve("question3m.sv");
    //     let deliveries = path.resolve("question3d.csv");

    //     const expectedResult = {
    //         'Rising Pune Supergiants': 108,
    //         'Mumbai Indians': 102,
    //         'Kolkata Knight Riders': 122,
    //         'Delhi Daredevils': 106,
    //         'Gujarat Lions': 98,
    //         'Kings XI Punjab': 100,
    //         'Sunrisers Hyderabad': 107,
    //         'Royal Challengers Bangalore': 156
    //     };

    //     match.extraRuns(matches, deliveries).then(function (data) {
    //         try {
    //             expect(data).deep.equals(expectedResult);
    //             done();
    //         } catch (e) {
    //             done(e);
    //         }
    //     })
    // })

})