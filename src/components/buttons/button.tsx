import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  withBorder?: {
    left?: boolean;
    bottom?: boolean;
  };
}

export function Button({
  children,
  onClick,
  withBorder = { left: false, bottom: false },
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex w-20 h-20 justify-center items-center bg-violet-400 py-4',
        withBorder.left && 'border-l-[1px] border-violet-900',
        withBorder.bottom && 'border-b-[1px] border-violet-900',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
