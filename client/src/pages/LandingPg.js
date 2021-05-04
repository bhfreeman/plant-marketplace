import React from 'react'
import HomePageLogin from '../components/HomePageLogin'
import Footer from "./components/Footer"
import HomePageLogin from "./components/HomePageLogin"
import Nav from "./components/Navbar"

// need to add the API call for the browsing function? 
//or are they just looking at posts?
class LandingPg extends Component{
// state={


// }

handleInputChange= event =>{
    this.setState({ search: event.target.value})
}

// function for the submit button
handleFormSubmit = event=>{
    event.preventDefault();
    this.search()
    
    }
render() {
    return (
        <div>
            <Nav/> 
            <HomePagePosts/>
            <HomePageLogin
             handleInputChange={this.handleInputChange}
             handleFormSubmit= {this.handleFormSubmit}
            //  search={this.state.search}
             />
          <Footer/>
        </div>
    )
}
}
export default LandingPg; 
