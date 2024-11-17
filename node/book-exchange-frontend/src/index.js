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
        {/* Home page route */}
        <Route path="/" element={<Home />} /> 

        {/* Login page route */}
        <Route path="/login" element={<Login />} /> 

        {/* Register page route */}
        <Route path="/register" element={<Register />} /> 

        {/* User profile page route */}
        <Route path="/profile" element={<Profile />} /> 

        {/* Manage books page route */}
        <Route path="/manage-books" element={<ManageBooks />} /> 

        {/* Exchange requests page route */}
        <Route path="/exchange-requests" element={<ExchangeRequests />} /> 

        {/* Transaction history page route */}
        <Route path="/transaction-history" element={<TransactionHistory />} /> 

        {/* About Us page route */}
        <Route path="/about" element={<AboutUs />} /> 

        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} /> 

        {/* Forgot Password page route */}
        <Route path="/forgot-password" element={<ForgotPassword />} /> 

        {/* 404 page for unknown paths */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
}

export default App;
