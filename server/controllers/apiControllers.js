import mongoose from "mongoose";

const Chat = mongoose.model("chat");
const Event = mongoose.model("event");
const Skill = mongoose.model("skill");
const User = mongoose.model("user");

export default {
    getCurrentUser: function (req, res) {
        User.findById(req.user._id)
            .populate("skills")
            .populate("learnedSkills")
            .populate({ path: "connections", populate: { path: "skills" }})
            .exec((err, user) => {
                if (!err) {
                    res.send(user);
                } else {
                    res.sendStatus(404);
                }
        });
    },

    getUser: function (req, res) {
        let userID = req.params.id;
        User.findById(userID)
            .populate("skills")
            .populate("connections")
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
        User.update();
    },

    createUser: function (req, res) {
        User.create(new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            location: req.body.location,
            isMentor: req.body.isMentor,
            description: req.body.description,
            skills: req.body.skills,
            learnedSkills: req.body.learnedSkills,
            connections: req.body.connections,
            imagePath: req.body.imagePath
        }, (err) => {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
            res.flush();
        }));
    },

    /* ============================================================================================================= */

    allSkills: function (req, res) {
        Skill.find({}, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    mentorsBySkills: function (req, res) {
        User.find({ $and: [{ isMentor: true }, { skills: { $in: req.body.skills } }] })
            .populate("skills")
            .populate("connections")
            .exec((err, user) => {
                if (!err) {
                    res.send(user);
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
                        user.save(user);
                    });
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
                        user.save(user);
                    });
                } else {
                    res.sendStatus(404);
                }
                res.flush();
        });
    },

    addLearned: function (req, res) {
        User.findById(req.user._id)
            .exec((err, user) => {
                if (!err) {
                    req.body.skills.forEach(skill => {
                        user.learnedSkills.push(skill);
                        user.save(user);
                    });
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
                        user.learnedSkills.pull(skill);
                        user.save(user);
                    });
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
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
            res.flush();
        });
    },

    /* ============================================================================================================= */

    addConnection: function (req, res) {
        let userID = req.user._id;
        Chat.findById(userID, (err, user) => {
            if (!err) {
                user.connections.push(req.body.connectionID);
                user.save(done);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    /* ============================================================================================================= */

    getChat: function (req, res) {
        let user1ID = req.user._id;
        let user2ID = req.params.id;
        Chat.findOne({ $or: [{ user1: user1ID, user2: user2ID }, { user1: user2ID, user2: user1ID }] }, (err, chat) => {
            if (!err) {
                res.send(chat);
            } else {
                let newChat = new Chat({
                    user1: user1ID,
                    user2: user2ID,
                });
                newChat.save((err) => {
                    if (err) {
                        res.sendStatus(500);
                    }
                });
                res.send(newChat);
            }
            res.flush();
        });
    },

    postMessage: function (req, res) {
        let user1ID = req.user._id;
        let user2ID = req.params.id;
        Chat.findOne({ $or: [{ user1: user1ID, user2: user2ID }, { user1: user2ID, user2: user1ID }] }, (err, chat) => {
            if (!err) {
                chat.messages.push({
                    date: req.body.date,
                    sender: req.body.sender,
                    message: req.body.message
                });
                chat.save(done);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },
}
