const mongoose = require("mongoose")

const Admin = new mongoose.Schema({
    id:{type:String , required:true , unique:true},
    password:{type:String , required:true}
},
{collection:"admin"})
const model = mongoose.model("admin" , Admin)

module.exports = model