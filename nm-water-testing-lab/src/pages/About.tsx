import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  MapPin, 
  Microscope,
  Shield,
  CheckCircle,
  TrendingUp,
  Globe,
  Building
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "We produce reliable, internationally benchmarked results using proven analytical methods and advanced equipment. Every test undergoes rigorous quality control procedures."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "We promote responsible water management practices and support environmental stewardship through accurate monitoring and assessment services."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Affordability",
      description: "We believe essential water testing services should be accessible to communities, industries, and governments. Our flexible pricing ensures vital testing is within reach."
    }
  ];

  const equipment = [
    {
      name: "ICP-OES (Inductively Coupled Plasma-Optical Emission Spectrometry)",
      description: "Advanced trace metals analysis with detection limits in parts per billion"
    },
    {
      name: "UV-Visible Spectrophotometer",
      description: "Precise chemical analysis and compound identification"
    },
    {
      name: "Modern Filtration Systems",
      description: "Microbiological testing capabilities with high accuracy"
    },
    {
      name: "Quality-Controlled Environment",
      description: "Climate-controlled testing conditions for consistent results"
    },
    {
      name: "Comprehensive Sample Preparation Facilities",
      description: "Ensuring accurate results through proper sample handling"
    }
  ];

  const qualityAssurance = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tried and Tested Methods",
      description: "Spectrophotometric, titration, and membrane filtration techniques"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Regular Calibration",
      description: "All equipment maintained to international standards"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Method Validation",
      description: "Currently undergoing validation for SANAS accreditation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Control Protocols",
      description: "Duplicate testing and reference standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Development",
      description: "Ongoing training for all staff"
    }
  ];

  const futureServices = [
    "Water quality risk assessments",
    "Environmental monitoring programs",
    "Method validation and quality control audits",
    "Food testing services",
    "Mass calibration services"
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
              Dedicated to Water Safety Across South Africa
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              NM Water Testing Laboratory was established with a clear mission: to provide accessible, reliable water testing services that support public health, environmental stewardship, and regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-medium-gray leading-relaxed mb-6">
                As a modern analytical facility, we combine advanced technology with professional expertise to deliver accurate results you can trust. Our commitment to excellence drives everything we do.
              </p>
              <p className="text-lg text-medium-gray leading-relaxed">
                We understand that water quality affects every aspect of life - from individual health to environmental sustainability. That's why we've built our laboratory with the latest technology and staffed it with experienced professionals who share our passion for water safety.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-royal-blue to-water-blue rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">2024</div>
                    <div className="text-sm text-blue-100">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-blue-100">Accurate Results</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Emergency Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">SANAS</div>
                    <div className="text-sm text-blue-100">Accreditation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Guiding principles that drive our commitment to water safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                  <Eye className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal-black mb-4">
                Our Vision
              </h3>
              <p className="text-medium-gray leading-relaxed">
                To be a trusted laboratory that contributes to water safety, resilience and stewardship through excellent technical analysis and good customer service.
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
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal-black mb-4">
                Our Mission
              </h3>
              <p className="text-medium-gray leading-relaxed">
                To uphold the highest standards of scientific integrity and regulatory compliance while empowering clients to make informed decisions regarding water safety and environmental management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal-black">
                  {value.title}
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Equipment */}
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
              State-of-the-Art Laboratory
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Advanced equipment and modern facilities for accurate testing
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
                className="card p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-black mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-medium-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
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
              Quality Assurance
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Our commitment to accuracy and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {qualityAssurance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-light-gray transition-colors duration-300"
              >
                <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="card p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                <Award className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal-black mb-4">
              Accreditation Progress
            </h3>
            <p className="text-lg text-medium-gray leading-relaxed max-w-3xl mx-auto">
              We are actively working toward SANAS (South African National Accreditation System) accreditation, demonstrating our commitment to the highest international standards of laboratory quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
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
              Our Team
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Professional and competent analysts with extensive experience in water quality testing and environmental analysis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-8 text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                <Users className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal-black mb-4">
              Expert Analysts
            </h3>
            <p className="text-lg text-medium-gray leading-relaxed">
              Our team combines technical expertise with dedication to customer service. Each member brings years of experience in water quality testing, environmental analysis, and regulatory compliance to ensure you receive the most accurate and reliable results possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Location */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
                Our Location
              </h2>
              <p className="text-lg text-medium-gray leading-relaxed mb-6">
                Conveniently located in Ferndale, Johannesburg, our laboratory is easily accessible from major routes throughout the city.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal-black">Address</h3>
                    <p className="text-medium-gray">
                      Unit 10, French Park<br />
                      90 Oxford Street, Ferndale<br />
                      Randburg, 2194
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal-black">Facilities</h3>
                    <p className="text-medium-gray">
                      Easy access from major Johannesburg routes<br />
                      Secure parking available<br />
                      Professional office and laboratory facilities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-royal-blue to-water-blue rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Future Vision</h3>
              <p className="text-blue-100 mb-6">
                As part of our growth strategy, we are expanding beyond traditional water testing to offer:
              </p>
              <ul className="space-y-3">
                {futureServices.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-light-blue" />
                    <span className="text-blue-100">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
