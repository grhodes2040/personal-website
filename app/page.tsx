"use client"

import { Mail, Linkedin, Twitter, Github, ExternalLink, MapPin, Trophy, Camera, Check, Hospital, Music, Moon, Sun, MountainSnow } from "lucide-react"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(saved ? JSON.parse(saved) : prefersDark)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`} style={{
      backgroundImage: `radial-gradient(circle, ${isDark ? '#374151' : '#e5e7eb'} 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }}>
      <Analytics />
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Dark Mode Toggle */}
        <div className="fixed top-6 right-6 z-10">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer shadow-sm ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600' 
                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 text-yellow-400`} />
            ) : (
              <Moon className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 text-gray-600`} />
            )}
            <span className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
              isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-700 group-hover:text-black'
            }`}>
              {isDark ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>
        {/* Hero */}
        <div className="mb-20">
          <h1 className={`text-4xl font-semibold mb-4 tracking-tight leading-tight transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Hi, I&apos;m Garrett Rhodes 👋</h1>
          <div className="space-y-4">
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Welcome to my website! It&apos;s a work in progress, but I&apos;m excited to build a space to share my experience, writing, photography, and much more. 
            </p>
            <div className="flex flex-wrap gap-3">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <MapPin className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'
                }`}>
                  Based in Denver, CO
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-red-900/30 hover:bg-red-900/40' : 'bg-red-50 hover:bg-red-100'
              }`}>
                <Trophy className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-red-400 group-hover:text-red-300' : 'text-red-600 group-hover:text-red-700'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-red-300 group-hover:text-red-200' : 'text-red-700 group-hover:text-red-800'
                }`}>
                  Badgers Sports
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-sky-900/30 hover:bg-sky-900/40' : 'bg-sky-50 hover:bg-sky-100'
              }`}>
                <MountainSnow className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-sky-400 group-hover:text-sky-300' : 'text-sky-500 group-hover:text-sky-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-sky-300 group-hover:text-sky-200' : 'text-sky-700 group-hover:text-sky-800'
                }`}>
                  Downhill Skier
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-green-900/30 hover:bg-green-900/40' : 'bg-green-50 hover:bg-green-100'
              }`}>
                <Check className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-green-400 group-hover:text-green-300' : 'text-green-500 group-hover:text-green-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-green-300 group-hover:text-green-200' : 'text-green-700 group-hover:text-green-800'
                }`}>
                  Hockey Player
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-stone-700/30 hover:bg-stone-700/40' : 'bg-stone-50 hover:bg-stone-100'
              }`}>
                <Camera className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-stone-400 group-hover:text-stone-300' : 'text-stone-500 group-hover:text-stone-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-stone-300 group-hover:text-stone-200' : 'text-stone-700 group-hover:text-stone-800'
                }`}>
                  Photograhy
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-lime-900/30 hover:bg-lime-900/40' : 'bg-lime-50 hover:bg-lime-100'
              }`}>
                <Music className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-lime-400 group-hover:text-lime-300' : 'text-lime-500 group-hover:text-lime-600'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-lime-300 group-hover:text-lime-200' : 'text-lime-700 group-hover:text-lime-800'
                }`}>
                  EDM Enjoyer
                </span>
              </div>
              
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 group cursor-default hover:shadow-sm ${
                isDark ? 'bg-rose-900/30 hover:bg-rose-900/40' : 'bg-rose-50 hover:bg-rose-100'
              }`}>
                <Hospital className={`h-4 w-4 transition-all duration-200 group-hover:scale-110 ${
                  isDark ? 'text-rose-400 group-hover:text-rose-300' : 'text-rose-600 group-hover:text-rose-700'
                }`} />
                <span className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isDark ? 'text-rose-300 group-hover:text-rose-200' : 'text-rose-800 group-hover:text-rose-900'
                }`}>
                  HealthTech Nerd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Experience</h2>
          <div className="space-y-12">
            <div className={`group rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default ${
              isDark ? 'hover:bg-gray-800 hover:shadow-sm' : 'hover:bg-gray-50 hover:shadow-sm'
            }`}>
              <div className="mb-4">
                <Link 
                  href="https://redoxengine.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-all duration-200 px-1 -mx-1 rounded text-lg font-medium ${
                    isDark 
                      ? 'text-gray-300 group-hover:text-gray-200 hover:bg-yellow-900' 
                      : 'text-gray-600 group-hover:text-gray-700 hover:bg-yellow-200'
                  }`}
                >
                  Redox
                </Link>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-lg font-medium transition-colors duration-200 ${
                      isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                    }`}>SVP, Growth</h3>
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>2025 - 2026</span>
                  </div>
                  <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                    isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
                  }`}>
                    Led the sales team to drive growth for Redox&apos;s healthcare integration platform across all verticals, along with all of the other activities that never fully drop off your plate.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-lg font-medium transition-colors duration-200 ${
                      isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                    }`}>Director of Sales, Vendors</h3>
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>2024 - 2025</span>
                  </div>
                  <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                    isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
                  }`}>
                    Asked to come back into the sales team to lead Redox&apos;s Vendor team, selling across all core digital health verticals.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-lg font-medium transition-colors duration-200 ${
                      isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                    }`}>Product Manager / Product Strategist</h3>
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>2021 - 2023</span>
                  </div>
                  <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                    isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
                  }`}>
                    A healthy mix of new product development in emerging markets, speaking on stages, and working closely with our CEO and board on corporate strategy and development.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-lg font-medium transition-colors duration-200 ${
                      isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                    }`}>Startup Sales</h3>
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>2017 - 2021</span>
                  </div>
                  <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                    isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
                  }`}>
                    20th employee. First external SDR. Account Executive. Team lead. All things startup sales and business development. Talked to nearly every company in healthcare over these 4 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exploring, Learning, & Building */}
        <div className="mb-20">
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Exploring, Learning, & Building</h2>
          <div className="space-y-8">
            <div>
              <p className={`leading-relaxed mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I recently left my job to dive headfirst into a myriad of different interests. Things I am exploring currently:
              </p>
              <ul className={`list-disc list-inside space-y-2 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>AI tools and coding - building small projects to learn more about software development.</li>
                <li>Small business M&A - exploring small business ownership and helping an aluminum company with M&A.</li>
                <li>Financial markets and investing - learning more about investing, modeling, trading, and macro economic factors, with a focus on the AI buildout.</li>
                <li>Health and fitness - focusing on physical and mental well-being through exercise and diet.</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div>
                <Link
                  href="https://github.com/grhodes2040"
                  className={`flex items-center gap-2 transition-all duration-200 hover:translate-x-1 font-medium text-base mb-6 ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
                  Follow my coding journey on GitHub
                </Link>
              </div>
              
              <div className={`group rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-default ${
              isDark ? 'hover:bg-gray-800 hover:shadow-sm' : 'hover:bg-gray-50 hover:shadow-sm'
            }`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className={`text-lg font-medium transition-colors duration-200 ${
                    isDark ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-gray-900'
                  }`}>This Website</h3>
                  <ExternalLink className={`h-5 w-5 transition-colors duration-200 ${
                    isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'
                  }`} />
                </div>
                <p className={`leading-relaxed transition-colors duration-200 text-sm ${
                isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'
              }`}>
                  My first coding project - built with Next.js, TypeScript, and Tailwind CSS. Learning by building + heavy inspiration from https://github.com/pgujare. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <Link 
                href="https://www.wisc.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-lg font-medium px-1 -mx-1 rounded transition-all duration-200 ${
                  isDark ? 'text-white hover:bg-blue-900' : 'text-black hover:bg-blue-200'
                }`}
              >
                University of Wisconsin-Madison
              </Link>
            </div>
            <p className={`leading-relaxed text-sm mt-2 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              B.B.A. in Actuarial Science<br />
              B.B.A. in Finance, Investment and Banking
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className={`text-2xl font-semibold mb-8 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Contact</h2>
          <div className="flex gap-6">
            <Link
              href="https://x.com/garrettroads"
              className={`flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] font-medium text-base ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <Twitter className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              X
            </Link>
            <Link
              href="https://linkedin.com/in/garrettrhodes1"
              className={`flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] font-medium text-base ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <Linkedin className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              LinkedIn
            </Link>
            <Link
              href="mailto:g.rhodes72@hotmail.com"
              className={`flex items-center gap-2 transition-all duration-200 hover:translate-y-[-2px] font-medium text-base ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <Mail className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
