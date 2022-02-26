import React from 'react';
import Box from '@mui/system/Box/Box';
import {Card, CardMedia, CardContent, CardActions, Typography} from "@material-ui/core";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
                    {item.isSold && <Box
                        sx={{
                            paddingRight: '10px',
                            backgroundColor: 'red',
                            borderRadius: '5px',
                            fontWeight: 'medium',
                            display: 'flex',
                            fontSize: 12,
                            alignItems: 'center',
                            '& svg': {
                                fontSize: 21,
                                mr: 0.5,
                            },
                        }}
                    >
                        <ErrorOutlineIcon/>
                        נמכר
                    </Box>}
                    {item.isAvailableInJune && <Box
                        sx={{
                            paddingRight: '10px',
                            backgroundColor: 'orange',
                            borderRadius: '5px',
                            fontWeight: 'medium',
                            display: 'flex',
                            fontSize: 12,
                            alignItems: 'center',
                            '& svg': {
                                fontSize: 21,
                                mr: 0.5,
                            },
                        }}
                    >
                        <ErrorOutlineIcon/>
                        זמין רק במאי
                    </Box>}
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