import { Copy } from 'lucide-react';
import { writeText } from '@tauri-apps/api/clipboard';
import { useToast } from '../ui/use-toast';

export function HistoryResult() {
  const { toast } = useToast();

  const value = '23+43';

  const copyResultToClipboard = () => {
    writeText(value);

    toast({
      description: 'Operação copiada para a área de transferência',
      className: 'bg-violet-200 text-violet-900',
      duration: 1500,
    });
  };

  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col items-end text-xl text-gray-400">
        <div className="flex gap-2 items-center">
          <span>{value}</span>
          <button onClick={copyResultToClipboard}>
            <Copy size={16} />
          </button>
        </div>
        <p>=57</p>
      </div>
    </div>
  );
}
