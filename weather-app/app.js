const request = require('request')

const url = 'https://api.darksky.net/forecast/de244e91058edbc5e4a70e8773915b41/37.8267,-122.4233?units=si&lang=he'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature 
    const precip = response.body.currently.precipProbability
    const summary = response.body.daily.data[0].summary
    console.log(summary + ' It is currently ' + temp + ' out. There is a ' + precip + '% chance of rain.' )
})
