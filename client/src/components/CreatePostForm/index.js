import React from "react";

function CreatePostForm() {
  return (
    <section className= "container-flex">
        <h1>Post your plants</h1>
        <input class="input is-success" 
   type="text" placeholder="type of plant"/>
   <input class="input is-success" 
   type="text" placeholder="Common plant name"/>
   <textarea class="textarea" placeholder="description of plant, condition, price"></textarea>
   <input class="input is-success" 
   type="text" placeholder="your email address"/>
   <input class="input is-success" 
   type="text" placeholder="upload your photos of the plant"/>
  <button class="button is-success">Success</button>
    </section>
  )
}; 
export default CreatePostForm;
