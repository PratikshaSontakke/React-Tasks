import React from "react";
import { SET_PRODUCTS } from "../../redux/types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/system";
import { Dispatch, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/store";
import { deleteProduct, getProducts } from "../../redux/actions/ProductActions";
import { CircularProgress, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 300,
    width: 350,
  },
});

function Cards() {
  const dispatch: Dispatch<any> = useDispatch();
  const { products } = useSelector((state: RootStore) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (product.length > 0) {
  //     const newArr = [...product, ...products];
  //     dispatch({ type: SET_PRODUCTS, payload: newArr });
  //   } else {
  //     dispatch(getProducts());
  //   }
  // }, [dispatch]);

  const classes = useStyles();

  const deleteHandle = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      {products.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          <Grid item xs={12} md={10} sx={{ overflowX: "auto" }}>
            <Grid
              container
              spacing={5}
              sx={{ marginLeft: "100px", marginTop: "50px" }}
            >
              {products.map((product) => (
                <Grid item key={product.id} xs={6} md={4}>
                  <Card className={classes.root}>
                    <ClearRoundedIcon
                      onClick={() => {
                        deleteHandle(product.id);
                      }}
                      sx={{ fontSize: "35px" }}
                    />

                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={product.image}
                        // title={product.title.substring(0, 12)}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.title}
                        </Typography>
                        <Typography variant="body2">
                          {product.description.substring(0, 30)}...
                        </Typography>
                        <Typography variant="h6">
                          Price: ${product.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        onClick={() => {
                          alert("added to cart");
                        }}
                        size="small"
                        color="primary"
                        variant="contained"
                      >
                        Add to cart
                      </Button>

                      <FavoriteIcon
                        sx={{ color: "primary", fontSize: "40px" }}
                      />
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                      >
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Cards;
