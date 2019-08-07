var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    localStrategy = require("passport-local"),
    User          = require("./models/user"),
    flash         = require("connect-flash") ;

// module setup

app.use(bodyParser.urlencoded({extended: true})) ;
app.set("view engine", "ejs") ;
app.use(express.static(__dirname + "/public")) ;
app.use(flash()) ;

// passport setup

app.use(require("express-session")({
    secret: "you know nya",
    resave: false,
    saveUninitialized: false
})) ;
app.use(passport.initialize()) ;
app.use(passport.session()) ;
passport.use(new localStrategy(User.authenticate())) ;
passport.serializeUser(User.serializeUser()) ;
passport.deserializeUser(User.deserializeUser()) ;

// routes

app.get("/", function(req, res){
    res.render("index") ;
}) ;

app.get("/runs", function(req, res){
    res.render("runs") ;
}) ;

app.get("/about", function(req, res){
    res.render("about") ;
}) ;

// authentication routes

app.get("/register", function(req, res){
    res.render("register") ;
}) ;

app.get("/login", function(req, res){
    res.render("login") ;
}) ;

// listening port

app.listen(3000, function(){
    console.log("BSB website is live")
}) ;