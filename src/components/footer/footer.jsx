import { Col, Row } from "react-bootstrap";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import {Form} from "../Form/form";
import Contact from "../contactUS/contact";
import FileViewer from 'react-file-viewer';
//import PrivacyPolicy from "./components/footer/privacy_policy";
const Footer = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"lg"} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"lg"} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size={"lg"} />;
  const instagtamIcon = <FontAwesomeIcon icon={faInstagram} size={"lg"} />;
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const mastercardIcon = <FontAwesomeIcon icon={faCcMastercard} size={"3x"} />;
  const visaIcon = <FontAwesomeIcon icon={faCcVisa} size={"3x"} />;

  const colStyle = {
    display: "flex",
    alignItems: "center",
  };
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div className="footer">
      <Row>
        <Col lg={3} sm={6} xs={6}>
          <div className="col-inner">
            <div className="header">Miso body works</div>
            <div className="content">
              {" "}
              <div className="contact-info"> contact@misobodyworks.com </div>
              <div className="contact-info"> +1-913-815-0596 </div>
              {/* <div className="contact-info"> +251 943 141 717 </div> */}
              <div className="contact-info"> P.O. box 920062 </div>
              <div className="contact-info">
                {" "}
                Peachtree Corners 30010,GA USA{" "}
              </div>
             
            </div>
          </div>
        </Col>
     
         
        {!xs && (
          <>
            {" "}
            <Col lg={3} sm={6} xs={6}>
              <div className="col-inner">
                <div className="header">Connect with us</div>
                <div className="content">
                  <div className="social-icons">
                    <div className="icon-item">
                      <div className="icon">{ facebookIcon}</div>
                      <div className="text">Facebook</div>
                    </div>
                    <div className="icon-item">
                      <div className="icon">{twitterIcon}</div>
                      <div className="text">Twitter</div>
                    </div>
                    {/* <div className="icon-item">
                      <div className="icon">{instagtamIcon}</div>
                      <div className="text">Instagram</div>
                    </div> */}
                    <div className="icon-item">
                      <div className="icon">{linkedinIcon}</div>
                      <div className="text">LinkedIn</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6} xs={6}>
              <div className="col-inner">
                <div className="header">Useful links</div>
                <div className="content">
                  {" "}
                  <Link to="/aboutus" style={{ color: "white" }}>
                    <div className="footer-link">About Miso body works</div>
                  </Link>
                  <Link to="/privacypolicy" style={{ color: "white" }}>
                    <div className="footer-link">Privacy Policy</div>
                  </Link>
                  {/* <Link to="/deliveryandreturn" style={{ color: "white" }}>
                    <div className="footer-link">
                      Delivery and Return Policy
                    </div>
                  </Link>
                  <Link to="/termsandconditions" style={{ color: "white" }}>
                    <div className="footer-link">Terms and Conditions</div>
                  </Link>
                  <Link to="/pricing" style={{ color: "white" }}>
                    <div className="footer-link">Pricing</div>
                  </Link>
                  <Link to="/faq" style={{ color: "white" }}>
                    <div className="footer-link">FAQ</div>
                  </Link> */}
                </div>
              </div>
            </Col>



            


        <Col lg={3} sm={6} xs={6}>
          
        <div className="col-inner">
                <div className="header" >Contact us</div>
                <div className="content">
                  {" "}
        <Contact/>
        </div>
              </div>
              {/* <div
                className="payment-icons"
                style={
                  !xs ? { display: "flex", justifyContent: "flex-start" } : {}
                }
              >
                <div
                  className="icon"
                  style={{ width: "max-content", marginRight: ".55em" }}
                >
                  {mastercardIcon}
                </div>
                <div
                  className="icon"
                  style={{ width: "max-content", marginRight: ".55em" }}
                >
                  {visaIcon}
                </div>
              </div>
          

          <div id="google_translate_element"></div> */}
        </Col>
          
          </>
        )}


      </Row>
    </div>
  );
};
export default Footer;
