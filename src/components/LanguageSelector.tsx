
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
    // Get saved language from localStorage or default to English
    return localStorage.getItem('selectedLanguage') || 'en';
  });
  const [isTranslating, setIsTranslating] = useState(false);
  const [googleTranslateLoaded, setGoogleTranslateLoaded] = useState(false);

  // Auto-detect language based on user's location (only on first visit)
  useEffect(() => {
    const detectLanguage = async () => {
      // Only auto-detect if no language is saved
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
      // Check if already loaded
      if (document.getElementById('google-translate-script')) {
        setGoogleTranslateLoaded(true);
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      // Define the callback function
      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          }, 'google_translate_element');
          setGoogleTranslateLoaded(true);
          console.log('Google Translate loaded successfully');
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
  }, []);

  // Apply saved language when Google Translate is loaded
  useEffect(() => {
    if (googleTranslateLoaded && currentLanguage !== 'en') {
      console.log('Applying saved language:', currentLanguage);
      setTimeout(() => {
        triggerTranslation(currentLanguage);
      }, 1000);
    }
  }, [googleTranslateLoaded, currentLanguage]);

  const triggerTranslation = (langCode: string) => {
    try {
      console.log('Triggering translation to:', langCode);
      
      // Method 1: Try using the select element
      const selectElement = document.querySelector('#google_translate_element select') as HTMLSelectElement;
      if (selectElement) {
        console.log('Found select element, setting value to:', langCode);
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        return;
      }

      // Method 2: Try finding translation links in iframe
      const frames = document.querySelectorAll('iframe');
      for (let frame of frames) {
        try {
          if (frame.src && frame.src.includes('translate.google')) {
            const frameDoc = frame.contentDocument || frame.contentWindow?.document;
            if (frameDoc) {
              const langLink = frameDoc.querySelector(`a[onclick*="${langCode}"]`) as HTMLAnchorElement;
              if (langLink) {
                console.log('Found translation link, clicking');
                langLink.click();
                return;
              }
            }
          }
        } catch (e) {
          console.log('Cannot access frame content due to CORS');
        }
      }

      // Method 3: Try direct API call
      if (window.google?.translate?.TranslateElement) {
        console.log('Trying direct Google Translate API call');
        const translateElement = new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: languages.map(lang => lang.code).join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        });
      }

    } catch (error) {
      console.error('Error triggering translation:', error);
    }
  };

  const translatePage = async (langCode: string) => {
    if (langCode === currentLanguage) return;
    
    console.log('Translate page called with:', langCode);
    setIsTranslating(true);
    setCurrentLanguage(langCode);
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', langCode);

    if (!googleTranslateLoaded) {
      console.log('Google Translate not loaded yet');
      setIsTranslating(false);
      return;
    }

    try {
      if (langCode === 'en') {
        // Reset to original English
        console.log('Resetting to English');
        const restoreButton = document.querySelector('.goog-te-menu-value span:first-child') as HTMLElement;
        if (restoreButton) {
          restoreButton.click();
        } else {
          // Force page reload to original English
          window.location.reload();
        }
      } else {
        // Wait a bit for UI to update
        setTimeout(() => {
          triggerTranslation(langCode);
        }, 300);
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
