import { LanguageSwitcher } from '@/components/Lang-Switcher';
import LanguageChanger from '@/components/LanguageChanger';
import { GoogleTranslate } from '@/components/GoogleTranslate';
import { useTranslations } from 'next-intl';
import { cookies } from 'next/headers';
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

export const getPrefLangCookie = () => {
  return cookies().get("googtrans")?.value ?? "en";
};

export default function Home({params: {locale}}:{params:{locale:string}}) {

 console.log(getPrefLangCookie())
  console.log(locale)

  // const t = useTranslations('Index');
  return (
    <main className="flex w-full  min-h-screen p-5 lg:p-24 relative">

      <>
      <div className='absolute  top-0 right-0 p-5 bg-gray-50'>
      {/* <LanguageChanger locale={locale} /> */}
      {/* <LanguageSwitcher /> */}
      <GoogleTranslate prefLangCookie={locale}/>
      </div>
    
      </>
      <div className="flex flex-col gap-10 mt-20 lg:mt-0   w-full items-center  font-mono text-sm lg:flex">

        <div className="bg-red-500 p-5 text-white" id="google_translate_element">Hello, my name is Bob</div>



        <div className='flex flex-col gap-4'>
          <h1>{('Mon ami est gentil')}</h1>
          <div className='flex flex-col gap-3 ' >
            {arrayOfItems.map((item, index) => (
              <Fragment key={index}>
                <p className='text-black text-sm font-normal ' id={`google_translate_element-${index}`} >{item.description}</p>
              </Fragment>
            ))}
          </div>
        </div>

      </div>

    </main>
  );
}
