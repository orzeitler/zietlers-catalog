import React from 'react';
import { Grid } from "@material-ui/core";
import chair from '../../images/chair.webp'
import table from '../../images/table.jpeg'
import Item from "./ItemCard/item";
import useStyles from './styles';

const Items = [
    {id: '1', name: 'table', description: 'nice table from ikea', price: 200, image: table, isSold: false, isAvailableInJune: false },
    {id: '2', name: 'chair', description: 'chair from ikea', price: 50, image: chair, isSold: false, isAvailableInJune: true },
    {id: '3', name: 'table', description: 'nice table from ikea', price: 200, image: table, isSold: false,},
    {id: '4', name: 'chair', description: 'chair from ikea', price: 50, image: chair, isSold: true, isAvailableInJune: true}
]

const ItemSlider = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justifyContent='center' spacing={4} >
                {Items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Item item={item}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default ItemSlider;