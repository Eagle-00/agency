import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../css/about.css';
import aboutImg from '../img/about/about.jpg';

export const AboutSection = () => (
  <>
    <section id="about" className="about about-section-bg mt-5">
      <Container>
        <div className="section-title">
          <h2 className='mt-5'>À propos</h2>
          <h3>Ce Que <span>Nous Faisons</span></h3>
          <p className='text-dark'>
            Ut possimus qui ut temporibus culpa velit eveniet modi
            omnis est adipisci expedita at voluptas atque vitae autem.
          </p>

          <Row className='mt-4'>
            <Col md={6}>
              <img src={aboutImg} alt="About image" className="img-fluid"/>
            </Col>

            <Col
              md={6}
              className='content d-flex flex-column justify-content-center'>
              <h3>
                Voluptatem dignissimos provident
                quasi corporis voluptates sit assumenda.
              </h3>
              <p className="font-italic mb-4 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className='fas fa-store-alt fa-1x text-primary shadow-lg bx'/>
                  <div className='div-li-content'>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p className='text-dark'>
                      Magni facilis facilis repellendus cum excepturi
                      quaerat praesentium libre trade
                    </p>
                  </div>
                </li>
                <li>
                  <i className='fas fa-images fa-1x text-primary shadow-lg bx'/>
                  <div className='div-li-content'>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p className='text-dark'>
                      Quo totam dolorum at pariatur aut distinctio dolorum
                      laudantium illo direna pasata redi
                    </p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  </>
);
