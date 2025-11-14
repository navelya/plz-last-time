import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: '#0F172A' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting Digital Excellence
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#0F172A' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We partner with forward-thinking brands to create meaningful digital experiences that drive results.
          </motion.p>
          
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: '#F9FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#0F172A' }}>
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <motion.div 
              key="0"
              className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#e5e5e5'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>
                Brand Strategy
              </h3>
              <p style={{ color: '#666666' }}>
                Building powerful brand identities that resonate with your audience
              </p>
            </motion.div>
            
            <motion.div 
              key="1"
              className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#e5e5e5'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>
                Digital Design
              </h3>
              <p style={{ color: '#666666' }}>
                Creating stunning visual experiences across all digital touchpoints
              </p>
            </motion.div>
            
            <motion.div 
              key="2"
              className="p-8 rounded-xl border-2 transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: '#ffffff',
                borderColor: '#e5e5e5'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F172A' }}>
                Development
              </h3>
              <p style={{ color: '#666666' }}>
                Bringing designs to life with cutting-edge technology
              </p>
            </motion.div>
            
          </div>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: '#0F172A' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#FFFFFF' }}>
            Crafting Digital Excellence
          </h2>
          {submitted ? (
            <div className="text-center p-12 rounded-xl border-2" style={{ borderColor: '#10b981', backgroundColor: '#f0fdf4' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>Thank You!</h3>
              <p style={{ color: '#059669' }}>Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div key="name">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                  Full Name *
                </label>
                
                <input
                  type="text"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, 'name': e.target.value})}
                />
                
              </div>
              
              <div key="email">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                  Email Address *
                </label>
                
                <input
                  type="email"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="john@example.com"
                  onChange={(e) => setFormData({...formData, 'email': e.target.value})}
                />
                
              </div>
              
              <div key="phone">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                  Phone Number
                </label>
                
                <input
                  type="phone"
                  required={false}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="+1 (555) 000-0000"
                  onChange={(e) => setFormData({...formData, 'phone': e.target.value})}
                />
                
              </div>
              
              <div key="message">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                  Message
                </label>
                
                <textarea
                  required={false}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  rows={4}
                  placeholder="Tell us more about your needs..."
                  onChange={(e) => setFormData({...formData, 'message': e.target.value})}
                />
                
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#0F172A',
                  color: '#ffffff'
                }}
              >
                View Our Work
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}

