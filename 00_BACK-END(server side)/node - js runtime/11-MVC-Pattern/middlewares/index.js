const fs = require("fs")

function StoreUsersReq(fileName) {
    return (req, res, next) => {
        fs.appendFile(
            fileName,
            `\n ${Date.now()} || ${req.method} || ${req.path}`,
            (err, data) => {
                if(!err){
                    next()
                }
            }
        )
    }
}

module.exports = {
    StoreUsersReq
}