import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

export default function TestDis() {
  return (
    <div>
      <Navbar />
      <div style={{
        minHeight: '700px',
      }}>
      </div>
      <Footer />
    </div>
    
  )
}
