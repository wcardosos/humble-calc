import { CalculationsContext } from '@/contexts/calculations';
import { Divide, Minus, Plus, X } from 'lucide-react';
import { useContext } from 'react';

interface ArithmeticButtonProps {
  type: 'sum' | 'sub' | 'multiply' | 'division';
}

const ICONS_BY_BUTTON_TYPE = {
  sum: Plus,
  sub: Minus,
  multiply: X,
  division: Divide,
};

const OPERATORS_BY_BUTTON_TYPE = {
  sum: '+',
  sub: '-',
  multiply: '*',
  division: '/',
};

export function ArithmeticButton({ type }: ArithmeticButtonProps) {
  const { setCalculationString } = useContext(CalculationsContext);

  const Icon = ICONS_BY_BUTTON_TYPE[type];

  const insertOperationToCalculationString = () => {
    setCalculationString(
      (previousCalculationString: string) =>
        previousCalculationString + OPERATORS_BY_BUTTON_TYPE[type],
    );
  };

  return (
    <button
      className="flex w-20 h-20 justify-center items-center bg-violet-300 border-b-[1px] border-violet-900 py-4"
      onClick={insertOperationToCalculationString}
    >
      <Icon className="text-violet-900" strokeWidth={1} size={40} />
    </button>
  );
}
