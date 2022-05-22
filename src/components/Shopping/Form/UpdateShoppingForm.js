import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useOutletContext, useParams } from "react-router-dom";
import UpdateShoppingButton from "../Button/UpdateShoppingButton";
const UpdateShoppingForm = () => {
  const [shoppings, setShoppings] = useOutletContext();
  const { id } = useParams();
  let shopping = shoppings.filter((shopping) => shopping.id === id)[0].data();
  const [name, setName] = useState(shopping.name)
  const [description, setDescription] = useState(shopping.description)

  /**
   * Detect the id parameters changing
   * Repopulate the edit form with the current shopping clicked to edit
   */
  useEffect(() => {
    setName(shopping.name)
    setDescription(shopping.description)
  }, [id])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Edit shopping information
        </Typography>
        <Typography variant="body">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                label="Name"
                value={name}
                autoFocus
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <UpdateShoppingButton />
      </CardActions>
    </Card>
  );
};

export default UpdateShoppingForm;
