import { useToast } from '@/components/ui/use-toast';
import { ReactNode, createContext, useState } from 'react';

interface History {
  calculation: string;
  result: string;
}

interface CalculationsContextValues {
  calculationString: string;
  history: History[];
  setCalculationString: React.Dispatch<React.SetStateAction<string>>;
  calculate: () => void;
  clear: () => void;
}

export const CalculationsContext = createContext(
  {} as CalculationsContextValues,
);

interface CalculationsProviderProps {
  children: ReactNode;
}

const CALCULATION_STRING_REGEX = /^(\d+(\.\d+)?)([+\-*/](\d+(\.\d+)?))*$/;

export function CalculationsProvider({ children }: CalculationsProviderProps) {
  const [calculationString, setCalculationString] = useState<string>('');
  const [history, setHistory] = useState<History[]>([]);

  const { toast } = useToast();

  const calculate = () => {
    try {
      CALCULATION_STRING_REGEX.test(calculationString);

      const result = eval(calculationString);

      setHistory((state) => [
        { calculation: calculationString, result },
        ...state,
      ]);
      setCalculationString(result);
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'O cálculo que você forneceu não está bem formatado',
        duration: 1500,
      });
    }
  };

  const clear = () => setCalculationString('');

  return (
    <CalculationsContext.Provider
      value={{
        calculationString,
        history,
        setCalculationString,
        calculate,
        clear,
      }}
    >
      {children}
    </CalculationsContext.Provider>
  );
}
