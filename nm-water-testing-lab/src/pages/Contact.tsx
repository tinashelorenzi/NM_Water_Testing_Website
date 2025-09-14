import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Truck,
  FileText,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Calendar,
  Navigation,
  Users,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  MapIcon,
  Building,
  Car,
  Route
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    waterSource: '',
    testingRequired: [] as string[],
    urgentTesting: false,
    additionalInfo: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      testingRequired: checked 
        ? [...prev.testingRequired, name]
        : prev.testingRequired.filter(item => item !== name)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form or show success message
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us Directly",
      subtitle: "Immediate assistance",
      primary: "+27 60 946 2930",
      secondary: "Mon-Fri: 8AM-5PM",
      action: "tel:+27609462930",
      color: "from-royal-blue-500 to-royal-blue-600",
      hoverColor: "hover:from-royal-blue-600 hover:to-royal-blue-700"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Chat",
      subtitle: "Quick responses",
      primary: "+27 60 946 2930",
      secondary: "Usually within minutes",
      action: "https://wa.me/27609462930",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      subtitle: "Detailed inquiries",
      primary: "info@nmwatertesting.co.za",
      secondary: "Response within 24 hours",
      action: "mailto:info@nmwatertesting.co.za",
      color: "from-water-blue-500 to-blue-600",
      hoverColor: "hover:from-water-blue-600 hover:to-blue-700"
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Laboratory Address",
      details: [
        "NM Water Testing Laboratory",
        "Unit 10, French Park",
        "90 Oxford Street, Ferndale",
        "Johannesburg, 2194",
        "South Africa"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 8:00 AM - 1:00 PM (Sample drop-off only)",
        "Sunday: Closed",
        "Emergency Testing: Contact via WhatsApp"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Service Areas",
      details: [
        "Johannesburg Metropolitan Area",
        "Gauteng Province",
        "Nationwide courier services available",
        "Collection services for large-volume clients"
      ],
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sample Drop-Off",
      details: [
        "Prepare samples following our collection guide",
        "Complete sample submission form",
        "Bring identification for new clients",
        "Secure visitor parking available"
      ],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const paymentMethods = [
    { name: "Cash", icon: <CreditCard className="w-5 h-5" /> },
    { name: "EFT", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Credit Cards", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Company Accounts", icon: <Building className="w-5 h-5" /> }
  ];

  const directions = [
    {
      from: "Johannesburg CBD",
      route: "Take M1 North, exit at Grayston Drive",
      icon: <Navigation className="w-5 h-5" />
    },
    {
      from: "Sandton",
      route: "Take M1 South, exit at Grayston Drive",
      icon: <Navigation className="w-5 h-5" />
    },
    {
      from: "Public Transport",
      route: "Gautrain bus routes nearby",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const quickStats = [
    { value: "3-5", label: "Days Turnaround", icon: <Clock className="w-5 h-5" /> },
    { value: "24/7", label: "Emergency Support", icon: <Zap className="w-5 h-5" /> },
    { value: "100%", label: "Quality Assured", icon: <Shield className="w-5 h-5" /> },
    { value: "Free", label: "Quote & Consultation", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-24 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float animation-delay-300"></div>

        <div className="container relative z-10">
          <div className="text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 mb-6"
            >
              📞 Ready to Test Your Water?
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white"
            >
              Contact Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Today
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-blue-50 leading-relaxed max-w-3xl mx-auto"
            >
              Fast, reliable, and affordable water testing services. Multiple ways to reach us and get your water tested professionally.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {quickStats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2 text-white/80">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
              Helpful Resources
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Learn more about our processes and prepare for your water testing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample Collection Guide */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/sample-collection" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Sample Collection Guide
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Learn how to properly collect water samples to ensure accurate test results.
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Our Services
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Explore our comprehensive water testing services and capabilities.
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  View Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/faq" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Frequently Asked Questions
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Find answers to common questions about water testing and our processes.
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  Browse FAQ <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Choose your preferred way to contact us. We're here to help with all your water testing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={method.action}
                  target={method.action.includes('http') ? '_blank' : undefined}
                  rel={method.action.includes('http') ? 'noopener noreferrer' : undefined}
                  className={`card-hover-lift p-8 text-center block h-full bg-gradient-to-br ${method.color} ${method.hoverColor} text-white transition-all duration-500`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-white/80 mb-4">{method.subtitle}</p>
                  <p className="text-lg font-semibold mb-2">{method.primary}</p>
                  <p className="text-sm text-white/70">{method.secondary}</p>
                  <div className="mt-6 flex items-center justify-center text-white/90 group-hover:text-white transition-colors duration-300">
                    Contact Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form & Contact Info */}
      <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-glass p-8">
                <h3 className="text-3xl font-bold text-charcoal-800 mb-6">
                  Get Your Free Quote
                </h3>
                <p className="text-charcoal-600 mb-8">
                  Fill out the form below and we'll provide you with a customized quote for your water testing needs.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="form-label">Company (Optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="+27 60 946 2930"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Water Source</label>
                    <select
                      name="waterSource"
                      value={formData.waterSource}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select water source</option>
                      <option value="tap">Municipal/Tap Water</option>
                      <option value="borehole">Borehole/Well Water</option>
                      <option value="surface">Surface Water (River/Dam)</option>
                      <option value="pool">Pool/Recreational Water</option>
                      <option value="industrial">Industrial Effluent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Testing Required (Select all that apply)</label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {['Microbiological', 'Chemical', 'Physical', 'Full Analysis'].map((test) => (
                        <label key={test} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name={test}
                            checked={formData.testingRequired.includes(test)}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-royal-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-royal-blue-500"
                          />
                          <span className="text-sm text-charcoal-700">{test}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="urgentTesting"
                        checked={formData.urgentTesting}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-royal-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-royal-blue-500"
                      />
                      <span className="text-sm text-charcoal-700">Urgent testing required (24-48 hours)</span>
                    </label>
                  </div>

                  <div>
                    <label className="form-label">Preferred Contact Method</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Any special concerns, observations, or specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Free Quote
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`icon-container bg-gradient-to-br ${info.color} text-white`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-charcoal-800 mb-3">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-charcoal-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Payment Methods */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h4 className="text-xl font-bold text-charcoal-800 mb-4">
                  Payment Methods Accepted
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <div key={method.name} className="flex items-center gap-2 p-3 bg-royal-blue-50 rounded-lg">
                      <div className="text-royal-blue-600">
                        {method.icon}
                      </div>
                      <span className="text-sm font-medium text-charcoal-700">
                        {method.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Visit Our Laboratory
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Conveniently located in Ferndale, Johannesburg with easy access and secure parking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 text-center bg-gradient-to-br from-royal-blue-50 to-water-blue-50">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                    <MapIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
                  Interactive Map
                </h3>
                <p className="text-charcoal-600 mb-6">
                  Click to open detailed directions in your preferred maps application
                </p>
                <a
                  href="https://maps.google.com/?q=Unit+10+French+Park+90+Oxford+Street+Ferndale+Johannesburg+2194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>

            {/* Directions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-charcoal-800 mb-6">
                Directions to Our Lab
              </h3>
              
              {directions.map((direction, index) => (
                <motion.div
                  key={direction.from}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-royal-blue-100 rounded-xl flex items-center justify-center text-royal-blue-600">
                      {direction.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal-800 mb-1">
                        From {direction.from}
                      </h4>
                      <p className="text-charcoal-600 text-sm">
                        {direction.route}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Parking Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card p-6 bg-green-50 border border-green-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-800 mb-1">
                      Parking Available
                    </h4>
                    <p className="text-charcoal-600 text-sm">
                      Secure visitor parking on-site. Easy access to our laboratory facilities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section bg-gradient-to-br from-royal-blue-600 to-water-blue-600 text-white">
        <div className="container">
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Need Urgent Water Testing?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto"
            >
              For urgent water safety concerns and emergency testing situations, contact us immediately via WhatsApp for the fastest response.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/27609462930"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lg bg-white text-royal-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Emergency Line
              </a>
              <a
                href="tel:+27609462930"
                className="btn-lg btn-ghost border-2 border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +27 60 946 2930
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;