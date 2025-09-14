import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { 
  Droplets, 
  Clock, 
  Award, 
  Users, 
  Building, 
  Home as HomeIcon, 
  TreePine, 
  GraduationCap, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Zap,
  TestTube,
  Microscope,
  Waves,
  Factory,
  Eye,
  TrendingUp,
  Globe
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Drinking Water Analysis",
      description: "Comprehensive testing for safe drinking water compliance with SANS 241 standards",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Industrial & Municipal Testing",
      description: "Professional testing solutions for large-scale operations and compliance",
      color: "from-royal-blue-500 to-royal-blue-600"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Agricultural Water Testing",
      description: "Specialized testing for farming, irrigation, and livestock water quality",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Recreational Water Testing",
      description: "Pool, spa, and recreational water quality assurance and safety",
      color: "from-water-blue-500 to-water-blue-600"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Environmental Monitoring",
      description: "Comprehensive environmental water assessment and compliance monitoring",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Results",
      description: "Get your water test results in 3-5 business days with rush options available",
      stat: "3-5 Days"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Advanced Equipment",
      description: "State-of-the-art ICP-OES, UV Spectrophotometer, and modern filtration systems",
      stat: "Lab Grade"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Professionally trained analysts with years of experience in water quality",
      stat: "Certified"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Crystal Clear Reports",
      description: "Easy-to-understand results with actionable recommendations and compliance status",
      stat: "Transparent"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Flexible service plans and volume discounts for all testing needs and budgets",
      stat: "Affordable"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Working toward SANAS accreditation with rigorous quality control processes",
      stat: "Accredited"
    }
  ];

  const clientTypes = [
    { 
      icon: <Building className="w-8 h-8" />, 
      name: "Municipalities", 
      description: "Water boards & local government",
      count: "50+ Clients"
    },
    { 
      icon: <Factory className="w-8 h-8" />, 
      name: "Industrial", 
      description: "Manufacturing & processing facilities",
      count: "100+ Tests"
    },
    { 
      icon: <TreePine className="w-8 h-8" />, 
      name: "Agricultural", 
      description: "Farms & irrigation systems",
      count: "200+ Samples"
    },
    { 
      icon: <HomeIcon className="w-8 h-8" />, 
      name: "Residential", 
      description: "Private homeowners & communities",
      count: "500+ Homes"
    },
    { 
      icon: <GraduationCap className="w-8 h-8" />, 
      name: "Institutions", 
      description: "Schools, hospitals & care facilities",
      count: "75+ Sites"
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      name: "Environmental", 
      description: "Consultants & research organizations",
      count: "25+ Projects"
    }
  ];

  const stats = [
    { number: "3-5", label: "Days Turnaround", icon: <Clock className="w-6 h-6" /> },
    { number: "1000+", label: "Tests Completed", icon: <TestTube className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Phone className="w-6 h-6" /> },
    { number: "100%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float animation-delay-300"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float animation-delay-500"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30"
                >
                  🔬 South Africa's Trusted Water Testing Laboratory
                </motion.span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
              >
                Water Quality
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Assured
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl mb-10 text-blue-50 leading-relaxed max-w-lg"
              >
                Professional testing you can trust. Modern analytical facility ensuring safe, sustainable water solutions across South Africa.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Your Water Tested
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
                  View Our Services
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-2 text-white/80">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                      <img 
                        src={logo} 
                        alt="NM Water Testing Laboratory" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800">Sample Analysis</div>
                      <div className="text-sm text-charcoal-600">Report #NM-2024-001</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">pH Level</span>
                      <span className="font-semibold text-green-600">7.2 ✓</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Chlorine</span>
                      <span className="font-semibold text-green-600">0.5 mg/L ✓</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Bacteria</span>
                      <span className="font-semibold text-green-600">None Detected ✓</span>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Safe for Consumption</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                  SANAS Accredited
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Comprehensive Water Testing
              <span className="block text-gradient">For Every Need</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              From drinking water safety to environmental compliance, we provide accurate testing solutions for residential, commercial, and industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-hover-lift p-8 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`icon-container-lg bg-gradient-to-br ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-800 mb-4 group-hover:text-royal-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services" className="btn-lg btn-primary shadow-blue">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Why Choose 
              <span className="text-gradient"> NM Water Testing?</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with professional expertise to deliver accurate, reliable results you can trust for critical water quality decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start gap-6 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-royal-blue-50 hover:to-water-blue-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="icon-container bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-charcoal-800 group-hover:text-royal-blue-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="badge badge-primary text-xs">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-charcoal-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="section bg-gradient-to-br from-royal-blue-50 to-water-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              From municipal water systems to private homeowners, we serve diverse clients across South Africa with specialized testing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-glass p-8 text-center h-full hover:shadow-hard transition-all duration-500">
                  <div className="mb-6">
                    <div className="icon-container-lg bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                      {client.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-3">
                    {client.name}
                  </h3>
                  <p className="text-charcoal-600 mb-4 leading-relaxed">
                    {client.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-royal-blue-100 to-water-blue-100 rounded-full text-sm font-medium text-royal-blue-700">
                    {client.count}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative section bg-gradient-to-br from-royal-blue-600 to-water-blue-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float animation-delay-300"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Test Your Water?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get professional water testing results in 3-5 business days. Contact us today for a free consultation and quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+27609462930" className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Call Us</div>
                    <div className="font-semibold">060 946 2930</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">WhatsApp</div>
                    <div className="font-semibold">060 946 2930</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-100">Email Us</div>
                    <div className="font-semibold text-sm">info@nmwatertesting.co.za</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Contact Form Preview */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-6">Quick Quote Request</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="form-input"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="form-input"
                    />
                  </div>
                  <div>
                    <select className="form-select">
                      <option>Select Testing Type</option>
                      <option>Drinking Water</option>
                      <option>Borehole Water</option>
                      <option>Industrial Testing</option>
                      <option>Agricultural Testing</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="Additional Details" 
                      className="form-textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;