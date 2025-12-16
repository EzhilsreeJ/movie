import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={movie.imageUrl} alt={movie.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}/5</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;