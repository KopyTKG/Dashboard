import { useEffect } from "react";
import axios from "axios";
import FloatingLabel from "components/FloatingLabel/FloatingLabel";
import Cookies from "js-cookie";
import "../assets/css/default.scss";

import "../components/FloatingLabel/FloatingLabel.css"

const Login = () => {
    async function OnMount() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let result = await fetch('http://10.25.0.5:5454/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'user': username, 'pass': password}
        })
        let res = await result.json();
        console.log(res);
        alert("hey");
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }
    
        
        // const body = ;
        // axios.post("", {body})
        // .then(res => {
            
        //   console.log(res);
        //   alert("hey");
        // })
        // Cookies.set("isLogin", true);
        // window.location.href = "/user"
    //}

    return(
        <>
            <div className="body">
                <div className="bg"/>
                <div className="b-strip">
                    <form className="f-log" target="/user" onSubmit={() => OnMount()}>
                        <label>
                            Email address
                        </label>
                        <FloatingLabel 
                           label="test@test.com"
                           inputId="username"
                           type="text"
                           required={true} 
                        />
                        <label>
                            Password
                        </label>
                        <FloatingLabel 
                           label="password"
                           inputId="password"
                           type="password"
                           required={true} 
                        />
                        <button type="submit" className="btn btn-warning">
                            Login
                        </button>
                        <br></br>
                        <br></br>
                        <a href="/settings/password">
                        forgot password?
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;