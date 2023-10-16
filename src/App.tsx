import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/movies/details/MovieDetails";
import Movies from "./pages/movies/Movies";
import Skeleton from "./components/skeleton/Skeleton";
import SearchResult from "./pages/search/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id/:genre" element={<Movies />} />
        <Route path="/movie/:id/details" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
