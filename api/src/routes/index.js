const { Router } = require('express');
//Imports
const {getVideogames} = require('./videogame/getVideogame')
const {getVideogamesId} = require('./videogame/getVideogameId')
const {postGame} = require('./videogame/postVideogame')
const {getGenres} = require('./genres/getGenres')
//--------------------------------------------------
const router = Router();

//bring all countries or the query search.
router.get('/videogames', getVideogames);
//--------------------------------------------------
//brings the country by the id.
router.get('/videogames/:idVideogame', getVideogamesId);
//--------------------------------------------------
//let the user post an activity.
router.post('/videogame', postGame);
//--------------------------------------------------
//get activities to visual them.
router.get('/genres', getGenres)

module.exports = router;