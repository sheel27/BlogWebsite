import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "gray",
        padding: "20px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2rem",
        color: "black",
      }}
    >
      <div className="container">
        <p> Copyright © {currentYear} Blog App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
