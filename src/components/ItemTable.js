import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import db from '../firebase_config';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



export default function EnhancedTable() {
    const [items, setItems] = useState([]);

    // get the connection with firebase for the items collection
    const itemsRef = db.collection("items");


    // delete the item from the db
    function deleteItem(event, id) {
        event.preventDefault();
        db.doc(id).delete();
    }


    useEffect(() => {
        getItems();
    })
    // get the items from the db
    function getItems() {
        itemsRef.onSnapshot(function (querySnapshot) {
            setItems(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    categorie: doc.data().categorie,
                    shoppinlist: doc.data().shoppinlist,
                    description: doc.data().description,
                    status: doc.data().status
                }))
            )
        });
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Typography
                     variant="h6"
                     id="tableTitle"
                     component="div"
                     padding={1}
                     bgcolor= "#f7f7f7"
                >
                    List of Items
                </Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Categorie</TableCell>
                                <TableCell>Shopping List</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell>{item.categorie}</TableCell>
                                    <TableCell>{item.shoppinlist}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <Grid item xs={8}>
                                            <Button
                                                onClick={(event) => { deleteItem(event, item.id) }}
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </Grid>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}
