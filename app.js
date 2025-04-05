function getChatResponse() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chat");

    if (userInput) {
        let userMessage = document.createElement("div");
        userMessage.textContent = "You: " + userInput;
        chatbox.appendChild(userMessage);

        // Simulate chatbot response
        let chatbotMessage = document.createElement("div");
        chatbotMessage.textContent = "Kumar Chatbot: " + generateResponse(userInput);
        chatbox.appendChild(chatbotMessage);

        // Clear the input field
        document.getElementById("userInput").value = "";

        // Scroll to the bottom of the chat
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

function generateResponse(input) {
    // Simple response logic for now
    if (input.toLowerCase().includes("hello")) {
        return "Hello, how can I help you today?";
    } else if (input.toLowerCase().includes("history")) {
        return "Let me tell you an interesting story from Indian history.";
    } else {
        return "Sorry, I didn't quite understand that. Could you please ask something else?";
    }
}
