const File = require("../models/File")

const cloudinary = require("cloudinary").v2



exports.localFileUpload = async (req, res) => {
    try {
        // fetch all the files
        const file = await req.files.file;
        console.log("All Files :", file);

        // Path of server at which the files will store 
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`
        console.log("path :", path);

        // Move file to the path 
        file.mv(path, (err) => {
            console.log(err);
        })

        // Send response
        res.json({
            success : true,
            message : "Local File Uploaded Successfully !"
        })
    } 
    catch (error) {
        console.log(error);

        res.json({
            success : false,
            message : "Error in uploading Local Files"
        })
    }
}



exports.imageUpload = async (req, res) => {
    try {
        
        // fetch all the datas and files
        const {name, email, tags} = req.body
        const file = req.files.fileName
        // console.log(name, ",", email, ",", tags);
        // console.log(file);
        

        // do validations
        const supportedTypes = ["jpg", "jpeg", "png"]
        const fileType = file.name.split(".")[1].toLowerCase()

        // if the format is not supported
        function isFileTypeSupported(fileType, supportedTypes) {
            return supportedTypes.includes(fileType)
        }

        if(! isFileTypeSupported(fileType, supportedTypes) ){
            return res.status(400).json({
                success : false,
                message : "File format is not supported"
            })
        }

        // if the format of the file is supported
        
        async function UploadFileToCloudinary(file, folder) {
            const option = {folder}
            return await cloudinary.uploader.upload(file.tempFilePath, option)
        }

        const response = await UploadFileToCloudinary(file, "ImageBazzar")
        console.log(response);
        
        // save datas to database 
        const storeData = await File.create({
            name,
            email,
            tags,
            URL : response.secure_url
        })

        // return a response if try block runs
        res.status(201).json({
            success : true,
            message : "File Successfully uploaded to cloudinary"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "Error in file(image) Uploading to Cloudinary"
        })
        console.log(error);
    }
}



exports.videoFileUpload = async (req, res) => {
    try {
        const {name, email, tags} = req.body
        const file = req.files.videoFile

        // console.log(name, ",", email, ",", tags);
        // console.log(file);


        const supportedVedioFileTypes = ["mp4", "mov", "mpg", "mpeg"]
        const fileType = file.name.split(".")[1]
        console.log(fileType);
        
        function isFileTypeSupported(fileType, supportedTypes){
            return supportedTypes.includes(fileType)
        }

        if(! isFileTypeSupported(fileType, supportedVedioFileTypes)) {
            return res.status(400).json({
                success : false,
                message : "vedio file format is not supported"
            })
        }

        async function UploadFileToCloudinary(file, folder) {

            // const options = {folder}
            // options.resource_type = "auto" 
            const options = {
                folder: folder,
                resource_type: "auto",
                use_filename: true,
              };

              console.log("Uploading file with options:", options);


            return await cloudinary.uploader.upload(file.tempFilePath, options)
        }
        console.log("uploading video");
        
        const response = await UploadFileToCloudinary(file, "ImageBazzar")
        console.log(" response :", response);

        console.log("video uploaded");
        

        const storeData = await File.create({
            name,
            email,
            tags, 
            URL : response.secure_url
        })
        console.log(storeData);
        

        // return a response if try block runs
        res.status(201).json({
            success : true,
            message : "Video File Successfully uploaded to cloudinary"
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "Error in file(video) Uploading to Cloudinary"
        })
        console.log(error); 
    }
}



exports.uploadCompressedImage = async (req, res) => {
    try {
        // Fetch all details
        const {name, email, tags} = req.body
        const Docs = req.files.image

        console.log(name, ",", email, ",", tags);
        console.log(Docs);

        // Do validations for file format
        const supportedDocTypes =["jpg", "jpeg", "png"]
        const DocType = Docs.name.split(".")[1].toLowerCase()

        // If the file format is not supported
        
        function checkFileFormatSupported(fileType, supportedType) {
            return supportedType.includes(fileType)
        }

        if(! checkFileFormatSupported(DocType, supportedDocTypes)){
            return res.status(400).json({
                success: false,
                message : "File Format is not supported"
            })
        }

        // If the file format is supported

        async function uploadDOcToCloudinary(file, folder, quality) {
            const options = {folder}
            options.quality = quality

            return await cloudinary.uploader.upload(file.tempFilePath, options)
        }

        const response = await uploadDOcToCloudinary(Docs, "ImageBazzar", 50)

        // Store Data into MongoDB

        const storeData = await File.create({
            name,
            email, 
            tags,
            URL : response.secure_url
        })
        console.log(storeData);

        // return a response if try block runs
        res.status(201).json({
            success : true,
            message : " File Successfully uploaded to cloudinary"
        })
    } 
    catch (error) {
        res.status(400).json({
            success : false,
            message : "Error in Uploading to Cloudinary"
        })
        console.log(error);  
    }
}