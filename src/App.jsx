import React from "react";
import {
  Analytics,
  Clients,
  CTS,
  Design,
  Features,
  Footer,
  Hero,
  Nav,
  Products,
  Testimonial,
  Pixelgrade,
} from "./components";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding bg-silver">
        <Hero />
      </section>

      <section className="padding">
        <Clients />
      </section>

      <section className="padding">
        <Features />
      </section>

      <section className="padding">
        <Pixelgrade />
      </section>

      <section className="padding bg-silver">
        <Analytics />
      </section>

      <section className="padding">
        <Design />
      </section>

      <section className="padding">
        <Testimonial />
      </section>

      <section className="padding">
        <Products />
      </section>

      <section className="padding bg-silver">
        <CTS />
      </section>

      <section className="padding bg-secondary">
        <Footer />
      </section>
    </main>
  );
};

export default App;
