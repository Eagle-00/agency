import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../css/hero.css';

export const HeroSection = () => {
  return (
    <section id='hero' className='d-flex align-items-center mt-5 mb-5'>
      <Container>
        <h1>Bienvenu à <span className='text-black'>MMDRC Agency</span></h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>

        <div className="d-flex mt-4">
          <Link to='/about' className='btn-get-started text-decoration-none'>
            Commencez
          </Link>
          <a
            href='https://www.youtube.com/watch?v=jDDaplaOz7Q'
            className='btn-watch-video text-decoration-none'>
            <i className='fa fa-play-circle text-primary'/> Voir la vidéo
          </a>
        </div>
      </Container>
    </section>
  )
};
