import "../../App.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ShoppingList from "./List/ShoppingList";
import db from "../../firebase_config";
import { Outlet } from "react-router-dom";

const Shopping = () => {
  const [shoppings, setShoppings] = React.useState([]);
  const shoppingsRef = db.collection("shoppings");

  const getShoppings = () =>
    shoppingsRef.onSnapshot((querySnapshot) => {
      let shoppings = [];
      querySnapshot.forEach((doc) => {
        shoppings.push(doc);
      });
      setShoppings(shoppings);
    });

  React.useEffect(() => {
    getShoppings();
  }, []);

  return (
    <Grid container spacing={3} mt={1}>
      <Grid item sm={8}>
        <ShoppingList shoppings={shoppings} />
      </Grid>
      <Grid item sm={4}>
        <Outlet context={[shoppings, setShoppings]} />
      </Grid>
    </Grid>
  );
};
export default Shopping;
