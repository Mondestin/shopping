import { Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import CreateShoppingButton from '../Button/CreateShoppingButton';
import db from "../../../firebase_config";

const NewShoppingForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const saveItem = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "shoppings"), {
            name: name,
            description: description,
            date: Timestamp.fromDate(new Date()),
        });
    };



    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    Create new shopping
                </Typography>
                <Typography variant="body">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                autoFocus
                                name="name"
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
                                name="description"
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            />
                        </Grid>
                    </Grid>
                </Typography>
            </CardContent>
            <CardActions>
                <CreateShoppingButton name={name} saveItem={saveItem} description={description} />
            </CardActions>
        </Card>
    );
}

export default NewShoppingForm