import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios/index";
import { Modal, Button } from "react-bootstrap";

class Event extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.getTime = this.getTime.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            loading: true,
            firstName: "",
            lastName: "",
            imagePath: "",
            temperature: "",
            weatherCondition: "",
            weatherIcon: "",
            show: false
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

        axios.get(`api/weather/${this.props.location}`)
            .then((res) => {
                // Display weather picture
                const celsius = `${Math.round(res.data.main.temp - 273).toString()}`;
                let icon = "";
                if(celsius > 30){
                    icon = <img src={require("../../../images/icons/sun.png")} alt="Bunji" />
                } else if(celsius > 20){
                    icon = <img src={require("../../../images/icons/cloud.png")} alt="Bunji" />
                } else {
                    icon = <img src={require("../../../images/icons/windy.png")} alt="Bunji" />
                }
                self.setState({
                    temperature: celsius,
                    weatherCondition: res.data.weather[0].main,
                    weatherIcon: icon
                });
            })
            .catch((error) => {
                console.log(error);
                self.setState({
                    temperature: "",
                    weatherCondition: "",
                    weatherIcon: ""
                });
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

    handleShow() {
        this.setState({
            show: true
        })
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    render() {
        const date = this.getDate();
        const time = this.getTime();

        return (
            <div>
            <div onClick={this.handleShow} className="popup centered" id="popup-2">
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

                                    <div className="event-desc-content">
                                        <h6>{date}</h6>
                                        <h6>{time}</h6>
                                        <h6>{this.props.location}</h6>
                                    </div>

                                    {this.state.weatherIcon}
                                </div>
                            </div>
                        )
                }
            </div>
            <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                <Modal.Header id="popups-header">
                    <Modal.Title className="modal-title-popups">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.props.date}
                    {this.props.location}
                </Modal.Body>

                <Modal.Footer id="popups-footer">
                    <Button onClick={this.handleClose} id="close-btn">&times;</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default Event;
