'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = { role: 'user', content: inputMessage };
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.output };
      setMessages((prev: Message[]) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev: Message[]) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed bottom-4 right-4 chatbot-container"
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        isolation: 'isolate'
      }}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/25"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div 
          className="flex flex-col w-96 h-[600px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-green-100 dark:border-green-900/30 backdrop-blur-sm chatbot-window"
          style={{ 
            zIndex: 999999,
            position: 'relative'
          }}
        >
          <div className="flex items-center justify-between p-4 border-b border-green-100 dark:border-green-900/30">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Chat Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
            >
              <X className="w-5 h-5 text-green-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-100'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-[bounce_1s_infinite_0ms]" />
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-[bounce_1s_infinite_200ms]" />
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-[bounce_1s_infinite_400ms]" />
                    <span className="text-sm text-green-600 dark:text-green-400 ml-2">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-green-100 dark:border-green-900/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-xl border border-green-200 dark:border-green-800 bg-white dark:bg-slate-900 text-green-900 dark:text-green-100 placeholder-green-400 dark:placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="p-2 rounded-xl bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-green-500/25"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 