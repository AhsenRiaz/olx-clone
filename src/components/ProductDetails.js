import React from "react";
import { useParams } from "react-router";
import sellList from "../components/sellList.json";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";

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

function ProductDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const sell = sellList[id];
  return (
    <div className="ProductDetails">
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item lg={8} sm={12} md={12} xs={12}>
              <div className="ProductDetails__Left">
                <img src={sell.imageURL} width="500px" height="600px" alt="" />
              </div>
            </Grid>
            <Grid item lg={4} sm={12} md={12} xs={12}>
              <div className="ProductDetails__Price">
                <h1>Rs {sell.price}</h1>
                <p>{sell.description}</p>
                <span>{sell.residence}</span>
              </div>
              <div className="ProductDetails__Seller">
                <PersonIcon />
                <span>{sell.sellername}</span>
                <p>{sell.date}</p>
                <button>Chat with seller</button>
                <br />
                <br />
                <PhoneIcon></PhoneIcon> **** **** **{" "}
                <span className="number">show number</span>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm = {12} xs = {12}>
              <div className="ProductDetails__Info">
                  <h3>Description</h3>
                <p>{sell.description}</p>
              </div>
            </Grid>
           
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;
