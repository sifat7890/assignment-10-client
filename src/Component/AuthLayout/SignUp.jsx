import React, { useContext, useState } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Camera, Lock, Mail, User } from 'lucide-react';

const SignUp = () => {

  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext)
  const location = useLocation()
  const [error, setError] = useState("")


  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, password, photo);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isValidLength) {
       if (!hasUppercase) {
        setError  ("Include at least one uppercase letter")

      }
      if (!hasLowercase) {
        setError  ("Include at least one lowercase letter")

      }
      if (!isValidLength) 
        {setError  ("- Be at least 6 characters long")

      }
      toast.error(error);
      return;
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user)
        navigate(location?.state ? location.state : "/")
        const newUser = {
          name, email
        }
        console.log('this data use fro mongodb', newUser);
        fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('user created to db', data);

          })
      })
      .catch((error) => {
        toast.error('Registration failed. Please try again.')

      })

  }
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {

        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {

        toast.error("Failed to sign up")
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen   text-white py-12 px-4 bg-[url('https://thumbs.dreamstime.com/b/movie-cinema-premiere-poster-design-red-seats-vector-background-template-85885948.jpg')] bg-cover bg-center">
      <div className="card w-96  bg-black/80 backdrop-blur-xs rounded-2xl p-8 shadow-2xl border border-red-500 mt-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl font-bold  text-red-600 ">
            Create Account
          </h2>
          <p className="text-gray-400 mt-2">Join our community today</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="form-control">
            <span className="  text-white flex items-center gap-2">
              <User className="w-4 h-4" /> Username
            </span>
            <label className=" flex items-center gap-2 ">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input w-full input-bordered bg-black/50 transition-colors  focus:border-red-600 rounded-lg"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <span className="  text-white flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </span>
            <label className="flex items-center gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input w-full input-bordered bg-black/50 transition-colors  focus:border-red-600 rounded-lg"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <span className="  text-white flex items-center gap-2">
              <Lock className="w-4 h-4" /> Password
            </span>
            <label className="flex items-center gap-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input w-full input-bordered bg-black/50 transition-colors  focus:border-red-600 rounded-lg"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <span className="  text-white flex items-center gap-2">
              <Camera className="w-4 h-4" /> Photo
            </span>
            <label className="flex items-center gap-2">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input w-full input-bordered bg-black/50 transition-colors  focus:border-red-600 rounded-lg"
                required
              />
            </label>
          </div>
          <div className="divider mt-4">Or continue with</div>

          <button onClick={handleGoogleSignIn} className="flex w-full justify-center mt-2 px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans">

            <img className='h-5 w-5 mr-2' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
            Sign up with Google
          </button>

          <button className="  px-4 py-3   transition duration-300 border-2 border-red-700 bg-black/50 hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans w-full">Sign Up</button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account? <a href="/login" className="text-red-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;