const express = require("express")
const app = express()
const path = require("path")

const multer = require("multer")
const muterconfig = requier('./config/muterConfig')

// MW
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))



// routes
app.get('/', function (req, res) {
    res.render("home");
})

app.post("/upload", upload.single("imagee"), async function (req, res) {

    console.log(req.file);
    // console.log(req.body);


    
    // TO SET THE PROFILE PICTURE

    let user = await userModel.findOne({email : req.user.email})
    if(user){
        user.profilePicture = req.file.filename
        await user.save();

        res.redirect("userprofile")
    }

})




const port = 1212
app.listen(port);