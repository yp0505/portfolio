'use client'

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ChatButton from './chat-button';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">YP</span>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
              <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Experience</a>
              <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Skills</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-20 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-20 pb-16">
            <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12">
              <div className="mb-8 md:mb-0">
                <div className="relative">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="Yash Pise" 
                    className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  Yash Pise
                </h1>
                <p className="mt-3 text-xl text-gray-600">
                  Data Scientist & Full Stack Developer
                </p>
                <p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg">
                  Specialized in Machine Learning, AI, and Full Stack Development
                </p>
                <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
                  <Button className="flex items-center gap-2">
                    <Mail size={16} /> Contact Me
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github size={16} /> GitHub
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">5+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">20+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">10+</p>
                  <p className="text-gray-600">Technologies</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">3</p>
                  <p className="text-gray-600">Companies</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default Portfolio;