
const clients = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "DataFlow",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "CloudTech",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "InnovateLab",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "SecureNet",
    logo: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "DevOps Pro",
    logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "CloudScale",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop&q=80",
  },
  {
    name: "TechSolutions",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop&q=80",
  }
];

const Clients = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with innovative companies across various industries
          </p>
        </div>

        {/* Marquee Animation */}
        <div className="relative">
          <div className="flex animate-marquee space-x-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
