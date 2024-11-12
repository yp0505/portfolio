'use client'

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([
        { text: "Hello! I'm an AI assistant representing Yash Pise. How can I help you today?", isUser: false },
      ]);
    }
  };

  const suggestions = [
    "Tell me about Yash's experience",
    "What are Yash's key skills?",
    "What projects has Yash worked on?",
  ];

  const handleSend = (message: string = input) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isUser: true }]);
      // Here you would typically send the message to your AI backend
      // For now, we'll just simulate a response
      setTimeout(() => {
        let response = "I'm sorry, I don't have specific information about that. Is there anything else I can help you with?";
        if (message.toLowerCase().includes('experience')) {
          response = "Yash has over 5 years of experience in Data Science and Full Stack Development, working with companies in various industries.";
        } else if (message.toLowerCase().includes('skills')) {
          response = "Yash's key skills include Machine Learning, AI, Python, JavaScript, React, and Node.js, among others.";
        } else if (message.toLowerCase().includes('projects')) {
          response = "Yash has worked on numerous projects, including AI-powered recommendation systems, data visualization dashboards, and full-stack web applications.";
        }
        setMessages(prev => [...prev, { text: response, isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80">
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold">Chat with AI Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} aria-label="Close chat">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">You can ask me about:</p>
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="mr-2 mb-2"
                    onClick={() => handleSend(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                aria-label="Chat message input"
              />
              <Button onClick={() => handleSend()} aria-label="Send message">Send</Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button onClick={toggleChat} className="rounded-full h-12 w-12 flex items-center justify-center" aria-label="Open chat">
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatButton;