import { BugButton } from 'app/providers/ErrorBoundry/ui/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <h2>{t('Main Page')}</h2>
      <BugButton />
    </div> 
  );
};

export default MainPage;
