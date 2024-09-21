const PromptSamples = (props) => {
  const options = [
    {
      text: "What is Scissor?",
      handler: props.actionProvider.handleWhatIsScissor,
      id: 1,
    },
    {
      text: "How can I shorten a URL?",
      handler: props.actionProvider.howToShortenUrl,
      id: 2,
    },
    {
      text: "Is it free to use this service?",
      handler: props.actionProvider.isItFree,
      id: 3,
    },
    {
      text: "How do I track the number of clicks on my shortened URL?",
      handler: props.actionProvider.Tracking,
      id: 4,
    },
    {
      text: "Can I customize my shortened URL?",
      handler: props.actionProvider.Customize,
      id: 5,
    },
    {
      text: "How long will my shortened URL last?",
      handler: props.actionProvider.Expiry,
      id: 5,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="p-2 rounded-3xl bg-transparent border border-primary-300 m-1"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="flex items-start flex-wrap">{optionsMarkup}</div>;
};

export default PromptSamples;
