const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    // res.send("<h1>Hello World!</h1>")
    res.render('index')
})





module.exports = router