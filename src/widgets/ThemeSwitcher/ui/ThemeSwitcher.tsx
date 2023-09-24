import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/className/classNames';
import LightButtonIcon from '../../../shared/assets/icons/theme-light.svg';
import DarkButtonIcon from '../../../shared/assets/icons/theme-dark.svg';
import { THEME } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === THEME.LIGHT ? <LightButtonIcon /> : <DarkButtonIcon />}
    </Button>
  );
};
