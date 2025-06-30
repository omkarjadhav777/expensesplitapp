import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '700px',
    margin: '50px auto',
    padding: '40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #f0f4ff, #e0eaff)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: '25px',
  };

  const quoteStyle = {
    textAlign: 'center',
    fontSize: '22px',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '30px',
  };

  const textStyle = {
    fontSize: '20px',
    margin: '15px 0',
    color: '#34495e',
  };

  const highlightStyle = {
    fontWeight: '600',
    color: '#2980b9',
  };

  const linkStyle = {
    color: '#e74c3c',
    textDecoration: 'none',
    fontWeight: '600',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Omkar Ganesh Jadhav</h1>
      <p style={quoteStyle}>
        "Dedication turns dreams into reality."
      </p>
      <p style={textStyle}><span style={highlightStyle}>College:</span> Pimpri Chinchwad College of Engineering</p>
      <p style={textStyle}><span style={highlightStyle}>Role:</span> Full Stack Web Developer</p>
      <p style={textStyle}><span style={highlightStyle}>GitHub:</span> <a href="https://github.com/omkarjadhav777" target="_blank" rel="noreferrer" style={linkStyle}>Visit my GitHub</a></p>
      <p style={textStyle}><span style={highlightStyle}>Skills:</span> React, Node.js, MongoDB, Next.js, JavaScript, and more</p>
      <p style={textStyle}><span style={highlightStyle}>Dedication:</span> I thrive on learning, creating impactful solutions, and going beyond what's expected.</p>
      <p style={{...quoteStyle, color: '#2c3e50', marginTop: '30px'}}>
        "I don't just code; I build experiences that inspire."
      </p>
    </div>
  );
};

export default About;
