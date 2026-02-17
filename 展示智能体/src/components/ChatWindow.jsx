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
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const userScrolledUpRef = useRef(false);

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
      analysis: 'deepseek-chat', // 分析智能体，对应 DeepSeek-R1
      planning: 'deepseek-coder', // 规划智能体，对应 DeepSeek-Coder
      execution: 'deepseek-vl', // 执行智能体，对应 DeepSeek-VL
      evaluation: 'deepseek-chat' // 评估智能体，对应 DeepSeek-R1
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

**灵活工作流程：**
1. 用户提出问题后，**首先调用日常问答智能体**：
   - 处理简单的日常问候和问题
   - 理解用户的真正意图
   - 引导用户明确具体需求
   - 根据问题性质，判断是否需要调用专业智能体

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
          max_tokens: 2000,
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
      <div className="prose prose-base max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ ...props }) => <h1 className="text-xl font-bold text-gray-800 mb-3 mt-4" {...props} />,
            h2: ({ ...props }) => <h2 className="text-lg font-bold text-gray-700 mb-2 mt-3" {...props} />,
            h3: ({ ...props }) => <h3 className="text-base font-semibold text-gray-700 mb-1.5 mt-2.5" {...props} />,
            p: ({ ...props }) => <p className="text-base leading-relaxed text-gray-800 mb-3" {...props} />,
            ul: ({ ...props }) => <ul className="list-disc list-inside text-base text-gray-800 mb-3 space-y-0.75" {...props} />,
            ol: ({ ...props }) => <ol className="list-decimal list-inside text-base text-gray-800 mb-3 space-y-0.75" {...props} />,
            li: ({ ...props }) => <li className="text-base text-gray-800" {...props} />,
            strong: ({ ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
            code: ({ ...props }) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-blue-600" {...props} />,
            pre: ({ ...props }) => <pre className="bg-gray-100 p-3 rounded-lg overflow-x-auto text-sm mb-3" {...props} />,
            blockquote: ({ ...props }) => <blockquote className="border-l-4 border-blue-400 pl-3 italic text-gray-600 my-3" {...props} />,
            a: ({ ...props }) => <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
            table: ({ ...props }) => <table className="w-full border-collapse my-3 text-base" {...props} />,
            thead: ({ ...props }) => <thead className="bg-gray-50" {...props} />,
            th: ({ ...props }) => <th className="border border-gray-200 px-3 py-2 text-left font-semibold" {...props} />,
            td: ({ ...props }) => <td className="border border-gray-200 px-3 py-2" {...props} />,
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
      <div className="h-full bg-white shadow-2xl flex flex-col border-l border-gray-200">
        <div className="bg-white border-b border-gray-200 px-5 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-md">
              <i className="fa fa-cogs text-white text-lg"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-base">智能体集群助手</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-gray-500">多智能体在线协作</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all"
          >
            <i className="fa fa-times text-gray-600"></i>
          </button>
        </div>

        <div 
          ref={messagesContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-5 py-4 bg-gray-50"
        >
          <div className="space-y-4">
            {messages.filter(msg => msg.text.trim() !== '').map((message, index) => (
              <div 
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[90%] flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    {message.sender === 'user' ? (
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                        <i className="fa fa-user text-white text-sm"></i>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                        <i className="fa fa-cogs text-white text-sm"></i>
                      </div>
                    )}
                  </div>
                  <div className={`px-4 py-3 rounded-xl text-base leading-relaxed shadow-md ${message.sender === 'user' ? 'rounded-tr-sm bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900' : 'rounded-tl-sm bg-white text-gray-800 border border-gray-200'}`}>
                    {message.sender === 'ai' ? (
                      <MarkdownRenderer content={message.text} />
                    ) : (
                      <div className="whitespace-pre-wrap">{message.text}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isTyping && (
            <div className="flex justify-start mt-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-md">
                  <i className="fa fa-cogs text-white text-sm"></i>
                </div>
                <div className="bg-white border border-gray-200 shadow-md px-4 py-3 rounded-xl rounded-tl-sm">
                  <div className="flex space-x-1">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="px-5 py-4 bg-white border-t border-gray-200 shadow-sm">
          <div className="flex space-x-3">
            <textarea
              value={inputText}
              onChange={(e) => {
                if (!isTyping) {
                  setInputText(e.target.value);
                  // 自动调整高度
                  const textarea = e.target;
                  textarea.style.height = 'auto';
                  const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
                  const maxHeight = lineHeight * 10; // 最多10行
                  textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
                }
              }}
              onKeyPress={handleKeyPress}
              placeholder="告诉智能体集群你的问题..."
              rows={1}
              disabled={isTyping}
              style={{ minHeight: '48px' }}
              className={`flex-1 px-4 py-3 rounded-lg transition-all text-base resize-none overflow-y-auto ${
                isTyping 
                  ? 'bg-gray-200 border border-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-gray-800'
              }`}
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isTyping}
              className={`px-5 py-3 rounded-lg transition-all ${
                inputText.trim() && !isTyping 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;