const {controller} = require("../controller");

class homeController extends controller{
      indexPage(req,res,next){
        try {
          res.json({
              status:200,
              message: "index is up"
          })
          
        } catch (error) {
          next(error)
        }
      }
}
module.exports={
    homeController:new homeController()
}