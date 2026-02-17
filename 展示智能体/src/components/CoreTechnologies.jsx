import React from 'react';
import { motion } from 'framer-motion';

const CoreTechnologies = () => {
  const technologies = [
    {
      id: 1,
      title: '智能体通信协议',
      description: '设计高效的通信协议，确保日常问答、分析、规划、执行、评估等智能体之间能够快速、可靠地交换信息，支持复杂任务的协同处理',
      icon: 'fa-comments',
      details: [
        '点对点通信机制',
        '消息队列支持',
        '事件驱动架构',
        '数据加密传输'
      ],
      color: 'from-purple to-blue',
      glow: 'glow-purple'
    },
    {
      id: 2,
      title: '智能任务调度算法',
      description: '开发智能的任务调度算法，根据任务特性和智能体专业能力，实现最优的任务分配策略，确保合适的智能体处理相应的任务',
      icon: 'fa-tasks',
      details: [
        '基于优先级的调度',
        '负载均衡分配',
        '任务依赖处理',
        '动态重分配'
      ],
      color: 'from-blue to-cyan',
      glow: 'glow-cyan'
    },
    {
      id: 3,
      title: '灵活工作流程管理',
      description: '实现从日常问答到专业智能体的灵活切换机制，根据任务性质动态调整智能体组合，优化集群配置',
      icon: 'fa-sliders',
      details: [
        '自动智能体切换',
        '任务类型识别',
        '智能体能力评估',
        '工作流程优化'
      ],
      color: 'from-cyan to-pink',
      glow: 'glow-pink'
    },
    {
      id: 4,
      title: '跨模态信息融合',
      description: '支持不同模态信息的融合处理，为日常问答、分析、规划、执行、评估等智能体提供全面的信息支持，提高集群对复杂环境的理解和应对能力',
      icon: 'fa-object-group',
      details: [
        '文本理解',
        '图像识别',
        '语音处理',
        '多模态整合'
      ],
      color: 'from-pink to-gold',
      glow: 'glow-gold'
    },
    {
      id: 5,
      title: '资源分配优化',
      description: '通过智能资源分配算法，根据日常问答、分析、规划、执行、评估等智能体的不同需求动态调整资源，实现计算资源的高效利用，提高系统整体性能',
      icon: 'fa-cogs',
      details: [
        '计算资源调度',
        '存储资源管理',
        '网络带宽优化',
        '成本效益分析'
      ],
      color: 'from-gold to-purple',
      glow: 'glow-purple'
    }
  ];

  return (
    <section id="technologies" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">核心技术</h2>
          <p className="section-subtitle">
              智能体集群助手的核心技术栈，支撑系统的高效运行
            </p>
        </div>

        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-gradient-to-br from-purple/10 to-blue/10 rounded-xl p-4 flex items-center card-hover"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center shadow-lg mr-3 ${tech.glow}`}>
                    <i className={`fa ${tech.icon} text-white`}></i>
                  </div>
                  <span className="font-bold text-gray-800">{tech.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden card-hover"
            >
              <div className={`bg-gradient-to-br ${tech.color} p-6`}>
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 ${tech.glow}`}>
                    <i className={`fa ${tech.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className={`w-2.5 h-2.5 bg-gradient-to-br ${tech.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-gradient-to-br from-purple via-blue to-cyan animate-gradient-shift rounded-2xl shadow-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">技术优势总结</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: 'fa-bolt', title: '高性能', desc: '采用高效算法，确保系统快速响应' },
              { icon: 'fa-shield', title: '高可靠', desc: '内置容错机制，保障系统稳定运行' },
              { icon: 'fa-expand', title: '可扩展', desc: '模块化设计，支持按需扩展' },
              { icon: 'fa-cog', title: '易维护', desc: '清晰架构，便于维护和升级' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center card-hover p-5 rounded-xl bg-white/15 backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-3 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  <i className={`fa ${item.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
