import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About SkyVoyage</h1>
          <p className="text-xl text-gray-600">Your trusted partner in creating unforgettable travel experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://api.a0.dev/assets/image?text=Professional travel agents planning adventures&aspect=4:3&seed=8"
              alt="Travel Planning"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At SkyVoyage, we believe that travel is not just about visiting new places—it's about creating memories that last a lifetime. Our mission is to make travel accessible, exciting, and hassle-free for everyone.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2015, SkyVoyage has been at the forefront of the travel industry, offering personalized travel experiences tailored to your unique preferences and dreams. From exotic beach getaways to cultural explorations, we handle every detail so you can focus on what matters most—enjoying the journey.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team of experienced travel experts works tirelessly to curate the best itineraries, ensuring that every trip is filled with wonder, adventure, and unforgettable moments. Join us in exploring the world, one destination at a time.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Destinations across every continent</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Local knowledge and insider tips</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
            <p className="text-gray-600">Luxury experiences at every step</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;