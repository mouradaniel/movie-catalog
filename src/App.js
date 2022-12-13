import { Header } from "./components/Header";
import { GenreList } from "./components/GenreList";
import { MovieList } from './components/MovieList';


function App() {
  return (
    <div>
      <Header />
      <GenreList />
      <MovieList />
    </div>
  );
}

export default App;
