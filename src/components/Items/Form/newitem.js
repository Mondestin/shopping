import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import db from "../../../firebase_config";
import Grid from "@mui/material/Grid";
import { addDoc, collection } from "firebase/firestore";

const NewItem = ({ shoppingId }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const itemsRef = db.collection("items");


  // save the item in the db
  const saveItem = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "items"), {
      name: itemName,
      shoppingId: shoppingId,
      description: itemDescription,
      status: true,
    });
    setItemName("");
    setItemDescription("");
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <TextField
          name="ItemName"
          required
          fullWidth
          id="itemName"
          label="Enter the Item's name"
          autoFocus
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="itemDecription"
          required
          fullWidth
          multiline
          rows={3}
          id="itemDecription"
          label="A brief description of the Item"
          value={itemDescription}
          onChange={(e) => {
            setItemDescription(e.target.value);
          }}
        />
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
        Save Item
      </Button>
    </Grid>

  );
};
export default NewItem;
