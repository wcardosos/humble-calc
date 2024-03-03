import { DisplayActions } from './actions';

export function Display() {
  return (
    <div className="flex items-center justify-between h-[76px] border-t-[1px] border-gray-600">
      <DisplayActions />
      <span className="text-[36px] font-medium">57</span>
    </div>
  );
}
