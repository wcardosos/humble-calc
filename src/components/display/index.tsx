import { DisplayActions } from './actions';
import { CalcForm } from './calc-form';

export function Display() {
  return (
    <div className="flex items-center justify-between border-t-[1px] border-gray-600 pl-2">
      <DisplayActions />
      <CalcForm />
    </div>
  );
}
