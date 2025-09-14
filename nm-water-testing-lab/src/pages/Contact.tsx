import { useState } from 'react';
import { motion } from 'framer-motion';
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
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    waterSource: '',
    testingRequired: [],
    urgentTesting: false,
    additionalInfo: '',
    preferredContact: 'email'
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Laboratory Address",
      details: [
        "NM Water Testing Laboratory",
        "Unit 10, French Park",
        "90 Oxford Street, Ferndale",
        "Randburg, 2194",
        "South Africa"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone & WhatsApp",
      details: [
        "Primary: +27 60 946 2930",
        "Alternative: +27 82 880 8912",
        "WhatsApp: +27 60 946 2930"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "General Inquiries: info@nmwatertesting.co.za",
        "Sample Results: info@nmwatertesting.co.za",
        "Quotes & Pricing: info@nmwatertesting.co.za"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 8:00 AM - 1:00 PM (Sample drop-off only)",
        "Sunday: Closed",
        "Emergency Testing: Contact via WhatsApp"
      ]
    }
  ];

  const serviceAreas = [
    "Johannesburg Metropolitan Area",
    "Gauteng Province",
    "Nationwide courier services available",
    "Collection services for large-volume clients"
  ];

  const dropOffInstructions = [
    "Prepare samples following our collection guide",
    "Complete sample submission form (available online or at lab)",
    "Bring identification for new clients",
    "Payment methods - Cash, EFT, company accounts welcome",
    "Parking available - Secure visitor parking on-site"
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
              Ready to Test Your Water? Contact Us Today
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Fast, reliable, and affordable water testing services. Multiple ways to reach us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Choose the most convenient way to contact us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-black">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-medium-gray">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
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
                Get a Free Quote
              </h2>
              <p className="text-lg text-medium-gray mb-8">
                Fill out the form below and we'll get back to you with a customized quote for your water testing needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-2">
                    Water Source
                  </label>
                  <select
                    name="waterSource"
                    value={formData.waterSource}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                  >
                    <option value="">Select Water Source</option>
                    <option value="tap">Tap Water</option>
                    <option value="borehole">Borehole</option>
                    <option value="surface">Surface Water</option>
                    <option value="pool">Pool/Spa</option>
                    <option value="industrial">Industrial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-3">
                    Testing Required
                  </label>
                  <div className="space-y-2">
                    {['Microbiological', 'Chemical', 'Physical', 'Full Analysis'].map((test) => (
                      <label key={test} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name={test.toLowerCase().replace(' ', '')}
                          checked={formData.testingRequired.includes(test.toLowerCase().replace(' ', ''))}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-royal-blue border-gray-300 rounded focus:ring-royal-blue"
                        />
                        <span className="text-medium-gray">{test}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="urgentTesting"
                      checked={formData.urgentTesting}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-royal-blue border-gray-300 rounded focus:ring-royal-blue"
                    />
                    <span className="text-medium-gray">Urgent Testing Required</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-black mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                    placeholder="Any special concerns or observations..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Service Areas */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                  Service Areas
                </h3>
                <p className="text-medium-gray mb-4">We serve clients throughout:</p>
                <ul className="space-y-2">
                  {serviceAreas.map((area, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-royal-blue rounded-full" />
                      <span className="text-medium-gray">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Drop-Off Instructions */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                  Sample Drop-Off Instructions
                </h3>
                <p className="text-medium-gray mb-4">For walk-in sample submissions:</p>
                <ol className="space-y-3">
                  {dropOffInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-royal-blue text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-medium-gray">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Emergency Contact */}
              <div className="card p-8 bg-red-50 border border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800">
                    Emergency Contact
                  </h3>
                </div>
                <p className="text-red-700 mb-4">
                  For urgent water safety concerns:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 font-medium">WhatsApp: +27 60 946 2930</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="text-red-700">Same-day testing available for critical situations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span className="text-red-700">After-hours consultation for emergency situations</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
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
              Map & Directions
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              Find us easily with these directions from major Johannesburg areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                Directions
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-charcoal-black">From Johannesburg CBD</h4>
                    <p className="text-medium-gray">Take M1 North, exit at Grayston Drive</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-charcoal-black">From Sandton</h4>
                    <p className="text-medium-gray">Take M1 South, exit at Grayston Drive</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-charcoal-black">Public Transport</h4>
                    <p className="text-medium-gray">Gautrain bus routes nearby</p>
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
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-light-blue" />
                  <a href="tel:+27609462930" className="text-lg hover:text-light-blue transition-colors">
                    +27 60 946 2930
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-light-blue" />
                  <a href="mailto:info@nmwatertesting.co.za" className="text-lg hover:text-light-blue transition-colors">
                    info@nmwatertesting.co.za
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-light-blue" />
                  <span className="text-lg">WhatsApp: +27 60 946 2930</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
