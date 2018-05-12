import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
import axios from "axios/index";
import User from "../../../GetStarted/Users/User"

class FindMentor extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toPrevious = this.toPrevious.bind(this);
        this.toNext = this.toNext.bind(this);

        this.state = {
            loading: true,
            changed: false,
            show: false,
            allUsers: [],
            currentUser: {},
            length: 0,
            index: 0
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/user")
            .then(function (res1) {
                axios.post("/api/mentorsBySkills", {
                    skills: self.filterSkills(res1.data.skills, res1.data.learnedSkills)
                })
                    .then(function (res2) {
                        self.setState({
                            loading: false,
                            allUsers: res2.data,
                            currentUser: res2.data[self.state.index],
                            length: res2.data.length
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

    /* ============================================================================================================= */

    handleClose() {
        this.setState({
            loading: true,
            show: false
        });

        if (this.state.changed) {
            this.setState({
                changed: false
            });
            this.props.reload();
        }
    }

    handleShow() {
        this.componentDidMount();
        this.setState({
            show: true
        })
    }

    handleSubmit(e) {
        const self = this;

        e.preventDefault();
        axios.all([
            axios.post("/api/addConnections", {
                connections: [self.state.currentUser._id]
            }),
            axios.post("/api/updateConnections", {
                connections: [self.state.currentUser._id]
            })
        ])
            .then(function () {
                self.setState({
                    changed: true
                });
                self.componentDidMount();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    /* ============================================================================================================= */

    toPrevious() {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1,
                currentUser: this.state.allUsers[this.state.index - 1]
            });
        }
    }

    toNext() {
        if (this.state.index < this.state.length - 1) {
            this.setState({
                index: this.state.index + 1,
                currentUser: this.state.allUsers[this.state.index + 1]
            });
        }
    }

    /* ============================================================================================================= */

    filterSkills = (keep, remove) => {
        for (let i = keep.length - 1; i >= 0; i--) {
            for (let j = 0; j < remove.length; j++) {
                if (keep[i]._id === remove[j]._id) {
                    keep = [
                        ...keep.slice(0, i),
                        ...keep.slice(i + 1)
                    ];
                    break;
                }
            }
        }
        return keep;
    };

    /* ============================================================================================================= */

    render() {
        const disabled = {
            backgroundColor: "#bbb",
            borderColor: "#bbb",
            color: "#eee"
        };

        return (
            <div>
                <div onClick={this.handleShow} className="popup centered" id="popup-3">
                    <h5>
                        <img src={require("../../../../images/icons/find.png")} alt="Icon" />
                        Find Mentor
                    </h5>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header id="popups-header">
                        <Modal.Title className="modal-title-popups">
                            FIND MENTOR
                        </Modal.Title>
                    </Modal.Header>

                    {
                        this.state.loading ? (
                            <Modal.Body>
                                <div className="section-loading">
                                    <BeatLoader loading={this.state.loading} />
                                </div>
                            </Modal.Body>
                        )

                            : ((this.state.allUsers.length > 0) ? (
                                <Modal.Body>
                                    <div id="mentor">
                                        <User
                                            key={this.state.currentUser._id}
                                            user={this.state.currentUser}
                                            isSelected={false}
                                            functionType={-1} />
                                    </div>

                                    <div id="mentor-button">
                                        <div id="mentor-button-previous">
                                            <a
                                                className="button round"
                                                id="popups-arrow-btn"
                                                onClick={this.toPrevious}
                                                style={(this.state.index > 0) ? null : disabled}>
                                                &#8249;
                                        </a>
                                        </div>

                                        <div id="mentor-button-select">
                                            <a onClick={this.handleSubmit} className="button" id="popups-btn">
                                                Select Mentor
                                        </a>
                                        </div>

                                        <div id="mentor-button-next">
                                            <a
                                                className="button round"
                                                id="popups-arrow-btn"
                                                onClick={this.toNext}
                                                style={(this.state.index < this.state.length - 1) ? null : disabled}>
                                                &#8250;
                                        </a>
                                        </div>
                                    </div>
                                </Modal.Body>
                            )

                                : (
                                    <Modal.Body>
                                        <div className="empty">
                                            <h6>No available mentors found.</h6>
                                            <h6>Please try again later.</h6>
                                        </div>
                                    </Modal.Body>
                                ))
                    }

                    <Modal.Footer id="popups-footer">
                        <Button onClick={this.handleClose} id="close-btn">&times;</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    };
}

export default FindMentor;
