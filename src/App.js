import { SearchProvider } from './context/Search';

import { Header } from "./components/Header";
import { GenreList } from "./components/GenreList";
import { MovieList } from './components/MovieList';


function App() {

  return (
    <SearchProvider>
      <div>
        <Header />
        <GenreList />
        <MovieList />
      </div>
    </SearchProvider>
  );
}

export default App;
