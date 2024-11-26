// src/pages/HomePage.jsx
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                Kintaraa
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 px-4">
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transform Trauma</span>
            <span className="block text-purple-600">Into Resilience</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A secure and anonymous platform connecting survivors with professional support services. 
            Your journey to healing starts here.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Button */}
      <button className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors flex items-center space-x-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Emergency Help</span>
      </button>
    </div>
  )
}

export default HomePage