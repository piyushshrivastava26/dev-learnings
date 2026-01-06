const mutler = require("multer")
const crypto = require("crypto")
const path = require("path")

// disk storage setup

const storage = mutler.diskStorage({
    destination : function(req, file, cb){
        cb(null, "./public/images/uploads")
    },

    filename : function(req, file, cb){
        crypto.randomBytes(12, function(err, bytes){
            const filekaNaam = bytes.toString("hex") + path.extname(file.originalname)
            cb(null, filekaNaam)
        })
    }
})

const upload = mutler({storage : storage})

// export upload variable
module.exports = upload