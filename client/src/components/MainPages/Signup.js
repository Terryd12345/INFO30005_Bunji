import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import Keys from '../../keys.js';

class SignUp extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <div id="signup">
                <GoogleLogin
                    clientId={Keys.ClientID}
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        );
    };
};

export default SignUp;
