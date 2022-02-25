import '../App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import firebase from '../firebase_config';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import EnhancedTable from '../components/Table';

const NewItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemShoppinlist, setItemShoppinlist] = React.useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategorie, setItemCategorie] = useState("");

  const db = firebase.firestore().collection("items");


  // save the item in the db
  function saveItem(event, itemName, itemDescription, itemCategorie, itemShoppinlist) {
    event.preventDefault();

    console.log(itemDescription);
    db.add({
      name: itemName,
      categorie: itemCategorie,
      shoppinlist: itemShoppinlist,
      description: itemDescription,
      status: true

    });
    setItemName("");
    setItemShoppinlist("");
    setItemDescription("");
    setItemCategorie("");
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%"
        }}>
        <h1>New Item</h1>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ mt: 10 }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl required sx={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Shopping List</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      name="itemShoppinlist"
                      value={itemShoppinlist}
                      onChange={(e) => { setItemShoppinlist(e.target.value) }}
                      label="Shopping List"
                    >
                      <MenuItem value="Toiletries">Toiletries</MenuItem>
                      <MenuItem value="Fruits">Fruits</MenuItem>
                      <MenuItem value="Home">Home</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl required sx={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      required
                      fullWidth
                      label="Catetory"
                      name="itemCategorie"
                      value={itemCategorie}
                      onChange={(e) => { setItemCategorie(e.target.value) }}
                    >
                      <MenuItem value="Toiletries">Food</MenuItem>
                      <MenuItem value="Electronics">Electronics</MenuItem>
                      <MenuItem value="Breakfast">Breakfast</MenuItem>
                    </Select>
                  </FormControl>

                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="ItemName"
                    required="true"
                    fullWidth
                    id="itemName"
                    label="Enter the Item's name"
                    autoFocus
                    value={itemName}
                    onChange={(e) => { setItemName(e.target.value) }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="itemDecription"
                    required="true"
                    fullWidth
                    multiline
                    rows={3}
                    id="itemDecription"
                    label="A brief description of the Item"
                    value={itemDescription}
                    onChange={(e) => { setItemDescription(e.target.value) }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(event) => { saveItem(event, itemName, itemDescription, itemCategorie, itemShoppinlist) }}
              >
                Save Item
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={8}>
            <EnhancedTable />
          </Grid>
        </Grid>
      </div >

    </div >

  )
};
export default NewItem;
