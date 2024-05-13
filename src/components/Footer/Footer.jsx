import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbMailbox } from "react-icons/tb";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

function Footer() {
  return (
    <footer>
      <section>
        <div>
          <h2>ACK Church</h2>
          <p className="footerDesc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="socialLinks">
            <li className="social">
              {" "}
              <FaFacebookF />{" "}
            </li>
            <li className="social">
              {" "}
              <FaTwitter />{" "}
            </li>
            <li className="social">
              {" "}
              <FaYoutube />{" "}
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="list contactInfo">
            <li>
              {" "}
              <TbMailbox /> <span>P.O Box 40539 - 13356</span>
            </li>
            <li>
              {" "}
              <MdOutlineLocationOn /> <span>Embakasi, Nairobi, Kenya</span>
            </li>
            <li>
              {" "}
              <MdOutlinePhone /> <span>0700001111 (Prayer Line)</span>
            </li>
            <li>
              {" "}
              <MdOutlineEmail /> <span>info@ackchurchnairobi.org</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Service Hours</h2>
          <ul className="list serviceHours">
            <li>
              <span>Saturday Prayer Meeting</span>
              <small>10:00 am to 11:30 am</small>
            </li>
            <li>
              <span>Sunday Service</span>
              <small>8:30 am to 11:30 am</small>
            </li>
          </ul>
        </div>
      </section>
      <div>
        <p className="footer">
          <span className="greyLine"></span>
          <span className="textPrimary">
            Copyright &copy; 2024 All rights reserved
          </span>
          <span className="greyLine"></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
