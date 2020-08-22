const indexRouter = require('./routes/indexRoute')
const userRouter = require('./routes/userRoute')
const dataRouter = require('./storage/createDataset')

const express = require('express')
const cors = require('cors')
require('dotenv').config()
const logger = require('morgan')
const { connect } = require('mongoose')
const app = express()

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

    dbName: 'jobRec',
    retryWrites: true,
    w: 'majority'
}
connect(process.env.DB_URI, dbOptions)
    .then(() => {
        console.log('💠 Connected to mongoDB');
    })
    .catch(err => {
        console.error('🔴🔴 Unable to connect to the database');
    })

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(logger('dev'))

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/data', dataRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
