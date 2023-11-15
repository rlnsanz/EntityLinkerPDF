import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} PDF Entity Recognition Tool. All rights reserved.</p>
      {/* Additional footer content like legal links or additional navigation can go here */}
    </footer>
  );
}

export default Footer;

