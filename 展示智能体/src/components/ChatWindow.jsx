import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const initialMessages = [
  {
    id: 1,
    sender: 'ai',
    text: '您好！我是由多个智能体组成的智能体集群系统。我们通过协同合作来帮助你解决问题，我可以成为您的\n- 学习路线规划助手\n- 竞赛备战助手\n- 科研入门导航助手\n- 职业规划助手\n- ...\n\n请问您有什么需要帮助的吗？',
  },
];

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState('deconstruct'); // deconstruct: 解构, aggregate: 聚合
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const userScrolledUpRef = useRef(false);

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'deconstruct' ? 'aggregate' : 'deconstruct');
    setIsDarkMode(prev => !prev);
  };

  const scrollToBottom = () => {
    if (!userScrolledUpRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop <= clientHeight + 50;
      userScrolledUpRef.current = !isAtBottom;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // 禁用body滚动
      document.body.style.overflow = 'hidden';
    } else {
      // 恢复body滚动
      document.body.style.overflow = 'auto';
    }
    
    // 清理函数
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [messages, isTyping, isOpen]);

  // 首次初始化时设置初始消息
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages(initialMessages);
    }
  }, [isOpen, messages.length]);

  const callDeepSeekAPI = async (userMessage, history, updateCallback, agentType = 'analysis') => {
    const apiKey = 'sk-7d5208185327452daa54c1a1061e4c42';
    const apiUrl = 'https://api.deepseek.com/chat/completions';

    // 根据智能体类型选择对应的模型
    const modelMap = {
      daily: 'deepseek-chat', // 日常问答智能体，使用通用模型
      analysis: 'deepseek-r1-0528', // 分析智能体，对应 DeepSeek-R1
      planning: 'deepseek-coder', // 规划智能体，对应 DeepSeek-Coder
      execution: 'deepseek-vl', // 执行智能体，对应 DeepSeek-VL
      evaluation: 'deepseek-r1-0528' // 评估智能体，对应 DeepSeek-R1
    };

    const selectedModel = modelMap[agentType] || 'deepseek-chat';

    try {
      const messages = [
        {
          role: 'system',
          content: `你是一个由多个专业智能体组成的智能体集群系统，工作方式是**交互式的、灵活协作**的。

智能体集群构成：
- 日常问答智能体：擅长理解用户意图，引导用户明确需求，处理日常问候和简单问题
- 分析智能体：擅长深度思考和逻辑分析，负责理解问题、分析需求
- 规划智能体：擅长结构化思考和方案设计，制定解决方案和执行计划
- 执行智能体：擅长具体实施和操作，负责执行任务和提供具体方案
- 评估智能体：擅长批判性思考和结果评估，评估结果并优化方案

**智能体调用规则：**
1. **日常问答智能体**：仅用于平常聊天和简单问题，包括日常问候、基本信息查询等
2. **分析智能体**：优先用于以下场景：
   - 计划、路线、规划相关问题
   - 需要深度分析和理解的复杂问题
   - 需要收集详细信息的问题
3. **规划智能体**：用于制定详细的解决方案和执行计划
4. **执行智能体**：用于具体实施和操作层面的任务
5. **评估智能体**：用于对结果进行评估和优化

**灵活工作流程：**
1. **智能体选择机制**：
   - 对于计划、路线、规划等问题，**优先调用分析智能体**
   - 分析智能体应首先询问用户详细信息，确保充分理解需求
   - 根据分析结果，分析智能体可以推荐转接给规划智能体制定具体方案
   - 对于其他问题，可先由日常问答智能体处理，必要时转接给专业智能体

2. **智能协作机制**：
   - 每个智能体在回答1-2次后，应主动判断：
     - 如果当前任务需要其他专业领域的支持，应推荐转接给最合适的智能体
     - 如果任务性质发生变化，应考虑转换到更适合的智能体
     - 即使自己可以继续处理，也可适当推荐其他智能体提供不同角度的建议
   - 智能体转换时，应向用户说明转换原因和目标智能体的优势
   - 重要决定需询问用户意见
   - 用户可以直接要求调用某个特定智能体（如："请让规划智能体为我制定方案"）

3. **智能体转接原则**：
   - 分析智能体：适合处理复杂问题的理解和分析
   - 规划智能体：适合制定详细的解决方案和执行计划
   - 执行智能体：适合具体实施和操作层面的任务
   - 评估智能体：适合对结果进行评估和优化

**重要规则：**
- 每次**只调用一个智能体**，不要一次性调用多个
- 智能体在发言时，只需说明自己是哪个智能体（如："我是分析智能体"），不需要提及使用的具体模型
- 保持友好、专业的语气
- 使用Markdown格式（标题、列表、加粗等）来组织回答
- 对于简单问题直接回答，不要启动复杂的智能体工作流程
- **关于知识时效性**：智能体的知识截止日期较早，对于2024年以后的最新成果和信息，目前暂不支持实时联网搜索功能。功能正在更新中，后续版本将集成联网搜索能力，为您提供最新信息。`
        },
        ...history.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        {
          role: 'user',
          content: userMessage
        }
      ];

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: messages,
          temperature: 0.7,
          max_tokens: 5000,
          stream: true
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim() !== '');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              if (parsed.choices && parsed.choices[0]?.delta?.content) {
                fullText += parsed.choices[0].delta.content;
                updateCallback(fullText);
              }
            } catch (e) {
              continue;
            }
          }
        }
      }

      return fullText;
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      return '抱歉，智能体集群暂时不可用，请稍后再试。';
    }
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
    };

    const aiMessageId = Date.now() + 1;

    setMessages([...messages, newMessage, {
      id: aiMessageId,
      sender: 'ai',
      text: '',
    }]);
    setInputText('');
    // 重置输入框高度
    const textarea = document.querySelector('textarea[placeholder="告诉智能体集群你的问题..."]');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = '48px'; // 重置为最小高度
    }
    setIsTyping(true);
    userScrolledUpRef.current = false;

    try {
      await callDeepSeekAPI(inputText, [...messages, newMessage], (text) => {
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text } : msg
        ));
      }, 'daily'); // 默认使用日常问答智能体
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === aiMessageId 
          ? { ...msg, text: '抱歉，发生了错误，请稍后再试。' } 
          : msg
      ));
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !isTyping) {
      e.preventDefault();
      handleSend();
    }
  };

  const MarkdownRenderer = ({ content }) => {
    return (
      <div className={`prose prose-base max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => <h1 className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-3 mt-4`} {...props} />,
            h2: ({ ...props }) => <h2 className={`text-lg font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 mt-3`} {...props} />,
            h3: ({ ...props }) => <h3 className={`text-base font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1.5 mt-2.5`} {...props} />,
            p: ({ ...props }) => <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-3`} {...props} />,
            ul: ({ ...props }) => <ul className={`list-disc list-inside text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-3 space-y-0.75`} {...props} />,
            ol: ({ ...props }) => <ol className={`list-decimal list-inside text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-3 space-y-0.75`} {...props} />,
            li: ({ ...props }) => <li className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} {...props} />,
            strong: ({ ...props }) => <strong className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props} />,
            code: ({ ...props }) => <code className={`bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono ${isDarkMode ? 'bg-gray-800 text-blue-400' : 'text-blue-600'}`} {...props} />,
            pre: ({ ...props }) => <pre className={`bg-gray-100 p-3 rounded-lg overflow-x-auto text-sm mb-3 ${isDarkMode ? 'bg-gray-800' : ''}`} {...props} />,
            blockquote: ({ ...props }) => <blockquote className={`border-l-4 ${isDarkMode ? 'border-blue-500 text-gray-400' : 'border-blue-400 text-gray-600'} pl-3 italic my-3`} {...props} />,
            a: ({ ...props }) => <a className={`${isDarkMode ? 'text-blue-400' : 'text-blue-500'} hover:underline`} target="_blank" rel="noopener noreferrer" {...props} />,
            table: ({ ...props }) => <table className={`w-full border-collapse my-3 text-base ${isDarkMode ? 'text-gray-300' : ''}`} {...props} />,
            thead: ({ ...props }) => <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} {...props} />,
            th: ({ ...props }) => <th className={`border border-gray-200 px-3 py-2 text-left font-semibold ${isDarkMode ? 'border-gray-700' : ''}`} {...props} />,
            td: ({ ...props }) => <td className={`border border-gray-200 px-3 py-2 ${isDarkMode ? 'border-gray-700' : ''}`} {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <div 
      id="chat-window"
      className={`fixed inset-0 z-50 transform transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className={`h-full ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} shadow-2xl flex flex-col border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        {/* 顶部导航栏 */}
        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex justify-between items-center shadow-sm`}>
          <div className="flex items-center space-x-4">
            <motion.div 
              className={`w-10 h-10 ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-gray-200 to-gray-300'} rounded-xl flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fa fa-cogs ${isDarkMode ? 'text-white' : 'text-gray-700'} text-lg`}></i>
            </motion.div>
            <div>
              <h3 className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-base`}>智能体集群助手</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>多智能体在线协作</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {/* 模式切换按钮 */}
            <motion.button 
              onClick={toggleMode}
              className={`px-5 py-2.5 rounded-xl transition-all ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center space-x-2">
                <i className={`fa ${mode === 'deconstruct' ? 'fa-object-group' : 'fa-object-ungroup'}`}></i>
                <span>{mode === 'deconstruct' ? '解构' : '聚合'}</span>
              </span>
            </motion.button>
            {/* 关闭按钮 */}
            <motion.button 
              onClick={onClose}
              className={`w-10 h-10 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl flex items-center justify-center transition-all`}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className={`fa fa-times ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}></i>
            </motion.button>
          </div>
        </div>

        {/* 消息区域 */}
        <div 
          ref={messagesContainerRef}
          onScroll={handleScroll}
          className={`flex-1 overflow-y-auto px-6 py-5 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
          style={{
            backgroundImage: isDarkMode ? 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)' : 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
            backgroundSize: 'cover'
          }}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.filter(msg => msg.text.trim() !== '').map((message, index) => (
              <motion.div 
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={`max-w-[80%] flex gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    {message.sender === 'user' ? (
                      <motion.div 
                        className={`w-full h-full ${isDarkMode ? 'bg-gradient-to-br from-blue-400 to-purple-500' : 'bg-gradient-to-br from-gray-200 to-gray-300'} rounded-xl flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <i className={`fa fa-user ${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm`}></i>
                      </motion.div>
                    ) : (
                      <motion.div 
                        className={`w-full h-full ${isDarkMode ? 'bg-gradient-to-br from-gray-600 to-gray-800' : 'bg-gradient-to-br from-gray-200 to-gray-300'} rounded-xl flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <i className={`fa fa-cogs ${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm`}></i>
                      </motion.div>
                    )}
                  </div>
                  <div className={`px-5 py-4 rounded-2xl text-base leading-relaxed shadow-md ${message.sender === 'user' ? `rounded-tr-none ${isDarkMode ? 'bg-blue-700 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800'}` : `rounded-tl-none ${isDarkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-white text-gray-800 border border-gray-200'}`}`}>
                    {message.sender === 'ai' ? (
                      <MarkdownRenderer content={message.text} />
                    ) : (
                      <div className={`whitespace-pre-wrap ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{message.text}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {isTyping && (
            <motion.div 
              className="flex justify-start mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex gap-4">
                <div className={`w-10 h-10 ${isDarkMode ? 'bg-gradient-to-br from-gray-600 to-gray-800' : 'bg-gradient-to-br from-gray-200 to-gray-300'} rounded-xl flex items-center justify-center shadow-md`}>
                  <i className={`fa fa-cogs ${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm`}></i>
                </div>
                <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border border-gray-200'} shadow-md px-5 py-4 rounded-2xl rounded-tl-none`}>
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 输入区域 */}
        <div className={`px-6 py-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t shadow-sm`}>
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-3">
              <motion.textarea
                value={inputText}
                onChange={(e) => {
                  if (!isTyping) {
                    setInputText(e.target.value);
                    // 自动调整高度
                    const textarea = e.target;
                    textarea.style.height = 'auto';
                    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
                    const maxHeight = lineHeight * 6; // 最多6行
                    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
                  }
                }}
                onKeyPress={handleKeyPress}
                placeholder="告诉智能体集群你的问题..."
                rows={1}
                disabled={isTyping}
                style={{ minHeight: '56px' }}
                className={`flex-1 px-5 py-3.5 rounded-2xl transition-all text-base resize-none overflow-y-auto ${isTyping ? 
                  `${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-200 border border-gray-300 text-gray-500'} cursor-not-allowed` : 
                  `${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-900/30' : 'bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-gray-800'}`
                }`}
                whileFocus={{ scale: 1.01 }}
              />
              <motion.button
                onClick={handleSend}
                disabled={!inputText.trim() || isTyping}
                className={`px-6 py-3.5 rounded-2xl transition-all ${inputText.trim() && !isTyping 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg' 
                  : `${isDarkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-300 text-gray-500'} cursor-not-allowed`
                }`}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fa fa-paper-plane text-lg"></i>
              </motion.button>
            </div>
            <div className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <p>按 Enter 发送消息，Shift + Enter 换行</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;