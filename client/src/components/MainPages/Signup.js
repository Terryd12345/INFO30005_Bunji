import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Keys from '../../keys.js';

class SignUp extends Component {


    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        const responseFacebook = (response) => {
            console.log(response);
        }
        
        return (
            <div id="signup">

                <GoogleLogin
                    clientId={Keys.GoogleClientID}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                    <span id="google">Google Login</span>
                </GoogleLogin>

                <FacebookLogin
                    appId={Keys.FacebookID}
                    autoLoad
                    callback={responseFacebook}
                    render={renderProps => (
                        <button id="facebook" onClick={renderProps.onClick}>This is my custom FB button</button>
                    )}
                />

            </div>
        );
    };
};

export default SignUp;
