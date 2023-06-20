const mongoose = require('mongoose');

const Idschema = new mongoose.Schema({
   playListID:{
    type: String,
    required:true
   }
})

const Id = mongoose.model("PlayList-Ids" , Idschema);
module.exports = Id;