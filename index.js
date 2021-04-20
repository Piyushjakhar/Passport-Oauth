const express = require('express');
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session')

require("./passport");

const PORT = 3000;


app.use(cookieSession({
    name: 'test-session',
    keys: ['key1', 'key2']
  }))
   
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/passed', (req,res) => {
    res.send(`Hello Mr. ${req.user.email}`);
})

app.get('/failed', (req,res) => {
    res.send("Login Failed!!");
})

app.get('/auth/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/passed');
  });

app.get('/', (req,res) => {
    res.send("Hello World!!");
})

app.get('/logout', (req,res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`);
})