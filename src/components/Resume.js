import React from 'react';

// You can use a local image or an external URL for the background
const backgroundImageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3p3yVs1M0pTseaNkTJxbfpgfiFDCgHO1ag&s'; // Replace with your image URL

const Resume = () => {
  // Inline styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'space-between', // Space out the text and image
    padding: '20px',
    maxWidth: '1200px',
    margin: '20px auto',
    backgroundImage: `url(${backgroundImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    boxSizing: 'border-box',
    color: '#fff', // Text color to contrast with the background
    minHeight: '400px', // Adjust the height as needed
  };

  const textStyle = {
    flex: '1', // Takes up remaining space
    paddingRight: '20px', // Space between text and image
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text readability
    borderRadius: '8px',
    padding: '20px',
  };



  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#fff', // White color for the title
  };

  const sectionContentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const listStyle = {
    margin: '0',
    padding: '0',
    listStyleType: 'none',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      {/* Text Content */}
      <div style={textStyle}>
        <div style={sectionContentStyle}>
          <h2 style={sectionTitleStyle}>PROJECTS</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>Travel log Website (05/2023-06/2023)</strong>
              <br />
              Devised a prototype, using MERN Stack useful for travelers to know about a particular place, cost, and accommodation, near places to visit, food, and culture.
            </li>
            <li style={listItemStyle}>
              <strong>Hospital Management System (12/2023– 01/2024)</strong>
              <br />
              Designed a website, using Python and its Libraries, Framework helpful for patients to contact with hospital easily and book appointment by themselves.
            </li>
            <li style={listItemStyle}>
              <strong>Langchain- Streamlit Chat with PDF using Open AI (08/2023-12/2023)</strong>
              <br />
              Coordinated a website using Langchain technology to find an answer for question asked by user in the uploaded PDF.
            </li>
          </ul>
        </div>

        <div style={sectionContentStyle}>
          <h2 style={sectionTitleStyle}>CERTIFICATIONS</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Certified for course completion in Introduction Building AI Solutions Using Advanced Algorithms and Open Source Frameworks by IBM.
            </li>
            <li style={listItemStyle}>
              Achieved certification in Data Structures and Algorithms from Smart Interviews.
            </li>
            <li style={listItemStyle}>
              Accomplished Data Analytics Using Python from NPTEL.
            </li>
            <li style={listItemStyle}>
              Attested with the course completion certificate in Python for Beginners by Skillup by Simplilearn.
            </li>
            <li style={listItemStyle}>
              Skilled in PCAP: Programming Essentials in Python course, provided by Cisco Networking Academy.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Resume;
