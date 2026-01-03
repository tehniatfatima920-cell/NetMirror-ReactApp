import React from "react";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600">Cake Shop</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-pink-600 font-medium">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#specials" className="hover:text-pink-500">Specials</a>
          <a href="#products" className="hover:text-pink-500">Products</a>
          <a href="#reviews" className="hover:text-pink-500">Reviews</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>

          <button className="px-4 py-2 bg-pink-500 text-red-500 rounded-md">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl text-blue-500 cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
}
