import Chatbot from "react-chatbot-kit";
import Config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "react-chatbot-kit/build/main.css";

const BotBubble = () => {
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  const validateMessages = (messages) => {
    if (messages.trim() === "") {
      return false;
    }
    return true;
  };

  return (
    <div>
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        saveMessages={saveMessages}
        validator={validateMessages}
      />
    </div>
  );
};

export default BotBubble;
