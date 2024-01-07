import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Sidebar } from './Sidebar';

export default {
  component: Sidebar,
  title: 'widgets/Sidebar',
  tags: ['autodocs'],
};

export const Light = {};

export const Dark = {
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};


