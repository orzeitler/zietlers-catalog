import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography} from "@material-ui/core";

import useStyles from './styles';

const Item = ({ item }) => {
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
            //this is where add to favorites go
      </CardActions>
      </Card></>
  )
}

export default Item;