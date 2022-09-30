import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { Dispatch, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { setCart } from "../redux/actions/ProductActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 300,
    width: 350,
  },
});
interface CartPropType {
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

function Cart() {
  const dispatch: Dispatch<any> = useDispatch();
  const { cart } = useSelector((state: RootStore) => state.products);

  return (
    <div>
      <Navbar />
      <Grid item xs={12} md={10} sx={{ overflowX: "auto" }}>
        <Grid
          container
          spacing={5}
          sx={{ marginLeft: "100px", marginTop: "50px" }}
        >
          <Grid item xs={6} md={4}>
            <Card>
              <ClearRoundedIcon
                // onClick={() => {
                //   deleteHandle(product.id);
                // }}
                sx={{ fontSize: "35px" }}
              />

              <CardActionArea>
                <CardMedia
                // className
                // image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Product
                  </Typography>
                  <Typography variant="body2">Nice product...</Typography>
                  <Typography variant="h6">Price: $34</Typography>
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

                <FavoriteIcon sx={{ color: "primary", fontSize: "40px" }} />
                <Button size="small" color="secondary" variant="contained">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
