const mongoose = require("mongoose")

const nodemailer = require("nodemailer")

const fileSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    tags : {
        type : String
    },
    URL : {
        type : String
    }
},{
    timestamps : true
})


// POST MIDDLEWARE TO SEND EMAIL USING NODE-MAILER :

fileSchema.post("save", async function (doc) {
    try {
        console.log("DOC :", doc);

        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST,
            auth : {
                user : process.env.MAIL_USER,
                pass : process.env.MAIL_PASSWORD
            }
        })

        let sendMail = await transporter.sendMail({
            from : "Cloudinary Cloud - by DECODER",
            to : doc.email,
            subject : "New File Uploaded on Cloudinary(ImageBazzar)",
            html : ``
        })
        
    } catch (error) {
        console.log(error);
         
    }
})



const File = mongoose.model("FileRecords", fileSchema)

module.exports = File