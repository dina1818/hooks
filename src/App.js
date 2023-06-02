import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'scream 1',
      posterURL: 'https://example.com/poster1.jpg',
      rating: 7.5,
    },
    {
      title: 'Movie 2',
      description: 'Twilght 2',
      posterURL: 'https://example.com/poster2.jpg',
      rating: 8.2,
    },
    // Add more movies here
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: value,
    }));
  };

  const filteredMovies = movies.filter((movie) => {
    const { title, rating } = filter;
    return (
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= Number(rating)
    );
  });

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie Collection</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      {/* Add a form or button to add new movies */}
    </div>
  );
};

export default App;
