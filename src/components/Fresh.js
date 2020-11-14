import React from "react";
import sellList from "./sellList.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import {Link} from "react-router-dom"

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

function Fresh() {
  const classes = useStyles();
  return (
    
    <div className="Fresh">
      <Container fixed>
        <h3>Fresh recommendation</h3>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {Object.keys(sellList).map((keyNames) => {
              const list = sellList[keyNames];
              return (
                <Grid key={list.id} item xs={12} sm={6} md={6} lg={3}>
                  <Link to={`product/${keyNames}`} >
                  <Paper id="Phone__Paper" className={classes.paper}>
                    <div className="Phone__Box">
                      <img className = "Fresh__Image"
                        src={list.imageURL}
                        width="100%"
                        height="230px"
                        alt={list.name}
                      />
                      <div className="Phone__Footer">
                        <h5>{list.price}</h5>
                        <p className="name">{list.name}</p>
                        <p className="date">{list.date}</p>
                      </div>
                    </div>
                  </Paper>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Fresh;
