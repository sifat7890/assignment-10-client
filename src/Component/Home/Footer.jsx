import {  Mail ,
 
    Phone, MapPin, Clock, Send, Film,
      Award, Heart,
      Facebook,
      Twitter,
      Instagram,
      Youtube} from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className="w-11/12 mx-auto   py-12  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Film className="w-6 h-6 text- text-red-600" />
              <h2 className="text-xl font-bold">CineMagic</h2>
            </div>
            <p className="text-gray-400">
              Your premier destination for the latest movies, reviews, and cinematic experiences.
              Join our community of movie enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" /> New Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2">
                  <Award className="w-4 h-4" /> Top Rated
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors flex items-center gap-2">
                  <Film className="w-4 h-4" /> Coming Soon
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-red-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-red-600" />
                <span>contact@cinemagic.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>123 Movie Street, LA</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-red-600" />
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form   className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full   border border-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:border-red."
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-400 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2024 CineMagic. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;