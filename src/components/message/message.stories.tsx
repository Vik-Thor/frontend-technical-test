import { Meta, Story } from "@storybook/react";
import React from "react";

import { Message, MessageProps } from "./message";

export default {
  title: "Component/Message",
  component: Message,
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const DefaultMessage = Template.bind({});

DefaultMessage.args = {
  body: "Bonjour comment tu va?",
  author: "Victor",
};
