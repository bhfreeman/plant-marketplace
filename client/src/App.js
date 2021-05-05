import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { CloudinaryContext } from "cloudinary-react";

// Pages
import Nav from "./components/Nav";
import LandingPg from "./pages/LandingPg";
import SearchPage from "./pages/SearchPage";
import UserAccountPage from "./pages/UserAccountPage";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')

  return (
    <StoreProvider>
      <CloudinaryContext cloudName="repotted">
        <Router>
          <div>
            <Nav loggedIn={loggedIn} />
            <Switch>
              <Route exact path="/" component={LandingPg} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/account-page">
                <UserAccountPage userId={userId} />
              </Route>
              <Route exact path="/login-signup">
                <Login
                  userId={userId}
                  setUserId={setUserId}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn} />
              </Route>
              {/* <Route exact path="/account-page"
                userId={userId} 
                component={UserAccountPage} />
              <Route exact path="/login-signup"
                userId={userId}
                setUserId={setUserId}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                component={Login} /> */}
            </Switch>
            <Footer />
          </div>
        </Router>
      </CloudinaryContext>
    </StoreProvider>
  );
}

export default App;
