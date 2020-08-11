const functions = require('firebase-functions')

// const app = require('../app.js')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

let n = 0
const theStart = Date.parse('Fri Jul 17 2020 00:00:01 GMT+0530 (India Standard Time)')


exports.whatDayIsIt = functions.https.onRequest((req, res) => {
    ++n
    functions.logger.info("Asked WhatDayIsIt " + n + "th time!", {structuredData: true});

  
    // if(linkedProbs[req.params.psId] != undefined){
    //     return res.send(linkedProbs[req.params.psId])
    // }

    let now = ( Date.now() - theStart )/(1000*3600*24)
    // console.log("Today is Day", Math.trunc(now) + 1)
    res.status(200).send(Math.trunc(now) + 1)
    // res.status(404).send('Galat ID hai, kripya sahi krke prayas kare')
});

// exports.api = app
