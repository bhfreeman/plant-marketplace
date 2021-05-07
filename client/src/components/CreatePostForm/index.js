import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UploadButton from "../UploadButton";
import API from "../../utils/API";

function CreatePostForm({ user_id }) {
  const [image_link, setImage_link] = useState("");
  const [postInfo, setPostInfo] = useState({
    plant_name: "",
    plant_type: "",
    description: "",
  });
  const history = useHistory();

  async function handleFormSubmit() {
    await API.savePost({
      plant_name: postInfo.plant_name,
      plant_type: postInfo.plant_type,
      description: postInfo.description,
      image_link,
      user_id,
    });
    history.push("/account-page");
  }

  return (
    <section className="container-flex">
      <h1>Post your plants</h1>
      <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="Plant Name"
        value={postInfo.plant_name}
        onChange={(e) =>
          setPostInfo({ ...postInfo, plant_name: e.target.value })
        }
      />

      {/* <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="Common plant name"
      /> */}

      <textarea
        className="textarea"
        // style= {{ width: "50%"}}
        placeholder="description of plant, condition, price"
        value={postInfo.description}
        onChange={(e) =>
          setPostInfo({ ...postInfo, description: e.target.value })
        }
      ></textarea>
      <div className="select is-dark" style={{ margin: "5px" }}>
        <select className="is-hovered" name="Plants" onChange={(e) =>
          setPostInfo({ ...postInfo, plant_type: e.target.value })
        } >
          <option>Select Plant Type</option>
          <option value="flowering" >Flowering Plants</option>
          <option value="foliage">Foliage Type</option>
          <option value="succulents/cacti" >Succulents and Cacti</option>
          <option value="veggie" >Vegetables</option>
          <option value="seeds" >Seeds</option>
          <option value="trees" >Trees</option>
        </select>
      </div>

      {/* <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="your email address"
      /> */}
      <UploadButton setImage_link={setImage_link} />

      {/* <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="upload your photos of the plant"
      /> */}
      <button
        className="button is-success"
        style={{}}
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </section>
  );
}
export default CreatePostForm;
