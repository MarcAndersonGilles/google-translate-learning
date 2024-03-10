import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="bg-red-500 p-5 text-white">Hello, my name is Bob</div>
        <div>
          <h1>{t('title')}</h1>;
        </div>
      </div>
    </main>
  );
}
