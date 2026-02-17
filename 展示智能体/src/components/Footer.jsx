import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">项目信息</h3>
            <ul className="space-y-2 text-gray-400">
              <li>作者：黄昊城</li>
              <li>日期：2026年2月</li>
              <li>版本：1.0.0</li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">参考资料</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.zhipuai.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  智谱 AI 官方网站
                </a>
              </li>
              <li>
                <a href="https://kimi.moonshot.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Kimi 官方网站
                </a>
              </li>
              <li>
                <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  arXiv 论文平台
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fa fa-envelope mr-2"></i>
                <span>2025213477@bupt.cn</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fa fa-weixin mr-2"></i>
                <span>h1516016</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fa fa-qq mr-2"></i>
                <span>2671715549</span>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">版权信息</h3>
            <p className="text-gray-400">
              © 2026 智能体集群助手
            </p>
            <p className="text-gray-400 mt-2">
              保留所有权利
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>本项目基于 React + Vite 构建，使用 Tailwind CSS 进行样式设计</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;