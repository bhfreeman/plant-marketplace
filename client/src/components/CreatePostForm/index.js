import React from "react";

function CreatePostForm() {
  return (
    <section className="container-flex">
      <h1>Post your plants</h1>
      <input
        class="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="type of plant"
      />

      <input
        class="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="Common plant name"
      />

      <textarea
        class="textarea"
        // style= {{ width: "50%"}}
        placeholder="description of plant, condition, price"
      ></textarea>

      <input
        class="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="your email address"
      />

      <input
        class="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="upload your photos of the plant"
      />
      <button
        class="button is-success"
        style={{ position: "absolute", top: "10px", left: 10 }}
      >
        Success
      </button>
    </section>
  );
}
export default CreatePostForm;
