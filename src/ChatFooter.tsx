import { useState } from "react";

interface ChatFooterProps {
  onMessageSend: (message: string) => void;
}

export function ChatFooter(props: ChatFooterProps) {
  let { onMessageSend } = props;

  let [newMessage, setNewMessage] = useState("");

  return (
    <form
      className="footer"
      id="chat-form"
      onSubmit={(event) => {
        event.preventDefault();
        onMessageSend(newMessage);
        setNewMessage("");
      }}
    >
      <input
        type="text"
        id="chat-input"
        autoComplete="off"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)} />
      <button type="submit">send</button>
    </form>
  );
}
