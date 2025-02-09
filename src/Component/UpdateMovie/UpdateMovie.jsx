import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { MovieContext } from '../MovieProvider/MovieProvider';
import { Film } from 'lucide-react';

const UpdateMovie = () => {
    const movie = useLoaderData();

    const { theme, setTheme } = useContext(MovieContext)

    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            title: movie.title,
            genre: movie.genre,
            duration: movie.duration,
            releaseYear: movie.releaseYear,
            poster: movie.poster,
            summary: movie.summary,
            rating: movie.rating,
        }
    })
    const themeToggle = theme === "light" ? "text-black" : "text-gray-400"

    const [rating, setRating] = useState(0)
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)


    const handleRating = (rate) => {
        setRating(rate);
        setValue(rate)
    }

    const onSubmit = (updatedMovie) => {
        updatedMovie.rating = rating;

        fetch(`http://localhost:8000/movie/${movie._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMovie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "Movies updated successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }



    const genres = ["Comedy", "Drama", "Horror", "Action", "Romance"];
    const releaseYears = [2024, 2023, 2022, 2021, 2020];

    return (
        <div className={`max-w-2xl mx-auto p-6 ${themeToggle}   shadow rounded-lg mt-24 p-11   border border-red-600`}>
            <div className="flex items-center gap-3 mb-8">
                <Film className="w-8 h-8 text-red-700" />
                <h2 className="text-3xl font-bold text-red-700 ">
                    Update Movie
                </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Movie Poster */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Movie Poster (URL)</label>
                    <input
                        type="text"
                        {...register("poster")}
                        className="w-full border p-2 rounded focus:outline-none"

                    />
                    {/* {errors.poster && <p className="text-red-500 text-sm">{errors.poster}</p>} */}
                </div>

                {/* Movie Title */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Movie Title</label>
                    <input
                        type="text"
                        {...register("title")}
                        className="w-full border p-2 rounded focus:outline-none"
                    />
                    {/* {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} */}
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Genre</label>
                    <select
                        {...register("genre")}
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
                        {...register("duration")}
                        className="w-full border p-2 rounded focus:outline-none"
                    />
                    {/* {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>} */}
                </div>

                {/* Release Year */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Release Year</label>
                    <select
                        {...register("releaseYear")} className="w-full border p-2 rounded focus:outline-none"
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
                            emptyColor="#4B5563"                        />
                    </div>
                    {/* {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>} */}
                </div>

                {/* Summary */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">Summary</label>
                    <textarea
                        {...register("summary")}
                        className="w-full border p-2 rounded focus:outline-none"
                    ></textarea>
                    {/* {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>} */}
                </div>

                <button
                    type="submit"
                    className="w-full mt-2 px-4 py-3   transition duration-300 border-2 border-red-700   hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans"

                >
                    Update Movie
                </button>
            </form>
        </div>
    );
};

export default UpdateMovie;