const express = require("express")
const server = express()

const shortid = require("shortid")

const url = require("./models/url.js")

//DB connection
const DBConnect = require("./DBconnection")
DBConnect.connectToMongoDB("mongodb://localhost:27017/db-6")
 

// mw : for integrating the public folder for styling 
server.use(express.static("public"))
//mw :for reading data through post route
server.use(express.json())
server.use(express.urlencoded({extended : true}))

// setting up engine
server.set("view engine", "ejs")

// routes
server.get("/", (req, res) => {
    res.render("server", {shortedURL : null})
})
 
server.post("/shortingURL", async (req, res) => {
    longURL = req.body.IPlongURL;
    shortURL = shortid.generate()

    shortedURL = `http:/${shortURL}`

    await url.create({
        longURL : longURL,
        shortURL : shortURL
    })

    console.log("URL has been shortened.");
    res.render("server", { shortedURL });
})



server.get("/:shortURL", async (req, res) => {
    const shorturl = req.params.shortURL;

    try {
        const findOnDB = await url.findOne({ shortURL: shorturl });

        if (findOnDB) {
            // Check if the long URL has "http://" or "https://"
            let redirectURL = findOnDB.longURL;
            if (!redirectURL.startsWith("http://") && !redirectURL.startsWith("https://")) {
                redirectURL = `http://${redirectURL}`;
            }
            res.redirect(redirectURL);
        } else {
            // If no URL is found, send an error response
            res.status(404).send("Shortened URL not found.");
        }
    } catch (error) {
        console.error("Error in finding the URL:", error);
        res.status(500).send("Internal Server Error");
    }
});


const port = 3333
server.listen(`${port}`, () => {console.log(`Express server is running at port no : ${port}`);
})