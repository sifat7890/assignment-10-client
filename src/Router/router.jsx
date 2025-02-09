import React from 'react';
import Root from '../Component/Root/Root';
import ErrorPage from '../Component/ErrorPage/ErrorPage';
import Home from '../Component/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import AddMovie from '../Component/AddMovie/AddMovie';
import Movies from '../Component/Movies/Movies';
import MovieDetails from '../Component/MovieDetails/MovieDetails';
import MovieProvider from '../Component/MovieProvider/MovieProvider';
import UpdateMovie from '../Component/UpdateMovie/UpdateMovie';
import SignUp from '../Component/AuthLayout/SignUp';
import LogIn from '../Component/AuthLayout/LogIn';
import FavoriteMovies from '../Component/FavoriteMovie/FavoriteMovies';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ForgetPassword from '../Component/AuthLayout/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <MovieProvider>
        <Root></Root>
      </MovieProvider>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-eight-smoky.vercel.app/topRated')

      },
      {
        path: "/movies",
        element: <Movies></Movies>,
        loader: () => fetch('https://assignment-10-server-eight-smoky.vercel.app/movie'),
      },
      {
        path: "/movie/:id",
        element:
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-eight-smoky.vercel.app/movie/${params.id}`)

      },
      {
        path: "/addMovie",
        element:
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>

      },
      {
        path: "/updateMovie/:id",
        element:
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-eight-smoky.vercel.app/movie/${params.id}`)

      },
      {
        path: "/favorite",
        element:
          <PrivateRoute>
            <FavoriteMovies></FavoriteMovies>
          </PrivateRoute>
      },
      {
        path: "/register",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path:'/forgot',
        element:<ForgetPassword></ForgetPassword>
      }
    ]
  },
]);

export default router;
