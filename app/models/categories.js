
const { default: mongoose, Types } = require("mongoose");

const schema= new mongoose.Schema({

    title:{type: String, required:true},
    parentId :{type:Types.ObjectId,default:""}

})


module.exports={
    categoryModel: mongoose.model("category", schema)

}