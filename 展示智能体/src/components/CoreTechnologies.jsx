import React from 'react';
import { motion } from 'framer-motion';

const CoreTechnologies = () => {
  const technologies = [
    {
      id: 1,
      title: '智能体集群架构',
      description: '采用去中心化的架构设计，支持智能体的高效协作，避免单点故障，提高系统的可靠性和可扩展性',
      icon: 'fa-sitemap',
      details: [
        '去中心化设计',
        '动态负载均衡',
        '容错机制',
        '弹性扩展'
      ],
      color: 'from-purple to-blue',
      glow: 'glow-purple'
    },
    {
      id: 2,
      title: '模型映射机制',
      description: '为不同智能体分配最擅长的模型（R1/Coder/VL/通用），提升处理质量，并优化资源利用',
      icon: 'fa-code-fork',
      details: [
        '专业分工',
        '质量提升',
        '资源优化',
        '灵活配置'
      ],
      color: 'from-blue to-cyan',
      glow: 'glow-cyan'
    },
    {
      id: 3,
      title: 'ACPs协议',
      description: '面向智能体互联网的智能体协作协议族，涵盖智能体注册、发现、通信、协作等全流程',
      icon: 'fa-exchange',
      details: [
        '智能体注册',
        '服务发现',
        '安全通信',
        '协同协议'
      ],
      color: 'from-cyan to-pink',
      glow: 'glow-pink'
    },
    {
      id: 4,
      title: 'MCP',
      description: '智能体与技能之间的通信协议，定义了AI模型如何与外部数据源、工具进行标准化的交互',
      icon: 'fa-cogs',
      details: [
        '标准化接口',
        '指令传输',
        '事件驱动',
        '跨平台兼容'
      ],
      color: 'from-pink to-gold',
      glow: 'glow-gold'
    },
    {
      id: 5,
      title: 'Skills',
      description: '执行任务的能力单元，作为智能体的执行工具，实现具体任务的执行和处理',
      icon: 'fa-wrench',
      details: [
        '能力单元',
        '任务执行',
        '工具集成',
        '可扩展性'
      ],
      color: 'from-gold to-purple',
      glow: 'glow-purple'
    }
  ];

  return (
    <section id="technologies" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心技术</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <span className="font-bold text-lg text-gray-800">{tech.title}</span>
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
                  <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className={`w-2.5 h-2.5 bg-gradient-to-br ${tech.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 text-base">{detail}</span>
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
          <h3 className="text-3xl font-bold mb-6 text-center">技术优势总结</h3>
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
                <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                <p className="text-white/90 text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
