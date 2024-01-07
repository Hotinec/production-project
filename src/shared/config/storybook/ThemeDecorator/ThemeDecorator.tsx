import { StoryFn } from "@storybook/react";
import { THEME } from "app/providers/ThemeProvider/lib/ThemeContext";

export const ThemeDecorator = (theme: THEME) => (StoryComponent: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
