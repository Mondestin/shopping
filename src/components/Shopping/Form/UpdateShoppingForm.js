import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import UpdateShoppingButton from "../Button/UpdateShoppingButton";
import { doc, updateDoc } from "firebase/firestore";
import db from "../../../firebase_config";

const UpdateShoppingForm = () => {
  const [shoppings, setShoppings] = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  let shopping = shoppings.filter((shopping) => shopping.id === id)[0].data();

  const [name, setName] = useState(shopping.name)
  const [description, setDescription] = useState(shopping.description)
  const [nameError, setNameError] = useState("")
  const [descriptionError, setDescriptionError] = useState("")
  const [verifyName, setVerifyName] = useState(true)
  const [verifyDescription, setVerifyDescription] = useState(true)

  const handleNameInput = (value) => {
    setName(value)
    if (value !== "") {
      setVerifyName(true)
      setNameError("")
    }
    else {
      setVerifyName(false)
      setNameError("Please fill the name.")
    }
  }

  const handleDescriptionInput = (value) => {
    setDescription(value)
    if (value !== "") {
      setVerifyDescription(true)
      setDescriptionError("")
    }
    else {
      setVerifyDescription(false)
      setDescriptionError("Please fill the description.")
    }
  }

  const updateShopping = async (e) => {
    e.preventDefault();
    if (handleSubmit()) {
      const shoppingRef = doc(db, "shoppings", id);
      await updateDoc(shoppingRef, {
        name: name,
        description: description
      })
      // Redirecting to the create shopping form 
      // navigate('/shoppings/new')
    }
  };

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case "name":
        handleNameInput(target.value)
        break;
      case "description":
        handleDescriptionInput(target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = () => {
    if (name === "") {
      setNameError("Please fill the name.")
      setVerifyName(false)
    }
    if (description === "") {
      setDescriptionError("Please fill the description.")
      setVerifyDescription(false)
    }
    if (verifyName && verifyDescription)
      return true
    return false
  }

  /**
   * Detect the id parameters changing
   * Repopulate the edit form with the current shopping clicked to edit
   */
  useEffect(() => {
    setName(shopping.name)
    setDescription(shopping.description)
    setVerifyName(true)
    setVerifyDescription(true)
    setNameError("")
    setDescriptionError("")
  }, [id])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Edit shopping informations
        </Typography>
        <Typography variant="body">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                error={!verifyName}
                required
                fullWidth
                name="name"
                label="Name"
                value={name}
                autoFocus
                onChange={(e) => {
                  handleInputChange(e)
                }}
                helperText={nameError}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                error={!verifyDescription}
                required
                fullWidth
                name="description"
                label="Description"
                value={description}
                onChange={(e) => {
                  handleInputChange(e)
                }}
                helperText={descriptionError}
              />
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <UpdateShoppingButton shopping={{ id, name, description }} updateShopping={updateShopping} />
      </CardActions>
    </Card>
  );
};

export default UpdateShoppingForm;
