import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Target, 
  Shield, 
  Globe, 
  Heart, 
  Award, 
  CheckCircle, 
  Users, 
  Microscope, 
  TestTube, 
  Clock, 
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Building,
  MapPin,
  Calendar,
  Beaker,
  Settings,
  FileText,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We produce reliable, internationally benchmarked results using proven analytical methods and advanced equipment. Every test undergoes rigorous quality control procedures.",
      color: "from-royal-blue-500 to-royal-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environmental Stewardship",
      description: "We promote responsible water management practices and support environmental stewardship through accurate monitoring and assessment services.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Accessible Service",
      description: "We believe essential water testing services should be accessible to communities, industries, and governments. Our flexible pricing ensures vital testing is within reach.",
      color: "from-water-blue-500 to-blue-600"
    }
  ];

  const equipment = [
    {
      name: "ICP-OES Spectrometer",
      fullName: "Inductively Coupled Plasma-Optical Emission Spectrometry",
      description: "Advanced trace metals analysis with detection limits in parts per billion",
      icon: <Microscope className="w-6 h-6" />,
      capability: "PPB Detection",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "UV-Visible Spectrophotometer",
      fullName: "Ultraviolet-Visible Spectrophotometer",
      description: "Precise chemical analysis and compound identification across UV-Vis spectrum",
      icon: <TestTube className="w-6 h-6" />,
      capability: "Chemical Analysis",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Filtration Systems",
      fullName: "Modern Membrane Filtration Systems",
      description: "Microbiological testing capabilities with high accuracy for pathogen detection",
      icon: <Settings className="w-6 h-6" />,
      capability: "Microbiology",
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Quality Control Environment",
      fullName: "Climate-Controlled Laboratory",
      description: "Temperature and humidity controlled testing conditions for consistent results",
      icon: <Beaker className="w-6 h-6" />,
      capability: "Controlled Environment",
      color: "from-orange-500 to-red-600"
    }
  ];

  const qualityAssurance = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Validated Methods",
      description: "Spectrophotometric, titration, and membrane filtration techniques following international standards",
      badge: "ISO Standard"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Regular Calibration",
      description: "All equipment maintained and calibrated to international standards with documented procedures",
      badge: "Certified"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "SANAS Accreditation",
      description: "Currently undergoing validation for SANAS accreditation demonstrating commitment to quality",
      badge: "In Progress"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Control",
      description: "Duplicate testing, reference standards, and blind quality control samples",
      badge: "Rigorous"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Ongoing professional development and training for all laboratory personnel",
      badge: "Certified"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      description: "Complete traceability and documentation of all testing procedures and results",
      badge: "Traceable"
    }
  ];

  const achievements = [
    { number: "2024", label: "Laboratory Established", icon: <Calendar className="w-5 h-5" /> },
    { number: "1000+", label: "Tests Completed", icon: <TestTube className="w-5 h-5" /> },
    { number: "100%", label: "Quality Assured", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> }
  ];

  const futureServices = [
    {
      title: "Water Risk Assessments",
      description: "Comprehensive water quality risk evaluation services",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Environmental Monitoring",
      description: "Long-term environmental monitoring programs",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Method Validation",
      description: "Quality control audits and method validation services",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Food Testing",
      description: "Expansion into food safety testing services",
      icon: <TestTube className="w-5 h-5" />
    },
    {
      title: "Mass Calibration",
      description: "Precision mass calibration services",
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-24 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float animation-delay-300"></div>
        <div className="absolute top-1/2 right-16 w-20 h-20 bg-white/10 rounded-full blur-lg animate-float animation-delay-500"></div>

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
                🧪 Leading Water Testing Laboratory
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
              >
                Dedicated to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Water Safety
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl mb-10 text-blue-50 leading-relaxed"
              >
                Providing accessible, reliable water testing services that support public health, environmental stewardship, and regulatory compliance across South Africa.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/services" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
                  Contact Us
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {achievements.map((stat, index) => (
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

            {/* Hero Visual - Laboratory Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative lg:block"
            >
              <div className="relative">
                {/* Main Stats Card */}
                <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                      <Microscope className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-800">Laboratory Excellence</h3>
                    <p className="text-charcoal-600">Advanced Testing Capabilities</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Detection Limit</span>
                      <span className="font-semibold text-royal-blue-600">PPB Level</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Quality Control</span>
                      <span className="font-semibold text-green-600">ISO Standard</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Turnaround</span>
                      <span className="font-semibold text-water-blue-600">3-5 Days</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                  SANAS Ready
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our Mission & 
              <span className="text-gradient"> Vision</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to water safety and environmental stewardship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-hover-lift p-10 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="icon-container-lg bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal-800 mb-6">Our Vision</h3>
                  <p className="text-lg text-charcoal-600 leading-relaxed">
                    To be a trusted laboratory that contributes to water safety, resilience and stewardship through excellent technical analysis and good customer service.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-hover-lift p-10 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="icon-container-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal-800 mb-6">Our Mission</h3>
                  <p className="text-lg text-charcoal-600 leading-relaxed">
                    To uphold the highest standards of scientific integrity and regulatory compliance while empowering clients to make informed decisions regarding water safety and environmental management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-glass p-8 text-center h-full hover:shadow-hard transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8">
                      <div className={`icon-container-lg bg-gradient-to-br ${value.color} text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal-800 mb-6">
                      {value.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Facilities Section */}
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
              State-of-the-Art 
              <span className="text-gradient"> Laboratory</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Advanced equipment and modern facilities delivering precision testing with internationally recognized accuracy
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
                <div className="card-hover-lift p-8 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
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

      {/* Quality Assurance Section */}
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
              Quality Assurance
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Our unwavering commitment to accuracy, reliability, and international standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {qualityAssurance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card p-6 h-full hover:shadow-hard transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="icon-container-soft bg-gradient-to-br from-royal-blue-50 to-water-blue-50 text-royal-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-charcoal-800">
                          {item.title}
                        </h3>
                        <span className="badge badge-success text-xs">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-charcoal-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SANAS Accreditation Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-royal-blue-500 to-water-blue-500 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Award className="w-12 h-12" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold">SANAS Accreditation</h3>
                  <p className="text-blue-100">South African National Accreditation System</p>
                </div>
              </div>
              <p className="text-lg text-blue-50 max-w-3xl mx-auto">
                We are actively working toward SANAS accreditation, demonstrating our commitment to the highest international standards of laboratory quality and technical competence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Services Section */}
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
              Expanding Our 
              <span className="text-gradient"> Capabilities</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              As part of our growth strategy, we are expanding beyond traditional water testing to offer comprehensive analytical services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card p-6 text-center h-full hover:shadow-hard transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-500 mx-auto group-hover:from-royal-blue-500 group-hover:to-water-blue-500 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 group-hover:bg-royal-blue-100 group-hover:text-royal-blue-700 transition-all duration-300">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact CTA */}
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
                Visit Our Laboratory
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Unit 10, French Park<br />
                      90 Oxford Street, Ferndale<br />
                      Johannesburg, 2194<br />
                      South Africa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Facilities</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Climate-controlled laboratory environment with secure parking and easy access from major Johannesburg routes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Emergency testing available 24/7<br />
                      Weekend appointments by arrangement
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl">
                  Get Directions
                  <MapPin className="w-5 h-5" />
                </Link>
                <a href="tel:+27609462930" className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10">
                  <Phone className="w-5 h-5" />
                  Call Us Now
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
              {/* Contact Information Card */}
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-8 text-center">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-royal-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-royal-blue-500 rounded-xl flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800">Phone</div>
                      <div className="text-charcoal-600">+27 60 946 2930</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-water-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-water-blue-500 rounded-xl flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800">Email</div>
                      <div className="text-charcoal-600 text-sm">info@nmwatertesting.co.za</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800">WhatsApp</div>
                      <div className="text-charcoal-600">+27 60 946 2930</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-charcoal-800 mb-4">Why Choose NM Water?</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-royal-blue-600">3-5</div>
                      <div className="text-xs text-charcoal-600">Days Results</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-xs text-charcoal-600">Quality</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-water-blue-600">24/7</div>
                      <div className="text-xs text-charcoal-600">Support</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">SANAS</div>
                      <div className="text-xs text-charcoal-600">Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;