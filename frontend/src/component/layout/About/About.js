import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/sanjeev_shrivastwa9";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/271725575_2139168676238731_8209200267198663438_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KKRCta_XqZAAX-Jnv43&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT-IG05G3ni8q-Bl4lhqKGvqVJIGFffmzNi0NkyEK_n55A&oe=62937CFA"
              alt="Founder"
            />
            <Typography>Sanjeev Kumar Shrivastwa</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @Sanjeev kumar shrivastwa. This is a mojor project
              for MCA(2020-2022) batch under the guidance of Dr. K.S. Kuppusamy
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://instagram.com/sanjeev_shrivastwa9" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
