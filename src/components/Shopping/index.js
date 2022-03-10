import "../../App.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ShoppingList from "./List/ShoppingList";
import CreateShoppingForm from "./Form/CreateShoppingForm";

const Shopping = () => {
  return (
    <Grid container spacing={3} mt={1}>
      <Grid item sm={8}>
        <ShoppingList />
      </Grid>
      <Grid item sm={4}>
        <CreateShoppingForm />
      </Grid>
    </Grid>
  );
};
export default Shopping;
