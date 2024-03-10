"use client";
import { usePathname, useRouter } from "@/navigation";
import Script from "next/script";
import React, { ChangeEvent } from "react";

declare global {
    interface Window {
      googleTranslateElementInit: () => void;
    }
  }

  declare global {
    interface Window {
      google: {
        translate: {
          TranslateElement: {
            new (options: {
              pageLanguage: string;
              includedLanguages: string;
            }, id: string): void;
          };
        };
      };
    }
  }
  
const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Français", value: "fr", src: "https://flagcdn.com/h60/us.png" },
  // Add additional languages as needed
];

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement({
    pageLanguage: "auto", includedLanguages
  }, "google_translate_element");
}

export function GoogleTranslate({ prefLangCookie }: { prefLangCookie: string }) {
console.log(prefLangCookie)
    const [langCookie, setLangCookie] = React.useState(decodeURIComponent(prefLangCookie));
console.log(langCookie)

   
  
    React.useEffect(() => {
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
  
    const onChange = (value: string) => {
      const lang =  value;
      setLangCookie(lang);
      console.log(langCookie)
      console.log(lang)
      const element = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;;
      console.log(element)
      
      element!.value = value;
      console.log(element!.value )
      element!.dispatchEvent(new Event("change"));
   
    };

    
  
    return (
      <div>
        <div id="google_translate_element" style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>
        <LanguageSelector onChange={onChange} value={langCookie} />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </div>
    );
  };
  
  function LanguageSelector({ onChange, value }: {onChange: (value: string) => void, value: string}) {


    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push(pathname, { locale: e.target.value });
    };

    const langCookie = value.split("/")[2];
    
    return (
      <select onChange={(e) => { 
        onChange(e.target.value)
        // handleChange(e)
      }} value={langCookie}>
        {languages.map((it) => (
          <option value={it.value} key={it.value}>
            {it.label}
          </option>
        ))}
      </select>
    );
  }