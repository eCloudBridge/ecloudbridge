
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
];

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });
  const [isTranslating, setIsTranslating] = useState(false);

  // Auto-detect language based on user's location using IP geolocation
  useEffect(() => {
    const detectLanguage = async () => {
      if (localStorage.getItem('selectedLanguage')) return;
      
      try {
        // Use a geolocation API to detect country
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        console.log('Detected country:', data.country_code);
        
        // Default to English for India and most countries
        if (data.country_code === 'IN') {
          setCurrentLanguage('en');
          localStorage.setItem('selectedLanguage', 'en');
        } else {
          // You can add more country-specific logic here
          const browserLang = navigator.language.split('-')[0];
          if (languages.find(lang => lang.code === browserLang)) {
            setCurrentLanguage(browserLang);
            localStorage.setItem('selectedLanguage', browserLang);
          }
        }
      } catch (error) {
        console.log('Geolocation detection failed, using browser language');
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0];
        if (languages.find(lang => lang.code === browserLang)) {
          setCurrentLanguage(browserLang);
          localStorage.setItem('selectedLanguage', browserLang);
        }
      }
    };

    detectLanguage();
  }, []);

  // Hide Google Translate toolbar
  useEffect(() => {
    const hideGoogleTranslateToolbar = () => {
      const style = document.createElement('style');
      style.textContent = `
        .goog-te-banner-frame,
        .goog-te-ftab,
        .goog-te-balloon-frame,
        .goog-te-menu-frame,
        #google_translate_element,
        .skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-tooltip {
          display: none !important;
        }
        .goog-tooltip:hover {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    hideGoogleTranslateToolbar();
  }, []);

  // Load Google Translate script
  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, 'google_translate_element');
          
          console.log('Google Translate loaded successfully');
          
          // Apply saved language after a delay
          if (currentLanguage !== 'en') {
            setTimeout(() => {
              doGoogleTranslate(currentLanguage);
            }, 1500);
          }
        } catch (error) {
          console.error('Error initializing Google Translate:', error);
        }
      };

      script.onerror = () => {
        console.error('Failed to load Google Translate script');
      };

      document.head.appendChild(script);
    };

    loadGoogleTranslate();
  }, [currentLanguage]);

  const doGoogleTranslate = (langCode: string) => {
    console.log('Starting translation to:', langCode);
    
    if (langCode === 'en') {
      // Reset to original English
      const currentUrl = window.location.href;
      if (currentUrl.includes('#googtrans')) {
        window.location.href = currentUrl.split('#googtrans')[0];
      } else {
        window.location.reload();
      }
      return;
    }

    // Use URL hash method for translation
    console.log('Using URL hash method for translation');
    const hash = `#googtrans(en|${langCode})`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
      window.location.reload();
    }
  };

  const translatePage = async (langCode: string) => {
    if (langCode === currentLanguage || isTranslating) return;
    
    console.log('Translate page called with:', langCode);
    setIsTranslating(true);
    setCurrentLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);

    try {
      // Wait a bit for UI to update
      setTimeout(() => {
        doGoogleTranslate(langCode);
        setIsTranslating(false);
      }, 500);
    } catch (error) {
      console.error('Translation failed:', error);
      setIsTranslating(false);
    }
  };

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <Select
        value={currentLanguage}
        onValueChange={translatePage}
        disabled={isTranslating}
      >
        <SelectTrigger className="w-auto border-none bg-transparent text-white hover:text-orange-400 hover:bg-white/10 focus:ring-0 focus:ring-offset-0">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>{selectedLanguage.flag}</span>
            <span className="hidden sm:inline">{selectedLanguage.name}</span>
            <span className="sm:hidden">{selectedLanguage.code.toUpperCase()}</span>
          </div>
        </SelectTrigger>
        <SelectContent className="max-h-96 bg-white border border-gray-200 shadow-lg z-50">
          {languages.map((language) => (
            <SelectItem
              key={language.code}
              value={language.code}
              className={`flex items-center space-x-3 cursor-pointer hover:bg-gray-100 ${
                currentLanguage === language.code ? 'bg-orange-50 text-orange-600' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLanguage === language.code && (
                  <span className="text-orange-600 ml-auto">✓</span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default LanguageSelector;
