import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Home, 
  TreePine, 
  Waves, 
  Shield, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Thermometer,
  Package,
  Truck,
  FileText,
  ArrowRight,
  TestTube,
  Beaker,
  Settings,
  Zap,
  Eye,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  Download,
  Upload,
  Target,
  Award,
  Star,
  Users,
  Building,
  Globe
} from 'lucide-react';

const SampleCollection = () => {
  const sampleTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Tap Water Sampling",
      description: "Municipal and household tap water collection for drinking water quality assessment",
      steps: [
        "Choose the right tap - Kitchen tap preferred, avoid bathroom taps",
        "Clean the tap - Wipe external surfaces with alcohol wipe",
        "Flush the system - Run cold water for 2-3 minutes",
        "Fill the container - Remove cap just before filling, don't touch inside of cap",
        "Avoid overflow - Leave small air space at top",
        "Label immediately - Date, time, location"
      ],
      color: "from-blue-500 to-blue-600",
      badge: "Most Common"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Borehole/Well Water Sampling",
      description: "Groundwater collection from private wells and boreholes for comprehensive analysis",
      steps: [
        "Pump for 10-15 minutes - Clear stagnant water from system",
        "Use the closest tap - Avoid storage tanks if possible",
        "Check pump operation - Ensure normal flow and pressure",
        "Sample from dedicated sampling tap - If available"
      ],
      color: "from-teal-500 to-cyan-600",
      badge: "Groundwater"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Surface Water Sampling",
      description: "River, dam, and natural water body collection for environmental monitoring",
      steps: [
        "Safety first - Wear protective gloves",
        "Wade into water - Sample from flowing section, not stagnant areas",
        "Face upstream - Avoid disturbing sediment",
        "Submerge container - Open underwater to avoid surface contamination",
        "Multiple points - Consider sampling from different locations"
      ],
      color: "from-green-500 to-emerald-600",
      badge: "Environmental"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Pool/Spa Water Sampling",
      description: "Recreational water collection for safety and chemical balance testing",
      steps: [
        "Sample from middle of pool - Away from inlet/outlet points",
        "Avoid surface scum - Submerge container slightly",
        "Sample before chemical treatment - If possible",
        "Note recent treatments - Chemical additions in past 24 hours"
      ],
      color: "from-water-blue-500 to-blue-600",
      badge: "Recreational"
    }
  ];

  const containerTypes = [
    {
      type: "Microbiological Testing",
      container: "Sterile bottles with sodium thiosulfate",
      description: "For bacterial and pathogen detection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      type: "Chemical Analysis",
      container: "Clean plastic or glass containers",
      description: "For pH, chlorine, and chemical parameters",
      icon: <Beaker className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      type: "Metals Analysis",
      container: "Acid-preserved containers",
      description: "For heavy metals and trace elements",
      icon: <Package className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      type: "Special Parameters",
      container: "Specific containers as required",
      description: "For specialized testing requirements",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const storageTips = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Keep Cool",
      description: "Use cooler with ice packs to maintain sample integrity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Avoid Freezing",
      description: "Don't let samples freeze as it can alter results",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Transport Quickly",
      description: "Deliver within 24 hours for best results",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Complete Documentation",
      description: "Fill out chain of custody forms if required",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Using contaminated containers",
      impact: "Can lead to false positive results",
      solution: "Always use sterile containers from our lab"
    },
    {
      mistake: "Sampling from inappropriate locations",
      impact: "May not represent true water quality",
      solution: "Follow our location-specific guidelines"
    },
    {
      mistake: "Delays in transport",
      impact: "Sample degradation affects accuracy",
      solution: "Transport within 24 hours with proper cooling"
    },
    {
      mistake: "Inadequate sample volumes",
      impact: "Insufficient for complete analysis",
      solution: "Collect minimum 500ml for most tests"
    },
    {
      mistake: "Missing sample identification",
      impact: "Cannot track or report results",
      solution: "Label clearly with date, time, and source"
    }
  ];

  const deliveryOptions = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Drop Off at Laboratory",
      description: "Visit our Ferndale laboratory during business hours",
      details: "Monday-Friday: 8AM-5PM, Saturday: 8AM-1PM",
      color: "from-royal-blue-500 to-royal-blue-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collection Service",
      description: "We collect samples from your location",
      details: "Available for large clients and regular customers",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Courier Service",
      description: "Use approved courier services",
      details: "Ensure proper packaging and cooling",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Emergency Collection",
      description: "Urgent sample collection available",
      details: "Contact us via WhatsApp for coordination",
      color: "from-orange-500 to-red-600"
    }
  ];

  const requiredInfo = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client Contact Details",
      description: "Name, phone, email, and address"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Sample Source Information",
      description: "Location, type of water source, and collection point"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Collection Details",
      description: "Date, time, and any special conditions"
    },
    {
      icon: <TestTube className="w-5 h-5" />,
      title: "Testing Requirements",
      description: "Specific parameters and analysis needed"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Special Concerns",
      description: "Any observations or specific issues to investigate"
    }
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
                  📋 Professional Sample Collection Guide
                </motion.span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
              >
                Sample Collection
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Made Simple
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl mb-10 text-blue-50 leading-relaxed max-w-lg"
              >
                Follow our comprehensive guide to collect water samples correctly and ensure accurate test results every time.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Sample Containers
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
                <div className="text-center">
                  <div className="flex justify-center mb-2 text-white/80">
                    <TestTube className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">4</div>
                  <div className="text-sm text-blue-100">Water Types</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2 text-white/80">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">24h</div>
                  <div className="text-sm text-blue-100">Transport Time</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2 text-white/80">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-100">Accurate</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2 text-white/80">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">Free</div>
                  <div className="text-sm text-blue-100">Containers</div>
                </div>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 rounded-xl flex items-center justify-center text-white">
                      <TestTube className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-800">Sample Collection</div>
                      <div className="text-sm text-charcoal-600">Step-by-Step Guide</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Container Type</span>
                      <span className="font-semibold text-green-600">Sterile ✓</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Sample Volume</span>
                      <span className="font-semibold text-green-600">500ml ✓</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-charcoal-700">Transport Time</span>
                      <span className="font-semibold text-green-600">24h Max ✓</span>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Ready for Testing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                  Free Containers
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* General Sampling Principles */}
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
              Essential Sampling
              <span className="block text-gradient">Principles</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Follow these fundamental principles to ensure your water samples provide accurate and reliable test results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Clean Containers",
                description: "Use only sterile, contamination-free containers provided by our laboratory",
                color: "from-royal-blue-500 to-royal-blue-600"
              },
              {
                icon: <XCircle className="w-8 h-8" />,
                title: "Avoid Contamination",
                description: "Prevent external contamination during the collection process",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Label Clearly",
                description: "Mark samples with date, time, location, and source information",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Transport Promptly",
                description: "Deliver samples within 24 hours to maintain integrity",
                color: "from-purple-500 to-purple-600"
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-hover-lift p-8 text-center h-full">
                  <div className="mb-6">
                    <div className={`icon-container-lg bg-gradient-to-br ${principle.color} text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-4 group-hover:text-royal-blue-600 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Collection by Water Type */}
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
              Collection Methods by
              <span className="block text-gradient">Water Type</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Each water source requires specific collection techniques. Follow these detailed guides for optimal results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-hover-lift p-8 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`icon-container-lg bg-gradient-to-br ${type.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-charcoal-800 group-hover:text-royal-blue-600 transition-colors duration-300">
                            {type.title}
                          </h3>
                          <span className="badge badge-primary text-xs">
                            {type.badge}
                          </span>
                        </div>
                        <p className="text-charcoal-600 text-sm">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {type.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            {stepIndex + 1}
                          </div>
                          <p className="text-charcoal-600 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Containers & Preservation */}
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
              Sample Containers &
              <span className="block text-gradient">Preservation</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Different tests require specific containers and preservation methods to ensure accurate results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {containerTypes.map((container, index) => (
              <motion.div
                key={container.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-hover-lift p-6 text-center h-full">
                  <div className="mb-6">
                    <div className={`icon-container bg-gradient-to-br ${container.color} text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {container.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-800 mb-3 group-hover:text-royal-blue-600 transition-colors duration-300">
                    {container.type}
                  </h3>
                  <p className="text-sm text-charcoal-600 mb-2 font-medium">
                    {container.container}
                  </p>
                  <p className="text-xs text-charcoal-500">
                    {container.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-charcoal-800 mb-8">
              Storage & Transport Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storageTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="mb-4">
                      <div className={`icon-container bg-gradient-to-br ${tip.color} text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {tip.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-charcoal-800 mb-2 group-hover:text-royal-blue-600 transition-colors duration-300">
                      {tip.title}
                    </h4>
                    <p className="text-sm text-charcoal-600">
                      {tip.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Submission */}
      <section className="section bg-gradient-to-br from-royal-blue-50 to-water-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-charcoal-800 mb-8">
                Sample Submission
                <span className="block text-gradient">Requirements</span>
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-6">
                  Required Information
                </h3>
                <div className="space-y-4">
                  {requiredInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="icon-container bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-800 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-charcoal-600">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-6">
                  Delivery Options
                </h3>
                <div className="space-y-6">
                  {deliveryOptions.map((option, index) => (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className={`icon-container bg-gradient-to-br ${option.color} text-white`}>
                          {option.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-800 mb-1">
                          {option.title}
                        </h4>
                        <p className="text-sm text-charcoal-600 mb-1">
                          {option.description}
                        </p>
                        <p className="text-xs text-charcoal-500">
                          {option.details}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="card p-8 bg-gradient-to-br from-royal-blue-500 to-water-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Need Help with Collection?
                </h3>
                <p className="text-blue-100 mb-6">
                  Our team is here to guide you through the sample collection process and answer any questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/27609462930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-royal-blue-600 hover:bg-blue-50 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+27609462930"
                    className="btn btn-ghost border-2 border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Common Mistakes to
              <span className="block text-gradient">Avoid</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Learn from these common sampling errors to ensure your water samples provide accurate and reliable results.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonMistakes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 border-l-4 border-red-500 bg-red-50/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal-800 mb-2">
                        {item.mistake}
                      </h4>
                      <p className="text-sm text-charcoal-600 mb-2">
                        <span className="font-medium text-red-600">Impact:</span> {item.impact}
                      </p>
                      <p className="text-sm text-charcoal-600">
                        <span className="font-medium text-green-600">Solution:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-br from-royal-blue-600 to-water-blue-600 text-white">
        <div className="container">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Collect Your Sample?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Get your free sample containers and start your water testing journey today. Our team is here to help every step of the way.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl">
                Get Free Containers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/27609462930"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleCollection;