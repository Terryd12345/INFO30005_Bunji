var socket = io()

function addMessage(message) {
    var messages = document.querySelector("#messages");
    var newMessage = document.createElement("p");
    var newMessageContent = document.createTextNode(message);

    newMessage.appendChild(newMessageContent);

    messages.appendChild(newMessage);

};

function readMessage() {
    var message = document.querySelector("#message").value;
    addMessage(message);
};

function loadMessages() {
    
}

loadMessages()