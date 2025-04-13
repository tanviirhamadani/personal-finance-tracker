import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-6 justify-center text-white">
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:underline">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
