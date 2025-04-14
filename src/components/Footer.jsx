import React from 'react';
import '@/styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="/DC_Comics_2024.png" alt="DC Logo" className="logo" />

        <div className="footer-columns">
          <div className="column">
            <p><strong>ABOUT DC</strong></p>
            <p><strong>HELP/FAQS</strong></p>
            <p><strong>INTENSHIPS</strong></p>
            <p><strong>CAREERS</strong></p>
          </div>
          <div className="column">
            <p>ADVERTISING</p>
            <p>DC</p>
            <p>DCHQ.COM</p>
            <p>REDEEM DIGITAL COMICS</p>
          </div>
          <div className="column icon-links">
            <div className="icon-row">
              
              <div>
                <p><strong>DC INSIDER</strong></p>
                <p>Get Rewarded for Being a DC Fan</p>
              </div>
            </div>
            <div className="icon-row">
              <div>
                <p><strong>DC UNLIMITED</strong></p>
                <p>Access Over 30,000+ Digital Comics</p>
              </div>
            </div>
          </div>
          <div className="column follow">
            <p><strong>FOLLOW DC</strong></p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Your California Privacy Rights</p>
        <p>Children's Online Privacy Policy</p>
        <p>Do Not Sell My Personal Information</p>
        <p>License Agreement</p>
        <p>DC Insider Terms</p>
        <p>©2022 DC</p>
      </div>
    </footer>
  );
};

export default Footer;
