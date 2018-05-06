import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div id="page-wrap">
                <div id="welcome">
                    <div id="welcome-pic" />
                    
                    <div className="centered" id="welcome-form">
                        <header id="welcome-form-title">
                            <h2>One last step!</h2>
                        </header>
                        
                        <form action="/action_page.php">
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
                            
                            {/*<p>By creating an account, you agree to our <a href="">Terms & Privacy</a>.</p>*/}
                            
                            <button type="submit" className="button" id="welcome-btn">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Welcome;
