import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeProviderDecorator } from "shared/config/storybook/ThemeProviderDecorator/ThemeProviderDecorator";

export default {
  component: ThemeSwitcher,
  title: 'widgets/ThemeSwitcher',
  tags: ['autodocs'],
};

export const Light = {
  decorators: [
    ThemeDecorator(THEME.LIGHT)
  ]
};

export const Dark = {
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};
