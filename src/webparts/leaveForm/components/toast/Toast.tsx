import * as React from 'react';
import { MessageBar, MessageBarType } from '@fluentui/react';
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: MessageBarType;
  duration?: number; // auto dismiss
}

const Toast: React.FC<ToastProps> = ({ message, type = MessageBarType.success, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      zIndex: 1000,
      minWidth: 250,
    }}>
      <MessageBar messageBarType={type} isMultiline={false}>
        {message}
      </MessageBar>
    </div>
  );
};

export default Toast;
