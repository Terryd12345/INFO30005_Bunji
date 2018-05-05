import mongoose from "mongoose";

var Chat = mongoose.model("chat");
var Event = mongoose.model("event");
var Skill = mongoose.model("skill");
var User = mongoose.model("user");

export default {
    getCurrentUser: function (req, res) {
        res.send(req.user)
            .populate("skills")
            .populate("connections");
        res.flush();
    },

    getUser: function (req, res) {
        var userID = req.params.id;
        User.findById(userID, (err, user) => {
            if (!err) {
                res.send(user
                    .populate("skills")
                    .populate("connections"));
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
            location: req.body.location,
            isMentor: req.body.isMentor,
            description: req.body.description,
            skills: req.body.skills,
            connections: req.body.connections,
            imagePath: req.body.imagePath
        }, function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            };
            res.flush();
        }));
    },

    editUser: function (req, res) {
        User.update();
    },

    addSkill: function (req, res) {
        var userID = req.user._id;
        Chat.findById(userID, (err, user) => {
            if (!err) {
                user.skills.push(req.body.skillID);
                user.save(done);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    addConnection: function (req, res) {
        var userID = req.user._id;
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

    createSkill: function (req, res) {
        Skill.create(new Skill({
            skill: req.body.skill,
            imagePath: req.body.imagePath
        }), function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            };
            res.flush();
        });
    },

    allSkills: function (req, res) {
        Skill.find({}, function (err, docs) {
            if (!err) {
                res.send(docs);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },
    
    mentorsBySkills: function (req, res) {
        console.log(req.body.skills);
        User.find({ $and: [{isMentor: true}, {skills: {$in: req.body.skills}}]}, function (err, docs) {
            if (!err) {
                res.send(docs.map(function(user) {
                    console.log(user.populate("skills"));
                    return user.populate("skills");
                }));
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },
    
    getChat: function (req, res) {
        var chatID = req.params.id;
        Chat.findById(chatID, (err, chat) => {
            if (!err) {
                res.send(chat);
            } else {
                res.sendStatus(404);
            }
            res.flush();
        });
    },

    postMessage: function (req, res) {
        var chatID = req.params.id;
        Chat.findById(chatID, (err, chat) => {
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
