const createHttpError = require("http-errors")
const JWT=require("jsonwebtoken")
const { token } = require("morgan")
const { userModel } = require("../models/user")
const { SECRET_KEY } = require("./constant")



function randomCode(max,min){
    return Math.floor((Math.random()*(max-min))+min)
}

 const singAccessToken=(payload,expireTime)=>{
   return jwtToken=JWT.sign(payload,SECRET_KEY,{expiresIn:expireTime})
   
}

function verifyToken(toke){
    const token =JWT.verify(toke,SECRET_KEY,function(error,payload){
        if(error) return false
         return  payload
    })
    return token
}
const tokenGeneratorWhitRefreshToken=(token,refreshToken)=>{
    const tokenValid=verifyToken(token)
    const refreshTokenValid=verifyToken(refreshToken)
    if(refreshTokenValid){
        if(!tokenValid){
            const user=userModel.findOne({mobile:refreshTokenValid.mobile})
            if(user){
                const newToken=singAccessToken({mobile:user.mobile},"1d")
                const json={token:newToken,refreshToken}
                
                return json
            }
        }
        return true
    }
}

module.exports={
    randomCode,
    singAccessToken,
    verifyToken,
    tokenGeneratorWhitRefreshToken
}