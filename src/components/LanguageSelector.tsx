
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

// Country to language mapping for auto-detection
const countryToLanguage: { [key: string]: string } = {
  'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en',
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es',
  'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr',
  'DE': 'de', 'AT': 'de',
  'IT': 'it',
  'PT': 'pt', 'BR': 'pt',
  'RU': 'ru', 'BY': 'ru', 'KZ': 'ru',
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh',
  'JP': 'ja',
  'KR': 'ko',
  'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'MA': 'ar',
  'IN': 'hi',
  'TH': 'th',
  'VN': 'vi',
  'TR': 'tr',
  'PL': 'pl',
  'NL': 'nl',
  'SE': 'sv',
  'DK': 'da',
  'NO': 'no',
  'FI': 'fi',
  'CZ': 'cs',
  'HU': 'hu',
  'RO': 'ro',
  'BG': 'bg',
  'HR': 'hr',
  'SK': 'sk',
  'SI': 'sl',
  'EE': 'et',
  'LV': 'lv',
  'LT': 'lt',
};

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);

  // Auto-detect language based on user's location
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Try to get user's country from timezone or browser locale
        const browserLang = navigator.language.split('-')[0];
        const browserCountry = navigator.language.split('-')[1];
        
        if (browserCountry && countryToLanguage[browserCountry]) {
          setCurrentLanguage(countryToLanguage[browserCountry]);
        } else if (languages.find(lang => lang.code === browserLang)) {
          setCurrentLanguage(browserLang);
        }
      } catch (error) {
        console.log('Language detection failed, using default');
      }
    };

    detectLanguage();
  }, []);

  // Load Google Translate script
  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (window.google?.translate) {
        setGoogleTranslateLoaded(true);
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      // Define the callback function
      window.googleTranslateElementInit = () => {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, 'google_translate_element');
          setGoogleTranslateLoaded(true);
        }
      };

      document.head.appendChild(script);

      // Cleanup function
      return () => {
        document.head.removeChild(script);
        delete window.googleTranslateElementInit;
      };
    };

    loadGoogleTranslate();
  }, []);

  const translatePage = async (langCode: string) => {
    if (langCode === currentLanguage || !googleTranslateLoaded) return;
    
    setIsTranslating(true);
    setCurrentLanguage(langCode);

    try {
      // Wait a bit for Google Translate to be ready
      await new Promise(resolve => setTimeout(resolve, 500));

      // Try to find and trigger the Google Translate dropdown
      const selectElement = document.querySelector('#google_translate_element select') as HTMLSelectElement;
      if (selectElement) {
        // Set the value and trigger change
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      } else {
        // Alternative method: try to find translate links
        const translateFrame = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
        if (translateFrame && translateFrame.contentDocument) {
          const langLink = translateFrame.contentDocument.querySelector(`a[href*="${langCode}"]`) as HTMLAnchorElement;
          if (langLink) {
            langLink.click();
          }
        }
      }
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setTimeout(() => setIsTranslating(false), 2000);
    }
  };

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <>
      {/* Hidden Google Translate Element */}
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
