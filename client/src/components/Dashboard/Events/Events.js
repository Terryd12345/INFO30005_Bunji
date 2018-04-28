import React, { Component } from "react";
import Event from "./Event";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="section" id="events">
                <header className="section-title">
                    <h3>Events</h3>
                </header>
                
                <div className="events">
                    <div className="events-sidebar-small">
                        <div className="sidebar-box">
                            <select>
                                <option value="#" selected>Upcoming Events</option>
                                <option value="#">This Week</option>
                                <option value="#">This Month</option>
                                <option value="#">Past Events</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="events-sidebar-medium">
                        <h6><a href="#">Upcoming Events</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">This Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">This Month</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">Past Events</a></h6>
                    </div>
                    
                    <div className="events-sidebar">
                        <h5><a href="#">Upcoming Events</a></h5>
                        <h5><a href="#">This Week</a></h5>
                        <h5><a href="#">This Month</a></h5>
                        <hr />
                        <h5><a href="#">Past Events</a></h5>
                    </div>
                    
                    <div className="events-window">
                        <Event title="Meeting 1" />
                        <Event title="Meeting 2" />
                        <Event title="Meeting 3" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
