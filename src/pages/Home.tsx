import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const destinations = [
    { name: 'Paris', image: 'https://api.a0.dev/assets/image?text=Beautiful Eiffel Tower in Paris at sunset&aspect=1:1&seed=1' },
    { name: 'Tokyo', image: 'https://api.a0.dev/assets/image?text=Modern Tokyo cityscape with Mount Fuji in background&aspect=1:1&seed=2' },
    { name: 'Bali', image: 'https://api.a0.dev/assets/image?text=Tropical beach in Bali with palm trees&aspect=1:1&seed=3' },
    { name: 'New York', image: 'https://api.a0.dev/assets/image?text=Iconic skyline of New York City at night&aspect=1:1&seed=4' },
    { name: 'Rome', image: 'https://api.a0.dev/assets/image?text=Ancient Colosseum in Rome under blue sky&aspect=1:1&seed=5' },
    { name: 'Sydney', image: 'https://api.a0.dev/assets/image?text=Sydney Opera House and Harbour Bridge&aspect=1:1&seed=6' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://api.a0.dev/assets/image?text=Stunning aerial view of world landmarks&aspect=16:9&seed=7)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore the World with SkyVoyage</h1>
          <p className="text-xl md:text-2xl mb-8">Discover breathtaking destinations and create unforgettable memories.</p>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Start Your Journey
          </Link>
        </motion.div>
      </section>

      {/* Destination Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Popular Destinations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                  <p className="text-gray-600">Discover the wonders of {dest.name}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8">Contact us today to plan your dream vacation.</p>
            <Link to="/contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;