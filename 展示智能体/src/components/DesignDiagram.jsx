import React from 'react';
import { motion } from 'framer-motion';

const DesignDiagram = () => {
  const layers = [
    {
      name: '用户交互层',
      items: ['任务输入', '结果输出', '用户反馈', '配置管理'],
      description: '负责与用户或外部系统进行交互，接收任务请求并返回处理结果',
      icon: 'fa-desktop',
      color: 'from-purple to-blue',
      glow: 'glow-purple'
    },
    {
      name: '智能体协调层',
      items: ['任务分配', '状态同步', '资源调度', '负载均衡'],
      description: '协调各智能体之间的工作，负责任务分解、分配和状态管理',
      icon: 'fa-sitemap',
      color: 'from-blue to-cyan',
      glow: 'glow-cyan'
    },
    {
      name: '智能体执行层',
      items: ['数据处理智能体', '决策智能体', '通信智能体', '监控智能体', '学习智能体'],
      description: '由各类专业智能体组成，负责具体任务的执行',
      icon: 'fa-cogs',
      color: 'from-cyan to-pink',
      glow: 'glow-pink'
    },
    {
      name: '资源基础设施层',
      items: ['计算资源', '存储资源', '网络资源', '数据库', 'API接口'],
      description: '提供底层基础设施支持，包括计算、存储和网络资源',
      icon: 'fa-server',
      color: 'from-pink to-gold',
      glow: 'glow-gold'
    }
  ];

  const dataFlow = [
    { step: '任务接收', detail: '系统接收来自用户或外部系统的任务请求', color: 'from-purple to-blue' },
    { step: '任务分析', detail: '分析任务类型、复杂度和资源需求', color: 'from-blue to-cyan' },
    { step: '智能体选择', detail: '根据任务特性选择合适的智能体组合', color: 'from-blue to-cyan' },
    { step: '任务分配', detail: '将任务分解为子任务并分配给各智能体', color: 'from-cyan to-pink' },
    { step: '并行执行', detail: '各智能体并行执行分配的子任务', color: 'from-cyan to-pink' },
    { step: '结果整合', detail: '汇总各智能体的执行结果', color: 'from-cyan to-pink' },
    { step: '质量验证', detail: '验证结果的准确性和完整性', color: 'from-pink to-gold' },
    { step: '输出反馈', detail: '将最终结果返回给用户并记录日志', color: 'from-pink to-gold' }
  ];

  const architectureFeatures = [
    { icon: 'fa-check-circle', title: '模块化设计', text: '各层独立设计，便于扩展和维护，支持按需升级', color: 'from-purple/10 to-purple/5', border: 'border-purple-200', glow: 'glow-purple' },
    { icon: 'fa-exchange', title: '松耦合架构', text: '层间通过标准接口通信，降低组件间的依赖关系', color: 'from-blue/10 to-blue/5', border: 'border-blue-200', glow: 'glow-cyan' },
    { icon: 'fa-users', title: '并行协同', text: '支持多智能体同时工作，大幅提升处理效率', color: 'from-cyan/10 to-cyan/5', border: 'border-cyan-200', glow: 'glow-pink' },
    { icon: 'fa-shield', title: '容错机制', text: '内置监控和自动恢复，确保系统稳定运行', color: 'from-pink/10 to-pink/5', border: 'border-pink-200', glow: 'glow-gold' },
    { icon: 'fa-cogs', title: '智能调度', text: '根据任务特性动态分配资源，优化整体性能', color: 'from-gold/10 to-gold/5', border: 'border-gold-200', glow: 'glow-purple' },
    { icon: 'fa-line-chart', title: '可扩展性', text: '支持水平扩展，可根据需求增加智能体数量', color: 'from-purple/10 to-blue/5', border: 'border-purple-200', glow: 'glow-cyan' }
  ];

  return (
    <section id="diagram" className="section-padding bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">方案设计图</h2>
          <p className="section-subtitle">
              智能体集群助手的分层架构设计、数据流向和核心特性，包括日常问答、分析、规划、执行、评估等智能体的协作流程
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-5 text-center text-gray-800">系统分层架构</h3>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="space-y-4">
                {layers.map((layer, layerIndex) => (
                  <motion.div
                    key={layerIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: layerIndex * 0.1 }}
                    className="card-hover"
                  >
                    <div className={`bg-gradient-to-br ${layer.color} rounded-t-xl p-5`}>
                      <div className="flex items-center justify-center">
                        <div className={`w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 ${layer.glow}`}>
                          <i className={`fa ${layer.icon} text-white text-xl`}></i>
                        </div>
                        <h4 className="text-white font-bold text-xl">{layer.name}</h4>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-gray-100 border-t-0 rounded-b-xl p-5">
                      <p className="text-gray-600 text-sm mb-4 text-center">{layer.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {layer.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="px-4 py-1.5 bg-gradient-to-r from-purple/10 to-blue/10 text-purple-700 rounded-full text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    {layerIndex < layers.length - 1 && (
                      <div className="flex justify-center my-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple to-blue rounded-full flex items-center justify-center animate-bounce shadow-lg glow-purple">
                          <i className="fa fa-chevron-down text-white text-base"></i>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-center text-gray-800">数据流向</h3>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="space-y-4">
                {dataFlow.map((flow, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start card-hover"
                  >
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${flow.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {index + 1}
                      </div>
                      {index < dataFlow.length - 1 && (
                        <div className="w-1 h-8 bg-gradient-to-b from-purple to-pink my-1.5"></div>
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-bold text-gray-800 text-base mb-1">{flow.step}</h4>
                      <p className="text-gray-600 text-sm">{flow.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800">架构特点</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {architectureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`bg-gradient-to-br ${feature.color} ${feature.border} rounded-2xl shadow-lg border p-6 card-hover`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 ${feature.glow}`}>
                    <i className={`fa ${feature.icon} text-purple-600 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-2">{feature.title}</h4>
                    <p className="text-gray-700 text-sm">{feature.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800">智能体交互示意</h3>
          <div className="bg-gradient-to-br from-purple/5 via-blue/5 to-pink/5 rounded-2xl shadow-xl border-2 border-purple-100 p-8">
            <div className="flex flex-wrap justify-center items-center gap-5">
              {[
                { name: '任务分配', icon: 'fa-tasks', color: 'from-purple to-blue', glow: 'glow-purple' },
                { name: '数据处理', icon: 'fa-database', color: 'from-blue to-cyan', glow: 'glow-cyan' },
                { name: '决策引擎', icon: 'fa-brain', color: 'from-cyan to-pink', glow: 'glow-pink' },
                { name: '通信中枢', icon: 'fa-comments', color: 'from-pink to-gold', glow: 'glow-gold' },
                { name: '监控中心', icon: 'fa-eye', color: 'from-gold to-purple', glow: 'glow-purple' }
              ].map((agent, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br ${agent.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl ${agent.glow} animate-float card-hover`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <i className={`fa ${agent.icon} text-3xl md:text-4xl mb-2`}></i>
                    <span className="text-xs font-bold text-center px-2">{agent.name}</span>
                  </motion.div>
                  {index < 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className="text-purple-500 text-2xl md:text-3xl animate-pulse-slow"
                    >
                      <i className="fa fa-exchange"></i>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-base">
                各智能体通过高效的通信协议实时协作，共同完成复杂任务
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDiagram;
