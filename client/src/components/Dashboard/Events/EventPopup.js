import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class EventPopup extends Component {
    render() {
        return (
            <div>
                <Modal.Header id="popups-header">
                    <Modal.Title className="modal-title-popups">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
    
                <Modal.Body id="popups-event">
                    <div id="popups-event-pic">
                        <div id="popups-event-pic-1">
                            <img src={this.props.currentUser.imagePath} alt={this.props.currentUser.firstName} />
                            <h5>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</h5>
            
                        </div>
                        <div id="popups-event-pic-2">
                            <img src={this.props.imagePath} alt={this.props.firstName} />
                            <h5>{this.props.firstName} {this.props.lastName}</h5>
                        </div>
                    </div>
        
                    <div id="popups-event-details">
                        <div id="popups-event-details-1">
                            <h5>Details:</h5>
                            <h6>{this.props.day}, {this.props.date}</h6>
                            <h6>{this.props.startTime} - {this.props.endTime}</h6>
                            <h6>{this.props.location}</h6>
                        </div>
            
                        <div id="popups-event-details-2">
                            <h5>Weather:</h5>
                            {this.props.weatherIcon}
                            <h6>{this.props.weatherCondition} / {this.props.temperature} &deg;C</h6>
                        </div>
                    </div>
        
                    {
                        this.props.description ? (
                            <div id="popups-event-desc">
                                <h5>Description:</h5>
                                <h6>{this.props.description}</h6>
                            </div>
                        ) : (null)
                    }
                </Modal.Body>
            </div>
        )
    }
}

export default EventPopup;
