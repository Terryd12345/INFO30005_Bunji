import React, { Component } from "react";
import Event from "./Event";

class Events extends Component {
    render() {
        return (
            <div className="section" id="events">
                <header className="section-title">
                    <h3>Events</h3>
                </header>
                
                <div id="events-content">
                    <div id="events-sidebar-sm">
                        <div id="events-sidebar-sm-box">
                            <select>
                                <option value="#" selected>Upcoming</option>
                                <option value="#">This Week</option>
                                <option value="#">This Month</option>
                                <option value="#">Past</option>
                            </select>
                        </div>
                    </div>
                    
                    <div id="events-sidebar-md">
                        <h6><a href="#">Upcoming</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">This Week</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">This Month</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">Past</a></h6>
                    </div>
                    
                    <div id="events-sidebar-lg">
                        <h5><a href="#">Upcoming</a></h5>
                        <h5><a href="#">This Week</a></h5>
                        <h5><a href="#">This Month</a></h5>
                        <hr />
                        <h5><a href="#">Past</a></h5>
                    </div>
                    
                    <div id="events-window">
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
