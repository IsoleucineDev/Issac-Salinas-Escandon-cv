import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="rounded-full font-semibold"
    >
      {language === 'es' ? 'EN' : 'ES'}
    </Button>
  );
}
