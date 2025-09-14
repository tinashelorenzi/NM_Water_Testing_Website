import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Building, 
  Home as HomeIcon, 
  TreePine, 
  GraduationCap, 
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Drinking Water Analysis",
      description: "Comprehensive testing for safe drinking water compliance"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Industrial & Municipal Testing",
      description: "Professional testing for large-scale operations"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Agricultural Water Testing",
      description: "Specialized testing for farming and irrigation"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Recreational Water Testing",
      description: "Pool and spa water quality assurance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental Monitoring",
      description: "Comprehensive environmental water assessment"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Results",
      description: "Quick turnaround times for urgent testing needs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Advanced Equipment",
      description: "ICP-OES, UV Spectrophotometer, modern filtration systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Team",
      description: "Professional and competent analysts"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent Reporting",
      description: "Clear, easy-to-understand results"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Affordable Pricing",
      description: "Flexible service plans for all budgets"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Working toward SANAS accreditation"
    }
  ];

  const clientTypes = [
    { icon: <Building className="w-8 h-8" />, name: "Municipalities & Water Boards" },
    { icon: <Building className="w-8 h-8" />, name: "Industrial Facilities" },
    { icon: <TreePine className="w-8 h-8" />, name: "Agricultural Operations" },
    { icon: <HomeIcon className="w-8 h-8" />, name: "Private Homeowners" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "Schools & Hospitals" },
    { icon: <Stethoscope className="w-8 h-8" />, name: "Environmental Consultants" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Water Quality Assured
                <span className="block text-light-blue">Professional Testing You Can Trust</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Modern analytical facility ensuring safe, sustainable, and compliant water solutions across South Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-white text-royal-blue hover:bg-gray-100">
                  Get Your Water Tested
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-royal-blue">
                  View Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-light-blue">3-5</div>
                    <div className="text-sm text-blue-100">Days Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-light-blue">SANAS</div>
                    <div className="text-sm text-blue-100">Accreditation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-light-blue">24/7</div>
                    <div className="text-sm text-blue-100">Emergency Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-light-blue">100%</div>
                    <div className="text-sm text-blue-100">Accurate Results</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
              Comprehensive Water Testing for All Your Needs
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              From drinking water safety to industrial compliance, we provide reliable testing across multiple water matrices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                  {service.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NM Water */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
              Your Trusted Water Testing Partner
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              We combine advanced technology with professional expertise to deliver accurate results you can trust
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-light-gray transition-colors duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-charcoal-black">
                    {item.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
              Serving Diverse Water Testing Needs
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              From individual homeowners to large municipalities, we serve clients across all sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                      {client.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-charcoal-black leading-tight">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Test Your Water?
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Contact us today for fast, reliable, and affordable water testing services. Multiple ways to reach us.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-light-blue" />
                  <a
                    href="tel:+27609462930"
                    className="text-lg hover:text-light-blue transition-colors"
                  >
                    +27 60 946 2930
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-light-blue" />
                  <a
                    href="mailto:info@nmwatertesting.co.za"
                    className="text-lg hover:text-light-blue transition-colors"
                  >
                    info@nmwatertesting.co.za
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
            >
              <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-light-blue"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-light-blue"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-light-blue"
                />
                <select className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-light-blue">
                  <option value="">Select Water Source</option>
                  <option value="tap">Tap Water</option>
                  <option value="borehole">Borehole</option>
                  <option value="surface">Surface Water</option>
                  <option value="pool">Pool/Spa</option>
                  <option value="industrial">Industrial</option>
                </select>
                <button className="w-full btn-primary bg-white text-royal-blue hover:bg-gray-100">
                  Get Free Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
