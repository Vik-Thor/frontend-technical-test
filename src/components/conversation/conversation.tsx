import React from "react";
import { getReadableDate } from "../../utils/getReadableDate";
import { Avatar } from "../avatar/avatar";

import "./conversation.css";

export interface ConversationProps {
  nickname: string;
  timestamp: number;
}

export const Conversation: React.FC<ConversationProps> = ({
  nickname,
  timestamp,
}) => {
  return (
    <div className="conversation">
      <Avatar name={nickname} />
      <div className="conversation_info">
        <div className="conversation_name">{nickname}</div>
        <div className="conversation_date">{getReadableDate(timestamp)}</div>
      </div>
    </div>
  );
};
