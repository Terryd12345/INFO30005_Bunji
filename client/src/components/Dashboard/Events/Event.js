import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios/index";
import { keys } from "../../../keys";

class Event extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.getTime = this.getTime.bind(this);

        this.state = {
            loading: true,
            firstName: "",
            lastName: "",
            imagePath: "",
            temperature: ""
        };
    }

    componentDidMount() {
        const self = this;

        axios.post("/api/getUserById", {
            id: (this.props.currentUserID.localeCompare(self.props.user1) === 0) ? self.props.user2 : self.props.user1
            })
            .then(function (res) {
                self.setState({
                    loading: false,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    imagePath: res.data.imagePath
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=${keys.WEATHER_API_KEY}&q=${this.props.location}`)
            .then((res) => {
                self.setState({
                    temperature: res.data.main.temp
                });
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    getDate() {
        let datetime = new Date(this.props.datetime);
        return datetime.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
    }

    getTime() {
        let datetime = new Date(this.props.datetime);
        return datetime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    }

    render() {
        const date = this.getDate();
        const time = this.getTime();

        return (
            <div>
                {
                    this.state.loading ? (
                        <div className="section-loading">
                            <BeatLoader loading={this.state.loading} />
                        </div>
                    ) : (
                        <div className="event-panel">
                            <div className="event-pic">
                                <img src={this.state.imagePath}
                                     alt={this.state.firstName} />
                            </div>

                            <div className="event-desc">
                                <div className="event-desc-title">
                                    <h5>{this.props.title}</h5>
                                    <h6>(with {this.state.firstName} {this.state.lastName})</h6>
                                </div>

                                <div className="event-desc-detail">
                                    <h6>Date:</h6>
                                    <h6>Time:</h6>
                                    <h6>Location:</h6>
                                </div>

                                <div className="event-desc-content">
                                    <h6>{date}</h6>
                                    <h6>{time}</h6>
                                    <h6>{this.props.location}</h6>
                                </div>

                                <h1>{this.state.temperature}</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Event;
