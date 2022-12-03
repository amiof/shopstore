const {controller} = require("../controller");

class homeController extends controller{
      indexPage(req,res,next){
        res.json({
            status:200,
            message: "index is up"
        })
      }
}
module.exports={
    homeController:new homeController()
}