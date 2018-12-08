require("dotenv").config();
// File System Module
var fs = require("fs");
// Keys Info
const keys = require('./keys');
// Axios Info
const axios = require('axios');
// Inquirer Info
const inquirer = require('inquirer');
// Moment Info
const moment = require('moment');
// Chalk Info
const chalk = require('chalk');
// Chalk Animation
const chalkAnimation = require('chalk-animation');
// Spotify Info
const Spotify = require('node-spotify-api');
// Spotify Info
const spotify = new Spotify(keys.spotify);
// Inquirer prompt
inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: "Please select an option: ",
    choices: ["Find events for your favorite bands' concerts", "Get Spotify info for songs you like", "Get info about any movie you like", "Get a demo"]
}).then(liri => {
    switch (true) {
        case liri.choice === "Find events for your favorite bands' concerts":
            concertThis();
            break;
        case liri.choice === "Get Spotify info for songs you like":
            spotifyThisSong();
            break;
        case liri.choice === "Get info about any movie you like":
            movieThis();
            break;
        case liri.choice === "Get a demo":
            doWhatItSays();
            break;
        default:
    }
    // CONCERT Functions-------------------------------------------------------
    function concertThis() {
        inquirer.prompt({
            type: "input",
            message: chalkAnimation.rainbow("Please enter an artist: "),
            name: "nameOfArtist"
        }).then(artistSelection => {
            var url = "https://rest.bandsintown.com/artists/" + artistSelection.nameOfArtist + "/events?app_id=b2b1d13e2f579627ed525e0f00cf2713";
            console.log(url);
            axios.get(url).then(function (response) {
                var concertInfo = response.data
                for (i = 0; i < concertInfo.length; i++) {
                    var newTime = concertInfo[i].datetime;
                    newTime = moment(newTime).format("MM/DD/YYYY");
                    console.log(`
${chalk.green.inverse(`=============================================================`)}
${chalk.redBright.inverse(`${concertInfo[i].lineup} EVENT NUMBER: ${chalk.blueBright.inverse(i)}`)}
${chalk.green.inverse(`=============================================================`)}
${chalk.magenta.bold(`* Name of venue: ${concertInfo[i].venue.name}`)}
${chalk.yellowBright.bold(`* Location of venue: ${concertInfo[i].venue.country}, ${concertInfo[i].venue.city}`)}
${chalk.cyan.bold(`* Date of event: ${newTime}\n`)}
             `);
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }
    // SPOTIFY Function--------------------------------------------------------
    function spotifyThisSong() {
        inquirer.prompt({
            type: "input",
            message: chalkAnimation.rainbow("Enter song: "),
            name: "songName"
        }).then(songSelection => {
            spotify.search({ type: 'track', query: songSelection.songName, limit: 20 }, (err, body) => {
                if (err) throw err;
                console.log(`
${chalk.magentaBright.inverse(`=============================================================`)}
${chalk.greenBright.inverse(`INFORMATION REGARDING THE SONG: ${body.tracks.items[0].name}`)}
${chalk.magentaBright.inverse(`=============================================================`)}
${chalk.redBright.bold(`* Artist: ${body.tracks.items[0].artists[0].name}`)}
${chalk.greenBright.bold(`* Name of song: ${body.tracks.items[0].name}`)}
${chalk.cyan.bold(`* To play the song click on the following link:\n ${chalk.white.underline(`${body.tracks.items[0].preview_url}`)}`)}
${chalk.yellowBright.bold(`* The song's album is called: ${body.tracks.items[0].album.name}\n`)}`)
            });
        });
    }
    // MOVIE Function----------------------------------------------------------
    function movieThis() {
        inquirer.prompt({
            type: "input",
            message: chalkAnimation.rainbow("Please enter the movie's name: "),
            name: "movieName"
        }).then(movieSelection => {
            var queryURL = "http://www.omdbapi.com/?t=" + movieSelection.movieName + "&y=&plot=short&apikey=trilogy";
            axios.get(queryURL).then(function (response) {
                var movieInfo = response.data
                console.log(`
${chalk.blueBright.inverse(`=============================================================`)}
${chalk.redBright.inverse(`INFORMATION REGARDING THE MOVIE: ${movieInfo.Title}`)}
${chalk.blueBright.inverse(`=============================================================`)}
${chalk.yellowBright.bold(`* Year movie came out is: ${movieInfo.Year}`)}
${chalk.redBright.bold(`* IMDB movie rating: ${movieInfo.imdbRating}`)}
${chalk.cyan.bold(`* Country of production: ${movieInfo.Country}`)}
${chalk.magenta.bold(`* Movie plot: ${movieInfo.Plot}`)}
${chalk.blue.bold(`* Movie Actors: ${movieInfo.Actors}\n`)}
`);
            })
        });
    }
    // doWhatItSays Function---------------------------------------------------
    function doWhatItSays() {
        fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
                console.log(err);
            }
            var dataArray = data.split(",")
            var action = dataArray[0]
            var title = dataArray[1]
            if (action === "spotify-this-song") {
                spotify.search({ type: 'track', query: title, limit: 20 }, (err, body) => {
                    if (err) throw err;
                    console.log(`
${chalk.cyanBright.inverse(`===================================================`)}
${chalk.redBright.inverse(`INFORMATION REGARDING THE SONG: \u2665 ${body.tracks.items[0].name} \u2665 `)}
${chalk.cyanBright.inverse(`===================================================`)}
${chalk.redBright.bold(`* Artist: ${body.tracks.items[0].artists[0].name}`)}
${chalk.greenBright.bold(`* Name of song: ${body.tracks.items[0].name}`)}
${chalk.cyan.bold(`* To play the song click on the following link:\n ${chalk.white.underline(`${body.tracks.items[0].preview_url}`)}`)}
${chalk.yellowBright.bold(`* The song's album is called: ${body.tracks.items[0].album.name}\n`)}`)
                });
            }
            console.log(data);
        })
    }
});
