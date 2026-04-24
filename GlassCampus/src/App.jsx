import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Menu, X } from 'lucide-react';

const MOCK_REVIEWS = [
  {
    id: 1,
    university: 'New York University',
    student: 'Junior @ NYU',
    rating: 3,
    excerpt: 'The education is top-tier, but you\'ll be broke forever. $80k a year to share a closet with three roommates in Brooklyn. Make it make sense.',
    tags: ['Academics', 'Value', 'Campus Life']
  },
  {
    id: 2,
    university: 'University of Texas',
    student: 'Senior @ UT Austin',
    rating: 4,
    excerpt: 'Amazing campus culture and solid academics for the price. Just prepare to melt in 100°F heat while walking between classes. AC is life.',
    tags: ['Campus Life', 'Value', 'Academics']
  },
  {
    id: 3,
    university: 'Stanford University',
    student: 'Sophomore @ Stanford',
    rating: 4,
    excerpt: 'Stanford is incredible but the pressure cooker environment is real. Everyone\'s starting the next unicorn startup. Just want to graduate without burnout.',
    tags: ['Academics', 'Mental Health', 'Career']
  },
  {
    id: 4,
    university: 'Arizona State University',
    student: 'Junior @ ASU',
    rating: 5,
    excerpt: 'Best decision I ever made. Great academics, insane social scene, and I\'ll actually graduate without $200k in debt. Party school rep is earned though.',
    tags: ['Campus Life', 'Value', 'Social']
  }
];

function App() {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg" />
              <span className="text-xl font-bold tracking-tight">GlassCampus</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Home</a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Browse Reviews</a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Submit Review</a>
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">About</a>
              <button className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 border border-white/10">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Home</a>
              <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Browse Reviews</a>
              <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">Submit Review</a>
              <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150">About</a>
              <button className="w-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 border border-white/10">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            The Brutal Truth
            <br />
            About College
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Real reviews from real students.
            <br />
            <span className="text-purple-400 font-semibold">No sugarcoating.</span>
          </motion.p>

          {/* Email Signup Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              style={{ fontSize: '16px' }}
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.97] shadow-lg shadow-purple-500/25"
            >
              Get Early Access
            </button>
          </motion.form>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Featured Reviews
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-out"
              >
                {/* Glassmorphism effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{review.university}</h3>
                      <p className="text-sm text-gray-400">{review.student}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? 'fill-purple-500 text-purple-500' : 'text-gray-600'}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Excerpt */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {review.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {review.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for the truth?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students sharing honest college experiences.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.97] shadow-lg shadow-purple-500/25">
            Submit Your Review
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg" />
              <span className="font-bold">GlassCampus</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-150">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-150">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-150">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2024 GlassCampus. The unfiltered truth about college.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;