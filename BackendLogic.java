
// Connect to OpenAI API 
OpenAIAPI openAIAPI = new OpenAIAPI(); 

// Set up the database for user data 
Database db = new Database(); 

// Create the logic for the chatbot 
Chatbot chatbot = new Chatbot(openAIAPI, db); 

// Handle user login/sign up 
LoginHandler loginHandler = new LoginHandler(db); 

// Handle user requests for the bots 
BotHandler botHandler = new BotHandler(chatbot); 

// Handle user convo history 
ConvoHistoryHandler convoHistoryHandler = new ConvoHistoryHandler(db); 

// Handle requests for the bots' convo histories 
ConvoHistoryBotHandler convoHistoryBotHandler = new ConvoHistoryBotHandler(convoHistoryHandler);

// Create the server 
Server server = new Server(loginHandler, botHandler, convoHistoryBotHandler); 

// Start the server 
server.start();

