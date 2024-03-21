import { useContext } from 'react';
import { ArithmeticButton } from '../buttons/arithmetic';
import { Button } from '../buttons/button';
import { Logo } from '../logo';
import { CalculationsContext } from '@/contexts/calculations';

export function Aside() {
  const { clear } = useContext(CalculationsContext);
  return (
    <aside className="grid gap-0 w-20 bg-violet-300 border-l-[1px] border-violet-900">
      <Logo />
      <Button withBorder={{ bottom: true }} onClick={clear}>
        <span className="text-violet-900 text-[40px]">C</span>
      </Button>
      <ArithmeticButton type="division" />
      <ArithmeticButton type="multiply" />
      <ArithmeticButton type="sub" />
      <ArithmeticButton type="sum" />
    </aside>
  );
}
