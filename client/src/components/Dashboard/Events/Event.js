import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios/index";

class Event extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            id: "",
            firstName: "",
            lastName: "",
            imagePath: ""
        };
    }
    
    getDate = () => {
        let datetime = new Date(this.props.datetime);
        return datetime.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
    };
    
    getTime = () => {
        let datetime = new Date(this.props.datetime);
        return datetime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    };
    
    componentDidMount() {
        const self = this;
    
        axios.get("/api/user")
            .then(function (res1) {
                if (res1.data._id.localeCompare(self.props.user1) === 0) {
                    self.setState({
                        id: self.props.user2
                    })
                } else {
                    self.setState({
                        id: self.props.user1
                    })
                }
                
                axios.post("/api/getUserById", {
                    id: self.state.id
                })
                .then(function (res2) {
                    self.setState({
                        loading: false,
                        firstName: res2.data.firstName,
                        lastName: res2.data.lastName,
                        imagePath: res2.data.imagePath
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Event;
