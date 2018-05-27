import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import { Modal } from "react-bootstrap";
import axios from "axios";

class Notification extends Component {
    constructor(props) {
        super(props);
    
        this.getDate = this.getDate.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
        this.state = {
            loading: true,
            firstName: "",
            lastName: "",
            imagePath: "",
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
                    imagePath: res.data.imagePath,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    getDate() {
        let datetime = new Date(this.props.createdDate);
        return datetime.toLocaleString("en-US", { day: "numeric", month: "long" });
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
        
        return (
            <div>
                <div onClick={this.handleShow}>
                    {
                        this.state.loading ? (
                            <div className="section-loading">
                                <BeatLoader loading={this.state.loading} />
                            </div>
                        ) : (
                            <div className="notification-panel">
                                <div className="notification-pic">
                                    <img src={this.state.imagePath} alt={this.state.firstName} />
                                </div>
        
                                <div className="notification-desc">
                                    One new event with {this.state.firstName}.
                                </div>
        
                                <div className="notification-time">
                                    {date}
                                </div>
                            </div>
                        )
                    }
                </div>
    
                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                </Modal>
            </div>
        );
    }
}

export default Notification;
