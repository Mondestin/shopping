import { Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import CreateShoppingButton from '../Button/CreateShoppingButton';

const NewShoppingForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

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
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            />
                        </Grid>
                    </Grid>
                </Typography>
            </CardContent>
            <CardActions>
                <CreateShoppingButton name={name} description={description} />
            </CardActions>
        </Card>
    );
}

export default NewShoppingForm