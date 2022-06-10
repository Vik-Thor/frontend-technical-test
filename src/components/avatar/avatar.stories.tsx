import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Avatar, AvatarProps } from './avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});