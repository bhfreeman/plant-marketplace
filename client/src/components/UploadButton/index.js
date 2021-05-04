import React from "react";
import { Image } from "cloudinary-react";
import { openUploadWidget } from "../../utils/CloudinaryService";

function UploadButton() {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "repotted",
      tags: [tag],
      uploadPreset: "unsigned_upload",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          setImages([...images, photos.info.public_id]);
        }
      } else {
        console.log(error);
      }
    });
  };
  return(
  <button onClick={() => beginUpload(`${userName}_${saleItemName}`)}>Upload Image</button>);
}

export default UploadButton;
