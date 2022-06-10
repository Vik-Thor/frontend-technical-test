import { Meta, Story } from "@storybook/react";
import React from "react";
import { getLoggedUserId } from "../../../utils/getLoggedUserId";
import { Message } from "../message";

import { Messages, MessagesProps } from "./messages";

export default {
  title: "Component/Messages",
  component: Messages,
} as Meta;

const messagesData = [
  {
    id: 1,
    conversationId: 1,
    timestamp: 1625637849,
    authorId: 1,
    body: "Bonjour c'est le premier message de la première conversation",
  },
  {
    id: 2,
    conversationId: 1,
    timestamp: 1625637867,
    authorId: 1,
    body: "Bonjour c'est le second message de la première conversation",
  },
  {
    id: 3,
    conversationId: 1,
    timestamp: 1625648667,
    authorId: 2,
    body: "Bonjour c'est le troisième message de la première conversation",
  },
];

const Template: Story<MessagesProps> = (args) => (
  <Messages {...args}>
    {messagesData.map((message) => (
      <Message
        key={message.authorId}
        body={message.body}
        author={`${message.authorId}`}
        owner={getLoggedUserId() == message.authorId}
      />
    ))}
  </Messages>
);

export const DefaultMessages = Template.bind({});

DefaultMessages.args = {
  name: "Victor",
  timestamp: 1625637849,
};
