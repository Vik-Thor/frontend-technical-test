import React, { ReactNode } from "react";

import "./messages.css";

export interface MessagesProps {
  children: ReactNode;
}

export const Messages: React.FC<MessagesProps> = ({ name, date, children }) => {
  return <div className="messages">{children}</div>;
};
