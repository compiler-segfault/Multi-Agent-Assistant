import React from 'react';
import { motion } from 'framer-motion';

const Requirements = () => {
  const requirements = [
    {
      id: 1,
      title: '多智能体协同效率',
      description: '智能体之间的通信和协作效率直接影响整个集群的性能，需要优化通信协议和协同算法，确保日常问答、分析、规划、执行、评估等智能体之间的高效协作',
      icon: 'fa-users',
      bgGradient: 'gradient-blue-light',
      iconGradient: 'from-purple to-blue',
      textColor: 'text-blue',
      borderColor: 'border-blue/20'
    },
    {
      id: 2,
      title: '智能任务分配',
      description: '基于用户意图和任务特性的智能分配机制，充分发挥每个智能体的专业优势，提高整体任务完成质量',
      icon: 'fa-pie-chart',
      bgGradient: 'gradient-cyan-light',
      iconGradient: 'from-blue to-cyan',
      textColor: 'text-cyan',
      borderColor: 'border-cyan/20'
    },
    {
      id: 3,
      title: '灵活工作流程',
      description: '支持从日常问答到专业智能体的灵活切换，根据任务性质动态调整智能体组合，适应不同场景需求',
      icon: 'fa-expand',
      bgGradient: 'gradient-purple-light',
      iconGradient: 'from-cyan to-pink',
      textColor: 'text-purple',
      borderColor: 'border-purple/20'
    },
    {
      id: 4,
      title: '资源利用优化',
      description: '通过智能调度算法，实现计算资源的最优分配，根据不同智能体的需求动态调整资源，避免资源浪费',
      icon: 'fa-cogs',
      bgGradient: 'gradient-pink-light',
      iconGradient: 'from-pink to-gold',
      textColor: 'text-pink',
      borderColor: 'border-pink/20'
    },
    {
      id: 5,
      title: '实时响应能力',
      description: '在处理时间敏感任务时，智能体集群需要具备快速响应和决策能力，确保用户获得及时的反馈',
      icon: 'fa-clock-o',
      bgGradient: 'gradient-gold-light',
      iconGradient: 'from-gold to-purple',
      textColor: 'text-gold',
      borderColor: 'border-gold/20'
    }
  ];

  return (
    <section id="requirements" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">需求分析</h2>
            <p className="section-subtitle">
              智能体集群助手的核心需求分析，为后续技术方案提供指导
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((requirement, index) => (
            <motion.div
              key={requirement.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${requirement.bgGradient} rounded-2xl shadow-lg border ${requirement.borderColor} p-7 card-hover overflow-hidden relative`}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-14 h-14 bg-gradient-to-br ${requirement.iconGradient} rounded-xl flex items-center justify-center shadow-lg mb-5 animate-float`}
              >
                <i className={`fa ${requirement.icon} text-white text-xl`}></i>
              </motion.div>
              
              <h3 className={`text-lg font-bold mb-3 ${requirement.textColor}`}>{requirement.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
