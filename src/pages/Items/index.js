import { Grid } from '@mui/material'
import React from 'react'
import NewItem from '../../components/Items/Form/newitem'
import EnhancedTable from '../../components/Items/List/ItemTable'

const Items = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} sx={{ mt: 3 }}>
                <NewItem />
            </Grid>
            <Grid item xs={12} sm={8}>
                <EnhancedTable />
            </Grid>
        </Grid>
    )
}

export default Items