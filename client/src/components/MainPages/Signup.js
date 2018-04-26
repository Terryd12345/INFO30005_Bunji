import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Keys from "../../keys.js";
import { getCityData } from '../../utils/getCityData';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = { cityData: [] };
    };

    componentDidMount(){
        getCityData().then((cityData) => {
            this.setState({ cityData} );
        });
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        const responseFacebook = (response) => {
            console.log(response);
        }

        return (
            <div className="wrapper" id="login">
                <div id="signup">

                    <h1>Login</h1>
                    <GoogleLogin
                        clientId={Keys.GoogleClientID}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} >
                        <span id="google">LOGIN WITH G+</span>
                    </GoogleLogin>

                    <br />
                    <br />

                    <FacebookLogin
                        appId={Keys.FacebookID}
                        autoLoad
                        callback={responseFacebook}
                        render={renderProps => (
                            <button id="facebook" onClick={renderProps.onClick}>This is my custom FB button</button>
                        )}
                    />

                </div>
                <div className="city-data">
                    { console.log(this.state.cityData) }
                    <p>{this.state.cityData.map(city => city.name)}</p>
                </div>
            </div>
        );
    };
};

export default SignUp;
