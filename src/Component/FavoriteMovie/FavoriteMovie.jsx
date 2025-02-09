import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MovieContext } from '../MovieProvider/MovieProvider';
import { MdDeleteSweep } from 'react-icons/md';

const FavoriteMovie = ({ favoriteMovie }) => {
    const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext)

    console.log(favoriteMovie);
    const handleDelete = _id => {
        fetch(`http://localhost:8000/favorite/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const remaining = favoriteMovies.filter(favMovie => favMovie._id !== _id);
                    console.log('deleted id2', _id);
                    console.log('deleted id1', remaining);


                    setFavoriteMovies(remaining)
                    // navigate("/movies")
                }
            })
    }

    return (
        <div className="relative group   rounded-lg overflow-hidden shadow-lg cursor-pointer" data-aos="fade-up">
            <img
                src={favoriteMovie.poster}
                alt={favoriteMovie.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-4 text-white group-hover:bg-gradient-to-t from-black to-via-transparent via-70%  text-center">
                <h3 className="text-3xl font-bold">{favoriteMovie.title}</h3>
                <p className="text-base">{favoriteMovie.genre} • {favoriteMovie.releaseYear} • {favoriteMovie.duration} min</p>
                <div className="flex items-center gap-1 absolute right-0 bg-white/30 backdrop-invert-0 p-1 rounded-l-lg top-11">
                    <FaStar className="text-yellow-400" size={16} />

                    <span>{favoriteMovie.rating}</span>
                </div>
             <div className='flex gap-1'>
             <Link
                    to={`/movie/${favoriteMovie.movieID}`}
                    className="mt-2 px-4 py-3 grow-2  transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                    See Details
                </Link>
                <button
                    onClick={() => handleDelete(favoriteMovie._id)}
                    className="mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                    <MdDeleteSweep size={24} />
                </button>
             </div>

            </div>
        </div>
    );
};

export default FavoriteMovie;