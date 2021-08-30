import FloatingLabel from "components/FloatingLabel/FloatingLabel";
import Cookies from "js-cookie";
import "../assets/css/default.scss";

import "../components/FloatingLabel/FloatingLabel.css"

const Login = () => {
    const OnMount = () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        fetch('http://10.25.0.5:5454/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'user': username, 'pass': password}
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res.success) {
                Cookies.set("token", res.token);
                setTimeout(() => {
                    window.location.href = "/user";
                }, 500);
            }
        })
    }
    return(
        <>
            {
                window.location.href.split("/")[3] != "?#" ? window.location.href = "/?#"
                : null
            }
            <div className="body">
                <div className="bg"/>
                <div className="b-strip">
                    <form className="f-log" action="#" onSubmit={() => OnMount()}>
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