import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Loader } from "./Loader";

export default {
  component: Loader,
  title: 'shared/Loader',
  tags: ['autodocs'],
};

export const Light = {};

export const Dark = {
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};