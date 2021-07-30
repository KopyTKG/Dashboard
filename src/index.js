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
import Login from "views/LoginDemo";

import "assets/css/default.scss";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";


import Cookies from "js-cookie";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
      {/* Root view */}
         <Switch>
          { Cookies.get("isLogin") ? 
          <>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/user" render={(props) => <UserLayout {...props} />} />
          <Route exact path="/">
            <Redirect from="/" to="/user" />
          </Route>
          </>          
          :
            <Route path="/">
              <Login/>
            </Route>
          }
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
