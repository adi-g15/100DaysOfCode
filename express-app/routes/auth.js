let express = require('express');
let router = express.Router();

router.get('/', (req, res, err) => {
    res.render('auth');
    console.error("Reached till auth")

    // res.redirect('back');   //redirects back to the referrer, defaults to '/' when referrer not present
});

module.exports = router;  //exporting router for further use