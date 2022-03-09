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
import db from "../../firebase_config";

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
          variant="h6"
          id="tableTitle"
          component="div"
          padding={1}
          bgcolor= "#fdfdfd"
        >
          My shoppings
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
                  key={shopping.data().id}
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
