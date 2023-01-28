// main.js

// Set up required variables
const OpenAI = require('openai-api');
const loginPage = require('./loginPage');
const lawyerBotChat = require('./lawyerBotChat');
const ideaBotChat = require('./ideaBotChat');
const workBotChat = require('./workBotChat');

// Set up OpenAI API
const openAI = new OpenAI({
  apiKey: 'Your_OpenAI_API_Key_Here',
  environment: 'Your_OpenAI_Environment_Name_Here',
});

// Set up login page
const login = new LoginPage({
  openAI: openAI
});

// Set up lawyer bot chat page
const lawyerBot = new LawyerBotChat({
  openAI: openAI
});

// Set up idea bot chat page
const ideaBot = new IdeaBotChat({
  openAI: openAI
});

// Set up work bot chat page
const workBot = new WorkBotChat({
  openAI: openAI
});

// Main function
function main() {
  // Handle login
  login.handleLogin();

  // Handle lawyer bot chat
  lawyerBot.handleChat();

  // Handle idea bot chat
  ideaBot.handleChat();

  // Handle work bot chat
  workBot.handleChat();
}

// Run main function
main();
