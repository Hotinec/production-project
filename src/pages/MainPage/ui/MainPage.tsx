import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <h2>{t('Main Page')}</h2>
  );
};

export default MainPage;
