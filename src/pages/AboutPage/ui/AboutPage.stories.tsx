import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";
import AboutPage from "./AboutPage";

export default {
  component: AboutPage,
  title: 'pages/AboutPage',
  tags: ['autodocs'],
};

export const Light = {};

export const Dark = {
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};
