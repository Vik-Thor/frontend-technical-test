import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Conversation, ConversationProps } from './conversation';

export default {
  title: 'Component/Conversation',
  component: Conversation,
} as Meta;

const Template: Story<ConversationProps> = (args) => <Conversation {...args} />;

export const DefaultConversation = Template.bind({});

DefaultConversation.args = {
  nickname: 'Victor',
  timestamp: 1625637849,
};