import { useLenis } from "@studio-freight/react-lenis";
import "./footer.scss";

const Footer = () => {
  const lenis = useLenis(() => {});

  const home = () => {
    lenis.scrollTo("#home");
  };
  const gallery = () => {
    lenis.scrollTo("#gallery");
  };
  const plans = () => {
    lenis.scrollTo("#plans");
  };
  const contact = () => {
    lenis.scrollTo("#contact");
  };
  return (
    <div className="footer-container">
      <div className="wrapper">
        <div className="slogan">
          Unleash Your Potential, Embrace Your Strength.
        </div>
        <div className="social-links">
          Follow Us
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/elsayed.elghazy.5"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/MxExGxA11"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/elsayed_elghazy/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/elsayed-elghazy-1851011b1/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          Quick Links
          <ul>
            <li>
              <a onClick={home} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={gallery} href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a onClick={plans} href="#plans">
                Plans
              </a>
            </li>
            <li>
              <a onClick={contact} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          Contact Us
          <ul>
            <li>FitMax Gym </li>
            <li>123 Fitness Avenue</li>
            <li>Cityville, State 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
      </div>
      <p>Copyright © 2024 Fitmax | Crafted by Elsayed Elghazy</p>
    </div>
  );
};

export default Footer;
