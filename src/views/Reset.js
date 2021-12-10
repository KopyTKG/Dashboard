import {useRef} from "react";
import NotificationAlert from "react-notification-alert";

import FloatingLabel from "components/FloatingLabel/FloatingLabel";
import Cookies from "js-cookie";
import "../assets/css/default.scss";

import "../components/FloatingLabel/FloatingLabel.css"

const Reset = () => {
    const notificationAlertRef = useRef(null);
  
    const notify = (type, color) => {
        let message;
        let clr = "danger";
        switch(color) {
            case "green":
                clr = "success";
                break;
            case "red":
                clr = "danger"
                break;
        }
        switch(type) {
            case "ok":
                message = (
                <div>
                    <div>
                        Password reset is complete.<b>Please cheack your email.</b>
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
          type: clr,
          //icon: "tim-icons icon-bell-55",
          autoDismiss: 7,
        };
        notificationAlertRef.current.notificationAlert(options);
      };
    const ResetPayload = () => {
        let username = document.getElementById("username").value;
        fetch(
            process.env.REACT_APP_API_TYPE    +
            process.env.REACT_APP_API_IP + ":"+
            process.env.REACT_APP_API_PORT    +
            '/reset' ,
            {
                method: 'POST' ,
                headers: {
                    'Content-Type': 'application/json',
                    'user' : username
                }
            }
        )
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(res => {
            if(res.success) {
                notify("ok","green")
            } else {
                throw new Error(res.status);
            }
        })
        .catch((e)=>{
            console.log(e);
            notify("conn","red");
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
                    <form className="f-log" action="#" onSubmit={() => ResetPayload()}>
                        <center>
                            <h3>
                                Reset password
                            </h3>
                        </center>
                        <FloatingLabel 
                           label="Username"
                           inputId="username"
                           type="text"
                           required={true} 
                        />
                        <button type="submit" className="btn btn-warning">
                            Reset password
                        </button>
                        <br></br>
                        <br></br>
                        {/* <a > */}
                        <a href="/login">
                        back to login.
                        </a>
                        {/* </a> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reset;