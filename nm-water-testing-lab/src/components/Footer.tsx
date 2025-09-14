import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Drinking Water Testing', path: '/services' },
      { name: 'Industrial Testing', path: '/services' },
      { name: 'Agricultural Testing', path: '/services' },
      { name: 'Recreational Water', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Quality Assurance', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Sample Collection Guide', path: '/sample-collection' },
      { name: 'Understanding Results', path: '/laboratory-results' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '#' },
    ],
  };

  return (
    <footer className="bg-charcoal-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-royal-blue rounded-full">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">NM Water Testing</h3>
                <p className="text-sm text-gray-300">Laboratory</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional water testing services ensuring safe, sustainable, and compliant water solutions across South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-royal-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-royal-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Unit 10, French Park<br />
                    90 Oxford Street, Ferndale<br />
                    Randburg, 2194
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-royal-blue flex-shrink-0" />
                <a
                  href="tel:+27609462930"
                  className="text-gray-300 hover:text-royal-blue transition-colors"
                >
                  +27 60 946 2930
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-royal-blue flex-shrink-0" />
                <a
                  href="mailto:info@nmwatertesting.co.za"
                  className="text-gray-300 hover:text-royal-blue transition-colors"
                >
                  info@nmwatertesting.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-royal-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon-Fri: 8:00 AM - 5:00 PM<br />
                    Sat: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} NM Water Testing Laboratory. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-royal-blue transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-royal-blue transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
