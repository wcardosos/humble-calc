import { LucideIcon } from 'lucide-react';

interface ArithmeticButtonProps {
  icon: LucideIcon;
}

export function ArithmeticButton({ icon: Icon }: ArithmeticButtonProps) {
  return (
    <button className="flex w-20 h-20 justify-center items-center bg-violet-300 border-b-[1px] border-violet-900 py-4">
      <Icon className="text-violet-900" strokeWidth={1} size={40} />
    </button>
  );
}
