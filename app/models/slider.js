
const { default: mongoose} = require("mongoose");

const schema= new mongoose.Schema({

title: {typeof: String},
image: {typeof: String,required:true},
text: {typeof: String},
type:{type:String,default:"main"}

})


module.exports={
    sliderModel: mongoose.model("slider", schema)

}