import mongoose from "mongoose";
import axios from "axios";

import { weatherApiKey } from "../config";

const Chat = mongoose.model("chat");
const Event = mongoose.model("event");
const Skill = mongoose.model("skill");
const State = mongoose.model("state");
const User = mongoose.model("user");

export default {
    loggingIn: function (req, res) {
        User.findById(req.user._id)
            .exec((err) => {
                if (!err) {
                    if (req.user.skills.length > 0) {
                        res.redirect("/dashboard");
                    } else {
                        res.redirect("/welcome");
                    }
                }
            });
    },

    getCurrentUser: function (req, res) {
        User.findById(req.user._id)
            .populate("skills")
            .populate("learned.skill")
            .populate({ path: "connections", populate: { path: "skills" } })
            .exec((err, user) => {
                if (!err) {
                    res.send(user);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    getUser: function (req, res) {
        User.findById(req.params.id)
            .exec((err, user) => {
                if (!err) {
                    res.send(user);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    getUserById: function (req, res) {
        User.findById(req.body.id)
            .exec((err, user) => {
                if (!err) {
                    res.send(user);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    editUser: function (req, res) {
        User.findOneAndUpdate(
            { _id: req.user._id },
            {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    birthDate: req.body.birthDate,
                    gender: req.body.gender,
                    state: req.body.state,
                    city: req.body.city,
                    isMentor: req.body.isMentor,
                    description: req.body.description
                }
            },
            (err) => {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    editUserImage: function (req, res) {
        User.findOneAndUpdate(
            { _id: req.user._id },
            {
                $set: {
                    imagePath: req.body.imagePath
                }
            },
            (err) => {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    createUser: function (req, res) {
        User.create(new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            state: req.body.state,
            city: req.body.city,
            isMentor: req.body.isMentor,
            description: req.body.description,
            skills: req.body.skills,
            learned: req.body.learned,
            connections: req.body.connections,
            imagePath: req.body.imagePath,
            joinDate: new Date()
        }, (err) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        }));
    },

    /* ============================================================================================================= */

    allSkills: function (req, res) {
        Skill.find({}, (err, skills) => {
            if (!err) {
                res.send(skills);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    mentorsBySkills: function (req, res) {
        User.find({
            $and: [
                { _id: { $nin: req.user.connections } },
                { isMentor: true },
                { skills: { $in: req.body.skills } }
            ]
        })
            .populate("skills")
            .populate("connections")
            .exec((err, users) => {
                if (!err) {
                    let result = [];
                    let sameCity = users.filter(user => user.city === req.user.city);
                    let sameState = users.filter(user => (user.state === req.user.state)
                        && (user.city !== req.user.city));
                    let other = users.filter(user => user.state !== req.user.state);

                    result = result.concat(sameCity, sameState, other);
                    res.send(result.length < 11 ? result : result.slice(0, 10));
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    addSkills: function (req, res) {
        User.findById(req.user._id)
            .exec((err, user) => {
                if (!err) {
                    req.body.skills.forEach(skill => {
                        user.skills.push(skill);
                    });
                    user.save(user);
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    removeSkills: function (req, res) {
        User.findById(req.user._id)
            .exec((err, user) => {
                if (!err) {
                    req.body.skills.forEach(skill => {
                        user.skills.pull(skill);
                    });
                    user.save(user);
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    createSkill: function (req, res) {
        Skill.create(new Skill({
            skill: req.body.skill,
            imagePath: req.body.imagePath
        }), (err) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    /* ============================================================================================================= */

    addLearned: function (req, res) {
        User.findById(req.user._id)
            .exec((err, user) => {
                if (!err) {
                    req.body.skills.forEach(skill => {
                        let learned = {
                            skill: skill,
                            date: new Date()
                        };
                        user.learned.push(learned);
                    });
                    user.save(user);
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    removeLearned: function (req, res) {
        User.findById(req.user._id)
            .exec((err, user) => {
                if (!err) {
                    req.body.skills.forEach(skill => {
                        user.learned.pull(user.learned.find( item => item.skill.toString() === skill ));
                    });
                    user.save(user);
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    /* ============================================================================================================= */

    addConnections: function (req, res) {
        User.findById(req.user._id)
            .exec((err, user) => {
                if (!err) {
                    req.body.connections.forEach(connection => {
                        user.connections.push(connection);
                    });
                    user.save(user);
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    updateConnections: function (req, res) {
        User.find({ _id: { $in: req.body.connections } })
            .exec((err, users) => {
                if (!err) {
                    users.forEach(user => {
                        user.connections.push(req.user._id);
                        user.save(user);
                    });
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    /* ============================================================================================================= */

    allEvents: function (req, res) {
        Event.find({}, (err, events) => {
            if (!err) {
                res.send(events);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    getEvents: function (req, res) {
        Event.find({
            $or: [
                { user1: { $in: req.user._id } },
                { user2: { $in: req.user._id } }
            ]
        })
            .exec((err, events) => {
                if (!err) {
                    res.send(events);
                } else {
                    res.sendStatus(404);
                }
                res.flush();
            });
    },

    createEvent: function (req, res) {
        Event.create(new Event({
            title: req.body.title,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            location: req.body.location,
            description: req.body.description,
            user1: req.user._id,
            user2: req.body.user2,
            createdDate: new Date()
        }, (err) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        }));
    },

    /* ============================================================================================================= */

    getChat: function (req, res) {
        let user1ID = req.user._id;
        let user2ID = req.params.id;
        Chat.findOne({ $or: [{ user1: user1ID, user2: user2ID }, { user1: user2ID, user2: user1ID }] }, (err, chat) => {
            if (err) {
                res.sendStatus(404);
            }
            if (!chat) {
                console.log("error");
                Chat.create(new Chat({
                    user1: user1ID,
                    user2: user2ID,
                }, (err, chat) => {
                    if (!err) {
                        res.send(chat);
                    } else {
                        res.sendStatus(500);
                    }
                }))
            } else {
                res.send(chat);
            }
            res.flush();
        });
    },

    postMessage: function (req, res) {
        let user1ID = req.user._id;
        let user2ID = req.params.id;
        Chat.update({ $or: [{ user1: user1ID, user2: user2ID }, { user1: user2ID, user2: user1ID }] },
            { $push: { messages: req.body } }, function (err, chat) {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(404);
                }
            });
    },

    /* ============================================================================================================= */

    allStates: function (req, res) {
        State.find({}, (err, states) => {
            if (!err) {
                res.send(states);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    createState: function (req, res) {
        State.create(new State({
            state: req.body.state,
            cities: req.body.cities
        }), (err) => {
            if (!err) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    /* ============================================================================================================= */

    getWeather: function (req, res) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}&q=${encodeURIComponent(req.params.location)}`)
            .then(function (response) {
                res.send(response.data);
            })
            .catch(function (error) {
                res.sendStatus(error.response.status);
            })
    }
}
