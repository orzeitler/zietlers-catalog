import React, {useState} from 'react';
import Box from '@mui/system/Box/Box';
import {Card, CardMedia, CardContent, CardActions, Typography} from "@material-ui/core";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import useStyles from './styles';
import {Favorite, FavoriteBorderOutlined} from "@material-ui/icons";

const Item = ({ item, selectedItems }) => {
    const classes = useStyles();

    const [isSelected, setIsSelected] = useState(false);

    const onSelected = () => {
        if(!isSelected) {
            selectedItems.push(item);
        } else {
            let itemIndex = selectedItems.findIndex(i => i.id === item.id);
            selectedItems.splice(itemIndex, 1);
        }
        setIsSelected(!isSelected);
    };

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
                            paddingLeft: '10px',
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
                            paddingLeft: '10px',
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
                        זמין רק ביוני
                    </Box>}
                    <Typography variant={'h5'}>
                        {item.price}₪
                    </Typography>
                </div>
              <Typography variant={'body2'} color={'textSecondary'} className={classes.text}>{item.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
          {isSelected ?  <Favorite onClick={onSelected}/> : <FavoriteBorderOutlined onClick={onSelected}/> }
      </CardActions>
      </Card></>
  )
}

export default Item;