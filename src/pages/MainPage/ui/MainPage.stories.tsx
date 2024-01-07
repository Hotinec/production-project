import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";
import MainPage from "./MainPage";

export default {
  component: MainPage,
  title: 'pages/MainPage',
  tags: ['autodocs'],
};

export const Light = {};

export const Dark = {
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};
