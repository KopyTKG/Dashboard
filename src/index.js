import React from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter, 
  Route, 
  Switch,
  Redirect
} from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import UserLayout from "layouts/Common/User.js";
import Login from "views/Login";

import "assets/css/default.scss";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-circular-progressbar/dist/styles.css"

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";


import Cookies from "js-cookie";
import Reset from "views/Reset";

const Logout =() =>{
  Cookies.remove("token");
  window.location.href = "/";
}

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
      {/* Root view */}
         <Switch>
          { Cookies.get("token") ? 
          <>
          <Route path="/admin" render={(props) => <AdminLayout Logout={Logout}/>} />
          <Route path="/user" render={(props) => <UserLayout Logout={Logout}/>} />
          <Route exact path="/">
            <Redirect from="/" to="/user" />
          </Route>
          </>          
          :
          <>            
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/reset/login">
              <Reset/>
            </Route>
            <Route exact path="/">
              <Redirect form="/" to="/login"/>
            </Route>
            {/* <Route exact path="/settings/password">
              {alert("reset")}
            </Route> */}
          </>
          }
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
