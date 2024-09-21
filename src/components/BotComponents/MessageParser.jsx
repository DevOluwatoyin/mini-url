// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes("hello" || "hi")) {
      actions.handleHello();
    } else if (message.includes("dog")) {
      actions.handleDog();
    } else if (message.toLowerCase().includes("scissor")) {
      actions.handleWhatIsScissor();
    } else {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
