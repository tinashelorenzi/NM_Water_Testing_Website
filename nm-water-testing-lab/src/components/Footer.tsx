import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  ArrowRight,
  TestTube,
  Shield,
  Award,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      { name: 'Drinking Water Testing', path: '/services' },
      { name: 'Borehole Water Analysis', path: '/services' },
      { name: 'Industrial Testing', path: '/services' },
      { name: 'Pool Water Testing', path: '/services' },
      { name: 'Environmental Monitoring', path: '/services' },
    ],
    company: [
      { name: 'About NM Water', path: '/about' },
      { name: 'Our Laboratory', path: '/about' },
      { name: 'Quality Assurance', path: '/about' },
      { name: 'SANAS Accreditation', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
    resources: [
      { name: 'Sample Collection Guide', path: '/sample-collection' },
      { name: 'Understanding Results', path: '/laboratory-results' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Water Quality Standards', path: '/laboratory-results' },
      { name: 'Request Quote', path: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#' },
  ];

  const quickStats = [
    { icon: <TestTube className="w-5 h-5" />, value: '1000+', label: 'Tests Completed' },
    { icon: <Shield className="w-5 h-5" />, value: '100%', label: 'Quality Assured' },
    { icon: <Award className="w-5 h-5" />, value: '3-5', label: 'Days Turnaround' },
    { icon: <Star className="w-5 h-5" />, value: '24/7', label: 'Support Available' },
  ];

  return (
    <footer className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white">
      {/* Main Footer Content */}
      <div className="container section-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Company Info & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Logo & Description */}
            <div className="mb-8">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-blue transition-all duration-300"
                >
                  <img 
                    src={logo} 
                    alt="NM Water Testing Laboratory" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Professional water testing services ensuring safe, sustainable, and compliant water solutions across South Africa. State-of-the-art laboratory with SANAS-ready quality assurance.
              </p>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl"
                >
                  Get Water Tested
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+27609462930"
                  className="btn-outline inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl border-2 border-royal-blue-400 text-royal-blue-400 hover:bg-royal-blue-400 hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 mr-2">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 hover:bg-royal-blue-500 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      {social.icon}
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2 text-royal-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <TestTube className="w-5 h-5 text-royal-blue-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerSections.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-royal-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-royal-blue-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-royal-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-royal-blue-400" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-royal-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Unit 10, French Park<br />
                    90 Oxford Street, Ferndale<br />
                    Johannesburg, 2194<br />
                    South Africa
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+27609462930"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-royal-blue-500 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-royal-blue-500 group-hover:bg-white rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white group-hover:text-royal-blue-500" />
                </div>
                <div>
                  <div className="text-white font-medium">+27 60 946 2930</div>
                  <div className="text-gray-400 text-xs">Call for immediate assistance</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27609462930"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-green-500 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500 group-hover:bg-white rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white group-hover:text-green-500" />
                </div>
                <div>
                  <div className="text-white font-medium">WhatsApp Chat</div>
                  <div className="text-gray-400 text-xs">Quick response guaranteed</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@nmwatertesting.co.za"
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-water-blue-500 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-water-blue-500 group-hover:bg-white rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white group-hover:text-water-blue-500" />
                </div>
                <div>
                  <div className="text-white font-medium">info@nmwatertesting.co.za</div>
                  <div className="text-gray-400 text-xs">Email for detailed inquiries</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Operating Hours</div>
                  <div className="text-gray-400 text-sm">
                    <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                    <div>Emergency testing: 24/7 available</div>
                    <div>Weekend appointments by arrangement</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter & Resources Section */}
      <div className="border-t border-white/10">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 text-white">Stay Informed</h4>
              <p className="text-gray-300 mb-6">
                Get water quality tips, testing reminders, and laboratory updates delivered to your inbox.
              </p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 rounded-xl"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-royal-blue-400" />
                Helpful Resources
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {footerSections.resources.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-royal-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certifications & Accreditations */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h5 className="text-lg font-bold mb-6 text-white">Quality Assurance & Certifications</h5>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* SANAS Badge */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl">
                <Award className="w-6 h-6 text-royal-blue-400" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">SANAS</div>
                  <div className="text-gray-400 text-xs">Accreditation Ready</div>
                </div>
              </div>
              
              {/* ISO Standards */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl">
                <Shield className="w-6 h-6 text-green-400" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">ISO Standards</div>
                  <div className="text-gray-400 text-xs">Quality Compliant</div>
                </div>
              </div>
              
              {/* Laboratory Grade */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl">
                <TestTube className="w-6 h-6 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">Laboratory Grade</div>
                  <div className="text-gray-400 text-xs">Professional Equipment</div>
                </div>
              </div>
              
              {/* 24/7 Support */}
              <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl">
                <Clock className="w-6 h-6 text-orange-400" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">24/7 Support</div>
                  <div className="text-gray-400 text-xs">Emergency Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>© {currentYear} NM Water Testing Laboratory. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <p>Professional water testing services across South Africa</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                to="#" 
                className="text-gray-400 hover:text-royal-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="#" 
                className="text-gray-400 hover:text-royal-blue-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                to="#" 
                className="text-gray-400 hover:text-royal-blue-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Laboratory Online</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 hover:from-royal-blue-600 hover:to-water-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default Footer;