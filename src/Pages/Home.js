import logo from '../images/logo.svg';
import rocket from '../images/icon-rocket.svg';
import email from '../images/icon-email.svg';
import compass from '../images/icon-compass.svg';
import send from '../images/icon-send.svg';
import googlemaps from '../images/icon-googlemaps.svg';
import instagram from '../images/icon-instagram.svg';
import facebook from '../images/icon-facebook.svg';
import google from '../images/icon-google.svg';
import arrow from '../images/icon-arrow.svg';
import phone from '../images/icon-phone.svg';

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
              <p className="text p4">
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
                <img src={rocket} alt="rocket icon" className="me-3 icon" />
                <span className="d-none d-md-inline">Will be lanched in</span>

                <span className="h-4 fw-bold ms-md-2">July 2022</span>
              </div>
              <a
                href="tel:+15714077501"
                className="info-item d-flex align-items-center p2 mb-2"
              >
                <img src={phone} alt="rocket icon" className="me-3 icon" />
                <span className="d-none d-md-inline">Call at</span>
                <span className="h-4 fw-bold ms-md-2">(571) 407-7501</span>
              </a>
              <a
                href="mailto:ratebagrillramen@gmail.com"
                className="info-item d-flex align-items-center p2 mb-2"
              >
                <img src={email} alt="rocket icon" className="me-3 icon" />
                <span className="d-none d-md-inline">Write to</span>
                <span className="h-4 fw-bold ms-md-2">
                  ratebagrillramen@gmail.com
                </span>
              </a>
              <div className="info-item d-flex align-items-center p2 mb-2">
                <img src={compass} alt="rocket icon" className="me-3 icon" />
                <span className="d-none d-md-inline">Located at</span>
                <span className="h-4 fw-bold ms-md-2">
                  3075 Nutley St,
                  <br className="d-md-none" /> Fairfax, VA 22031
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
          <div className="sns-box mt-5">
            <a href="/" className="sns-link">
              <img src={googlemaps} alt="google maps link" className="icon" />
            </a>
            <a href="/" className="sns-link">
              <img src={instagram} alt="instagram link" className="icon" />
            </a>
            <a href="/" className="sns-link">
              <img src={facebook} alt="facebook link" className="icon" />
            </a>
            <a href="/" className="sns-link">
              <img src={google} alt="google link" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
