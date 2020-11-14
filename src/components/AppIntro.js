import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import mobile from "../images/phone-app.webp";
import button1 from "../images/playstore_2x.webp";
import button2 from "../images/appstore_2x.webp";

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

function AppIntro() {
  const classes = useStyles();

  return (
    <div className="AppIntro">
      <Container fixed>
        <div className={classes.root}>
          <Grid item  container spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <div className="AppIntro__Image">
                <img src={mobile} alt="" />
              </div>
            </Grid>
            <Grid item lg={1} md={1}>
            
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <div className="AppIntro__Text">
                <h4>TRY THE OLX APP</h4>
                <p>
                  Buy, sell and find just about anything using the app on your
                  mobile.
                </p>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <div className="AppIntro__Buttons">
                <h5>Get Your App Today</h5>
                <a
                  href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_iosutm_medium=home_bannerutm_campaign=home"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src={button2} width="120px" alt="" />
                </a>
                <a
                  href ="https://play.google.com/store/apps/details?id=com.olx.pk"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img width="120px" src={button1} alt="button1" />
                </a>
              
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default AppIntro;
