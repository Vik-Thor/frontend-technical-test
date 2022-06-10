import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { Container } from "../../components/Layout/container";
import { Messages } from "../../components/message/layout/messages";
import { Message } from "../../components/message/message";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { getReadableDate } from "../../utils/getReadableDate";

import "./conversation-page.css";

const Conversation: FC = () => {
  const router = useRouter();
  const { id, author, timestamp } = router.query;
  const inputRef = useRef(null);

  const [messages, setMessages] = useState(null);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    if(!id) return
    getMessages(encodeURIComponent(id as string));
  }, [id]);

  const getMessages = (id) => {
    setLoading(true);
    fetch(`http://localhost:3005/messages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      });
  }

  const sendMessage = async () => {
    if(!inputRef?.current?.value) return;
    const form = {
      body: `${inputRef?.current?.value}`,
      conversationId: parseInt(encodeURIComponent(id as string)),
      timestamp: Date.now(),
      authorId: getLoggedUserId(),
    };
    await fetch(`http://localhost:3005/messages/${encodeURIComponent(id as string)}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    getMessages(encodeURIComponent(id as string));
  };

  if (isloading) return <p>vos messages sont en train de charger</p>;

  return (
    <Container>
      <div className="header">
        <div>{author}</div>
        <div>{getReadableDate(parseInt(timestamp as string))}</div>
      </div>
      <Messages>
        {
          messages?.map((message) => (
            <Message
              key={`${message.body}+${message.authorId}`}
              body={message.body}
              author={getLoggedUserId() !== message.authorId ? `${author}` : ""}
              owner={getLoggedUserId() == message.authorId}
            />
          ))}
      </Messages>

      <div className="input-message">
        <input type="text" ref={inputRef} id="body" name="body"></input>
        <button type="submit" onClick={sendMessage}>Envoyer</button>
      </div>
    </Container>
  );
};

export default Conversation;
