import { FC, ReactNode } from 'react';

interface NotificationBarProps {
  children: ReactNode;
}

const NotificationBar: FC<NotificationBarProps> = ({ children }) => {
  return (
    <div className='dark:bg-primary bg-primary_light h-[36.48px] flex items-center justify-center text-center py-1 font-semibold text-[14px] text-white'>
      {children}
    </div>
  );
};

export default NotificationBar;
