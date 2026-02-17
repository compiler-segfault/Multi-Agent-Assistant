# 智能体集群创新展示

这是一个基于 React + Vite 构建的智能体集群创新展示网页项目，用于展示智能体集群技术的研究成果和创新方向。

## 项目介绍

本项目基于智谱 GLM-5 / Kimi K2.5 的智能体集群方向进行深入探索，展示了从单点智能到集群协作的范式转变，以及智能体集群技术的核心技术、创新点和未来发展方向。

## 功能特点

- 🚀 现代科技感设计
- 📱 完全响应式布局（支持桌面端、平板端、移动端）
- ✨ 丰富的交互动画效果
- 📊 数据可视化图表
- 💬 交互式 LLM 聊天窗口
- 🎨 渐变背景和卡片式设计

## 页面内容

1. **导航栏** - 固定顶部导航，支持移动端响应式设计
2. **Hero 区域** - 全屏渐变背景，点阵动画效果
3. **最新成果探索** - 智谱 GLM-5 和 Kimi K2.5 智能体集群介绍
4. **设计背景与意义** - AI 智能体发展现状和集群技术的意义
5. **需求分析** - 智能体集群系统的核心需求
6. **核心技术** - 技术栈关系图和详细技术说明
7. **创新点** - 从单点智能到集群协作的演进时间线
8. **未来创新方向** - 5 个潜在的技术发展方向
9. **方案设计图** - 智能体集群架构示意图
10. **工作原理与验证** - 工作流程和性能对比图表
11. **页脚** - 项目信息、参考资料、联系方式
12. **LLM 聊天窗口** - 右侧悬浮聊天面板，支持打字动画

## 技术栈

- **前端框架**: React 18 + Vite
- **样式方案**: Tailwind CSS
- **动画库**: Framer Motion
- **图表库**: Chart.js + react-chartjs-2
- **图标库**: Font Awesome
- **字体**: Inter

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
展示智能体/
├── public/
├── src/
│   ├── components/          # 组件目录
│   │   ├── Navbar.jsx        # 导航栏
│   │   ├── Hero.jsx          # 顶部展示区域
│   │   ├── ChatWindow.jsx    # LLM 聊天窗口
│   │   ├── Inspirations.jsx  # 灵感来源
│   │   ├── Background.jsx    # 设计背景与意义
│   │   ├── Requirements.jsx  # 需求分析
│   │   ├── CoreTechnologies.jsx  # 核心技术
│   │   ├── InnovationPoints.jsx  # 创新点
│   │   ├── FutureDirections.jsx  # 未来创新方向
│   │   ├── DesignDiagram.jsx   # 方案设计图
│   │   ├── WorkingPrinciple.jsx  # 工作原理与验证
│   │   └── Footer.jsx        # 页脚
│   ├── App.jsx               # 应用主组件
│   └── main.jsx              # 应用入口
├── index.html                # HTML 模板
├── package.json              # 项目配置
└── vite.config.js          # Vite 配置
```

## 参考资料

- [智谱 AI 官方网站](https://www.zhiupuai.com/)
- [Kimi 官方网站](https://kimi.moonshot.cn/)
- [React 官方文档](https://react.dev/)
- [Vite 官方文档](https://vitejs.dev/)

## 许可证

本项目仅供学习交流使用。
