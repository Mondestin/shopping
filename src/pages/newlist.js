import '../App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import firebase from '../firebase_config';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import EnhancedTable from '../components/Table';

const NewItem = () => {
  const [itemInput, setItemInput] = useState("");
  const [items, setItems] = useState([]);
  const [shoppigListId, setShoppigListId] = React.useState('');
  const Input = styled('input')({
    display: 'none',
  });


  const db = firebase.firestore().collection("items");


  const handleShoppingListChange = (event) => {
    setShoppigListId(event.target.value);
  };


  useEffect(() => {
    getItems();
  }, [])
  // get the items from the db
  function getItems() {
    db.onSnapshot(function (querySnapshot) {
      setItems(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data().item,
          inprogress: doc.data().inprogress
        }))
      )
    });
  }

  // save the item in the db
  function saveItem(event, itemInput) {
    event.preventDefault();

    console.log(itemInput);
    db.add({
      inprogress: true,
      item: itemInput
    });
    setItemInput("");
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
          <Grid item xs={12} sm={5} sx={{ mt: 10 }}>
            <form>
              <Grid container spacing={2}>
                <FormControl required sx={{ m: 2, minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Shopping List</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={shoppigListId}
                    onChange={handleShoppingListChange}
                    label="Shopping List"
                  >
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="categoryId"
                    label="Catetory"
                    name="itemCategory"
                  />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <TextField
                    name="ItemName"
                    required
                    fullWidth
                    id="itemName"
                    label="Enter the Item's name"
                    autoFocus
                    value={itemInput}
                    onChange={(e) => { setItemInput(e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    name="budget"
                    required
                    fullWidth
                    id="itemName"
                    label="Enter an estimated price"
                    autoFocus
                    value={itemInput}
                    onChange={(e) => { setItemInput(e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={3}
                    id="itemDecription"
                    label="A brief description of the Item"
                    name="itemDecription"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save Item
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={7}>
            <EnhancedTable />
          </Grid>
        </Grid>
      </div >
    </div >
  )
};
export default NewItem;
