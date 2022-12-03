const controller = require("../controller");

module.exports=new class homeController extends controller{
      indexPage(req,res,next){
        res.json({
            status:200,
            message: "index is up"
        })
      }
}
