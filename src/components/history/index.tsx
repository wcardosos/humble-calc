import { useContext } from 'react';
import { HistoryResult } from './result';
import { CalculationsContext } from '@/contexts/calculations';

export function History() {
  const { history } = useContext(CalculationsContext);
  return (
    <div className="flex flex-col-reverse py-2 px-2 flex-1">
      {history.map((historyItem, index) => (
        <HistoryResult
          key={index}
          calculation={historyItem.calculation}
          result={historyItem.result}
        />
      ))}
    </div>
  );
}
