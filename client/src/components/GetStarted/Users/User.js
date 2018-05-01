import React, { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
    
        this.onSelected = this.onSelected.bind(this);
        this.getAge = this.getAge.bind(this);
        
        this.state = {
            isSelected: false,
            borderColor: ""
        };
    }

    onSelected() {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, borderColor: "#8b55a4" });
        } else {
            this.setState({ isSelected: false, borderColor: "" });
        }
    }
    
    getAge(birthDate) {
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    render() {
        const style = {
            borderColor: this.state.borderColor
        }
        
        const age = this.getAge(new Date(this.props.birthDate));
        
        return (
            <div onClick={this.onSelected} className="user-panel" style={style}>
                <div className="user-pic">
                    <img src={require(`../../../images/${this.props.imagePath}.png`)} alt={this.props.firstName} />
                </div>
                
                <div className="user-desc centered">
                    <h3>{this.props.firstName} {this.props.lastName}</h3>
                    <h4>{age} / {this.props.gender} / {this.props.location}</h4>
                    <h6>Skills: {this.props.skills.map(x => x).reduce((prev, curr) => [prev, ", ", curr])}</h6>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default User;
