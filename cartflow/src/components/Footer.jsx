import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="logo">ShopX</h2>
          <p>
            Your one-stop destination for fashion, electronics and more.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/mens">Mens</Link>
          <Link to="/womens">Womens</Link>
          <Link to="/kids">Kids</Link>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@shopx.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopX. All rights reserved.
      </div>
    </footer>
  );
}