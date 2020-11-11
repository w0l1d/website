const router = require('express').Router();
const User = require('../models/User')

router.get('/register', (req, res) => {
    res.render('register')
})


router.get('/login', (req, res) => {
    res.render('login')
})



router.post('/register', async (req, res) => {

    res.send("hello world!")

    //  validate the data before create a user
//    const {error} = registerValidation(req.body)
//    if (error) return res.status(400).send(error);
/*
    const usernameExists = await User.findOne({username: req.body.username})
    if (usernameExists) return res.status(400).send({
        error: {
            field: 'username',
            message: 'Username Already Exists'
        }
    })

    const emailExists = await User.findOne({prEmail: req.body.email})
    if (emailExists) return res.status(400).send({error: {field: 'email', message: 'Email Already Exists'}})


    const user = new User({
        username: req.body.username,
        prEmail: req.body.email,
        password: await encrypt(req.body.password),
        sendNews: req.body.sendNews
    })
*/
    try {
        const savedUser = await User.save();
        res.status(201).send(savedUser)
    } catch (error) {
        res.status(500).send(error)
    }

})

module.exports = router;
