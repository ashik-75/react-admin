import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider attribute="class">
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
