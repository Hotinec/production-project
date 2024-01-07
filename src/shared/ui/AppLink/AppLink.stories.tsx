import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  component: AppLink,
  title: 'shared/AppLink',
  tags: ['autodocs'],
};

export const Primary = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
  to: 'to'
};

export const PrimaryDark = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
  to: 'to',
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};

export const Secondary = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
  to: 'to'
};

export const SecondaryDark = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
  to: 'to',
  decorators: [
    ThemeDecorator(THEME.DARK)
  ]
};
