import { Calculator, History } from 'lucide-react';

export function DisplayActions() {
  return (
    <div className="flex flex-col space-y-2">
      <button>
        <History className="text-violet-500" size={24} />
      </button>
      <button>
        <Calculator className="text-gray-400" size={24} />
      </button>
    </div>
  );
}
