
const clients = [
  {
    name: "Cyware",
    logo: "https://logo.clearbit.com/cyware.com",
  },
  {
    name: "AutoMint",
    logo: "https://logo.clearbit.com/automint.com",
  },
  {
    name: "SleepCountry",
    logo: "https://logo.clearbit.com/sleepcountry.ca",
  },
  {
    name: "Trivelta",
    logo: "https://logo.clearbit.com/trivelta.com",
  },
  {
    name: "ReBet",
    logo: "https://logo.clearbit.com/rebet.app",
  },
  {
    name: "Loan Singh",
    logo: "https://logo.clearbit.com/loansingh.in",
  },
  {
    name: "Salesken",
    logo: "https://logo.clearbit.com/salesken.ai",
  },
  {
    name: "Dojima",
    logo: "https://logo.clearbit.com/dojima.network",
  },
  {
    name: "Secprism",
    logo: "https://logo.clearbit.com/secprism.com",
  },
  {
    name: "Arcana",
    logo: "https://logo.clearbit.com/arcana.network",
  },
  {
    name: "ByteLearn",
    logo: "https://logo.clearbit.com/bytelearn.com",
  },
  {
    name: "Netmeds Wholesale",
    logo: "https://logo.clearbit.com/netmeds.com",
  },
  {
    name: "TopGrep",
    logo: "https://logo.clearbit.com/topgrep.com",
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
