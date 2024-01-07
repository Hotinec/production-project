import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeProviderDecorator } from '../../src/shared/config/storybook/ThemeProviderDecorator/ThemeProviderDecorator';
import { ErrorBoundryDecorator } from '../../src/shared/config/storybook/ErrorBoundryDecorator/ErrorBoundryDecorator';
import { THEME } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(THEME.LIGHT),
    RouterDecorator,
    ThemeProviderDecorator,
    ErrorBoundryDecorator,
  ]
};

export default preview;
