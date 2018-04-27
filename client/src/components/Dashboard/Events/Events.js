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
                <div className="section-title">
                    <h1>Events</h1>
                </div>
                
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
                        <h3><a href="#">Upcoming Events</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">This Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">This Month</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">Past Events</a></h3>
                    </div>
                    
                    <div className="events-sidebar">
                        <h3><a href="#">Upcoming Events</a></h3>
                        <h3><a href="#">This Week</a></h3>
                        <h3><a href="#">This Month</a></h3>
                        <hr />
                        <h3><a href="#">Past Events</a></h3>
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
