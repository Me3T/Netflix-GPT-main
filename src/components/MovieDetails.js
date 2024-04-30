import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import MovieInfo from "./MovieInfo";
import useSearchMovieTrailer from "../hooks/useSearchMovieTrailer";

const MovieDetails = () => {
  const { movieId } = useParams();
  useSearchMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.clickTrailerVideo);
  const [movieDetail, setMovieDetail] = useState(null);

  const getMoviesInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDetail(json);
  };

  useEffect(() => {
    getMoviesInfo();
  }, []);

  return (
    <div className="absolute flex text-teal-50 h-full">
      <div className=" fixed top-52 md:top-16 left-[calc(50%-172px)] md:left-[calc(50%-260px)]  z-50 w-[340px] h-[360px] md:w-[500px] md:h-[500px] rounded-md bg-slate-900">
        <MovieInfo detail={movieDetail} video={trailerVideo} />
      </div>
    </div>
  );
};

export default MovieDetails;
