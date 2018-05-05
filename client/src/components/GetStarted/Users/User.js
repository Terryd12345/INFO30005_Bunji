import React, { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
    
        this.onSelected = this.onSelected.bind(this);
        this.getAge = this.getAge.bind(this);
        
        this.state = {
            isSelected: this.props.isSelected,
            backgroundColor: "",
            borderColor: ""
        };
    }
    
    componentDidMount() {
        if (this.state.isSelected === false) {
            this.setState({ backgroundColor: "", borderColor: "" });
        } else {
            this.setState({ backgroundColor: "#f3e5f5", borderColor: "#8b55a4" });
        }
    }

    onSelected() {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, backgroundColor: "#f3e5f5", borderColor: "#8b55a4" });
        } else {
            this.setState({ isSelected: false, backgroundColor: "", borderColor: "" });
        }
        this.props.updateSelectedUsers(this.props.user._id, this.state.isSelected);
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
            backgroundColor: this.state.backgroundColor,
            borderColor: this.state.borderColor
        }
        
        const age = this.getAge(new Date(this.props.user.birthDate));
        
        return (
            <div onClick={this.onSelected} className="user-panel" style={style}>
                <div className="user-pic">
                    <img src={require(`../../../images/users/${this.props.user.imagePath}.png`)} alt={this.props.user.firstName} />
                </div>
                
                <div className="user-desc centered">
                    <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                    <h4>{age} / {this.props.user.gender} / {this.props.user.location}</h4>
                    <h6>Skills: {this.props.user.skills.map(x => x.skill).reduce((prev, curr) => [prev, ", ", curr])}</h6>
                    <p>{this.props.user.description}</p>
                </div>
            </div>
        );
    }
}

export default User;
