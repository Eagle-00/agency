import React, {useState} from "react";
import './css/footer.css';
import {Col, Container, Form, Row} from "react-bootstrap";
import {NewsletterField} from "../forms/NewsletterField";
import {Link} from "react-router-dom";
import {FooterItem} from "./FooterItem";

const AppFooter = () => {
  const [email, setEmail] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
  };

  const onHandleChange = ({target}) => {
    const { value } = target;
    setEmail(value);
  };

  return (
    <footer id='footer'>
      <div className="footer-newsletter">
        <Container>
          <Row className='justify-content-center'>
            <Col lg={6}>
              <h4 className='text-dark'>Abonnez-vous À Notre Newsletter</h4>
              <p className='text-dark'>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
              </p>

              <Form onSubmit={onHandleSubmit}>
                <NewsletterField
                  onChange={onHandleChange}
                  value={email}
                />
                <input type="submit" value="Souscrire"/>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6} className='footer-contact'>
              <h3>MMDRC Agency</h3>
              <p>
                A108 Adam Street <br/>
                New York, NY 535022<br/>
                United States <br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
            </Col>
            <Col lg={3} md={6} className='footer-links'>
              <FooterItem
                title='Liens de navigation'
                links={[
                  {id: 1, to: '/home', label: 'Accueil'},
                  {id: 2, to: '/about', label: 'À propos'},
                  {id: 3, to: '/services', label: 'Nos services'},
                  {id: 4, to: '/offers', label: 'Nos offres'},
                  {id: 5, to: '/contact', label: 'Contact'},
                  {id: 6, to: '/blog', label: '', icon: 'fas fa-blog', className: 'text-warning'},
                ]}
              />
            </Col>
            <Col lg={3} md={6} className='footer-links'>
              <FooterItem
                title='Nos services'
                links={[
                  {id: 1, to: '#!', label: 'Étude'},
                  {id: 2, to: '#!', label: 'Tourisme'},
                  {id: 3, to: '#!', label: 'Médical'},
                  {id: 4, to: '#!', label: 'Travail'},
                ]}
              />
            </Col>
            <Col lg={3} md={6} className='footer-links'>
              <h4 className='text-capitalize'>Nos réseaux sociaux</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
              </p>
              <div className="social-links mt-3">
                <a href='#!' target='_blank'>
                  <i className='fab fa-twitter'/>
                </a>
                <a href='#!' target='_blank'>
                  <i className='fab fa-facebook-f'/>
                </a>
                <a href='#!' target='_blank'>
                  <i className='fab fa-instagram'/>
                </a>
                <a href='#!' target='_blank'>
                  <i className='fab fa-skype'/>
                </a>
                <a href='#!' target='_blank'>
                  <i className='fab fa-linkedin'/>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className='py-4'>
        <div className="copyright">
          © Copyright <strong><span>MMDRC Agency</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="mailto:adi.life91@gmail.com">Adivin LIFWA</a>
        </div>
      </Container>
    </footer>
  )
};

export default AppFooter;
