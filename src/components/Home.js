import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Inline styles
  const bodyStyle = {
    margin: 0,
    padding: 0,
    height: '100vh', // Full viewport height
    overflow: 'hidden', // Prevent scroll bars
  };
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Full viewport height
    textAlign: 'center',
    background: `url('https://img.freepik.com/free-photo/portrait-business-woman-working-laptop_1303-9727.jpg'),no-repeat center center fixed`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: '#fff',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  };

  const textContentStyle = {
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for readability
    borderRadius: '8px',
    maxWidth: '600px',
  };

  const buttonStyle = {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    borderRadius: '5px',
    marginRight: '10px',
  };

  const socialIconStyle = {
    marginRight: '10px',
  };

  const socialIconImageStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <div style={textContentStyle}>
          <h1>TAMMANA HEMA SARVANI</h1>
          <h2>Software Developer</h2>
          <p>
            Hard-working, goal-oriented, with strong technical skills seeking an opportunity to incorporate my skills and put them to use.
          </p>
          <div>
            <Link to="/resume" style={buttonStyle}>Certifications & Projects</Link>
            <Link to="/portfolio" style={buttonStyle}>Contact Details</Link>
          </div>
          <br/>
          <div>
            <a href="https://www.linkedin.com/in/tammana-hema-sarvani-391145229/" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <img src="path/to/linkedin-icon.png" alt="LinkedIn" style={socialIconImageStyle} />
            </a>
            <a href="https://github.com/Sarvani1910" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <img src="path/to/github-icon.png" alt="GitHub" style={socialIconImageStyle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

