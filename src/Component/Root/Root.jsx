import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Home/Footer';
import Aos from 'aos';
import Loading from '../Loading/Loading';

const Root = () => {

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate a delay
    return () => clearTimeout(timer);
  }, [location.pathname]);

    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
          easing: 'ease-out'
        });
      }, []);
    return (
        <div>
          {loading&&<Loading></Loading>}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;