import "../../App.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ShoppingList from "./ShoppingList";
import ShoppingAdd from "./ShoppingAdd";

const Shopping = () => {
  return (
    <div className="content">
      <div>
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
