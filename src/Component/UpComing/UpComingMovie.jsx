import { PlayCircle } from 'lucide-react';
import React from 'react';

const UpComingMovie = ({ upComingMovieDetails }) => {
    console.log("pailam coming data", upComingMovieDetails);

    const colSpanClass = upComingMovieDetails.id === 2 ? "lg:col-span-2" : "col-span-1";

    return (
        <div className={` text-white   ${colSpanClass} `}>
            <div className="container mx-auto">
                <div className="relative w-full grid overflow-hidden rounded-lg group cursor-pointer">
                     <img
                        src={upComingMovieDetails.image}
                        alt={upComingMovieDetails.title}
                        className="w-[700px] h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                     <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col justify-end">
                         <button className="absolute -top-6 left-3 bg-black/70 p-2 rounded-full text-white group-hover:scale-110 transition">
                            <PlayCircle size={40} />
                        </button>

                         <h3 className="text-lg font-bold text-white">{upComingMovieDetails.title}</h3>

                         <p className="text-sm text-red-400">
                            {upComingMovieDetails.category} • {upComingMovieDetails.status}
                        </p>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default UpComingMovie;