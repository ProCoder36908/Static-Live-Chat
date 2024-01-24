// Function to generate a random color for usernames
function getRandomColor() {
    return randomColor({ luminosity: 'light' });
}

// Function to add a new message to the chat
function addMessage(username, message, color) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.style.color = color;
    newMessage.textContent = `${username}: ${message}`;
    chatMessages.appendChild(newMessage);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle sending a message
function sendMessage() {
    var usernameInput = document.getElementById('username-input');
    var messageInput = document.getElementById('message-input');

    var username = usernameInput.value.trim();
    var message = messageInput.value.trim();

    if (username !== '' && message !== '') {
        var color = getRandomColor();
        addMessage(username, message, color);

        // Clear the input fields
        usernameInput.value = '';
        messageInput.value = '';
    }
}
