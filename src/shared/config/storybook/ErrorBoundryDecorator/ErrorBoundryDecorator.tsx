import { StoryFn } from "@storybook/react";
import { ErrorBoundary } from "app/providers/ErrorBoundry";
import { PageError } from "widgets/PageError";

export const ErrorBoundryDecorator = (StoryComponent: StoryFn) => {
  return (
    <ErrorBoundary fallback={<PageError />}>
      <StoryComponent />
    </ErrorBoundary> 
  );
};
