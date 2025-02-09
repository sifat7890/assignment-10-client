import React, { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { Film } from 'lucide-react';
import { MovieContext } from '../MovieProvider/MovieProvider';

const AddMovie = () => {

    const { user } = useContext(AuthContext)
    const { theme, setTheme } = useContext(MovieContext)
    console.log('added user from add movie section', user);

    const [rating, setRating] = useState(0)
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)


    const genres = ["Comedy", "Drama", "Horror", "Action", "Romance"];
    const releaseYears = [2024, 2023, 2022, 2021, 2020];
    const themeToggle = theme === "light" ? "text-black" : "text-gray-400"

    const handleRating = (rate) => {
        setRating(rate)

    }


    const handleAddMovie = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const releaseYear = form.releaseYear.value;
        const poster = form.poster.value;
        const summary = form.summary.value;
        const email = user?.email;

        const newAddMovie = { title, genre, duration, releaseYear, rating, poster, summary, email }
        console.log(newAddMovie);


        fetch('http://localhost:8000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAddMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Movie added successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                    })
                }

            })

    }


    return (
        <div className={`max-w-2xl mx-auto p-6 ${themeToggle}   shadow rounded-lg mt-24 p-11   border border-red-600`}>
            <div className="flex items-center gap-3 mb-8">
                <Film className="w-8 h-8 text-red-700" />
                <h2 className="text-3xl font-bold text-red-700 ">
                    Add New Movie
                </h2>
            </div>
            <form onSubmit={handleAddMovie}>
                {/* Movie Poster */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Movie Poster (URL)</label>
                    <input
                        type="text"
                        name="poster"
                        placeholder='poster'
                        className="w-full border p-2 rounded focus:outline-none"

                    />
                    {/* {errors.poster && <p className="text-red-500 text-sm">{errors.poster}</p>} */}
                </div>

                {/* Movie Title */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Movie Title</label>
                    <input
                        type="text"
                        name="title"

                        placeholder='title'
                        className="w-full border p-2 rounded focus:outline-none"
                    />
                    {/* {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} */}
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Genre</label>
                    <select
                        name="genre"

                        className="w-full border p-2 rounded focus:outline-none"
                    >
                        <option value="">Select Genre</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    {/* {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>} */}
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Duration (in minutes)</label>
                    <input
                        type="number"
                        name="duration"

                        className="w-full border p-2 rounded focus:outline-none"
                    />
                    {/* {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>} */}
                </div>

                {/* Release Year */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Release Year</label>
                    <select
                        name="releaseYear"
                        className="w-full border p-2 rounded focus:outline-none"
                    >
                        <option value="">Select Year</option>
                        {releaseYears.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    {/* {errors.releaseYear && <p className="text-red-500 text-sm">{errors.releaseYear}</p>} */}
                </div>

                {/* Rating */}
                <div className="mb-4">
                    <label className="flex items-center gap-2">Rating</label>
                    <div>
                        <Rating
                            style={{ writingMode: "vertical-lr" }} className="rotate-360"
                            onClick={handleRating}
                            onPointerEnter={onPointerEnter}
                            onPointerLeave={onPointerLeave}
                            onPointerMove={onPointerMove}
                            allowHover={true}
                            transition={true}
                            allowFraction={true}
                            size={30}
                            fillColor="#E50914"
                            emptyColor="#4B5563"
                        />
                    </div>
                    {/* {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>} */}
                </div>

                {/* Summary */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Summary</label>
                    <textarea

                        name="summary"
                        placeholder='summary'

                        className="w-full border p-2 rounded focus:outline-none"
                    ></textarea>
                    {/* {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>} */}
                </div>

                <button
                    type="submit"
                    className="w-full mt-2 px-4 py-3   transition duration-300 border-2 border-red-700   hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans"

                >
                    Add Movie
                </button>
            </form>
        </div>
    );
};


export default AddMovie;