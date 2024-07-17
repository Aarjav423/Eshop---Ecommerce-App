import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { model } from "./model";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#00bfff",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#00bfff",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "Hello! How can I assist you today?",
    trigger: "userMessage",
  },
  {
    id: "userMessage",
    user: true,
    trigger: "handleResponse",
  },
  {
    id: "handleResponse",
    message: ({ previousValue }) => handleUserMessage(previousValue),
    trigger: "userMessage",
  },
];

const handleUserMessage = (message) => {
  const intent = detectIntent(message);
  if (intent) {
    return getResponse(intent, message);
  } else {
    return "Sorry, I didn't understand that. Could you please rephrase?";
  }
};

const detectIntent = (message) => {
  for (const intent in model.intents) {
    if (
      model.intents[intent].some((phrase) =>
        message.toLowerCase().includes(phrase)
      )
    ) {
      return intent;
    }
  }
  return null;
};

const getResponse = (intent, message) => {
  const responses = model.responses[intent];
  if (responses) {
    const response = responses[Math.floor(Math.random() * responses.length)];
    return response.answer;
  }
  return "I'm not sure how to help with that.";
};

const EshopChatBot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default EshopChatBot;
