import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Kamlesh.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100004102267883"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCObvi1sqNur-K9FZwOGFj1A"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/kamlesh2024/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/__itz_adil_____/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
