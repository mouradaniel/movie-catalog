import { BrowserRouter } from "react-router-dom";

import { SearchProvider } from './context/Search';

import AppRoutes from './routes';

import './i18n';

function App() {

  return (
    <SearchProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
