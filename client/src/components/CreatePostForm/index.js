import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import UploadButton from '../UploadButton'
import API from '../../utils/API'

function CreatePostForm({ user_id }) {

  const [image_link, setImage_link] = useState('');
  const [postInfo, setPostInfo] = useState({
    plant_name: '',
    description: ''
  })
const history = useHistory();

  async function handleFormSubmit(){
    await API.savePost({
      plant_name: postInfo.plant_name,
      description: postInfo.description,
      image_link,
      user_id
    })
    history.push('/account-page')
  }

  return (
    <section className="container-flex">
      <h1 className= "title" style= {{display: "flex",justifyContent: "center",fontSize: "25px", color: "#648c11" }}>Post your plants</h1>
      <input
        className="input is-dark"
        type="text"
        style={{ width: "50%",margin:"5px" }}
        placeholder="Plant Name"
        value={postInfo.plant_name}
        onChange={e => setPostInfo({...postInfo, plant_name: e.target.value})}
      />

      {/* <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="Common plant name"
      /> */}

      <textarea
        className="textarea is-dark"
        style= {{ width: "40%", margin:"5px"}}
        placeholder="description of plant, condition, price"
        value={postInfo.description}
        onChange={e => setPostInfo({...postInfo, description: e.target.value})}
      ></textarea>

      {/* <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="your email address"
      /> */}
      <UploadButton setImage_link={setImage_link} />

      <button
        className="button"
        style={{background: "#8c9e5e", margin: "5px" }}
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </section>
  );
}
export default CreatePostForm;
