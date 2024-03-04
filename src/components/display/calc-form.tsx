import { FormEvent, useContext } from 'react';
import { Button } from '../buttons/button';
import { Equal } from 'lucide-react';
import { CalculationsContext } from '@/contexts/calculations';

export function CalcForm() {
  const { calculationString, setCalculationString, calculate } =
    useContext(CalculationsContext);

  const onChangeCalc = (event: FormEvent<HTMLInputElement>) => {
    setCalculationString(event.currentTarget.value);
  };

  const onClickResult = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    calculate();
  };

  return (
    <form onSubmit={onClickResult} className="flex space-x-2 h-full">
      <input
        className="text-[36px] font-medium flex-1 w-full bg-transparent text-right focus:outline-none"
        value={calculationString}
        onChange={onChangeCalc}
      />
      <div className="border-l-[1px] border-violet-900">
        <Button withBorder={{ left: true }}>
          <Equal className="text-violet-900" strokeWidth={1} size={40} />
        </Button>
      </div>
    </form>
  );
}
