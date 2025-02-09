import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCart from '../MovieCart/MovieCart';

const Movies = () => {
    const movieData = useLoaderData();
    const[movieCarts,setMovieCarts] =useState(movieData)

    const [search, setSearch] = useState("")
    console.log(search);
    useEffect(() => {
        fetch(`http://localhost:8000/movie?searchParams=${search}`)
            .then((res) => res.json())
            .then((data) => {
              setMovieCarts(data);

            })
    }, [search])

    return (
        <div className='mt-16'>
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                <h2 className="text-4xl font-bold mb-4">All movies</h2>

            <div className='w-11/12 mx-auto flex justify-end  '> 
            <label className="input rounded-lg">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input type="search" onChange={(e) => setSearch(e.target.value)} required placeholder="Search" />
            </label>
            </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mb-12'>

                {
                    movieCarts.map(movieCart => <MovieCart key={movieCart._id} movieCart={movieCart} ></MovieCart>)
                }

            </div>

        </div>
    );
};

export default Movies;