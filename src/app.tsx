import { Divide, Minus, Plus, X } from 'lucide-react';
import { ArithmeticButton } from './components/buttons/arithmetic';
import { Button } from './components/buttons/button';
import { Logo } from './components/logo';
import { Display } from './components/display';
import { History } from './components/history';

export function App() {
  return (
    <main className="grid gap-0 h-screen">
      <section className="flex bg-gray-800">
        <History />
        <aside className="grid gap-0 w-20 bg-violet-300 border-l-[1px] border-violet-900">
          <Logo />
          <Button withBorder={{ bottom: true }}>
            <span className="text-violet-900 text-[40px]">C</span>
          </Button>
          <ArithmeticButton icon={Divide} />
          <ArithmeticButton icon={X} />
          <ArithmeticButton icon={Minus} />
          <ArithmeticButton icon={Plus} />
        </aside>
      </section>
      <Display />
    </main>
  );
}
