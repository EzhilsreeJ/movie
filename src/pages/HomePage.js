import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching movie data
    const fetchMovies = async () => {
      try {
        setLoading(true);
        // In a real application, this would be an API call
        const mockMovies = [
          { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 4.8, description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', imageUrl: 'https://via.placeholder.com/200x150?text=Inception' },
          { id: 2, title: 'The Dark Knight', genre: 'Action', rating: 4.9, description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', imageUrl: 'https://via.placeholder.com/200x150?text=The+Dark+Knight' },
          { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 4.7, description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', imageUrl: 'https://via.placeholder.com/200x150?text=Interstellar' },
        ];
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setMovies(mockMovies);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movies.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Recommended Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;