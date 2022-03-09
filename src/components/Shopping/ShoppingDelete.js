import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../firebase_config";

const ShoppingDelete = ({ ID, name }) => {
  const deleteShopping = async () => {
    await deleteDoc(doc(db, "shoppings", ID));
  };

  return (
    <Button onClick={() => { if (window.confirm(`Are you sure to delete ${name} shopping ?`)) deleteShopping() } }>
      <DeleteIcon color="error" />
    </Button>
  );
};

export default ShoppingDelete;
