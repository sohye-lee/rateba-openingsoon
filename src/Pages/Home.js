import logo from '../images/logo.png';
import rocket from '../images/icon-rocket.png';
import email from '../images/icon-email.png';
import compass from '../images/icon-compass.png';
import send from '../images/icon-send.png';
import googlemaps from '../images/icon-googlemaps.png';
import instagram from '../images/icon-instagram.png';
import facebook from '../images/icon-facebook.png';
import google from '../images/icon-google.png';
import arrow from '../images/icon-arrow.png';

import React from 'react';

const Home = () => {
  return (
    <div className="body">
      <div className="bg-frame">
        <div className="bg-right"></div>
        <div className="bg-left"></div>
        <div className="content-box">
          <div className="logo-box">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="text-box">
            <div class="texts">
              <h1 className="title">Opening Soon</h1>
              <p className="text">
                A cozy, warm Asian Bistro specializing in ramen, teriyaki, and
                bao buns, offering steamy, savory bowls of ramen as well as
                juicy, rich barbeque at low prices. Come to relax and enjoy
                authentic Asian cuisine with your loved ones in one of our warm,
                inviting rooms.
              </p>
              <div className="read-more">
                <a href="/" className="font-italic">
                  Read on press
                  <img src={arrow} alt="arrow icon" />
                </a>
              </div>
            </div>

            <div className="info">
              <div className="info-item d-flex align-items-center p2 mb-2">
                <img src={rocket} alt="rocket icon" className="me-3" />
                Will be lanched in
                <span className="h-4 fw-bold ms-2">July 2022</span>
              </div>
              <div className="info-item d-flex align-items-center p2 mb-2">
                <img src={email} alt="rocket icon" className="me-3" />
                Write to
                <span className="h-4 fw-bold ms-2">info@ratebava.com</span>
              </div>
              <div className="info-item d-flex align-items-center p2 mb-2">
                <img src={compass} alt="rocket icon" className="me-3" />
                Located at
                <span className="h-4 fw-bold ms-2">
                  3089 Nutley St SW, Fairfax, VA 22031
                </span>
              </div>
            </div>

            <div className="form-box mt-5">
              <div className="form mb-1">
                <input className="form-input" placeholder="EMAIL" />
                <button type="submit" className="form-button">
                  GET NOTIFIED
                  <img src={send} className="ms-3" alt="send icon" />
                </button>
              </div>
              <p className="fw-light p5 m-0 p-0">Be the first to know!</p>
            </div>
          </div>
          <div className="sns-box">
            <a href="/" className="sns-link">
              <img src={googlemaps} alt="google maps link" />
            </a>
            <a href="/" className="sns-link">
              <img src={instagram} alt="instagram link" />
            </a>
            <a href="/" className="sns-link">
              <img src={facebook} alt="facebook link" />
            </a>
            <a href="/" className="sns-link">
              <img src={google} alt="google link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
