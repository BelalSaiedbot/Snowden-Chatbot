document.addEventListener('DOMContentLoaded', (event) => {
    const chatIcon = document.getElementById('chatIcon');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const tooltip = document.createElement('div');

    tooltip.setAttribute('id', 'tooltip');
    tooltip.textContent = 'Need any help? Ask Snowbot';
    chatIcon.appendChild(tooltip);

    chatIcon.addEventListener('mouseover', () => {
        tooltip.style.visibility = 'visible';
    });

    chatIcon.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
    });

    chatIcon.addEventListener('click', () => {
        const isDisplayed = chatbotContainer.style.display === 'block';
        chatbotContainer.style.display = isDisplayed ? 'none' : 'block';
    });
});

// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Get user input
    const input = inputField.value;

    // Clear input field
    inputField.value = '';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    // Add user input to conversation
    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    // Scroll to the latest message
    conversation.scrollTop = conversation.scrollHeight;

    // Generate chatbot response
    const response = generateResponse(input);

    // Add chatbot response to conversation
    message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);

    // Scroll to the latest message
    conversation.scrollTop = conversation.scrollHeight;
});

// Generate chatbot response function
function generateResponse(input) {
    // Define a list of responses
    const responses = [
        "I'm here to assist you with any questions or problems you may have. How can I help you today?",
        "I'm sorry, I didn't quite catch that. Could you please rephrase your question?",
        "I'm having trouble understanding. Can you provide more details or ask in a different way?",
        "Hmm, that doesn't seem to be clear to me. Could you explain it differently?",
        "I'm not sure I understand. Can you give me a bit more context or specifics?"
    ];

    // Check if the user input matches any keywords for a specific response
    // If so, return that response
    if (input.includes("hello", "hi")) {
        return "Hello, how can I help you today? 😊";
    } else if (input.includes("keyword2")) {
        return "Specific response for keyword2";
    } else if (input.includes("WTF")) {
        return "no fuck you";
    }
    // If no keywords match, return a random response
    else {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}


// Correct the chatbot container toggle functionality
const chatIcon = document.getElementById('chatIcon');
const chatbotContainer = document.querySelector('.chatbot-container');

chatIcon.addEventListener('click', function () {
    // Toggle chatbot container visibility
    if (chatbotContainer.style.display === 'none') {
        chatbotContainer.style.display = 'block';
    } else {
        chatbotContainer.style.display = 'none';
    }
});
