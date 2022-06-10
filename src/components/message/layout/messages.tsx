import React, { ReactNode } from "react";

import "./messages.css";

export interface MessagesProps {
  name: string;
  date: number;
  children: ReactNode;
}

export const Messages: React.FC<MessagesProps> = ({ name, date, children }) => {
  return <div className="messages">{children}</div>;
};
