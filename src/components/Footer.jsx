import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import bg from "../assets/image/bg3.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <Row>
            <Col lg="2" sm="6"></Col>
            <Col lg="5" sm="6">
              <div className="footerLeft">
                <div className="footerText">
                  <h2>It Just Got Personal</h2>
                  <hr />
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout{" "}
                  </p>
                  <div className="footerInput">
                    <input type="text" placeholder="Your email here" />
                    <button>
                      <AiIcons.AiOutlineSend />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="footerRight">
                <h1>JESSIE</h1>
                <p>Personal blog</p>
                <div className="footerLinks">
                  <Link className="Links">Home</Link>
                  <Link className="Links">Shop</Link>
                  <Link className="Links">About</Link>
                  <Link className="Links">Contact</Link>
                </div>
                <div className="socialIcons">
                  <FaIcons.FaInstagram />
                  <FaIcons.FaTwitter />
                  <FaIcons.FaPinterest />
                  <FaIcons.FaFacebook />
                </div>
                <h6>© 2019 - Jessie</h6>
              </div>
            </Col>
            <Col lg="2" sm="6"></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
