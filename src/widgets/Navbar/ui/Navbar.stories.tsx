import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Navbar } from "./Navbar";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";

export default {
  component: Navbar,
  title: 'widgets/Navbar',
  tags: ['autodocs'],
};

export const Light = {};

export const Dark = {
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};

