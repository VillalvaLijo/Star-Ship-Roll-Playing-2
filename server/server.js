const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

//Route Includes

const userRouter = require('./routes/user.router');

//const shipRouter = require('./routes/ship.router');
// const battleRouter = require('./routes/battle.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//passport Session Configuration //
app.use(sessionMiddleware);

//start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use('/api/user', userRouter);

//app.use('/api/ships', shipRouter);
//app.use('/api/battles', battleRouter);

//Serve Static Files
app.use(express.static('build'));

//App Set //
const PORT = process.env.Port || 5000;

/* Listen */
app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
});


