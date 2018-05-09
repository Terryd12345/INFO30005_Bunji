import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.getAge = this.getAge.bind(this);
        
        this.state = {
            show: false,
            skills: []
        };
    }
    
    handleClose() {
        this.setState({
            show: false
        });
    }
    
    handleShow() {
        this.setState({
            show: true
        })
    }
    
    getAge(birthDate) {
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    render() {
        const age = this.getAge(new Date(this.props.user.birthDate));
        
        return (
            <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                <div id="profile-panel">
                    <div id="profile-button">
                        <a href="/connections" className="button" id="profile-btn">
                            Contact {this.props.user.firstName}
                        </a>
                    </div>

                    <div id="profile-pic">
                        <img src={this.props.user.imagePath}
                             alt={this.props.user.firstName} />
                    </div>

                    <div id="profile-bio">
                        <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                        <h4>{age} / {this.props.user.gender} / {this.props.user.location}</h4>
                        <h6>Skills: {this.props.user.skills.map(x => x.skill)
                                                           .reduce((prev, curr) => [prev, ", ", curr])}</h6>
                    </div>

                    <div id="profile-desc">
                        <p>{this.props.user.description}</p>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Profile;
