import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Shield, 
  Download,
  Eye,
  Clock,
  Award,
  Users,
  Phone
} from 'lucide-react';

const LaboratoryResults = () => {
  const reportSections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sample Information",
      description: "Collection details and identification"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Testing Parameters",
      description: "What was analyzed and why"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Results Summary",
      description: "Easy-to-read overview of key findings"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Detailed Analysis",
      description: "Complete data with detection limits"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Assessment",
      description: "Comparison with relevant standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Recommendations",
      description: "Next steps based on results"
    }
  ];

  const standards = [
    {
      name: "SANS 241",
      description: "South African drinking water standards",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "WHO Guidelines",
      description: "World Health Organization recommendations",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Blue Drop Standards",
      description: "Municipal water quality requirements",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Industrial Standards",
      description: "Sector-specific requirements",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const resultTypes = [
    {
      category: "Microbiological Results",
      icon: <Shield className="w-6 h-6" />,
      items: [
        {
          parameter: "E. coli detection",
          description: "Immediate health risk indicator",
          status: "critical"
        },
        {
          parameter: "Total coliforms",
          description: "General contamination indicator",
          status: "warning"
        },
        {
          parameter: "Acceptable levels",
          description: "Zero tolerance for pathogenic bacteria",
          status: "good"
        }
      ]
    },
    {
      category: "Chemical Results",
      icon: <FileText className="w-6 h-6" />,
      items: [
        {
          parameter: "pH levels",
          description: "Acidity/alkalinity balance",
          status: "info"
        },
        {
          parameter: "Heavy metals",
          description: "Health risk assessment",
          status: "critical"
        },
        {
          parameter: "Mineral content",
          description: "Taste and health implications",
          status: "info"
        },
        {
          parameter: "Chlorine levels",
          description: "Disinfection effectiveness",
          status: "warning"
        }
      ]
    },
    {
      category: "Physical Results",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        {
          parameter: "Turbidity",
          description: "Water clarity and filtration effectiveness",
          status: "info"
        },
        {
          parameter: "TDS levels",
          description: "Dissolved mineral content",
          status: "info"
        },
        {
          parameter: "Conductivity",
          description: "Overall water quality indicator",
          status: "info"
        }
      ]
    }
  ];

  const nextSteps = [
    {
      title: "If Results Show Issues",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "red",
      items: [
        "Immediate actions - Safety precautions for contaminated water",
        "Treatment options - Filtration, disinfection, professional remediation",
        "Retesting schedule - Follow-up testing recommendations",
        "Professional consultation - When to seek expert advice"
      ]
    },
    {
      title: "If Results Are Good",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "green",
      items: [
        "Regular monitoring - Recommended testing frequency",
        "Preventive measures - Maintaining water quality",
        "System maintenance - Pump, filter, and storage upkeep"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'good': return 'text-green-600 bg-green-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
              Understanding Your Water Test Report
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Clear, comprehensive reports that help you understand your water quality and make informed decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Sections */}
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
              Report Sections Explained
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Your comprehensive water test report includes all the information you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                  {section.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Your Results */}
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
              Reading Your Results
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Understanding the key elements of your water test report
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                Key Report Elements
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black mb-2">Pass/Fail Indicators</h4>
                    <p className="text-medium-gray">Clear compliance status for each parameter</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black mb-2">Numerical Values</h4>
                    <p className="text-medium-gray">Actual measurements vs. standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black mb-2">Units of Measurement</h4>
                    <p className="text-medium-gray">Understanding mg/L, CFU/100mL, etc.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black mb-2">Detection Limits</h4>
                    <p className="text-medium-gray">What we can accurately measure</p>
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
              <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                Common Standards Referenced
              </h3>
              <div className="space-y-4">
                {standards.map((standard, index) => (
                  <div key={standard.name} className="flex items-start space-x-3">
                    <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                      {standard.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-black">{standard.name}</h4>
                      <p className="text-sm text-medium-gray">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Your Results Mean */}
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
              What Your Results Mean
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Understanding the significance of different test parameters
            </p>
          </motion.div>

          <div className="space-y-12">
            {resultTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-black">
                    {type.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {type.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 bg-light-gray rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-charcoal-black">{item.parameter}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-medium-gray">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
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
              Next Steps After Testing
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              What to do based on your test results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 border-l-4 ${
                  step.color === 'red' ? 'border-red-500' : 'border-green-500'
                }`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-full ${
                    step.color === 'red' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-black">
                    {step.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        step.color === 'red' ? 'bg-red-500' : 'bg-green-500'
                      }`} />
                      <span className="text-medium-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Results Access */}
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
              Digital Results Access
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Convenient ways to access and manage your test results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                  <Download className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                Email Delivery
              </h3>
              <p className="text-medium-gray">
                PDF reports sent securely to your email address
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                  <Eye className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                Online Portal
              </h3>
              <p className="text-medium-gray">
                Access historical results (future feature)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                  <Phone className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                Mobile-Friendly
              </h3>
              <p className="text-medium-gray">
                Reports optimized for all devices
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaboratoryResults;
