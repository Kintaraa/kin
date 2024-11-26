// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'

// Pages & Layouts
import HomePage from './pages/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import SurvivorDashboard from './pages/dashboard/SurvivorDashboard'
import MedicalDashboard from './pages/dashboard/MedicalDashboard'
import LegalDashboard from './pages/dashboard/LegalDashboard'
import CounselorDashboard from './pages/dashboard/CounselorDashboard'
import ProfileSettings from './pages/dashboard/ProfileSettings'
import IncidentReportPage from './pages/dashboard/IncidentReportPage'
import ResourcesPage from './pages/ResourcesPage'
import CommunityPage from './pages/CommunityPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

// Components
import Header from './components/common/Header'
import ProtectedRoute from './components/auth/ProtectedRoute'
import EmergencyButton from './components/common/EmergencyButton'
import Footer from './components/common/Footer'

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
      <Header />
        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              style: {
                background: '#059669',
              },
            },
            error: {
              duration: 4000,
              style: {
                background: '#DC2626',
              },
            },
          }}
        />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Protected dashboard routes */}
            <Route path="/dashboard">
              {/* Survivor Routes */}
              <Route
                path="survivor"
                element={
                  <ProtectedRoute>
                    <SurvivorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="survivor/report"
                element={
                  <ProtectedRoute>
                    <IncidentReportPage />
                  </ProtectedRoute>
                }
              />

              {/* Medical Professional Routes */}
              <Route
                path="medical"
                element={
                  <ProtectedRoute>
                    <MedicalDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Legal Counsel Routes */}
              <Route
                path="legal"
                element={
                  <ProtectedRoute>
                    <LegalDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Counselor Routes */}
              <Route
                path="counselor"
                element={
                  <ProtectedRoute>
                    <CounselorDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Shared Dashboard Routes */}
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <ProfileSettings />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* 404 Route */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a
                    href="/"
                    className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Go Home
                  </a>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Emergency Button - Always visible */}
        <EmergencyButton />

        {/* Footer */}
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App