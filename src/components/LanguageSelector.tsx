
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
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('selectedLanguage') || 'en';
  });
  const [isTranslating, setIsTranslating] = useState(false);

  // Auto-detect language based on user's location (only on first visit)
  useEffect(() => {
    const detectLanguage = async () => {
      if (localStorage.getItem('selectedLanguage')) return;
      
      try {
        const browserLang = navigator.language.split('-')[0];
        const browserCountry = navigator.language.split('-')[1];
        
        if (browserCountry && countryToLanguage[browserCountry]) {
          const detectedLang = countryToLanguage[browserCountry];
          setCurrentLanguage(detectedLang);
          localStorage.setItem('selectedLanguage', detectedLang);
        } else if (languages.find(lang => lang.code === browserLang)) {
          setCurrentLanguage(browserLang);
          localStorage.setItem('selectedLanguage', browserLang);
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
            autoDisplay: false
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
      const restoreButton = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (restoreButton) {
        restoreButton.value = '';
        restoreButton.dispatchEvent(new Event('change'));
        return;
      }
      
      // If restore button not found, reload page
      const currentUrl = window.location.href;
      if (currentUrl.includes('#googtrans')) {
        window.location.href = currentUrl.split('#googtrans')[0];
      } else {
        window.location.reload();
      }
      return;
    }

    // Method 1: Try using the combo box
    const comboBox = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (comboBox) {
      console.log('Found combo box, setting value to:', langCode);
      comboBox.value = langCode;
      comboBox.dispatchEvent(new Event('change'));
      return;
    }

    // Method 2: Try using URL hash method
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
