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
import DeleteIcon from '@mui/icons-material/Delete';
import db from '../../../firebase_config';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';


export default function EnhancedTable({ shoppingId, shopping }) {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(false);

    // get the connection with firebase for the items collection
    const itemsRef = db.collection("items").where("shoppingId", "==", shoppingId);


    const deleteItem = async (e, ID) => {
        console.log("delete")
        await deleteDoc(doc(db, "items", ID));
    };

    // get the items from the db
    function getItems() {
        itemsRef.onSnapshot(function (querySnapshot) {
            let items = []
            querySnapshot.docs.map((doc) => (items.push({
                id: doc.id,
                name: doc.data().name,
                shoppingId: doc.data().shoppingId,
                description: doc.data().description,
                status: doc.data().status
            })))
            setItems(items)
        });
    }
    // change the state of the item 
    function changeState(e, id) {
        e.preventDefault();
        db.doc(id).update({ status: !doc.data().status });
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <Box>
            <Paper elevation={1}>
                <Typography
                    variant="h6"
                    padding={1}
                    bgcolor="#fdfdfd"
                    color="secondary"
                >
                    List of shopping items
                </Typography>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item Name</TableCell>
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
                                    <TableCell>{item.shoppingId}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <Grid item xs={4}>
                                            <Button
                                                onClick={(e) => deleteItem(e, item.id)}
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button
                                                onClick={(e) => {
                                                    changeState(
                                                        e,
                                                        item.id
                                                    );
                                                }}
                                            >
                                                <Checkbox />
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
