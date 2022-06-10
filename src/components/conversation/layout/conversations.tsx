import React, { ReactNode } from "react";

import "./conversation.css";

export interface ConversationProps {
  children: ReactNode;
}

export const Conversation: React.FC<ConversationProps> = ({ children }) => {
  return <div className="conversation">{children}</div>;
};
