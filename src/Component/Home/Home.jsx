import React from 'react';
import Banner from './Banner';
import FeatureMovies from '../FeatureMovie/FeatureMovies';
import { useLoaderData } from 'react-router-dom';
import UpComingMovie from '../UpComing/UpComingMovie';
import UpComingMovies from '../UpComing/UpComingMovies';

const Home = () => {
    const movieFeaturedCards = useLoaderData();
 
     return (
        <div className='relative' >
            <Banner></Banner>
            <FeatureMovies movieFeaturedCards={movieFeaturedCards} ></FeatureMovies>
            <UpComingMovies></UpComingMovies>
        </div>
    );
};

export default Home;