import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";

const botName = "ExcitementBot";

const Config = {
  initialMessages: [createChatBotMessage(`How can I help you today?😊`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],

  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        style={{
          padding: "12.5px",
          backgroundColor: "#efefef",
          color: "#514f4f",
          fontWeight: "bold",
          fontSize: "0.85rem",
        }}
      >
        Customer Support
      </div>
    ),

    // Replaces the default bot avatar
    //  botAvatar: (props) => <MyAvatar {...props} />,

    // Replaces the default bot chat message container
    //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,

    // Replaces the default user icon
    //  userAvatar: (props) => <MyCustomAvatar {...props} />,

    // Replaces the default user chat message
    //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};

export default Config;
