import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="events">
                <div className="events-sidebar">
                    <h3 id="upcoming-events">Upcoming Events</h3>
                    <h3 id="this-week">This Week</h3>
                    <h3 id="this-month">This Month</h3>
                    <hr />
                    <h3 id="past-events">Past Events</h3>
                </div>
                <div className="events-window">
                    <Event title="Meeting 1" />
                    <Event title="Meeting 2" />
                    <Event title="Meeting 3" />
                </div>
            </div>
        );
    }
}

export default Events;
