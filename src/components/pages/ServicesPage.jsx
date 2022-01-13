import React from "react";
import {PageTitleSection} from "../views/sections/PageTitleSection";
import {Container} from "react-bootstrap";
import {ServicesSection} from "../views/sections/ServicesSection";
import {CtaSection} from "../views/sections/CtaSection";
import {PartnersSection} from "../views/sections/PartnersSection";

const ServicesPage = () => {
  return (
    <>
      <div id="services" className="services">
        <Container>
          <PageTitleSection title='Nos services'>
            <p className='mt-5 text-dark' style={{ fontWeight: 'bold' }}>
              MMDRC AGENCY est doté des professionnels
              qui sont à l'écoute de ses clients
              pour comprendre leurs besoins, contraintes et
              les apportent des solutions qui convergent avec leur projet
              de voyage. Notre expertise vous permettra d'avoir
              le support d'un partenaire pro actif qui coordonera votre projet de voyage
              et vous permettra aussi de mieux vous concentrer sur votre objectif.
            </p>
          </PageTitleSection>
        </Container>
      </div>

      <ServicesSection/>
      <CtaSection/>
      <PartnersSection/>
    </>
  )
};

export default ServicesPage;
