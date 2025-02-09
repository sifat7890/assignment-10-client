 import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MovieCart = ({movieCart}) => {
     
    return (
        <div className="relative group   rounded-lg overflow-hidden shadow-lg cursor-pointer"  >
        <img
            src={movieCart.poster}
            alt={movieCart.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-4 text-white group-hover:bg-gradient-to-t from-black to-via-transparent via-70%  text-center">
            <h3 className="text-3xl font-bold">{movieCart.title}</h3>
            <p className="text-base">{movieCart.genre} • {movieCart.releaseYear} • {movieCart.duration} min</p>
            <div className="flex items-center gap-1 absolute right-0 bg-white/30 backdrop-invert-0 p-1 rounded-l-lg top-11">
            <FaStar  className="text-yellow-400" size={16}/>

                 <span>{movieCart.rating}</span>
            </div>
            <Link
            to={`/movie/${movieCart._id}`}
             className="mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                See Details
            </Link>
        </div>
    </div>
    );
};

export default MovieCart;