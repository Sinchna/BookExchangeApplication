import React from 'react';

/**
 * Footer Component
 * 
 * This is a simple footer component that displays a copyright notice 
 * for the "Book Exchange Platform" with the current year. The footer is 
 * a static element at the bottom of the page and can be extended to include 
 * additional information such as social media links, contact details, etc.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 * @returns {JSX.Element} A footer containing a copyright message for the platform.
 */

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Book Exchange Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
