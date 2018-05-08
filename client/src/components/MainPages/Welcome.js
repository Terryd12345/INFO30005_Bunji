import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Welcome extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            redirect: false
        }
    }
    
    componentDidMount() {
        const self = this;
        
        axios.get("/api/user")
        .then(function (res) {
            if (res.data.skills.length > 0) {
                self.setState({ redirect: true })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div id="page-wrap">
                {
                    this.state.redirect ? (
                        <Redirect to="/dashboard" />
                    ) : (
                        <div id="welcome">
                            <div id="welcome-pic" />
        
                            <div className="centered" id="welcome-form">
                                <header id="welcome-form-title">
                                    <h2>One last step!</h2>
                                </header>
            
                                <form action="">
                                    <label htmlFor="birth-date" id="birth-date">Date of Birth</label>
                                    <select name="month" id="month" defaultValue="">
                                        <option value="" disabled={true}>Month</option>
                                        <option value="january">January</option>
                                        <option value="february">February</option>
                                        <option value="march">March</option>
                                        <option value="april">April</option>
                                        <option value="may">May</option>
                                        <option value="june">June</option>
                                        <option value="july">July</option>
                                        <option value="august">August</option>
                                        <option value="september">September</option>
                                        <option value="october">October</option>
                                        <option value="november">November</option>
                                        <option value="december">December</option>
                                    </select>
                                    <input type="text" name="day" placeholder="Day" id="day" required />
                                    <input type="text" name="year" placeholder="Year" id="year" required />
                
                                    <label htmlFor="role">Role</label>
                                    <select name="role" id="role" defaultValue="">
                                        <option value="" disabled={true}>---</option>
                                        <option value="mentor">Mentor</option>
                                        <option value="mentee">Mentee</option>
                                    </select>
                
                                    <label htmlFor="description">Description</label>
                                    <textarea rows="5" name="description" placeholder="Describe yourself here..." />
                
                                    <button type="submit" className="button" id="welcome-btn">Confirm</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    };
}

export default Welcome;
