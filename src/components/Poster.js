import React from "react";
import poster1 from "../images/poster1.png";
import poster2 from "../images/poster2.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

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

function Poster() {
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <Grid container spacing={2}>
          <div className={classes.root}>
              <Grid item lg = {12} >
              <div className="Poster1">
              <img src={poster1} alt="" />
            </div>
              </Grid>
              <Grid item lg = {12} >
           
            <div className="Poster2">
              <img src={poster2} alt="" />
            </div>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Poster;
