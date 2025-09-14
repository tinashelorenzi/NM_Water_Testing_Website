import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  CreditCard
} from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Testing Questions",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          question: "How long do test results take?",
          answer: "Standard testing takes 3-5 business days. Rush service (24-48 hours) is available for urgent needs at an additional cost. Complex analyses may require 5-7 business days."
        },
        {
          question: "How much does water testing cost?",
          answer: "Costs vary by testing requirements. Basic microbiological testing starts at competitive rates, while comprehensive analysis packages offer better value. Contact us for a customized quote."
        },
        {
          question: "Do you provide sample containers?",
          answer: "Yes, we provide clean, appropriate containers for all testing types. Sterile containers for microbiological testing are available at no additional charge."
        },
        {
          question: "Can I get same-day results?",
          answer: "Same-day results may be available for basic parameters during business hours. Contact us by 10 AM for same-day service possibilities."
        }
      ]
    },
    {
      title: "Sample Collection",
      icon: <Droplets className="w-6 h-6" />,
      questions: [
        {
          question: "How do I collect a water sample properly?",
          answer: "Follow our detailed Sample Collection Guide. Key points: use clean containers, flush systems before sampling, avoid contamination, and transport samples quickly."
        },
        {
          question: "How much water do I need to provide?",
          answer: "Generally, 1-2 liters is sufficient for most testing. Specific volumes depend on the parameters being tested. We'll specify requirements when you book."
        },
        {
          question: "How long can I store a sample before testing?",
          answer: "Samples should be tested within 24 hours of collection for best results. Some parameters are more time-sensitive than others. Keep samples cool but not frozen."
        },
        {
          question: "Can I use any container for sampling?",
          answer: "No, different tests require specific containers. We provide appropriate containers for each test type to ensure accurate results."
        }
      ]
    },
    {
      title: "Understanding Results",
      icon: <FileText className="w-6 h-6" />,
      questions: [
        {
          question: "What do my test results mean?",
          answer: "We provide clear, easy-to-understand reports with explanations. Results are compared against relevant standards (SANS 241, WHO guidelines) with compliance status clearly indicated."
        },
        {
          question: "What should I do if my water fails testing?",
          answer: "Don't panic. We provide recommendations based on specific issues found. Actions range from simple treatment to professional remediation, depending on the problem."
        },
        {
          question: "How often should I test my water?",
          answer: "Frequency depends on your water source: Municipal water annually, borehole water every 6 months, pool water monthly during use season, industrial discharge as required by regulations."
        },
        {
          question: "Can you explain the technical terms in my report?",
          answer: "Absolutely. We're happy to explain any technical aspects of your results. Our team can walk you through the report and answer questions."
        }
      ]
    },
    {
      title: "Service-Specific Questions",
      icon: <Building className="w-6 h-6" />,
      questions: [
        {
          question: "Do you test pool water?",
          answer: "Yes, we test recreational water including pools, spas, and hot tubs for chemical balance, bacteria, and safety parameters."
        },
        {
          question: "Can you test my borehole water?",
          answer: "Yes, we specialize in groundwater testing including mineral content, bacterial contamination, and compliance with drinking water standards."
        },
        {
          question: "Do you offer testing for businesses?",
          answer: "Yes, we serve municipalities, industries, farms, schools, hospitals, and other commercial clients with flexible service plans and volume discounts."
        },
        {
          question: "Can you help with regulatory compliance?",
          answer: "Yes, we understand South African water quality regulations and can help ensure your water meets required standards for your specific use."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: <Microscope className="w-6 h-6" />,
      questions: [
        {
          question: "Are you accredited?",
          answer: "We are currently working toward SANAS accreditation and following all international quality standards. Our methods are tried and tested with regular validation."
        },
        {
          question: "What equipment do you use?",
          answer: "We use advanced equipment including ICP-OES for metals analysis, UV spectrophotometers, modern filtration systems, and other professional-grade instruments."
        },
        {
          question: "Do you test for specific contaminants?",
          answer: "Yes, we can test for a wide range of specific contaminants including heavy metals, bacteria, chemical compounds, and physical parameters."
        },
        {
          question: "Can you test water from anywhere in South Africa?",
          answer: "Yes, we accept samples from across the country via courier services. We also offer collection services for larger clients."
        }
      ]
    },
    {
      title: "Billing & Administrative",
      icon: <CreditCard className="w-6 h-6" />,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, EFT, credit cards, and can set up accounts for regular business clients."
        },
        {
          question: "Do you provide certificates?",
          answer: "Yes, all results come with official laboratory reports suitable for regulatory compliance, insurance claims, or other official purposes."
        },
        {
          question: "Can I get historical records of my tests?",
          answer: "Yes, we maintain records of all testing and can provide historical data upon request."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, regular clients and high-volume testing receive preferential pricing. Contact us to discuss your specific needs."
        }
      ]
    }
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our water testing services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal-black">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left bg-white hover:bg-light-gray transition-colors duration-200 flex items-center justify-between"
                        >
                          <span className="font-semibold text-charcoal-black pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-royal-blue" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-royal-blue" />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 py-4 bg-light-gray border-t border-gray-200">
                                <p className="text-medium-gray leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-medium-gray mb-8 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any questions about water testing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-black mb-2">
                  Call Us
                </h3>
                <p className="text-medium-gray mb-4">
                  Speak directly with our experts
                </p>
                <a
                  href="tel:+27609462930"
                  className="text-royal-blue hover:text-blue-700 font-medium"
                >
                  +27 60 946 2930
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <Droplets className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-black mb-2">
                  WhatsApp
                </h3>
                <p className="text-medium-gray mb-4">
                  Quick responses for urgent queries
                </p>
                <a
                  href="https://wa.me/27609462930"
                  className="text-royal-blue hover:text-blue-700 font-medium"
                >
                  +27 60 946 2930
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-royal-blue bg-opacity-10 rounded-full text-royal-blue">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-black mb-2">
                  Email Us
                </h3>
                <p className="text-medium-gray mb-4">
                  Detailed questions and quotes
                </p>
                <a
                  href="mailto:info@nmwatertesting.co.za"
                  className="text-royal-blue hover:text-blue-700 font-medium"
                >
                  info@nmwatertesting.co.za
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
