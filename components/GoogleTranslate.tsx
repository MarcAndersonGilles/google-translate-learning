"use client";
import { usePathname, useRouter } from "@/navigation";
import Script from "next/script";
import React, { ChangeEvent } from "react";

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


   
  
    React.useEffect(() => {
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
  
    const onChange = (value: string) => {
      const lang = "/en/" + value;
      setLangCookie(lang);
      console.log(lang)
      const element = document.querySelector(".goog-te-combo");
      element.value = value;
      console.log(element.value )
      element.dispatchEvent(new Event("change"));
     
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
  
  function LanguageSelector({ onChange, value }) {


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