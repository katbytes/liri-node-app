# &#35; LIRI Bot &#160;&#160;&#160; <img src="https://img.icons8.com/color/48/000000/drum-set.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/metal-music.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/electronic-music.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/rock-music.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/documentary.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/music-transcript.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/dj.png"><img src="https://img.icons8.com/color/48/000000/matrix-desktop.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/morpheus.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/trinity.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/neo.png">&nbsp;<img src="https://img.icons8.com/color/48/000000/matrix-hunter.png">
## LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
LIRI is a <b>Language Interpretation and Recognition Interface.</b> LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:

* <a href="https://www.bandsintown.com/">Bands in town</a>
* <a href="https://www.spotify.com/">spotify-this-song</a>
* <a href="http://www.omdbapi.com/">movie-this</a>
* do-what-it-says (aka Get a Demo)

<b>Technologies used:</b>
* <a href="https://nodejs.org/en/">Node.js</a>
* <a href="https://www.w3schools.com/whatis/whatis_js.asp">JavaScript</a>
* <a href="https://www.npmjs.com/">npm packages</a>: Spotify, node-spotify-api, axios, inquirer, moment, chalk/chalk-animation, fs module

<b>Screenshots:</b><br>
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/01.png" alt="screen 1" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/02.png" alt="screen 2" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/03.png" alt="screen 3" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/04.png" alt="screen 4" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/05.png" alt="screen 5" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/06.png" alt="screen 6" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/07.png" alt="screen 7" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/08.png" alt="screen 8" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/09.png" alt="screen 9" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/10.png" alt="screen 10" height="76" width="76">
<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/11.png" alt="screen 11" height="76" width="76">

<img src="https://raw.githubusercontent.com/katbytes/liri-node-app/master/assets/imgs/liri-node-app.gif" alt="demo" height="450" width="875">

<b>How to Run The LIRI Bot:</b>
1) Type <b>'node liri.js'</b> Key down to <b>Find events for your favorite bands' concerts</b>, type in a band. This will show the following information about the bands' concert info in your terminal window:
* Bands' EVENT NUMBER: # of shows
* Name of venue
* Location of venue
* Date of event
2) Type <b>'node liri.js'</b> Key down to <b>Get info about any movie you like</b>, type in a song. This will show the following information about the song in your terminal window:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
3) Type <b>'node liri.js'</b> Key down to <b>Get info about any movie</b>, type in a movie. This will show the following information about the movie in your terminal window:
* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Country where the movie was produced
* Plot of the movie
* Actors in the movie
4) Type <b>'node liri.js'</b> Key down to <b>Get a demo.</b> This will show the song information from your .txt file in your terminal window:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
