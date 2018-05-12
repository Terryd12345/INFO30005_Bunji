import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import Event from "./Event";
import axios from "axios/index";

class Events extends Component {
    constructor(props) {
        super(props);

        this.showUpcoming = this.showUpcoming.bind(this);
        this.showThisWeek = this.showThisWeek.bind(this);
        this.showThisMonth = this.showThisMonth.bind(this);
        this.showPast = this.showPast.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filterEvents = this.filterEvents.bind(this);

        this.state = {
            loading: true,
            currentUserID: "",

            upcoming: true,
            thisWeek: false,
            thisMonth: false,
            selected: "1"
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/user")
            .then(function (res) {
                self.setState({
                    loading: false,
                    currentUserID: res.data._id
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    /* ============================================================================================================= */

    showUpcoming() {
        this.setState({
            upcoming: true,
            thisWeek: false,
            thisMonth: false,
        })
    }

    showThisWeek() {
        this.setState({
            upcoming: false,
            thisWeek: true,
            thisMonth: false,
        })
    }

    showThisMonth() {
        this.setState({
            upcoming: false,
            thisWeek: false,
            thisMonth: true,
        })
    }

    showPast() {
        this.setState({
            upcoming: false,
            thisWeek: false,
            thisMonth: false,
        })
    }

    handleChange(type) {
        switch (type) {

            // Upcoming Events
            case "1":
                this.showUpcoming();
                break;

            // This Week's Events
            case "2":
                this.showThisWeek();
                break;

            // This Month's Events
            case "3":
                this.showThisMonth();
                break;

            // Past Events
            case "4":
                this.showPast();
                break;

            default:
                break;
        }
    }

    filterEvents(type) {
        let events = this.props.events;
        let filteredEvents = [];

        let today = new Date();
        let sundayThisWeek = new Date(today.getFullYear(),
            today.getMonth(),
            today.getDate() + ((today.getDay() === 0 ? 0 : 7) - today.getDay()));
        let thisMonth = new Date().getMonth();

        switch (type) {

            // Upcoming Events
            case 1:
                filteredEvents = events.filter(function (event) {
                    let eventDate = new Date(event.date);
                    return eventDate.getTime() >= today.getTime();
                });
                break;

            // This Week's Events
            case 2:
                filteredEvents = events.filter(function (event) {
                    let eventDate = new Date(event.date);
                    return (eventDate.getTime() >= today.getTime()) && (eventDate.getTime() < sundayThisWeek.getTime());
                });
                break;

            // This Month's Events
            case 3:
                filteredEvents = events.filter(function (event) {
                    let eventDate = new Date(event.date);
                    return (eventDate.getTime() >= today.getTime()) && (eventDate.getMonth() === thisMonth);
                });
                break;

            // Past Events
            case 4:
                filteredEvents = events.filter(function (event) {
                    let eventDate = new Date(event.date);
                    return eventDate.getTime() < today.getTime();
                });
                break;

            default:
                break;
        }

        return filteredEvents.sort(function (a, b) {
            if (type === 4) {
                // newest to oldest
                return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0) * -1;
            } else {
                // oldest to newest
                return (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0);
            }
        });
    }

    /* ============================================================================================================= */

    render() {
        const upcoming = this.filterEvents(1);
        const thisWeek = this.filterEvents(2);
        const thisMonth = this.filterEvents(3);
        const past = this.filterEvents(4);

        return (
            <div className="section" id="events">
                <header className="section-title">
                    <h3>Events</h3>
                </header>

                <div id="events-content">
                    <div id="events-sidebar-sm">
                        <select value={this.state.selected}
                            onChange={(e) => { this.setState({ selected: e.target.value }, this.handleChange(e.target.value)) }}>
                            <option value="1">Upcoming</option>
                            <option value="2">This Week</option>
                            <option value="3">This Month</option>
                            <option value="4">Past</option>
                        </select>
                    </div>

                    <div id="events-sidebar-md">
                        <h6>
                            <a onClick={this.showUpcoming}>Upcoming</a>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <a onClick={this.showThisWeek}>This Week</a>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <a onClick={this.showThisMonth}>This Month</a>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <a onClick={this.showPast}>Past</a>
                        </h6>
                    </div>

                    <div id="events-sidebar-lg">
                        <h5><a onClick={this.showUpcoming}>Upcoming</a></h5>
                        <h5><a onClick={this.showThisWeek}>This Week</a></h5>
                        <h5><a onClick={this.showThisMonth}>This Month</a></h5>
                        <hr />
                        <h5><a onClick={this.showPast}>Past</a></h5>
                    </div>

                    {
                        this.state.loading ? (
                            <div className="section-loading">
                                <BeatLoader loading={this.state.loading} />
                            </div>
                        ) : (
                                <div id="events-window">{

                                    this.state.upcoming ? (
                                        <div>{
                                            (upcoming.length < 1) ? (
                                                <div className="empty">
                                                    <h6>No upcoming events.</h6>
                                                </div>
                                            ) : (
                                                    <div>
                                                        {
                                                            upcoming.map(event => {
                                                                return <Event
                                                                    key={event._id}
                                                                    title={event.title}
                                                                    datetime={event.date}
                                                                    location={event.location}
                                                                    user1={event.user1}
                                                                    user2={event.user2}
                                                                    currentUserID={this.state.currentUserID} />
                                                            })
                                                        }
                                                    </div>
                                                )
                                        }</div>
                                    )

                                        : (this.state.thisWeek ? (
                                            <div>{
                                                (thisWeek.length < 1) ? (
                                                    <div className="empty">
                                                        <h6>No events this week.</h6>
                                                    </div>
                                                ) : (
                                                        <div>
                                                            {
                                                                thisWeek.map(event => {
                                                                    return <Event
                                                                        key={event._id}
                                                                        title={event.title}
                                                                        datetime={event.date}
                                                                        location={event.location}
                                                                        user1={event.user1}
                                                                        user2={event.user2}
                                                                        currentUserID={this.state.currentUserID} />
                                                                })
                                                            }
                                                        </div>
                                                    )
                                            }</div>
                                        )

                                            : (this.state.thisMonth ? (
                                                <div>{
                                                    (thisMonth.length < 1) ? (
                                                        <div className="empty">
                                                            <h6>No events this month.</h6>
                                                        </div>
                                                    ) : (
                                                            <div>
                                                                {
                                                                    thisMonth.map(event => {
                                                                        return <Event
                                                                            key={event._id}
                                                                            title={event.title}
                                                                            datetime={event.date}
                                                                            location={event.location}
                                                                            user1={event.user1}
                                                                            user2={event.user2}
                                                                            currentUserID={this.state.currentUserID} />
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                }</div>
                                            )

                                                : (
                                                    <div>{
                                                        (past.length < 1) ? (
                                                            <div className="empty">
                                                                <h6>No past events.</h6>
                                                            </div>
                                                        ) : (
                                                                <div>
                                                                    {
                                                                        past.map(event => {
                                                                            return <Event
                                                                                key={event._id}
                                                                                title={event.title}
                                                                                datetime={event.date}
                                                                                location={event.location}
                                                                                user1={event.user1}
                                                                                user2={event.user2}
                                                                                currentUserID={this.state.currentUserID} />
                                                                        })
                                                                    }
                                                                </div>
                                                            )
                                                    }</div>
                                                )))

                                }</div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Events;
