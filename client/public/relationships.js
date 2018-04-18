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
};

function loadMessages(chat) {
    chat.messages.forEach(element => {
        element.sender == chat.connection ? addMessage(element.message, false) : addMessage(element.message, true)
    });
};

loadMessages(chats[0]);
