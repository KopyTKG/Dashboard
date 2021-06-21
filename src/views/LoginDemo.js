import FloatingLabel from "components/FloatingLabel/FloatingLabel";
import Cookies from "js-cookie";
import "../assets/css/default.scss";

import "../components/FloatingLabel/FloatingLabel.css"

const Login = () => {

    const OnMount = () => {
        Cookies.set("isLogin", true);
        window.location.href = "/admin"
    }

    return(
        <>
            <div className="body">
                <div className="bg"/>
                <div className="b-strip">
                    <form className="f-log" onSubmit={() => OnMount()}>
                        <label>
                            Email address
                        </label>
                        <FloatingLabel 
                           label="test@test.com"
                           inputId="username"
                           type="email"
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
                        <a href="#">
                        forgot password?
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;