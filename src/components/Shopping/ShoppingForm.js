import React, { cloneElement, useState } from "react";
import TextField from "@mui/material/TextField";

import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const ShoppingForm = (props) => {
  console.log(props);
  const [shoppingName, setShoppingName] = useState("");
  const [shoppingDate, setShoppingDate] = useState(new Date());

  const resetInputValue = () => {
    setShoppingName("");
    setShoppingDate(new Date());
  };

  let shopping = {
    name: shoppingName,
    date: shoppingDate,
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          New shopping
        </Typography>
        <Typography variant="body">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                label="Name"
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
                    <TextField autoFocus fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        {cloneElement(props.children, {
          shopping: shopping,
          resetInputValue: resetInputValue,
        })}
      </CardActions>
    </Card>
  );
};

export default ShoppingForm;
