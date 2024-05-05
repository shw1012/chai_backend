import {v2 as cloudinary} from "cloudinary"
import fs from "fs"   //fs meaning file system


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadonCloudinary = async (localfilepath) =>{
    try {
        if(!localfilepath)return null
        //upload the file on cloudinary
       const response = await cloudinary.uploader.upload
       (localfilepath , {
            resource_type:"auto"
        })
        //file has been uploaded successfull
        console.log("file is uploaded on cloudinary",response.url)
        return response;
    } catch (error) {
        //agr koi bhi cloudinary ko use kr rha hai toh itna hume pata hai ki file server pr toh hai
        //ab vo upload nhi hua toh problem toh hau 
        // so we need to remove that file for safe cleaning purpose
         fs.unlinkSync(localfilepath)
         //remove the locally saved temporary file as the upload operation
        //  got failed
        return null;
    }
}




cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });