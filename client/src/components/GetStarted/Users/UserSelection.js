import React, { Component } from "react";
import User from "./User";

class UserSelection extends Component {
    render() {
        return (
            <div className="page-wrap">
                <div className="wrapper">
                    <header className="header">
                        <h2>We found {this.props.allUsers.length} mentors for you!</h2>
                        <h5>Read their profiles and select those who suit your preferences.</h5>
                    </header>

                    <div id="user-selection">
                        {
                            this.props.allUsers.map(user => {
                                return <User
                                    key={user._id}
                                    user={user}
                                    isSelected={this.props.selectedUsers.indexOf(user._id) > -1}
                                    updateSelected={this.props.updateSelected}
                                    functionType={2} />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default UserSelection;
