import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { 
  Menu, 
  X, 
  Mail, 
  ChevronDown,
  TestTube,
  FileText,
  Info,
  Home,
  Droplets
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      icon: <Home className="w-4 h-4" />
    },
    { 
      name: 'Services', 
      path: '/services',
      icon: <TestTube className="w-4 h-4" />,
      dropdown: [
        { name: 'All Services', path: '/services', description: 'Complete overview' },
        { name: 'Drinking Water Testing', path: '/services#drinking', description: 'SANS 241 compliance' },
        { name: 'Industrial Testing', path: '/services#industrial', description: 'Large-scale operations' },
        { name: 'Agricultural Testing', path: '/services#agricultural', description: 'Farm & irrigation' },
        { name: 'Environmental Monitoring', path: '/services#environmental', description: 'Compliance monitoring' }
      ]
    },
    { 
      name: 'Process', 
      path: '/sample-collection',
      icon: <FileText className="w-4 h-4" />,
      dropdown: [
        { name: 'Sample Collection Guide', path: '/sample-collection', description: 'How to collect samples' },
        { name: 'Laboratory Results', path: '/laboratory-results', description: 'View your results' },
        { name: 'Testing Process', path: '/about#process', description: 'Our methodology' }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      icon: <Info className="w-4 h-4" />,
      dropdown: [
        { name: 'Our Story', path: '/about', description: 'Company background' },
        { name: 'Our Team', path: '/about#team', description: 'Meet the experts' },
        { name: 'Laboratory', path: '/about#laboratory', description: 'Our facilities' },
        { name: 'FAQ', path: '/faq', description: 'Common questions' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: <Mail className="w-4 h-4" />
    },
  ];


  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200 transition-all duration-500"
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Desktop Logo - Natural aspect ratio */}
                <div className="hidden sm:block h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-blue transition-all duration-300">
                  <img 
                    src={logo} 
                    alt="NM Water Testing Laboratory" 
                    className="h-full w-auto object-contain"
                  />
                </div>
                
                {/* Mobile Logo - Water drop icon */}
                <div className="sm:hidden w-12 h-12 bg-gradient-to-br from-royal-blue-500 to-water-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue transition-all duration-300">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                
                {/* Floating indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to={item.path}
                        className="flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        <span className={`font-medium transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'text-black' 
                            : 'text-charcoal-800 hover:text-royal-blue-500'
                        }`}>
                          {item.name}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        } text-charcoal-600`} />
                      </Link>
                      
                      {/* Active indicator */}
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeNavItem"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-blue-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          >
                            <div className="p-2">
                              {item.dropdown.map((dropdownItem, index) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-royal-blue-50 transition-all duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-charcoal-800 group-hover:text-royal-blue-500 transition-colors duration-200">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-charcoal-500 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="relative group px-4 py-2"
                    >
                        <span className={`font-medium transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'text-black' 
                            : 'text-charcoal-800 hover:text-royal-blue-500'
                        }`}>
                        {item.name}
                      </span>
                      
                      {/* Active indicator */}
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeNavItem"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-blue-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover indicator */}
                      <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? ''
                          : 'group-hover:bg-royal-blue-50 opacity-0 group-hover:opacity-100'
                      }`} />
                    </Link>
                  )}
                </div>
              ))}
            </div>


            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="btn px-6 py-2 text-sm font-medium rounded-xl transition-all duration-300 bg-royal-blue-600 hover:bg-royal-blue-700 text-white shadow-lg hover:shadow-xl"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl transition-all duration-300 text-charcoal-800 hover:bg-royal-blue-50"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg"
            >
              <div className="container py-6">
                {/* Navigation Links */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                              location.pathname === item.path
                                ? 'text-black'
                                : 'text-charcoal-700 hover:bg-royal-blue-50 hover:text-royal-blue-500'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon}
                              {item.name}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="pl-6 pr-4 py-2 space-y-1">
                                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                    <Link
                                      key={dropdownItem.name}
                                      to={dropdownItem.path}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                      className="block px-3 py-2 rounded-lg text-sm text-charcoal-600 hover:bg-royal-blue-50 hover:text-royal-blue-500 transition-all duration-200"
                                    >
                                      <div className="font-medium">{dropdownItem.name}</div>
                                      <div className="text-xs text-charcoal-400 mt-1">{dropdownItem.description}</div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'text-black'
                              : 'text-charcoal-700 hover:bg-royal-blue-50 hover:text-royal-blue-500'
                          }`}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>


                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="border-t border-gray-200 pt-6"
                >
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <a
                      href="mailto:info@nmwatertesting.co.za"
                      className="flex items-center gap-3 p-3 bg-water-blue-50 rounded-xl text-water-blue-600 font-medium"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Us</span>
                    </a>
                  </div>
                  
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center py-4 text-lg"
                  >
                    Get Your Water Tested
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

    </>
  );
};

export default Navbar;