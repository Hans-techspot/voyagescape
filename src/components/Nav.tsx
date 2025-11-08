import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              SkyVoyage
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;