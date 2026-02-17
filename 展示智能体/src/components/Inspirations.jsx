import React from 'react';
import { motion } from 'framer-motion';

const Inspirations = () => {
  const inspirations = [
    {
      id: 'glm5',
      title: 'GLM-5 智能体集群',
      description: '智谱 AI 最新推出的 GLM-5 模型在智能体集群方向取得了重大突破，实现了多智能体的高效协同工作，为我们的设计提供了重要参考。',
      features: [
        '多智能体协同机制',
        '任务分配优化算法',
        '实时通信协议'
      ],
      icon: 'fa-lightbulb-o',
      bgGradient: 'gradient-blue-light',
      iconGradient: 'from-purple to-blue',
      textColor: 'text-blue',
      borderColor: 'border-blue/20'
    },
    {
      id: 'kimi25',
      title: 'K2.5 智能体集群',
      description: 'Kimi K2.5 在智能体集群方面引入了动态调整机制，大幅提升了集群的适应性和资源利用效率，启发了我们的动态资源分配设计。',
      features: [
        '动态集群调整',
        '跨模态协作能力',
        '智能资源调度'
      ],
      icon: 'fa-rocket',
      bgGradient: 'gradient-cyan-light',
      iconGradient: 'from-blue to-cyan',
      textColor: 'text-cyan',
      borderColor: 'border-cyan/20'
    }
  ];

  return (
    <section id="inspirations" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">灵感来源</h2>
            <p className="section-subtitle">
              智谱 GLM-5 和 Kimi K2.5 在智能体集群方向的最新成果为我们提供了重要的设计灵感
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {inspirations.map((inspiration, index) => (
            <motion.div
              key={inspiration.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${inspiration.bgGradient} rounded-2xl shadow-lg border ${inspiration.borderColor} overflow-hidden card-hover relative`}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-br ${inspiration.iconGradient} rounded-2xl flex items-center justify-center shadow-lg animate-float`}
                  >
                    <i className={`fa ${inspiration.icon} text-white text-2xl`}></i>
                  </motion.div>
                  <div className="ml-4">
                    <h3 className={`text-2xl font-bold ${inspiration.textColor}`}>{inspiration.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{inspiration.description}</p>
                <div className="space-y-3">
                  {inspiration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-3 h-3 bg-gradient-to-br ${inspiration.iconGradient} rounded-full mr-4`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`bg-gradient-to-r ${inspiration.iconGradient} px-8 py-5 opacity-95`}>
                <div className="flex items-center text-white text-sm">
                  <i className="fa fa-lightbulb-o mr-2"></i>
                  <span className="font-semibold">设计灵感</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
