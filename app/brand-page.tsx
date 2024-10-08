'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, FileText, DollarSign, ShieldCheck } from 'lucide-react'
import { useRouter } from 'next/router'
import '../styles/brand-page.css'
import '../styles/globals.css'

export default function BrandPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">CanTax Pro</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            File Now
          </Button>
        </div>
      </header>

      <main className="pt-20">
        <section className="hero container mx-auto px-4 py-20 text-center">
          <motion.h2 
            className="text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Simplify Your Canadian Taxes
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fast, accurate, and secure tax filing for individuals and businesses
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Tax Return
            </Button>
          </motion.div>
        </section>

        <motion.section style={{ opacity }} className="features container mx-auto px-4 py-20" id="features">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose CanTax Pro?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Easy to Use", icon: <FileText className="w-12 h-12 text-blue-500 mb-4" />, description: "Intuitive interface guides you through the tax filing process step by step." },
              { title: "Maximize Refunds", icon: <DollarSign className="w-12 h-12 text-green-500 mb-4" />, description: "Our smart algorithms ensure you claim every deduction and credit you're entitled to." },
              { title: "Secure & Compliant", icon: <ShieldCheck className="w-12 h-12 text-purple-500 mb-4" />, description: "Bank-level encryption and full compliance with CRA regulations for your peace of mind." }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <section className="pricing bg-gray-50 py-20" id="pricing">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Affordable Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Basic", price: "$19.99", features: ["Personal tax return", "Basic deductions", "Email support"] },
                { title: "Pro", price: "$39.99", features: ["Personal & small business", "Advanced deductions", "Priority support", "Audit assistance"] },
                { title: "Enterprise", price: "Custom", features: ["Multiple business entities", "Dedicated account manager", "Custom integrations", "24/7 support"] }
              ].map((plan, index) => (
                <Card key={index} className={`text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${index === 1 ? 'border-blue-500 border-2' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-blue-600 my-4">{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials container mx-auto px-4 py-20" id="testimonials">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sarah L.", role: "Small Business Owner", quote: "CanTax Pro saved me hours of work and maximized my refund. Highly recommended!" },
              { name: "Michael T.", role: "Freelance Designer", quote: "The interface is so intuitive, and the support team is always there when I need them." }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="cta bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Simplify Your Taxes?</h3>
            <p className="text-xl mb-8">Join thousands of satisfied customers and file your taxes with confidence.</p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started Now <ArrowRight className="ml-2 inline-block" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">CanTax Pro</h4>
              <p>Simplifying Canadian taxes for individuals and businesses.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p>Email: support@cantaxpro.com</p>
              <p>Phone: 1-800-TAX-HELP</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 CanTax Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}