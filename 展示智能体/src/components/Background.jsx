import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const significancePoints = [
    {
      icon: 'fa-bolt',
      title: '提升任务处理效率',
      description: '通过多智能体并行处理，大幅缩短复杂任务的完成时间',
      color: 'from-purple to-blue',
      bgGradient: 'gradient-purple-light'
    },
    {
      icon: 'fa-users',
      title: '增强复杂问题解决能力',
      description: '不同智能体专注于各自擅长的领域，协同解决跨领域复杂问题',
      color: 'from-blue to-cyan',
      bgGradient: 'gradient-blue-light'
    },
    {
      icon: 'fa-cogs',
      title: '优化资源利用',
      description: '通过智能任务分配，避免资源浪费，提高系统整体利用率',
      color: 'from-cyan to-pink',
      bgGradient: 'gradient-cyan-light'
    },
    {
      icon: 'fa-shield',
      title: '提升系统容错能力',
      description: '单个智能体故障不影响整体运行，系统具备自动恢复能力',
      color: 'from-pink to-gold',
      bgGradient: 'gradient-pink-light'
    }
  ];

  return (
    <section id="background" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple/10 to-blue/10 px-4 py-2 rounded-full mb-4">
              <i className="fa fa-lightbulb-o text-purple"></i>
              <span className="text-sm font-medium text-purple">技术背景</span>
            </div>
            <h2 className="section-title">设计背景与意义</h2>
            <p className="section-subtitle">
              探索智能体集群助手的发展背景与核心价值
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-blue rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fa fa-rocket text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent">
                  AI 智能体发展现状
                </h3>
              </div>
              <div className={`${significancePoints[0].bgGradient} rounded-2xl p-6 shadow-lg border border-purple/20`}>
                <p className="text-gray-700 leading-relaxed mb-4">
                  随着人工智能技术的飞速发展，单一智能体已经无法满足复杂任务的需求。传统的单智能体系统在处理多维度、跨领域的复杂问题时，往往面临计算资源不足、响应速度慢、适应性差等挑战。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  智能体集群技术的出现，为解决这些挑战提供了新的思路。通过多个智能体的协同工作，可以实现任务的并行处理、资源的优化分配、以及系统的容错能力提升。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <i className="fa fa-star text-gold"></i>
                核心价值
              </h3>
              <div className="space-y-4">
                {significancePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className={`${point.bgGradient} rounded-2xl p-5 shadow-md border border-gray-100 card-hover`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                        <i className={`fa ${point.icon} text-white text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-1">{point.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple/30 to-blue/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-cyan/30 to-pink/30 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl overflow-hidden border border-gray-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple/5 to-blue/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan/5 to-pink/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple/10 to-blue/10 px-4 py-2 rounded-full mb-4">
                      <i className="fa fa-cube text-purple"></i>
                      <span className="text-sm font-medium text-purple">智能体集群架构</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple to-blue bg-clip-text text-transparent mb-2">三层协同架构</h3>
                    <p className="text-gray-500 text-sm">协调层·执行层·资源层，三层协同工作</p>
                  </div>

                  <div className="relative mb-8">
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-purple/10 to-blue/10 rounded-2xl p-5 border border-purple/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple to-blue rounded-xl flex items-center justify-center shadow-lg animate-float">
                            <i className="fa fa-sitemap text-white text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">协调层</h4>
                            <p className="text-sm text-gray-600">任务分配·状态同步·资源调度</p>
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex justify-center">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-purple to-cyan"></div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-blue/10 to-cyan/10 rounded-2xl p-5 border border-blue/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue to-cyan rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
                            <i className="fa fa-cogs text-white text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">执行层</h4>
                            <p className="text-sm text-gray-600">数据处理·决策·通信·监控·学习</p>
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex justify-center">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-cyan to-pink"></div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-cyan/10 to-pink/10 rounded-2xl p-5 border border-cyan/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-cyan to-pink rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.4s' }}>
                            <i className="fa fa-server text-white text-xl"></i>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">资源层</h4>
                            <p className="text-sm text-gray-600">计算·存储·网络·数据库·API</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-r from-purple/5 via-blue/5 to-cyan/5 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-600">系统运行状态</span>
                      </div>
                      <span className="font-bold text-green-600">正常</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Background;
