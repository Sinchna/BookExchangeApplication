import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import Profile from './components/Profile';
import ManageBooks from './components/ManageBooks';
import ExchangeRequests from './components/ExchangeRequests';
import TransactionHistory from './components/TransactionHistory';
import AboutUs from './components/AboutUs';

/**
 * App Component
 * 
 * This is the main component of the application, responsible for routing and displaying 
 * different pages based on the URL path. It includes the header, footer, and the routing 
 * setup for different pages such as login, registration, profile, and more.
 * 
 * Routes are handled using `react-router-dom`, and each path is mapped to a specific 
 * component to be displayed.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 * @returns {JSX.Element} The main application layout with routing and page components.
 */
function App() {
  return (
    <Router>
      {/* Header Section */}
      <Header />
      
      {/* Routing for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/login" element={<Login />} />  {/* Login page */}
        <Route path="/register" element={<Register />} />  {/* Register page */}
        <Route path="/profile" element={<Profile />} />  {/* User profile page */}
        <Route path="/manage-books" element={<ManageBooks />} />  {/* Manage books page */}
        <Route path="/exchange-requests" element={<ExchangeRequests />} />  {/* Exchange requests page */}
        <Route path="/transaction-history" element={<TransactionHistory />} />  {/* Transaction history page */}
        <Route path="/about" element={<AboutUs />} />  {/* About Us page */}
        <Route path="/contact" element={<Contact />} />  {/* Contact page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Forgot Password page */}
        <Route path="*" element={<NotFound />} />  {/* 404 page for unknown paths */}
      </Routes>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
}

export default App;
