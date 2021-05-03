import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../utils/CloudinaryService";

function CloudinaryTest() {
  const [images, setImages] = useState([]);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "repotted",
      tags: [tag, "anImage"],
      uploadPreset: "upload",
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

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);
  return (
    <div>
      <button onClick={() => beginUpload("image")}>Upload Image</button>
      <section>
        {images.map((i) => (
          <Image key={i} publicId={i} fetch-format="auto" quality="auto" />
        ))}
      </section>
    </div>
  );
}

export default CloudinaryTest;
