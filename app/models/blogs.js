const { default: mongoose } = require("mongoose");

const schema= new mongoose.Schema({
    author: {type: mongoose.Types.ObjectId, require:true},
    title: {type:String, require:true},
    text: {type:String, require:true},
    image: {type:String, require:true},
    tag: {type:[String], default:[]},
    category: {type:mongoose.Types.ObjectId,required:true},
    comments: {type: [],default:[]},
    like:{type:[mongoose.Types.ObjectId],default:[]},
    dislike:{type:[mongoose.Types.ObjectId],default:[]},
    bookmark:{type:[mongoose.Types.ObjectId],default:[]}
    
})


module.exports={
    blogModel: mongoose.model("blog", schema)

}