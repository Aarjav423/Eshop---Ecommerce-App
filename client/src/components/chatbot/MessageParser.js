// src/chatbot/MessageParser.js

import { model } from "./index";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    const intents = model.intents;

    for (const intent in intents) {
      if (intents[intent].some((phrase) => lowerCaseMessage.includes(phrase))) {
        this.actionProvider.handleMessage(intent);
        break;
      }
    }
  }
}

export default MessageParser;
