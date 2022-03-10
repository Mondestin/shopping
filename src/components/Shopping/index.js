import "../../App.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ShoppingList from "./List/ShoppingList";
import CreateShoppingForm from "./Form/CreateShoppingForm";

const Shopping = () => {
  return (
    <div className="content">
      <div>
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <ShoppingList />
          </Grid>
          <Grid item sm={4}>
            <CreateShoppingForm/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Shopping;
