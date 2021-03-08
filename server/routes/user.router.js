const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy')

const router = express.Router();

//handles Ajax request for user information if user is authenticated


router.get('/', rejectUnauthenticated, (req, res) => {
    //send back user object from the session (previously queried from the database)
    res.send(req.user);
});


     // TEST GET REQUEST
// router.get('/', (req, res) =>{
//     console.log("HELLO WORLD!")
//     res.sendStatus(200);
// })

// Handles POST request with new user data
//The only thing different from this and every other post we've sen 
// is that the password gets encrypted before being inserted

router.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);

    console.log("in file user.router.js, inside POST request, req.body: ", req.body);

    pool.query(sqlQuery, [username, password])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));

});

// Handles login form authenticate/logi n POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
//this middleware will send a 404 if not successful

router.post('/login', userStrategy.authenticate('local'), (req, res) =>{
    res.sendStatus(200);
});

//clear all server session information about this user
router.post('/logout', (req, res) => {
    // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
});

module.exports = router;



