let express = require('express');
let router = express.Router();

router.get('/', (req, res, err) => {
    res.render('auth');
    outputer = () => {console.error("Reached till auth")}
    setTimeout(outputer, 1000);

    // res.redirect('back');   //redirects back to the referrer, defaults to '/' when referrer not present
});

module.exports = router;  //exporting router for further use