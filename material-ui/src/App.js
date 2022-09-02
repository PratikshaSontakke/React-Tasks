import { Button } from "@mui/material";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Box className="App">
      <h1>Material UI</h1>
      <Button startIcon={<AddIcon />} variant="contained">
        Add
      </Button>
      <TextField helperText="serch here..." label="search"></TextField>
      <Typography variant="h1" color="blue">
        Hello
      </Typography>
      <Grid container justifyContent="center">
        <Grid
          item
          sx={{ width: 200, height: 200, backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          sx={{ width: 200, height: 200, backgroundColor: "blue" }}
        ></Grid>
      </Grid>
    </Box>
  );
}

export default App;
