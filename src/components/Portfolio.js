import React from 'react';

// Inline styles
const containerStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: '20px auto',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  color: '#333',
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '10px',
};

const contactItemStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '10px',
};

const linkStyle = {
  color: '#0073e6', // LinkedIn blue
  textDecoration: 'none',
};

const Portfolio = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Contact Details</h2>
      <p style={contactItemStyle}>
        <strong>Name:</strong> TAMMANA HEMA SARVANI
      </p>
      <p style={contactItemStyle}>
        <strong>Email:</strong> <a href="mailto:tammanahemasarvani@gmail.com" style={linkStyle}>tammanahemasarvani@gmail.com</a>
      </p>
      <p style={contactItemStyle}>
        <strong>Mobile No.:</strong> 8309749824
      </p>
      <p style={contactItemStyle}>
        <strong>Address:</strong> H.No.: 8-39/7, Gaddiannaram, Dilkushnagar, Hyderabad
      </p>
      <p style={contactItemStyle}>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tammana-hema-sarvani-391145229/" style={linkStyle} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
    </div>
  );
};

export default Portfolio;
