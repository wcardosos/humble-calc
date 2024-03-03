import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  withBorder?: boolean;
}

export function Button({ children, withBorder = false }: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex justify-center items-center bg-violet-400 p-4',
        withBorder && 'border-b-[1px] border-violet-900',
      )}
    >
      {children}
    </button>
  );
}
