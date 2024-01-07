import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/ThemeProvider/ui/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundry";
import "./shared/config/i18n/i18n";
import { PageError } from "widgets/PageError";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);