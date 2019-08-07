var mongoose =              require("mongoose") ;

var runSchema = new mongoose.Schema({
    gamename: String,
    category: String,
    video: String,
    estimate: String,
    description: String
}) ;

module.exports = mongoose.model("Run", runSchema) ;