import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Navbar from "../components/navbar/Navbar";
import { addProduct } from "../redux/actions/ProductActions";
import { RootStore } from "../redux/store";

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.25rem",
  margin: "10px",
});

const FlexContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
});

function Admin() {
  const id: number = new Date().valueOf();
  const [image, setImage] = useState<any>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<string>();
  const dispatch: Dispatch<any> = useDispatch();

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fileReader = new FileReader();
    if (e.target.files instanceof FileList) {
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        setImage(fileReader.result);
      };
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addProduct({
        id,
        title: title!,
        price: price!,
        description: description!,
        image,
      })
    );
    alert("Product added successfully!");
  };

  return (
    <div>
      <Navbar />

      <Card>
        <CardContent>
          <StyledTypography>Add Item :</StyledTypography>
          {/* <Grid container>
            <Grid item xs={12} md={6}> */}
          <form onSubmit={handleSubmit}>
            <FlexContainer>
              <Button variant="outlined" component="label">
                Upload Product Image
                <input type="file" hidden onChange={imageChangeHandler} />
              </Button>

              <TextField
                margin="normal"
                size="small"
                required
                id="outlined-basic"
                label="Title"
                variant="outlined"
                placeholder="Title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
              <TextField
                margin="normal"
                size="small"
                required
                id="outlined-basic"
                label="Description"
                variant="outlined"
                placeholder="Description"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
              />
              <TextField
                margin="normal"
                size="small"
                required
                id="outlined-basic"
                label="Price"
                variant="outlined"
                placeholder="Price"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
                }
              />

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  color="info"
                  size="large"
                  type="submit"
                  variant="outlined"
                >
                  Add Product
                </Button>
              </Box>
            </FlexContainer>
          </form>
          {/* </Grid> */}

          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ marginY: "2rem" }}
            ></Box>
          </Grid>
          {/* </Grid> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Admin;
