import { motion } from 'framer-motion';

const Destinations = () => {
  const destinations = [
    { name: 'Paris', image: 'https://api.a0.dev/assets/image?text=Beautiful Eiffel Tower in Paris at sunset&aspect=1:1&seed=1', description: 'The City of Light awaits with its iconic landmarks and romantic atmosphere.' },
    { name: 'Tokyo', image: 'https://api.a0.dev/assets/image?text=Modern Tokyo cityscape with Mount Fuji in background&aspect=1:1&seed=2', description: 'Blend tradition and innovation in Japan\'s bustling capital.' },
    { name: 'Bali', image: 'https://api.a0.dev/assets/image?text=Tropical beach in Bali with palm trees&aspect=1:1&seed=3', description: 'Relax on pristine beaches and explore ancient temples in paradise.' },
    { name: 'New York', image: 'https://api.a0.dev/assets/image?text=Iconic skyline of New York City at night&aspect=1:1&seed=4', description: 'Experience the energy of the Big Apple, from Broadway to Central Park.' },
    { name: 'Rome', image: 'https://api.a0.dev/assets/image?text=Ancient Colosseum in Rome under blue sky&aspect=1:1&seed=5', description: 'Walk through history in the Eternal City with its magnificent ruins.' },
    { name: 'Sydney', image: 'https://api.a0.dev/assets/image?text=Sydney Opera House and Harbour Bridge&aspect=1:1&seed=6', description: 'Marvel at the stunning harbor and vibrant culture of Australia\'s gem.' },
    { name: 'Santorini', image: 'https://api.a0.dev/assets/image?text=White buildings and blue domes in Santorini sunset&aspect=1:1&seed=8', description: 'Soak in breathtaking views and Mediterranean charm on this Greek island.' },
    { name: 'Machu Picchu', image: 'https://api.a0.dev/assets/image?text=Ancient Machu Picchu ruins in the Andes&aspect=1:1&seed=9', description: 'Trek to the mystical Incan citadel amidst Andean peaks.' },
    { name: 'Dubai', image: 'https://api.a0.dev/assets/image?text=Futuristic skyline of Dubai with Burj Khalifa&aspect=1:1&seed=10', description: 'Indulge in luxury and adventure in the city of superlatives.' },
    { name: 'Iceland', image: 'https://api.a0.dev/assets/image?text=Northern lights over Icelandic landscape&aspect=1:1&seed=11', description: 'Witness natural wonders from geysers to glaciers in this Nordic paradise.' },
    { name: 'Rio de Janeiro', image: 'https://api.a0.dev/assets/image?text=Copacabana beach and Christ the Redeemer&aspect=1:1&seed=12', description: 'Dance to samba rhythms and enjoy carnival spirit in vibrant Brazil.' },
    { name: 'Venice', image: 'https://api.a0.dev/assets/image?text=Canal views in romantic Venice Italy&aspect=1:1&seed=13', description: 'Glide through canals and discover art in this floating city.' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 text-center"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Supported Destinations</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore a world of possibilities with SkyVoyage. From bustling cities to serene beaches, we have you covered.
        </p>
      </motion.section>

      {/* Destinations Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;