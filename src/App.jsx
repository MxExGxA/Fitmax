import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Phone from "./components/phone/Phone";
import Banner from "./components/banner/Banner";
import paperTexture from "./images/paperTexture.png";
import paperTexture2 from "./images/paperTexture2.png";
import { ReactLenis } from "@studio-freight/react-lenis";
import Gallery from "./components/gallery/Gallery";
import Plans from "./components/plans/Plans";
import ContactUs from "./components/contact us/ContactUs";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <ReactLenis root>
      <div className="container" id="home">
        <img className="paper-texture" src={paperTexture} alt="paperTexture" />
        <img
          className="paper-texture2"
          src={paperTexture2}
          alt="paperTexture"
        />
        <Phone />
        <Navbar />

        <section className="hero">
          <Banner />
        </section>

        <section id="gallery" className="gallery">
          <Gallery />
        </section>
        <section id="plans" className="plans">
          <Plans />
        </section>
        <section id="contact" className="contactus">
          <ContactUs />
        </section>
        <section className="footer">
          <Footer />
        </section>
      </div>
    </ReactLenis>
  );
};

export default App;
