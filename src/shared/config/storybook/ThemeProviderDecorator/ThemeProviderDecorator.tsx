import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeProviderDecorator = (StoryComponent: StoryFn) => {
  return (
    <ThemeProvider>
      <StoryComponent />
    </ThemeProvider>
  );
};
