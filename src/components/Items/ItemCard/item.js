import React, {useState} from 'react';
import Box from '@mui/system/Box/Box';
import {Card, CardMedia, CardContent, CardActions, Typography} from "@material-ui/core";

import useStyles from './styles';
import {Favorite, FavoriteBorderOutlined} from "@material-ui/icons";

const Item = ({ item, selectedItems }) => {

    if(!item.isSelected) {
        item.isSelected = false;
    }

    const classes = useStyles();

    const [isSelected, setIsSelected] = useState(item.isSelected);

    const onSelected = () => {
        if(!isSelected) {
            selectedItems.push(item);
            item.isSelected = true;
        } else {
            let itemIndex = selectedItems.findIndex(i => i.id === item.id);
            selectedItems.splice(itemIndex, 1);
            item.isSelected = false;
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
                </div>
              <Typography variant={'body2'} color={'textSecondary'} className={classes.text}>{item.description}</Typography>
      </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
              <Typography variant={'h5'}>
                  {item.price}₪
              </Typography>
              {item.isSold && <Box
                  sx={{
                      paddingRight: '10px',
                      backgroundColor: '#E87171',
                      height: '26px',
                      width: '71px',
                      justifyContent: 'center',
                      borderRadius: '53px',
                      display: 'flex',
                      alignItems: 'center',
                      color: 'white',
                      fontFamily: 'Assistant',
                      fontSize: '13px',
                      fontWeight: '700'
                  }}
              >
                  נמכר
              </Box>}
              {item.isAvailableInJune && <Box
                  sx={{
                      paddingLeft: '10px',
                      backgroundColor: '#79CCFB',
                      borderRadius: '53px',
                      whiteSpace: 'pre',
                      justifyContent: 'center',
                      height: '26px',
                      width: '87px',
                      display: 'flex',
                      alignItems: 'center',
                      color: 'white',
                      fontFamily: 'Assistant',
                      fontSize: '13px',
                      fontWeight: '700'
                  }}
              >
                  זמין רק ביוני
              </Box>}
          {!item.isSold && isSelected ?  <Favorite onClick={onSelected}/> : <FavoriteBorderOutlined onClick={onSelected}/> }
          </CardActions>
      </Card></>
  )
}

export default Item;