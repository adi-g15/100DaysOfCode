const path = require('path')
const express = require('express')
const mongoose = require('mongoose');

//Creating and checking mongoose connection
mongoose.connect("mongodb://localhost/AuthNode", {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
mongoose.connection //this is an ES6 promise
    .once('open', () => {
        console.log("Connected to the database ", "AuthNode");
    })
    .on('error', (err) => {
        console.error(err);
    })

const UserModel = require('./models/schema/userSchema');
const { resolveAny } = require('dns');
const { json } = require('express');

const app = express()
let n = 0;
function authMidWare(req, res, next) {

    //Check whether user is authenticated

    ++n;
    if(n===2){
        res.send("Done")
    }

    const authRoutes = ['/register', '/login', '/logout']    

    console.log(authRoutes.find(req.originalUrl))
    //Learnt -> ! of undefined is valid, and comes out to be true
    if( !req.auth ){
        console.log('redirecting in auth');
        return res.redirect('/register')
    }
    return next()

}

app.use(express.urlencoded())   //LEARNT -> To pass the middleware to use(), we pass including the parenthesis
app.use(authMidWare);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

/*LEARNT - 
    res.send() vs res.end() ->
    res.end() is used to quickly end the response without any data -
        `
            res.status(404).end()

        Though, if you need to 'respond with data', then prefere res.send() or res.json()*/

app.get('/', (req, res) => {
    return res.json({ status: "Authenticated User" })
})

app.get('/register', (req, res) => {
    res.render('home', (err, html) => {
        if(err){
            console.error(err);
            return;
        }
        return res.send(html);
    })

    // res.end()
})

app.post('/register', (req, res) => {
    const userData = req.body
    console.log(userData);

    if( req.body.password !== req.body.confPassword ){
        console.log('redirecting from submission');
        res.redirect('/register')
        return
            /*LEARNT -> Even after a response is redirected, and if previous function not returned, then the previous function continues running, hence multiple send() maybe working on same res object
                        Likely, even after redirecting, the next route just is a middleware, so this same response object is being passed repeatedly*/
    }

    if(userData.Email &&
        userData.UserName &&
        userData.Password &&
        userData.confPassword ){

            UserModel.create( userData, (err, user) => {
                if( err )
                    return next(err)
                console.log('redirecting after success');
                res.auth = true
                return res.redirect('/profile')
            })

        }

    let alreadyPresent = false

    console.log("hi there");
    if( alreadyPresent )
        res.json({ status: "Account already present, use forgot password in case you dont remember" })
    res.status(200).json({ status: "Account created" })
    // app.redirect('back')
})

    //Error-handling middleware, first arg is error, and have next even if not using it
    //At last handle all incomplete requests as 500(internal server error), or as passed, catch them, and display
app.use((err, req, res, next) => res.status(err.status || 500).json(err) )

const PORT = 5000;
app.listen(PORT, () => console.log('Listening on port' + PORT))