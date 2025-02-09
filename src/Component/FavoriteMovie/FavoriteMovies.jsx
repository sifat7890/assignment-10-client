import React, { useContext } from 'react';
import { MovieContext } from '../MovieProvider/MovieProvider';
import FavoriteMovie from './FavoriteMovie';

const FavoriteMovies = () => {
    const { favoriteMovies, setFavoriteMovies } = useContext(MovieContext)
    console.log(favoriteMovies);
    
    return (
        <div className='mt-16'>

            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
                <h2 className="text-4xl font-bold mb-4">Favorite movies</h2>

            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mb-12'>

                {
                    favoriteMovies.map(favoriteMovie => <FavoriteMovie key={favoriteMovie._id} favoriteMovie={favoriteMovie} ></FavoriteMovie>)
                }

            </div>

        </div>
    );
};

export default FavoriteMovies;