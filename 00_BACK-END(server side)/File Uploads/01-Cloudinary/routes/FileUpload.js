const express = require("express")
const router = express.Router()

const {localFileUpload, imageUpload, videoFileUpload, uploadCompressedImage} = require("../controllers/fileUpload")


router.post("/localFileUpload", localFileUpload)

router.post("/imageUpload", imageUpload)

router.post("/videoUpload", videoFileUpload)

router.post("/compressedImage", uploadCompressedImage)


module.exports = router