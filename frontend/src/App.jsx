import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Alerts from './pages/Alerts';
import Login from './pages/Login';
import Register from './pages/Register';
import UserManagement from './pages/UserManagement';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="risk-policies" element={<PlaceholderPage title="Risk Policies" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Placeholder component for future pages
function PlaceholderPage({ title }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h1 style={{ color: '#1a1a1a', marginBottom: '16px' }}>{title}</h1>
      <p style={{ color: '#666', fontSize: '16px' }}>
        This page will be implemented in future sprints.
      </p>
    </div>
  );
}

export default App;
