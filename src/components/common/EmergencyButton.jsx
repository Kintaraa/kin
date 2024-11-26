// src/components/common/EmergencyButton.jsx
const EmergencyButton = () => {
    return (
      <button className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors flex items-center space-x-2 z-50">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Emergency Help</span>
      </button>
    )
  }
  
  export default EmergencyButton