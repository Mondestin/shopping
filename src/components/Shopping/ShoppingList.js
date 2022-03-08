import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase_config";

const ShoppingList = () => {
  const [shoppings, setShoppings] = useState([]);

  // get the connection with firebase for the items collection
  const shoppingsRef = firebase.firestore().collection("shoppings");

  const getCategories = () =>
    shoppingsRef.onSnapshot((querySnapshot) => {
      let shoppings = [];
      querySnapshot.forEach((doc) => {
        shoppings.push(doc);
      });
      setShoppings(shoppings);
    });

  useEffect(() => {
    getCategories();
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          List of shoppings
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppings.map((shopping) => (
                <TableRow
                  key={shopping.data().name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {shopping.data().name}
                  </TableCell>
                  <TableCell>
                    {new Date(
                      shopping.data().date.seconds * 1000
                    ).toLocaleDateString("fr-FR")}
                  </TableCell>
                  <TableCell>
                    <Grid item>
                      <Button>
                        <DeleteIcon />
                      </Button>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ShoppingList;
