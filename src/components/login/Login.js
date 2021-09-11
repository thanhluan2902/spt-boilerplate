import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="wrap_top">
                    <h2 className="active"> Sign In </h2>
                    <h2 className="inactive underlineHover">Sign Up </h2>
                </div>
                <div className="fadeIn first logo">
                    <img className="images" src="./assets/images/logo192.png" id="icon" alt="User Icon" />
                </div>
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
