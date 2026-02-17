import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToContent }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple via-blue to-cyan animate-gradient-shift">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink rounded-full blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple rounded-full blur-3xl opacity-40 animate-float-alt" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gold rounded-full blur-3xl opacity-30 animate-float-alt" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="w-28 h-28 mx-auto bg-gradient-to-br from-pink to-purple rounded-2xl flex items-center justify-center shadow-2xl glow-purple animate-pulse-glow">
            <i className="fa fa-cubes text-white text-5xl"></i>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          智能体集群助手：下一代 AI 协作范式
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          基于智谱 GLM-5 / Kimi K2.5 的创新探索
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToContent}
            className="bg-white text-purple hover:bg-purple-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-3xl glow-pink-hover card-hover"
          >
            <i className="fa fa-rocket mr-2"></i>开始探索
          </button>
          <button
            onClick={() => document.getElementById('chat-window').classList.toggle('translate-x-full')}
            className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 px-10 py-4 rounded-xl font-bold text-lg transition-all"
          >
            <i className="fa fa-comments mr-2"></i>AI聊天
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
