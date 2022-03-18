import React, {useState} from 'react';
import Box from '@mui/system/Box/Box';
import {Card, CardMedia, CardContent, CardActions, Typography} from "@material-ui/core";

import useStyles from './styles';
import {Favorite, FavoriteBorderOutlined, WhatsApp} from "@material-ui/icons";
import {RiWhatsappFill} from "react-icons/ri";

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

    const getSelectedItem = () => {
            let resultString = ` היי! ראיתי את הקטלוג המגניב והתעניינתי ב-${item.name}`
            return resultString.replace(/' '/g, "%20");
    }

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
              {item.link && <a href={item.link}><Typography className={classes.linkTo}>כמו זה אבל חדש</Typography></a>}
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
              <div>
                  <a href={`https://api.whatsapp.com/send?phone=972542323392&text=${getSelectedItem()}`} target="_blank">
                  {!item.isSold ?  <RiWhatsappFill className={classes.whatsapp} onClick={()=>{}} size={25}/> : <RiWhatsappFill className={classes.disabledWhatsapp} size={25}/> }
                  </a>
                    {!item.isSold && isSelected ?  <Favorite onClick={onSelected} className={classes.fullHeartIcon}/> : <Favorite onClick={onSelected} className={classes.greyHeartIcon}/> }
              </div>
          </CardActions>
      </Card></>
  )
}

export default Item;