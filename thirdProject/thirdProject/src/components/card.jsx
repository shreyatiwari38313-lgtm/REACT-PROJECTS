function Card({ description, btnText }) {
  return (
     <>
    {/* Single Card Component */}
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">
      
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="https://i0.wp.com/traveltoyournature.com/wp-content/uploads/2023/07/beautiful-nature-india-1-1024x768.jpeg?resize=1024%2C768"
          alt="Featured content"
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <span className="inline-block px-3 py-1 text-xs bg-white text-black rounded-full mb-3">
        {description}
      </span>

      <h2 className="text-xl font-bold text-white mb-2">
        Modern Design Solutions
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        Discover cutting-edge design patterns and UI components.
      </p>

      <button className="px-4 py-2 bg-white text-black rounded-lg">
        {btnText}
      </button>
    </div>
    </>
  );
}

export default Card;
