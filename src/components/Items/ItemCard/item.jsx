import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";

import useStyles from './styles';
import {AddShoppingCart} from "@material-ui/icons";

const Item = ({ item, onAddToCart }) => {
    const classes = useStyles()

  return (
      <><Card className={classes.root}>
          <CardMedia className={classes.media} image={item.image} title={item.name}/>
          <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant={'h5'} gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography variant={'h5'}>
                        {item.price}
                    </Typography>
                </div>
              <Typography variant={'body2'} color={'textSecondary'}>{item.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label={'Add to Cart'} onClick={() => onAddToCart(item)}>
              <AddShoppingCart/>
          </IconButton>
      </CardActions>
      </Card></>
  )
}

export default Item;