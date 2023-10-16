import { Movie, MovieDetailsInterface } from "../constants/types";

const apikey = process.env.REACT_APP_API_KEY;

const TRENDING_MOVIE_URL = "https://api.themoviedb.org/3/trending/movie/week";
export async function getTrendingMovies(): Promise<any> {
  try {
    const moviesResponse = await fetch(
      `${TRENDING_MOVIE_URL}?api_key=${apikey}`
    );
    const genresResponse = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
    );

    if (!moviesResponse.ok || !genresResponse.ok) {
      throw new Error("Error fetching data.");
    }

    const [moviesData, genresData] = await Promise.all([
      moviesResponse.json(),
      genresResponse.json(),
    ]);

    const moviesWithGenres = mapMovieToGenre(
      moviesData.results.slice(0, 10),
      genresData.genres
    );
    return moviesWithGenres;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}

// Function to fetch genres
export async function getGenres(): Promise<[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
  );
  if (response.ok) {
    const data = await response.json();
    return data.genres;
  } else {
    throw new Error("Error fetching genres.");
  }
}

function mapMovieToGenre(movies: Movie[], genres: any[]): any[] {
  return movies.map((movie: any) => {
    const movieGenres = movie.genre_ids.map((genreId: number) => {
      const genre = genres.find((g: any) => g.id === genreId);
      return genre
        ? { id: genre.id, name: genre.name } // Return both genre ID and name
        : { id: genreId, name: "Unknown Genre" }; // If genre is not found, return the ID and "Unknown Genre"
    });

    return {
      ...movie,
      genres: movieGenres,
    };
  });
}

const DISCOVER_MOVIE_URL = "https://api.themoviedb.org/3/discover/movie";
export async function getAllMoviesByGenre(GENRE_ID: number): Promise<Movie[]> {
  try {
    const response = await fetch(
      `${DISCOVER_MOVIE_URL}?api_key=${apikey}&with_genres=${GENRE_ID}`
    );
    if (!response.ok) {
      throw new Error("Error fetching comedy movies.");
    }

    const data = await response.json();
    return data.results;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}

const MOVIE_DETAIL_URL = "https://api.themoviedb.org/3/movie";
export async function getMovieDetails(
  movieId: string
): Promise<MovieDetailsInterface> {
  try {
    const response = await fetch(
      `${MOVIE_DETAIL_URL}/${movieId}?api_key=${apikey}`
    );
    if (!response.ok) {
      throw new Error("Error fetching movie details.");
    }

    const data: MovieDetailsInterface = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}
const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";
export async function searchMovie(query: string): Promise<any> {
  try {
    const response = await fetch(
      `${SEARCH_MOVIE_URL}?api_key=${apikey}&query=${query}`
    );
    if (!response.ok) {
      throw new Error("Error fetching movie details.");
    }

    const data = await response.json();
    return data.results;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}
