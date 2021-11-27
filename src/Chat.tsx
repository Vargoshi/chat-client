export type Message = {
  user: string;
  content: string;
};

interface ChatProps {
  messages: Message[];
}

export function Chat(props: ChatProps) {
  let { messages } = props;

  return (
    <div className="chat-container" id="chat-container">
      {messages.map((message) => (
        <div
          className={
            "chat-message " +
            (message.user === "Ja" ? "chat-self" : "chat-other")
          }
        >
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
}
