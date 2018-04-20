import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import Keys from '../../keys';

class SignUp extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <div id="signup">
                <GoogleLogin
                    clientId={Keys.ClientID}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        );
    };
};

export default SignUp;
