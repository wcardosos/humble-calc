import { useState, FormEvent } from 'react';
import { DisplayActions } from './actions';

export function Display() {
  const [calc, setCalc] = useState<string>('');

  const onChangeCalc = (event: FormEvent<HTMLInputElement>) =>
    setCalc(event.currentTarget.value);

  return (
    <div className="flex items-center justify-between h-[76px] border-t-[1px] border-gray-600">
      <DisplayActions />
      <input
        className="text-[36px] font-medium flex-1 w-full bg-transparent text-right focus:outline-none"
        value={calc}
        onChange={onChangeCalc}
      />
    </div>
  );
}
