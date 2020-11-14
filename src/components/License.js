import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

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

function License() {
  const classes = useStyles();

  return (
    <div className="License">
      <Container fixed>
        <div className={classes.root}>
          <Grid item container spacing={2}>
            <Grid item lg={6}  md={6} sm={12} xs = {12}>
              <div className="License__Left">
                <span>Other Countries</span>
                <span> India - South Africa - Indonesia</span>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs = {12}>
              <div className="License__Right">
                <span>Free Classified in Pakistans</span>
                <span>
                  . <CopyrightIcon /> 2006-2020 OLX
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default License;
