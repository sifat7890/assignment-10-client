import React, { useContext } from 'react';
import { MovieContext } from '../MovieProvider/MovieProvider';
import UpComingMovie from './UpComingMovie';
import { Award, Film, TrendingUp } from 'lucide-react';

const UpComingMovies = () => {
    const { upComingData } = useContext(MovieContext)

    return (
        <div className='w-11/12 mx-auto' >
            <div className=" flex justify-between mt-16 ">
                <h2 className="text-3xl   font-bold  center ">Coming Soon</h2>
                <button className="  px-4 py-3   transition duration-300 border-2 border-red-700   hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">
                    View More
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  mt-8 '>

                {
                    upComingData.map(upComingMovie => <UpComingMovie upComingMovie={upComingMovie.id} upComingMovieDetails={upComingMovie}></UpComingMovie>)
                }
            </div>

            <div className='text-center mt-16 text-3xl  font-bold  center'>
                <h1>Our Members</h1>
            </div>
            <div className="flex justify-between gap-8  mx-auto p-8  border-gray-800  ">
                <div className="flex-col space-y-2 text-center ">
                    <div className="w-16   h-16  rounded-full bg-red-200  flex items-center justify-center mx-auto">
                        <Film className="w-10  h-10  text-red-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">10,000+</div>
                        <div className="text-gray-400">Movies</div>
                    </div>
                </div>
                <div className="flex-col space-y-2 text-center ">
                    <div className="w-16   h-16 rounded-full bg-red-200 flex items-center justify-center mx-auto">
                        <TrendingUp className="w-10  h-10  text-red-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">2M+</div>
                        <div className="text-gray-400">Users</div>
                    </div>
                </div>
                <div className="flex-col space-y-2 text-center ">
                    <div className="w-16   h-16 rounded-full bg-red-200 flex items-center justify-center mx-auto">
                        <Award className="w-10  h-10  text-red-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">150+</div>
                        <div className="text-gray-400">Awards</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComingMovies;