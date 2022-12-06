const joi =require("joi")
const authSchema=joi.object({
    mobile:joi.string().length(11).pattern(/(\+98|0)?9\d{9}/).error(new Error ("شماره تلفن وارد شده معتبر نمی باشد"))
})
const checkOtpSchema=joi.object({
    mobile:joi.string().length(11).pattern(/(\+98|0)?9\d{9}/).error(new Error ("شماره تلفن وارد شده معتبر نمی باشد")),
    code:joi.string().min(4).error(new Error ("کد وارد شده معتبر نمی باشد"))
})
module.exports={
    authSchema,
    checkOtpSchema
}