import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Building, 
  TreePine, 
  Waves, 
  Factory, 
  Shield,
  Microscope,
  TestTube,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Beaker,
  Settings,
  Zap,
  Eye,
  TrendingUp,
  Star,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  FileText,
  Activity
} from 'lucide-react';

const Services = () => {
  const waterMatrices = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Drinking Water Testing",
      description: "Comprehensive tap water quality analysis ensuring compliance with SANS 241 standards for safe consumption",
      features: [
        "Microbiological and chemical safety testing",
        "SANS 241 compliance verification",
        "Complete water quality assessment"
      ],
      idealFor: "Homeowners, businesses, municipalities",
      color: "from-blue-500 to-blue-600",
      badge: "Most Popular"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Groundwater Analysis",
      description: "Borehole and well water quality assessment with detailed mineral content analysis and contamination detection",
      features: [
        "Comprehensive mineral content analysis",
        "Bacterial and chemical contamination detection",
        "Agricultural suitability assessment"
      ],
      idealFor: "Private wells, agricultural operations, industrial extraction",
      color: "from-teal-500 to-cyan-600",
      badge: "Comprehensive"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Surface Water Monitoring",
      description: "Rivers, dams, and natural water body quality monitoring with environmental impact assessment",
      features: [
        "Environmental impact assessment",
        "Seasonal monitoring programs",
        "Ecosystem health evaluation"
      ],
      idealFor: "Environmental consultants, municipalities, researchers",
      color: "from-green-500 to-emerald-600",
      badge: "Environmental"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Effluent Testing",
      description: "Wastewater discharge compliance testing ensuring adherence to environmental regulations",
      features: [
        "Environmental regulation compliance",
        "Process water optimization",
        "Discharge permit requirements"
      ],
      idealFor: "Manufacturing facilities, treatment plants",
      color: "from-purple-500 to-purple-600",
      badge: "Compliance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Recreational Water Safety",
      description: "Swimming pool, spa, and recreational facility water analysis for chemical balance and bacterial safety",
      features: [
        "Chemical balance testing",
        "Bacterial contamination screening",
        "Safety parameter monitoring"
      ],
      idealFor: "Hotels, gyms, public pools, residential pools",
      color: "from-water-blue-500 to-blue-600",
      badge: "Safety First"
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Packaged Water Analysis",
      description: "Bottled water quality verification and reverse osmosis system performance testing",
      features: [
        "Product quality assurance",
        "RO system performance evaluation",
        "Bottling compliance verification"
      ],
      idealFor: "Water bottling companies, RO system owners",
      color: "from-royal-blue-500 to-royal-blue-600",
      badge: "Quality Assured"
    }
  ];

  const parameters = [
    {
      category: "Microbiological Testing",
      icon: <Microscope className="w-8 h-8" />,
      tests: [
        "Total Coliforms",
        "Escherichia coli (E. coli)",
        "Faecal Coliforms",
        "Heterotrophic Plate Count"
      ],
      description: "Detects harmful bacteria that can cause waterborne diseases",
      color: "from-red-500 to-pink-600",
      importance: "Critical for health safety"
    },
    {
      category: "Chemical Analysis",
      icon: <TestTube className="w-8 h-8" />,
      tests: [
        "Basic Chemistry: pH, Conductivity, TDS",
        "Organic Compounds: COD, BOD, TOC",
        "Nutrients: Nitrates, Ammonia, Fluoride",
        "Minerals: Hardness, Alkalinity, Chloride",
        "Trace Metals: Lead, Cadmium, Chromium, Arsenic",
        "Major Ions: Sodium, Calcium, Magnesium, Potassium"
      ],
      description: "Ensures water meets health standards and identifies potential contamination",
      color: "from-blue-500 to-indigo-600",
      importance: "Regulatory compliance"
    },
    {
      category: "Physical Testing",
      icon: <Activity className="w-8 h-8" />,
      tests: [
        "Turbidity (water clarity)",
        "Conductivity (dissolved minerals)",
        "Total Dissolved Solids (TDS)",
        "Odour assessment"
      ],
      description: "Affects taste, appearance, and usability of water",
      color: "from-green-500 to-teal-600",
      importance: "Quality & usability"
    }
  ];

  const equipment = [
    {
      name: "ICP-OES Spectrometer",
      fullName: "Inductively Coupled Plasma-Optical Emission",
      description: "Precise trace metal analysis with detection limits in parts per billion",
      capability: "PPB Detection",
      icon: <Microscope className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "UV Spectrophotometer",
      fullName: "Ultraviolet-Visible Spectrophotometer",
      description: "Chemical compound identification and quantitative analysis",
      capability: "Chemical ID",
      icon: <TestTube className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Filtration Systems",
      fullName: "Advanced Membrane Filtration",
      description: "Microbiological testing with high accuracy pathogen detection",
      capability: "Microbiology",
      icon: <Settings className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Titration Methods",
      fullName: "Traditional Wet Chemistry Analysis",
      description: "Proven analytical techniques for comprehensive water testing",
      capability: "Wet Chemistry",
      icon: <Beaker className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const servicePlans = [
    {
      title: "Individual Parameter Testing",
      description: "Test specific parameters based on your exact needs and requirements",
      icon: <TestTube className="w-6 h-6" />,
      benefits: ["Customizable parameters", "Cost-effective for specific needs", "Quick turnaround"]
    },
    {
      title: "Comprehensive Packages",
      description: "Complete water quality assessment with all essential parameters included",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Full spectrum analysis", "Better value pricing", "Complete peace of mind"]
    },
    {
      title: "Regular Monitoring",
      description: "Scheduled testing programs for ongoing water quality management",
      icon: <Calendar className="w-6 h-6" />,
      benefits: ["Consistent monitoring", "Volume discounts", "Trend analysis"]
    },
    {
      title: "Emergency Testing",
      description: "Rush service for urgent water quality concerns and emergencies",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["24-48 hour results", "Priority processing", "Same-day availability"]
    }
  ];

  const turnaroundTimes = [
    {
      type: "Standard Testing",
      time: "3-5 Days",
      description: "Most comprehensive tests with full analysis",
      icon: <Clock className="w-5 h-5" />,
      color: "bg-green-500"
    },
    {
      type: "Rush Service",
      time: "24-48 Hours",
      description: "Urgent testing with additional fee",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-orange-500"
    },
    {
      type: "Complex Analysis",
      time: "5-7 Days",
      description: "Specialized testing requiring extended analysis",
      icon: <Microscope className="w-5 h-5" />,
      color: "bg-blue-500"
    },
    {
      type: "Same-Day Service",
      time: "6-8 Hours",
      description: "Limited parameters, by appointment only",
      icon: <Star className="w-5 h-5" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-24 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float animation-delay-300"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 mb-6"
              >
                🔬 Comprehensive Testing Services
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white"
              >
                Water Testing &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Analysis Services
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl mb-10 text-blue-50 leading-relaxed"
              >
                From drinking water safety to industrial compliance, we provide reliable testing across multiple water matrices with internationally benchmarked methods.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/sample-collection" className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
                  Sample Collection Guide
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Service Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-charcoal-800">6</div>
                    <div className="text-sm text-charcoal-600">Water Types</div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <TestTube className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-charcoal-800">25+</div>
                    <div className="text-sm text-charcoal-600">Parameters</div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-charcoal-800">3-5</div>
                    <div className="text-sm text-charcoal-600">Days TAT</div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-charcoal-800">100%</div>
                    <div className="text-sm text-charcoal-600">Accurate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Matrices Section */}
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
              Water Types We
              <span className="text-gradient"> Test</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive testing services across all water matrices, from municipal supplies to specialized industrial applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {waterMatrices.map((matrix, index) => (
              <motion.div
                key={matrix.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-hover-lift h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${matrix.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="badge badge-primary text-xs">
                      {matrix.badge}
                    </span>
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="mb-6">
                      <div className={`icon-container-lg bg-gradient-to-br ${matrix.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {matrix.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
                      {matrix.title}
                    </h3>
                    
                    <p className="text-charcoal-600 leading-relaxed mb-6">
                      {matrix.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {matrix.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-charcoal-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-sm font-medium text-charcoal-700 mb-1">Ideal For:</div>
                      <div className="text-sm text-charcoal-600">{matrix.idealFor}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Parameters We Analyze
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive testing across microbiological, chemical, and physical parameters to ensure complete water quality assessment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {parameters.map((param, index) => (
              <motion.div
                key={param.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-glass h-full hover:shadow-hard transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${param.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="mb-6">
                      <div className={`icon-container-lg bg-gradient-to-br ${param.color} text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {param.icon}
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-charcoal-800 mb-3">
                        {param.category}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-royal-blue-100 to-water-blue-100 rounded-full text-sm font-medium text-royal-blue-700">
                        {param.importance}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {param.tests.map((test, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-royal-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-charcoal-600">{test}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-charcoal-600 leading-relaxed">
                        {param.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
              Advanced Testing
              <span className="text-gradient"> Equipment</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              State-of-the-art analytical instruments ensuring precision, accuracy, and reliability in every test
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-hover-lift relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="flex items-start gap-6">
                      <div className={`icon-container bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-charcoal-800">
                            {item.name}
                          </h3>
                          <span className="badge badge-primary text-xs">
                            {item.capability}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-charcoal-600 mb-3">
                          {item.fullName}
                        </h4>
                        <p className="text-charcoal-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans & Turnaround Section */}
      <section className="section bg-gradient-to-br from-royal-blue-50 to-water-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Service Plans */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
                Flexible Service Plans
              </h2>
              <p className="text-lg text-charcoal-600 mb-10">
                Choose from our range of testing options designed to meet your specific needs and budget
              </p>

              <div className="space-y-6">
                {servicePlans.map((plan, index) => (
                  <motion.div
                    key={plan.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="card p-6 hover:shadow-hard transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="icon-container-soft bg-gradient-to-br from-royal-blue-50 to-water-blue-50 text-royal-blue-600 group-hover:scale-110 transition-transform duration-300">
                          {plan.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-charcoal-800 mb-2">
                            {plan.title}
                          </h3>
                          <p className="text-charcoal-600 mb-4 leading-relaxed">
                            {plan.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {plan.benefits.map((benefit, i) => (
                              <span key={i} className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Turnaround Times */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
                Turnaround Times
              </h2>
              <p className="text-lg text-charcoal-600 mb-10">
                Fast, reliable results with options for urgent testing needs
              </p>

              <div className="space-y-4">
                {turnaroundTimes.map((time, index) => (
                  <motion.div
                    key={time.type}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${time.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {time.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-charcoal-800">
                            {time.type}
                          </h3>
                          <p className="text-sm text-charcoal-600">
                            {time.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-royal-blue-600">
                          {time.time}
                        </div>
                        <div className="text-xs text-charcoal-600">
                          typical turnaround
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50">
                <h4 className="font-bold text-charcoal-800 mb-3">Additional Services</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-charcoal-600">Weekend appointments available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-charcoal-600">Emergency 24/7 testing capability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-charcoal-600">Consultation and result interpretation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-charcoal-600">Sample collection services available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="section bg-gradient-to-br from-royal-blue-600 to-water-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Get Your Custom Quote Today
              </h2>
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                Every water testing need is unique. Contact us for personalized pricing based on your specific requirements, testing frequency, and volume needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Competitive Pricing</div>
                    <div className="text-sm text-blue-100">Volume discounts available</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Flexible Packages</div>
                    <div className="text-sm text-blue-100">Customized service plans</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Quality Guaranteed</div>
                    <div className="text-sm text-blue-100">SANAS standard procedures</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Fast Turnaround</div>
                    <div className="text-sm text-blue-100">Rush service available</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+27609462930" className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Quote Form Preview */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-8 text-center">Quick Quote Request</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-input" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="form-label">Company (Optional)</label>
                      <input type="text" className="form-input" placeholder="Company name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-input" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" placeholder="+27 60 946 2930" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">Water Type</label>
                    <select className="form-select">
                      <option>Select water type for testing</option>
                      <option>Drinking Water (Municipal/Tap)</option>
                      <option>Borehole/Well Water</option>
                      <option>Surface Water (River/Dam)</option>
                      <option>Industrial Effluent</option>
                      <option>Pool/Recreational Water</option>
                      <option>Packaged/Bottled Water</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="form-label">Testing Requirements</label>
                    <textarea 
                      className="form-textarea" 
                      placeholder="Describe your testing needs, number of samples, specific parameters of interest, timeline, etc."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="form-label">Urgency</label>
                    <select className="form-select">
                      <option>Standard (3-5 business days)</option>
                      <option>Rush Service (24-48 hours) - Additional fee</option>
                      <option>Emergency (Same day if possible)</option>
                      <option>Flexible timeline</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    <FileText className="w-4 h-4" />
                    Request Detailed Quote
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-charcoal-600 mb-4">Need immediate assistance?</p>
                  <div className="flex justify-center gap-4">
                    <a href="tel:+27609462930" className="flex items-center gap-2 text-royal-blue-600 font-medium hover:text-royal-blue-700 transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                      060 946 2930
                    </a>
                    <a href="mailto:info@nmwatertesting.co.za" className="flex items-center gap-2 text-royal-blue-600 font-medium hover:text-royal-blue-700 transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Pages CTA */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Learn more about our processes or get your water tested today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/sample-collection" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Sample Collection Guide
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Learn proper sampling techniques to ensure accurate test results
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/laboratory-results" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Understanding Results
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Decode your lab reports and understand what your results mean
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white border-0">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Get Your Water Tested
                </h3>
                <p className="text-blue-50 mb-6 leading-relaxed">
                  Contact us today for professional water testing services
                </p>
                <div className="flex items-center justify-center text-white font-medium">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;