import { Mail } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const { resetPassword,resetEmail } = useContext(AuthContext)
    const [email,setEmail] = useState(resetEmail || "")

   

    const handleSubmit=(e)=>{
        e.preventDefault();

        resetPassword(email)
        .then(()=>{
            toast.success("Password reset email sent.Check your inbox");

        })
        .catch((error)=>{
            toast.error("Failed to send reset email.Try again")
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-md border border-red-600 shadow-lg rounded-lg p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center mb-4">Reset your password
                </h1>
                <p className='text-center'>Enter your email address and we'll send you a link to reset your password.

                </p>
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="form-control">
                        <span className="  flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Email
                        </span>
                        <label className="flex items-center gap-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input w-full input-bordered   transition-colors  focus:border-red-600 rounded-lg"
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </label>
                    </div>


                    {/* Signup Button */}
                    <button className="mt-2 px-4 py-3   transition duration-300 border-2  bg-red-700  text-white rounded-lg text-sm font-bold font-sans w-full">
                        Reset Password
                    </button>

                    <div className="text-sm text-center">
                        <Link
                            to="/login"

                            className=" mt-2 px-4 py-2   transition duration-300 border-2 border-red-700   hover:bg-red-700 text-red-600 hover:text-white rounded-lg text-sm font-bold font-sans w-full"
                        >
                            Back to login
                        </Link>
                    </div>

                </form>




            </div>
        </div>
    );
};

export default ForgetPassword;