import React from "react";
import { cx } from "../../utils/classname";

import "./message.css";

export interface MessageProps {
  body: string;
  author?: string;
  owner?: boolean;
}

export const Message: React.FC<MessageProps> = ({
  body,
  author,
  owner = false,
}) => {
  return (
    <div className="message">
      {!owner && <div className="message__author">{author}</div>}
      <div className={cx("message__body", owner && "message_body--owner")}>
        {body}
      </div>
    </div>
  );
};
