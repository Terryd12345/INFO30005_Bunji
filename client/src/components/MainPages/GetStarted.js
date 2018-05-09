import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MoonLoader, BeatLoader } from "react-spinners";
import axios from "axios";
import SkillSelection from "../GetStarted/Skills/SkillSelection";
import UserSelection from "../GetStarted/Users/UserSelection";

class GetStarted extends Component {
    constructor(props) {
        super(props);

        this.updateSelected = this.updateSelected.bind(this);
        this.toSection2 = this.toSection2.bind(this);
        this.toSection3 = this.toSection3.bind(this);
        this.toDashboard = this.toDashboard.bind(this);
        this.handleSection1 = this.handleSection1.bind(this);
        this.handleSection2 = this.handleSection2.bind(this);

        this.state = {
            loading: true,
            loadingSkills: true,
            loadingUsers: false,
            
            redirectToHome: false,
            redirectToWelcome: false,
            redirectToDashboard: false,
            
            isMentor: false,
            
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
    
        axios.all([
            axios.get("/api/allSkills"),
            axios.get("/api/user")
        ])
            .then(axios.spread((res1, res2) => {
                if (res2.data.description) {
                    if (res2.data.skills.length < 1) {
                        self.setState({
                            loading: false,
                            loadingSkills: false,
                            allSkills: res1.data,
                            isMentor: res2.data.isMentor
                        });
                    } else {
                        self.setState({
                            redirectToDashboard: true
                        });
                    }
                } else {
                    self.setState({
                        redirectToWelcome: true
                    });
                }
            }))
            .catch(function (error) {
                self.setState({
                    redirectToHome: true
                });
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
            if (this.state.isMentor) {
                this.setState({
                    showSection1: false,
                    showSection3: true,
                    tickSection1: true,
                    tickSection2: true,
                    tmpSkills: []
                });
                window.scrollTo(0, 55);
            } else {
                const self = this;
                
                this.setState({
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
    }

    toSection3() {
        if (this.state.selectedUsers.length < 1) {
            this.setState({
                showSection3: false,
                tickSection2: false
            });
            alert("Please select a mentor.");
        } else {
            this.setState({
                showSection3: true,
                showSection2: false,
                tickSection2: true,
                tmpSkills: [],
                tmpUsers: []
            });
            window.scrollTo(0, 55);
        }
    }

    toDashboard() {
        const self = this;
        
        if (this.state.isMentor) {
            axios.post("/api/addSkills", {
                skills: self.state.selectedSkills
            })
            .then(function () {
                self.setState({
                    loading: true,
                    redirectToDashboard: true
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            axios.all([
                axios.post("/api/addSkills", {
                    skills: self.state.selectedSkills
                }),
                axios.post("/api/addConnections", {
                    connections: self.state.selectedUsers
                }),
                axios.post("/api/updateConnections", {
                    connections: self.state.selectedUsers
                })
            ])
            .then(function () {
                self.setState({
                    loading: true,
                    redirectToDashboard: true
                });
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
                {
                    this.state.loading ? (
                        <div id="loading">
                            <MoonLoader loading={this.state.loading} />
        
                            {
                                this.state.redirectToHome ? (<Redirect to="/" />) : (null)
                            }
        
                            {
                                this.state.redirectToWelcome ? (<Redirect to="/welcome" />) : (null)
                            }
        
                            {
                                this.state.redirectToDashboard ? (<Redirect to="/dashboard" />) : (null)
                            }
                        </div>
                    ) : (
                        <div>
    
                        {/* ======================================================================================= */}
                        
                            <div id="section-1">
                                <header onClick={this.handleSection1} className="section-header"
                                        style={(this.state.showSection1 && !this.state.tickSection1) ? null : disabled}>
                                    <h2>
                                        1. Select Skills
                                        {
                                            this.state.tickSection1 ? (
                                                <span>
                                                    <img src={require(`../../images/icons/tick.png`)} alt="Completed"/>
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
                                                            updateSelected={this.updateSelected}/>
                                
                                            {
                                                this.state.loadingSkills ? (
                                                    <div className="section-loading">
                                                        <BeatLoader loading={this.state.loadingSkills}/>
                                                    </div>
                                                ) : (null)
                                            }
                                
                                            <a className="button" id="skill-selection-btn"
                                               onClick={this.toSection2}>
                                                {
                                                    this.state.isMentor ? "Confirm" : "Find Mentor"
                                                }
                                            </a>
                                        </div>
                                    ) : (null)
                                }
                            </div>
    
                        {/* ======================================================================================= */}
                        
                        {
                            this.state.isMentor ? (null) : (
                            <div id="section-2">
                                <header onClick={this.handleSection2} className="section-header"
                                        style={(this.state.showSection2 && !this.state.tickSection2) ? null : disabled}>
                                <h2>
                                        2. Find Mentor
                                        {
                                            this.state.tickSection2 ? (
                                                <span>
                                                    <img src={require(`../../images/icons/tick.png`)}
                                                         alt="Completed"/>
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
                                                           updateSelected={this.updateSelected}/>
                                
                                            {
                                                this.state.loadingUsers ? (
                                                    <div className="section-loading">
                                                        <BeatLoader loading={this.state.loadingUsers}/>
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
                            )
                        }
                        
                        {/* ======================================================================================= */}
                        
                            <div id="section-3">
                                <header className="section-header" style={this.state.showSection3 ? null : disabled}>
                                    <h2>{this.state.isMentor ? "2. Teach Skills" : "3. Learn Skills"}</h2>
                                </header>
                
                                {
                                    this.state.showSection3 ? (
                                        <div className="wrapper" id="get-started">
                                            <header className="header">
                                                <h2>All good!</h2>
                                                <h6>Once a mentor confirms your request, you can start learning your skills.</h6>
                                            </header>
                                
                                            <a onClick={this.toDashboard} className="button" id="get-started-btn">
                                                View Dashboard
                                            </a>
                                        </div>
                                    ) : (null)
                                }
                            </div>
    
                        {/* ======================================================================================= */}
                        
                        </div>
                    )
                }
            </div>
        );
    }
}

export default GetStarted;
