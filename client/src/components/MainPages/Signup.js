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
