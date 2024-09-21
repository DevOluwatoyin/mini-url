import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Hello. Nice to meet you. How can I help you?😊",
      {
        widget: "samplePrompts",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleWhatIsScissor = () => {
    const botMessage = createChatBotMessage(
      "Thank you for wanting to know more about us!",
      {
        widget: "scissorDefination",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const howToShortenUrl = () => {
    const botMessage = createChatBotMessage(
      `Just paste the long URL into the input box on our homepage and click the "Shorten URL" button. Your short link will be generated instantly!`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const isItFree = () => {
    const botMessage = createChatBotMessage(
      `Yes, our URL shortening service is completely free to use`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const Tracking = () => {
    const botMessage = createChatBotMessage(
      ` If you create an account, you can log in to see detailed analytics for each of your shortened URLs, including the number of clicks, geographic location of clicks, and more`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const Customize = () => {
    const botMessage = createChatBotMessage(
      `Yes, you can customize the ending of your shortened URL when you create an account and log in`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const Expiry = () => {
    const botMessage = createChatBotMessage(
      `Our shortened URLs do not expire, so you can use them as long as you need. If you have an account, you can manage and delete your URLs whenever you want.`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleWhatIsScissor,
            howToShortenUrl,
            isItFree,
            Tracking,
            Customize,
            Expiry,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
