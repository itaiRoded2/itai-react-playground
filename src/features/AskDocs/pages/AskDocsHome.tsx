import React, { useState } from "react";
import {
  Send,
  User,
  Bot,
  Lightbulb,
  Code,
  Database,
  Brain,
  Sparkles,
  Github,
  Globe,
  Server,
} from "lucide-react";

const AskDocsHome = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Welcome to the AI Fullstack Project! I can help you with code generation, database queries, and intelligent responses.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");

  // Simulate AI responses
  const simulateAIResponse = (userMessage: string) => {
    const responses = [
      "I can help you build React components, write SQL queries, or explain complex algorithms. What would you like to work on?",
      "Here's a code snippet that might help with your project. Let me know if you need any modifications!",
      "I've analyzed your request. Would you like me to generate some sample code or provide architectural recommendations?",
      "Great question! I can create database schemas, API endpoints, or frontend components based on your needs.",
      "I'm processing your request using advanced AI algorithms. Here's what I recommend for your fullstack application...",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    const messageToProcess = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        content: simulateAIResponse(messageToProcess),
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Responses",
      description:
        "Intelligent conversation and code generation using advanced AI models",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Generation",
      description:
        "Generate React components, APIs, and database schemas automatically",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Integration",
      description:
        "Seamless integration with PostgreSQL and intelligent query optimization",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Full Stack Architecture",
      description:
        "Complete backend API with authentication and real-time features",
    },
  ];

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "PostgreSQL", color: "bg-indigo-500" },
    { name: "Express", color: "bg-gray-600" },
    { name: "OpenAI API", color: "bg-purple-500" },
    { name: "Socket.io", color: "bg-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  AI Fullstack Project
                </h1>
                <p className="text-sm text-slate-400">
                  Intelligent Development Platform
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-white transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white transition-all">
                <Globe className="w-4 h-4" />
                <span>Deploy</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-2 mb-6">
          {["chat", "features", "tech-stack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "chat" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 h-96 flex flex-col">
                <div className="p-4 border-b border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-blue-400" />
                    AI Assistant
                  </h3>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                        }`}
                    >
                      <div
                        className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.type === "user"
                            ? "flex-row-reverse space-x-reverse"
                            : ""
                          }`}
                      >
                        <div
                          className={`p-2 rounded-full ${message.type === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-600"
                              : "bg-slate-700"
                            }`}
                        >
                          {message.type === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <div
                            className={`p-3 rounded-lg ${message.type === "user"
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                                : "bg-slate-700 text-slate-100"
                              }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-full bg-slate-700">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-700 p-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-slate-700/50">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about fullstack development..."
                      className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-all"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {[
                    "Generate React component",
                    "Create API endpoint",
                    "Design database schema",
                    "Write test cases",
                    "Optimize performance",
                  ].map((action, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(action)}
                      className="w-full text-left p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-slate-200 text-sm transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Project Status
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Frontend</span>
                    <span className="text-green-400">Ready</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Backend API</span>
                    <span className="text-yellow-400">In Progress</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Database</span>
                    <span className="text-yellow-400">Configuring</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">AI Integration</span>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tech-stack" && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Architecture Overview
              </h3>
              <div className="text-slate-300 space-y-3">
                <p>
                  • <strong className="text-white">Frontend:</strong> React with
                  modern hooks and components
                </p>
                <p>
                  • <strong className="text-white">Backend:</strong> Node.js
                  with Express.js for RESTful APIs
                </p>
                <p>
                  • <strong className="text-white">Database:</strong> PostgreSQL
                  with optimized queries
                </p>
                <p>
                  • <strong className="text-white">AI Integration:</strong>{" "}
                  OpenAI GPT models for intelligent responses
                </p>
                <p>
                  • <strong className="text-white">Real-time:</strong> Socket.io
                  for live communication
                </p>
                <p>
                  • <strong className="text-white">Authentication:</strong>{" "}
                  JWT-based secure user sessions
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskDocsHome;