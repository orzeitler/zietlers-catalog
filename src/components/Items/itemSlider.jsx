import React from 'react';
import { Grid } from "@material-ui/core";
import Item from "./ItemCard/item";
import useStyles from './styles';


const ItemSlider = ({Items, selectedItems}) => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container justifyContent='center' spacing={4} >
                {Items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Item item={item} selectedItems={selectedItems}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ItemSlider;