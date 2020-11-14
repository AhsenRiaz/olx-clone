import React from "react";
import phone from "./phone.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from '@material-ui/core';


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

function Phone() {
  const classes = useStyles();

  return (
    <Container fixed className="Phone">
      <h3>Based On Your Recent Searches</h3>
      <div className={classes.root}>
        <Grid item container spacing={2}>
          {Object.keys(phone).map((keyNames) => {
            const mobile = phone[keyNames];
            return (
              <Grid key={mobile.id}  item xs={12} sm = {12} md={6} lg={3}>
                <Paper  id="Phone__Paper" className={classes.paper}>
                  <div  className="Phone__Box">
                    <img
                      src={mobile.image}
                      width="100%"
                      height="230px"
                      alt={phone.name}
                      className = "responsive"
                      
                    />
                    <div className="Phone__Footer">
                      <h5>{mobile.price}</h5>
                      <p>{mobile.footer}</p>
                      <p className  = "date">{mobile.date}</p>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Phone;
