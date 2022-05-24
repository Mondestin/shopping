import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import NewItem from '../../components/Items/Form/newitem'
import EnhancedTable from '../../components/Items/List/ItemTable'

const Items = () => {
    const { shoppingId } = useParams();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} sx={{ mt: 3 }}>
                <NewItem shoppingId={shoppingId} />
            </Grid>
            <Grid item xs={12} sm={8}>
                <EnhancedTable shoppingId={shoppingId} />
            </Grid>
        </Grid>
    )
}
export default Items