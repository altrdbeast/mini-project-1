// Grab parameters for the query
// Fetch call from within controller
// res.json

const axios = require ('axios');

const getrmCharacters = (req, res) => 
{
const page = req.query.page 
  
  axios.get('https://rickandmortyapi.com/api/character?page='+ page)
      .then(response => {
          console.log(response.data)
          //send a successful response including the JSON data
          res.status(200).json({success: true, ...response.data})
      })
      .catch(error => {
          //send an error response including error details as JSON data
          res.status(500).json({success: false, message: error.message})
      })
}

const getrmEpisodes = (req, res) => 
{
const page = req.query.page 
  
  axios.get('https://rickandmortyapi.com/api/episode?page='+ page)
      .then(response => {
          console.log(response.data)
          //send a successful response including the JSON data
          res.status(200).json({success: true, ...response.data})
      })
      .catch(error => {
          //send an error response including error details as JSON data
          res.status(500).json({success: false, message: error.message})
      })
}

const getrmLocations = (req, res) => 
{
const page = req.query.page 
  
  axios.get('https://rickandmortyapi.com/api/location?page='+ page)
      .then(response => {
          console.log(response.data)
          //send a successful response including the JSON data
          res.status(200).json({success: true, ...response.data})
      })
      .catch(error => {
          //send an error response including error details as JSON data
          res.status(500).json({success: false, message: error.message})
      })
}

const getFirstFiveCharacters = (req, res) => 
{
  axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
      .then(response => {
          console.log(response.data)
          //send a successful response including the JSON data
          res.status(200).json({success: true, characters: response.data})
      })
      .catch(error => {
          //send an error response including error details as JSON data
          res.status(500).json({success: false, message: error.message})
      })
}

const getFirstFiveEpisodes = (req, res) => 
{
  axios.get('https://rickandmortyapi.com/api/episode/1,2,3,4,5')
      .then(response => {
          console.log(response.data)
          //send a successful response including the JSON data
          res.status(200).json({success: true, episodes: response.data})
      })
      .catch(error => {
          //send an error response including error details as JSON data
          res.status(500).json({success: false, message: error.message})
      })
}

const getFirstFiveLocations = (req, res) => 
{
  axios.get('https://rickandmortyapi.com/api/location/1,2,3,4,5')
      .then(response => {
          console.log(response.data)
          //send a successful response including the JSON data
          res.status(200).json({success: true, locations: response.data})
      })
      .catch(error => {
          //send an error response including error details as JSON data
          res.status(500).json({success: false, message: error.message})
      })
}

module.exports = {
 getrmCharacters,
 getrmEpisodes,
 getrmLocations,
 getFirstFiveCharacters,
 getFirstFiveEpisodes,
 getFirstFiveLocations
}