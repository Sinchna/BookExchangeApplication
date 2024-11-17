import React from 'react';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component

/**
 * Home Component
 * 
 * This is the main landing page for the Book Exchange platform.
 * The page includes several sections:
 * - Header with navigation
 * - Hero section with welcome message and call to action
 * - Featured Books section showing a scrollable list of books
 * - How It Works section explaining the platform's process
 * - Footer for contact or additional information
 */
const Home = () => {
  return (
    <div
      style={{
        display: 'flex', // Makes the layout flexible
        flexDirection: 'column', // Stacks the sections vertically
        minHeight: '100vh', // Ensures the layout fills the viewport height
      }}
    >
      {/* Header Section */}
      {/* 
        The header contains the main navigation of the site, like logo and menu.
        The Header component is imported and rendered here.
      */}
      <div style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <Header /> {/* Render the Header component */}
      </div>

      {/* Hero Section */}
      {/*
        This section is a large banner with a background image, a welcome heading,
        and a call-to-action button that directs users to the book browsing page.
        The background image is set with a placeholder URL.
      */}
      <section
        style={{
          backgroundImage: "url('https://via.placeholder.com/1500x800?text=Books+Background+With+Technology+Feel')", // Background image
          backgroundSize: 'cover', // Ensures the image covers the entire section
          backgroundPosition: 'center', // Centers the image
          color: 'white', // White text on the banner
          textAlign: 'center', // Centers text within the section
          padding: '80px 20px', // Adds padding to top and bottom
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to the Book Exchange Platform</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Exchange books with others easily and conveniently!
        </p>
        <a
          href="/browse" // Links to the browse books page
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          Start Trading
        </a>
      </section>

      {/* Featured Books Section */}
      {/*
        This section shows featured books. The books are displayed horizontally
        and can be scrolled. Each book has an image, title, description, and a button to initiate an exchange.
      */}
      <section
        style={{
          padding: '40px 20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Featured Books</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Centers the books horizontally
            gap: '20px', // Adds space between books
            overflowX: 'scroll', // Enables horizontal scrolling
            padding: '10px 0', // Adds padding to the container
            scrollbarWidth: 'thin', // Makes the scrollbar thinner for modern browsers
            WebkitOverflowScrolling: 'touch', // Enables smooth scrolling for touch devices
            maxWidth: '100%', // Prevents the container from stretching too far
            scrollBehavior: 'smooth', // Enables smooth scrolling effect
          }}
        >
          {/* Book 1 */}
          <div style={{ width: '200px', textAlign: 'center', flexShrink: 0 }}>
            <img
              src="https://covers.openlibrary.org/b/id/10462577-L.jpg"
              alt="The Great Gatsby"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Ensures the image covers the area proportionally
            />
            <h3 style={{ marginTop: '10px' }}>The Great Gatsby</h3>
            <p style={{ color: '#6c757d' }}>
              A classic novel of the Roaring Twenties by F. Scott Fitzgerald.
            </p>
            <a
              href="/exchange"
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Exchange Now
            </a>
          </div>

          {/* Book 2 */}
          <div style={{ width: '200px', textAlign: 'center', flexShrink: 0 }}>
            <img
              src="https://covers.openlibrary.org/b/id/7222246-L.jpg"
              alt="1984"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <h3 style={{ marginTop: '10px' }}>1984</h3>
            <p style={{ color: '#6c757d' }}>
              A dystopian novel by George Orwell about totalitarianism.
            </p>
            <a
              href="/exchange"
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Exchange Now
            </a>
          </div>

          {/* Book 3 */}
          <div style={{ width: '200px', textAlign: 'center', flexShrink: 0 }}>
            <img
              src="https://covers.openlibrary.org/b/id/7870354-L.jpg"
              alt="To Kill a Mockingbird"
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <h3 style={{ marginTop: '10px' }}>To Kill a Mockingbird</h3>
            <p style={{ color: '#6c757d' }}>
              Harper Lee's Pulitzer Prize-winning novel about racial injustice.
            </p>
            <a
              href="/exchange"
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Exchange Now
            </a>
          </div>

          {/* Additional Books */}
          {/* Additional books are added in a similar manner, with placeholders for images and titles */}
        </div>
      </section>

      {/* How It Works Section */}
      {/*
        This section explains the steps on how to use the Book Exchange platform.
        It displays three steps: Create an account, browse books, and exchange books.
      */}
      <section
        style={{
          padding: '40px 20px',
          textAlign: 'center',
          backgroundColor: '#e9ecef',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          {/* Step 1 */}
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Create an Account</h3>
            <p>Sign up to start browsing and exchanging books.</p>
          </div>
          {/* Step 2 */}
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Browse Available Books</h3>
            <p>Explore books available for exchange and request them.</p>
          </div>
          {/* Step 3 */}
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Exchange Books</h3>
            <p>Connect with users and exchange books easily.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/*
        The footer contains additional information such as links or contact info.
        The Footer component is imported and rendered here.
      */}
      <div style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <Footer /> {/* Render the Footer component */}
      </div>
    </div>
  );
};

export default Home;
