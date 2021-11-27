import { FormEvent, useState } from "react";
import { Chat } from "./Chat";
import { ChatFooter } from "./ChatFooter";
import { ChatHeader } from "./ChatHeader";

export function App() {
  let [messages, setMessages] = useState([
    {
      user: "Marian Kowalski",
      content: "tekst testowy",
    },
    {
      user: "Ja",
      content: "drugi tekst",
    },
  ]);

  let otherUser = "Marian Kowalski";

  return (
    <>
      <ChatHeader otherUser={otherUser} />
      <Chat messages={messages} />
      <ChatFooter
        onMessageSend={(message) => {
          if (message === "") return;
          setMessages([...messages, { user: "Ja", content: message }]);
        }}
      />
    </>
  );
}
