import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import db from "../../firebase_config";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ShoppingAdd = () => {
  const [shoppingName, setShoppingName] = useState("");
  const [shoppingDate, setShoppingDate] = useState(new Date());

  const saveItem = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "shoppings"), {
      name: shoppingName,
      date: Timestamp.fromDate(shoppingDate),
    });
    setShoppingName("");
    setShoppingDate(new Date());
  };

  return (
    <form onSubmit={saveItem}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            New shopping
          </Typography>
          <Typography variant="body2">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                  value={shoppingName}
                  onChange={(e) => {
                    setShoppingName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    inputFormat="dd/MM/yyyy"
                    value={shoppingDate}
                    onChange={(newValue) => {
                      setShoppingDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disableElevation
            startIcon={<AddShoppingCartIcon />}
            fullWidth
          >
            Create shopping
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default ShoppingAdd;
