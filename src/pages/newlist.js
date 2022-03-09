import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import db from "../firebase_config";
import Grid from "@mui/material/Grid";
import ShoppingList from "../components/Shopping/ShoppingList";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const NewItem = () => {
  const [shoppingName, setShoppingName] = useState("");
  const [shoppingDate, setShoppingDate] = useState(new Date());

  const test = () => {
    console.log("change");
  };

  const saveItem = async (e) => {
    e.preventDefault();
    console.log(shoppingDate, Timestamp.fromDate(shoppingDate))
    await addDoc(collection(db, "shoppings"), {
      name: shoppingName,
      date: Timestamp.fromDate(shoppingDate),
    });
    setShoppingName("");
    setShoppingDate(new Date());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <h1>New shopping</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ mt: 3 }}>
            <form onSubmit={saveItem}>
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
                      renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create shopping
              </Button>
            </form>
          </Grid>

          <Grid item xs={12} sm={8}>
            <ShoppingList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default NewItem;
