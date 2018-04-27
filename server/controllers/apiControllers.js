import mongoose from "mongoose";
var User = mongoose.model("user");
var Chat = mongoose.model("chat");

export function getUser(req, res) {
    var userID = req.params.id;
    User.findById(userID, (err, user) => {
        if (!err) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    });
};

export function createUser(req, res) {
    User.create(new User({
        firstName: req.body.firstName,
        birthDate: req.body.birthDate,
        isMentor: req.body.isMentor,
        description: req.body.description,
    }));
};

export function editUser(req, res) {
};

export function getChat(req, res) {
    var chatID = req.params.id;
    Chat.findById(chatID, (err, chat) => {
        if (!err) {
            res.send(chat);
        } else {
            res.sendStatus(404);
        }
    });
};

export function postMessage(req, res) {
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
    });
};