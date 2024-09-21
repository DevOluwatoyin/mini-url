import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import PromptSamples from "./Prompts";
import Response from "./Response";

const botName = "Scissor Customer Support";

const Config = {
  initialMessages: [
    createChatBotMessage(`How can I help you today?😊`, {
      widget: "samplePrompts",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1E3448",
    },
    chatButton: {
      backgroundColor: "#0065FE",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: "samplePrompts",
      widgetFunc: (props) => <PromptSamples {...props} />,
    },
    {
      widgetName: "scissorDefination",
      widgetFunc: (props) => <Response {...props} />,
      props: { message: "Scissor is a url shotener website" },
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
        Scissor Customer Support
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
