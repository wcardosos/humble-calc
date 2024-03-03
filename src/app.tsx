import { Divide, Equal, Minus, Plus, X } from 'lucide-react';
import { ArithmeticButton } from './components/buttons/arithmetic';
import { Button } from './components/buttons/button';
import { Logo } from './components/logo';
import { Display } from './components/display';
import { History } from './components/history';

export function App() {
  return (
    <main className="flex">
      <section className="flex flex-col flex-1 h-screen bg-gray-800 px-2">
        <History />
        <Display />
      </section>
      <aside className="grid gap-0 w-20 h-screen bg-violet-300 border-l-[1px] border-violet-900">
        <Logo />
        <Button withBorder>
          <span className="text-violet-900 text-[40px]">C</span>
        </Button>
        <ArithmeticButton icon={Divide} />
        <ArithmeticButton icon={X} />
        <ArithmeticButton icon={Minus} />
        <ArithmeticButton icon={Plus} />
        <Button>
          <Equal className="text-violet-900" strokeWidth={1} size={40} />
        </Button>
      </aside>
    </main>
  );
}
