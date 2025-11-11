import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, GraduationCap, Mail, Sparkles } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What are the admission requirements for fashion design programs?",
      answer: "Applicants are expected to have at least a basic school certificate or high school certificate, along with the ability to read and write. A creative interest or basic portfolio is an advantage, but not mandatory.",
      category: "admissions",
      icon: BookOpen
    },

    {
      id: 3,
      question: "What makes your fashion school different from others?",
      answer: "We combine traditional craftsmanship with digital innovation, offering state-of-the-art facilities  digital pattern making, and industry partnerships with leading fashion houses. Our curriculum is taught by active industry professionals.",
      category: 'general',
      icon: Sparkles
    },
    {
      id: 4,
      question: "Can international students apply?",
      answer: "Absolutely! We welcome students from all over the world. We provide dedicated international student support, housing help, and language support programs. Our diverse community enriches the creative environment.",
      category: 'admissions',
      icon: Users
    },
    {
      id: 5,
      question: "What career support do you provide after graduation?",
      answer: "Our career services include portfolio reviews, industry networking events, internship placements with partner companies, and direct recruitment opportunities. We maintain a 80% employment rate within 6 months of graduation.",
      category: 'career',
      icon: GraduationCap
    },
    {
      id: 6,
      question: "How long are the typical programs?",
      answer: "We offer flexible program lengths: Certificate programs  (2 years) for CTVET CERTIFICATION. ",
      category: 'programs',
      icon: BookOpen
    },
    {
      id: 7,
      question: "Do I need prior fashion experience to apply?",
      answer: "While prior experience is beneficial, it's not mandatory for all programs. We look for creativity, passion, and potential. Our foundation courses are designed to bring beginners up to speed, while advanced programs require demonstrated skills.",
      category: 'admissions',
      icon: HelpCircle
    },
    {
      id: 8,
      question: "What facilities and equipment are available to students?",
      answer: "Students have access to professional sewing labs, pattern-making studios, textile libraries,  photography studios, and a materials library. All facilities are available 24/7 during critical project periods.",
      category: 'facilities',
      icon: Users
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length },
    { id: 'admissions', name: 'Admissions', count: faqData.filter(item => item.category === 'admissions').length },
    { id: 'programs', name: 'Programs', count: faqData.filter(item => item.category === 'programs').length },
    { id: 'career', name: 'Career', count: faqData.filter(item => item.category === 'career').length },
    { id: 'facilities', name: 'Facilities', count: faqData.filter(item => item.category === 'facilities').length }
  ];

  const filteredFAQs = activeCategory === 'all'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-linear-to-b from-blue-50 via-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about admissions, programs, financial aid,
            and student life at our fashion institute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:bg-blue-50 hover:shadow-md border border-transparent hover:border-blue-200'
                      }`}
                  >
                    <span className="font-medium text-sm">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-100 text-blue-700'
                      }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-4 bg-linear-to-br from-blue-600 to-blue-800 rounded-xl text-white shadow-lg">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-2">Still have questions?</h4>
                <p className="text-sm text-blue-100 mb-4">
                  Our admissions team is here to help you.
                </p>
                <button className="w-full bg-white text-blue-600 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors shadow-md">
                  Contact Admissions
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFAQs.map((item) => {
                const IconComponent = item.icon;
                const isOpen = openItems.has(item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-200 overflow-hidden group hover:border-blue-200"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50/30 transition-colors duration-200 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1 transition-colors ${isOpen
                            ? 'bg-linear-to-br from-blue-600 to-blue-800 text-white shadow-lg'
                            : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                          }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg leading-tight pr-8 group-hover:text-blue-900 transition-colors">
                            {item.question}
                          </h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full capitalize transition-colors ${isOpen
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                              }`}>
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}>
                      <div className="px-6 pb-6 ml-14 border-t border-blue-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still Have Questions */}
            <div className="mt-12 text-center">
              <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-white">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Still have questions?
                </h3>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  Can't find the answer you're looking for? Our admissions team is ready to help you start your fashion journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                    <Mail className="w-5 h-5" />
                    <span>Contact Admissions</span>
                  </button>
                 
                </div>
                <p className="text-blue-200 text-sm mt-6">
                  📞 Call us directly: 233 557612426
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;