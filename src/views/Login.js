import {useRef} from "react";
import NotificationAlert from "react-notification-alert";

import FloatingLabel from "components/FloatingLabel/FloatingLabel";
import Cookies from "js-cookie";
import "../assets/css/default.scss";

import "../components/FloatingLabel/FloatingLabel.css"

const Login = () => {
    const notificationAlertRef = useRef(null);
  
    const notify = (type) => {
        let message;
        switch(type) {
            case "pass":
                message = (
                <div>
                    <div>
                        You have entered<b> invalid username or passowrd</b>.
                    </div>
                </div>
                )
                break;
            case "conn":
                message = (
                    <div>
                        <div>
                            <b>The Krew Dashboard</b> cannot connect to database. <br/> Please contact system admin.
                        </div>
                    </div>
                    )
                break;
        }
        var options = {};
        options = {
          place: "tc",
          message: message,
          type: "danger",
          //icon: "tim-icons icon-bell-55",
          autoDismiss: 7,
        };
        notificationAlertRef.current.notificationAlert(options);
      };
    const SendPayload = () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        fetch(
            process.env.REACT_APP_API_TYPE+
            process.env.REACT_APP_API_IP+':'+
            process.env.REACT_APP_API_PORT+
            '/login', 
            {
            method: 'POST',
            headers: 
            { 
                'Content-Type': 'application/json', 
                'user': username, 
                'pass': password
            }
        })
        .then(res => {
            if(!res.ok){
                if(res.status == 401) {
                    notify("pass");
                    throw new Error(res.status);
                }
                else {
                    notify("conn")
                    throw new Error(res.status);
                }
            }
            else return res.json();
        })
        .then(res => {
            console.log(res);
            if(res.success) {
                Cookies.set("token", res.token);
                setTimeout(() => {
                    window.location.href = "/user";
                }, 500);
            } else {
                notify("pass");
                document.getElementById("password").value = "";
            }
        })
        .catch((e)=>{
            console.log(e);
            //notify("conn");
            document.getElementById("password").value = "";
        })
        
    }
    return(
        <>
            {
                // window.location.href.split("/")[3] != "?#" ? window.location.href = "/?#"
                // : null
            }
            <div className="body">
                <div className="react-notification-alert-container">
                    <NotificationAlert ref={notificationAlertRef} />
                </div>
                <div className="bg"/>
                <div className="b-strip">
                    <form className="f-log" action="#" onSubmit={() => SendPayload()}>
                        <center>
                            <h3>
                                Login
                            </h3>
                        </center>
                        <FloatingLabel 
                           label="Username"
                           inputId="username"
                           type="text"
                           required={true} 
                        />
                        <label/>
                        <FloatingLabel 
                           label="Password"
                           inputId="password"
                           type="password"
                           required={true} 
                        />
                        <button type="submit" className="btn btn-warning">
                            Login
                        </button>
                        <br></br>
                        <br></br>
                        {/* <a > */}
                        <a href="/reset/login">
                        forgot password?
                        </a>
                        {/* </a> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;