// Global variable to store messages
var chatHistory = [];

// Function to generate a random color for usernames (excluding white)
function getRandomColor() {
    var color = randomColor({ luminosity: 'light' });
    while (color === '#ffffff' || color === 'white') {
        color = randomColor({ luminosity: 'light' });
    }
    return color;
}

// Function to add a new message to the chat
function addMessage(username, message, color) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.style.color = color;
    newMessage.textContent = `${username}: ${message}`;
    chatMessages.appendChild(newMessage);

    // Add the message to the chat history
    chatHistory.push({
        username: username,
        message: message,
        color: color
    });

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
        messageInput.value = '';
    }
}

// Function to display chat history
function displayChatHistory() {
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = ''; // Clear existing messages

    // Display messages from chat history
    chatHistory.forEach(function (msg) {
        var newMessage = document.createElement('div');
        newMessage.style.color = msg.color;
        newMessage.textContent = `${msg.username}: ${msg.message}`;
        chatMessages.appendChild(newMessage);
    });

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to open the username modal
function openModal() {
    var modal = document.getElementById('usernameModal');
    modal.style.display = 'block';
}

// Function to close the username modal
function closeModal() {
    var modal = document.getElementById('usernameModal');
    modal.style.display = 'none';
}

// Function to set the username from the modal
function setUsername() {
    var modalUsernameInput = document.getElementById('modal-username-input');
    var usernameInput = document.getElementById('username-input');

    var username = modalUsernameInput.value.trim();

    if (username !== '') {
        usernameInput.value = username;
        closeModal();
        displayChatHistory(); // Display chat history after setting the username
    }
}

// Open the username modal and display chat history when the page loads
window.onload = openModal;
