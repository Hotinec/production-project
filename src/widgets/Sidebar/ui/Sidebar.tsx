import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>{t('toggle')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.themeSwitcher} />
        <LangSwitcher />
      </div>
    </div>
  );
};
