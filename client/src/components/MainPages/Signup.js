import React, { Component } from "react";
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

<<<<<<< HEAD
=======
        function postToken(token){
            return axios.post("/api/login", { token: token });
        }

        const responseGoogle = (response) => {
            console.log(response.tokenObj.id_token);
            postToken(response.tokenObj.id_token);
        }
        const responseFacebook = (response) => {
            console.log(response);
        }

>>>>>>> 00e78c64e9f7391048c2e0a878c5beea7e469dfc
        return (
            <div className="wrapper" id="login">
                <div id="signup">

                    <h1>Login</h1>


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
