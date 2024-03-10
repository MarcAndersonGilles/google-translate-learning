import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

const arrayOfItems = [
  {
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`
  },
  {
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`
  },
  {
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
  },
  {
    description: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
  },
  {
    description: `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  }
];


export default function Home() {
  const t = useTranslations('Index');
  return (
    <main className="flex  min-h-screen p-24">
      <div className="flex flex-col gap-10   w-full items-center  font-mono text-sm lg:flex">

        <div className="bg-red-500 p-5 text-white">Hello, my name is Bob</div>

        <div className='flex flex-col'>
          <h1>{t('title')}</h1>;
          <div className='flex flex-col gap-3'>
            {arrayOfItems.map((item, index) => (
              <Fragment key={index}>
                <p className='text-black text-sm font-normal '>{item.description}</p>
              </Fragment>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
