import React from 'react';
import { getFirsCharAndUpper } from '../../utils/getLoggedUserId';

import './avatar.css';

export interface AvatarProps {
  name: string
}

export const Avatar: React.FC<AvatarProps> = ({
  name
}) => {
  return <div className="avatar">{getFirsCharAndUpper(name)}</div>
}