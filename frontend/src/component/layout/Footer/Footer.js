import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      <h4>Sanjeev Kumar Shrivastwa</h4>
        <p>Reg No. - 20352052</p>
        <p>Under Guidance - Dr. K. S. Kuppusamy</p>
      </div>

      <div className="midFooter">
        <h1>Aushadhalaya</h1>
        <p>Best service is our first priority</p>

        <p>Copyrights 2021 &copy; Sanjeev Kumar Shrivastwa</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/sanjeev_shrivastwa9">Instagram</a>
        <a href="http://facebook.com/nanhekumar9386@gmail.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
