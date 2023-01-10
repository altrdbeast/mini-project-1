//route for each page 

const express = require ('express')
const rickmortyController = require('../controllers/rickmortyController')
const router = express.Router()

router.get('/characters', (req, res) => {
  rickmortyController.getrmCharacters(req, res)
})

router.get('/episodes', (req, res) => {
  rickmortyController.getrmEpisodes(req, res)
})

router.get('/locations', (req, res) => {
  rickmortyController.getrmLocations(req, res)
})

router.get('/firstfivecharacters', (req, res) => {
  rickmortyController.getFirstFiveCharacters(req, res)
})

router.get('/firstfiveepisodes', (req, res) => {
  rickmortyController.getFirstFiveEpisodes(req, res)
})

router.get('/firstfivelocations', (req, res) => {
  rickmortyController.getFirstFiveLocations(req, res)
})

module.exports = router;