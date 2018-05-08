import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import SkillSelection from "../GetStarted/Skills/SkillSelection";
import UserSelection from "../GetStarted/Users/UserSelection";

class GetStarted extends Component {
    constructor(props) {
        super(props);

        this.updateSelected = this.updateSelected.bind(this);
        this.toSection2 = this.toSection2.bind(this);
        this.toSection3 = this.toSection3.bind(this);
        this.handleSection1 = this.handleSection1.bind(this);
        this.handleSection2 = this.handleSection2.bind(this);

        this.state = {
            loadingSkills: true,
            loadingUsers: false,
            
            showSection1: true,
            tickSection1: false,
            showSection2: false,
            tickSection2: false,
            showSection3: false,
            
            allSkills: [],
            selectedSkills: [],
            tmpSkills: [],
            
            allUsers: [],
            selectedUsers: [],
            tmpUsers: []
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/allSkills")
            .then(function (res) {
                self.setState({
                    loadingSkills: false,
                    allSkills: res.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    /* ============================================================================================================= */
    
    /* type               : (1) skills, (2) users
     * id                 : skill's or user's id
     * previouslySelected : (true) to be removed from array, (false) to be added to array
     */
    updateSelected(type, id, previouslySelected) {
        switch(type) {
            case 1:
                if (!previouslySelected) {
                    this.setState({
                        selectedSkills: [...this.state.selectedSkills, id]
                    })
                }
                else {
                    this.setState(prevState => ({
                        selectedSkills: prevState.selectedSkills.filter(skill_id => skill_id !== id)
                    }))
                }
                break;
                
            case 2:
                if (!previouslySelected) {
                    this.setState({
                        selectedUsers: [...this.state.selectedUsers, id]
                    })
                }
                else {
                    this.setState(prevState => ({
                        selectedUsers: prevState.selectedUsers.filter(skill_id => skill_id !== id)
                    }))
                }
                break;
                
            default:
                break;
        }
    }

    /* ============================================================================================================= */

    toSection2() {
        if (this.state.selectedSkills.length < 1) {
            this.setState({
                showSection2: false,
                tickSection1: false,
                tickSection2: false
            });
            alert("Please select a skill.");
        } else {
            const self = this;
            
            self.setState({
                loadingUsers: true,
                showSection1: false,
                showSection2: true,
                tickSection1: true,
                tickSection2: false,
                selectedUsers: [],
                tmpSkills: [],
                tmpUsers: []
            });
            
            axios.post("/api/mentorsBySkills", {
                skills: self.state.selectedSkills
            })
                .then(function (res) {
                    self.setState({
                        loadingUsers: false,
                        allUsers: res.data
                    });
                    window.scrollTo(0, 55);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    toSection3() {
        if (this.state.selectedUsers.length < 1) {
            this.setState({
                showSection3: false,
                tickSection2: false
            });
            alert("Please select a mentor.");
        } else {
            const self = this;
            
            axios.post("/api/addConnections", {
                connections: self.state.selectedUsers
            })
                .then(function () {
                    self.setState({
                        showSection3: true,
                        showSection2: false,
                        tickSection2: true,
                        tmpSkills: [],
                        tmpUsers: []
                    });
                    window.scrollTo(0, 55);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    /* ============================================================================================================= */

    handleSection1() {
        if (this.state.tickSection1) {
            if (this.state.showSection1) {
                this.setState({
                    showSection1: false,
                    selectedSkills: this.state.tmpSkills,
                    selectedUsers: this.state.tmpUsers,
                    tmpSkills: [],
                    tmpUsers: []
                });
        
                if (this.state.tickSection2) {
                    this.setState({
                        showSection3: true
                    });
                } else {
                    this.setState({
                        showSection2: true
                    });
                }
            } else {
                this.setState({
                    showSection1: true,
                    showSection2: false,
                    showSection3: false,
                    tmpSkills: this.state.selectedSkills,
                    tmpUsers: this.state.selectedUsers
                });
            }
        }
    }

    handleSection2() {
        if (this.state.tickSection2) {
            if (this.state.showSection2) {
                this.setState({
                    showSection2: false,
                    showSection3: true,
                    selectedSkills: this.state.tmpSkills,
                    selectedUsers: this.state.tmpUsers,
                    tmpSkills: [],
                    tmpUsers: []
                });
            } else {
                this.setState({
                    showSection2: true,
                    showSection1: false,
                    showSection3: false,
                    tmpSkills: this.state.selectedSkills,
                    tmpUsers: this.state.selectedUsers
                });
            }
        }
    }

    /* ============================================================================================================= */

    render() {
        const disabled = {
            backgroundColor: "#eee",
            borderColor: "#bbb",
            color: "#bbb"
        };

        return (
            <div id="page-wrap">
                <div id="section-1">
                    <header onClick={this.handleSection1} className="section-header"
                            style={(this.state.showSection1 && !this.state.tickSection1) ? null : disabled}>
                        <h2>
                            1. Select Skills
                            {
                                this.state.tickSection1 ? (
                                    <span>
                                        <img src={require(`../../images/icons/tick.png`)} alt="Completed" />
                                    </span>
                                ) : (null)
                            }
                        </h2>
                    </header>

                    {
                        this.state.showSection1 ? (
                            <div className="section-content">
                                <SkillSelection allSkills={this.state.allSkills}
                                                selectedSkills={this.state.selectedSkills}
                                                updateSelected={this.updateSelected} />
                                
                                {
                                    this.state.loadingSkills ? (
                                        <div className="section-loading">
                                            <BeatLoader loading={this.state.loadingSkills} />
                                        </div>
                                    ) : (null)
                                }
                                
                                <a onClick={this.toSection2} className="button" id="skill-selection-btn">
                                    Find Mentor
                                </a>
                            </div>
                        ) : (null)
                    }
                </div>

                <div id="section-2">
                    <header onClick={this.handleSection2} className="section-header"
                            style={(this.state.showSection2 && !this.state.tickSection2) ? null : disabled}>
                        <h2>
                            2. Find Mentor
                            {
                                this.state.tickSection2 ? (
                                    <span>
                                        <img src={require(`../../images/icons/tick.png`)} alt="Completed" />
                                    </span>
                                ) : (null)
                            }
                        </h2>
                    </header>

                    {
                        this.state.showSection2 ? (
                            <div className="section-content">
                                <UserSelection allUsers={this.state.allUsers}
                                               selectedUsers={this.state.selectedUsers}
                                               updateSelected={this.updateSelected}
                                               isOnDashboard={false} />
    
                                {
                                    this.state.loadingUsers ? (
                                        <div className="section-loading">
                                            <BeatLoader loading={this.state.loadingUsers} />
                                        </div>
                                    ) : (null)
                                }
                                
                                <a onClick={this.toSection3} className="button" id="user-selection-btn">
                                    Confirm
                                </a>
                            </div>
                        ) : (null)
                    }
                </div>

                <div id="section-3">
                    <header className="section-header" style={this.state.showSection3 ? null : disabled}>
                        <h2>3. Learn Skills</h2>
                    </header>

                    {
                        this.state.showSection3 ? (
                            <div className="wrapper" id="get-started">
                                <header className="header">
                                    <h2>All good!</h2>
                                    <h6>Once a mentor confirms your request, you can start learning your skills.</h6>
                                </header>

                                <a className="button" id="get-started-btn" href="/dashboard">
                                    View Dashboard
                                </a>
                            </div>
                        ) : (null)
                    }
                </div>
            </div>
        );
    }
}

export default GetStarted;
