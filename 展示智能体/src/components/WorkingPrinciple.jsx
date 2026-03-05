import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WorkingPrinciple = () => {
  const performanceData = {
    labels: ['10 tasks', '50 tasks', '100 tasks', '500 tasks', '1000 tasks'],
    datasets: [
      {
        label: '智能体集群',
        data: [1.2, 4.3, 6.6, 7.8, 8.5],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        fill: true
      },
      {
        label: '单智能体',
        data: [0.1, 0.7, 1.6, 5.6, 10.8],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const accuracyData = {
    labels: ['文本分类', '图像识别', '语音处理', '多模态任务'],
    datasets: [
      {
        label: '智能体集群',
        data: [96.5, 94.2, 92.8, 92.5],
        backgroundColor: '#3B82F6'
      },
      {
        label: '单智能体',
        data: [92.3, 80.1, 83.5, 73.2],
        backgroundColor: '#6366F1'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '性能对比'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '响应时间 (秒)'
        }
      }
    }
  };

  const accuracyOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '准确率对比 (%)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: '准确率 (%)'
        }
      }
    }
  };

  const workflowSteps = [
    {
      id: 1,
      title: '任务输入',
      description: '用户或系统输入需要处理的任务',
      details: '支持文本、图像、语音等多种输入形式，任务可以是单一任务或复杂的组合任务。',
      icon: 'fa-file-text-o'
    },
    {
      id: 2,
      title: '任务分析',
      description: '任务分配智能体分析任务类型、复杂度和所需资源',
      details: '通过智能算法分析任务特征，包括难度、时限、数据规模等，为智能体选择提供依据。',
      icon: 'fa-search'
    },
    {
      id: 3,
      title: '智能体选择',
      description: '根据任务特性选择最合适的智能体组合',
      details: '从智能体池中选择具有专长的智能体，考虑历史表现、当前负载、能力匹配度等因素。',
      icon: 'fa-users'
    },
    {
      id: 4,
      title: '任务分配',
      description: '将任务分解为子任务并分配给各智能体',
      details: '使用优化算法将主任务分解为可并行处理的子任务，建立任务依赖关系图。',
      icon: 'fa-tasks'
    },
    {
      id: 5,
      title: '任务执行',
      description: '多个智能体并行执行各自分配的子任务',
      details: '智能体之间通过高效通信协议交换信息，实时同步状态，动态调整任务分配。',
      icon: 'fa-cogs'
    },
    {
      id: 6,
      title: '结果汇总',
      description: '收集各智能体的执行结果，进行汇总和整合',
      details: '结果整合模块将各子任务输出融合处理，解决可能的冲突，生成一致最终结果。',
      icon: 'fa-puzzle-piece'
    },
    {
      id: 7,
      title: '质量评估',
      description: '对最终结果进行质量评估和验证',
      details: '系统自动检查结果完整性、准确性和一致性，必要时启动重新处理流程。',
      icon: 'fa-check-circle'
    },
    {
      id: 8,
      title: '任务输出',
      description: '将最终结果返回给用户或系统',
      details: '根据用户需求格式化输出结果，支持多种格式，记录处理日志用于后续优化。',
      icon: 'fa-paper-plane'
    }
  ];

  const keyMechanisms = [
    {
      title: '智能通信协议',
      description: '高效点对点通信，支持消息队列和事件驱动架构',
      icon: 'fa-comments'
    },
    {
      title: '动态负载均衡',
      description: '实时监控各智能体负载，动态调整任务分配',
      icon: 'fa-balance-scale'
    },
    {
      title: '容错恢复机制',
      description: '智能体故障时快速检测并重新分配任务',
      icon: 'fa-shield'
    },
    {
      title: '学习优化',
      description: '记录任务执行情况，通过机器学习优化策略',
      icon: 'fa-lightbulb-o'
    }
  ];

  return (
    <section id="principle" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">基本工作原理及其初步验证</h2>
          <p className="section-subtitle">
              深入了解智能体集群助手的工作流程、核心机制和初步验证结果，包括日常问答、分析、规划、执行、评估等智能体的协作流程
            </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center text-primary">核心机制</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMechanisms.map((mechanism, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
                <div className="bg-gradient-to-br from-primary to-blue-400 p-4 text-white">
                  <i className={`fa ${mechanism.icon} text-3xl mb-2`}></i>
                  <h4 className="text-lg font-bold">{mechanism.title}</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{mechanism.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-primary">工作原理</h3>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className={`flex items-start ${index < workflowSteps.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-sm">
                        <i className={`fa ${step.icon} text-sm`}></i>
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center mb-1">
                        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs mr-2">
                          {step.id}
                        </span>
                        <h4 className="text-lg font-bold text-gray-800">{step.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">{step.description}</p>
                      <p className="text-gray-600 text-xs">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">初步验证</h3>
            
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <Line data={performanceData} options={chartOptions} />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <Bar data={accuracyData} options={accuracyOptions} />
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <h4 className="text-lg font-bold mb-3 flex items-center">
                <i className="fa fa-graduation-cap text-primary mr-2"></i>
                案例演示
              </h4>
              <div className="space-y-2">
                {[
                  { icon: 'fa-file-text-o', text: '文本处理智能体解析指令' },
                  { icon: 'fa-picture-o', text: '图像识别智能体分析内容' },
                  { icon: 'fa-microphone', text: '语音处理智能体转文本' },
                  { icon: 'fa-cogs', text: '决策智能体整合信息' },
                  { icon: 'fa-clock-o', text: '处理时间减少 65%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                    <i className={`fa ${item.icon} text-primary mr-2 text-sm`}></i>
                    <span className="text-gray-700 text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl shadow-sm p-4 text-white">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <i className="fa fa-star mr-2"></i>
                验证结论
              </h4>
              <ul className="space-y-1">
                <li className="flex items-center text-sm">
                  <i className="fa fa-check-circle mr-2"></i>
                  <span>多任务处理性能显著提升</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fa fa-check-circle mr-2"></i>
                  <span>准确率提升 3-6 个百分点</span>
                </li>
                <li className="flex items-center text-sm">
                  <i className="fa fa-check-circle mr-2"></i>
                  <span>良好的可扩展性和容错性</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciple;