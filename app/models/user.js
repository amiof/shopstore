const { default: mongoose} = require("mongoose");

const schema= new mongoose.Schema({
    firstName:{type:String,},
    lastName:{type:String},
    username:{type:String, required:true},
    phone:{type:String, required: true},
    email:{type:String},
    password:{type:String},
    otp:{type:Object, default:{
        code: 0,
        expire:0
    }},
    bill:{type:[],default:[]},
    discount: {type:Number, default:0},
    birthday: {type:String},
    Roles: {type:[String],default:"USER"}
})


module.exports={
    userModel: mongoose.model("user", schema)

}