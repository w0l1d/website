if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const  app = express();
const expressLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');
app.set('views', `${__dirname}\\views`)
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'))


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log("Connected to Mongoose!"))


const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');

app.use('/', indexRouter);
app.use('/auth', authRouter);





app.listen(process.env.PORT || 3000)