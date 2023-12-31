import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={changeLanguage}
    >
      {i18n.language}
    </Button>
  );
};
