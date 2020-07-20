const express = require('express');
const router = express.Router();

router.get('/', (req, res, err) => {
    res.render('auth');

    res.redirect('back');   //redirects back to the referrer, defaults to '/' when referrer not present
});

module.exports = router;  //exporting router for further use