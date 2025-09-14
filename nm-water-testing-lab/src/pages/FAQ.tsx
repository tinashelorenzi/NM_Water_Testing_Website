import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  DollarSign,
  Droplets,
  FileText,
  Shield,
  Building,
  Microscope,
  CreditCard,
  Search,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      id: 'general',
      title: "General Testing Questions",
      icon: <HelpCircle className="w-6 h-6" />,
      color: "from-royal-blue-500 to-royal-blue-600",
      questions: [
        {
          question: "How long do test results take?",
          answer: "Standard testing takes 3-5 business days from sample receipt. Rush service (24-48 hours) is available for urgent needs at an additional cost. Complex analyses may require 5-7 business days. We'll provide an estimated completion time when you submit your sample.",
          tags: ["timing", "results", "turnaround"]
        },
        {
          question: "How much does water testing cost?",
          answer: "Costs vary by testing requirements. Basic microbiological testing starts at competitive rates, while comprehensive analysis packages offer better value. We provide transparent pricing with no hidden fees. Contact us for a customized quote based on your specific needs.",
          tags: ["cost", "pricing", "quote"]
        },
        {
          question: "Do you provide sample containers?",
          answer: "Yes, we provide clean, appropriate containers for all testing types at no additional charge. Sterile containers for microbiological testing are specially prepared. We can deliver containers to your location or you can collect them from our laboratory.",
          tags: ["containers", "sampling", "collection"]
        },
        {
          question: "Can I get same-day results?",
          answer: "Same-day results may be available for basic parameters during business hours. Contact us by 10 AM for same-day service possibilities. This service is subject to laboratory capacity and may incur additional charges.",
          tags: ["urgent", "same-day", "rush"]
        }
      ]
    },
    {
      id: 'collection',
      title: "Sample Collection",
      icon: <Droplets className="w-6 h-6" />,
      color: "from-water-blue-500 to-blue-600",
      questions: [
        {
          question: "How do I collect a water sample properly?",
          answer: "Follow our detailed Sample Collection Guide available on our website. Key points: use clean containers provided by us, flush systems before sampling, avoid contamination, and transport samples quickly. Different water sources require specific collection techniques.",
          tags: ["collection", "sampling", "procedure"]
        },
        {
          question: "How much water do I need to provide?",
          answer: "Generally, 1-2 liters is sufficient for most comprehensive testing. Specific volumes depend on the parameters being tested. We'll specify exact requirements when you book your test, including any special containers needed.",
          tags: ["volume", "sample size", "requirements"]
        },
        {
          question: "How long can I store a sample before testing?",
          answer: "Samples should be tested within 24 hours of collection for best results. Some parameters like microbiological testing are more time-sensitive. Keep samples cool (4°C) but not frozen. We recommend immediate delivery for most accurate results.",
          tags: ["storage", "timing", "preservation"]
        },
        {
          question: "Can I use any container for sampling?",
          answer: "No, different tests require specific containers to prevent contamination and ensure accurate results. We provide appropriate sterile containers for each test type. Using incorrect containers can compromise your results and require re-sampling.",
          tags: ["containers", "sterile", "contamination"]
        }
      ]
    },
    {
      id: 'results',
      title: "Understanding Results",
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      questions: [
        {
          question: "What do my test results mean?",
          answer: "We provide clear, easy-to-understand reports with explanations and health implications. Results are compared against relevant standards (SANS 241, WHO guidelines) with compliance status clearly indicated. Color-coded results show pass/fail status at a glance.",
          tags: ["interpretation", "standards", "compliance"]
        },
        {
          question: "What should I do if my water fails testing?",
          answer: "Don't panic. We provide specific recommendations based on the issues found. Actions range from simple treatment solutions to professional remediation. We can recommend certified water treatment specialists and provide guidance on next steps.",
          tags: ["failed test", "treatment", "recommendations"]
        },
        {
          question: "How often should I test my water?",
          answer: "Testing frequency depends on your water source: Municipal water annually, borehole water every 6 months, pool water monthly during use season, industrial discharge as required by regulations. We can set up reminder schedules for regular clients.",
          tags: ["frequency", "schedule", "monitoring"]
        },
        {
          question: "Can you explain the technical terms in my report?",
          answer: "Absolutely! Our team is happy to explain any technical aspects of your results. We can walk you through the report, explain what each parameter means, and discuss any health or safety implications. Free consultation is included with all testing.",
          tags: ["explanation", "technical", "consultation"]
        }
      ]
    },
    {
      id: 'services',
      title: "Service-Specific Questions",
      icon: <Building className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          question: "Do you test pool water?",
          answer: "Yes, we provide comprehensive recreational water testing including pools, spas, and hot tubs. We test for chemical balance, bacterial contamination, and all safety parameters required for safe swimming. Regular pool testing ensures compliance with health regulations.",
          tags: ["pool", "recreational", "swimming"]
        },
        {
          question: "Can you test my borehole water?",
          answer: "Yes, we specialize in groundwater testing including comprehensive mineral content analysis, bacterial contamination detection, and compliance with drinking water standards. We understand the unique challenges of borehole water quality.",
          tags: ["borehole", "groundwater", "minerals"]
        },
        {
          question: "Do you offer testing for businesses?",
          answer: "Yes, we serve municipalities, industries, farms, schools, hospitals, and other commercial clients. We offer flexible service plans, volume discounts, regular monitoring contracts, and dedicated account management for business clients.",
          tags: ["business", "commercial", "contracts"]
        },
        {
          question: "Can you help with regulatory compliance?",
          answer: "Absolutely. We understand South African water quality regulations and can help ensure your water meets required standards for your specific use. Our reports are accepted by regulatory bodies and include all necessary compliance documentation.",
          tags: ["compliance", "regulations", "standards"]
        }
      ]
    },
    {
      id: 'technical',
      title: "Technical Questions",
      icon: <Microscope className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      questions: [
        {
          question: "Are you accredited?",
          answer: "We are currently working toward SANAS accreditation and follow all international quality standards. Our methods are tried, tested, and regularly validated. We maintain the highest standards of laboratory quality and technical competence.",
          tags: ["accreditation", "SANAS", "quality"]
        },
        {
          question: "What equipment do you use?",
          answer: "We use advanced professional-grade equipment including ICP-OES for metals analysis, UV spectrophotometers, modern membrane filtration systems, and other state-of-the-art instruments. All equipment is regularly calibrated and maintained to international standards.",
          tags: ["equipment", "technology", "instruments"]
        },
        {
          question: "Do you test for specific contaminants?",
          answer: "Yes, we can test for a comprehensive range of contaminants including heavy metals, bacteria, chemical compounds, and physical parameters. If you have specific concerns about particular contaminants, we can design a targeted testing program.",
          tags: ["contaminants", "specific testing", "targeted"]
        },
        {
          question: "Can you test water from anywhere in South Africa?",
          answer: "Yes, we accept samples from across the country via secure courier services. We also offer collection services for larger clients or regular monitoring contracts. Proper packaging and chain of custody are maintained for all samples.",
          tags: ["nationwide", "courier", "collection"]
        }
      ]
    },
    {
      id: 'billing',
      title: "Billing & Administrative",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-600",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, EFT, credit cards (Visa, Mastercard), and can set up 30-day accounts for regular business clients. Payment is required before sample processing begins, except for established account holders.",
          tags: ["payment", "billing", "accounts"]
        },
        {
          question: "Do you provide certificates?",
          answer: "Yes, all results come with official laboratory reports suitable for regulatory compliance, insurance claims, legal proceedings, or other official purposes. Reports include our laboratory accreditation details and authorized signatures.",
          tags: ["certificates", "official reports", "legal"]
        },
        {
          question: "Can I get historical records of my tests?",
          answer: "Yes, we maintain detailed records of all testing for a minimum of 7 years and can provide historical data, trend analysis, and comparative reports upon request. This is particularly valuable for monitoring programs.",
          tags: ["historical", "records", "trends"]
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, regular clients and high-volume testing receive preferential pricing. We offer tiered discounts based on annual volume and can provide special rates for monitoring contracts. Contact us to discuss your specific needs and volume requirements.",
          tags: ["discounts", "volume", "contracts"]
        }
      ]
    }
  ];

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap((category, catIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      categoryId: category.id,
      categoryTitle: category.title,
      categoryColor: category.color,
      globalIndex: catIndex * 1000 + qIndex
    }))
  );

  // Filter questions based on search and category
  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = searchTerm === '' || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || q.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Questions', count: allQuestions.length },
    ...faqCategories.map(cat => ({
      id: cat.id,
      name: cat.title,
      count: cat.questions.length
    }))
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
              💡 Frequently Asked Questions
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white"
            >
              Got Questions?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                We Have Answers
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl mb-12 text-blue-50 leading-relaxed max-w-3xl mx-auto"
            >
              Find answers to common questions about our water testing services, processes, and results interpretation.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{allQuestions.length}</div>
                <div className="text-sm text-blue-100">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{faqCategories.length}</div>
                <div className="text-sm text-blue-100">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-100">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3-5</div>
                <div className="text-sm text-blue-100">Days TAT</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions, answers, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-royal-blue-500 focus:border-transparent transition-all duration-300 shadow-soft"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-royal-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Results Count */}
            {searchTerm && (
              <div className="mt-6 text-center text-gray-600">
                Found {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''} 
                {searchTerm && ` matching "${searchTerm}"`}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {selectedCategory === 'all' && !searchTerm ? (
              // Category-based layout
              <div className="space-y-12">
                {faqCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass"
                  >
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`icon-container-lg bg-gradient-to-br ${category.color} text-white`}>
                          {category.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-800">
                            {category.title}
                          </h2>
                          <p className="text-charcoal-600">
                            {category.questions.length} question{category.questions.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {category.questions.map((faq, questionIndex) => {
                          const globalIndex = categoryIndex * 1000 + questionIndex;
                          const isOpen = openItems.includes(globalIndex);
                          
                          return (
                            <motion.div
                              key={questionIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all duration-300"
                            >
                              <button
                                onClick={() => toggleItem(globalIndex)}
                                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                              >
                                <span className="font-semibold text-charcoal-800 pr-4 text-lg">
                                  {faq.question}
                                </span>
                                <div className="flex-shrink-0">
                                  <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-8 h-8 bg-royal-blue-100 rounded-lg flex items-center justify-center text-royal-blue-600"
                                  >
                                    <ChevronDown className="w-5 h-5" />
                                  </motion.div>
                                </div>
                              </button>
                              
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                  >
                                    <div className="px-6 pb-6 border-t border-gray-100 bg-gradient-to-r from-royal-blue-50/50 to-water-blue-50/50">
                                      <div className="pt-4">
                                        <p className="text-charcoal-700 leading-relaxed mb-4">
                                          {faq.answer}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                          {faq.tags.map((tag) => (
                                            <span
                                              key={tag}
                                              className="inline-flex items-center px-2 py-1 bg-royal-blue-100 text-royal-blue-700 rounded-lg text-xs font-medium"
                                            >
                                              {tag}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Search results or single category layout
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {filteredQuestions.map((faq, index) => {
                    const isOpen = openItems.includes(faq.globalIndex);
                    
                    return (
                      <motion.div
                        key={faq.globalIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 p-6">
                          <div className={`w-12 h-12 bg-gradient-to-br ${faq.categoryColor} rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1`}>
                            <HelpCircle className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="text-xs text-royal-blue-600 font-medium mb-2">
                                  {faq.categoryTitle}
                                </div>
                                <button
                                  onClick={() => toggleItem(faq.globalIndex)}
                                  className="text-left w-full"
                                >
                                  <h3 className="text-lg font-semibold text-charcoal-800 hover:text-royal-blue-600 transition-colors duration-200">
                                    {faq.question}
                                  </h3>
                                </button>
                              </div>
                              <button
                                onClick={() => toggleItem(faq.globalIndex)}
                                className="w-8 h-8 bg-gray-100 hover:bg-royal-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-royal-blue-600 transition-all duration-200 flex-shrink-0"
                              >
                                <motion.div
                                  animate={{ rotate: isOpen ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="w-4 h-4" />
                                </motion.div>
                              </button>
                            </div>
                            
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-4 border-t border-gray-100 mt-4">
                                    <p className="text-charcoal-700 leading-relaxed mb-4">
                                      {faq.answer}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {faq.tags.map((tag) => (
                                        <span
                                          key={tag}
                                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                
                {filteredQuestions.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal-800 mb-2">No questions found</h3>
                    <p className="text-charcoal-600 mb-6">Try adjusting your search terms or category filter</p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="btn-outline"
                    >
                      Clear Filters
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section bg-gradient-to-br from-royal-blue-600 to-water-blue-600 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Still Have Questions?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-50 max-w-2xl mx-auto"
            >
              Our expert team is here to help with any questions about water testing, sample collection, or understanding your results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="tel:+27609462930"
                className="block p-8 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/15 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-blue-100 mb-4">Speak directly with our experts</p>
                <p className="font-semibold">+27 60 946 2930</p>
                <p className="text-sm text-blue-200">Mon-Fri: 8AM-5PM</p>
              </a>
            </motion.div>

            {/* WhatsApp Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href="https://wa.me/27609462930"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/15 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp Chat</h3>
                <p className="text-blue-100 mb-4">Quick questions and instant replies</p>
                <p className="font-semibold">+27 60 946 2930</p>
                <p className="text-sm text-blue-200">Usually responds within minutes</p>
              </a>
            </motion.div>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:info@nmwatertesting.co.za"
                className="block p-8 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/15 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-blue-100 mb-4">Detailed questions and documentation</p>
                <p className="font-semibold text-sm">info@nmwatertesting.co.za</p>
                <p className="text-sm text-blue-200">Response within 24 hours</p>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Helpful Resources Section */}
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
              Helpful Resources
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Learn more about water testing with our comprehensive guides and resources
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
                    <Droplets className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Sample Collection Guide
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Step-by-step instructions for proper water sample collection to ensure accurate results.
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            {/* Understanding Results */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/laboratory-results" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                  Understanding Results
                </h3>
                <p className="text-charcoal-600 mb-6 leading-relaxed">
                  Decode your lab reports and understand what your water test results mean for your health.
                </p>
                <div className="flex items-center justify-center text-royal-blue-600 font-medium group-hover:text-royal-blue-700 transition-colors duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>

            {/* Get Water Tested */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="card p-8 text-center group hover:shadow-hard transition-all duration-500 block h-full bg-gradient-to-br from-royal-blue-500 to-water-blue-500 text-white border-0">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Get Your Water Tested
                </h3>
                <p className="text-blue-50 mb-6 leading-relaxed">
                  Ready to test your water? Contact us today for professional testing services.
                </p>
                <div className="flex items-center justify-center text-white font-medium">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
              Quick Tips
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Essential things to know about water testing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tip Cards */}
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Test Regularly",
                description: "Test municipal water annually, borehole water every 6 months",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "Proper Sampling",
                description: "Use our sterile containers and follow collection guidelines",
                color: "from-teal-500 to-cyan-600"
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Act on Results",
                description: "Don't ignore failed tests - we'll help you find solutions",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: <Info className="w-6 h-6" />,
                title: "Ask Questions",
                description: "Free consultation included with every test result",
                color: "from-green-500 to-emerald-600"
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {tip.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-charcoal-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;