"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArtPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "arte", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100"
        style={{ backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,.2) 2%, transparent 50%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif text-xl text-gray-800">Shey Arte</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About Me", "Arte", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", ""))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase().replace(" ", "")
                      ? "text-pink-400"
                      : "text-gray-600 hover:text-pink-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-pink-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "About Me", "Arte", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", ""))}
                    className="block px-3 py-2 text-gray-600 hover:text-pink-400 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center paper-texture-white pt-16">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Image
              src="/images/ab.jpg"
              alt="Featured Artwork"
              width={300}
              height={400}
              className="mx-auto rounded-lg shadow-lg border border-pink-100"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">Welcome to Shey Arte</h1>
          <p className="text-gray-600 text-lg">my life</p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="aboutme" className="min-h-screen paper-texture-pink py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/pp.jpg"
                alt="Artist Portrait"
                width={400}
                height={600}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg border border-white"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl text-gray-800 mb-6">About Me</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  11 Highschool student from Indonesia, passionate about art and creativity. I find inspiration in the
                  world around me, capturing the essence of life through my artwork.
                </p>
                <p>
                  I believe that art is a powerful medium for self-expression and connection. My journey as an artist
                  has been a path of discovery, where I explore different styles and techniques to convey my thoughts
                  and emotions.
                </p>
                <p>
                  Through sketches, paintings, and digital illustrations, I aim to create art that resonates with the
                  soul and brings a sense of peace and wonder to those who view it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arte Section */}
      <section id="arte" className="min-h-screen paper-texture-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-gray-800 text-center mb-12">Arte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="group cursor-pointer">
                <Image
                  src={`/images/s${index + 1}.jpg`}
                  alt={`Artwork ${index + 1}`}
                  width={250}
                  height={300}
                  className="w-full rounded-lg shadow-md border border-pink-100 transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen paper-texture-pink relative grain-overlay flex items-center justify-center"
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-gray-800 mb-8">Let's Connect!</h2>
          <p className="text-gray-700 mb-12 text-lg">
            Follow my artistic journey and get in touch for commissions or collaborations.
          </p>
          <div className="flex justify-center space-x-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/50 border-pink-200 hover:bg-white hover:border-pink-300 transition-colors"
              asChild
            >
              <a href="https://www.instagram.com/trulynotruth?igsh=MXVweWtoa2pqcDB0cQ==" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 mr-2 text-pink-400" />
                Instagram
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/50 border-pink-200 hover:bg-white hover:border-pink-300 transition-colors"
              asChild
            >
              <a href="https://wa.me/6285730724630" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2 text-green-500" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
