var currChat

function addMessage(message, self) {
    var messages = document.querySelector("#messages");
    var newMessage = document.createElement("div");
    var newMessageContent = document.createTextNode(message);

    newMessage.appendChild(newMessageContent);
    newMessage.className = self ? "message own" : "message other";

    messages.appendChild(newMessage);
    messages.scrollTop = messages.scrollHeight;
};

function readMessage() {
    var message = document.querySelector("#message").value;
    addMessage(message, true);
    document.querySelector("#message").value = "";
    chats[currChat].messages.push({
        date: new Date(),
        sender: "Omja Das",
        message: message
    });
};

function loadMessages(chat) {
    console.log(chat);
    document.querySelector("#messages").innerHTML = "";
    chat.messages.forEach(element => {
        element.sender == chat.connection ? addMessage(element.message, false) : addMessage(element.message, true)
    });
    currChat = chat.chatID;
};

function loadChats(chats) {
    chats.forEach(chat => {
        var connections = document.querySelector("#connections");
        var connection = document.createElement("div");
        connection.className = "connection";
        connection.appendChild(document.createTextNode(chat.connection));
        connection.setAttribute("data-chatID", chat.chatID);
        connection.setAttribute("onclick", `loadChat(${chat.chatID})`);
        connections.appendChild(connection);
    });
};

function loadChat(chatID) {
    loadMessages(chats[chatID]);
};


loadChats(chats);
loadMessages(chats[0]);