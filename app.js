var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser") ;

app.use(bodyParser.urlencoded({extended: true})) ;
app.set("view engine", "ejs") ;
app.use(express.static(__dirname + "/public")) ;

app.get("/", function(req, res){
    res.render("index") ;
}) ;

app.get("/register", function(req, res){
    res.render("register") ;
}) ;

app.get("/login", function(req, res){
    res.render("login") ;
}) ;

app.get("/about", function(req, res){
    res.render("about") ;
}) ;

app.get("/runs", function(req, res){
    res.render("runs") ;
}) ;

app.listen(3000, function(){
    console.log("BSB website is live")
}) ;