import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import db from "../../../firebase_config";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import EnhancedTable from "../List/ItemTable";
import CategoryList from "../../Category/CategoryList";

const NewItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemShoppinlist, setItemShoppinlist] = React.useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategorie, setItemCategorie] = useState("");
  const itemsRef = db.collection("items");

  // save the item in the db
  function saveItem(
    e,
    itemName,
    itemDescription,
    itemCategorie,
    itemShoppinlist
  ) {
    e.preventDefault();

    itemsRef.add({
      name: itemName,
      categorie: itemCategorie,
      shoppinlist: itemShoppinlist,
      description: itemDescription,
      status: true,
    });
    setItemName("");
    setItemShoppinlist("");
    setItemDescription("");
    setItemCategorie("");
  }
  return (
    
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl required sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Shopping List
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                name="itemShoppinlist"
                value={itemShoppinlist}
                onChange={(e) => {
                  setItemShoppinlist(e.target.value);
                }}
                label="Shopping List"
              >
                <MenuItem value="Toiletries">Toiletries</MenuItem>
                <MenuItem value="Fruits">Fruits</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <CategoryList
            itemCategorie={itemCategorie}
            setItemCategorie={setItemCategorie}
          />

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
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => {
            saveItem(
              e,
              itemName,
              itemDescription,
              itemCategorie,
              itemShoppinlist
            );
          }}
        >
          Save Item
        </Button>
      </form>
  );
};
export default NewItem;
