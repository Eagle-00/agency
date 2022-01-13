import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {PageTitleSection} from "../views/sections/PageTitleSection";
import {OfferCardItem} from "../views/OfferCardItem";
import offer1 from './img/offers/1.jpg';
import offer2 from './img/offers/2.jpg';
import offer3 from './img/offers/3.jpg';
import {CtaSection} from "../views/sections/CtaSection";
import {PartnersSection} from "../views/sections/PartnersSection";

const OffersPage = () => {
  return (
    <>
      <div id="offers" className="offers justify-content-center mb-5">
        <Container>
          <PageTitleSection title='Nos offres'>
            <p className='mt-5 text-dark' style={{ fontWeight: 'bold' }}>
              MM DRC AGENCY vous invite à vous enregistrer et a
              déposer vos dossiers gratuitement
              pour les démarches de voyage. 😍 <strong>NB</strong>: le dépôt des
              dossiers est gratuit pour les pays disponibles
              (canada, états-unis, france, belgique, turquie, russie,
              chypre du nord, chypre du sud, chine, japon, australie, etc.)
            </p>
          </PageTitleSection>

          <Row>
            <Col md={4} className='mb-3'>
              <OfferCardItem
                footer='USA'
                header='USA'
                img={offer1}
              />
            </Col>
            <Col md={4} className='mb-3'>
              <OfferCardItem
                footer='Canada'
                header='Canada'
                img={offer2}
              />
            </Col>
            <Col md={4} className='mb-3'>
              <OfferCardItem
                footer='Chine'
                header='Chine'
                img={offer3}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <CtaSection/>
      <PartnersSection/>
    </>
  )
};

export default OffersPage;
