import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';
import { THEME } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  component: Button,
  title: 'shared/Button',
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    children: 'Text',
  },
};

export const Clear = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};

export const Outlined = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
};

export const OutlineDark = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};
