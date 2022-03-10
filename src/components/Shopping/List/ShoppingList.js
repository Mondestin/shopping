import {
  Box,
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

import React, { useEffect, useState } from "react";
import db from "../../../firebase_config";
import BallotIcon from "@mui/icons-material/Ballot";
import DeleteShoppingButton from "../Button/DeleteShoppingButton";

const ShoppingList = () => {
  const [shoppings, setShoppings] = useState([]);
  const shoppingsRef = db.collection("shoppings");

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
  }, []);

  return (
    <Box>
      <Paper>
        <Typography
          id="tableTitle"
          padding={1}
          bgcolor="#fdfdfd"
          color="secondary"
        >
          <BallotIcon fontSize="large" />
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppings.map((shopping) => (
                <TableRow
                  key={shopping.id}
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
                      <DeleteShoppingButton
                        ID={shopping.id}
                        name={shopping.data().name}
                      />
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
