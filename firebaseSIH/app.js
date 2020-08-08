// const express = require('express')
// const app = express()

// const selectedProbs = require('./assets/selectedProbs.json')
// const linkedProbs = {}  //A mapping between probId and associated PS

// for (const iterator of selectedProbs) {
//     linkedProbs[iterator.probId] = iterator
// }

// app.use(express.urlencoded())

// app.get('/ps/get/:psId', (req, res) => {
//     if(linkedProbs[req.params.psId] != undefined){
//         return res.send(linkedProbs[req.params.psId])
//     }

//     res.status(404).send('Galat ID hai, kripya sahi krke prayas kare')
// })

// app.get('*', (req, res) => {
//     res.status(500).send('Galat jagah aa gaye bhai')
// })

// app.listen(process.env.PORT || 3000, () => console.log('Listening on ' + 3000))
