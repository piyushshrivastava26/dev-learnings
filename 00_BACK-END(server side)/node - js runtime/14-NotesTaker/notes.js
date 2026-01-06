const express = require("express")
const app = express()

const path = require("path")
const fs = require("fs")
// const { isUtf8 } = require("buffer")

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, "public")))

// setting view engine for ejs
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

// routes 


// for creating a task

app.get('/', function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files : files})
    })
})

app.post('/create', function(req,res){

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description , function(err){
    res.redirect("/")
    })

    console.log(req.body);
    console.log(req.params.title);
    res.redirect("/")
})

// for reading file

app.get("/files/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, fileData){
        // console.log(fileData);
        res.render("details", {filename : req.params.filename, fileData : fileData})
    })
})

// for editing title name

app.get("/edit/:filename", function (req, res) {
    res.render("editPage", {filename : req.params.filename})    
})

app.post('/edit', function (req, res) {
    // console.log(req.body) 
    // console.log(req.body.Prevtitle) 
    // console.log(req.body.Newtitle) 
    fs.rename(`./files/${req.body.Prevtitle}`, `./files/${req.body.Newtitle}`, function(err){
        if (err) {
            console.error("Error renaming file:", err);
            return res.status(500).send("Error renaming the file.");
        }
        res.redirect("/")
    })
})


const port = 1212
app.listen(port, ()=>{console.log("app is running")})