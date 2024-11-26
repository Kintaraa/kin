// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import SurvivorDashboard from './pages/dashboard/SurvivorDashboard'
import MedicalDashboard from './pages/dashboard/MedicalDashboard'
import LegalDashboard from './pages/dashboard/LegalDashboard'
import CounselorDashboard from './pages/dashboard/CounselorDashboard'
import ProfileSettings from './pages/dashboard/ProfileSettings'
import IncidentReportPage from './pages/dashboard/IncidentReportPage'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
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
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected dashboard routes */}
        <Route path="/dashboard">
          {/* Survivor Dashboard */}
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

          {/* Medical Professional Dashboard */}
          <Route
            path="medical"
            element={
              <ProtectedRoute>
                <MedicalDashboard />
              </ProtectedRoute>
            }
          />

          {/* Legal Counsel Dashboard */}
          <Route
            path="legal"
            element={
              <ProtectedRoute>
                <LegalDashboard />
              </ProtectedRoute>
            }
          />

          {/* Counselor Dashboard */}
          <Route
            path="counselor"
            element={
              <ProtectedRoute>
                <CounselorDashboard />
              </ProtectedRoute>
            }
          />

          {/* Profile Settings (shared across all user types) */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App