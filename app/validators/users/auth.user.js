const joi =require("joi")
const authSchema=joi.object({
    mobile:joi.string().length(11).pattern(/(\+98|0)?9\d{9}/).error(new Error ("شماره تلفن وارد شده معتبر نمی باشد"))
})
module.exports={
    authSchema
}