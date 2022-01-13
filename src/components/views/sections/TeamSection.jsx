import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../css/team.css';
import team1 from '../img/team/team-1.jpg';
import team2 from '../img/team/team-2.jpg';
import team3 from '../img/team/team-3.jpg';
import team4 from '../img/team/team-4.jpg';
import {TeamItem} from "../TeamItem";

export const TeamSection = () => (
  <section id='team' className='team mt-5'>
    <Container>
      <div className="section-title">
        <h2>Team</h2>
        <h3>Notre <span>Équipe</span></h3>
        <p className='text-dark'>
          Ut possimus qui ut temporibus culpa velit eveniet modi
          omnis est adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>

      <Row>
        <Col md={6} lg={3} className='d-flex align-items-stretch'>
          <TeamItem
            img={team1}
            icons={[
              {id: 1, link: '#!', icon: 'fab fa-twitter'},
              {id: 2, link: '#!', icon: 'fab fa-facebook-f'},
              {id: 3, link: '#!', icon: 'fab fa-instagram'},
              {id: 4, link: '#!', icon: 'fab fa-linkedin'},
            ]}
            name='Walter White'
            role='Chief Executive Officer'/>
        </Col>
        <Col md={6} lg={3} className='d-flex align-items-stretch'>
          <TeamItem
            img={team2}
            icons={[
              {id: 1, link: '#!', icon: 'fab fa-twitter'},
              {id: 2, link: '#!', icon: 'fab fa-facebook-f'},
              {id: 3, link: '#!', icon: 'fab fa-instagram'},
              {id: 4, link: '#!', icon: 'fab fa-linkedin'},
            ]}
            name='Sarah Jhonson'
            role='Product Manager'/>
        </Col>
        <Col md={6} lg={3} className='d-flex align-items-stretch'>
          <TeamItem
            img={team3}
            icons={[
              {id: 1, link: '#!', icon: 'fab fa-twitter'},
              {id: 2, link: '#!', icon: 'fab fa-facebook-f'},
              {id: 3, link: '#!', icon: 'fab fa-instagram'},
              {id: 4, link: '#!', icon: 'fab fa-linkedin'},
            ]}
            name='William Anderson'
            role='CTO'/>
        </Col>
        <Col md={6} lg={3} className='d-flex align-items-stretch'>
          <TeamItem
            img={team4}
            icons={[
              {id: 1, link: '#!', icon: 'fab fa-twitter'},
              {id: 2, link: '#!', icon: 'fab fa-facebook-f'},
              {id: 3, link: '#!', icon: 'fab fa-instagram'},
              {id: 4, link: '#!', icon: 'fab fa-linkedin'},
            ]}
            name='Amanda Jepson'
            role='Accountant'/>
        </Col>
      </Row>
    </Container>
  </section>
);
