import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'Sample Collection', path: '/sample-collection' },
    { name: 'Laboratory Results', path: '/laboratory-results' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center w-12 h-12 bg-royal-blue rounded-full"
            >
              <Droplets className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-royal-blue">NM Water Testing</h1>
              <p className="text-xs text-medium-gray">Laboratory</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-royal-blue'
                    : 'text-charcoal-black hover:text-royal-blue'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-royal-blue"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+27609462930"
              className="flex items-center space-x-2 text-royal-blue hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+27 60 946 2930</span>
            </a>
            <a
              href="mailto:info@nmwatertesting.co.za"
              className="flex items-center space-x-2 text-royal-blue hover:text-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal-black hover:bg-light-gray transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-light-gray"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-royal-blue bg-light-blue bg-opacity-20'
                          : 'text-charcoal-black hover:text-royal-blue hover:bg-light-gray'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 py-3 border-t border-light-gray">
                  <a
                    href="tel:+27609462930"
                    className="flex items-center space-x-2 text-royal-blue mb-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+27 60 946 2930</span>
                  </a>
                  <a
                    href="mailto:info@nmwatertesting.co.za"
                    className="flex items-center space-x-2 text-royal-blue"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@nmwatertesting.co.za</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
