const router = require('express').Router();
const User = require('../models/user')
const { registerValidation } = require('../validations')
const encrypter = require('../encrypter')

router.get('/register', (req, res) => {
    res.render('register')
})


router.get('/login', (req, res) => {
    res.render('login')
})



router.post('/register', async (req, res) => {

    //  validate the data before create a user
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error);

    const usernameExists = await User.findOne({username:req.body.username})
    if (usernameExists) return res.status(400).send({error:{field:'username', message:'Username Already Exists'}})

    const emailExists = await User.findOne({prEmail:req.body.email})
    if (emailExists) return res.status(400).send({error:{field:'email', message:'Email Already Exists'}})



    const user = new User({
        username: req.body.username,
        prEmail: req.body.email,
        password: await encrypter.encrypt(req.body.password),
        sendNews: req.body.sendNews
    })

    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;
