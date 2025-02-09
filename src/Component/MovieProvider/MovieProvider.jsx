import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';



export const MovieContext = createContext()


const MovieProvider = ({ children }) => {

    const { user } = useContext(AuthContext)
    const [loadedMovieDetails, setLoadedMovieDetails] = useState([])
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [bannerData, setBannerData] = useState([])
    const [upComingData, setUpComingData] = useState([])
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
     
    
    useEffect(() => {
        fetch('https://assignment-10-server-eight-smoky.vercel.app/movie')
        .then(res => res.json())
        .then(data => setLoadedMovieDetails(data))
        .catch(error => console.error("Error fetching movies:", error))
    }, [])
     
    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-10-server-eight-smoky.vercel.app/favorite/${user.email}`)
            .then(res => res.json())
            .then(data => setFavoriteMovies(data))
            .catch(error => console.error("Error fetching favorites:", error));
        }
    }, [user]);
    
    
    useEffect(() => {
        fetch('/banner.json')
        .then(res => res.json())
        .then(data => setBannerData(data))
        .catch(error => console.error("Error fetching favorites:", error)
    )
}, [])
useEffect(() => {
    fetch('/upComing.json')
    .then(res => res.json())
    .then(data => setUpComingData(data))
    .catch(error => console.error("Error fetching favorites:", error)
)
    }, [])


    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])
  

    const movieAuth = {
        loadedMovieDetails,
        setLoadedMovieDetails,
        favoriteMovies,
        setFavoriteMovies,
        bannerData,
        setBannerData,
        upComingData,
        setUpComingData,
        theme,
        setTheme
    }

    return (
        <MovieContext.Provider value={movieAuth}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;