import React from 'react';

/**
 * NotFound Component
 * 
 * This component displays a 404 error message when the user navigates to a non-existent page.
 * It informs the user that the page they are looking for does not exist.
 * 
 * Usage:
 * - This component is typically used for rendering a 404 error page in case of an invalid URL.
 * 
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 * @returns {JSX.Element} A JSX element representing a "Page Not Found" message.
 */
const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ fontSize: '3rem', color: '#dc3545' }}>404 Not Found</h2>
      <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '1.1rem',
        }}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
