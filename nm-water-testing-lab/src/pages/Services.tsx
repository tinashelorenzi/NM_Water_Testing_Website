import { motion } from 'framer-motion';
import { 
  Droplets, 
  Building, 
  TreePine, 
  Waves, 
  Factory, 
  Home,
  Microscope,
  TestTube,
  Shield,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const waterMatrices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Drinking Water Testing",
      description: "Tap water quality analysis and compliance with SANS 241 standards",
      features: [
        "Microbiological and chemical safety testing",
        "Compliance with SANS 241 standards",
        "Comprehensive water quality assessment"
      ],
      idealFor: "Homeowners, businesses, municipalities"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Groundwater Analysis",
      description: "Borehole water quality assessment and mineral content analysis",
      features: [
        "Mineral content analysis",
        "Contamination detection",
        "Agricultural suitability assessment"
      ],
      idealFor: "Private wells, agricultural use, industrial extraction"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Surface Water Monitoring",
      description: "Rivers and dams water quality monitoring and environmental impact assessment",
      features: [
        "Environmental impact assessment",
        "Seasonal monitoring programs",
        "Ecosystem health evaluation"
      ],
      idealFor: "Environmental consultants, municipalities, researchers"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Effluent Testing",
      description: "Wastewater discharge compliance and environmental regulation adherence",
      features: [
        "Environmental regulation adherence",
        "Process water optimization",
        "Discharge compliance monitoring"
      ],
      idealFor: "Manufacturing facilities, treatment plants"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Recreational Water Safety",
      description: "Swimming pool water analysis and public recreation facility compliance",
      features: [
        "Chemical balance testing",
        "Bacterial contamination screening",
        "Safety parameter monitoring"
      ],
      idealFor: "Hotels, gyms, public pools, residential pools"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Packaged Water Analysis",
      description: "Bottled water quality verification and reverse osmosis system testing",
      features: [
        "Product quality assurance",
        "RO system performance testing",
        "Bottling compliance verification"
      ],
      idealFor: "Water bottling companies, RO system owners"
    }
  ];

  const parameters = [
    {
      category: "Microbiological Testing",
      icon: <Microscope className="w-6 h-6" />,
      tests: [
        "Total Coliforms",
        "Escherichia coli (E. coli)",
        "Faecal Coliforms",
        "Heterotrophic Plate Count"
      ],
      description: "Detects harmful bacteria that can cause waterborne diseases"
    },
    {
      category: "Chemical Analysis",
      icon: <TestTube className="w-6 h-6" />,
      tests: [
        "Basic Chemistry: pH, Conductivity, TDS",
        "Organic Compounds: COD, BOD, TOC",
        "Nutrients: Nitrates, Ammonia, Fluoride",
        "Minerals: Hardness, Alkalinity, Chloride",
        "Trace Metals: Lead, Cadmium, Chromium, Arsenic",
        "Major Ions: Sodium, Calcium, Magnesium, Potassium"
      ],
      description: "Ensures water meets health standards and identifies potential contamination"
    },
    {
      category: "Physical Testing",
      icon: <Shield className="w-6 h-6" />,
      tests: [
        "Turbidity (water clarity)",
        "Conductivity (dissolved minerals)",
        "Total Dissolved Solids (TDS)",
        "Odour assessment"
      ],
      description: "Affects taste, appearance, and usability of water"
    }
  ];

  const equipment = [
    {
      name: "ICP-OES (Inductively Coupled Plasma)",
      description: "Precise trace metal analysis with detection limits in parts per billion"
    },
    {
      name: "UV Spectrophotometer",
      description: "Chemical compound identification and quantitative analysis"
    },
    {
      name: "Membrane Filtration Systems",
      description: "Advanced microbiological testing with high accuracy"
    },
    {
      name: "Titration Methods",
      description: "Traditional wet chemistry analysis for comprehensive testing"
    },
    {
      name: "Advanced Filtration",
      description: "Sample preparation and analysis with modern techniques"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Water Testing & Analysis Services
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              From drinking water safety to industrial compliance, we provide reliable testing across multiple water matrices with internationally benchmarked methods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Water Matrices */}
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
              Water Matrices We Test
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Comprehensive testing services for all types of water sources and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {waterMatrices.map((matrix, index) => (
              <motion.div
                key={matrix.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    {matrix.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-charcoal-black">
                      {matrix.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed">
                      {matrix.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal-black mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {matrix.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                        <span className="text-medium-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-light-gray p-4 rounded-lg">
                  <p className="text-sm text-charcoal-black">
                    <span className="font-semibold">Ideal for:</span> {matrix.idealFor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parameters We Analyze */}
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
              Parameters We Analyze
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Comprehensive testing across microbiological, chemical, and physical parameters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {parameters.map((param, index) => (
              <motion.div
                key={param.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    {param.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                  {param.category}
                </h3>
                <ul className="space-y-2 mb-6 text-left">
                  {param.tests.map((test, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                      <span className="text-medium-gray text-sm">{test}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-medium-gray italic">
                  {param.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Methods & Equipment */}
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
              Advanced Technology for Accurate Results
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              State-of-the-art equipment and internationally recognized testing methods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-charcoal-black">
                  {item.name}
                </h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Turnaround */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
                Flexible Service Plans
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-black mb-2">Individual Parameter Testing</h3>
                    <p className="text-medium-gray">Test specific parameters based on your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-black mb-2">Comprehensive Water Quality Packages</h3>
                    <p className="text-medium-gray">Complete analysis packages for comprehensive assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-black mb-2">Regular Monitoring Contracts</h3>
                    <p className="text-medium-gray">Ongoing monitoring programs for continuous compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-black mb-2">Emergency/Rush Testing</h3>
                    <p className="text-medium-gray">Urgent testing available for critical situations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-charcoal-black mb-6 text-center">
                Turnaround Times
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-light-gray rounded-lg">
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Standard Testing</h4>
                    <p className="text-sm text-medium-gray">Most comprehensive tests</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-royal-blue">3-5 days</div>
                    <div className="text-sm text-medium-gray">business days</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-light-gray rounded-lg">
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Rush Service</h4>
                    <p className="text-sm text-medium-gray">Additional fee applies</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-royal-blue">24-48 hours</div>
                    <div className="text-sm text-medium-gray">urgent testing</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-light-gray rounded-lg">
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Complex Analysis</h4>
                    <p className="text-sm text-medium-gray">Specialized testing</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-royal-blue">5-7 days</div>
                    <div className="text-sm text-medium-gray">business days</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="btn-primary w-full">
                  Get Custom Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
