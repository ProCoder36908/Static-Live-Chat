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
    }
}

// Open the username modal when the page loads
window.onload = openModal;

// ... rest of the script remains the same
