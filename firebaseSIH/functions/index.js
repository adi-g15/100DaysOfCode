const functions = require('firebase-functions')

// const app = require('../app.js')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((req, res) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    
    console.log(req.params);
  
    if(linkedProbs[req.params.psId] != undefined){
        return res.send(linkedProbs[req.params.psId])
    }

    res.status(404).send('Galat ID hai, kripya sahi krke prayas kare')
});

// exports.api = app
