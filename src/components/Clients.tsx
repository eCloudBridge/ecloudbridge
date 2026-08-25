
import { getImageUrl } from '@/utils/assets';

const clients = [
  {
    name: "Cyware",
    logo: "/images/media_1787656777597.png",
  },
  {
    name: "AutoMint",
    logo: "/images/media_1787656777603.png",
  },
  {
    name: "SleepCountry",
    logo: "/images/media_1787656777622.png",
  },
  {
    name: "Trivelta",
    logo: "/images/media_1787656777626.png",
  },
  {
    name: "ReBet",
    logo: "/images/media_1787656777629.png",
  },
  {
    name: "Loan Singh",
    logo: "/images/media_1787656945647.png",
  },
  {
    name: "Salesken",
    logo: "/images/media_1787656945665.png",
  },
  {
    name: "Dojima",
    logo: "/images/media_1787656945668.png",
  },
  {
    name: "Secprism",
    logo: "/images/media_1787656945671.png",
  },
  {
    name: "Arcana",
    logo: "/images/media_1787656945673.png",
  },
  {
    name: "ByteLearn",
    logo: "/images/media_1787656999237.png",
  },
  {
    name: "Netmeds Wholesale",
    logo: "/images/media_1787656999247.png",
  },
  {
    name: "TopGrep",
    logo: "/images/media_1787656999251.png",
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
                  src={getImageUrl(client.logo)}
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
