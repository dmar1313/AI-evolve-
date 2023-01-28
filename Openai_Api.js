const openai = require('openai')

const openai_api = new openai.OpenAIAPI({
  secret: 'your_secret_key'
})

// Lawyer Bot 
const lawyer_bot = openai_api.createSession({
  prompt: 'What legal advice do you need?',
  temperature: 0.5,
  frequencyPenalty: 0.5,
  topP: 0.9
})

// Idea Bot
const idea_bot = openai_api.createSession({
  prompt: 'What kind of ideas do you need?',
  temperature: 0.5,
  frequencyPenalty: 0.5,
  topP: 0.9
})

// Work Bot
const work_bot = openai_api.createSession({
  prompt: 'What kind of work do you need help with?',
  temperature: 0.5,
  frequencyPenalty: 0.5,
  topP: 0.9
})

module.exports = {
  openai_api,
  lawyer_bot,
  idea_bot,
  work_bot
}
