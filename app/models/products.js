
const { default: mongoose } = require("mongoose");

const schema= new mongoose.Schema({
    title: {type: String, required:true},
    short_desc: {type: String, required:true},
    total_desc: {type: String, required:true},
    image: {type: [String], required:true},
    category: {type:mongoose.Types.ObjectId, required:true},
    tag: {type: [String], default:[]},
    comments: {type:[], default: []},
    like: {type: [mongoose.Types.ObjectId], default:[]},
    dislike: {type: [mongoose.Types.ObjectId], default:[]},
    bookmark: {type: [mongoose.Types.ObjectId],default:[]},
    price: {type: Number, default:0},
    count: {type: Number, default:0},
    discount: {type: Number,default:0 },
    type: {type: String, },
    format: {type: String, },
    time: {type: String, },
    teacher: {type: mongoose.Types.ObjectId,default:""},
    feature: {type: Object, default:{
        length:"",
        height:"",
        width:"",
        weight: "",
        color:[],
        model:[],
        madeIn:[]
    }},


})


module.exports={
    productModel: mongoose.model("product", schema)

}