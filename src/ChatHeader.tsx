interface ChatHeaderProps {
  otherUser: string;
}

export function ChatHeader(props: ChatHeaderProps) {
  let { otherUser } = props;

  return (
    <div className="header">
      <div className="avatar">{otherUser[0]}</div>
      <h1>{otherUser}</h1>
    </div>
  );
}
