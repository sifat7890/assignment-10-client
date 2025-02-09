import React from 'react';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie';
import { Link } from 'react-router-dom';

const FeatureMovies = ({ movieFeaturedCards }) => {
 
    return (
        <div className='mt-16' >

            <div className="text-center mb-16" >
                <h2 className="text-4xl font-bold mb-4">Top movies this month</h2>
               
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mb-12'>

                {
                    movieFeaturedCards.map(movieFeaturedCard => <FeaturedMovie key={movieFeaturedCard._id} movieFeaturedCard={movieFeaturedCard} ></FeaturedMovie>)
                }

            </div>
            <div className="text-center flex justify-center" >
                <Link
                    to="/movies"
                    className="mt-2 px-4 py-3   transition duration-300 border-2 border-red-700   hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans"
                >
                    More movies                    
                </Link>
            </div>
             
        </div>
    );
};

export default FeatureMovies;