"use client";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../lib/comicVineMovieApi";
import Card from "@/components/core/Card";
import '@/styles/movielist.scss';
import { getResourceType } from '@/utils/getResourceType';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies(8); // Limit to 8 movies
      setMovies(movies);
    };
    loadMovies();
  }, []);

  return (
    <div className="movies"> 
    <div className="dc-movies">
      <div className="movies-grid">
        {movies.map((movie) => (
          <Card 
            key={movie.id} 
            data={movie}
            onClick={() => setSelectedMovie(movie)}
            type={getResourceType(movie.api_detail_url)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-modal" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn"  onClick={() => setSelectedMovie(null)}>×</button>
            <img 
              src={selectedMovie.image?.original_url || '/marvel-banner.jpg'} 
              alt={selectedMovie.name}
              className="modal-poster"
            />
            <div className="modal-details">
              <h2>{selectedMovie.name}</h2>
              <div className="details-meta">
                {selectedMovie.release_date && (
                  <span>Released: {new Date(selectedMovie.release_date).toLocaleDateString()}</span>
                )}
                {selectedMovie.runtime && (
                  <span>{Math.floor(selectedMovie.runtime/60)}h {selectedMovie.runtime%60}m</span>
                )}
              </div>
              <p className="movie-description">
                {selectedMovie.deck || "No synopsis available."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default MovieList;