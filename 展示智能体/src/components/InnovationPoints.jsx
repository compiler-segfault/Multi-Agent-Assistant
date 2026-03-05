import React from 'react';
import { motion } from 'framer-motion';

const InnovationPoints = () => {
  return (
    <section id="innovation" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">创新点与逻辑</h2>
            <p className="section-subtitle">
              从单点智能到集群协作的范式转变，以及智能体集群助手的核心创新点
            </p>
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-12 text-center text-gray-800">
              <i className="fa fa-history text-purple mr-3"></i>
              创新逻辑演进
            </h3>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-purple via-blue to-cyan rounded-full"></div>
            
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0 }}
                className="relative flex items-center flex-row"
              >
                <div className="w-5/12 pr-10 text-right">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-purple/10 to-blue/10 rounded-2xl shadow-xl border border-gray-100 p-7 card-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-b from-purple to-blue"></div>
                    
                    <div className="flex items-center justify-end mb-4">
                      <span className="px-5 py-2 bg-gradient-to-r from-purple to-blue text-white rounded-full text-sm font-bold shadow-lg">
                        <i className="fa fa-calendar mr-2"></i>
                        2020-2022
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-3">单点智能时代</h4>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">传统AI系统依赖单一模型处理任务，缺乏灵活性与扩展性，难以应对复杂场景。</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="px-4 py-1.5 bg-purple/10 text-purple rounded-full text-xs font-semibold border border-purple/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        计算资源受限
                      </span>
                      <span className="px-4 py-1.5 bg-purple/10 text-purple rounded-full text-xs font-semibold border border-purple/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        任务处理效率低
                      </span>
                      <span className="px-4 py-1.5 bg-purple/10 text-purple rounded-full text-xs font-semibold border border-purple/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        适应性差
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="z-10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-10 h-10 bg-purple rounded-full shadow-2xl border-4 border-white"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-5/12"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative flex items-center flex-row-reverse"
              >
                <div className="w-5/12 pl-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue/10 to-cyan/10 rounded-2xl shadow-xl border border-gray-100 p-7 card-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-blue to-cyan"></div>
                    
                    <div className="flex items-center justify-start mb-4">
                      <span className="px-5 py-2 bg-gradient-to-r from-blue to-cyan text-white rounded-full text-sm font-bold shadow-lg">
                        <i className="fa fa-calendar mr-2"></i>
                        2023-2024
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-3">智能体协作探索</h4>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">随着大模型兴起，开始尝试多个模型的简单组合，实现任务分解与并行处理，开启多智能体协作的初步探索。</p>
                    <div className="flex flex-wrap gap-2 justify-start">
                      <span className="px-4 py-1.5 bg-blue/10 text-blue rounded-full text-xs font-semibold border border-blue/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        任务并行处理
                      </span>
                      <span className="px-4 py-1.5 bg-blue/10 text-blue rounded-full text-xs font-semibold border border-blue/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        初步资源优化
                      </span>
                      <span className="px-4 py-1.5 bg-blue/10 text-blue rounded-full text-xs font-semibold border border-blue/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        简单错误恢复
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="z-10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-10 h-10 bg-blue rounded-full shadow-2xl border-4 border-white"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-5/12"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative flex items-center flex-row"
              >
                <div className="w-5/12 pr-10 text-right">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-cyan/10 to-pink/10 rounded-2xl shadow-xl border border-gray-100 p-7 card-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-b from-cyan to-pink"></div>
                    
                    <div className="flex items-center justify-end mb-4">
                      <span className="px-5 py-2 bg-gradient-to-r from-cyan to-pink text-white rounded-full text-sm font-bold shadow-lg">
                        <i className="fa fa-calendar mr-2"></i>
                        2024-2025
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-3">智能体集群初步</h4>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">构建基础集群架构，多个专业智能体协同工作，引入角色分工、通信协议与任务调度，显著提升复杂任务处理能力。</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="px-4 py-1.5 bg-cyan/10 text-cyan rounded-full text-xs font-semibold border border-cyan/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        基础协同机制
                      </span>
                      <span className="px-4 py-1.5 bg-cyan/10 text-cyan rounded-full text-xs font-semibold border border-cyan/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        资源池化管理
                      </span>
                      <span className="px-4 py-1.5 bg-cyan/10 text-cyan rounded-full text-xs font-semibold border border-cyan/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        初步容错设计
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="z-10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-10 h-10 bg-cyan rounded-full shadow-2xl border-4 border-white"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-5/12"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="relative flex items-center flex-row-reverse"
              >
                <div className="w-5/12 pl-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-pink/10 to-gold/10 rounded-2xl shadow-xl border border-gray-100 p-7 card-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-pink to-gold"></div>
                    
                    <div className="flex items-center justify-start mb-4">
                      <span className="px-5 py-2 bg-gradient-to-r from-pink to-gold text-white rounded-full text-sm font-bold shadow-lg">
                        <i className="fa fa-calendar mr-2"></i>
                        2025-至今
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-3">智能体集群范式</h4>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">成熟的智能体集群系统，如智谱GLM-5、Kimi K2.5，实现高效协同、动态资源调度、强容错与可扩展性，并向具身智能、多模态等方向延伸。</p>
                    <div className="flex flex-wrap gap-2 justify-start">
                      <span className="px-4 py-1.5 bg-pink/10 text-pink rounded-full text-xs font-semibold border border-pink/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        高效协同工作
                      </span>
                      <span className="px-4 py-1.5 bg-pink/10 text-pink rounded-full text-xs font-semibold border border-pink/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        动态资源分配
                      </span>
                      <span className="px-4 py-1.5 bg-pink/10 text-pink rounded-full text-xs font-semibold border border-pink/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        容错能力强
                      </span>
                      <span className="px-4 py-1.5 bg-pink/10 text-pink rounded-full text-xs font-semibold border border-pink/20">
                        <i className="fa fa-check-circle mr-1"></i>
                        可扩展性好
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="z-10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-10 h-10 bg-pink rounded-full shadow-2xl border-4 border-white"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-5/12"></div>
              </motion.div>
            </div>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-12 text-center text-gray-800">
              <i className="fa fa-lightbulb-o text-cyan mr-3"></i>
              核心创新点
            </h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden card-hover relative"
            >
              <div className="bg-gradient-to-br from-purple to-blue p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="flex items-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mr-5 backdrop-blur-sm border border-white/30"
                  >
                    <i className="fa fa-sitemap text-white text-3xl"></i>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white">去中心化协作架构</h4>
                </div>
              </div>
              
              <div className="p-7">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-12 bg-purple rounded-full mr-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">采用去中心化的架构设计，支持智能体的高效协作，避免单点故障，提高系统的可靠性和可扩展性</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple to-blue rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">核心技术</h5>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <span className="text-xs text-gray-600 bg-purple/10 px-3 py-1 rounded-full">智能体通信协议</span>
                          <span className="text-xs text-gray-600 bg-purple/10 px-3 py-1 rounded-full">动态负载均衡</span>
                          <span className="text-xs text-gray-600 bg-purple/10 px-3 py-1 rounded-full">容错机制</span>
                          <span className="text-xs text-gray-600 bg-purple/10 px-3 py-1 rounded-full">弹性扩展</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden card-hover relative"
            >
              <div className="bg-gradient-to-br from-blue to-cyan p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="flex items-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mr-5 backdrop-blur-sm border border-white/30"
                  >
                    <i className="fa fa-random text-white text-3xl"></i>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white">自适应任务分配</h4>
                </div>
              </div>
              
              <div className="p-7">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-12 bg-blue rounded-full mr-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">基于智能体专业能力和任务特性的自适应分配算法，为智能体分配最合适的任务，实现最优任务调度</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue to-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">核心技术</h5>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <span className="text-xs text-gray-600 bg-blue/10 px-3 py-1 rounded-full">智能任务调度</span>
                          <span className="text-xs text-gray-600 bg-blue/10 px-3 py-1 rounded-full">负载均衡</span>
                          <span className="text-xs text-gray-600 bg-blue/10 px-3 py-1 rounded-full">任务依赖处理</span>
                          <span className="text-xs text-gray-600 bg-blue/10 px-3 py-1 rounded-full">动态重分配</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden card-hover relative"
            >
              <div className="bg-gradient-to-br from-cyan to-pink p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="flex items-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mr-5 backdrop-blur-sm border border-white/30"
                  >
                    <i className="fa fa-refresh text-white text-3xl"></i>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white">实时状态同步机制</h4>
                </div>
              </div>
              
              <div className="p-7">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-12 bg-cyan rounded-full mr-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">开发高效的状态同步机制，确保日常问答、分析、规划、执行、评估等智能体之间信息的实时共享和一致性，实现无缝协作</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-cyan to-pink rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">核心技术</h5>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <span className="text-xs text-gray-600 bg-cyan/10 px-3 py-1 rounded-full">实时状态同步</span>
                          <span className="text-xs text-gray-600 bg-cyan/10 px-3 py-1 rounded-full">事件驱动架构</span>
                          <span className="text-xs text-gray-600 bg-cyan/10 px-3 py-1 rounded-full">一致性保障</span>
                          <span className="text-xs text-gray-600 bg-cyan/10 px-3 py-1 rounded-full">冲突解决</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.36 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden card-hover relative"
            >
              <div className="bg-gradient-to-br from-pink to-gold p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="flex items-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mr-5 backdrop-blur-sm border border-white/30"
                  >
                    <i className="fa fa-shield text-white text-3xl"></i>
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white">故障自动恢复</h4>
                </div>
              </div>
              
              <div className="p-7">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-12 bg-pink rounded-full mr-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">实现智能体故障的自动检测和恢复机制，提高系统的容错能力</p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-pink to-gold rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">核心技术</h5>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <span className="text-xs text-gray-600 bg-pink/10 px-3 py-1 rounded-full">故障检测</span>
                          <span className="text-xs text-gray-600 bg-pink/10 px-3 py-1 rounded-full">自动恢复</span>
                          <span className="text-xs text-gray-600 bg-pink/10 px-3 py-1 rounded-full">容错设计</span>
                          <span className="text-xs text-gray-600 bg-pink/10 px-3 py-1 rounded-full">资源调度</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationPoints;