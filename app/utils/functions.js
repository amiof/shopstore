const createHttpError = require("http-errors")
const JWT=require("jsonwebtoken")
const { SECRET_KEY } = require("./constant")



function randomCode(max,min){
    return Math.floor((Math.random()*(max-min))+min)
}

 const singAccessToken=(payload,expireTime)=>{
   return jwtToken=JWT.sign(payload,SECRET_KEY,{expiresIn:expireTime})
   
}



module.exports={
    randomCode,
    singAccessToken,
}