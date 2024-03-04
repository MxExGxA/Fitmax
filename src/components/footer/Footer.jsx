import { useLenis } from "@studio-freight/react-lenis";
import "./footer.scss";

const Footer = () => {
  const lenis = useLenis(({ scroll }) => {});

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
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
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
    </div>
  );
};

export default Footer;
