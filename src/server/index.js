const dotenv = require('dotenv')
dotenv.config()

var path = require('path')

const express = require('express')
const app = express()
const mockAPIResponse = require('./mockAPI.js')

app.use(express.static('dist'))

const bodyParser = require('body-parser')
// Allow parsing of nested objects
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const fetch = require('node-fetch')

const PORT = 8085

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.post('/addUrl', async (req, res) => {
    try {
        let requestUrl = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${req.body.linkUrl}&lang=en`
        const response = await fetch(requestUrl)
        const json = await response.json()
        const { subjectivity, agreement, confidence, irony } = json
        const text = json.sentence_list[3].text
        res.send({
            confidence,
            agreement,
            subjectivity,
            irony,
            text
        })
    } catch (error) {
        console.log(error.message)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
module.exports = app
