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
        const user = result && result.rows && result.rows[0]  //Look deeper into this what is user exactly as a && 

        console.log("server/strategies/user.strategy  line 13, const user = ", user);

        if(user){
            // user found
            delete user.password; // remove password so it doesn't get sent
            // done takes an error (null in this case) and a user
            done(null, user);
        } else{
            //user not found
            //done takes an error (null in this case) and a user (also null in this case)
            //this will result in the server returning a 401 status code
            done(null, null);
        }
    }).catch((error) => {
        console.log('Error with query during deserializing user ', error);
        // done takes an error (we have one) and a user (null in this case)
        //this will result in the server returning a 500 status code
        done(error, null);
    });
});

//does actual work of logging in
passport.use('local', new LocalStrategy((username, password, done) =>{
    pool.query('SELECT * FROM "user" WHERE username = $1', [username])
        .then((result) => {
            const user = result && result.rows && result.rows[0];
            console.log("/server/strategies/user.strategy.js line 40 cont user = ",user );
            if (user && encryptLib.comparePassword(password, user.password)){
                // All good!, passwords match!
                // done takes an error (null in this case) and a user

                console.log("Inside if statement in Local Strartegy in user.strategy, user.password ", user.password);
                done(null, user);
            } else {
                // Not good! Username and password do not match.
                // done takes an error (null in this case) and a user (also null in this case)
                // this will result in the server returning a 401 status code
                done(null, null);
            }
        }).catch((error) => {
            console.log('Error with query for user ', error);
            //done takes an error (We have one) and a user (null in this case)
            //this will result in the server returning a 500 status code
            done(error, null);
        });
}));

module.exports = passport;