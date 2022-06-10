import { FC, useEffect, useState } from "react";
import { Conversation } from "../components/conversation/conversation";
import { Conversations } from "../components/conversation/layout/conversations";
import { Container } from "../components/Layout/container";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import Link from "next/link";

const Home: FC = () => {
  const [conversations, setConversations] = useState(null);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const conversations = fetch(
      `http://localhost:3005/conversations/${getLoggedUserId()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setConversations(data);
        setLoading(false);
      });
  }, []);

  console.log(conversations);
  if (isloading) return <p>en train de charger les conversations...</p>;
  if (!conversations) return <p>Aucune conversation</p>;

  return (
    <Container>
      <Conversations>
        {conversations.map((conversation) => {
          return (
            <Link
              href={`/conversation/${conversation.id}?author=${conversation.recipientNickname}&timestamp=${conversation.lastMessageTimestamp}`}
              key={conversation.recipientNickname}
            >
              <a>
                <Conversation
                  nickname={conversation.recipientNickname}
                  timestamp={conversation.lastMessageTimestamp}
                />
              </a>
            </Link>
          );
        })}
      </Conversations>
    </Container>
  );
};

export default Home;
