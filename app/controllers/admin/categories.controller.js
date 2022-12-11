const { controller } = require("../controller");

class catagoriesController extends controller {
    createCategory(req,res,next){
        try {
            const {category}=req.body
            res.send("test")
     
        
            
        } catch (error) {
            next(error)
        } 
        
            
    }
    editCategory(req,res,next){

    }
    getAllCategories(req,res,next){

    }
    getCategoryById(req,res,next){

    }
    getAllParents(req,res,next){

    }
}

module.exports={
    catagoriesController: new catagoriesController()
}