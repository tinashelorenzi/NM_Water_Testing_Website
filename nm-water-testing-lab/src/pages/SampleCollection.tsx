import { motion } from 'framer-motion';
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
  FileText
} from 'lucide-react';

const SampleCollection = () => {
  const sampleTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Tap Water Sampling",
      steps: [
        "Choose the right tap - Kitchen tap preferred, avoid bathroom taps",
        "Clean the tap - Wipe external surfaces with alcohol wipe",
        "Flush the system - Run cold water for 2-3 minutes",
        "Fill the container - Remove cap just before filling, don't touch inside of cap",
        "Avoid overflow - Leave small air space at top",
        "Label immediately - Date, time, location"
      ]
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Borehole/Well Water Sampling",
      steps: [
        "Pump for 10-15 minutes - Clear stagnant water from system",
        "Use the closest tap - Avoid storage tanks if possible",
        "Check pump operation - Ensure normal flow and pressure",
        "Sample from dedicated sampling tap - If available"
      ]
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Surface Water Sampling",
      steps: [
        "Safety first - Wear protective gloves",
        "Wade into water - Sample from flowing section, not stagnant areas",
        "Face upstream - Avoid disturbing sediment",
        "Submerge container - Open underwater to avoid surface contamination",
        "Multiple points - Consider sampling from different locations"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Pool/Spa Water Sampling",
      steps: [
        "Sample from middle of pool - Away from inlet/outlet points",
        "Avoid surface scum - Submerge container slightly",
        "Sample before chemical treatment - If possible",
        "Note recent treatments - Chemical additions in past 24 hours"
      ]
    }
  ];

  const containerTypes = [
    {
      type: "Microbiological testing",
      container: "Sterile bottles with sodium thiosulfate",
      icon: <Shield className="w-6 h-6" />
    },
    {
      type: "Chemical analysis",
      container: "Clean plastic or glass containers",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      type: "Metals analysis",
      container: "Acid-preserved containers",
      icon: <Package className="w-6 h-6" />
    },
    {
      type: "Special parameters",
      container: "Specific containers as required",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const storageTips = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      title: "Keep Cool",
      description: "Use cooler with ice packs"
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "Avoid Freezing",
      description: "Don't let samples freeze"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Transport Quickly",
      description: "Deliver within 24 hours"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Complete Chain of Custody",
      description: "If required for legal purposes"
    }
  ];

  const commonMistakes = [
    "Using contaminated containers",
    "Sampling from inappropriate locations",
    "Delays in transport",
    "Inadequate sample volumes",
    "Missing sample identification"
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
              How to Collect Your Water Sample
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Proper sampling is crucial for accurate results. Follow our step-by-step guide to ensure reliable testing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Sampling Principles */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
              General Sampling Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Shield className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-charcoal-black mb-2">Clean Containers</h3>
                <p className="text-sm text-medium-gray">Use only clean, sterile containers (available from our lab)</p>
              </div>
              <div className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <XCircle className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-charcoal-black mb-2">Avoid Contamination</h3>
                <p className="text-sm text-medium-gray">Prevent contamination during collection process</p>
              </div>
              <div className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-charcoal-black mb-2">Label Clearly</h3>
                <p className="text-sm text-medium-gray">Label samples clearly with date, time, and source</p>
              </div>
              <div className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Truck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-charcoal-black mb-2">Transport Promptly</h3>
                <p className="text-sm text-medium-gray">Transport samples promptly to maintain integrity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Collection by Water Type */}
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
              Sample Collection by Water Type
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Follow these specific guidelines based on your water source
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleTypes.map((type, index) => (
              <motion.div
                key={type.title}
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
                  <h3 className="text-xl font-semibold text-charcoal-black">
                    {type.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {type.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-royal-blue text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {stepIndex + 1}
                      </div>
                      <p className="text-medium-gray leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Containers & Preservation */}
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
              Sample Containers & Preservation
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Different tests require specific containers to ensure accurate results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {containerTypes.map((container, index) => (
              <motion.div
                key={container.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    {container.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-charcoal-black mb-2">
                  {container.type}
                </h3>
                <p className="text-sm text-medium-gray">
                  {container.container}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-charcoal-black mb-6">
              Storage & Transport Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storageTips.map((tip, index) => (
                <div key={tip.title} className="card p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                      {tip.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-charcoal-black mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-medium-gray">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sample Submission */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
                Sample Submission
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-black mb-4">
                    Required Information
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-medium-gray">Client contact details</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-medium-gray">Sample identification and source</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-medium-gray">Date and time of collection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-medium-gray">Requested testing parameters</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-medium-gray">Any special concerns or observations</span>
                    </li>
                  </ul>
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
                Delivery Options
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Drop Off</h4>
                    <p className="text-sm text-medium-gray">Our Ferndale laboratory (business hours)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Collection Service</h4>
                    <p className="text-sm text-medium-gray">Available for large clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Courier</h4>
                    <p className="text-sm text-medium-gray">Approved courier services accepted</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Urgent Samples</h4>
                    <p className="text-sm text-medium-gray">WhatsApp coordination available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
              Common Sampling Mistakes to Avoid
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Avoid these common errors to ensure accurate test results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-charcoal-black">{mistake}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SampleCollection;
