import React from "react";

function CreatePostForm() {
  return (
    <div>
      <h1> Create your Post</h1>
      <input class="input is-success" type="text" placeholder="Title" />
      <textarea
        class="textarea is-success"
        placeholder="Description"
      ></textarea>
      <button class="button is-success">Success</button>
    </div>
  );
}

export default CreatePostForm;
