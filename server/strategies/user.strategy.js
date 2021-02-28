const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pool.query('SELECT * FROM "user" WHERE id = $1', [id]).then((result) =>{
        //Handle Errors
        const user = result && result.rows && result.rows[0]

        if(user){
            // user found
            delete user.password; // remove password so it doesn't get sent
            // done takes an error (null in this case) and a user
            done(null, user);
        } else{
            //user not found
            delete
        }
    })
})