import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import appstore from "../images/appstore_2x.webp";
import playstore from "../images/playstore_2x.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <div className="Footer">
      <Container fixed>
        <div className={classes.root}>
          <Grid item container spacing={2}>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <div className="Footer__Col">
                <div className="Footer__ColItems">
                  <h6>Popular Categories</h6>
                  <p>Cars</p>
                  <p>Flats for Rent</p>
                  <p>Jobs</p>
                  <p>Mobile Phones</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="Footer__Col">
                <div className="Footer__ColItems">
                  <h6>TRENDING SEARCHES</h6>
                  <p>Bikes</p>
                  <p>Books</p>
                  <p>Watches</p>
                  <p>Dogs</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <div className="Footer__Col">
                <div className="Footer__ColItems">
                  <h6>About OLX</h6>
                  <p>OLX Blog</p>
                  <p>Contact Us</p>
                  <p>OLX for Business</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <div className="Footer__Col">
                <div className="Footer__ColItems">
                  <h6>OLX</h6>
                  <p>Help</p>
                  <p>Sitemap </p>
                  <p>Legal & Privacy information </p>
                </div>
              </div>
            </Grid>
            <Grid item className="last" lg={3} md={3} sm={12} xs={12}>
              <div className="Footer__Col">
                <div className="Footer__ColItems">
                  <h6>Follow Us</h6>
                  <div className="Footer__Icons">
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                    <InstagramIcon />
                  </div>
                  <p>Help</p>
                  <p>Sitemap </p>
                  <div className="Footer__Buttons">
                    <a target = "_blank" href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_iosutm_medium=home_bannerutm_campaign=home" rel="noopener noreferrer">
                      <img src={appstore} width="110px" alt="" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.olx.pk" target = "_blank" rel="noopener noreferrer">
                      <img src={playstore} width="110px" alt="playstore" />
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
