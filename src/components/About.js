import React from 'react';

const About = () => {
  // Inline styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top
    padding: '20px',
    backgroundColor: '#f4f4f4', // Light background color for contrast
    borderRadius: '8px',
    maxWidth: '1200px', // Increase width if needed
    margin: '20px auto', // Center content horizontally
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '30%', // Adjust width to fit your layout
    height: 'auto',
    borderRadius: '8px',
    marginRight: '20px', // Space between the image and text
  };

  const textContentStyle = {
    flex: 1, // Allows the text content to take remaining space
    textAlign: 'left', // Align text to the left
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
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
      {/* Main Image */}
      <img src="https://static.vecteezy.com/system/resources/thumbnails/046/969/940/small_2x/illustration-of-writing-vector.jpg" alt="Profile" style={imageStyle} />
      
      <div style={textContentStyle}>
        <div style={sectionContentStyle}>
          <h2 style={sectionTitleStyle}>ACADEMIC QUALIFICATION</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong>B.TECH in Computer Science and Engineering – Artificial Intelligence and Machine Learning</strong>
              <br />
              MLR Institute of Technology 11/2021-03/2025 CGPA-8.38
            </li>
            <li style={listItemStyle}>
              <strong>TELANGANA BOARD OF INTERMEDIATE EDUCATION</strong>
              <br />
              Sri Gayatri Junior College MPC 06/2019-03/2021 Percentage-86.6
            </li>
            <li style={listItemStyle}>
              <strong>BOARD OF SECONDARY EDUCATION</strong>
              <br />
              Ravindra Bharathi School 03/2019 CGPA-9.7
            </li>
          </ul>
        </div>

        <div style={sectionContentStyle}>
          <h2 style={sectionTitleStyle}>TECHNICAL SKILLS</h2>
          <p>
            Research Areas: AI, Machine Learning<br />
            Languages: Java, Python, NLP, Computer Vision, Deep Learning<br />
            Web Technologies: HTML, CSS, JavaScript<br />
            Database: DBMS, MongoDB<br />
            Others: Auto CAD, OS, Software Engineering, Leadership skills, Team Building skills, Generative AI Tools, Data Structures and Algorithms, Linux.
          </p>
        </div>

        <div style={sectionContentStyle}>
          <h2 style={sectionTitleStyle}>INTERESTS</h2>
          <p>Artificial Intelligence Exploration | Drawing</p>
        </div>

        <div style={sectionContentStyle}>
          <h2 style={sectionTitleStyle}>LANGUAGES</h2>
          <p>English | Telugu | Hindi</p>
        </div>
      </div>
    </div>
  );
};

export default About;
