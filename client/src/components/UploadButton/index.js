import React, {useState} from "react";
import { Image } from "cloudinary-react";
import { openUploadWidget } from "../../utils/CloudinaryService";

function UploadButton({setImage_link, userName, plantName}) {
  // const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "repotted",
      tags: [tag],
      uploadPreset: "unsigned_upload",
      sources: ['local']
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === "success") {
          // setImages([...images, photos.info.public_id]);
          setImage_link(photos.info.secure_url)
        }
      } else {
        console.log(error);
      }
    });
  };
  return(
  <button className="button" style ={{background: "#8c9e5e", margin: "5px"}} onClick={() => beginUpload(`${userName}_${plantName}`)}>Upload Image</button>);
}

export default UploadButton;
