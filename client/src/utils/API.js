import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Update post with the given id
  updatePost: function(id) {
    return axios.update("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },
  login: function(loginData) {
    return axios.post("/api/user/login", loginData)
  },
  logout: function(){
    return axios.post('/api/user/logout')
  }, 
  createUser: function(userData){
    return axios.post('/api/user', userData)
  },
  getUserInfo: function(userID){
    return axios.get(`/api/user/find/${userID}`)
  }

  // @ToDo finish get for trefle API
  // Find Plant by Common Name via trefle.io web API
  // searchCommonNamePlants: function(commonName) {
  //   return axios.get(``)
  // }
};
