import React, { ReactNode } from "react";

import "./conversations.css";

export interface ConversationProps {
  children: ReactNode;
}

export const Conversations: React.FC<ConversationProps> = ({ children }) => {
  return <div className="conversations">{children}</div>;
};
