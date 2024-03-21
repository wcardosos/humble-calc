import { Display } from './components/display';
import { History } from './components/history';
import { Aside } from './components/aside';

export function App() {
  return (
    <main className="grid gap-0 h-screen overflow-x-hidden overflow-y-hidden">
      <section className="flex bg-gray-800">
        <History />
        <Aside />
      </section>
      <Display />
    </main>
  );
}
