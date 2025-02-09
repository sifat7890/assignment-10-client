import { Calendar, Info, Play, Star } from 'lucide-react';
import React, { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieContext } from '../MovieProvider/MovieProvider';

const Banner = () => {
    const { bannerData } = useContext(MovieContext)
 



    return (
        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerData.map((bannerDetails) => <SwiperSlide key={bannerDetails.id}>
                        <div >
                            <div
                                className="relative h-[700px] flex items-center justify-start text-white px-10"
                                style={{
                                    backgroundImage: `url(${bannerDetails.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0  bg-black/45"></div>

                                {/* bannerDetails Content */}
                                <div className="relative z-10 left-10 max-w-xl">
                                    <h1 className="text-7xl font-sans font-extrabold  ">{bannerDetails.title}</h1>
                                    <div className="flex items-center space-x-4 my-3">
                                        <span className="flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400" />
                                            <span className="ml-1">{bannerDetails.rating}</span>
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="w-5 h-5" />
                                            <span className="ml-1">{bannerDetails.releaseDate}</span>
                                        </span>
                                        <span className="border px-2 py-1 text-sm">{bannerDetails.language}</span>
                                    </div>
                                    <p className="text-gray-300">{bannerDetails.description}</p>
                                    <div className="mt-4 flex space-x-4">
                                        <button className=" border-red-500 transition duration-300 border-2 gap-1 bg-black/50 hover:bg-red-700 text-red-500 hover:text-white   font-bold px-5 py-2 rounded-md flex "><Play className=' fill-red-700' /> Watch</button>
                                        <button className="bg-white/30 px-5 py-2 rounded-md flex gap-1 bg-from-transparent"> <Info /> Info</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Banner;