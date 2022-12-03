const application  = require("./app/server");
const url_db="mongodb://127.0.0.1:27017/shopeDB"
new application(5000,url_db)