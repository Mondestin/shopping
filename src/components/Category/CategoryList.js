import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import firebase from "../../firebase_config";

const CategoryList = ({itemCategorie, setItemCategorie}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryRef = firebase.firestore().collection("categories");

  const getCategories = () =>
    categoryRef.onSnapshot((querySnapshot) => {
      setLoading(true);
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc);
      });
      setCategories(items);
      setLoading(false);
    });

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  return (
	<Grid item xs={12} sm={6}>
	<FormControl required sx={{ width: "100%" }}>
	  <InputLabel id="demo-simple-select-autowidth-label">
		Category
	  </InputLabel>
	  <Select
		labelId="demo-simple-select-autowidth-label"
		id="demo-simple-select-autowidth"
		required
		fullWidth
		label="Catetory"
		name="itemCategorie"
		value={itemCategorie}
		onChange={(e) => {
		  setItemCategorie(e.target.value);
		}}
	  >
	  {categories.map((category) => (
		<MenuItem value={category.data().name}>{category.data().name}</MenuItem>
		))}
	  </Select>
	</FormControl>
  </Grid>
  );
};

export default CategoryList;