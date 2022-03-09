import "../App.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ShoppingList from "../components/Shopping/ShoppingList";
import ShoppingAdd from "../components/Shopping/ShoppingAdd";

const Shopping = () => {
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
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <ShoppingAdd />
          </Grid>
          <Grid item sm={8}>
            <ShoppingList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Shopping;
