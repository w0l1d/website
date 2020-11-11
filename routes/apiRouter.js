const express = require('express');
const app = express();
const router = express.Router();
const auth = require('auth');


router.get('/', (req, res, next) => {
    // res.send("<h1>Hello World!</h1>")
    res.render('index')
})




module.exports = router