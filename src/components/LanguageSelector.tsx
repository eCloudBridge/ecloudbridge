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
        // Always default to English for initial load
        setCurrentLanguage('en');
        localStorage.setItem('selectedLanguage', 'en');
        console.log('Default language set to English');
      } catch (error) {
        console.log('Language detection failed, defaulting to English');
        setCurrentLanguage('en');
        localStorage.setItem('selectedLanguage', 'en');
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
        .goog-te-menu-value,
        .goog-te-gadget,
        .goog-te-combo,
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
        .goog-te-spinner {
          display: none !important;
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
      // Reset to original English - comprehensive cleanup
      console.log('Resetting to English');
      
      // Clear localStorage first
      localStorage.removeItem('selectedLanguage');
      
      // Clear Google Translate cookie properly across possible domains and paths
      const hostname = window.location.hostname;
      const domains = hostname.split('.');
      
      while (domains.length > 0) {
        const domain = domains.join('.');
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain}`;
        domains.shift();
      }
      
      // Clear URL hash and params safely
      const currentUrl = window.location.href;
      const cleanUrl = currentUrl.split('#')[0].split('?')[0];
      window.history.replaceState({}, document.title, cleanUrl);
      
      // Force reload to clear translation
      setTimeout(() => {
        window.location.assign(cleanUrl);
        window.location.reload();
      }, 100);
      return;
    }

    // Use URL hash method for translation
    console.log('Using URL hash method for translation');
    const hash = `#googtrans(en|${langCode})`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  const translatePage = async (langCode: string) => {
    if (langCode === currentLanguage || isTranslating) return;
    
    console.log('Translate page called with:', langCode);
    setIsTranslating(true);
    setCurrentLanguage(langCode);
    
    // Only save to localStorage if not English
    if (langCode !== 'en') {
      localStorage.setItem('selectedLanguage', langCode);
    } else {
      localStorage.removeItem('selectedLanguage');
    }

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
        <SelectTrigger className="w-auto border border-gray-200 bg-white/90 text-gray-800 hover:text-orange-600 hover:bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-0 shadow-sm">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>{selectedLanguage.flag}</span>
            <span className="hidden sm:inline">{selectedLanguage.name}</span>
            <span className="sm:hidden">{selectedLanguage.code.toUpperCase()}</span>
          </div>
        </SelectTrigger>
        <SelectContent className="max-h-96 bg-white border border-gray-200 shadow-xl z-[100] backdrop-blur-md">
          {languages.map((language) => (
            <SelectItem
              key={language.code}
              value={language.code}
              className={`flex items-center space-x-3 cursor-pointer hover:bg-orange-50 focus:bg-orange-50 ${
                currentLanguage === language.code ? 'bg-orange-100 text-orange-700' : 'text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3 w-full">
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
