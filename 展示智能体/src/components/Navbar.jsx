import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ toggleChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '背景与意义', href: '#background' },
    { name: '需求分析', href: '#requirements' },
    { name: '核心技术', href: '#technologies' },
    { name: '创新点', href: '#innovation' },
    { name: '未来方向', href: '#future' },
    { name: '方案设计', href: '#diagram' },
    { name: '工作原理', href: '#principle' },
    { name: '灵感来源', href: '#inspirations' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-purple via-blue to-cyan bg-clip-text text-transparent">
          智能体集群助手---创新展示
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {link.name}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple to-cyan"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
          {/* AI Chat Button - Striking */}
          <button
            onClick={toggleChat}
            className="flex items-center space-x-2 bg-gradient-to-r from-pink to-blue hover:from-pink/90 hover:to-blue/90 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400"
          >
            <i className="fa fa-comments-o text-lg"></i>
            <span className="font-bold">AI 聊天</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  scrollToSection(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleChat();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink to-blue hover:from-pink/90 hover:to-blue/90 text-white px-4 py-3 rounded-xl shadow-md mt-2 border-2 border-yellow-400"
            >
              <i className="fa fa-comments-o"></i>
              <span className="font-bold">AI 聊天</span>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;