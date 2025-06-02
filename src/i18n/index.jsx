// i18n/index.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// Import locale files
import en from '../locales/en/en.jsx';
import de from '../locales/de/de.jsx';
import fr from '../locales/fr/fr.jsx';

// Combine all translations
const translations = {
  en,
  de,
  fr
};

// Language Context
const LanguageContext = createContext();

// Language Provider Component
export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    // Try to detect from browser
    const browserLanguage = navigator.language.split('-')[0];
    if (translations[browserLanguage]) {
      return browserLanguage;
    }

    // Default to English
    return 'en';
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem('preferred-language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }

    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use translation
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

// Language Switcher Component
export function LanguageSwitcher({ className = "" }) {
  const { currentLanguage, changeLanguage, availableLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languageNames = {
    en: '🇺🇸 EN',
    de: '🇩🇪 DE',
    fr: '🇫🇷 FR'
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-gray-700 border-2 border-gray-600 px-3 py-2 text-sm leading-5 font-bold text-white hover:bg-gray-600 hover:border-gray-500 transition-all duration-100 ease-linear hover:translate-x-px hover:translate-y-px [image-rendering:pixelated] font-mono"
      >
        {languageNames[currentLanguage]}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-20 bg-gray-800 border-2 border-gray-600 shadow-lg min-w-[120px]">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-bold font-mono hover:bg-gray-700 transition-colors ${
                  currentLanguage === lang
                    ? 'text-green-400 bg-gray-700'
                    : 'text-gray-300'
                }`}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}