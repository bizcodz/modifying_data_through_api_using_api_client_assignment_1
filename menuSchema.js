const mongoose= require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true,
        min:0,
    }
})
const MenuItem=mongoose.model('MenuItem',menuSchema);

module.exports=MenuItem;