const autoBind=require("auto-bind")
class controller{
    constructor(){
      autoBind(this)
    }
}
module.exports={
    controller
}