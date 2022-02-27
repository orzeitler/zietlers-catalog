import React from 'react';
import { Grid } from "@material-ui/core";
import chair from '../../images/chair.webp'
import table from '../../images/table.jpeg'
import Item from "./ItemCard/item";
import useStyles from './styles';

const Items = [
    {id: '1', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false, isAvailableInJune: false },
    {id: '2', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה' , price: 50, image: chair, isSold: false, isAvailableInJune: true },
    {id: '3', name: 'שולחן אוכל מתקפל', description: 'שולחן אוכל מאיקיאה, בלה בלה בלה', price: 200, image: table, isSold: false,},
    {id: '4', name: 'כיסא', description: 'כיסא מאיקיא מדגם kjzh בצבע לבן - ישנם שתיים כאלה', price: 50, image: chair, isSold: true, isAvailableInJune: true}
]

const ItemSlider = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
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