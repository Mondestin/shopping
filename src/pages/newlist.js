import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import firebase from "../firebase_config";
import Grid from "@mui/material/Grid";
import ShoppingList from "../components/Shopping/ShoppingList";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const NewItem = () => {
  const [shoppingName, setShoppingName] = useState("");
  const [shoppingDate, setShoppingDate] = useState("");

  const db = firebase.firestore().collection("shoppings");

  // save the item in the db
  function saveItem(
    e
  ) {
    e.preventDefault();
    db.add({
      name: shoppingName,
      date: shoppingDate
    });
  }
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
            <form>
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
                  <TextField
                    required
                    fullWidth
                    label="Date"
                    value={shoppingDate}
                    onChange={(e) => {
                      setShoppingDate(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => {
                  saveItem(e);
                }}
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
