import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { MovieContext } from '../MovieProvider/MovieProvider';
import { BadgeCheck, Calendar, Play } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { RiFolderAddFill } from 'react-icons/ri';
import { MdBrowserUpdated, MdDeleteSweep } from 'react-icons/md';

const MovieDetails = () => {
    const movieDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    const { loadedMovieDetails, setLoadedMovieDetails, favoriteMovies, setFavoriteMovies } = useContext(MovieContext)
    const navigate = useNavigate()
    const handleDelete = _id => {

        fetch(`https://assignment-10-server-eight-smoky.vercel.app/movie/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                 if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const remaining = loadedMovieDetails.filter(loadedMovieDetail => loadedMovieDetail._id !== _id);
                    setLoadedMovieDetails(remaining)
                    navigate("/movies")
                }
            })
    }

    const handleAddToFavorite = () => {
        const email = user?.email
        const title = movieDetails.title
        const genre = movieDetails.genre
        const duration = movieDetails.duration
        const releaseYear = movieDetails.releaseYear
        const rating = movieDetails.rating
        const poster = movieDetails.poster
        const movieID = movieDetails._id

        const favoriteMovie = { title, genre, duration, releaseYear, rating, poster, email, movieID }
 
        fetch('https://assignment-10-server-eight-smoky.vercel.app/favorite', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favoriteMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Added!", "Movie has been added to favorites.", "success");
                    setFavoriteMovies([...favoriteMovies, { ...favoriteMovie, _id: data.insertedId }]);

                }
            });
    }

    return (
        <div className="relative w-full h-screen flex items-center bg-cover bg-center px-12 backdrop-brightness-50"
            style={{ backgroundImage: `url(${movieDetails.poster})` }} >
            <div className="absolute inset-0 bg-black/60"></div>


            <div className=" z-10 sm:flex md:flex lg:flex gap-16 w-full justify-center  items-center" >
                 <img
                    src={movieDetails.poster}
                    alt={movieDetails.title}
                    className="h-[500px]    lg:h-[500px] rounded-lg shadow-lg"
                />

                 <div className="text-white">
                    <h1 className="text-5xl font-bold text-yellow-400">{movieDetails.title}</h1>

                     <div className="flex items-center gap-4 mt-4 text-lg">
                        <div className="flex items-center gap-1">
                            <Calendar size={20} />
                            <span>{movieDetails.releaseYear}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" size={16} />
                            <span>{movieDetails.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <BadgeCheck size={20} />
                            <span>{movieDetails.duration} min</span>
                        </div>
                    </div>

                     <div className="flex gap-2 mt-4">

                        <span className="bg-red-600 px-3 py-1 rounded-lg text-sm font-medium">
                            {movieDetails.genre}
                        </span>
                    </div>

                     <p className="mt-6 text-gray-300 text-lg max-w-2xl">{movieDetails.summary}</p>

                     <div className="mt-6 flex gap-4">
                        <button className="flex gap-1.5 mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-base font-bold font-sans "><Play className=' fill-red-700' /> Watch</button>
                        <button onClick={handleAddToFavorite} className="mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                            <RiFolderAddFill size={24} />
                        </button>
                        <button
                            onClick={() => handleDelete(movieDetails._id)}
                            className="mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                            <MdDeleteSweep size={24} />
                        </button>

                        <Link
                            to={`/updateMovie/${movieDetails._id}`}
                            className="mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                            <MdBrowserUpdated size={24} />
                        </Link>
                    </div>
                    <div className="mt-6  flex gap-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;