import React from 'react';
import { motion } from 'framer-motion';

const FutureDirections = () => {
  const directions = [
    {
      id: 1,
      title: '跨平台智能体集群助手',
      description: '突破平台限制，实现不同操作系统、硬件环境下的智能体协同工作',
      details: '通过标准化的通信协议和容器化技术，使日常问答、分析、规划、执行、评估等智能体能够在云端、边缘设备、物联网设备等多种平台上无缝协作，形成真正的分布式智能体网络。',
      icon: 'fa-globe',
      bgGradient: 'gradient-blue-light',
      iconGradient: 'from-purple to-blue',
      textColor: 'text-blue',
      borderColor: 'border-blue/20'
    },
    {
      id: 2,
      title: '与具身智能的结合',
      description: '将智能体集群助手与具身智能（如机器人）相结合，实现物理世界的交互能力',
      details: '智能体集群助手负责复杂的决策和规划，具身智能负责物理世界的执行，两者协同工作，共同完成需要感知、决策、执行的复杂任务。',
      icon: 'fa-cogs',
      bgGradient: 'gradient-cyan-light',
      iconGradient: 'from-blue to-cyan',
      textColor: 'text-cyan',
      borderColor: 'border-cyan/20'
    },
    {
      id: 3,
      title: '边缘计算优化',
      description: '将智能体集群助手部署到边缘设备，减少延迟，提高实时响应能力',
      details: '通过边缘计算技术，使智能体集群助手能够在靠近数据源的地方进行处理，减少数据传输延迟，提高系统的实时响应能力，特别适用于智能驾驶、工业自动化等场景。',
      icon: 'fa-wifi',
      bgGradient: 'gradient-purple-light',
      iconGradient: 'from-cyan to-pink',
      textColor: 'text-purple',
      borderColor: 'border-purple/20'
    },
    {
      id: 4,
      title: '量子计算协同',
      description: '探索智能体集群助手与量子计算的结合，解决传统计算难以处理的复杂问题',
      details: '利用量子计算的并行处理能力，为智能体集群助手提供更强大的计算支持，特别适用于优化问题、密码学、材料科学等领域的复杂任务。',
      icon: 'fa-microchip',
      bgGradient: 'gradient-pink-light',
      iconGradient: 'from-pink to-gold',
      textColor: 'text-pink',
      borderColor: 'border-pink/20'
    },
    {
      id: 5,
      title: '伦理与安全机制',
      description: '建立智能体集群助手的伦理规范和安全保障机制，确保系统的可靠运行',
      details: '研究智能体集群助手的伦理决策框架，防止系统做出有害决策；同时加强系统的安全防护，防止恶意攻击和数据泄露，确保智能体集群助手的可靠运行。',
      icon: 'fa-shield',
      bgGradient: 'gradient-gold-light',
      iconGradient: 'from-gold to-purple',
      textColor: 'text-gold',
      borderColor: 'border-gold/20'
    }
  ];

  return (
    <section id="future" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">未来创新方向</h2>
            <p className="section-subtitle">
              基于当前成果，探索智能体集群助手技术的未来发展方向
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((direction, index) => (
            <motion.div
              key={direction.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${direction.bgGradient} rounded-2xl shadow-lg border ${direction.borderColor} p-7 card-hover overflow-hidden relative`}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-16 h-16 bg-gradient-to-br ${direction.iconGradient} rounded-2xl flex items-center justify-center shadow-lg mb-5 animate-float`}
              >
                <i className={`fa ${direction.icon} text-white text-2xl`}></i>
              </motion.div>
              
              <h3 className={`text-xl font-bold mb-3 ${direction.textColor}`}>{direction.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{direction.description}</p>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-xs leading-relaxed">{direction.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureDirections;
